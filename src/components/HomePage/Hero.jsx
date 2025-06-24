import React from 'react';
import { motion } from 'framer-motion';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 z-0">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 1000 1000">
          <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#9333EA', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Find Your Dream</span>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block text-gray-900"
              >
                Property Today
              </motion.span>
            </h1>
            <p id="Hero_3" className="text-lg text-gray-600 mb-8">Discover the perfect space that matches your lifestyle and aspirations.</p>
            <button id="Hero_4" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
              Get Started
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <img
              src={images[0] || 'https://via.placeholder.com/600x400'}
              alt="Modern home interior"
              className="rounded-xl shadow-2xl w-full"
              id="Hero_5"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;