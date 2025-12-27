import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, Clock, BookOpen, 
  Award, Camera, Save, X, Edit3, Rocket 
} from 'lucide-react';

const ProfilePage = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  
  const [user, setUser] = useState({
    name: "Aman Alk",
    email: "Aman@firelab.com",
    phone: "0930000000",
    education: "Bachelor's Degree",
    joinedDate: "October 2025"
  });

  const [editFormData, setEditFormData] = useState({ ...user });

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem('purchasedCoursesData')) || [];
    const withProgress = savedCourses.map(course => ({
      ...course,
      progress: Math.floor(Math.random() * 60) + 10 
    }));
    setPurchasedCourses(withProgress);
  }, []);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setUser({ ...editFormData });
    setIsEditOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-20 relative pt-10">
      
      {isEditOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/95 backdrop-blur-xl text-left">
          <form 
            onSubmit={handleSaveChanges}
            className="bg-[#111] border border-white/10 p-10 rounded-[60px] w-full max-w-md relative shadow-2xl animate-in zoom-in duration-300"
          >
            <button type="button" onClick={() => setIsEditOpen(false)} className="absolute top-8 right-8 text-gray-500 hover:text-white border-none bg-transparent cursor-pointer"><X size={24} /></button>
            <h2 className="text-2xl font-black mb-8 italic uppercase tracking-tighter">Edit <span className="text-burn">Profile</span></h2>
            
            <div className="space-y-4">
              <input 
                required
                type="text" 
                minLength="3"
                value={editFormData.name} 
                onChange={(e) => setEditFormData({...editFormData, name: e.target.value})} 
                placeholder="Full Name" 
                className="w-full bg-[#080808] border border-white/10 rounded-full px-8 py-4 text-sm focus:border-flame-orange outline-none text-white" 
              />
              
              <input 
                required
                type="email" 
                value={editFormData.email} 
                onChange={(e) => setEditFormData({...editFormData, email: e.target.value})} 
                placeholder="Email Address" 
                className="w-full bg-[#080808] border border-white/10 rounded-full px-8 py-4 text-sm focus:border-flame-orange outline-none text-white" 
              />

              <input 
                required
                type="tel" 
                pattern="[0-9]{8,15}"
                title="Please enter 8 to 15 digits"
                value={editFormData.phone} 
                onChange={(e) => setEditFormData({...editFormData, phone: e.target.value})} 
                placeholder="Phone Number" 
                className="w-full bg-[#080808] border border-white/10 rounded-full px-8 py-4 text-sm focus:border-flame-orange outline-none text-white" 
              />

              <select 
                required
                value={editFormData.education} 
                onChange={(e) => setEditFormData({...editFormData, education: e.target.value})} 
                className="w-full bg-[#080808] border border-white/10 rounded-full px-8 py-4 text-sm focus:border-flame-orange outline-none text-white appearance-none cursor-pointer"
              >
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
              </select>

              <button type="submit" className="w-full bg-flame-orange text-white font-black py-5 rounded-full mt-6 flex items-center justify-center gap-2 hover:bg-orange-600 transition-all border-none cursor-pointer">
                <Save size={18} /> SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="h-60 bg-gradient-to-r from-flame-orange/20 via-[#111] to-[#050505] border-b border-white/5 relative flex items-end pb-10">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-8 translate-y-16">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-[45px] bg-[#111] border-[8px] border-[#050505] overflow-hidden shadow-2xl relative group">
            <img src={`https://ui-avatars.com/api/?name=${user.name}&background=FF4500&color=fff&size=256`} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">{user.name}</h1>
            <p className="text-flame-orange text-[10px] font-black tracking-[0.4em] mt-3 italic flex items-center justify-center md:justify-start gap-2 uppercase">
              <Award size={14} /> Elite Member
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-40 grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        <div className="bg-[#111] border border-white/5 p-10 rounded-[55px] shadow-2xl h-fit">
          <h3 className="text-[10px] font-black mb-10 border-b border-white/5 pb-4 uppercase tracking-[0.3em] text-gray-600 italic">Information</h3>
          <div className="space-y-6 text-xs font-bold text-gray-400">
            <div className="flex items-center gap-4"><Mail className="text-flame-orange" size={18} /> <span>{user.email}</span></div>
            <div className="flex items-center gap-4"><Phone className="text-flame-orange" size={18} /> <span>{user.phone}</span></div>
            <div className="flex items-center gap-4"><BookOpen className="text-flame-orange" size={18} /> <span>{user.education}</span></div>
            <div className="flex items-center gap-4"><Clock className="text-flame-orange" size={18} /> <span>Joined {user.joinedDate}</span></div>
          </div>
          <button 
            onClick={() => {
              setEditFormData({ ...user });
              setIsEditOpen(true);
            }} 
            className="w-full mt-10 py-4 rounded-full bg-white/5 border border-white/10 hover:border-flame-orange/40 transition-all text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 text-white border-none cursor-pointer"
          >
            <Edit3 size={14} /> EDIT PROFILE
          </button>
        </div>


        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter flex items-center gap-3">
              <BookOpen className="text-flame-orange" /> My <span className="text-burn">Lab</span>
            </h3>
            <span className="text-[10px] font-black text-gray-600 bg-white/5 px-4 py-2 rounded-full uppercase tracking-widest">{purchasedCourses.length} Active Courses</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {purchasedCourses.map((course) => (
              <div key={course.id} className="bg-[#111] border border-white/5 rounded-[50px] overflow-hidden group hover:border-flame-orange/40 transition-all duration-500 shadow-2xl">
                <div className="p-8">
                  <h4 className="font-black text-sm mb-6 group-hover:text-flame-orange transition-colors uppercase h-10 line-clamp-2">{course.title}</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-600">
                      <span>Ignition</span>
                      <span className="text-flame-orange">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-flame-orange" style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </div>
                  <Link to="/course-content" className="w-full mt-8 py-4 bg-white/5 group-hover:bg-flame-orange text-white rounded-full text-[10px] font-black transition-all flex items-center justify-center gap-2 tracking-widest uppercase no-underline">
                    RESUME LEARNING
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;