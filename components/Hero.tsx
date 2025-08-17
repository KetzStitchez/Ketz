import React from 'react';
import { HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-4 font-heading text-glow">
          Ketz Stitchez
        </h1>
        <div className="flex justify-center items-center space-x-2 md:space-x-4 text-lg md:text-2xl font-light text-cyan-300">
          <span>Music Producer</span>
          <span className="text-cyan-400/50 text-3xl">•</span>
          <span>Beat Maker</span>
          <span className="text-cyan-400/50 text-3xl">•</span>
          <span>Video Editor</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;