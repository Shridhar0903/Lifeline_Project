import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
     
    </div>
  );
};

export default App;