import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Lock, Phone, GraduationCap, Sparkles } from 'lucide-react';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    alert("SUCCESS! ACCOUNT CREATED.");
    navigate('/login');
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12 bg-black text-white">
      <div className="bg-[#111] border border-white/5 p-10 rounded-[50px] w-full max-w-lg shadow-2xl">
        <h2 className="text-3xl font-black mb-8 text-center uppercase italic tracking-tighter">
          CREATE <span className="text-burn">ACCOUNT</span>
        </h2>
        
        <form onSubmit={handleSignUp} className="space-y-4 text-left">
          
          <div className="relative">
            <User className="absolute left-6 top-4 text-gray-500" size={18} />
            <input 
              required
              name="name"
              type="text" 
              minLength="3"
              placeholder="FULL NAME (MIN 3 CHARS)" 
              className="w-full bg-[#080808] border border-white/10 rounded-full px-14 py-4 text-[10px] font-black tracking-widest focus:border-flame-orange outline-none transition-all" 
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-6 top-4 text-gray-500" size={18} />
            <input 
              required
              name="email"
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full bg-[#080808] border border-white/10 rounded-full px-14 py-4 text-[10px] font-black tracking-widest focus:border-flame-orange outline-none transition-all" 
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-6 top-4 text-gray-500" size={18} />
            <input 
              required
              name="phone"
              type="tel"
              pattern="[0-9]{8,15}"
              title="PLEASE ENTER DIGITS ONLY (8-15 CHARACTERS)"
              placeholder="PHONE NUMBER (8-15 DIGITS)" 
              className="w-full bg-[#080808] border border-white/10 rounded-full px-14 py-4 text-[10px] font-black tracking-widest focus:border-flame-orange outline-none transition-all" 
            />
          </div>

          <div className="relative">
            <GraduationCap className="absolute left-6 top-4 text-gray-500" size={18} />
            <select 
              required
              name="education"
              className="w-full bg-[#080808] border border-white/10 rounded-full px-14 py-4 text-[10px] font-black tracking-widest text-gray-500 focus:border-flame-orange outline-none appearance-none cursor-pointer"
            >
              <option value="">SELECT EDUCATION</option>
              <option value="bachelor">BACHELOR'S DEGREE</option>
              <option value="master">MASTER'S DEGREE</option>
              <option value="high-school">HIGH SCHOOL</option>
            </select>
          </div>

          <div className="relative">
            <Lock className="absolute left-6 top-4 text-gray-500" size={18} />
            <input 
              required
              name="password"
              type={showPassword ? "text" : "password"} 
              minLength="8"
              placeholder="PASSWORD (MIN 8 CHARS)" 
              className="w-full bg-[#080808] border border-white/10 rounded-full px-14 py-4 text-[10px] font-black tracking-widest focus:border-flame-orange outline-none transition-all" 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-4 text-gray-500 bg-transparent border-none cursor-pointer hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button type="submit" className="w-full bg-flame-orange py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] mt-6 border-none cursor-pointer hover:bg-orange-600 transition-all active:scale-95 text-white shadow-lg shadow-flame-orange/20">
            <Sparkles size={16} className="inline mr-2" /> SIGN UP NOW
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">
          ALREADY HAVE AN ACCOUNT? <Link to="/login" className="text-flame-orange ml-1 hover:underline italic">LOGIN</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;