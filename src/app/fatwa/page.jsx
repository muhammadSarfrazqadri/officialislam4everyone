'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MessageSquare, Clock, ArrowRight, Filter, ChevronDown, CheckCircle, ShieldCheck, HelpCircle, UserCheck, Scale, Globe, BookOpen } from 'lucide-react';
import Link from 'next/link';

const FatwaPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Fiqh', 'Business', 'Hajj & Umrah', 'Zakat', 'Family Law', 'Mental Health'];

  const fatwas = [
    { 
      id: 1,
      question: 'What is the importance of prayer in daily life?', 
      answer: 'Prayer (Salah) is the second pillar of Islam and the primary connection between the servant and the Creator. It serves as a spiritual anchor, providing discipline, gratitude, and a constant reminder of our purpose in this world.', 
      category: 'Fiqh', 
      date: 'Oct 20, 2023',
      views: '12k',
      mufti: 'Sheikh Yahya Al-Habib',
      status: 'Verified'
    },
    { 
      id: 2,
      question: 'Is crypto trading allowed in Shariah?', 
      answer: 'The permissibility of cryptocurrency depends on its underlying value, transparency, and usage in a specific jurisdiction. Scholars emphasize avoiding Gharar (uncertainty) and ensuring the asset has real utility rather than purely speculative gambling.', 
      category: 'Business', 
      date: 'Oct 22, 2023',
      views: '5.6k',
      mufti: 'Dr. Umar Qudrat',
      status: 'Verified'
    },
    { 
      id: 3,
      question: 'How to perform Umrah step by step?', 
      answer: 'Umrah involves four key pillars: Ihram (intention and dress), Tawaf (circumambulation of the Kaaba), Sa’i (walking between Safa and Marwa), and Halq/Taqsir (cutting of hair). Each step must be performed with specific intentions and supplications.', 
      category: 'Hajj & Umrah', 
      date: 'Oct 25, 2023',
      views: '8.1k',
      mufti: 'Sheikh Ibrahim Zayed',
      status: 'Verified'
    },
    { 
      id: 4,
      question: 'Can zakat be given to non-Muslim relatives?', 
      answer: 'Zakat is specifically for Muslims in need (the eight categories mentioned in Quran 9:60). However, Sadaqah (voluntary charity) can and should be given to non-Muslim relatives as an act of kindness and family bond.', 
      category: 'Zakat', 
      date: 'Nov 1, 2023',
      views: '3.2k',
      mufti: 'Prof. Fatima Mahmoud',
      status: 'Verified'
    },
  ];

  const filteredFatwas = fatwas.filter(f => {
    const matchesFilter = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = f.question.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Fatwa Hero */}
      <section className="bg-[#222222] text-white py-40 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              className="h-2 bg-[#E14D4D] mb-12 rounded-full"
            ></motion.div>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter mb-8 leading-[0.8] mix-blend-difference"
            >
              Fatwa <span className="text-[#E14D4D]">Corner</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 font-medium mb-16 max-w-3xl leading-relaxed"
            >
              Seek authenticated guidance for modern complexities. Jurisprudence rooted in tradition, applied to the contemporary world by leading Muftis.
            </motion.p>
            
            <div className="flex flex-col md:flex-row gap-6 items-center w-full max-w-4xl">
                <div className="relative flex-grow w-full group">
                    <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-[#E14D4D] transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search the Fatwa archive (e.g. Finance, Marriage, Worship)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white/5 border-2 border-white/10 rounded-[2rem] py-8 pl-20 pr-10 text-lg outline-none focus:border-[#E14D4D] focus:bg-white/10 transition-all font-bold placeholder:text-slate-600"
                    />
                </div>
                <button className="w-full md:w-auto bg-[#E14D4D] text-white px-16 py-8 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_25px_50px_-12px_rgba(225,77,77,0.4)]">
                    Ask a Question
                </button>
            </div>
            
            <div className="mt-16 flex items-center gap-12 text-slate-500 uppercase font-black text-[10px] tracking-[0.4em]">
                <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-[#E14D4D]"/> Global Council</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#E14D4D]"/> Peer Reviewed</span>
                <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-[#E14D4D]"/> Shariah Compliant</span>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#E14D4D]/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 p-24 text-[25rem] font-black text-white/5 opacity-[0.03] leading-none select-none pointer-events-none translate-x-1/2">
             GUIDANCE
        </div>
      </section>

      {/* Trust & Methodology markers */}
      <section className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-16 md:gap-32">
                {[
                    { val: "24-48h", label: "Response Time" },
                    { val: "15k+", label: "Archive Queries" },
                    { val: "12", label: "Senior Muftis" },
                    { val: "100%", label: "Privacy Ensured" }
                ].map((s, i) => (
                    <div key={i} className="text-center">
                        <h4 className="text-4xl font-black text-[#222222] tracking-tighter mb-1">{s.val}</h4>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{s.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row gap-24">
            {/* Extended Sidebar */}
            <aside className="lg:w-1/4 space-y-16">
                <div>
                   <h3 className="text-xs font-black text-[#222222] uppercase tracking-[0.4em] mb-10 border-l-4 border-[#E14D4D] pl-6">Browse by Subject</h3>
                    <div className="flex flex-col gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`flex items-center justify-between px-8 py-6 rounded-3xl font-black uppercase tracking-widest text-[10px] transition-all duration-500 border-2 ${
                                    activeCategory === cat 
                                    ? 'bg-[#222222] border-[#222222] text-white shadow-2xl scale-105' 
                                    : 'bg-white border-slate-50 text-slate-400 hover:border-[#E14D4D] hover:text-[#E14D4D]'
                                }`}
                            >
                                {cat}
                                {activeCategory === cat && <motion.div layoutId="dot" className="w-2 h-2 rounded-full bg-[#E14D4D]" />}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-[#222222] p-12 rounded-[4rem] text-white relative overflow-hidden group">
                    <div className="relative z-10 space-y-8">
                        <Scale className="w-16 h-16 text-[#E14D4D] group-hover:rotate-12 transition-transform duration-700" />
                        <h4 className="text-2xl font-black uppercase tracking-tighter leading-tight">The Board of Muftis</h4>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed">Our council features leading jurists from Al-Azhar, Medina University, and Darul Uloom, ensuring balanced and accurate guidance.</p>
                        <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#E14D4D] hover:gap-5 transition-all">
                            View Scholarly Board <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-white/5 pointer-events-none select-none leading-none rotate-12">فقه</div>
                </div>
            </aside>

            {/* Premium Fatwa List */}
            <div className="lg:w-3/4">
                <div className="flex items-center justify-between mb-16 border-b-2 border-slate-50 pb-12">
                    <h2 className="text-4xl font-black text-[#222222] uppercase tracking-tighter">Verified <span className="text-[#E14D4D]">Rulings</span></h2>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-[#222222] transition-colors">
                            <Filter className="w-4 h-4" /> Filter Recent
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredFatwas.map((fatwa) => (
                            <Link 
                                href={`/fatwa/${fatwa.id}`}
                                key={fatwa.id}
                                className="block"
                            >
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="group relative bg-white p-12 rounded-[4rem] border-2 border-slate-50 hover:border-[#E14D4D]/20 hover:shadow-[0_60px_100px_-40px_rgba(34,34,34,0.1)] transition-all duration-700 cursor-pointer overflow-hidden"
                                >
                                    <div className="flex flex-col md:flex-row gap-12">
                                        <div className="flex-shrink-0">
                                            <div className="w-24 h-24 rounded-[2.5rem] bg-[#222222] flex items-center justify-center text-white font-black text-3xl group-hover:bg-[#E14D4D] transition-all duration-700 shadow-xl group-hover:shadow-[#E14D4D]/30 group-hover:-rotate-6">
                                                Q
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-8">
                                            <div className="flex flex-wrap items-center gap-6">
                                                <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full bg-slate-50 text-slate-500 border border-slate-100">{fatwa.category}</span>
                                                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-300 tracking-widest">
                                                    <Clock className="w-3.5 h-3.5" /> {fatwa.date}
                                                </div>
                                                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-300 tracking-widest ml-auto">
                                                    {fatwa.views} Reached
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-black text-[#222222] leading-[1.1] uppercase tracking-tighter group-hover:text-[#E14D4D] transition-colors mb-6">
                                                {fatwa.question}
                                            </h3>

                                            <div className="relative pl-12 border-l-4 border-slate-50 group-hover:border-[#E14D4D]/20 transition-all">
                                                <p className="text-lg text-slate-500 font-medium leading-relaxed line-clamp-3">
                                                    {fatwa.answer}
                                                </p>
                                            </div>

                                            <div className="pt-10 border-t border-slate-50 flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                                        <UserCheck className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] font-black uppercase tracking-widest text-[#222222]">{fatwa.mufti}</p>
                                                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-300">Council Mufti</p>
                                                    </div>
                                                </div>
                                                <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#222222] group-hover:text-[#E14D4D] transition-all group-hover:gap-6">
                                                    Full Response <ArrowRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>

                    {filteredFatwas.length === 0 && (
                        <div className="py-40 text-center flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-10">
                                <HelpCircle className="w-16 h-16 text-slate-200" />
                            </div>
                            <h3 className="text-3xl font-black text-[#222222] uppercase tracking-tighter mb-4">No Rulings Found</h3>
                            <p className="text-slate-400 font-medium mb-10">Your search did not return any published fatwas. Please try different keywords.</p>
                            <button 
                                onClick={() => {setActiveCategory('All'); setSearchTerm('');}}
                                className="text-[#E14D4D] font-black uppercase tracking-[0.3em] text-[11px] border-b-2 border-[#E14D4D] pb-1 hover:pb-2 transition-all"
                            >
                                Reset Search Parameters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default FatwaPage;
