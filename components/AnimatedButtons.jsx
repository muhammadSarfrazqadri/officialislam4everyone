'use client'
import React from "react";

// Reusable Animated Button Component
const AnimatedButton = ({ children, variant = "primary" }) => {
  const base =
    "relative overflow-hidden px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ease-in-out";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50",

    gradient:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:scale-105",

    outline:
      "border-2 border-gray-500 text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black",

    neon:
      "text-green-400 border border-green-400 hover:shadow-[0_0_15px_#22c55e] hover:bg-green-500/10",

    glass:
      "bg-white/10 backdrop-blur-md text-gray-900 dark:text-white border border-white/20 hover:bg-white/20",

    glow:
      "bg-black text-white dark:bg-white dark:text-black hover:shadow-[0_0_20px_#fff] dark:hover:shadow-[0_0_20px_#000]",

    rainbow:
      "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white hover:animate-pulse",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-white/10"></span>
    </button>
  );
};

// Demo Page (use anywhere in your site)
export default function ButtonShowcase() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Animated Buttons UI
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatedButton variant="primary">Primary</AnimatedButton>
        <AnimatedButton variant="gradient">Gradient</AnimatedButton>
        <AnimatedButton variant="outline">Outline</AnimatedButton>
        <AnimatedButton variant="neon">Neon</AnimatedButton>
        <AnimatedButton variant="glass">Glass</AnimatedButton>
        <AnimatedButton variant="glow">Glow</AnimatedButton>
        <AnimatedButton variant="rainbow">Rainbow</AnimatedButton>
      </div>
    </div>
  );
}

// Optional: Tailwind Dark Mode Setup
// In tailwind.config.js:
// darkMode: 'class'

// Then toggle by adding 'dark' class to <html> or <body>

// =====================
// Auto Carousel Component (Full Width, Image + Animated Text)
// =====================

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Welcome to Dawat-e-Islami",
    desc: "Spreading knowledge with modern technology",
  },
  {
    image: "/images/slide2.jpg",
    title: "Learn Quran Online",
    desc: "Join classes and improve your recitation",
  },
  {
    image: "/images/slide3.jpg",
    title: "Islamic Knowledge",
    desc: "Explore Hadith, Fiqh and more",
  },
];

export function Carousel() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Auto Scroll
  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hovered]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="w-full h-[300px] md:h-[400px] overflow-hidden relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col md:flex-row items-center justify-between bg-gray-100 dark:bg-gray-900"
        >
          {/* Image */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <img
              src={slides[index].image}
              alt="slide"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 p-6 text-center md:text-left">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white"
            >
              {slides[index].title}
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300"
            >
              {slides[index].desc}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Buttons (Show on Hover) */}
      <div
        className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={prevSlide}
          className="bg-black/50 text-white p-3 rounded-full hover:bg-black"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="bg-black/50 text-white p-3 rounded-full hover:bg-black"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

