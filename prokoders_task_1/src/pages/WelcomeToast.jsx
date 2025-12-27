import React, { useState, useEffect } from 'react';

const WelcomeToast = ({ userName }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // تظهر الرسالة بعد ثانية من تحميل الصفحة
    const timer = setTimeout(() => setShow(true), 1000);
    // وتختفي تلقائياً بعد 5 ثوانٍ
    const hideTimer = setTimeout(() => setShow(false), 5000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-10 right-10 z-50 animate-bounce">
      <div className="bg-[#161616] border-l-4 border-flame-orange p-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-4">
        <div className="bg-flame-orange/20 p-2 rounded-lg">
           <span className="text-xl">🔥</span>
        </div>
        <div>
          <h4 className="text-white font-bold text-sm">Welcome back, {userName}!</h4>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">Ready to continue your fire journey?</p>
        </div>
        <button onClick={() => setShow(false)} className="text-gray-600 hover:text-white ml-4">✕</button>
      </div>
    </div>
  );
};

export default WelcomeToast;