
import React from 'react';
import { DISCOGRAPHY, PRODUCTION_CREDITS } from '../constants';
import { type Album, type Credit, type Link, Platform } from '../types';
import AppleMusicIcon from './icons/AppleMusicIcon';
import SoundCloudIcon from './icons/SoundCloudIcon';
import BandcampIcon from './icons/BandcampIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import MusicNoteIcon from './icons/MusicNoteIcon';

const PlatformIcon: React.FC<{ platform: Platform }> = ({ platform }) => {
  const iconClasses = "w-6 h-6";
  switch (platform) {
    case Platform.AppleMusic:
      return <AppleMusicIcon className={iconClasses} />;
    case Platform.SoundCloud:
      return <SoundCloudIcon className={iconClasses} />;
    case Platform.Bandcamp:
      return <BandcampIcon className={iconClasses} />;
    default:
      return <ExternalLinkIcon className={iconClasses} />;
  }
};

const AlbumCard: React.FC<{ album: Album }> = ({ album }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/50">
    <div className="p-6">
      <p className="text-gray-400 text-sm mb-1">{album.year}</p>
      <h3 className="text-2xl font-bold text-white">{album.title}</h3>
      {album.subtitle && <p className="text-cyan-400 font-medium mb-4">{album.subtitle}</p>}
      <p className="text-gray-400 mb-4">{album.trackCount} Tracks</p>
      <div className="mb-4">
        <p className="font-semibold text-gray-300 mb-2">Highlights:</p>
        <ul className="list-disc list-inside text-gray-400 text-sm">
          {album.tracks.slice(0, 3).map(track => <li key={track}>{track}</li>)}
        </ul>
      </div>
      <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-700/50">
        {album.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen on ${link.platform}`}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <PlatformIcon platform={link.platform} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

const CreditItem: React.FC<{ credit: Credit }> = ({ credit }) => (
  <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-700/50 last:border-b-0">
    <div>
      <h4 className="text-xl font-semibold text-white flex items-center gap-3">
        <MusicNoteIcon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
        {credit.title}
      </h4>
      <p className="text-gray-400 pl-8">{credit.artist} • {credit.year} • <span className="text-cyan-400">{credit.role}</span></p>
    </div>
    {credit.links.length > 0 && (
      <div className="flex space-x-3 mt-3 sm:mt-0 sm:pl-4 self-start sm:self-center">
         {credit.links.map((link) => (
             <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={`View on ${link.platform}`}
             >
                <PlatformIcon platform={link.platform} />
            </a>
         ))}
      </div>
    )}
  </li>
);


const Music: React.FC = () => {
  return (
    <section id="music" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white tracking-tight font-heading">Discography</h2>
          <p className="mt-2 text-lg text-gray-400">Beat Tapes & Instrumental Albums</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {DISCOGRAPHY.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white tracking-tight font-heading">Production Credits</h2>
          <p className="mt-2 text-lg text-gray-400">Crafting sounds for other artists.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg p-6">
          <ul>
            {PRODUCTION_CREDITS.map((credit) => (
              <CreditItem key={credit.id} credit={credit} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Music;
