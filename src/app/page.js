'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  BookOpen, 
  Heart, 
  ArrowRight, 
  Compass, 
  ScrollText, 
  Languages, 
  Star, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Play,
  Volume2,
  Share2,
  ChevronLeft,
  Clock,
  Layers,
  MessageSquare,
  Flame,
  Globe,
  ArrowUpRight
} from 'lucide-react';

const HeroSlide = ({ title, desc, icon: Icon, color, link, index }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="absolute inset-0 flex items-center justify-center p-6"
  >
    {/* Animated Background Element */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       <motion.div 
         animate={{ 
           scale: [1, 1.2, 1],
           rotate: [0, 5, 0],
           opacity: [0.03, 0.05, 0.03]
         }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px]"
       />
       <motion.div 
         animate={{ 
           scale: [1, 1.3, 1],
           rotate: [0, -5, 0],
           opacity: [0.02, 0.04, 0.02]
         }}
         transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
         className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-background rounded-full blur-[120px]"
       />
    </div>

    <div className="container mx-auto text-center relative z-10">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            className="h-px bg-primary/50"
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Module 0{index + 1}</span>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            className="h-px bg-primary/50"
          />
        </div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] sm:leading-none text-foreground">
          {title.split(' ')[0]} <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/80">
            {title.split(' ').slice(1).join(' ')}
          </span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
          {desc}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-10">
          <Link href={link} className="group relative px-10 py-5 bg-foreground text-background rounded-full text-[11px] font-bold uppercase tracking-wider overflow-hidden transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(var(--primary),0.1)] flex items-center gap-3">
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors">Get Started</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:text-primary-foreground group-hover:translate-x-1 transition-all" />
            <div className="absolute inset-x-0 bottom-0 h-0 bg-primary transition-all group-hover:h-full -z-0"></div>
          </Link>
          
          <div className="flex items-center gap-3 text-muted-foreground bg-muted px-8 py-4 rounded-full border border-border backdrop-blur-sm">
            <Icon className="w-4 h-4 text-primary" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-nowrap">Authentic Sources Only</span>
          </div>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute inset-z-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none z-0">
      <Icon className="w-[800px] h-[800px]" />
    </div>
  </motion.div>
);

const SectionPreview = ({ number, title, subtitle, desc, icon: Icon, link, dark = true }) => (
  <section className={`py-40 ${dark ? 'bg-foreground text-background' : 'bg-background text-foreground'} rounded-[5rem] relative z-20 overflow-hidden`}>
    {/* Top Shadow Decor */}
    <div className={`absolute top-0 left-0 w-full h-40 ${dark ? 'bg-gradient-to-b from-foreground to-transparent' : 'bg-gradient-to-b from-background to-transparent'} opacity-20`} />
    
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 lg:mb-32 border-b border-current/10 pb-16 gap-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6 block drop-shadow-sm">Module {number}</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            {title}
          </h2>
        </div>
        <div className="text-left md:text-right group cursor-default">
          <p className="opacity-40 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 transition-opacity group-hover:opacity-80">{subtitle}</p>
          <div className="flex gap-2 justify-start md:justify-end">
             <motion.div 
               whileInView={{ width: ["1rem", "4rem", "2rem"] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
               className="h-1.5 rounded-full bg-primary"
             />
             <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
        <div className="space-y-12 group order-2 lg:order-1">
          <p className="text-2xl md:text-4xl font-semibold leading-tight opacity-90 max-w-2xl tracking-tight">
            {desc}
          </p>

          <div className="flex flex-wrap gap-4">
            {['Verified Chain', 'Modern Typography', 'Mobile First'].map(tag => (
              <div key={tag} className="px-6 py-2.5 bg-current/[0.03] backdrop-blur-sm border border-current/[0.08] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] opacity-50 hover:opacity-100 dark:hover:bg-white/5 transition-all">
                {tag}
              </div>
            ))}
          </div>

          <Link href={link} className="inline-flex items-center gap-6 py-6 px-10 rounded-full bg-current text-current-inverse hover:translate-x-2 transition-all duration-500 group overflow-hidden relative shadow-2xl">
            <span className={`text-[12px] font-black uppercase tracking-widest ${dark ? 'text-black group-hover:text-white' : 'text-white' } relative z-10`}>Explore Collection</span>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 relative z-10 ${dark ? 'bg-black text-white group-hover:bg-[#E14D4D]' : 'bg-white text-black group-hover:text-[#E14D4D]'}`}>
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </div>
            {dark && <div className="absolute inset-0 bg-white transition-all duration-500 translate-x-[-101%] group-hover:translate-x-0 group-hover:bg-[#E14D4D]"></div>}
          </Link>
        </div>

        <div className="relative aspect-square md:aspect-video lg:aspect-square group cursor-pointer order-1 lg:order-2">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className={`absolute inset-0 ${dark ? 'bg-white/[0.02]' : 'bg-black/[0.02]'} border border-current/[0.05] rounded-[4rem] group-hover:bg-[#E14D4D]/5 transition-all duration-700`}
          />
          <div className="relative h-full flex items-center justify-center overflow-hidden rounded-[4rem]">
            <Icon className="w-96 h-96 opacity-[0.03] absolute -right-20 -bottom-20 rotate-[-15deg] group-hover:rotate-0 transition-all duration-1000" />
            <div className="z-10 text-center space-y-8">
               <motion.div 
                 initial={{ scale: 1 }}
                 whileHover={{ scale: 1.1, rotate: 12 }}
                 className={`w-36 h-36 mx-auto rounded-[3rem] ${dark ? 'bg-black shadow-[0_40px_100px_rgba(0,0,0,0.5)]' : 'bg-white shadow-[0_40px_100px_rgba(0,0,0,0.1)]'} flex items-center justify-center border border-current/[0.08] relative`}
               >
                 <Icon className="w-14 h-14 text-[#E14D4D]" />
                 <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#E14D4D] animate-ping opacity-20" />
               </motion.div>
               <div className="text-[11px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:text-[#E14D4D] transition-all">Secure Portal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "The Quran",
      desc: "Architecting the final revelation into a professional digital experience with accurate translations.",
      icon: ScrollText,
      link: "/quran"
    },
    {
      title: "Hadith Vault",
      desc: "Access verified prophetic traditions through a high-performance research interface.",
      icon: BookOpen,
      link: "/hadith"
    },
    {
      title: "Divine Names",
      desc: "A systematic study of the 99 attributes with linguistic and spiritual depth.",
      icon: Sparkles,
      link: "/names"
    },
    {
      title: "Online Academy",
      desc: "Master classical Islamic sciences through our structured professional learning portal.",
      icon: Compass,
      link: "/academy"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Hero Slider Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <AnimatePresence mode='wait'>
          <HeroSlide 
            key={currentSlide}
            index={currentSlide}
            {...slides[currentSlide]}
          />
        </AnimatePresence>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-10 bg-primary' : 'w-2 bg-muted-foreground/20 hover:bg-muted-foreground/40'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Today's Verse (The "Quran Anchor") */}
      <section className="py-24 container mx-auto px-6 relative z-10">
        <div className="bg-muted border border-border rounded-[3rem] p-12 md:p-24 relative overflow-hidden group shadow-xl">
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-background border border-border rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Daily Wisdom</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-serif text-foreground text-center md:text-left leading-snug">
              فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
            </h2>
            
            <p className="text-xl md:text-3xl font-medium text-muted-foreground text-center md:text-left leading-relaxed max-w-4xl">
              "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease."
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-12 border-t border-border">
              <div className="flex gap-10">
                <div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Source</div>
                  <div className="text-sm font-bold uppercase tracking-tighter">Surah Al-Sharh</div>
                </div>
                <div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Verse</div>
                  <div className="text-sm font-bold uppercase tracking-tighter">94:5-6</div>
                </div>
              </div>

              <Link href="/quran" className="group flex items-center gap-4 bg-primary text-primary-foreground px-10 py-5 rounded-full hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider">Open Quran</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Module System Grid */}
      <div className="space-y-12 px-6 pb-40 max-w-7xl mx-auto">
        <SectionPreview 
          number="01"
          title="Sahih Hadith"
          subtitle="The Prophetic Tradition"
          desc="Access thousands of prophetic traditions with verified chains of narration and modern research tools."
          icon={BookOpen}
          link="/hadith"
          dark={false} 
        />

        <SectionPreview 
          number="02"
          title="Holy Quran"
          subtitle="The Final Revelation"
          desc="Explore the miraculous word of Allah with multiple translations, recitations, and deep tafsir."
          icon={ScrollText}
          link="/quran"
          dark={true}
        />

        <SectionPreview 
          number="03"
          title="Divine Names"
          subtitle="99 Attributes of Allah"
          desc="Explore the 99 Divine Attributes through a curated dictionary with Urdu and English translations."
          icon={Sparkles}
          link="/names"
          dark={false}
        />

        <SectionPreview 
          number="04"
          title="Pure Academy"
          subtitle="Scholarly Education"
          desc="Join our digital academy to learn Arabic, Fiqh, and Islamic history through structured courses."
          icon={Compass}
          link="/academy"
          dark={true} 
        />
      </div>

      {/* CTA Section */}
      <section className="py-60 container mx-auto px-6 text-center relative overflow-hidden">
        {/* Decorative Background for CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#E14D4D_0%,transparent_70%)] blur-[100px] scale-150 animate-pulse" />
        </div>

        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none"
          >
            Start Your <br /> <span className="text-[#E14D4D] italic underline decoration-white/10 underline-offset-[20px]">Journey.</span>
          </motion.h2>
          
          <p className="text-xl md:text-3xl font-medium text-white/50 leading-tight max-w-3xl mx-auto">
            Experience the fusion of sacred wisdom and modern digital excellence in a single, secure sanctuary for the soul.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 pt-12">
            <Link href="/academy/admission" className="group relative px-14 py-7 bg-white text-black rounded-full font-black uppercase text-[12px] tracking-[0.2em] transform hover:scale-110 active:scale-95 transition-all shadow-[0_30px_60px_rgba(255,255,255,0.15)] flex items-center gap-4 overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors">Apply for Admission</span>
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center relative z-10 group-hover:bg-white group-hover:text-black transition-all">
                <ChevronRight className="w-5 h-5" />
              </div>
              <div className="absolute inset-0 bg-[#E14D4D] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            
            <div className="flex items-center gap-4 text-white/30 bg-white/5 px-10 py-5 rounded-full border border-white/5 backdrop-blur-md">
               <ShieldCheck className="w-6 h-6 text-[#E14D4D]" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em]">Verified Platform</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
