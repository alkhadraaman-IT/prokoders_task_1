import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] bg-black text-white flex flex-col items-center justify-center p-6 text-center">

      <img 
        src='./assets/404code.jpg' 
        alt="404 FireLab" 
        className="w-full max-w-lg rounded-[40px] shadow-[0_0_50px_rgba(255,69,0,0.2)] mb-8"
      />
      
      <h2 className="text-2xl font-black italic uppercase tracking-widest text-flame-orange">
        {message || "Oops! This Path is Cold"}
      </h2>
      
      <p className="text-gray-500 mt-2 mb-8 italic">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <button 
        onClick={() => navigate('/')}
        className="bg-flame-orange px-10 py-4 rounded-full font-black text-xs transition-all hover:scale-105 active:scale-95 shadow-lg shadow-flame-orange/20 border-none cursor-pointer"
      >
        BACK TO HOME PAGE
      </button>
    </div>
  );
};

export default NotFound;