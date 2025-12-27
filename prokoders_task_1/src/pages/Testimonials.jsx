import React from 'react';
import { testimonials } from '../data/testimonialsData';

const Testimonials = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-5xl font-black mb-6">Student</span><span className="text-burn"> Stories </span>
          <p className="text-gray-400 mt-6 uppercase tracking-widest text-[10px] font-bold">
            Real feedback from our blazing community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-[#161616] border border-white/5 p-8 rounded-[2rem] 
                         transition-all duration-500 hover:-translate-y-2 
                         hover:border-flame-orange/50
                         hover:shadow-[0_10px_40px_rgba(255,69,0,0.25)] flex flex-col h-full"
            >
              <div className="text-flame-orange text-5xl font-serif mb-4 leading-none drop-shadow-[0_0_10px_rgba(255,69,0,0.5)]">“</div>
              
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow italic text-sm">
                {item.feedback}
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-flame-orange to-flame-red flex items-center justify-center text-white font-black text-lg shadow-[0_5px_15px_rgba(255,69,0,0.3)]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">{item.name}</h4>
                  <p className="text-flame-orange text-[9px] uppercase tracking-widest font-black italic">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;