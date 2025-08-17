
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { type Link, Platform } from '../types';
import AppleMusicIcon from './icons/AppleMusicIcon';
import SoundCloudIcon from './icons/SoundCloudIcon';
import BandcampIcon from './icons/BandcampIcon';
import YouTubeIcon from './icons/YouTubeIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import WaveformIcon from './icons/WaveformIcon';


const PlatformIcon: React.FC<{ platform: Platform }> = ({ platform }) => {
  const iconClasses = "w-7 h-7";
  switch (platform) {
    case Platform.AppleMusic:
      return <AppleMusicIcon className={iconClasses} />;
    case Platform.SoundCloud:
      return <SoundCloudIcon className={iconClasses} />;
    case Platform.Bandcamp:
      return <BandcampIcon className={iconClasses} />;
    case Platform.YouTube:
        return <YouTubeIcon className={iconClasses} />
    default:
      return <ExternalLinkIcon className={iconClasses} />;
  }
};


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50 pt-12">
       <div className="container mx-auto px-6">
         <WaveformIcon className="w-full max-w-md mx-auto h-16 text-gray-700" />
       </div>
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-white mb-4 font-heading">Connect with Ketz Stitchez</h3>
          <div className="flex space-x-6 mb-6">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.url}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Find Ketz Stitchez on ${link.platform}`}
                className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
              >
                <PlatformIcon platform={link.platform} />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Ketz Stitchez. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
