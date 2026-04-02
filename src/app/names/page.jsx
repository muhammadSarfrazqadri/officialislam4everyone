'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Volume2, Info, Loader2, Share2, Copy, Download, FileText, CheckCircle2, X, Filter, User, ArrowRight, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';
import { Play } from 'lucide-react';

const NamesPage = () => {
  const [names, setNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL'); // ALL, ASMA-UL-HUSNA, BOYS, GIRLS
  
  // High-end curated Islamic names database
  const islamicNames = {
    ASMA_UL_HUSNA: [
      { number: 1, name: "الله", transliteration: "Allah", meaning: "The One God", urdu: "اللہ", gender: "neutral", type: "divine" },
      { number: 2, name: "الرحمن", transliteration: "Ar-Rahman", meaning: "The Most Gracious", urdu: "بڑا مہربان", gender: "neutral", type: "divine" },
      { number: 3, name: "الرحيم", transliteration: "Ar-Raheem", meaning: "The Most Merciful", urdu: "نہایت رحم والا", gender: "neutral", type: "divine" },
      { number: 4, name: "الملك", transliteration: "Al-Malik", meaning: "The Sovereign", urdu: "بادشاہ", gender: "neutral", type: "divine" },
      { number: 5, name: "القدوس", transliteration: "Al-Quddus", meaning: "The Pure", urdu: "پاک", gender: "neutral", type: "divine" }
    ],
    BOYS: [
      { number: 101, name: "محمد", transliteration: "Muhammad", meaning: "Praiseworthy", urdu: "تعریف کیا گیا", gender: "boy", type: "human" },
      { number: 102, name: "أحمد", transliteration: "Ahmad", meaning: "Highly Praised", urdu: "سب سے زیادہ تعریف والا", gender: "boy", type: "human" },
      { number: 103, name: "علي", transliteration: "Ali", meaning: "Noble / Exalted", urdu: "بلند مرتبہ", gender: "boy", type: "human" },
      { number: 104, name: "عمر", transliteration: "Umar", meaning: "Long-lived / Life", urdu: "لمبی عمر والا", gender: "boy", type: "human" },
      { number: 105, name: "زيد", transliteration: "Zaid", meaning: "Abundance / Growth", urdu: "زیادہ ہونا", gender: "boy", type: "human" },
      { number: 106, name: "حمزة", transliteration: "Hamza", meaning: "Lion / Strong", urdu: "شیر", gender: "boy", type: "human" },
      { number: 107, name: "يوسف", transliteration: "Yousuf", meaning: "God increases", urdu: "بڑھانے والا", gender: "boy", type: "human" }
    ],
    GIRLS: [
      { number: 201, name: "فاطمة", transliteration: "Fatima", meaning: "Captivating / Daughter of Prophet", urdu: "بی بی فاطمہ", gender: "girl", type: "human" },
      { number: 202, name: "عائشة", transliteration: "Ayesha", meaning: "Alive / Prosperous", urdu: "زندہ دل", gender: "girl", type: "human" },
      { number: 203, name: "مريم", transliteration: "Maryam", meaning: "Pious / Mother of Jesus", urdu: "خادمہ", gender: "girl", type: "human" },
      { number: 204, name: "خديجة", transliteration: "Khadija", meaning: "Trustworthy / Premature child", urdu: "خدیجہ الکبریٰ", gender: "girl", type: "human" },
      { number: 205, name: "زينب", transliteration: "Zainab", meaning: "Ornament of father", urdu: "باپ کی زینت", gender: "girl", type: "human" },
      { number: 206, name: "سارة", transliteration: "Sara", meaning: "Princess / Joy", urdu: "شہزادی", gender: "girl", type: "human" },
      { number: 207, name: "حفصة", transliteration: "Hafsa", meaning: "Cub / Lioness", urdu: "شیرنی", gender: "girl", type: "human" }
    ]
  };

  useEffect(() => {
    const fetchAllNames = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.aladhan.com/v1/asmaAlHusna');
        const data = await res.json();
        
        const apiNames = data.data.map(item => ({
          number: item.number,
          name: item.name,
          transliteration: item.transliteration,
          meaning: item.en.meaning,
          urdu: islamicNames.ASMA_UL_HUSNA.find(a => a.number === item.number)?.urdu || "پاک نام",
          gender: "neutral",
          type: "divine"
        }));

        const combined = [
          ...apiNames,
          ...islamicNames.BOYS,
          ...islamicNames.GIRLS
        ];

        setNames(combined);
        setFilteredNames(combined);
      } catch (err) {
        console.error("Fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllNames();
  }, []);

  useEffect(() => {
    let results = names;
    if (activeCategory === 'ASMA-UL-HUSNA') {
      results = results.filter(n => n.type === 'divine');
    } else if (activeCategory === 'BOYS') {
      results = results.filter(n => n.gender === 'boy');
    } else if (activeCategory === 'GIRLS') {
      results = results.filter(n => n.gender === 'girl');
    }
    if (searchTerm) {
      const lowSearch = searchTerm.toLowerCase();
      results = results.filter(name => 
        name.name.includes(searchTerm) || 
        name.transliteration.toLowerCase().includes(lowSearch) ||
        name.meaning.toLowerCase().includes(lowSearch) ||
        name.urdu?.includes(searchTerm)
      );
    }
    setFilteredNames(results);
  }, [searchTerm, names, activeCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-32">
      
            <section className="bg-muted text-foreground py-24 relative overflow-hidden">
              <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-3xl"
                >
                  <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
                    Islamic <span className="text-[var(--primary)]">Names</span>
                  </h1>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
                    Explore the rich tapestry of Islamic names, from the divine Asma-ul-Husna to popular names for boys and girls.
                  </p>
                </motion.div>
              </div>
              
              {/* Decorative Play Icon */}
              <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5 select-none pointer-events-none hidden lg:block">
                  <Play className="w-[30rem] h-[30rem] stroke-white fill-white" />
              </div>
            </section>


      <div className="container mx-auto px-6 pt-48">
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <h1 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none italic mb-12">
            The <span className="text-primary">Lexicon</span>
          </h1>
          <div className="relative max-w-4xl group">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-muted-foreground/30 group-focus-within:text-primary transition-colors" />
            <input 
              type="text"
              placeholder="Search by Arabic, Transliteration, or Meaning..."
              className="w-full bg-muted border border-border rounded-full py-10 pl-24 pr-10 text-xl font-medium focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Dynamic Grid */}
        <AnimatePresence mode='popLayout'>
          {loading ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex py-40 justify-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
            >
              {filteredNames.map((name, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={name.number}
                  className="group relative"
                >
                  <div className={`h-full bg-card border border-border rounded-[3rem] p-10 transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5`}>
                    <div className="absolute top-0 right-0 p-12 text-7xl font-black text-muted-foreground/10 italic select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    <div>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${name.type === 'divine' ? 'bg-primary/10 text-primary' : name.gender === 'boy' ? 'bg-blue-500/10 text-blue-500' : 'bg-pink-500/10 text-pink-500'}`}>
                        {name.type === 'divine' ? <Sparkles className="w-5 h-5" /> : name.gender === 'boy' ? <User className="w-5 h-5" /> : <Heart className="w-5 h-5" />}
                      </div>
                      <h2 className="text-4xl font-serif text-foreground mb-4 group-hover:scale-110 transition-transform origin-left">{name.name}</h2>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">{name.transliteration}</h3>
                      <p className="text-muted-foreground/60 text-sm font-medium leading-relaxed italic border-l-2 border-border pl-6 mb-8 group-hover:text-foreground transition-colors">
                        "{name.meaning}"
                      </p>
                    </div>

                    <Link 
                      href={name.type === 'divine' ? `/names/${name.number}` : '#'}
                      className={`flex items-center gap-4 py-4 px-8 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${name.type === 'divine' ? 'bg-foreground text-background hover:bg-primary hover:text-primary-foreground' : 'bg-muted text-muted-foreground pointer-events-none'}`}
                    >
                      {name.type === 'divine' ? 'View Profile' : 'Common Name'}
                      {name.type === 'divine' && <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-2 transition-transform" />}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Atmospheric Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default NamesPage;
