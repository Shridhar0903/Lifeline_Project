import React from 'react';
import { FaMagnifyingGlass, FaHeartCirclePlus, FaArrowRight, FaShieldHeart } from 'react-icons/fa6';

const QuickServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-red-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 text-red-600 font-bold uppercase tracking-wider text-xs sm:text-sm bg-red-100/80 px-3.5 py-1.5 rounded-full border border-red-200 mb-3">
            <FaShieldHeart className="text-red-500" />
            Quick Actions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            How Can Lifeline Help You Today?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
            Choose an option below to instantly search for voluntary donors or post an emergency blood request.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* CARD 1: FIND DONOR */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <FaMagnifyingGlass />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Find Blood Donor
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Search verified voluntary blood donors by blood group, city, or district in real-time. Contact donors directly without any delay or middlemen.
              </p>
            </div>

            <a 
              href="/find-donor" 
              className="relative z-10 inline-flex items-center justify-center gap-3 w-full bg-red-600 text-white font-bold py-3.5 sm:py-4 px-6 rounded-2xl hover:bg-red-700 shadow-md hover:shadow-red-200 transition-all duration-200 text-sm sm:text-base"
            >
              <span>Search Donors Now</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* CARD 2: REQUEST BLOOD */}
          <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 text-red-500 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <FaHeartCirclePlus />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Request Emergency Blood
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                In urgent need of blood for a patient? Create an instant emergency request post visible to all registered donors in your area.
              </p>
            </div>

            <a 
              href="/request-blood" 
              className="relative z-10 inline-flex items-center justify-center gap-3 w-full bg-white text-gray-900 font-bold py-3.5 sm:py-4 px-6 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-sm sm:text-base"
            >
              <span>Create Blood Request</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default QuickServicesSection;