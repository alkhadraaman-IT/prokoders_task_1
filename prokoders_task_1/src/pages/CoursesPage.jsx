import React, { useState } from 'react';
import CourseCard from '../pages/CourseCard';
import { coursesData } from '../data/coursesData';
import { Search, Filter } from 'lucide-react';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const categories = ["All", ...new Set(coursesData.map(course => course.category))];

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-7xl mx-auto">
      
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-center mb-8">
          Fuel Your <span className="text-burn">Knowledge</span> 🔥
        </h1>

        <div className="relative w-full max-w-2xl group mb-10">
          <div className="absolute inset-0 bg-flame-orange/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-all duration-500"></div>
          <div className="relative flex items-center bg-[#111] border border-white/10 rounded-2xl px-6 py-4">
            <Search className="text-gray-500 mr-4" size={20} />
            <input 
              type="text"
              placeholder="Search by title or tech..."
              className="bg-transparent border-none outline-none text-white w-full text-sm font-medium"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                selectedCategory === cat 
                ? "bg-flame-orange border-flame-orange text-white shadow-[0_0_15px_rgba(255,69,0,0.3)]" 
                : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {currentCourses.length > 0 ? (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-16 gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-xl text-xs font-black transition-all ${
                    currentPage === i + 1 
                    ? "bg-flame-orange text-white" 
                    : "bg-white/5 text-gray-500 hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20 bg-[#111] rounded-3xl border border-dashed border-white/10">
          <p className="text-gray-500 italic">No courses found in this category.</p>
          <button onClick={() => {setSearchTerm(""); setSelectedCategory("All");}} className="mt-4 text-flame-orange font-bold">Reset Filters</button>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;