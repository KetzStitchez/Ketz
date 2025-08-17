
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-cyan-500/10">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-3xl font-bold text-white tracking-wider">
          <a href="#" className="font-heading hover:text-cyan-400 transition-colors duration-300">
            Ketz Stitchez
          </a>
        </div>
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About</a>
          <a href="#music" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Music</a>
          <a href="#video" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Video</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
