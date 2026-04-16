'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
      
      // Calculate scroll progress %
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#051816] border border-[#C5A059]/30 shadow-2xl transition-all hover:border-[#C5A059]"
          >
            {/* 1. Animated Progress Ring */}
            <svg className="absolute w-full h-full -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-[#C5A059]/10"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                stroke="#C5A059"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray="163.36"
                animate={{ strokeDashoffset: 163.36 - (163.36 * progress) / 100 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              />
            </svg>

            {/* 2. Central Icon with Pulse Effect */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative z-10 text-[#C5A059] group-hover:text-[#E3C382] transition-colors"
            >
              <ChevronUp size={28} />
            </motion.div>

            {/* 3. Outer Glow (Glows more on hover) */}
            <div className="absolute inset-0 rounded-full bg-[#C5A059]/0 group-hover:bg-[#C5A059]/10 blur-xl transition-all duration-500" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;