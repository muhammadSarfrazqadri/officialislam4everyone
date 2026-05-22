'use client';

import React, { useEffect, useState } from 'react';
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

  // ================= FETCH DATA =================
  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        setLoading(true);

        const res = await fetch('https://api.alquran.cloud/v1/surah');
        const data = await res.json();

        const safeData = data?.data || [];

        setSurahs(safeData);
        setFilteredSurahs(safeData);

      } catch (err) {
        setError('Failed to load Quran chapters.');
        setSurahs([]);
        setFilteredSurahs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  // ================= SEARCH + FILTER (DEBOUNCED) =================
  useEffect(() => {
    const timeout = setTimeout(() => {

      const results = surahs.filter((surah) => {

        const name = surah?.englishName?.toLowerCase() || '';
        const arabic = surah?.name || '';
        const number = surah?.number?.toString() || '';

        const matchesSearch =
          name.includes(searchTerm.toLowerCase()) ||
          arabic.includes(searchTerm) ||
          number.includes(searchTerm);

        const matchesFilter =
          revelationFilter === 'all' ||
          surah?.revelationType?.toLowerCase() === revelationFilter;

        return matchesSearch && matchesFilter;
      });

      setFilteredSurahs(results);

    }, 300);

    return () => clearTimeout(timeout);

  }, [searchTerm, revelationFilter, surahs]);

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ================= ERROR =================
  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-red-500 font-bold">{error}</p>
        <Link href="/" className="text-primary underline">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        .quran-text { font-family: 'Amiri', serif; }
      `}</style>

      {/* ================= HEADER ================= */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          The Holy Quran
        </h1>
        <p className="text-muted-foreground mt-2">
          114 Divine Chapters
        </p>
      </div>

      {/* ================= SEARCH + FILTER ================= */}
      <div className="max-w-4xl mx-auto mb-10 space-y-4">

        {/* SEARCH */}
        <div className="relative">
          <Search className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Surah..."
            className="w-full border border-border bg-card rounded-xl pl-10 pr-4 py-3 outline-none"
          />
        </div>

        {/* FILTER */}
        <div className="flex gap-2 flex-wrap">
          {['all', 'meccan', 'medinan'].map((type) => (
            <button
              key={type}
              onClick={() => setRevelationFilter(type)}
              className={`px-4 py-2 rounded-full text-xs border transition ${
                revelationFilter === type
                  ? 'bg-primary text-white'
                  : 'bg-card border-border'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

      </div>

      {/* ================= SURAH LIST ================= */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        <AnimatePresence>

          {filteredSurahs.map((surah) => (

            <motion.div
              key={surah?.number}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >

              <Link href={`/quran/${surah?.number}`}>

                <div className="relative bg-card border border-border rounded-xl p-6 hover:bg-secondary hover:border-primary hover:scale-105 transition-all duration-700 hover:text-primary cursor-pointer">

                  {/* NUMBER */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary text-white">
                      {surah?.number}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {surah?.revelationType}
                    </span>
                    
                    <span className="absolute top-[41%] right-8 text-[2rem] quran-text h-5 overflow-visible text-muted-foreground opacity-10 font-bold hover:opacity-50  transition">
                      {surah?.name}
                    </span>


                  </div>

                  {/* NAME */}
                  <h2 className="text-lg font-bold">
                    {surah?.englishName}
                  </h2>

                  <p className="text-sm text-muted-foreground italic">
                    {surah?.englishNameTranslation}
                  </p>

                  {/* AYAH COUNT */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    {surah?.numberOfAyahs} Ayahs
                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </AnimatePresence>

      </div>

      {/* ================= EMPTY STATE ================= */}
      {filteredSurahs.length === 0 && (
        <p className="text-center text-muted-foreground mt-10">
          No Surah found
        </p>
      )}

    </div>
  );
};

export default QuranPage;