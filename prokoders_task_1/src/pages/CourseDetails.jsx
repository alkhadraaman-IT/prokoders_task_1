import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { useCart } from '../pages/CartContext'; 
import NotFound from './NotFound';

const CourseDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const course = coursesData.find(item => item.id === parseInt(id));

  const handleEnroll = () => {
    const isLoggedIn = localStorage.getItem('user'); 

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    addToCart(course);
  };

  if (!course) {
    return <NotFound message="THIS COURSE HAS BEEN EXTINGUISHED!" />;
  }

  return (
    <div className="min-h-screen pt-24 pb-12 p-6 lg:p-20 flex justify-center bg-black">
      <div className="hero-card w-full max-w-5xl p-8 lg:p-12 flex flex-col lg:flex-row gap-12 border border-white/5 bg-[#080808] rounded-[40px]">
        
        <div className="lg:w-1/2 flex items-center">
          <img src={course.image} alt={course.title} className="rounded-3xl w-full shadow-2xl border border-white/10 object-cover h-[300px] lg:h-[400px]" />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center text-left">
          <h1 className="text-4xl lg:text-5xl font-black mb-4 text-burn italic uppercase tracking-tighter">{course.title}</h1>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm lg:text-base">{course.fullDescription}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
              <span className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">Instructor</span>
              <span className="font-bold text-white">{course.instructor}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
              <span className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">Duration</span>
              <span className="font-bold text-white">{course.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <span className="text-4xl font-black text-white">${course.price}</span>
            <button 
              onClick={handleEnroll} 
              className="btn-flame-main px-10 py-4 flex-grow text-center cursor-pointer border-none text-white font-black uppercase tracking-widest rounded-full"
            >
              Enroll Now 🔥
            </button>
          </div>
          
          <button onClick={() => navigate(-1)} className="mt-8 text-gray-500 hover:text-white text-xs uppercase tracking-widest font-bold bg-transparent border-none cursor-pointer">
            ← Back to courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;