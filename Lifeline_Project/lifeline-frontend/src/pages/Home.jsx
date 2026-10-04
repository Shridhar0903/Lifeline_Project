import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import QuickServicesSection from '../components/QuickServicesSection'
import HowItWorksSection from '../components/HowItWorksSection'

const Home = () => {
  return (
    <div className='w-full'>
       <HeroSection/>
       <AboutSection/>
       <QuickServicesSection/>
       <HowItWorksSection/>
    </div>
  )
}

export default Home

