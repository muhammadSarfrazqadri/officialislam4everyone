'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../src/components/theme-toggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const topNavItems = [
    { label: 'Home', link: '/' },
    { 
      label: 'Quran', 
      link: '/quran',
      dropdown: [
        { label: 'Read Quran', link: '/quran' },
        { label: 'Translations', link: '/quran?view=translations' },
        { label: 'Audio Recitation', link: '/quran?view=audio' },
        { label: 'Tafsir Study', link: '/quran?view=tafsir' },
      ]
    },
    { 
      label: 'Hadith', 
      link: '/hadith',
      dropdown: [
        { label: 'Bukhari', link: '/hadith/bukhari' },
        { label: 'Muslim', link: '/hadith/muslim' },
        { label: 'Sunan Abudawud', link: '/hadith/abudawud' },
        { label: 'Hadith Research', link: '/hadith' },
      ]
    },
    { 
      label: 'Resources', 
      link: '#',
      dropdown: [
        { label: 'Books Library', link: '/books' },
        { label: 'Fatwa Archive', link: '/fatwa' },
        { label: 'Islamic Names', link: '/names' },
        { label: 'Multimedia', link: '/media' },
      ]
    },
    { 
      label: 'Academy', 
      link: '/academy',
      dropdown: [
        { label: 'Online Courses', link: '/academy' },
        { label: 'Admission Page', link: '/academy/admission' },
        { label: 'Learning Portal', link: '/academy/portal' },
        { label: 'Scholarship', link: '/academy/scholarship' },
      ]
    },
    { 
      label: 'More', 
      link: '#',
      dropdown: [
        { label: 'About Us', link: '/about' },
        { label: 'Contact Us', link: '/contact' },
        { label: 'Privacy Policy', link: '/privacy' },
        { label: 'Terms of Use', link: '/terms' },
        { label: 'Platform Features', link: '/features' },
      ]
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="w-full bg-background font-sans border-b border-border shadow-sm sticky top-0 z-50 transition-colors duration-500">
      {/* Top Banner Text with background animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:flex justify-center py-2 bg-muted text-foreground/80 text-sm font-medium border-b border-border"
      >
        <span className="rtl">الحمد للہ رب العالمین، والصلاة والسلام علی سیدنا محمد وآلہ وصحبہ أجمعین</span>
      </motion.div>

      {/* Main Container */}
      <div className="container mx-auto px-4">
        {/* Brand & Main Links (Desktop) */}
        <div className="hidden lg:flex items-center justify-between py-6">
          {/* Logo Section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer transition-all"
          >
            <Link href="/" className="flex flex-col items-start relative group">
              <div className="w-1.5 h-1.5 rounded-full bg-primary absolute -top-1 right-0 group-hover:scale-150 transition-transform"></div>
              <p className='text-3xl font-black text-foreground tracking-tighter uppercase italic'>
                Islam<span className="text-primary not-italic">4Everyone</span>
              </p>
            </Link>
          </motion.div>

          {/* Nav Items Group */}
          <div className="flex items-center gap-2 bg-muted p-1.5 rounded-2xl border border-border">
            {topNavItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.link}>
                  <motion.div
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      relative px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center gap-2
                      ${pathname === item.link ? 'bg-primary text-primary-foreground shadow-xl' : 'text-muted-foreground hover:text-foreground hover:bg-background'}
                    `}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </motion.div>
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-2 w-56 bg-popover rounded-2xl border border-border shadow-2xl p-2 z-[60]"
                    >
                      <div className="flex flex-col gap-1">
                        {item.dropdown.map((subItem) => (
                          <Link key={subItem.label} href={subItem.link}>
                            <motion.div
                              whileHover={{ x: 4 }}
                              className="px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-accent transition-all flex items-center justify-between group/sub"
                            >
                              {subItem.label}
                              <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover/sub:opacity-100 transition-opacity"></div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg hover:shadow-primary/20 hover:opacity-90 transition-all"
            >
              Portal Access
            </motion.button>
          </div>
        </div>

        {/* Mobile Navbar Header */}
        <div className="lg:hidden flex items-center justify-between py-6">
          <Link href="/">
            <p className='text-2xl font-black text-foreground tracking-tighter uppercase italic'>
              Islam<span className="text-primary not-italic">4Everyone</span>
            </p>
          </Link>
          
          <div className="flex items-center gap-4">
             <ThemeToggle />
             <button 
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="p-3 bg-muted rounded-2xl text-muted-foreground"
             >
               {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border py-8"
            >
              <div className="flex flex-col mb-4 gap-4">
                {topNavItems.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <Link 
                      href={item.link}
                      onClick={() => !item.dropdown && setIsMenuOpen(false)}
                      className={`
                        px-6 py-4 mx-4 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-between
                        ${pathname === item.link ? 'bg-[#E14D4D] text-white' : 'text-gray-500 dark:text-white/40 bg-gray-50 dark:bg-white/5'}
                      `}
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                    </Link>
                    
                    {item.dropdown && (
                      <div className="grid grid-cols-1 gap-2 mt-2 px-10">
                        {item.dropdown.map((subItem) => (
                          <Link 
                            key={subItem.label} 
                            href={subItem.link}
                            onClick={() => setIsMenuOpen(false)}
                            className="py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#E14D4D] transition-colors flex items-center gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E14D4D] opacity-40"></div>
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="px-10 mt-4">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#E14D4D] text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl"
                  >
                    Portal Access
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
