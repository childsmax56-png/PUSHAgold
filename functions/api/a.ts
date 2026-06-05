import { parseCSV, csvResponse } from './_csvParser';

function parseSongName(raw: string): { name: string; extra: string | undefined } {
  const newline = raw.indexOf('\n');
  if (newline === -1) return { name: raw.trim(), extra: undefined };
  const name = raw.substring(0, newline).trim();
  const extra = raw.substring(newline).trim().replace(/^\n+/, '') || undefined;
  return { name, extra };
}

// App.tsx ERA_MAPPINGS renames these keys after receiving the response, which moves them
// to the end of the object and breaks ordering. Return the final names directly so
// App.tsx sees them as already-mapped and leaves them in place.
const ERA_NAME_MAP: Record<string, string> = {
  "Fear of God II: Let Us Pray": "Fear of God II",
  "King Push – Darkest Before Dawn: The Prelude": "Darkest Before Dawn",
};

function mapEraName(name: string): string {
  return ERA_NAME_MAP[name] ?? name;
}

export const onRequestGet: PagesFunction = async (context) => {
  try {
    const url = new URL(context.request.url);
    const csvUrl = `${url.origin}/data/unreleased.csv`;

    const res = await fetch(csvUrl);
    if (!res.ok) return new Response('CSV not found', { status: 404 });

    const text = await res.text();
    const rows = parseCSV(text);

    const NAME_KEY = 'Name\n(Join The Discord!)';
    const eras: Record<string, any> = {};

    // First pass: collect real era names from header rows (mapped to final names).
    // Header rows have newlines in the Era field (file counts). Stats rows also have newlines
    // but their Name field starts with a digit — skip those.
    // First pass: collect era names from header rows + their mapped names
    const validEraNames = new Set<string>();
    for (const row of rows) {
      const eraField = row[‘Era’] ?? ‘’;
      if (!eraField.includes(‘\n’)) continue;
      const { name: eraName } = parseSongName(row[NAME_KEY] ?? ‘’);
      if (eraName && !/^\d+\s/.test(eraName)) {
        validEraNames.add(eraName);
        validEraNames.add(mapEraName(eraName)); // mapped name so short track-row era names match
      }
    }

    // Pre-seed eras with no header row so their track rows are picked up in the second pass
    const PRESEED_ERAS: string[] = [
      "As God As My Witness",
      "It’s Almost Dry",
      "Let God Sort ‘Em Out",
      "Ongoing",
    ];
    for (const name of PRESEED_ERAS) {
      validEraNames.add(name);
      eras[name] = { name, data: { ‘Unreleased Tracks’: [] } };
    }

    // Second pass: build eras and songs
    for (const row of rows) {
      const eraField = row[‘Era’] ?? ‘’;
      const nameField = row[NAME_KEY] ?? ‘’;

      if (eraField.includes(‘\n’)) {
        // Era header row
        const { name: rawName, extra } = parseSongName(nameField);
        if (!rawName || !validEraNames.has(rawName)) continue;
        const eraName = mapEraName(rawName);

        eras[eraName] = {
          name: eraName,
          extra: extra ?? undefined,
          timeline: row[‘Notes’]?.trim() || undefined,
          fileInfo: eraField.split(‘\n’).map((l: string) => l.trim()).filter(Boolean),
          data: { ‘Unreleased Tracks’: [] },
        };
      } else if (eraField && validEraNames.has(eraField.trim())) {
        // Regular song row
        const eraName = mapEraName(eraField.trim());
        if (!eras[eraName]) {
          eras[eraName] = { name: eraName, data: { ‘Unreleased Tracks’: [] } };
        }

        const { name, extra } = parseSongName(nameField);
        const links = (row[‘Link(s)’] ?? ‘’).split(‘\n’).map((l: string) => l.trim()).filter(Boolean);

        eras[eraName].data[‘Unreleased Tracks’].push({
          name,
          extra: extra ?? undefined,
          description: row[‘Notes’] ?? ‘’,
          track_length: row[‘Track Length’] ?? ‘’,
          file_date: row[‘File Date’] ?? ‘’,
          leak_date: row[‘Leak Date’] ?? ‘’,
          available_length: row[‘Available Length’] ?? ‘’,
          quality: row[‘Quality’] ?? ‘’,
          url: links[0] ?? ‘’,
          urls: links,
        });
      }
    }

    // Ensure preseeded eras still exist if the second pass overwrote them with empty data
    for (const name of PRESEED_ERAS) {
      if (!eras[name]) eras[name] = { name, data: { ‘Unreleased Tracks’: [] } };
    }

    const ERA_ORDER = [
      "Exclusive Audio Footage",
      "Lord Willin’",
      "Hell Hath No Fury",
      "Til The Casket Drops",
      "Fear of God",
      "Fear of God II",
      "Wrath Of Caine",
      "My Name Is My Name",
      "As God As My Witness",
      "Darkest Before Dawn",
      "Blowbama",
      "DAYTONA",
      "It’s Almost Dry",
      "Let God Sort ’Em Out",
      "Ongoing",
    ];

    const orderedEras: Record<string, any> = {};
    for (const name of ERA_ORDER) {
      if (eras[name]) orderedEras[name] = eras[name];
    }
    // Append any eras from the CSV not in the order list
    for (const name of Object.keys(eras)) {
      if (!orderedEras[name]) orderedEras[name] = eras[name];
    }

    const trackerData = {
      name: 'PUSHA Gold',
      tabs: ['eras'],
      current_tab: 'eras',
      eras: orderedEras,
    };

    return csvResponse(trackerData);
  } catch (err) {
    return new Response('Failed to build tracker data', { status: 500 });
  }
};
