'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, Clock, Share2, Search } from 'lucide-react';

const MediaPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const videos = [
    {
      id: 1,
      title: "The Importance of Patience in Islam",
      category: "lecture",
      duration: "15:42",
      date: "Oct 12, 2023",
      thumbnail: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800",
      description: "A deep dive into the virtue of Sabr (Patience) as mentioned in the Holy Quran and Sunnah."
    },
    {
      id: 2,
      title: "Beautiful Morning Adhkar",
      category: "dhikr",
      duration: "08:15",
      date: "Sep 28, 2023",
      thumbnail: "https://images.unsplash.com/photo-1542810634-71277d903dc2?auto=format&fit=crop&q=80&w=800",
      description: "Start your day with remembrance of Allah. Daily morning dhikr for peace and protection."
    },
    {
      id: 3,
      title: "History of the Golden Age",
      category: "documentary",
      duration: "42:00",
      date: "Aug 15, 2023",
      thumbnail: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=800",
      description: "An educational documentary on Islamic contributions to science and medicine."
    },
    {
      id: 4,
      title: "Understanding Surah Al-Kahf",
      category: "lecture",
      duration: "25:30",
      date: "Jan 10, 2024",
      thumbnail: "https://images.unsplash.com/photo-1584281723351-9dec741c099b?auto=format&fit=crop&q=80&w=800",
      description: "The major themes and lessons derived from the weekly recitation of Surah Al-Kahf."
    },
    {
      id: 5,
      title: "Nasheed: Light of My Life",
      category: "nasheed",
      duration: "04:50",
      date: "Nov 05, 2023",
      thumbnail: "https://images.unsplash.com/photo-1610018556010-6a11691bc905?auto=format&fit=crop&q=80&w=800",
      description: "A soulful vocal-only nasheed praising the Prophet (peace be upon him)."
    },
    {
      id: 6,
      title: "Prophetic Manners (Adab)",
      category: "lecture",
      duration: "18:20",
      date: "Dec 22, 2023",
      thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=800",
      description: "How to implement the beautiful character and manners of the Prophet in modern life."
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesFilter = filter === 'all' || video.category === filter;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-[var(--secondary)] text-foreground py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
              Islamic <span className="text-[var(--primary)]">Media</span>
            </h1>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
              Immerse yourself in high-quality Islamic content, from scholarly lectures to soul-stirring recitations and educational documentaries.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Play Icon */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5 select-none pointer-events-none hidden lg:block">
            <Play className="w-[30rem] h-[30rem] stroke-white fill-white" />
        </div>
      </section>

      {/* Controls: Search & Categories */}
      <section className="bg-background border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:max-w-md group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[var(--primary)] transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search for videos or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-50 rounded-full py-4 pl-12 pr-6 text-sm outline-none focus:border-[var(--primary)] focus:bg-background transition-all text-[var(--secondary)]"
                />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                {['all', 'lecture', 'documentary', 'dhikr', 'nasheed'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                            filter === cat 
                            ? 'bg-[var(--primary)] text-foreground shadow-lg shadow-[var(--primary)]/20' 
                            : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-[var(--secondary)]'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-16">
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-[0.4em]">Latest Content</span>
                <h2 className="text-4xl font-black text-[var(--secondary)] uppercase tracking-tighter">Explore Repository</h2>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">
                Showing {filteredVideos.length} items
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
                {filteredVideos.map((video) => (
                    <motion.div
                        layout
                        key={video.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="group flex flex-col h-full"
                    >
                        {/* Thumbnail Container */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-xl mb-6">
                            <img 
                                src={video.thumbnail} 
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-[var(--secondary)]/20 group-hover:bg-[var(--primary)]/40 transition-colors duration-500"></div>
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-background/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-background group-hover:scale-110 transition-all duration-300 shadow-2xl">
                                    <Play className="w-6 h-6 fill-[var(--secondary)] text-[var(--secondary)] group-hover:fill-[var(--primary)] group-hover:text-[var(--primary)] translate-x-0.5" />
                                </div>
                            </div>

                            {/* Duration Badge */}
                            <div className="absolute bottom-4 right-4 bg-[var(--secondary)]/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-lg text-[10px] font-black tracking-widest">
                                {video.duration}
                            </div>
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-[var(--primary)] px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                                {video.category}
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col flex-grow px-2">
                            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {video.date}</span>
                                <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {video.duration}</span>
                            </div>
                            
                            <h3 className="text-xl font-black text-[var(--secondary)] uppercase tracking-tight mb-4 group-hover:text-[var(--primary)] transition-colors leading-tight">
                                {video.title}
                            </h3>
                            
                            <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2 mb-6 opacity-70">
                                {video.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                                    Watch Video <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                                <button className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-300 hover:text-[var(--secondary)]">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        {filteredVideos.length === 0 && (
            <div className="py-40 text-center">
                <Search className="w-16 h-16 text-slate-100 mx-auto mb-6" />
                <p className="text-[var(--secondary)] font-black uppercase tracking-widest text-sm">No media found matching your search.</p>
                <button 
                  onClick={() => {setFilter('all'); setSearchTerm('');}}
                  className="mt-6 text-[var(--primary)] font-black uppercase tracking-widest text-[10px] underline underline-offset-8"
                >
                    Clear All Filters
                </button>
            </div>
        )}
      </section>

      {/* Featured Playlist Promotion */}
      <section className="container mx-auto px-6 pb-32">
        <div className="bg-[var(--secondary)] rounded-[3rem] p-12 md:p-24 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1542810634-71277d903dc2?auto=format&fit=crop&q=80&w=1600" 
                  className="w-full h-full object-cover"
                  alt="Background"
                />
            </div>
            
            <div className="relative z-10 max-w-2xl">
                <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-[0.5em] mb-6 block">Featured Series</span>
                <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter mb-8 leading-none">
                    The Lives of the <br /> <span className="text-[var(--primary)]">Great Sahaba</span>
                </h2>
                <div className="flex gap-4">
                    <button className="bg-[var(--primary)] text-foreground px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[var(--primary)]/20">
                        Start Watching Series
                    </button>
                    <button className="bg-background/10 backdrop-blur-md text-foreground border border-white/20 px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-background/20 transition-all">
                        View Details
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
