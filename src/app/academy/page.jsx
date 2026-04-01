'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  ChevronRight, 
  Search, 
  Trophy, 
  UserCheck,
  Sparkles,
  ChevronLeft,
  Quote,
  ArrowRight,
  Globe,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AcademyPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  const stats = [
    { label: 'Active Students', value: '15K+', icon: Users, color: 'text-blue-500' },
    { label: 'Courses', value: '45+', icon: BookOpen, color: 'text-[#E14D4D]' },
    { label: 'Certifications', value: '10K+', icon: Trophy, color: 'text-orange-500' },
    { label: 'Expert Faculty', value: '25+', icon: UserCheck, color: 'text-emerald-500' }
  ];

  const courses = [
    { 
      id: 1,
      title: 'Classical Arabic', 
      instructor: 'Dr. Ahmad Al-Sayed',
      duration: '24 Weeks', 
      level: 'Beginner', 
      rating: 4.9,
      category: 'language',
      desc: 'Master the foundation of the Quranic language from alphabet to advanced grammar.',
      image: 'https://images.unsplash.com/photo-1542810634-71277d903dc2?auto=format&fit=crop&q=80&w=800',
    },
    { 
      id: 2,
      title: 'Tajweed Mastery', 
      instructor: 'Sheikh Yahya Al-Habib',
      duration: '12 Weeks', 
      level: 'Intermediate', 
      rating: 4.8,
      category: 'quran',
      desc: 'Perfect your recitation with precise articulation and melodic application.',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800',
    },
    { 
      id: 3,
      title: 'Islamic Finance', 
      instructor: 'Dr. Umar Qudrat',
      duration: '8 Weeks', 
      level: 'Advanced', 
      rating: 4.7,
      category: 'fiqh',
      desc: 'Explore the modern application of Shariah in global banking and personal finance.',
      image: 'https://images.unsplash.com/photo-1610018556010-6a11691bc905?auto=format&fit=crop&q=80&w=800',
    },
    { 
      id: 4,
      title: 'Advanced Fiqh', 
      instructor: 'Mufti Ismail Menk',
      duration: '16 Weeks', 
      level: 'Advanced', 
      rating: 4.9,
      category: 'fiqh',
      desc: 'Deep dive into the principles of jurisprudence and contemporary legal issues.',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    }
  ];

  const teachers = [
    {
      name: 'Dr. Ahmad Al-Sayed',
      role: 'Head of Arabic Department',
      specialty: 'Classical Linguistics',
      bio: 'Former professor at Al-Azhar with 20+ years of experience in teaching Quranic Arabic.',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Sheikh Yahya Al-Habib',
      role: 'Principal Quran Instructor',
      specialty: 'Qira\'at & Tajweed',
      bio: 'Certified in the Ten Qira\'at, specializing in the Maqamat of recitation.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Dr. Umar Qudrat',
      role: 'Fiqh Researcher',
      specialty: 'Islamic Economics',
      bio: 'Advisor to global Islamic banks and author of several treaties on modern finance.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Mufti Ismail Menk',
      role: 'Senior Jurisprudence Advisor',
      specialty: 'Contemporary Fiqh',
      bio: 'Renowned scholar and inspirational speaker, known for making Islamic teachings accessible in the modern age.',
      image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Ustadha Fatima Aziz',
      role: 'Head of Women\'s Studies',
      specialty: 'Islamic History & Seerah',
      bio: 'Expert in the development of Islamic civilization and female scholarship throughout history.',
      image: 'https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=800',
    }
  ];

  useEffect(() => {
    let result = courses;
    if (activeTab !== 'all') {
      result = result.filter(c => c.category === activeTab);
    }
    if (searchTerm) {
      result = result.filter(c => 
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        c.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredCourses(result);
  }, [activeTab, searchTerm]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#E14D4D]">
      
      {/* 1. STUDIO HERO SECTION */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-10 shadow-[0_0_20px_rgba(225,77,77,0.1)]">
              <Sparkles className="w-3 h-3 text-[#E14D4D]" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50">Elite Scholar Program 2026</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-12 italic">
              Digital <br /> <span className="text-[#E14D4D] not-italic">Academy.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/40 font-medium max-w-3xl mx-auto italic mb-16">
              "Synthesizing classical Islamic pedagogy with modern cognitive tools for the next generation of leadership."
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/academy/admission" className="group px-12 py-6 bg-white text-black rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#E14D4D] hover:text-white transition-all transform hover:scale-105 shadow-2xl flex items-center gap-4">
                Initialize Admission
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-12 py-6 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Browse Curriculum
              </button>
            </div>
          </motion.div>
        </div>

        {/* Parallax BG Art */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <div className="text-[60rem] font-serif font-black">اقرأ</div>
        </div>
      </section>

      {/* 2. LIVE STATS BAR */}
      <section className="py-20 bg-[#111111] border-b border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2 group">
                <stat.icon className={`w-6 h-6 mx-auto mb-4 ${stat.color} opacity-80 group-hover:scale-110 transition-transform`} />
                <div className="text-4xl md:text-5xl font-black tracking-tighter">{stat.value}</div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE CURRICULUM GRID */}
      <section className="py-40 container mx-auto px-6" id="courses">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-16 gap-10">
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#E14D4D] mb-6 block">Structured Learning</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
              Premium <span className="text-white/20">Courses</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-end gap-6 w-full md:w-auto">
            <div className="relative group w-full md:w-80">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#E14D4D] transition-colors" />
              <input 
                type="text" 
                placeholder="Search Disciplines..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-[#E14D4D]/50 transition-all placeholder:text-white/10"
              />
            </div>
            
            <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 overflow-x-auto no-scrollbar w-full md:w-auto">
              {['all', 'language', 'quran', 'fiqh'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab ? 'bg-[#E14D4D] text-white shadow-xl shadow-[#E14D4D]/20' : 'text-white/30 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div 
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="bg-[#111111] border border-white/5 rounded-[3rem] overflow-hidden transition-all duration-500 hover:border-[#E14D4D]/30 hover:-translate-y-4">
                  <div className="h-64 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl text-[8px] font-black uppercase tracking-widest">
                      {course.level}
                    </div>
                  </div>
                  
                  <div className="p-10 space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#E14D4D]">Module 0{course.id}</span>
                      <div className="flex items-center gap-2">
                         <Star className="w-3 h-3 text-yellow-500 fill-current" />
                         <span className="text-xs font-bold">{course.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-[#E14D4D] transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <UserCheck className="w-3 h-3 text-blue-500" />
                       {course.instructor}
                    </p>
                    
                    <p className="text-white/40 text-sm font-medium leading-relaxed italic line-clamp-2">
                      {course.desc}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-3">
                         <Clock className="w-4 h-4 text-white/20" />
                         <span className="text-[9px] font-black uppercase tracking-widest text-white/40">{course.duration}</span>
                      </div>
                      <Link href={`/academy/${course.id}`} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredCourses.length === 0 && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="col-span-full py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]"
            >
               <Search className="w-12 h-12 mx-auto text-white/10 mb-4" />
               <p className="text-white/30 uppercase font-black text-xs tracking-widest italic">No matching courses found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* 4. TEACHERS SECTION WITH SLIDER */}
      <section className="py-40 bg-[#050505] border-y border-white/5 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12">
             <div className="text-center md:text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 mb-6 block">World-Class Faculty</span>
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
                  Meet Your <span className="text-white/20">Mentors</span>
                </h2>
             </div>
             
             <div className="flex gap-4">
                <button className="teacher-prev w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all z-20">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="teacher-next w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all z-20">
                  <ChevronRight className="w-6 h-6" />
                </button>
             </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.teacher-next',
              prevEl: '.teacher-prev',
            }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            className="teacher-swiper !overflow-visible"
          >
            {teachers.map((teacher, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col lg:flex-row gap-12 items-center bg-white/[0.02] p-8 lg:p-20 rounded-[4rem] border border-white/5 backdrop-blur-3xl">
                  <div className="w-full lg:w-1/2 aspect-square rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
                     <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="w-full lg:w-1/2 space-y-8">
                     <Quote className="w-16 h-16 text-[#E14D4D] opacity-10" />
                     <div>
                        <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic leading-tight">{teacher.name}</h3>
                        <p className="bg-[#E14D4D]/10 text-[#E14D4D] inline-block px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.3em]">{teacher.role}</p>
                     </div>
                     
                     <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Vertical Specialization</p>
                        <p className="text-lg font-bold text-blue-400">{teacher.specialty}</p>
                     </div>

                     <p className="text-xl md:text-2xl text-white/40 leading-relaxed italic font-medium">
                       "{teacher.bio}"
                     </p>

                     <div className="flex items-center gap-6 pt-10">
                        <button className="px-12 py-5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#E14D4D] hover:text-white transition-all transform hover:scale-105 shadow-2xl">
                           Curriculum Insight
                        </button>
                        <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                           <Globe className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-pagination-custom flex justify-center gap-4 mt-20"></div>
        </div>

        <div className="absolute -bottom-20 -right-20 text-[30rem] font-black text-white/[0.02] italic pointer-events-none select-none">
           STAFF
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-40 container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="bg-[#E14D4D] p-16 md:p-32 rounded-[6rem] shadow-[0_0_100px_rgba(225,77,77,0.2)] relative overflow-hidden group"
        >
           <div className="relative z-10">
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12 italic">
                Secure Your <br /> Future.
              </h2>
              <p className="text-white/80 text-xl md:text-2xl font-medium max-w-3xl mx-auto italic mb-16 px-4">
                Registration for the Fall 2026 Batch is now open. Limited seats available for our specialized tracks.
              </p>
              <Link href="/academy/admission" className="px-20 py-10 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all transform hover:scale-110 inline-block shadow-2xl">
                 Apply For Admission
              </Link>
           </div>
           
           <div className="absolute top-0 right-0 p-20 opacity-5 group-hover:scale-110 transition-transform duration-1000 rotate-12">
              <GraduationCap className="w-[400px] h-[400px]" />
           </div>
        </motion.div>
      </section>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.1) !important;
          opacity: 1 !important;
          width: 20px !important;
          height: 1px !important;
          border-radius: 0 !important;
          transition: all 0.5s ease-in-out !important;
        }
        .swiper-pagination-bullet-active {
          background: #E14D4D !important;
          width: 40px !important;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AcademyPage;
