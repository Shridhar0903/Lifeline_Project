import React from 'react';
import { FaUserPlus, FaMagnifyingGlass, FaHandHoldingHeart } from 'react-icons/fa6';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus />,
      title: "1. Register or Post",
      desc: "Register as a voluntary blood donor or post an urgent blood requirement with patient details."
    },
    {
      id: 2,
      icon: <FaMagnifyingGlass />,
      title: "2. Search & Connect",
      desc: "Find verified donors by city and blood group. Connect directly via call without any middleman."
    },
    {
      id: 3,
      icon: <FaHandHoldingHeart />,
      title: "3. Save a Life",
      desc: "Reach the hospital on time, donate blood safely, and help save a patient in critical need."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-red-600 font-bold uppercase tracking-wider text-xs sm:text-sm bg-red-100/80 px-3.5 py-1.5 rounded-full border border-red-200 mb-3">
            Easy Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            How Lifeline Works
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Connecting donors and patients in 3 simple steps.
          </p>
        </div>

        {/* 3 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group relative"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {step.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;