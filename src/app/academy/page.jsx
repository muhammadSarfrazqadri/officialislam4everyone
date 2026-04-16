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
  GraduationCap,
  Sparkles,
  BookMarked,
  Languages,
  ScrollText,
  Quote,
  MessageSquare,
  ShieldCheck,
  Headphones,
  Award,
  BookOpenCheck,
  PlayCircle,
  CheckCircle2,
  ArrowUpRight,
  Fingerprint
} from 'lucide-react';
import Link from 'next/link';

const AcademyPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Master Color Palette Definitions (Tailwind-compatible)
  const colors = {
    natureGreen: 'bg-[#313E17]', // Base Primary
    leafGreen: 'text-[#4C5C2D]', // Secondary
    goldAccent: 'text-[#FFDE42]', // Gold
    baseDark: 'bg-[#1B0C0C]',    // Dark Base
    stone: 'bg-[#fdfaf3]',       // Soft Light background
  };

  const educators = [
    {
      name: "Dr. Ahmad Al-Sayed",
      specialty: "Quranic Linguistics",
      origin: "Al-Azhar University",
      bio: "20+ years of experience in classical Arabic and Quranic exegesis.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Sheikh Yahya Al-Habib",
      specialty: "Qira'at & Tajweed",
      origin: "Madinah Islamic University",
      bio: "Certified in the 10 minor and major Qira'at with ijazah from renowned scholars.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Mufti Ismail Menk",
      specialty: "Contemporary Fiqh",
      origin: "Madinah Islamic University",
      bio: "Global speaker specializing in social issues and practical jurisprudence.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: "Ijazah Certified",
      desc: "Courses lead to authentic Ijazah in Quran and Hadith sciences."
    },
    {
      icon: Headphones,
      title: "24/7 Academic Support",
      desc: "Dedicated mentors available around the clock for student guidance."
    },
    {
      icon: BookOpenCheck,
      title: "Flexible Learning",
      desc: "Recorded sessions and interactive live classes for all timezones."
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Quran Student",
      content: "The Tajweed course transformed my recitation. The instructor's patience and the structured approach made it so easy to learn complex rules.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed"
    },
    {
      id: 2,
      name: "Sara Fatima",
      role: "Arabic Scholar",
      content: "I've tried many platforms for Arabic, but the depth of linguistic study here is unmatched. The classical approach truly honors the language of the Quran.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"
    },
    {
      id: 3,
      name: "Yusuf Ibrahim",
      role: "Fiqh Graduate",
      content: "Understanding the practical application of Shariah in modern times was my goal. This academy provided exactly that with authentic scholarship.",
      rating: 4,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yusuf"
    }
  ];

  const stats = [
    { label: 'Active Students', value: '15K+', icon: Users, color: 'text-primary' },
    { label: 'Courses', value: '45+', icon: BookOpen, color: 'text-secondary' },
    { label: 'Certifications', value: '10K+', icon: Trophy, color: 'text-primary' },
    { label: 'Expert Faculty', value: '25+', icon: UserCheck, color: 'text-secondary' }
  ];

  const courses = [
    { 
      id: 1,
      title: 'Quranic Arabic', 
      instructor: 'Dr. Ahmad Al-Sayed',
      duration: '24 Weeks', 
      level: 'Beginner', 
      rating: 4.9,
      category: 'language',
      icon: Languages,
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
      icon: BookMarked,
      desc: 'Perfect your recitation with precise articulation and melodic application.',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800',
    },
    { 
      id: 3,
      title: 'Prophetic Biography', 
      instructor: 'Dr. Umar Qudrat',
      duration: '8 Weeks', 
      level: 'All Levels', 
      rating: 4.7,
      category: 'hadith',
      icon: ScrollText,
      desc: 'Deep dive into the life and character of the Prophet (PBUH) from authentic sources.',
      image: 'https://images.unsplash.com/photo-1610018556010-6a11691bc905?auto=format&fit=crop&q=80&w=800',
    },
    { 
      id: 4,
      title: 'Fiqh Essentials', 
      instructor: 'Mufti Ismail Menk',
      duration: '16 Weeks', 
      level: 'Intermediate', 
      rating: 4.9,
      category: 'fiqh',
      icon: BookOpen,
      desc: 'Understanding the practical jurisprudential rulings for daily life and worship.',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesTab = activeTab === 'all' || course.category === activeTab;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fdfaf3] text-[#1B0C0C] selection:bg-[#FFDE42]/30">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Decorative Elements - Brand Tones */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#4C5C2D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-[#313E17]/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFDE42]/20 border border-[#FFDE42]/30 text-[#313E17] text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-3 h-3 text-[#313E17]" />
              <span>Sanctuary of Learning</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-[#1B0C0C]"
            >
              CULTIVATE <span className="text-[#313E17] italic underline decoration-[#FFDE42]/20">WISDOM</span> <br />
              THROUGH <span className="text-[#4C5C2D]">TRADITION</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#1B0C0C]/70 text-lg md:text-xl max-w-2xl mx-auto font-medium italic"
            >
              Root yourself in authentic knowledge. Our online academy brings the tranquility and depth of traditional scholarship to your modern schedule.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <button className="bg-[#313E17] text-[#FFDE42] px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#4C5C2D] transition-all hover:scale-105 shadow-xl shadow-[#313E17]/20">
                Explore The Disciplines
              </button>
              <button className="bg-[#4C5C2D] text-[#FFDE42] px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#313E17] transition-all hover:scale-105 shadow-xl shadow-[#4C5C2D]/20 border border-[#FFDE42]/20">
                Join The Circle
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Brand theme */}
      <section className="py-12 border-y border-[#FFDE42]/20 bg-[#313E17]/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-2"
              >
                <div className={`p-3 rounded-2xl bg-[#FFDE42]/20 text-[#313E17] mb-2`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-[#1B0C0C]">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1B0C0C]/60">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Accreditation Section */}
      <section className="py-10 bg-white border-b border-border/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground whitespace-nowrap">Trusted Globally By:</span>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
              {['Al-Azhar University', 'Madinah University', 'IIU Islamabad', 'Islamic Relief', 'Muslim Aid'].map((partner, idx) => (
                <span key={idx} className="text-lg font-black uppercase tracking-tighter italic text-foreground/50">{partner}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors Section */}
      <section className="py-24 bg-[#fdfaf3] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trustFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-[#FFDE42]/5 border border-[#313E17]/10 rounded-[2.5rem] hover:border-[#313E17]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-[#313E17] text-[#FFDE42] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[#1B0C0C]">{feature.title}</h3>
                <p className="text-[#1B0C0C]/70 text-sm font-medium leading-relaxed italic">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Preview & Methodology Section */}
      <section className="py-24 bg-[#fdfaf3] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl shadow-[#313E17]/10 group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef1460370e?auto=format&fit=crop&q=80&w=1200" 
                alt="Classroom Preview" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-[#1B0C0C]/40 group-hover:bg-[#1B0C0C]/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-[#FFDE42] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-10 h-10 text-[#313E17]" />
                </div>
              </div>
              <div className="absolute bottom-10 left-10 p-6 bg-[#313E17]/20 backdrop-blur-xl border border-[#FFDE42]/30 rounded-2xl">
                <p className="text-[#FFDE42] text-xs font-black uppercase tracking-widest">Natural Learning</p>
                <p className="text-[#FFDE42]/80 text-[10px] italic">Modern tech meets traditional roots.</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4C5C2D]">Nature of Study</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-[#1B0C0C]">
                  The <span className="text-[#313E17] italic">Organic</span> <br /> 
                  Academic Way
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Direct Ijazah", desc: "Traditional chains (Isnad) maintained through direct teacher-student feedback." },
                  { title: "Personalized Pace", desc: "Custom learning tracks based on existing knowledge and student availability." },
                  { title: "Practical Application", desc: "Moving beyond theory into character building and daily religious practice." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 hover:bg-[#FFDE42]/10 rounded-2xl transition-colors group">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-[#313E17] group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#1B0C0C]">{item.title}</h4>
                      <p className="text-[#1B0C0C]/70 text-xs italic leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#fdfaf3] overflow-hidden bg-[#FFDE42]/10">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="Student" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-[#fdfaf3] bg-[#4C5C2D] flex items-center justify-center text-[10px] font-black uppercase text-[#FFDE42]">
                    +2K
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#1B0C0C]">Join our</p>
                  <p className="text-[#313E17] text-[10px] font-bold italic">Flourishing Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Explorer */}
      <section className="py-24 bg-[#FFDE42]/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#313E17]">Seasonal Path</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[#1B0C0C]">
                Rooted <span className="text-[#4C5C2D] italic">Disciplines</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              {/* Search Bar - Brand Colors */}
              <div className="relative group text-[#1B0C0C]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1B0C0C]/50 group-focus-within:text-[#313E17] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search and discover..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-[#fdfaf3] border border-[#313E17]/20 rounded-xl py-3 pl-12 pr-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#313E17]/20 w-full md:w-80 transition-all text-[#1B0C0C]"
                />
              </div>

              {/* Taps - Brand palette */}
              <div className="flex bg-[#fdfaf3]/50 backdrop-blur-md p-1 rounded-xl border border-[#313E17]/20 overflow-x-auto no-scrollbar">
                {['all', 'language', 'quran', 'hadith', 'fiqh'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab ? 'bg-[#313E17] text-[#FFDE42] shadow-lg shadow-[#313E17]/10' : 'text-[#1B0C0C]/60 hover:text-[#313E17]'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#1B0C0C]">
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course) => (
                <motion.div 
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="bg-[#fdfaf3] border border-[#313E17]/10 rounded-[2.5rem] overflow-hidden shadow-xl shadow-[#313E17]/5 hover:border-[#313E17]/30 transition-all duration-500 hover:-translate-y-2">
                    {/* Course Image */}
                    <div className="h-56 relative overflow-hidden bg-[#4C5C2D]/5">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B0C0C]/60 to-transparent z-10" />
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#FFDE42]/20 backdrop-blur-md border border-[#FFDE42]/30 rounded-lg text-[8px] font-black uppercase tracking-widest text-[#FFDE42]">
                        {course.level}
                      </div>
                      <div className="absolute bottom-4 left-4 z-20 text-[#FFDE42]">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-3 h-3 text-[#FFDE42] fill-current" />
                          <span className="text-[10px] font-bold">{course.rating}</span>
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tight">{course.title}</h3>
                      </div>
                    </div>

                    {/* Course Info */}
                    <div className="p-8 space-y-6">
                      <p className="text-[#1B0C0C]/70 text-sm font-medium leading-relaxed italic line-clamp-2">
                        {course.desc}
                      </p>

                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#1B0C0C]/60 border-y border-[#313E17]/10 py-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#313E17]" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <UserCheck className="w-4 h-4 text-[#4C5C2D]" />
                          {course.instructor.split(' ').pop()}
                        </div>
                      </div>

                      <Link 
                        href={`/academy/${course.id}`}
                        className="flex items-center justify-between w-full group/btn text-[#1B0C0C]"
                      >
                        <span className="text-[10px] font-black uppercase tracking-widest group-hover/btn:text-[#313E17] transition-colors">
                          Join Seedlings
                        </span>
                        <div className="w-10 h-10 rounded-full bg-[#FFDE42]/20 flex items-center justify-center group-hover/btn:bg-[#313E17] group-hover/btn:text-[#FFDE42] transition-all">
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredCourses.length === 0 && (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-[#313E17]/20 rounded-3xl">
                <Search className="w-12 h-12 mx-auto text-[#313E17]/20 mb-4" />
                <p className="text-[#1B0C0C]/60 uppercase font-bold text-xs tracking-widest italic">No matching disciplines found.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-24 bg-[#FFDE42]/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#313E17]">Academic Foundations</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[#1B0C0C]">
                Rooted <span className="text-[#4C5C2D] italic">Scholars</span>
              </h2>
            </div>
            <p className="max-w-md text-[#1B0C0C]/70 text-sm font-medium italic">
              Learn from teachers who have blossomed through years of traditional study in heart-centered institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educators.map((teacher, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#fdfaf3] border border-[#313E17]/10 rounded-[3rem] overflow-hidden shadow-xl shadow-[#313E17]/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-80 overflow-hidden relative grayscale-50 group-hover:grayscale-0 transition-all duration-700">
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                  <div className="absolute inset-x-4 bottom-4 z-20 px-4 py-2 bg-[#4C5C2D]/80 backdrop-blur-md border border-[#FFDE42]/20 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#FFDE42] text-center">
                    {teacher.origin}
                  </div>
                </div>
                <div className="p-10 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#313E17]">{teacher.specialty}</span>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1B0C0C]">{teacher.name}</h3>
                  </div>
                  <p className="text-[#1B0C0C]/70 text-xs font-medium italic leading-relaxed line-clamp-2">
                    {teacher.bio}
                  </p>
                  <div className="pt-4 flex gap-4">
                     <div className="flex-1 h-px bg-[#313E17]/10 group-hover:bg-[#313E17]/30 transition-colors self-center" />
                     <button className="text-[9px] font-black uppercase tracking-widest text-[#1B0C0C] hover:text-[#313E17] transition-colors">
                        View Roots
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-[#fdfaf3] relative overflow-hidden">
        {/* Brand Accents */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#4C5C2D]/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[#313E17]/5 rounded-full blur-3xl opacity-50" />

        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4C5C2D]">Student Reflections</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[#1B0C0C]">
              Echoes of <span className="text-[#313E17] italic">Gratitude</span>
            </h2>
            <div className="flex justify-center gap-1 text-[#4C5C2D] pt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative"
              >
                <div className="bg-[#fdfaf3] border border-[#313E17]/10 p-10 rounded-[2.5rem] shadow-xl shadow-[#313E17]/5 hover:border-[#313E17]/30 transition-all duration-500 h-full flex flex-col">
                  {/* Quote Icon Overlay */}
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-[#1B0C0C]/10 opacity-5 group-hover:opacity-10 transition-opacity" />
                  
                  <div className="flex-grow space-y-6 text-[#1B0C0C]">
                    <p className="text-[#1B0C0C]/70 text-sm font-medium leading-relaxed italic">
                      "{review.content}"
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-[#313E17]/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#FFDE42]/10 group-hover:scale-110 transition-transform duration-500">
                      <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-[#1B0C0C]">{review.name}</h4>
                      <p className="text-[10px] font-bold text-[#313E17] italic">{review.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review Stats CTA */}
          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 border-y border-[#313E17]/10 py-12">
             <div className="text-center">
                <p className="text-3xl font-black text-[#1B0C0C]">4.9/5.0</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#1B0C0C]/60">Quality rating</p>
             </div>
             <div className="h-px w-24 bg-[#313E17]/10 hidden md:block" />
             <div className="text-center">
                <p className="text-3xl font-black text-[#1B0C0C]">2.5K+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#1B0C0C]/60">Active reviews</p>
             </div>
             <div className="h-px w-24 bg-[#313E17]/10 hidden md:block" />
             <div className="text-center">
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#313E17] hover:text-[#4C5C2D] transition-colors group">
                   Whisper your thoughts
                   <MessageSquare className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Enrollment Journey Step-by-Step */}
      <section className="py-24 bg-[#FFDE42]/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4C5C2D]">Growth Path</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[#1B0C0C]">
              Plant your <span className="text-[#313E17] italic">Seeds</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/3 left-0 w-full h-px bg-[#313E17]/10 hidden md:block border-dashed border-b-2" />
            
            {[
              { id: '01', title: 'Assess Roots', desc: 'Identify your current knowledge and spiritual aspirations.' },
              { id: '02', title: 'Select Soil', desc: 'Choose a tailored curriculum that allows your potential to thrive.' },
              { id: '03', title: 'Watering', desc: 'Gain access to resources and begin your daily academic routine.' },
              { id: '04', title: 'Harvest', desc: 'Attain Ijazah and implement your knowledge into the community.' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 text-center space-y-6 group"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#fdfaf3] border-2 border-[#313E17]/20 flex items-center justify-center group-hover:bg-[#313E17] group-hover:text-[#FFDE42] transition-all duration-500 shadow-xl">
                  <span className="text-xl font-black italic text-[#1B0C0C] group-hover:text-[#FFDE42]">{step.id}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#1B0C0C] group-hover:text-[#313E17] transition-colors">{step.title}</h4>
                  <p className="text-[#1B0C0C]/70 text-[10px] font-medium italic leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center text-[#1B0C0C]">
             <button className="inline-flex items-center gap-4 bg-[#313E17] text-[#FFDE42] px-12 py-6 rounded-3xl font-black uppercase tracking-[0.4em] hover:bg-[#4C5C2D] transition-all hover:scale-105 shadow-2xl group">
                Begin your Growth
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
             <p className="mt-6 text-[10px] text-[#1B0C0C]/50 font-bold italic uppercase tracking-widest">July Harvest Session 2026</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-[#313E17] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-[#FFDE42]">
            {/* Background elements - Brand blurs */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFDE42] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4C5C2D] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <Fingerprint className="w-16 h-16 mx-auto text-[#FFDE42]" />
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Leave your <br />
                <span className="text-[#FFDE42] italic">Legacy</span>
              </h2>
              <p className="text-[#FFDE42]/80 text-lg font-medium italic">
                Step into a lineage of knowledge that has flourished for centuries.
              </p>
              <div className="pt-4">
                <button className="bg-[#FFDE42] text-[#313E17] px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#4C5C2D] hover:text-[#FFDE42] transition-all hover:scale-105 shadow-2xl">
                  Register for July Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;
