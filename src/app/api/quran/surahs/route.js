'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function SurahPage() {

  const { id } = useParams();

  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSurah() {
      try {
        setLoading(true);

        const res = await fetch(`/api/quran/surah/${id}`);
        const json = await res.json();

        setSurah(json?.data || []);

      } catch (error) {
        setSurah([]);
      } finally {
        setLoading(false);
      }
    }

    if (id) loadSurah();
  }, [id]);

  // SAFE DATA
  const arabic = surah?.[0]?.ayahs || [];
  const translation = surah?.[1]?.ayahs || [];

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-10">

        <h1 className="text-3xl md:text-4xl font-bold">
          {surah?.[0]?.englishName || "Loading..."}
        </h1>

        <p className="text-muted-foreground mt-2">
          {surah?.[0]?.englishNameTranslation || ""}
        </p>

        <p className="text-xs text-primary mt-2">
          {surah?.[0]?.numberOfAyahs
            ? `${surah[0].numberOfAyahs} Ayahs`
            : ""}
        </p>

      </div>

      {/* ================= LOADING ================= */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* ================= AYAH LIST ================= */}
      {!loading && (
        <div className="max-w-4xl mx-auto space-y-6">

          {arabic.length > 0 ? (
            arabic.map((ayah, i) => (

              <div
                key={i}
                className="border border-border rounded-xl p-5 bg-card hover:bg-secondary transition"
              >

                {/* ARABIC */}
                <p className="text-right text-2xl leading-loose font-arabic">
                  {ayah.text}
                </p>

                {/* TRANSLATION */}
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  {translation?.[i]?.text || ""}
                </p>

                {/* AYAH NUMBER */}
                <div className="mt-3 flex justify-end">

                  <span className="text-xs text-primary border border-border px-3 py-1 rounded-full">
                    Ayah {ayah.numberInSurah}
                  </span>

                </div>

              </div>

            ))
          ) : (
            <p className="text-center text-muted-foreground">
              No data found
            </p>
          )}

        </div>
      )}

    </div>
  );
}