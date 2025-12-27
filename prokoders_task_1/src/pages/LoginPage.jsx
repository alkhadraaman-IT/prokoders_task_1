import React, { useState, useEffect } from 'react'; // السطر الأهم لحل مشكلة الخطأ
import { Link, useNavigate } from 'react-router-dom'; // أضفنا useNavigate هنا
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

const LoginPage = ({ setIsLoggedIn, setUser }) => {  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoggedIn(true); 
    setUser({ name: "Aman" }); 
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/profile'); 
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-[#111] border border-white/5 p-10 rounded-[45px] w-full max-w-md shadow-2xl relative overflow-hidden text-center">
        <h2 className="text-3xl font-black mb-8 italic uppercase tracking-tighter">Welcome <span className="text-burn">Back</span></h2>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input required type="email" placeholder="Email Address" className="w-full bg-[#080808] border border-white/10 rounded-full px-12 py-4 text-sm focus:border-flame-orange outline-none transition-all" />
          </div>

          <div className="relative text-left">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input required type={showPassword ? "text" : "password"} placeholder="Password" className="w-full bg-[#080808] border border-white/10 rounded-full px-12 py-4 text-sm focus:border-flame-orange outline-none transition-all" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white border-none bg-transparent">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button type="submit" className="w-full bg-flame-orange text-white font-black py-4 rounded-full shadow-[0_10px_20px_rgba(255,69,0,0.3)] mt-2 flex items-center justify-center gap-2 transition-transform active:scale-95 border-none cursor-pointer">
            <LogIn size={18} /> LOGIN
          </button>
        </form>

        <div className="mt-8 text-xs text-gray-500 uppercase font-bold tracking-widest">
          New here? <Link to="/signup" className="text-flame-orange ml-2">Create Account</Link>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;