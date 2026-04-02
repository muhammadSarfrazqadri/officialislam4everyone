'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  Sparkles, 
  Volume2, 
  Share2, 
  Download, 
  BookOpen, 
  Compass, 
  Shield, 
  Heart,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const NameDetail = () => {
  const { number } = useParams();
  const router = useRouter();
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const res = await fetch(`https://api.aladhan.com/v1/asmaAlHusna/${number}`);
        const data = await res.json();
        if (data.data && data.data[0]) {
          setName(data.data[0]);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    if (number) fetchName();
  }, [number]);

  const handleShare = () => {
    navigator.clipboard.writeText(`${name?.name} - ${name?.transliteration}: ${name?.en.meaning}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="h-screen bg-[#0A0A0A] flex flex-col items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-2 border-[var(--primary)] rounded-full mb-8"
        />
        <p className="text-foreground/40 text-[10px] uppercase font-black tracking-[0.4em] animate-pulse">Accessing Divine Attributes...</p>
      </div>
    );
  }

  if (!name) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground selection:bg-[var(--primary)]">
      {/* Navigation Overlay */}
      <nav className="fixed top-0 w-full z-50 p-10 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link href="/names" className="group flex items-center gap-4 bg-background/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl hover:bg-[var(--primary)] transition-all duration-500">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-[10px] font-black uppercase tracking-widest">Return to Vault</span>
        </Link>
        <div className="flex gap-4">
          <button onClick={handleShare} className="p-4 bg-background/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-background hover:text-black transition-all">
            {isCopied ? <span className="text-[8px] font-black uppercase">Copied!</span> : <Share2 className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Cinematic Content */}
      <div className="container mx-auto px-6 pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-square relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-background rounded-full blur-[150px] animate-pulse"></div>
            <div className="relative">
              <span className="text-[25rem] md:text-[35rem] font-serif font-black leading-none drop-shadow-[0_0_50px_rgba(225,77,77,0.3)] select-none">
                {name.name}
              </span>
              <div className="absolute top-0 right-0 w-32 h-32 bg-background/5 border border-white/10 rounded-3xl flex items-center justify-center backdrop-blur-3xl rotate-12">
                <span className="text-4xl font-black text-[var(--primary)]">{name.number}</span>
              </div>
            </div>
          </motion.div>

          {/* Narrative Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-[var(--primary)]/20 border border-[var(--primary)]/30 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Divine Attribute Discovered</span>
            </div>
            
            <h1 className="text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
              {name.transliteration}
            </h1>
            
            <p className="text-3xl font-medium text-foreground/60 mb-16 max-w-xl italic border-l-4 border-[var(--primary)] pl-8">
              "{name.en.meaning}"
            </p>

            <div className="grid grid-cols-2 gap-8 mb-20">
              <div className="p-8 bg-background/5 border border-white/5 rounded-[2.5rem] hover:border-white/20 transition-all">
                <BookOpen className="w-8 h-8 text-[var(--primary)] mb-6" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mb-2">Significance</h4>
                <p className="text-sm font-medium leading-relaxed">Central to the understanding of spiritual architecture.</p>
              </div>
              <div className="p-8 bg-background/5 border border-white/5 rounded-[2.5rem] hover:border-white/20 transition-all">
                <Shield className="w-8 h-8 text-blue-500 mb-6" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mb-2">Protection</h4>
                <p className="text-sm font-medium leading-relaxed">Used as a shield for the soul in daily meditation.</p>
              </div>
            </div>

            <div className="flex gap-10">
              <button 
                onClick={() => {
                  const utterance = new SpeechSynthesisUtterance(name.name);
                  utterance.lang = 'ar-SA';
                  window.speechSynthesis.speak(utterance);
                }}
                className="group flex-1 bg-background text-black py-8 rounded-full flex items-center justify-center gap-6 hover:bg-[var(--primary)] hover:text-foreground transition-all transform hover:scale-105"
              >
                <Volume2 className="w-6 h-6" />
                <span className="text-xs font-black uppercase tracking-widest">Listen Audio</span>
              </button>
              
              <button className="p-8 border border-white/10 rounded-full hover:bg-background hover:text-black transition-all group">
                <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Bottom Navigation */}
      <div className="container mx-auto px-6 py-20 border-t border-white/5 flex justify-between">
        <button 
          onClick={() => router.push(`/names/${Math.max(1, parseInt(number)-1)}`)}
          className="group flex items-center gap-6 text-foreground/40 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
          <div className="text-left">
            <div className="text-[8px] font-black uppercase tracking-widest opacity-50">Previous</div>
            <div className="text-sm font-black uppercase">Attribute</div>
          </div>
        </button>

        <button 
          onClick={() => router.push(`/names/${Math.min(99, parseInt(number)+1)}`)}
          className="group flex items-center gap-6 text-foreground/40 hover:text-foreground transition-colors text-right"
        >
          <div className="text-right">
            <div className="text-[8px] font-black uppercase tracking-widest opacity-50">Next</div>
            <div className="text-sm font-black uppercase">Attribute</div>
          </div>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default NameDetail;
