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

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedStatus = localStorage.getItem('isLoggedIn') === 'true'; 
    if (savedStatus) {
      setIsLoggedIn(true);
      setUser({ name: "Ahmad" }); 
    }
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>

        <div className="flex flex-col min-h-screen bg-black">
          
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} />
          
          <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/course/:id" element={<CourseDetails />} />
              <Route path="/cart" element={<CartPage />} />

        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        
        <Route path="/profile" element={<ProfilePage user={user} />} />
        
        <Route path="/course-content" element={<CourseContent />} />

        <Route path="/signup" element={<SignUpPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
        </main>


<Footer isLoggedIn={isLoggedIn} />
          
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;