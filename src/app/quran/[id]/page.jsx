'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function SurahPage() {

  const { id } = useParams();

  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ⭐ MODE STATE
  const [mode, setMode] = useState("quran"); // quran | translation

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad`
        );

        const data = await res.json();

        const arabic = data?.data?.[0]?.ayahs || [];
        const english = data?.data?.[1]?.ayahs || [];

        const combined = arabic.map((ayah, i) => ({
          number: ayah?.numberInSurah,
          arabic: ayah?.text,
          english: english?.[i]?.text,
        }));

        setSurahData({
          englishName: data?.data?.[0]?.englishName,
          englishNameTranslation: data?.data?.[0]?.englishNameTranslation,
          ayahs: combined,
        });

      } catch (err) {
        setError("Failed to load Surah");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSurah();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  const ayahs = surahData?.ayahs || [];
  

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          {surahData?.englishName}
        </h1>

        <p className="text-muted-foreground">
          {surahData?.englishNameTranslation}
        </p>
      </div>

      {/* ================= MODE BUTTONS ================= */}
      <div className="flex justify-center gap-3 mb-10">

        <button
          onClick={() => setMode("quran")}
          className={`px-5 py-2 rounded-full text-sm border transition ${
            mode === "quran"
              ? "bg-primary text-white"
              : "bg-card border-border"
          }`}
        >
          📖 Quran
        </button>

        <button
          onClick={() => setMode("translation")}
          className={`px-5 py-2 rounded-full text-sm border transition ${
            mode === "translation"
              ? "bg-primary text-white"
              : "bg-card border-border"
          }`}
        >
          🌐 Translation
        </button>

      </div>

      {/* ================= ARABIC FONT ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        .arabic {
          font-family: 'Amiri', serif;
          direction: rtl;
        }
      `}</style>

      {/* ================= AYAH LIST ================= */}
      <div className="max-w-4xl mx-auto space-y-6">

        {ayahs.map((ayah, i) => (

          <div
            key={i}
            className="border border-border rounded-xl p-5 bg-card hover:bg-secondary transition"
          >

            {/* ARABIC (ALWAYS SHOW) */}
            <p className="arabic text-right text-2xl leading-loose">
              {ayah.arabic}
            </p>

            {/* TRANSLATION (ONLY IF MODE) */}
            {mode === "translation" && (
              <p className="text-sm text-muted-foreground mt-4">
                {ayah.english}
              </p>
            )}

            {/* AYAH NUMBER */}
            <div className="mt-3 flex justify-end">
              <span className="text-xs text-primary border border-border px-3 py-1 rounded-full">
                {ayah.number}
              </span>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}