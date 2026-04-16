'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Globe, BookMarked } from 'lucide-react';

const QuranPage = () => {
  const [surahs, setSurahs] = useState([]);
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [revelationFilter, setRevelationFilter] = useState('all');
  const [readingMode, setReadingMode] = useState('quran'); // quran, translation, tafseer

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

  const readingModes = [
    { id: 'quran', label: 'Quran', icon: '📖', color: 'from-green-600 to-emerald-600' },
    { id: 'translation', label: 'Translation', icon: '🌐', color: 'from-blue-600 to-cyan-600' },
    { id: 'tafseer', label: 'Tafseer', icon: '📚', color: 'from-purple-600 to-pink-600' },
  ];

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@400;700;900&display=swap');
        .quran-text { font-family: 'Amiri', serif; }
        .arabic-title { font-family: 'Amiri', serif; }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 bg-clip-text text-transparent">
              The Holy Quran
            </h1>
            <p className="text-7xl arabic-title text-emerald-300 mb-6">القرآن الكريم</p>
            <p className="text-gray-300 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Explore the divine revelation of Allah with authentic Arabic text, translations, and detailed Tafseer explanations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reading Mode Selection */}
      <section className="sticky top-10 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-emerald-500/20 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400/60 group-focus-within:text-emerald-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search by name, number, or Arabic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 border border-emerald-500/30 rounded-lg py-4 pl-12 pr-6 text-sm outline-none focus:border-emerald-400 focus:shadow-lg focus:shadow-emerald-500/20 transition-all text-gray-100 placeholder-gray-500"
              />
            </div>

            {/* Reading Modes & Filters */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              {/* Reading Mode Buttons */}
              <div className="flex gap-3 flex-wrap">
                {readingModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setReadingMode(mode.id)}
                    className={`px-5 py-2 rounded-lg font-bold uppercase text-xs tracking-wider transition-all ${
                      readingMode === mode.id
                        ? `bg-gradient-to-r ${mode.color} text-white shadow-lg`
                        : 'bg-slate-800 text-gray-300 border border-slate-700 hover:border-emerald-500/50'
                    }`}
                  >
                    {mode.icon} {mode.label}
                  </button>
                ))}
              </div>

              {/* Revelation Filter */}
              <div className="flex gap-2">
                {['all', 'meccan', 'medinan'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setRevelationFilter(filter)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      revelationFilter === filter 
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/50' 
                        : 'bg-slate-800 border border-slate-700 text-gray-300 hover:border-emerald-500/50'
                    }`}
                  >
                    {filter === 'all' ? 'All' : filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surah Grid */}
      <section className="container mx-auto px-6 py-16">
        {error ? (
          <div className="text-center py-20 text-emerald-400 font-black uppercase tracking-widest text-xl">{error}</div>
        ) : (
          <>
            <div className="flex justify-between items-end mb-12 border-b border-emerald-500/30 pb-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">📖 Surah Directory</span>
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">114 Divine Chapters</h2>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
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
                    <Link href={`/quran/${surah.number}?mode=${readingMode}`}>
                      <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/20 hover:border-emerald-400/60 p-8 rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all cursor-pointer h-full flex flex-col overflow-hidden">
                        
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all"></div>

                        {/* Surah Number Background */}
                        <div className="absolute -top-10 -right-10 text-8xl font-black text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors">
                          {surah.number}
                        </div>

                        <div className="relative z-10 flex justify-between items-start mb-8">
                          <div className="w-14 h-14 bg-gradient-to-br from-emerald-600/20 to-green-600/20 border border-emerald-500/40 rounded-xl flex items-center justify-center">
                            <span className="text-lg font-black text-emerald-400">{surah.number}</span>
                          </div>
                          <div className="text-right max-w-xs">
                            <p className="text-xl font-black arabic-title text-emerald-300 group-hover:text-emerald-200 transition-colors mb-2 leading-tight">{surah.name}</p>
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400/70 px-3 py-1 bg-emerald-500/10 rounded-md inline-block">
                              {surah.revelationType}
                            </span>
                          </div>
                        </div>

                        <div className="mt-auto relative z-10">
                          <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                            {surah.englishName}
                          </h3>
                          <p className="text-sm text-gray-400 font-medium italic mb-6 leading-relaxed">
                            "{surah.englishNameTranslation}"
                          </p>
                          
                          <div className="flex items-center justify-between pt-6 border-t border-emerald-500/20">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-emerald-400" />
                              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                                {surah.numberOfAyahs} Verses
                              </span>
                            </div>
                            <span className="text-xs font-black bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                              Read →
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
                <Search className="w-16 h-16 text-emerald-500/30 mx-auto mb-4" />
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No Surahs found matching your search.</p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default QuranPage;
