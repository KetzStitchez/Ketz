
import React from 'react';
import { VIDEO_PROJECTS } from '../constants';
import PlayIcon from './icons/PlayIcon';
import YouTubeIcon from './icons/YouTubeIcon';

const Video: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white tracking-tight font-heading">Video Editing</h2>
          <p className="mt-2 text-lg text-gray-400">
            Visual Storytelling under <span className="text-cyan-400 font-bold">Cutshotz Visualz</span>
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {VIDEO_PROJECTS.map((project) => (
            <div key={project.id} className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-700 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-5 right-5 text-gray-600/50">
                <PlayIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-cyan-500 font-semibold mb-4">{project.role}</p>
              <p className="text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="https://www.youtube.com/@CutshotzVisualz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-500 transition-colors duration-300 text-lg">
                <YouTubeIcon className="w-7 h-7" />
                Visit Cutshotz Visualz
            </a>
        </div>
      </div>
    </section>
  );
};

export default Video;
