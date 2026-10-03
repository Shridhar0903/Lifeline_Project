import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import QuickServicesSection from './components/QuickServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <QuickServicesSection/>
      <HowItWorksSection/>
      <Footer/>
     
    </div>
  );
};

export default App;