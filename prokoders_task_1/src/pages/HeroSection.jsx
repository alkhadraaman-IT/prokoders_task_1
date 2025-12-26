import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="hero-card w-full max-w-7xl p-8 sm:p-16 lg:p-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-burn uppercase italic tracking-tighter">
              UNLOCK YOUR <br /> CREATIVE FLOW
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
              Simplify your projects, collaborate effortlessly, and bring ideas to life with our intuitive platform.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/courses')}
                className="btn-flame-main px-8 py-4 cursor-pointer"
              >
                Get Started 🔥
              </button>
              
              <button 
                onClick={() => setShowDemo(true)}
                className="btn-flame-outline px-8 py-4 cursor-pointer"
              >
                Watch Demo
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#FF4500]/10 blur-[60px] rounded-full group-hover:bg-[#FF4500]/20 transition-all duration-500"></div>
              <img 
                src='./assets/herofire.jpg' 
                alt="Programming Hero" 
                className="relative z-10 w-full max-w-[500px] h-auto object-contain transform group-hover:translate-y-[-10px] transition-all duration-500" 
              />
            </div>
          </div>
        </div>
      </div>

      {showDemo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all"
          onClick={() => setShowDemo(false)} 
        >
          <div 
            className="relative w-full max-w-4xl bg-[#111] rounded-[20px] overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setShowDemo(false)}
              className="absolute -top-2 -right-2 md:top-4 md:right-4 text-white hover:text-flame-orange z-[110] font-bold bg-black w-10 h-10 rounded-full border border-white/20 cursor-pointer flex items-center justify-center shadow-lg"
            >
              ✕
            </button>

            <div className="aspect-video bg-black">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/nKIu9yen5nc?autoplay=1" 
                title="What Most Schools Don't Teach"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-4 bg-[#111] text-center border-t border-white/5">
              <p className="text-flame-orange text-sm font-black italic tracking-widest uppercase">
                Fuel Your Passion for Code
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;