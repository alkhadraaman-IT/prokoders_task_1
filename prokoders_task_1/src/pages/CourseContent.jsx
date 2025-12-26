import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayCircle, ChevronLeft } from 'lucide-react';

const CourseContent = () => {
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(0);

  const lessons = [
    { id: 1, title: "01. React.js Basics in 90 Mins ", duration: "1:36:51", videoId: "fJSFus0pxZI" },
    { id: 2, title: "02.  React Native ", duration: "3:33:29", videoId: "OhCXgIunLb4" },
    { id: 3, title: "03. NEXT JS", duration: "2:05:50", videoId: "_t4c-vxalp4" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white">

      <div className="h-16 px-6 border-b border-white/5 flex items-center justify-between bg-black sticky top-0 z-50">
        <button 
          onClick={() => navigate('/profile')} 
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-flame-orange transition-all bg-transparent border-none cursor-pointer"
        >
          <ChevronLeft size={18} /> Exit Player
        </button>
        
        <h1 className="text-lg font-black italic tracking-tighter uppercase">
          REACT <span className="text-burn">PRO</span> MASTERY 🔥
        </h1>
        
        <div className="w-20 hidden md:block"></div>
      </div>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)]">
        <div className="flex-grow p-4 md:p-8 overflow-y-auto bg-black custom-scrollbar">
          <div className="relative aspect-video rounded-[35px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,69,0,0.1)] bg-[#080808]">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${lessons[activeLesson].videoId}`}
              title="Lesson Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-black italic tracking-tight uppercase">
              {lessons[activeLesson].title}
            </h2>
            <p className="text-gray-500 mt-2 text-sm italic tracking-wide">Enjoy learning with Fire Lab.</p>
          </div>
        </div>

        <div className="w-full lg:w-[380px] bg-[#080808] border-l border-white/5 overflow-y-auto p-5 shadow-2xl">
          <h3 className="text-xs font-black mb-6 uppercase tracking-[0.2em] text-gray-500 border-b border-white/5 pb-3 italic">
            Course <span className="text-flame-orange">Content</span>
          </h3>
          
          <div className="space-y-3">
            {lessons.map((lesson, index) => (
              <button 
                key={lesson.id}
                onClick={() => setActiveLesson(index)}
                className={`w-full flex items-center gap-4 p-5 rounded-[25px] border text-left cursor-pointer transition-all duration-300 ${
                  activeLesson === index 
                  ? 'bg-flame-orange/10 border-flame-orange/40 shadow-lg' 
                  : 'bg-white/5 border-transparent hover:bg-white/[0.08] text-gray-400'
                }`}
              >
                <PlayCircle 
                  size={20} 
                  className={`shrink-0 ${activeLesson === index ? 'text-flame-orange' : 'text-gray-600'}`} 
                />
                <div>
                  <p className={`text-[12px] font-bold leading-tight ${activeLesson === index ? 'text-white' : 'text-gray-400'}`}>
                    {lesson.title}
                  </p>
                  <span className="text-[9px] font-mono opacity-40 mt-1 block uppercase tracking-tighter">
                    {lesson.duration}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;