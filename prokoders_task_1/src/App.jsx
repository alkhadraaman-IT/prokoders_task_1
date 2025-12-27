import React, { useState, useEffect } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/About';
import CartPage from './pages/CartPage';
import CourseContent from './pages/CourseContent';
import SignUpPage from './pages/SignUpPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import CourseCard from './pages/CourseCard';
import { CartProvider } from './pages/CartContext';
import NotFound from './pages/NotFound';
import Testimonials from './pages/Testimonials';
import WelcomeToast from './pages/WelcomeToast';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const [scroll, setScroll] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScroll((winScroll / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedStatus = localStorage.getItem('isLoggedIn') === 'true'; 
    if (savedStatus) {
      setIsLoggedIn(true);
      setUser({ name: "Aman" }); 
    }
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <div 
          className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-flame-red via-flame-orange to-flame-yellow z-[999] transition-all duration-150" 
          style={{ width: `${scroll}%` }}
        ></div>

        <div className="flex flex-col min-h-screen bg-black">
          
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} />
          
          <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CourseDetails isLoggedIn={isLoggedIn} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/profile" element={<ProfilePage user={user} />} />
        <Route path="/course-content" element={<CourseContent />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/signup" element={<SignUpPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        </main>

      {isLoggedIn && user && <WelcomeToast userName={user.name} />}

      <Footer isLoggedIn={isLoggedIn} />
          
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
