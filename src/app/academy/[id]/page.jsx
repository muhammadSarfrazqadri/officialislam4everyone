'use client';

import React from 'react';
import Link from 'next/link';

const CourseDetailPage = ({ params }) => {
  const course = { title: "Arabic for Beginners", duration: "6 Months", tutor: "Sheikh Ahmad Ali", level: "Beginner", description: "This comprehensive course is designed for those who want to learn the fundamentals of the Arabic language, from alphabet to basic conversation." };

  return (
    <div className="min-h-screen bg-background">
      {/* Course Header */}
      <section className="bg-slate-50 border-b border-gray-100 py-32 text-center md:text-left">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-16 md:items-center">
          <div className="grow flex flex-col gap-10">
             <div className="w-24 h-px bg-[var(--primary)] opacity-40"></div>
             <h1 className="text-5xl md:text-7xl font-black text-[var(--secondary)] uppercase tracking-tighter leading-[0.9] flex flex-col gap-4 scale-y-110">
                <span>Mastering</span>
                <span className="text-[var(--primary)] italic underline decoration-slate-200 underline-offset-8">Arabic Language</span>
             </h1>
             <p className="text-xl text-slate-500 font-medium max-w-xl">
                Start your journey into the language of the Quran with our comprehensive beginner-friendly curriculum.
             </p>
             <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--secondary)]">
                <div className="flex flex-col gap-1">
                   <span className="text-slate-400">Duration:</span>
                   <span>{course.duration}</span>
                </div>
                <div className="flex flex-col gap-1 border-l-4 border-border pl-6">
                   <span className="text-slate-400">Difficulty:</span>
                   <span className="text-[var(--primary)]">{course.level}</span>
                </div>
                <div className="flex flex-col gap-1 border-l-4 border-border pl-6">
                   <span className="text-slate-400">Enrolled:</span>
                   <span>12,450 Minds</span>
                </div>
             </div>
             <button className="bg-slate-900 text-foreground px-16 py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-2xl hover:bg-[var(--primary)] transition-all self-start shadow-slate-300/50 hover:scale-105 duration-300">
                Enroll in Course
             </button>
          </div>
          <div className="md:w-1/3 aspect-[4/5] bg-gray-100 rounded-[4rem] shadow-2xl overflow-hidden border-8 border-white hover:scale-105 transition-all rotate-3 hover:rotate-0 flex items-center justify-center p-12">
             <div className="text-[12rem] text-[var(--primary)]/10 font-black italic select-none">AR</div>
          </div>
        </div>
      </section>

      {/* Curriculum Details */}
      <section className="container mx-auto px-6 py-32 max-w-6xl">
        <div className="flex flex-col gap-12">
           <h3 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tighter border-l-[10px] border-[var(--primary)] pl-6 leading-none">Curriculum</h3>
           <div className="flex flex-col gap-4">
              {[1, 2, 3, 4].map((module) => (
                <div key={module} className="bg-slate-50 border border-border p-12 rounded-[3.5rem] flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-[var(--primary)] hover:bg-background transition-all cursor-pointer shadow-sm shadow-slate-100">
                   <div className="flex items-center gap-12">
                      <div className="w-16 h-16 rounded-3xl bg-background border border-border flex items-center justify-center text-[var(--secondary)] font-black text-2xl shadow-xl group-hover:bg-[var(--primary)] group-hover:text-foreground transition-colors uppercase italic tracking-tighter shadow-slate-200/50">M0{module}</div>
                      <h4 className="text-2xl font-black text-[var(--secondary)] uppercase tracking-tight group-hover:text-[var(--primary)] transition-colors leading-none">Module {module}: Fundamentals of Grammar</h4>
                   </div>
                   <div className="flex items-center gap-10">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-300">12 Lessons</span>
                      <button className="bg-background border-2 border-border p-4 rounded-full text-[var(--secondary)] hover:bg-[var(--primary)] hover:text-foreground hover:border-[var(--primary)] transition-all shadow-md group-hover:rotate-12">&rarr;</button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
