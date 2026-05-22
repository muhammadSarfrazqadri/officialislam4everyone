'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  Search,
  ChevronDown,
  HeartHandshake,
} from "lucide-react";

import Islam4EveryoneLogo from "../public/isalm-for-everyone-logo2.png";

export default function SecondaryNavbar() {

  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      name: "Home",
      href: "/",
    },

    {
      name: "Quran",
      href: "/quran",
      // dropdown: [
      //   { name: "Read Quran", href: "/quran" },
      //   { name: "Translation", href: "/quran/translation" },
      //   { name: "Tafseer", href: "/quran/tafseer" },
      //   { name: "Audio Quran", href: "/quran/audio" },
      // ],
    },

    {
      name: "Hadith",
      href: "/hadith",
      dropdown: [
        { name: "40 Hadith", href: "/hadith/40-hadith" },
        { name: "Daily Hadith", href: "/hadith/daily" },
        { name: "Riyad-us-Saliheen", href: "/hadith/riyad-us-saliheen" },
      ],
    },

    {
      name: "Learn Islam",
      href: "/learn-islam",
      dropdown: [
        { name: "Namaz", href: "/learn-islam/namaz" },
        { name: "Wudu", href: "/learn-islam/wudu" },
        { name: "Ghusl", href: "/learn-islam/ghusl" },
        { name: "Fard Uloom", href: "/learn-islam/fard-uloom" },
      ],
    },

    {
      name: "Fatwa",
      href: "/fatwa",
      dropdown: [
        { name: "Ask Question", href: "/fatwa/ask" },
        { name: "Browse Fatwas", href: "/fatwa/browse" },
        { name: "Women مسائل", href: "/fatwa/women" },
      ],
    },

    {
      name: "Articles",
      href: "/articles",
      dropdown: [
        { name: "Islamic History", href: "/articles/history" },
        { name: "Seerat", href: "/articles/seerat" },
        { name: "Youth", href: "/articles/youth" },
        { name: "Family", href: "/articles/family" },
      ],
    },

    {
      name: "More",
      dropdown: [
        { name: "Islamic Names", href: "/names" },
        { name: "Prayer Times", href: "/prayer-times" },
        { name: "Qibla Finder", href: "/qibla-finder" },
        { name: "Zakat Calculator", href: "/zakat-calculator" },
        { name: "Inheritance", href: "/inheritance" },
        { name: "Academy", href: "/academy" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  return (

    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl shadow-sm">

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-5">

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card hover:bg-secondary transition-all duration-300"
        >
          {open ? (
            <X size={20} className="text-foreground" />
          ) : (
            <Menu size={20} className="text-foreground" />
          )}
        </button>

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
        >

          <Image
            src={Islam4EveryoneLogo}
            alt="Islam4Everyone"
            className="h-[50px] w-auto object-contain"
            priority
          />

        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-7">

          {navItems.map((item, i) => (

            <div
              key={i}
              className="relative"
              onMouseEnter={() => setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >

              <motion.div
                whileHover={{ y: -1 }}
                className="relative"
              >

                <Link
                  href={item.href || "#"}
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-all duration-300"
                >

                  {item.name}

                  {item.dropdown && (
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${
                        activeDropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  )}

                </Link>

                {/* UNDERLINE */}
                <div className="absolute -bottom-2 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />

              </motion.div>

              {/* DROPDOWN */}
              <AnimatePresence>

                {item.dropdown && activeDropdown === i && (

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-64 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
                  >

                    <div className="p-2">

                      {item.dropdown.map((sub, idx) => (

                        <Link
                          key={idx}
                          href={sub.href}
                          className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-primary transition-all duration-300"
                        >

                          {sub.name}

                          <ChevronDown
                            size={14}
                            className="-rotate-90 opacity-40"
                          />

                        </Link>

                      ))}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

        {/* RIGHT SECTION */}
        <div className="hidden lg:flex items-center gap-3">

          {/* SEARCH */}
          <div className="flex items-center gap-2 h-11 px-4 rounded-full border border-border bg-card">

            <Search
              size={17}
              className="text-muted-foreground"
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm placeholder:text-muted-foreground w-[170px]"
            />

          </div>

          {/* DONATE BUTTON */}
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="h-11 px-5 rounded-full bg-[var(--btn-donate-bg)] text-[var(--btn-donate-text)] border border-[var(--btn-donate-border)] shadow-md hover:bg-[var(--btn-donate-hover)] transition-all duration-300 text-sm font-semibold flex items-center gap-2"
          >

            <HeartHandshake size={17} />

            Donate

          </motion.button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >

            <div className="px-4 py-5 space-y-5">

              {/* MOBILE SEARCH */}
              <div className="flex items-center gap-2 h-12 px-4 rounded-full border border-border bg-card">

                <Search
                  size={17}
                  className="text-muted-foreground"
                />

                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                />

              </div>

              {/* MOBILE LINKS */}
              <div className="space-y-4">

                {navItems.map((item, i) => (

                  <div key={i}>

                    <Link
                      href={item.href || "#"}
                      className="flex items-center justify-between text-sm font-medium text-foreground"
                    >

                      {item.name}

                      {item.dropdown && (
                        <ChevronDown
                          size={15}
                          className="opacity-50"
                        />
                      )}

                    </Link>

                    {/* SUB MENU */}
                    {item.dropdown && (

                      <div className="mt-3 ml-3 border-l border-border pl-4 space-y-3">

                        {item.dropdown.map((sub, idx) => (

                          <Link
                            key={idx}
                            href={sub.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                          >

                            {sub.name}

                          </Link>

                        ))}

                      </div>

                    )}

                  </div>

                ))}

              </div>

              {/* MOBILE DONATE */}
              <button
                className="w-full h-12 rounded-full bg-[var(--btn-donate-bg)] text-[var(--btn-donate-text)] font-semibold border border-[var(--btn-donate-border)]"
              >
                Support The Mission
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}