'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

const SurahPage = () => {
  const params = useParams();
  const surahId = params.id;
  
  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahId}/editions/quran-uthmani,en.sahih`);
        const data = await res.json();
        
        if (data.code === 200) {
          // data.data[0] is Arabic, data.data[1] is English
          const arabicAyahs = data.data[0].ayahs;
          const englishAyahs = data.data[1].ayahs;
          
          const combinedAyahs = arabicAyahs.map((ayah, index) => ({
            number: ayah.numberInSurah,
            arabic: ayah.text,
            english: englishAyahs[index].text
          }));

          setSurahData({
            number: data.data[0].number,
            name: data.data[0].name,
            englishName: data.data[0].englishName,
            englishNameTranslation: data.data[0].englishNameTranslation,
            revelationType: data.data[0].revelationType,
            numberOfAyahs: data.data[0].numberOfAyahs,
            ayahs: combinedAyahs
          });
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to load Surah content.");
        setLoading(false);
      }
    };
    fetchSurahData();
  }, [surahId]);

  if (loading) return (
    <div className="min-h-screen bg-background flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (error) return (
     <div className="min-h-screen bg-background flex flex-col justify-center items-center gap-6">
        <p className="text-[var(--primary)] font-black text-2xl uppercase tracking-tighter">{error}</p>
        <Link href="/quran" className="px-8 py-3 bg-[var(--secondary)] text-foreground rounded-full font-bold uppercase tracking-widest text-xs">Back to Quran</Link>
     </div>
  );

  return (
    <div className="min-h-screen bg-background text-[var(--secondary)]">
      {/* Surah Header */}
      <section className="bg-slate-50 border-b-8 border-[var(--primary)] py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-background text-[var(--primary)] rounded-full text-xs font-black uppercase tracking-widest mb-4"
          >
            Surah {surahData.number}
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-5xl md:text-8xl font-black text-[var(--secondary)] uppercase tracking-tighter mb-4"
          >
            {surahData.englishName}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="text-xl text-slate-400 font-bold uppercase tracking-widest mb-8"
          >
            {surahData.englishNameTranslation}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center flex-col items-center gap-8"
          >
            <p className="text-4xl md:text-6xl font-serif text-slate-800 rtl mb-8 italic">
                {surahData.number === 1 || surahData.number === 9 ? "" : "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"}
            </p>
            <div className="flex justify-center gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
                <span>{surahData.numberOfAyahs} Verses</span>
                <span className="text-[var(--primary)]">•</span>
                <span>{surahData.revelationType}</span>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </section>

      {/* Verse List */}
      <section className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="flex flex-col gap-4">
          {surahData.ayahs.map((ayah) => (
            <motion.div 
              key={ayah.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-10 md:p-16 border-b border-border hover:bg-slate-50/50 transition-all group relative"
            >
              <div className="flex flex-col gap-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl bg-slate-50 border border-border flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:bg-[var(--primary)] group-hover:text-foreground group-hover:border-[var(--primary)] transition-all shadow-sm">
                        {ayah.number}
                    </span>
                  </div>
                  <p className="text-4xl md:text-6xl font-serif text-[var(--secondary)] text-right leading-[2.2] rtl grow">
                    {ayah.arabic}
                  </p>
                </div>
                
                <div className="relative pl-10 md:pl-16">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 group-hover:bg-[var(--primary)] transition-colors rounded-full"></div>
                    <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed italic max-w-4xl">
                        {ayah.english}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-border pt-20 px-6">
            <Link href="/quran" className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-slate-400 hover:text-[var(--secondary)] transition-colors">
                <span className="group-hover:-translate-x-2 transition-transform">←</span>
                Index
            </Link>
            
            <div className="flex gap-6">
              {surahData.number > 1 && (
                <Link 
                    href={`/quran/${surahData.number - 1}`} 
                    className="bg-background border-2 border-[var(--secondary)] text-[var(--secondary)] px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[var(--secondary)] hover:text-foreground transition-all"
                >
                    Previous
                </Link>
              )}
              {surahData.number < 114 && (
                <Link 
                    href={`/quran/${surahData.number + 1}`} 
                    className="bg-[var(--primary)] text-foreground px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-[var(--primary)]/30 hover:scale-105 active:scale-95 transition-all"
                >
                    Next Surah
                </Link>
              )}
            </div>
        </div>
      </section>
    </div>
  );
};

export default SurahPage;
