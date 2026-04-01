'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Download, Eye, Search, Filter, Bookmark, Star, ChevronRight, Archive, BookOpen } from 'lucide-react';

const BooksPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { title: 'All', icon: <Archive className="w-4 h-4" /> },
    { title: 'Tafsir', icon: <BookOpen className="w-4 h-4" /> },
    { title: 'Fiqh', icon: <Archive className="w-4 h-4" /> },
    { title: 'Hadith Studies', icon: <Book className="w-4 h-4" /> },
    { title: 'History', icon: <Archive className="w-4 h-4" /> },
    { title: 'Aqidah', icon: <Star className="w-4 h-4" /> },
    { title: 'Spirituality', icon: <Bookmark className="w-4 h-4" /> },
  ];

  const books = [
    { 
      id: 1, 
      title: 'Riyad as-Salihin', 
      author: 'Imam an-Nawawi', 
      category: 'Hadith Studies', 
      rating: 4.9, 
      pages: 850, 
      language: 'English/Arabic',
      color: 'bg-emerald-50',
      accent: 'text-emerald-600'
    },
    { 
      id: 2, 
      title: 'Tafsir ibn Kathir', 
      author: 'Ismail ibn Kathir', 
      category: 'Tafsir', 
      rating: 5.0, 
      pages: 2400, 
      language: 'English',
      color: 'bg-amber-50',
      accent: 'text-amber-600'
    },
    { 
      id: 3, 
      title: 'The Sealed Nectar', 
      author: 'Safiur Rahman Mubarakpuri', 
      category: 'History', 
      rating: 4.8, 
      pages: 580, 
      language: 'English',
      color: 'bg-indigo-50',
      accent: 'text-indigo-600'
    },
    { 
      id: 4, 
      title: 'Al-Aqidah Al-Wasitiyyah', 
      author: 'Ibn Taymiyyah', 
      category: 'Aqidah', 
      rating: 4.7, 
      pages: 320, 
      language: 'English/Arabic',
      color: 'bg-rose-50',
      accent: 'text-rose-600'
    },
    { 
      id: 5, 
      title: 'Minhaj al-Abidin', 
      author: 'Imam al-Ghazali', 
      category: 'Spirituality', 
      rating: 4.9, 
      pages: 450, 
      language: 'English',
      color: 'bg-sky-50',
      accent: 'text-sky-600'
    },
    { 
      id: 6, 
      title: 'The Mukhtasar of al-Quduri', 
      author: 'Imam al-Quduri', 
      category: 'Fiqh', 
      rating: 4.6, 
      pages: 620, 
      language: 'English/Arabic',
      color: 'bg-violet-50',
      accent: 'text-violet-600'
    }
  ];

  const filteredBooks = books.filter(book => {
    const matchesFilter = activeCategory === 'All' || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-foreground text-background py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="w-20 h-2 bg-primary mb-10"></div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
               Digital <span className="text-primary">Library</span>
            </h1>
            <p className="text-xl text-muted-foreground/60 font-medium mb-12 max-w-2xl leading-relaxed">
               Access an elite archive of authentic Islamic scholarship. Over 10,000 verified texts across Tafsir, Fiqh, and History, curated for the modern seeker of knowledge.
            </p>
            <div className="flex flex-wrap gap-4">
                <div className="relative group min-w-[300px]">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/40 group-focus-within:text-primary transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search title, author, or subject..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-background/5 border-2 border-background/10 rounded-full py-5 pl-16 pr-8 text-sm outline-none focus:border-primary focus:bg-background/10 transition-all font-bold"
                    />
                </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative element */}
        <div className="absolute top-0 right-0 p-24 text-[25rem] font-black text-background/5 opacity-[0.03] leading-none select-none pointer-events-none -rotate-12 translate-x-1/2">
             LIBRARY
        </div>
      </section>

      {/* Main Container */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 space-y-12">
            <div>
                <h3 className="text-xs font-black text-muted-foreground uppercase tracking-[0.4em] mb-8">Categories</h3>
                <div className="flex flex-col gap-2">
                   {categories.map((cat) => (
                     <button 
                        key={cat.title} 
                        onClick={() => setActiveCategory(cat.title)}
                        className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all font-black uppercase tracking-widest text-[10px] ${
                            activeCategory === cat.title 
                            ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20 -translate-y-1' 
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                     >
                        <span className="flex items-center gap-4">
                           {cat.icon}
                           {cat.title}
                        </span>
                        {activeCategory === cat.title && <ChevronRight className="w-3 h-3" />}
                     </button>
                   ))}
                </div>
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-[3rem] relative overflow-hidden group">
                <div className="relative z-10">
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-4">Request a Book</h4>
                    <p className="text-xs text-slate-400 font-bold mb-8 leading-relaxed">Can't find a specific text? Our librarians will source it for you.</p>
                    <button className="bg-[#E14D4D] w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">Submit Request</button>
                </div>
                <Bookmark className="absolute -bottom-6 -right-6 w-32 h-32 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </div>
          </aside>

          {/* Library Grid */}
          <div className="lg:w-3/4">
             <div className="flex items-center justify-between mb-12 border-b-2 border-slate-50 pb-8">
                <h2 className="text-2xl font-black text-[#222222] uppercase tracking-tighter">
                    {activeCategory} <span className="text-[#E14D4D]/40">({filteredBooks.length})</span>
                </h2>
                <div className="flex gap-4">
                    <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-[#222222] transition-colors"><Filter className="w-5 h-5" /></button>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
               <AnimatePresence mode="popLayout">
                 {filteredBooks.map((book) => (
                   <motion.div 
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={book.id} 
                        className="group bg-white flex flex-col h-full border-2 border-slate-50 rounded-[3rem] overflow-hidden hover:border-[#E14D4D] transition-all duration-500"
                    >
                        <div className={`h-80 ${book.color} p-12 transition-colors duration-500 group-hover:bg-[#222222] relative overflow-hidden flex items-center justify-center`}>
                           <div className="w-36 h-52 bg-white shadow-2xl rounded-sm border-r-8 border-[#E14D4D] p-5 flex flex-col justify-between transform -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 relative z-10">
                              <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                              <div className="space-y-1">
                                <div className="h-1 w-full bg-slate-50"></div>
                                <div className="h-1 w-2/3 bg-slate-50"></div>
                              </div>
                           </div>
                           <Book className="absolute -bottom-10 -right-10 w-40 h-40 text-black/5 rotate-12 group-hover:text-white/5 transition-colors" />
                        </div>

                        <div className="p-10 flex flex-col gap-6 flex-grow">
                           <div className="flex items-center gap-2">
                                <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-current ${book.accent}`}>
                                    {book.category}
                                </span>
                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 ml-auto">{book.language}</span>
                           </div>

                           <div className="space-y-2">
                                <h4 className="text-xl font-black text-[#222222] leading-[1.1] uppercase tracking-tighter group-hover:text-[#E14D4D] transition-colors">{book.title}</h4>
                                <p className="text-xs text-slate-400 font-bold italic">{book.author}</p>
                           </div>

                           <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-300">
                                <span className="flex items-center gap-2"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {book.rating}</span>
                                <span>{book.pages} Pages</span>
                           </div>

                           <div className="pt-8 border-t border-slate-50 mt-auto flex gap-4">
                              <button className="flex-grow bg-[#222222] text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#E14D4D] transition-all flex items-center justify-center gap-3">
                                 <Eye className="w-4 h-4" /> View
                              </button>
                              <button className="aspect-square bg-slate-50 text-slate-400 py-4 px-5 rounded-2xl hover:bg-[#E14D4D] hover:text-white transition-all">
                                 <Download className="w-4 h-4" />
                              </button>
                           </div>
                        </div>
                   </motion.div>
                 ))}
               </AnimatePresence>
             </div>

             {filteredBooks.length === 0 && (
                <div className="py-40 text-center">
                    <Archive className="w-20 h-20 text-slate-100 mx-auto mb-8" />
                    <p className="text-lg font-black text-[#222222] uppercase tracking-tighter">No volumes found in this collection.</p>
                    <button 
                        onClick={() => {setActiveCategory('All'); setSearchTerm('');}}
                        className="mt-6 text-[#E14D4D] font-black uppercase tracking-[0.2em] text-[10px] border-b-2 border-[#E14D4D] pb-1"
                    >
                        Reset Archive
                    </button>
                </div>
             )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BooksPage;