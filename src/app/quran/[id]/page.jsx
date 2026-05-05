'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import BackButton from '../../../../components/BackButton';
import { Search } from 'lucide-react';

const SurahPage = () => {
  const params = useParams();
  const surahId = params.id;

  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readingMode, setReadingMode] = useState('quran');
  const [searchTerm, setSearchTerm] = useState('');

  const readingModes = [
    { id: 'quran', label: 'Quran', icon: '📖', color: 'from-green-600 to-emerald-600' },
    { id: 'translation', label: 'Translation', icon: '🌐', color: 'from-blue-600 to-cyan-600' },
    // { id: 'tafseer', label: 'Tafseer', icon: '📚', color: 'from-purple-600 to-pink-600' },
  ];

  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahId}/editions/quran-uthmani,en.sahih`);
        const data = await res.json();

        if (data.code === 200) {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <BackButton />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        .quran-text { font-family: 'Amiri', serif; }
      `}</style>

      {/* Header */}
      <section className="pt-20 pb-10 text-center">
        <h1 className="text-5xl font-black text-emerald-400">
          {surahData.englishName}
        </h1>
        <p className="text-4xl quran-text text-emerald-300 mt-4">
          {surahData.name}
        </p>
      </section>

      {/* Reading Modes */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {readingModes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setReadingMode(mode.id)}
            className={`px-5 py-2 rounded-lg font-bold text-xs uppercase ${
              readingMode === mode.id
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-800 text-gray-300'
            }`}
          >
            {mode.icon} {mode.label}
          </button>
        ))}
      </div>

      {/* 🔥 Quran Mode (FULL FLOW) */}
      {readingMode === "quran" && (
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-900 p-8 md:p-12 rounded-2xl border border-emerald-500/20">
            <p className="quran-text  text-2xl md:text-3xl leading-[2.8] text-right text-emerald-300">
              {surahData.ayahs.map((ayah, index) => (
                <span key={index}>
                  {ayah.arabic} ﴿{ayah.number}﴾{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}

      {/* 📖 Translation / Tafseer Mode */}
      {readingMode !== "quran" && (
        <section className="container mx-auto px-6 py-10 max-w-4xl">
          <div className="flex flex-col gap-8">
            {surahData.ayahs.map((ayah) => (
              <div key={ayah.number} className="border-b border-slate-700 pb-6">
                
                {/* Arabic */}
                <p className="quran-text text-3xl text-right text-emerald-300 leading-loose">
                  {ayah.arabic}
                </p>

                {/* Translation */}
                <p className="text-lg text-slate-400 mt-4">
                  {ayah.english}
                </p>

                {/* Tafseer */}
                {readingMode === "tafseer" && (
                  <p className="text-sm text-slate-500 mt-2 italic">
                    {ayah.tafseer}
                    Tafseer coming soon...
                  </p>
                )}

              </div>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="mt-20 flex justify-between px-10 pb-20">
        {surahData.number > 1 && (
          <Link href={`/quran/${surahData.number - 1}`} className="text-emerald-400">
            ← Previous
          </Link>
        )}
        {surahData.number < 114 && (
          <Link href={`/quran/${surahData.number + 1}`} className="text-emerald-400 ml-auto">
            Next →
          </Link>
        )}
      </div>
    </div>
  );
};

export default SurahPage;
