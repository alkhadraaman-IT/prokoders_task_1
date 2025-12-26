import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; 

const Footer = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* القسم الأول: الشعار */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <div className="text-xl font-black">FIRE<span className="text-burn">LAB</span></div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Forge your future with the hottest tech courses in the market.
          </p>
        </div>

        {/* القسم الثاني: روابط سريعة */}
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/courses" className="footer-link">All Courses</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/profile" className="footer-link">My Profile</Link></li>
          </ul>
        </div>

        {/* القسم الثالث: تواصل معنا */}
        <div>
          <h4 className="font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>Email: hello@firelab.com</li>
            <li>Phone: +963 9xx xxx xxx</li>
            <li>Location: ProKoders Hub</li>
          </ul>
        </div>

        {/* القسم الرابع: السوشيال ميديا بأسمائها */}
<div>
  <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white">Follow Our Fire</h4>
  <div className="flex flex-col gap-4">
    <a href="https://facebook.com/firelab" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-flame-orange transition-all group">
      <span className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-flame-orange/20 text-[10px] font-black">FB</span>
      <span className="text-sm font-medium italic">firelab.official</span>
    </a>
    
    <a href="https://instagram.com/firelab_tech" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-flame-orange transition-all group">
      <span className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-flame-orange/20 text-[10px] font-black">IG</span>
      <span className="text-sm font-medium italic">@firelab_learning</span>
    </a>
    
    <a href="https://linkedin.com/company/firelab" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-flame-orange transition-all group">
      <span className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-flame-orange/20 text-[10px] font-black">LI</span>
      <span className="text-sm font-medium italic">Fire Lab Academy</span>
    </a>
  </div>
</div>
      </div>
      
      <div className="text-center pt-8 border-t border-white/5 text-gray-600 text-xs">
        © 2025 +. Built with 🔥 for ProKoders Training.
      </div>
    </footer>
  );
};

export default Footer;