'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen } from 'lucide-react';

const QuranPage = () => {
  const [surahs, setSurahs] = useState([]);
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [revelationFilter, setRevelationFilter] = useState('all');

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const res = await fetch('https://api.alquran.cloud/v1/surah');
        const data = await res.json();
        setSurahs(data.data);
        setFilteredSurahs(data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load Quran chapters. Please try again later.");
        setLoading(false);
      }
    };
    fetchSurahs();
  }, []);

  useEffect(() => {
    const results = surahs.filter(surah => {
      const matchesSearch = 
        surah.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        surah.name.includes(searchTerm) ||
        surah.number.toString().includes(searchTerm);
      
      const matchesFilter = 
        revelationFilter === 'all' || 
        surah.revelationType.toLowerCase() === revelationFilter.toLowerCase();

      return matchesSearch && matchesFilter;
    });
    setFilteredSurahs(results);
  }, [searchTerm, revelationFilter, surahs]);

  if (loading) return (
    <div className="min-h-screen bg-background flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted text-foreground py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
              The Holy <span className="text-[var(--primary)]">Quran</span>
            </h1>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
              Explore the divine revelation with verse-by-verse translations and detailed metadata for all 114 Surahs.
            </p>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 select-none pointer-events-none translate-x-1/4 translate-y-1/4">
             <span className="text-[20rem] font-serif italic text-muted-foreground">القرآن</span>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-muted border-b border-border sticky top-0 z-40 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-6 py-6 font-sans">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-[var(--primary)] transition-colors" />
              <input 
                type="text" 
                placeholder="Search by name, number, or Arabic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-background border border-border rounded-full py-4 pl-12 pr-6 text-sm outline-none focus:border-primary transition-all shadow-sm focus:shadow-xl focus:shadow-[var(--primary)]/5 text-foreground"
              />
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              {['all', 'meccan', 'medinan'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setRevelationFilter(filter)}
                  className={`flex-1 md:flex-none px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    revelationFilter === filter 
                    ? 'text-foreground text-foreground shadow-lg shadow-[var(--primary)]/20' 
                    : 'bg-background border border-border text-muted-foreground hover:border-primary hover:text-[var(--primary)]'
                  }`}
                >
                  {filter === 'all' ? 'All Surahs' : filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Surah List */}
      <section className="container mx-auto px-6 py-16">
        {error ? (
          <div className="text-center py-20 text-[var(--primary)] font-black uppercase tracking-widest text-xl">{error}</div>
        ) : (
          <>
            <div className="flex justify-between items-end mb-12 border-b-2 border-border pb-6">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-[0.3em]">Directory</span>
                    <h2 className="text-3xl font-black text-foreground uppercase tracking-tighter">114 Total Revelations</h2>
                </div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-foreground">
                    Showing {filteredSurahs.length} results
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredSurahs.map((surah) => (
                  <motion.div
                    layout
                    key={surah.number}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={`/quran/${surah.number}`}>
                      <div className="group bg-card border border-border p-8 rounded-3xl hover:border-primary hover:shadow-2xl hover:shadow-xl transition-all relative overflow-hidden flex flex-col h-full cursor-pointer">
                        {/* Background overlay */}
                        <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                             <span className="text-8xl font-black tracking-tighter text-foreground">{surah.number}</span>
                        </div>

                        <div className="flex justify-between items-start mb-10 relative z-10">
                          <div className="w-12 h-12 bg-muted border border-border rounded-2xl flex items-center justify-center text-xs font-black text-muted-foreground group-hover:text-foreground group-hover:text-foreground group-hover:border-primary transition-all">
                            {surah.number}
                          </div>
                          <div className="text-right">
                            <p className="text-3xl font-serif text-foreground group-hover:text-[var(--primary)] transition-colors rtl mb-1">{surah.name}</p>
                            <span className="text-[9px] font-black uppercase tracking-widest text-[var(--primary)] text-foreground/10 px-2 py-1 rounded-md">{surah.revelationType}</span>
                          </div>
                        </div>

                        <div className="mt-auto relative z-10">
                          <h3 className="text-xl font-black text-foreground uppercase tracking-tight group-hover:translate-x-1 transition-transform">{surah.englishName}</h3>
                          <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-6 opacity-60 italic">{surah.englishNameTranslation}</p>
                          
                          <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-3 h-3 text-slate-300" />
                                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{surah.numberOfAyahs} Ayahs</span>
                            </div>
                            <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-[0.3em] translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                              Read Now
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredSurahs.length === 0 && (
              <div className="py-20 text-center">
                <Search className="w-12 h-12 text-slate-100 mx-auto mb-4" />
                <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">No Surahs found matching your search.</p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default QuranPage;
