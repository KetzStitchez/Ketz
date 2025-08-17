
import { Platform, type Album, type Credit, type VideoProject, type Link } from './types';

export const HERO_IMAGE_URL = 'https://storage.googleapis.com/generative-ai-story/user-assets/v1/7d301f53-2d08-410d-8302-3112b26c729c';

export const DISCOGRAPHY: Album[] = [
  {
    id: 1,
    title: 'Death Beatz BeatTape Vol. 1',
    subtitle: '',
    year: 2020,
    trackCount: 13,
    tracks: ['Reality FaceSlap', 'Devilish Era', 'Witchy Tendenciez'],
    links: [
      { platform: Platform.SoundCloud, url: 'https://m.soundcloud.com/ketzstitchez' },
    ],
  },
  {
    id: 2,
    title: 'Death Beatz Vol. 2',
    subtitle: 'The Tone Up',
    year: 2022,
    trackCount: 9,
    tracks: ['Intronic', 'Light Step', 'Kudala'],
    links: [
      { platform: Platform.SoundCloud, url: 'https://m.soundcloud.com/ketzstitchez/sets/death-beatz-vol-2-the-tone-up' },
    ],
  },
  {
    id: 3,
    title: 'Deathbeatz, Vol. 3',
    subtitle: 'BoomBap BeatTape',
    year: 2024,
    trackCount: 9,
    tracks: ['Promises Undone', 'Darkest Deedz', 'Pro Elements'],
    links: [
      { platform: Platform.AppleMusic, url: 'https://music.apple.com/us/album/deathbeatz-vol-3-boombap-beattape/1721528654' },
      { platform: Platform.Bandcamp, url: 'https://hvsstuz.bandcamp.com' },
    ],
  },
];

export const PRODUCTION_CREDITS: Credit[] = [
  {
    id: 1,
    artist: 'Kefix',
    title: 'Various Singles (Get With It, Intando, Yenza Izindlela, etc.)',
    year: 2025,
    role: 'Producer/Label',
    links: [
      { platform: Platform.AppleMusic, url: 'https://music.apple.com/us/artist/kefix/1749219661' },
    ],
  },
  {
    id: 2,
    artist: 'Thuli Toolz',
    title: 'Too Real',
    year: 2024,
    role: 'Co-Writer/Producer',
    links: [
      { platform: Platform.SoundCloud, url: 'https://soundcloud.com/thulitoolz/too-real-thuli-toolz' },
    ],
  },
    {
    id: 3,
    artist: 'SME1UKNW',
    title: 'Most Wanted',
    year: 2020,
    role: 'Producer',
    links: [],
  },
  {
    id: 4,
    artist: 'MajorLee ft. DBlow',
    title: 'How They Do',
    year: 2020,
    role: 'Producer',
    links: [],
  },
];

export const VIDEO_PROJECTS: VideoProject[] = [
    {
        id: 1,
        title: 'Short Stories',
        role: 'Editor',
        description: 'A series of narrative shorts showcasing dynamic editing and storytelling.'
    },
    {
        id: 2,
        title: 'Sekxion 016 Short Story',
        role: 'Editor',
        description: 'An engaging short film project highlighting local talent and stories.'
    }
];


export const SOCIAL_LINKS: Link[] = [
  { platform: Platform.SoundCloud, url: 'https://m.soundcloud.com/ketzstitchez' },
  { platform: Platform.AppleMusic, url: 'https://music.apple.com/us/artist/ketz-stitchez/1531641031' },
  { platform: Platform.Bandcamp, url: 'https://hvsstuz.bandcamp.com' },
  { platform: Platform.YouTube, url: 'https://www.youtube.com/@CutshotzVisualz' },
];