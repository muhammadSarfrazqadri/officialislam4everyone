'use client'
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  // Styles based on your Dark Islamic Theme
  const variants = {
    // Deep Emerald with a slight gradient
    primary: "bg-gradient-to-br from-[#065F46] to-[#042F2C] text-[#F0FDF4] border-emerald-800/50 shadow-emerald-900/20",
    
    // Transparent with a Golden border
    outline: "bg-transparent text-[#C5A059] border-[#C5A059]/30 hover:bg-[#C5A059]/5 hover:border-[#C5A059]",
    
    // The "Pro" Gold Button (Jewel Look)
    gold: "bg-gradient-to-tr from-[#B8860B] via-[#D4AF37] to-[#F3C382] text-[#020D0C] border-amber-200/20 font-black",
  };

  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      // Framer Motion Animation States
      variants={{
        hover: { scale: 1.05, y: -2 },
        tap: { scale: 0.95, y: 0 }
      }}
      className={`
        relative overflow-hidden px-6 py-2.5 rounded-xl border
        text-[11px] uppercase tracking-[0.15em] font-bold
        transition-all duration-300 ease-out
        ${variants[variant]} ${className}
      `}
    >
      {/* 1. Animated Shine (The "Pro" Look) */}
      <motion.div
        variants={{
          hover: { x: '100%' }
        }}
        initial={{ x: '-100%' }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
      />

      {/* 2. Soft Outer Glow (on Hover) */}
      <motion.div
        variants={{
          hover: { opacity: 1 }
        }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 bg-current blur-xl opacity-0 z-0"
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default AnimatedButton;