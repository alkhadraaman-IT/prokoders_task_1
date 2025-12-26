import React from 'react';

const AboutPage = () => {
  const stats = [
    { label: "Active Students", value: "10K+" },
    { label: "Expert Mentors", value: "50+" },
    { label: "Video Lessons", value: "1.2K+" },
  ];

  return (
    <div className="min-h-screen pt-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6">We Are <span className="text-burn">The Flame</span> Of Learning</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Fire-Lab was founded to bridge the gap between academic theory and industry practice through high-intensity, practical coding courses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#111] p-8 rounded-3xl border border-white/5 text-center hover:border-flame-orange/30 transition-all">
            <div className="text-4xl font-black text-flame-orange mb-2">{stat.value}</div>
            <div className="text-gray-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="hero-card p-10 mb-20 flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            We don't just teach code; we forge developers. Our curriculum is designed by professionals who live and breathe tech every day.
          </p>
        </div>
        <div className="md:w-1/2 bg-burn h-48 w-full rounded-2xl opacity-20"></div>
      </div>
    </div>
  );
};

export default AboutPage;