import React from 'react';
import logoImg from '../assets/lifeline-temp-logo.jpg'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-6 py-3 flex justify-between items-center'>
           
            {/* ================= 1. LEFT SIDE: IMAGE LOGO ================= */}
            <div className='flex items-center gap-3 cursor-pointer' >
                <img
                  src={logoImg} 
                  alt='Lifeline Logo'
                  className='w-10 h-10 object-contain'
                />

                <span className='text-2xl font-black tracking-wider text-gray-800'>
                    LIFE<span className="text-red-600">LINE</span>
                </span>
            </div>

             {/* ================= 2. Center  ================= */}

             <div className='hidden md:flex items-center gap-8 font-medium text-gray-700'>
              <a href='#home'
                className='hover:text-red-600 transition duration-200 cursor-pointer'>
                Home
              </a>

              <a href='#find-donors'
                className='hover:text-red-600 transition duration-200 cursor-pointer'>
                Find Donors
              </a>

              <a href='#request-blood'
                className="hover:text-red-600 transition duration-200 cursor-pointer">
                Request Blood
              </a>

              <a
                href="#about"
                className="hover:text-red-600 transition duration-200 cursor-pointer">
                About Us
              </a>

             </div>

            {/* ================= 2. Right side actioon   ================= */}
            <div className='flex items-center gap-3'>
              <button className='text-gray-700 px-4 py-3 rounded-xl font-semibold hover:text-red-600 hover:bg-red-50 transition duration-200'>
                Login
              </button>

               <button className='bg-red-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-red-700 shadow-md hover:shadow-lg transition duration-200'>
                Register as Donor
              </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar