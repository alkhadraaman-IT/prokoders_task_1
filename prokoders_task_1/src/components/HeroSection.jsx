import React from 'react';
import HeroImage from '../assets/hero-illustration.png';

const HeroSection = () => {
  return (
    <section className="bg-white px-6 py-12 sm:px-16 sm:py-20 rounded-2xl shadow-2xl mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">
            UNLOCK YOUR CREATIVE FLOW
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-8">
            Simplify your projects, collaborate effortlessly, and bring ideas to life with our intuitive platform
          </p>

          <div className="flex gap-4">
            <button
              className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition duration-300 
                         bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg transform hover:scale-[1.02]"
              onClick={() => console.log('Get Started Clicked')}
            >
              Get Started
            </button>
            
            <button
              className="px-6 py-3 text-indigo-600 font-semibold rounded-lg border-2 border-indigo-200 
                         transition duration-300 hover:bg-indigo-50 hover:border-indigo-600"
              onClick={() => console.log('Watch Demo Clicked')}
            >
              Watch Demo
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 border border-dashed">
            <img 
              src={HeroImage} 
              alt="Illustration: hero-illustration.png" 
              className="w-full h-auto rounded-lg object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;