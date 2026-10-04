import React from 'react'
import heroImg from '../assets/hero-bg2.jpg'

// FontAwesome Icons (fa6) Import केले
import { FaDroplet, FaMagnifyingGlass, FaBolt, FaLocationDot, FaLock } from 'react-icons/fa6'

const HeroSection = () => {
  return (
   <section className='relative bg-gradient-to-b from-red-50 to-white py-12 md:py-16 px-1 overflow-hidden'>

     <div className='max-w-8xl mx-auto px-30'>
      {/* MAIN HERO CONTENT (2-COLUMN GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="text-left z-20">
            {/* Urgent Badge */}
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              Save Lives In Emergenc
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl sm:text-7xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
              Every <br /> Blood Donor Is A <br />
              <span className="text-red-600 underline decoration-red-200 underline-offset-8 inline-flex items-center gap-2">
                LIFESAVER <FaDroplet className="text-red-600 text-4xl sm:text-5xl inline" />
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium max-w-xl">
              Connecting critical patients with voluntary blood donors in real-time. Find registered donors in your city or register today to save a life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 shadow-lg hover:shadow-red-200 transition-all duration-200 flex items-center justify-center gap-3">
                <FaMagnifyingGlass />
                <span>Find Blood Donors</span>
              </button>

              <button className="w-full sm:w-auto bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-200 flex items-center justify-center gap-3">
                <FaDroplet />
                <span>Register as Donor</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Dissolve/Blend Image Effect */}
          <div className="relative flex justify-center items-center">
            {/* Background Soft Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-red-200 rounded-full blur-3xl opacity-40 -z-10"></div>
            
            {/* Gradient Overlay for Dissolving Left Edge */}
           <div className="absolute inset-x-5 left-0 w-4xl md:w-2/3 bg-gradient-to-r from-red-50 via-red-50/60 to-transparent z-10 pointer-events-none h-full"></div>
                  <div className="absolute inset-x-5 left-0 w-4xl md:w-2/3 bg-gradient-to-r from-red-50 via-red-50/60 to-transparent z-10 pointer-events-none h-full"></div>
            <img 
              src={heroImg} 
              alt="Lifeline Blood Donation Banner" 
              className="w-full max-w lg:max-w-xl rounded-2xl object-cover drop-shadow-2xl  transition-transform duration-300 ml-10"
            />
          </div>

        </div>

        {/* FEATURE CARDS WITH FONTAWESOME ICONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto border-t border-gray-100 pt-2">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-xl text-red-600 text-xl">
              <FaBolt />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Instant Connect</h3>
              <p className="text-gray-500 text-sm mt-1">
                Direct contact via call or SMS without any middleman.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-xl text-red-600 text-xl">
              <FaLocationDot />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">City-Based Search</h3>
              <p className="text-gray-500 text-sm mt-1">
                Locate donors in your local area and nearby hospitals easily.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-xl text-red-600 text-xl">
              <FaLock />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Privacy First</h3>
              <p className="text-gray-500 text-sm mt-1">
                Donors hold full control over their availability status.
              </p>
            </div>
          </div>

        </div>
     </div>

   </section>
  )
}

export default HeroSection