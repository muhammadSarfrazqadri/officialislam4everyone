'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageSquare, 
  Clock, 
  User, 
  ChevronRight, 
  ShieldCheck, 
  Send,
  Sparkles,
  Scale,
  Hash,
  Filter,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

const FatwaPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 'Worship', 'Marriage', 'Finance', 'Dietary', 'Social Issues', 'Modern Tech'
  ];

  const fatwaPosts = [
    {
      id: 1,
      question: "What is the ruling on using digital currency like Bitcoin for Zakat payment?",
      category: "Finance",
      date: "Oct 12, 2023",
      scholar: "Majlis al-Ifta",
      summary: "Digital currencies are permissible for Zakat if they meet the conditions of 'Mal' (wealth) and reach the Nisab threshold...",
      readTime: "4 min read"
    },
    {
      id: 2,
      question: "Is it permissible to perform Salah while wearing a smartwatch that displays notifications?",
      category: "Worship",
      date: "Nov 05, 2023",
      scholar: "Sh. Abdur-Rahman",
      summary: "Salah is valid as long as the notifications do not cause excessive movement or distraction that breaks the prayer's focus...",
      readTime: "3 min read"
    },
    {
      id: 3,
      question: "How should one deal with student loans that involve interest in a non-Muslim country?",
      category: "Finance",
      date: "Sep 28, 2023",
      scholar: "Darul Ifta",
      summary: "The general rule is that Riba is prohibited. However, contemporary scholars have discussed specific necessities for education...",
      readTime: "6 min read"
    },
    {
      id: 4,
      question: "What are the conditions for a valid Nikah performed over a video call?",
      category: "Marriage",
      date: "Dec 15, 2023",
      scholar: "Islamic Jurisprudence Council",
      summary: "The contract of marriage requires the presence of guardians and witnesses. Video calls add complexity to the 'Majlis' (gathering)...",
      readTime: "5 min read"
    }
  ];

  const filteredFatwas = fatwaPosts.filter(fatwa => {
    const matchesCategory = activeCategory === 'All' || fatwa.category === activeCategory;
    const matchesSearch = fatwa.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         fatwa.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fdfaf3] text-[#1B0C0C]">
      
      {/* Hero / Header Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-[#1B0C0C]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFDE42] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4C5C2D] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFDE42]/10 border border-[#FFDE42]/20 text-[#FFDE42] text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Islamic Jurisprudence Center</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-[#FFDE42] leading-none text-white"
          >
            FATWA <span className="text-[#fdfaf3]/40 italic">&</span> <br /> 
            <span className="underline decoration-[#4C5C2D] decoration-8 underline-offset-8">GUIDANCE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-[#fdfaf3]/70 text-lg font-medium italic"
          >
            Seek clarity through authentic scholarship. Browse our archive of contemporary rulings or submit your personal query to our board of qualified scholars.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto relative group mt-10"
          >
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-[#FFDE42]/40" />
            </div>
            <input 
              type="text"
              placeholder="Search rulings, topics, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#313E17]/20 border border-[#FFDE42]/10 rounded-2xl py-6 pl-16 pr-8 text-[#fdfaf3] focus:outline-none focus:ring-2 focus:ring-[#FFDE42]/30 transition-all placeholder:text-[#fdfaf3]/20 text-white"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar / Filters */}
            <aside className="lg:w-1/4 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#313E17]">
                  <Filter className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-widest text-sm">Filter Topics</h3>
                </div>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest text-left transition-all ${
                        activeCategory === cat 
                        ? 'bg-[#313E17] text-[#FFDE42] shadow-lg shadow-[#313E17]/20 translate-x-2' 
                        : 'bg-white border border-[#313E17]/10 text-[#1B0C0C]/60 hover:bg-[#313E17]/5'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              <div className="p-8 bg-[#1B0C0C] rounded-3xl text-[#FFDE42] space-y-6 border border-[#FFDE42]/10 overflow-hidden relative group">
                <Hash className="absolute -bottom-4 -right-4 w-24 h-24 opacity-5 group-hover:rotate-12 transition-transform" />
                <div className="relative z-10">
                  <p className="text-4xl font-black tracking-tighter">2,500+</p>
                  <p className="text-[10px] uppercase font-black tracking-[0.2em] opacity-60">Verified Rulings</p>
                </div>
                <div className="relative z-10">
                  <p className="text-4xl font-black tracking-tighter">15k+</p>
                  <p className="text-[10px] uppercase font-black tracking-[0.2em] opacity-60">Monthly Readers</p>
                </div>
              </div>
            </aside>

            {/* Fatwa Feed */}
            <div className="lg:w-3/4 space-y-8">
              <div className="flex items-center justify-between border-b border-[#313E17]/10 pb-6">
                <h2 className="text-2xl font-black uppercase tracking-tight text-[#1B0C0C]">
                  Recent <span className="text-[#313E17] italic">Inquiries</span>
                </h2>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#1B0C0C]/40">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Last Updated: Today</span>
                </div>
              </div>

              <motion.div layout className="grid grid-cols-1 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredFatwas.map((fatwa) => (
                    <motion.div
                      key={fatwa.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="group bg-white border border-[#313E17]/10 p-8 md:p-10 rounded-[2.5rem] hover:border-[#FFDE42]/40 transition-all duration-500 shadow-xl shadow-[#313E17]/5 relative overflow-hidden"
                    >
                      {/* Category Badge */}
                      <div className="absolute top-10 right-10">
                         <span className="px-3 py-1 bg-[#313E17]/5 border border-[#313E17]/10 rounded-lg text-[8px] font-black uppercase tracking-widest text-[#313E17]">
                           {fatwa.category}
                         </span>
                      </div>

                      <div className="space-y-6 max-w-4xl">
                        <div className="flex items-start gap-4">
                          <HelpCircle className="w-6 h-6 text-[#4C5C2D] mt-1 flex-shrink-0" />
                          <h3 className="text-xl md:text-2xl font-black leading-tight text-[#1B0C0C] group-hover:text-[#313E17] transition-colors">
                            {fatwa.question}
                          </h3>
                        </div>

                        <p className="text-[#1B0C0C]/70 text-sm md:text-base font-medium italic leading-relaxed pl-10 border-l-2 border-[#FFDE42]/20">
                          {fatwa.summary}
                        </p>

                        <div className="flex flex-wrap items-center gap-8 pt-4 pl-10">
                          <div className="flex items-center gap-2">
                             <User className="w-4 h-4 text-[#313E17]" />
                             <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{fatwa.scholar}</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <BookOpen className="w-4 h-4 text-[#4C5C2D]" />
                             <span className="text-[10px] font-black uppercase tracking-widest opacity-60 font-serif">{fatwa.readTime}</span>
                          </div>
                          <div className="flex-grow md:flex-none"></div>
                          <Link 
                            href={`/fatwa/${fatwa.id}`}
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#313E17] hover:text-[#FFDE42] transition-colors group/link"
                          >
                            Read Full Ruling
                            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {filteredFatwas.length === 0 && (
                  <div className="py-20 text-center border-2 border-dashed border-[#313E17]/10 rounded-3xl">
                    <Search className="w-12 h-12 mx-auto text-[#313E17]/20 mb-4" />
                    <p className="text-[#1B0C0C]/40 uppercase font-black text-xs tracking-widest">No matching rulings found.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Fatwa Section */}
      <section className="py-24 bg-[#1B0C0C] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFDE42]">Direct Consultation</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[#fdfaf3]">
                  Submit Your <span className="text-[#FFDE42] italic">Query</span>
                </h2>
              </div>
              <p className="text-[#fdfaf3]/70 text-lg font-medium italic">
                Our board of scholars reviews every submission with care and precision. Responses are typically provided within 48-72 hours across private and secure channels.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {[
                  { icon: ShieldCheck, title: "Confidential", desc: "Private details are never published." },
                  { icon: Sparkles, title: "Authentic", desc: "Based on Quran and Sunnah." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-[#313E17]/20 rounded-2xl border border-[#FFDE42]/10">
                    <item.icon className="w-6 h-6 text-[#FFDE42] shrink-0" />
                    <div>
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-[#fdfaf3]">{item.title}</h4>
                       <p className="text-[#fdfaf3]/50 text-[10px] italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#fdfaf3] p-8 md:p-12 rounded-[3rem] shadow-2xl space-y-6"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-[#1B0C0C]">Your Name</label>
                       <input type="text" className="w-full bg-[#313E17]/5 border border-[#313E17]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#313E17]/20" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-[#1B0C0C]">Email Address</label>
                       <input type="email" className="w-full bg-[#313E17]/5 border border-[#313E17]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#313E17]/20" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1B0C0C]">Question Category</label>
                    <select className="w-full bg-[#313E17]/5 border border-[#313E17]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#313E17]/20 appearance-none">
                      {categories.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1B0C0C]">Description</label>
                    <textarea rows={4} className="w-full bg-[#313E17]/5 border border-[#313E17]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#313E17]/20 resize-none"></textarea>
                  </div>
                </div>
                
                <button className="w-full bg-[#313E17] text-[#FFDE42] py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#4C5C2D] transition-all flex items-center justify-center gap-3 group">
                  Send Inquiry
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Jurisprudence Disclaimer Area */}
      <section className="py-12 bg-[#fdfaf3]">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-[#313E17]/10 flex flex-col md:flex-row items-center gap-8 justify-between opacity-60">
               <div className="flex items-center gap-4">
                  <ShieldCheck className="w-10 h-10 text-[#313E17]" />
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-[#1B0C0C]">Methodology Notice</h5>
                    <p className="text-[9px] italic max-w-sm">Rulings are provided following the consensus of established global Islamic councils and authentic classical texts.</p>
                  </div>
               </div>
               <button className="px-6 py-2 border border-[#1B0C0C]/10 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-[#1B0C0C]/5 transition-colors">
                  Full Disclaimer
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default FatwaPage;
