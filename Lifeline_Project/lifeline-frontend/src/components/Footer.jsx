import React from 'react';
import { 
  FaDroplet, 
  FaHeart, 
  FaEnvelope, 
  FaLocationDot, 
  FaCode,
  FaGithub,
  FaLinkedin,
  FaGlobe
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative overflow-hidden">
      
      {/* Background Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-900/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* COL 1: PROJECT BRAND & ABOUT */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 text-2xl font-black text-white tracking-tight">
              <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center text-lg shadow-md shadow-red-900/50">
                <FaDroplet />
              </div>
              <span>Lifeline</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lifeline is an open-source blood donation platform built to seamlessly connect voluntary blood donors with patients in emergency medical need.
            </p>

            {/* Developer Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 bg-gray-900 hover:bg-red-600 text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-colors duration-200"
                title="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 bg-gray-900 hover:bg-red-600 text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-colors duration-200"
                title="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 bg-gray-900 hover:bg-red-600 text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-colors duration-200"
                title="Portfolio Website"
              >
                <FaGlobe size={18} />
              </a>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="/" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="/find-donors" className="hover:text-red-500 transition-colors">Find Blood Donor</a></li>
              <li><a href="/request-blood" className="hover:text-red-500 transition-colors">Request Blood</a></li>
              <li><a href="/register-donor" className="hover:text-red-500 transition-colors">Become Donor</a></li>
            </ul>
          </div>

          {/* COL 3: BLOOD GROUPS */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-xs">Available Blood Groups</h4>
            <div className="grid grid-cols-4 gap-1.5 text-center text-xs font-extrabold">
              {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((group) => (
                <span key={group} className="bg-gray-900 border border-gray-800 text-red-500 py-1.5 rounded-lg hover:border-red-600/50 hover:bg-red-950/30 transition-all cursor-default">
                  {group}
                </span>
              ))}
            </div>
          </div>

          {/* COL 4: DEVELOPER CONTACT */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-xs">Project Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <FaLocationDot className="text-red-500 text-base shrink-0 mt-0.5" />
                <span>Sindhudurg , India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-red-500 text-base shrink-0" />
                <a href="mailto:your.email@example.com" className="hover:text-red-500 transition-colors">
                  shridharbagayatkar32@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaCode className="text-red-500 text-base shrink-0" />
                <span>React + Spring Boot Stack</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM DEVELOPER CREDIT ================= */}
        <div className="pt-8 text-center sm:text-left text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Lifeline Project. Built for portfolio & social impact.</p>
          
          <p className="flex items-center gap-1.5 text-gray-300 font-medium">
            <span>Designed & Developed with</span>
            <FaHeart className="text-red-600 animate-pulse" />
            <span>by</span>
            <span className="text-red-500 font-bold">Shridhar Bagayatkar</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;