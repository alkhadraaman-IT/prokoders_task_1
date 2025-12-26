import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../pages/CartContext';
// أضفنا ShoppingCart هنا لكي لا يظهر خطأ
import { User, LogOut, ShoppingCart } from 'lucide-react'; 
import logo from '../assets/logo.jpg'; 

const Navbar = ({ isLoggedIn, setIsLoggedIn, user }) => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const count = cartItems ? cartItems.length : 0;

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/'); 
  };

  return (
    <nav className="flex justify-between items-center px-3 md:px-12 py-3 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      
      {/* يسار: الشعار والاسم */}
      <Link to="/" className="flex items-center gap-1 group shrink-0">
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain transition-transform group-hover:rotate-12" />
        <span className="logo-text uppercase font-black tracking-tighter text-sm md:text-xl text-white">
          FIRE<span className="text-burn">LAB</span>
        </span>
      </Link>

      {/* منتصف: التبويبات */}
      <div className="flex items-center gap-3 md:gap-8 mx-2">
        <NavLink to="/" className="nav-link text-[10px] md:text-sm font-bold uppercase tracking-widest text-white">Home</NavLink>
        <NavLink to="/courses" className="nav-link text-[10px] md:text-sm font-bold uppercase tracking-widest text-white">Courses</NavLink>
        
      </div>

      {/* يمين: السلة وحالة الدخول */}
      <div className="flex items-center gap-4 md:gap-6">
        
        {/* السلة بتصميم أيقونة محترف */}
        <Link to="/cart" className="relative p-2 group">
          <ShoppingCart size={22} className="text-white group-hover:text-flame-orange transition-colors" />
          {count > 0 && (
            <span className="absolute top-0 right-0 bg-flame-orange text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
              {count}
            </span>
          )}
        </Link>

        {isLoggedIn ? (
          <div className="flex items-center gap-2 md:gap-4 border-l border-white/10 pl-4">
            <Link to="/profile" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-flame-orange transition-all">
              <User size={18} className="text-flame-orange" />
            </Link>
            
            <button 
              onClick={handleLogout}
              className="text-[10px] font-black uppercase tracking-tighter text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer"
            >
              <LogOut size={14} /> <span className="hidden md:inline text-white">Logout</span>
            </button>
          </div>
        ) : (
          /* الزر الآن يتوجه لصفحة تسجيل الدخول */
          <Link 
            to="/login" 
            className="bg-flame-orange text-white text-[10px] md:text-xs font-black px-3 py-2.5 rounded-full hover:bg-orange-600 transition-all shadow-lg active:scale-95"
          >
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;