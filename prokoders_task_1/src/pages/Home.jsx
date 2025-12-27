import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../pages/HeroSection';
import CourseCard from '../pages/CourseCard';
import Testimonials from '../pages/Testimonials'; 
import { coursesData } from '../data/coursesData';
import { ArrowRight, Flame, ShieldCheck, Zap } from 'lucide-react'; 

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const topCourses = coursesData.slice(0, 3);

  const stats = [
    { label: "Active Students", value: "10K+" },
    { label: "Expert Mentors", value: "50+" },
    { label: "Video Lessons", value: "1.2K+" },
  ];

  return (
    <div className="pb-20 bg-black min-h-screen">
      <HeroSection />

<div className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-black italic mt-2 uppercase tracking-tighter">
      Why Study With <span className="text-burn">Fire-Lab?</span>
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-white/5 hover:border-flame-orange/30 transition-all group">
      <div className="w-12 h-12 bg-flame-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Flame className="text-flame-orange" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">Real Practical Experience</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Our curriculum is built on real-world projects, bridging the gap between theory and industry standards.
      </p>
    </div>

    <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-white/5 hover:border-flame-orange/30 transition-all group">
      <div className="w-12 h-12 bg-flame-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Zap className="text-flame-orange" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">Learn Anytime, Anywhere</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Complete flexibility. Access your lessons from your mobile, tablet, or desktop whenever you want.
      </p>
    </div>

    <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-white/5 hover:border-flame-orange/30 transition-all group">
      <div className="w-12 h-12 bg-flame-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <ShieldCheck className="text-flame-orange" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">Expert Mentorship</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Learn from high-level industry experts who live and breathe technology every single day.
      </p>
    </div>

    <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-white/5 hover:border-flame-orange/30 transition-all group">
      <div className="w-12 h-12 bg-flame-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <div className="text-flame-orange font-black italic text-xl">∞</div>
      </div>
      <h3 className="text-xl font-bold mb-3">Lifetime Access</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Enjoy long-term access to your course content, allowing you to review and refresh your skills anytime.
      </p>
    </div>

    <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-white/5 hover:border-flame-orange/30 transition-all group">
      <div className="w-12 h-12 bg-flame-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <div className="text-flame-orange font-black italic text-xl font-serif">!</div>
      </div>
      <h3 className="text-xl font-bold mb-3">Modern Curriculum</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        An integrated and up-to-date syllabus that keeps pace with the rapidly evolving tech world.
      </p>
    </div>

    <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-white/5 hover:border-flame-orange/30 transition-all group">
      <div className="w-12 h-12 bg-flame-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <ShieldCheck className="text-flame-orange" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">High Security</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        A safe and reliable platform for learning and transactions, ensuring your data is always protected.
      </p>
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-flame-orange font-bold text-xs uppercase tracking-[0.3em]">Top Rated</span>
            <h2 className="text-4xl font-black italic mt-2 uppercase tracking-tighter">
              Explore Our <span className="text-burn">Fire Courses</span>
            </h2>
          </div>
          <button 
            onClick={() => navigate('/courses')}
            className="group flex items-center gap-3 bg-white/5 hover:bg-flame-orange transition-all p-3 md:p-4 rounded-full border border-white/10 cursor-pointer"
          >
            <span className="text-xs font-black uppercase tracking-widest pl-2">View All</span>
            <div className="bg-flame-orange p-2 rounded-full text-white">
              <ArrowRight size={18} />
            </div>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <Testimonials />

      <div className="max-w-5xl mx-auto px-6 mt-20">
        <div className="bg-[#161616] border border-white/10 p-12 rounded-[2.5rem] text-center relative overflow-hidden shadow-[0_20px_50px_rgba(255,69,0,0.1)]">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-flame-orange/10 blur-[100px]"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter">
            Ready to <span className="text-burn">Ignite</span> Your Career?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto uppercase tracking-widest text-[10px]">
            Join thousands of developers and start your journey today
          </p>
          <button 
  onClick={() => navigate(isLoggedIn ? '/courses' : '/signup')}
  className="btn-flame-main px-12 py-5 text-lg"
>
  {isLoggedIn ? 'Start Learning Now 🔥' : 'Join The Flame 🔥'}
</button>
        </div>
      </div>
    </div>
  );
};

export default Home;