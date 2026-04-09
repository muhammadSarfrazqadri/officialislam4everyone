'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

// 🔹 Fake Data (replace with API later)
const ayahs = [
  {
    id: 1,
    surah: 'Al-Fatiha',
    ayah: 1,
    text: 'In the name of Allah, the Most Gracious, the Most Merciful',
  },
  {
    id: 2,
    surah: 'Al-Baqarah',
    ayah: 255,
    text: 'Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence...',
  },
  {
    id: 3,
    surah: 'Yaseen',
    ayah: 9,
    text: 'And We have put before them a barrier and behind them a barrier...',
  },
];

const highlightText = (text, query) => {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={i} className="text-primary font-medium">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);

  const wrapperRef = useRef(null);

  // 🔹 Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        const filtered = ayahs.filter(
          (a) =>
            a.text.toLowerCase().includes(query.toLowerCase()) ||
            a.surah.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // 🔹 Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // 🔹 Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    }
    if (e.key === 'ArrowUp') {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    }
    if (e.key === 'Enter' && activeIndex >= 0) {
      alert(`Selected: ${results[activeIndex].surah}`);
    }
  };

  return (
    <div ref={wrapperRef} className="w-full max-w-xl mx-auto relative">
      
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full blur-xl opacity-20 bg-primary/30" />

        <div className="relative flex items-center rounded-full border bg-background/70 backdrop-blur px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/30">
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: query ? 15 : 0 }}
            className="mr-2 text-muted-foreground"
          >
            <Search size={18} />
          </motion.div>

          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search Surah, Ayah..."
            className="flex-1 bg-transparent outline-none text-sm"
          />

          {/* Clear */}
          <AnimatePresence>
            {query && (
              <motion.button
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                onClick={() => setQuery('')}
                className="p-1 rounded-full hover:bg-muted"
              >
                <X size={16} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Dropdown */}
      <AnimatePresence>
        {isFocused && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute mt-3 w-full rounded-2xl border bg-background/80 backdrop-blur shadow-lg overflow-hidden z-50"
          >
            {results.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                className={`p-3 cursor-pointer transition ${
                  index === activeIndex ? 'bg-muted' : ''
                }`}
              >
                {/* Surah Info */}
                <div className="text-xs text-muted-foreground mb-1">
                  {item.surah} • Ayah {item.ayah}
                </div>

                {/* Ayah Preview */}
                <div className="text-sm leading-relaxed">
                  {highlightText(item.text, query)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;