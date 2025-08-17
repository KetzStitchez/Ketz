import React from 'react';
import { HERO_IMAGE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl shadow-cyan-500/5 overflow-hidden md:flex items-center">
          <div className="p-8 md:p-6 flex-shrink-0 flex justify-center">
            <img 
              src={HERO_IMAGE_URL} 
              alt="Ketz Stitchez" 
              className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-gray-700 shadow-lg" 
            />
          </div>
          <div className="p-8 pt-0 md:pt-8 md:p-10">
            <h2 className="text-4xl font-bold text-white mb-2 font-heading text-center md:text-left">The Architect of Sound & Vision</h2>
            <p className="text-cyan-400 font-medium mb-6 text-center md:text-left">A Multi-talented Creative Force</p>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Ketz Stitchez is a dynamic music producer and video editor known for his signature boom-bap and hip-hop soundscapes. Through his HVS Stuz label, he has crafted a compelling discography, including the acclaimed "Death Beatz" instrumental series. His production prowess extends beyond his own projects, lending his unique touch to a variety of singles for artists like Kefix and Thuli Toolz.
              </p>
              <p>
                Beyond the audio realm, Ketz brings stories to life under his video editing banner, Cutshotz Visualz. As a self-taught graphic designer and a meticulous editor, he commands both the sonic and visual elements of modern media, establishing himself as a versatile and indispensable creative partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;