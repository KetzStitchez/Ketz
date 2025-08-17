
export enum Platform {
  SoundCloud = 'SoundCloud',
  AppleMusic = 'Apple Music',
  Bandcamp = 'Bandcamp',
  YouTube = 'YouTube',
  Instagram = 'Instagram',
  Twitter = 'Twitter',
  Audiomack = 'Audiomack',
  ReverbNation = 'ReverbNation'
}

export interface Link {
  platform: Platform;
  url: string;
}

export interface Album {
  id: number;
  title: string;
  subtitle: string;
  year: number;
  trackCount: number;
  tracks: string[];
  links: Link[];
}

export interface Credit {
  id: number;
  artist: string;
  title: string;
  year: number;
  role: string;
  links: Link[];
}

export interface VideoProject {
    id: number;
    title: string;
    description: string;
    role: string;
}
