
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Video from './components/Video';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-body antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Music />
        <Video />
      </main>
      <Footer />
    </div>
  );
};

export default App;
