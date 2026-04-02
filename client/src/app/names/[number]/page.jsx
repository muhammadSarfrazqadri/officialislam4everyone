'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Share2, Copy, Download, FileText, CheckCircle2, Volume2, Bookmark, ExternalLink, Loader2 } from 'lucide-react';

const NameDetailPage = ({ params }) => {
  const { number } = React.use(params);
  const [nameData, setNameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // Manual expanded data for high-level details
  const extraDetails = {
    1: { urdu: "اللہ", detail: "The Greatest Name, comprising all divine attributes of perfection and majesty.", reference: "Surah Al-Fatihah 1:1" },
    2: { urdu: "الرحمن", detail: "The one who wills mercy and good for all creation, without exception.", reference: "Surah Ar-Rahman 55:1" },
    3: { urdu: "الرحيم", detail: "The one who acts with extreme mercy, specifically rewarding the believers.", reference: "Surah Al-Fatihah 1:3" }
  };

  useEffect(() => {
    const fetchName = async () => {
      try {
        const res = await fetch('https://api.aladhan.com/v1/asmaAlHusna');
        const data = await res.json();
        const found = data.data.find(n => n.number === parseInt(number));
        
        if (found) {
          setNameData({
            ...found,
            ...extraDetails[number] || {
              urdu: "ترجمہ دستیاب نہیں",
              detail: "A Blessed Attribute of Allah signifying His infinite power and divine wisdom.",
              reference: `Traditional Attribute #${number}`
            }
          });
        }
        setLoading(false);
      } catch (err) {
        console.error("Failed to load name:", err);
        setLoading(false);
      }
    };
    fetchName();
  }, [number]);

  const handleCopy = () => {
    if (!nameData) return;
    navigator.clipboard.writeText(`${nameData.name} (${nameData.transliteration}): ${nameData.en.meaning}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) return (
    <div className="min-h-screen bg-background flex justify-center items-center">
      <Loader2 className="w-12 h-12 text-[#E14D4D] animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-[#222222]">
      {/* Immersive Header Section */}
      <section className="bg-[#222222] text-foreground py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 text-[30rem] font-black opacity-[0.03] select-none pointer-events-none translate-x-1/4 leading-none italic rotate-12">
            {nameData?.name}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/names" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-[#E14D4D] transition-colors mb-20 group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Back to All Names
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                <div className="w-20 h-2 bg-[#E14D4D] mb-12"></div>
                <h1 className="text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-6">
                    {nameData?.transliteration}
                </h1>
                <p className="text-3xl md:text-4xl text-slate-400 font-serif italic mb-12">
                    {nameData?.en.meaning}
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-background/10 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/5">Attribute #{number}</span>
                    <span className="bg-[#E14D4D] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#E14D4D]/20">{nameData?.urdu}</span>
                </div>
             </motion.div>
             
             <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center lg:justify-end">
                <div className="text-[15rem] md:text-[25rem] font-serif font-black leading-none drop-shadow-[0_0_100px_rgba(255,255,255,0.1)]">
                    {nameData?.name}
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Content Breakdown Section */}
      <section className="py-32 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
            {/* Main Details */}
            <div className="md:col-span-8 space-y-20">
                <div className="bg-slate-50 p-16 rounded-[4rem] border border-border">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#E14D4D] mb-10 flex items-center gap-4">
                        <div className="w-12 h-px bg-[#E14D4D]/20"></div> The Divine Essence
                    </h3>
                    <p className="text-3xl md:text-4xl font-black text-[#222222] leading-tight mb-8">
                        {nameData?.detail}
                    </p>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
                        This attribute reflects a unique dimension of Allah's perfection. Scholars explain that meditating on this name brings peace to the heart and strengthens one's connection to the Creator.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-background border-2 border-slate-50 p-12 rounded-[3rem] hover:border-[#E14D4D] transition-all">
                        <Bookmark className="w-8 h-8 text-[#E14D4D] mb-6" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">Sacred Context</h4>
                        <p className="text-sm font-bold text-slate-600 italic">"To Allah belong the best names, so invoke Him by them."</p>
                        <span className="text-[9px] font-black uppercase text-[#222222] mt-4 block">{nameData?.reference}</span>
                    </div>
                    <div className="bg-background border-2 border-slate-50 p-12 rounded-[3rem] hover:border-[#E14D4D] transition-all">
                        <Volume2 className="w-8 h-8 text-[#E14D4D] mb-6" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">Spiritual Practice</h4>
                        <p className="text-sm font-bold text-slate-600">Reciting this name frequently is said to instill a sense of divine protection and clarity.</p>
                    </div>
                </div>
            </div>

            {/* Sidebar Actions */}
            <div className="md:col-span-4">
                <div className="sticky top-12 p-12 bg-[#222222] rounded-[4rem] text-foreground">
                    <h4 className="text-center text-[10px] font-black uppercase tracking-[0.3em] mb-12 opacity-40">Digital Toolbox</h4>
                    <div className="space-y-4">
                        <button onClick={handleCopy} className="w-full py-6 bg-background/5 hover:bg-[#E14D4D] rounded-3xl flex items-center justify-center gap-4 transition-all group">
                            {copied ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                            <span className="text-[10px] font-black uppercase tracking-widest">{copied ? 'Copied' : 'Copy Data'}</span>
                        </button>
                        <button onClick={() => window.print()} className="w-full py-6 bg-background/5 hover:bg-background/10 rounded-3xl flex items-center justify-center gap-4 transition-all group">
                            <Download className="w-5 h-5" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Download PDF</span>
                        </button>
                        <button className="w-full py-6 bg-background/5 hover:bg-background/10 rounded-3xl flex items-center justify-center gap-4 transition-all group">
                            <Share2 className="w-5 h-5" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Share Attribute</span>
                        </button>
                    </div>
                    
                    <div className="mt-12 pt-12 border-t border-white/5 text-center px-6">
                        <p className="text-[10px] font-medium text-slate-400 leading-relaxed uppercase tracking-wider mb-8">
                            This card is generated for educational purposes to spread the knowledge of Asma-ul-Husna.
                        </p>
                        <div className="flex justify-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#E14D4D]"></div>
                            <div className="w-2 h-2 rounded-full bg-background/10"></div>
                            <div className="w-2 h-2 rounded-full bg-background/10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default NameDetailPage;
