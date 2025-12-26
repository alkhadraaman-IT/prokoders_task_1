import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CourseCard from '../pages/CourseCard';
import { coursesData } from '../data/coursesData';
import { ArrowRight } from 'lucide-react'; 

const Home = () => {
  const navigate = useNavigate();

  const topCourses = coursesData.slice(0, 3);

  return (
    <div className="pb-20 bg-black min-h-screen">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-flame-orange font-bold text-xs uppercase tracking-[0.3em]">Top Rated</span>
            <h2 className="text-4xl font-black italic mt-2 uppercase tracking-tighter">
              Explore Our <span className="text-burn">Fire Courses</span>
            </h2>
          </div>
          
          <button 
            onClick={() => navigate('/courses')}
            className="group flex items-center gap-3 bg-white/5 hover:bg-flame-orange hover:text-white transition-all p-4 rounded-full border border-white/10 hover:border-flame-orange/50 cursor-pointer"
          >
            <span className="text-xs font-black uppercase tracking-widest pl-2">View All</span>
            <div className="bg-flame-orange p-2 rounded-full text-white shadow-[0_0_15px_rgba(255,69,0,0.5)] group-hover:scale-110 transition-transform">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;