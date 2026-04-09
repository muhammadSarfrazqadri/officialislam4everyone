'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown } from "lucide-react";

export default function SecondaryNavbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Quran", href: "/quran" },
    {
      name: "Academy",
      dropdown: [
        { name: "Quran Course", href: "/quran-course" },
        { name: "Hadith Course", href: "/hadith-course" },
        { name: "Tajweed", href: "/tajweed-course" },
      ],
    },
    { name: "Fatwa", href: "/fatwa" },
    { name: "Articles", href: "/articles" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-white/80 via-white/70 to-white/80 dark:from-black/80 dark:via-black/70 dark:to-black/80 border-b border-white/20">

      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border bg-white/20 dark:bg-white/10 hover:scale-105 transition"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-lg bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
        >
          <a href="/">ISLAM4EVERYONE</a>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-1 text-sm font-medium cursor-pointer text-gray-700 dark:text-gray-200"
              >
                {item.name}
                {item.dropdown && <ChevronDown size={14} />}
              </motion.a>

              {/* Dropdown */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-black shadow-2xl rounded-xl overflow-hidden border"
                  >
                    {item.dropdown.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.href}
                        className="block px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-red-500/10 hover:to-orange-500/10"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Animated underline */}
              <motion.div
                layoutId="underline"
                className="h-[2px] bg-gradient-to-r from-red-500 to-orange-500 w-0 group-hover:w-full transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Right Section Desktop */}
        <div className="hidden md:flex items-center gap-3">

          {/* Search */}
          <div className="flex items-center border rounded-full px-3 py-1 bg-white/50 dark:bg-black/50 backdrop-blur-md focus-within:ring-2 focus-within:ring-red-500">
            <input className="bg-transparent outline-none text-sm" placeholder="Search" />
            <Search size={16} />
          </div>

          {/* Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm shadow-lg hover:shadow-red-500/50"
          >
            Donate
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm shadow-lg hover:shadow-pink-500/50"
          >
            Feedback
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden px-4 pb-4 space-y-4 border-t bg-white/90 dark:bg-black/90 backdrop-blur-xl"
          >
            {/* Search */}
            <div className="flex items-center border rounded-full px-3 py-2 bg-white/50 dark:bg-black/50">
              <input className="w-full bg-transparent outline-none" placeholder="Search" />
              <Search size={16} />
            </div>

            {/* Links */}
            {navItems.map((item, i) => (
              <div key={i}>
                <p className="font-medium">{item.name}</p>
                {item.dropdown && (
                  <div className="pl-4 mt-1 space-y-1 text-sm">
                    {item.dropdown.map((sub, idx) => (
                      <a key={idx} href={sub.href} className="block hover:text-red-500">
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded-full shadow-lg">
                Donate
              </button>
              <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-full shadow-lg">
                Feedback
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
