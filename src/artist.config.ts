export const SITE_NAME = "PUSHAGOLD";
export const SITE_DESCRIPTION = "The Best Clipse / Pusha T Tracker In The World!";
export const SITE_URL = "https://pushagold.pages.dev/";
export const OG_IMAGE_URL = "";
export const STORAGE_PREFIX = "pushagold_";
export const HARDCODED_SHEET_ID = "";
export const HARDCODED_SHEET_GID = "";

export function getArtistName(eraName: string | undefined): string {
  if (!eraName) return "Pusha T";
  const clipseEras = ["Exclusive Audio Footage","Lord Willin'","Hell Hath No Fury","Til The Casket Drops","As God As My Witness","Let God Sort 'Em Out"];
  return clipseEras.includes(eraName) ? "Clipse" : "Pusha T";
}

export const CUSTOM_IMAGES: Record<string, string> = {
  "Exclusive Audio Footage": "https://i.ibb.co/FLqCKDtg/IMG-4313.jpg",
  "Lord Willin'": "https://i.ibb.co/FLqCKDtg/IMG-4313.jpg",
  "Hell Hath No Fury": "https://i.ibb.co/KStjJ5d/IMG-4322.jpg",
  "Til The Casket Drops": "https://i.ibb.co/pBnxSb7c/IMG-4329.jpg",
  "Fear of God": "https://i.ibb.co/3YWv1WZb/IMG-4335.jpg",
  "Fear of God II": "https://i.ibb.co/RT8zDxyf/IMG-4349.jpg",
  "Wrath Of Caine": "https://i.ibb.co/twmTZ0yB/IMG-4354.jpg",
  "My Name Is My Name": "https://i.ibb.co/FLqCKDtg/IMG-4313.jpg",
  "As God As My Witness": "https://i.ibb.co/FLqCKDtg/IMG-4313.jpg",
  "Darkest Before Dawn": "https://i.ibb.co/3YWv1WZb/IMG-4335.jpg",
  "Blowbama": "https://i.ibb.co/1fX0N137/Daytona.jpg",
  "DAYTONA": "https://i.ibb.co/1fX0N137/Daytona.jpg",
  "It's Almost Dry": "https://i.ibb.co/FLqCKDtg/IMG-4313.jpg",
  "Let God Sort 'Em Out": "https://i.ibb.co/FLqCKDtg/IMG-4313.jpg",
  "LP5": "https://i.ibb.co/FLqCKDtg/IMG-4313.jpg",
};

export const ALBUM_RELEASE_DATES: Record<string, string> = {
  "Exclusive Audio Footage": "??/??/1999",
  "Lord Willin'": "08/20/2002",
  "Hell Hath No Fury": "11/27/2006",
  "Til The Casket Drops": "12/08/2009",
  "Fear of God": "03/11/2011",
  "Fear of God II": "11/08/2011",
  "Wrath Of Caine": "01/28/2013",
  "My Name Is My Name": "10/08/2013",
  "As God As My Witness": "??/??/????",
  "Darkest Before Dawn": "12/18/2015",
  "Blowbama": "??/??/????",
  "DAYTONA": "05/25/2018",
  "It's Almost Dry": "04/22/2022",
  "Let God Sort 'Em Out": "07/11/2025",
  "LP5": "??/??/????",
};

export const HIDDEN_ALBUMS: string[] = [];

export const ALBUM_DESCRIPTIONS: Record<string, string> = {
  "Exclusive Audio Footage": "In 1994 the brothers started recording together. They signed with Elektra Records in 1996. The Clipse recorded their debut album, Exclusive Audio Footage, entirely produced by The Neptunes. The single \"The Funeral\" failed to chart and the album was shelved.",
  "Lord Willin'": "Lord Willin' is the debut studio album by Clipse, released August 20, 2002. Entirely produced by The Neptunes, it was critically acclaimed for its minimalist production and vivid drug-dealing lyricism.",
  "Hell Hath No Fury": "Hell Hath No Fury is the second studio album by Clipse, released November 27, 2006. After years of label disputes, it was released to widespread critical acclaim and is widely regarded as one of the greatest hip-hop albums of the 2000s.",
  "Til The Casket Drops": "Til the Casket Drops is the third and final studio album by Clipse, released December 8, 2009. Features production from The Neptunes, Swizz Beatz, DJ Khalil, and others.",
  "Fear of God": "Fear of God is Pusha T's debut mixtape, released March 11, 2011. It marked his first official solo release and featured production from Kanye West, The Neptunes, and others.",
  "Fear of God II": "Fear of God II: Let Us Pray is Pusha T's second mixtape, released November 8, 2011.",
  "Wrath Of Caine": "Wrath of Caine is Pusha T's third mixtape, released January 28, 2013. Features production from Kanye West, Hit-Boy, The Neptunes, and others.",
  "My Name Is My Name": "My Name Is My Name is Pusha T's debut studio album, released October 8, 2013. Executive produced by Kanye West.",
  "As God As My Witness": "An announced but unreleased Clipse album. On February 7th, 2013, Pusha T announced a new Clipse album titled \"As God As My Witness\", but nothing materialized.",
  "Darkest Before Dawn": "King Push – Darkest Before Dawn: The Prelude is Pusha T's second studio album, released December 18, 2015.",
  "Blowbama": "Sessions between Darkest Before Dawn and DAYTONA, during which Pusha T worked closely with Kanye West on what was originally titled Blobama/King Push before evolving into DAYTONA.",
  "DAYTONA": "DAYTONA is Pusha T's third studio album, released May 25, 2018. Entirely produced by Kanye West, the album references the Daytona 500 and the drug trade.",
  "It's Almost Dry": "It's Almost Dry is Pusha T's fourth studio album, released April 22, 2022. Production split between Kanye West and Pharrell Williams.",
  "Let God Sort 'Em Out": "Let God Sort 'Em Out is the fifth studio album by Clipse, reuniting Pusha T and No Malice. Released July 11, 2025 via Roc Nation.",
  "LP5": "Pusha T's anticipated fifth solo studio album.",
};

export const ALBUM_SONG_COUNTS: Record<string, number> = {
  "Exclusive Audio Footage": 25,
  "Lord Willin'": 20,
  "Hell Hath No Fury": 15,
  "Til The Casket Drops": 15,
  "Fear of God": 20,
  "Fear of God II": 15,
  "Wrath Of Caine": 40,
  "My Name Is My Name": 20,
  "As God As My Witness": 5,
  "Darkest Before Dawn": 20,
  "Blowbama": 85,
  "DAYTONA": 10,
  "It's Almost Dry": 25,
  "Let God Sort 'Em Out": 15,
  "LP5": 5,
};

export const CUSTOM_ALBUM_INFO: Record<string, string[]> = {};

export const ERA_MAPPINGS: Record<string, string> = {};

export const TAG_MAP: Record<string, string> = {
  '⭐': 'Best Of', '🏆': 'Grails', '🥇': 'Wanted', '🏅': 'Wanted',
  '✨': 'Special', '💛': 'By PUSHAGOLD', '🗑️': 'Worst Of', '🗑': 'Worst Of',
  '🚮': 'Unwanted', '🤖': 'AI', '⁉️': 'Lost Media', '⁉': 'Lost Media', '❓': 'Unknown',
};

export const TAG_TOOLTIP_MAP: Record<string, string> = {
  'Best Of': 'some of the best leaks hosted on the tracker.',
  'Grails': 'the most wanted songs that have not yet leaked in full.',
  'Wanted': 'Songs that are wanted, but not as wanted as "Grails".',
  'Special': 'special songs that are not good enough to be in Best Of, but still deserve to be highlighted.',
  'Worst Of': 'some of the worst leaks hosted on the tracker.',
  'Unwanted': "Songs that we don't want to leak in full.",
  'AI': 'Track contains AI vocals.',
  'Lost Media': "Is currently lost, or we don't have a link to the media.",
  'By PUSHAGOLD': 'Leaks & Songs added by the owner of the site.',
};

export function buildArtistTag(_eraName: string | undefined): string { return ''; }
export function handleDownloadFile(_url: string): void {}
