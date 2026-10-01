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

        </div>

    </nav>
  )
}

export default Navbar