import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='py-10 bg-white rounded-t-4xl shadow-2xl'>
      <footer className="relative h-[420px] overflow-hidden flex flex-col items-center justify-end">
        {/* Double Div Structure - Outer with white outline */}
        <div className="absolute top-10 w-[90%] md:w-[80%] z-30">
          {/* Outer Transparent Layer with White Border */}
          <div className="absolute inset-0 bg-transparent backdrop-blur-sm rounded-3xl border-2 border-white shadow-[0_8px_32px_rgba(255,255,255,0.1)]"></div>
          
          {/* Inner Transparent Layer */}
          <div className="absolute inset-[8px] bg-white/60 backdrop-blur-2xl rounded-2xl shadow-lg"></div>
          
          {/* Content Layer */}
          <div className="relative p-6 flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Left Section */}
            <div className="w-full md:w-1/3 space-y-4">
              <img
                src='/logo.jpg'
                alt="Logo"
                className='size-7 rounded-sm drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
              />
              <p className="text-sm text-gray-700">
                Building smart digital solutions with love.
              </p>
              <div className="flex items-center space-x-4 text-black">
                <a href="#" className="hover:scale-110 transition-transform duration-300">
                  <FaFacebookSquare size={18} className='text-gray-600 hover:text-blue-600 transition-colors' />
                </a>
                <a href="#" className="hover:scale-110 transition-transform duration-300">
                  <FaSquareInstagram size={18} className='text-gray-600 hover:text-pink-600 transition-colors' />
                </a>
                <a href="#" className="hover:scale-110 transition-transform duration-300">
                  <IoLogoLinkedin size={18} className='text-gray-600 hover:text-blue-700 transition-colors' />
                </a>
              </div>
              <div className='border-t border-gray-300'></div>
              <p className='text-xs text-gray-600'>
                All Rights Reserved <span className='font-semibold text-gray-900'>NS APPS INNOVATION</span>
              </p>
            </div>

            {/* Links Section */}
            <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="text-md font-semibold mb-3 text-gray-900">Company</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-3 text-gray-900">Projects</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Figma UI Kit</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Icon Library</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Blocks</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Templates</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-3 text-gray-900">Resources</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Docs</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">FAQs</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Quick Start</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Large NS APPS text */}
        <div className="text-gray-200 text-[260px] font-extrabold leading-none z-10 pointer-events-none mt-24">
          NS APPS
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-white to-transparent z-20"></div>
      </footer>
    </div>
  );
};

export default Footer;
