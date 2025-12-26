import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-[#161616] border border-white/5 rounded-2xl overflow-hidden hover:border-flame-orange/50 transition-all duration-300 group relative flex flex-col h-full">

      <div className="relative overflow-hidden h-38">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent opacity-60"></div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-flame-orange bg-flame-orange/10 px-2 py-1 rounded">
            {course.category}
          </span>
        </div>
        
        <h3 className="font-bold text-sm sm:text-base mb-2 line-clamp-2 group-hover:text-flame-orange transition-colors">
          {course.title}
        </h3>

        <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
          <div>
            <span className="text-xs text-gray-500 block">Price</span>
            <span className="text-flame-orange font-black text-lg">${course.price}</span>
          </div>
          
          <Link 
            to={`/course/${course.id}`} 
            className="bg-white/5 hover:bg-flame-orange text-white text-xs font-bold py-2 px-4 rounded-lg transition-all"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;