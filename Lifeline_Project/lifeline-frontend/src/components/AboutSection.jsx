import React from 'react';
import { FaHeartPulse, FaUsers, FaHandHoldingHeart, FaShieldHalved } from 'react-icons/fa6';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold uppercase tracking-wider text-sm bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
            About Lifeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
            Connecting Blood Donors With Those In Need
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Lifeline</strong> is a real-time blood donation platform designed to bridge the gap between voluntary blood donors and patients facing critical medical emergencies.
          </p>
        </div>

        {/* 2-COLUMN GRID: MISSION & CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Our Mission & Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              During medical emergencies, every second counts. Finding a matching blood donor quickly can be overwhelming for families. Lifeline removes the hassle by providing a direct connection between patients and donors in their local area without any middleman.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform is completely <strong>free, secure, and transparent</strong>, ensuring that help is always accessible when it matters most.
            </p>

            {/* QUICK HIGHLIGHT BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 bg-red-50 p-4 rounded-xl">
                <FaHeartPulse className="text-red-600 text-2xl shrink-0" />
                <span className="font-semibold text-gray-800 text-sm">24/7 Emergency Access</span>
              </div>
              <div className="flex items-center gap-3 bg-red-50 p-4 rounded-xl">
                <FaShieldHalved className="text-red-600 text-2xl shrink-0" />
                <span className="font-semibold text-gray-800 text-sm">100% Free & Secure</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* CARD 1: VOLUNTARY DONORS */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <FaHandHoldingHeart className="text-4xl text-red-200 mb-4" />
              <div>
                <h4 className="text-2xl font-black mb-1">Voluntary Donors</h4>
                <p className="text-red-100 text-sm">
                  Registered individuals ready to save lives through voluntary blood donation.
                </p>
              </div>
            </div>

            {/* CARD 2: DIRECT CONNECT */}
            <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <FaUsers className="text-4xl text-gray-400 mb-4" />
              <div>
                <h4 className="text-2xl font-black mb-1">Direct Connect</h4>
                <p className="text-gray-400 text-sm">
                  Patients can contact donors directly via call or message with no delays.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;