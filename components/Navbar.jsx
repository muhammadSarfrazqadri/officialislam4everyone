'use client'
import { motion, animate } from "framer-motion";
import AnimatedButton, { primaryButton } from "../components/Buttons";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Heart, GraduationCap, Menu, X } from "lucide-react";
import KhutbaaImage from "../public/khutbaa.png"
import BismillahCaligraphy from "../public/bismillahCaligraphy.png"
import Islam4everyoneLogo from "../public/isalm-for-everyone-logo2.png"
import Image from "next/image";


const Navbar = () => {
  const [language, setLanguage] = useState("English | انگریزی");
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Quran", href: "/quran" },
    { name: "Hadith", href: "/hadith" },
    {
      name: "Academy",
      href: "/academy",
      dropdown: [
        { name: "Quran Course", href: "/quran-course" },
        { name: "Hadith Course", href: "/hadith-course" },
        { name: "Tajweed Course", href: "/tajweed-course" }
      ]
    },
    { name: "Names", href: "/names" },
    { name: "Fatwa", href: "/fatwa" },
    { name: "Articles", href: "/articles" },
  ];

  return (
    <>

      {/* Top Header */}
      <nav className=" bg-foreground bg-white border-b-3 border-white/90 md:bg-foreground shadow-xl shadow-black flex items-center justify-around text-xs text-background">
        {/* Desktop Image */}
        <Image
          src={KhutbaaImage}
          alt="Khutbaa"
          className="hidden md:block h-[30px] w-auto"
        />

        {/* Mobile + Tablet Image */}
        <Image
          src={BismillahCaligraphy}
          alt="Khutbaa"
          className="block md:hidden h-[30px] w-auto"
        />


        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" className="bg-foreground/60 text-background p-5 border-border hover:bg-foreground/90 hover:text-red-500 w-[150px]">
              {language}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-popover text-popover-foreground">
            <DropdownMenuItem onClick={() => setLanguage("English | انگریزی")}>
              English | انگریزی
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setLanguage("Urdu | اردو")}>
              Urdu | اردو
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setLanguage("Arabic | عربی")}>
              Arabic | عربی
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      <div className="relative overflow-hidden border-b-4 border-white/90 bg-gradient-to-r from-primary via-secondary to-primary h-[2em] md:h-[2.5em] flex items-center border-y border-white/10">
        {/* Animated Shine Effect */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 skew-x-12"
        />

        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <span className="text-white font-medium tracking-wide px-4 uppercase text-[10px] md:text-xs">
              Welcome to Official Islam 4 Everyone • Authentic Islamic Resources • Quran • Hadith • Academy • Fatwa • Islamic Names • Articles •
            </span>
            <span className="text-white font-medium tracking-wide px-4 uppercase text-[10px] md:text-xs">
              Welcome to Official Islam 4 Everyone • Authentic Islamic Resources • Quran • Hadith • Academy • Fatwa • Islamic Names • Articles •
            </span>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary/80 shadow-lg shadow-primary/20 border-b border-border dark:shadow-black/50 min-h-[5em] flex items-center justify-around transition-colors duration-500">

        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 md:gap-8 flex-wrap md:flex-nowrap items-center text-foreground">

          {/* Left */}
          <div className="w-full md:w-[40%] flex justify-center md:justify-start gap-2 flex-wrap md:flex-nowrap mb-2 md:mb-0">
            <a href="/quran">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground min-w-[6.5em] px-4 py-2 whitespace-nowrap rounded-md transition-all hover:bg-primary/90 cursor-pointer"
              >
                Al Quran
              </motion.button>
            </a>
            <a href="/hadith">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground min-w-[6.5em] px-4 py-2 whitespace-nowrap rounded-md transition-all hover:bg-primary/90 cursor-pointer"
              >
                Hadith
              </motion.button>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-foreground text-background min-w-[7em] px-4 py-2 whitespace-nowrap rounded-md transition-all hover:bg-foreground/90 cursor-pointer"
            >
              Academy
            </motion.button>
          </div>

          {/* Logo */}
          <div className="w-full md:w-[20%] items-center flex justify-center mb-2 md:mb-0">
            <a href="/" className="group flex items-center gap-1">
              <Image
                src={Islam4everyoneLogo}
                alt="Islam4everyone Logo"
                className="h-[40px] w-auto"
              />
            </a>
          </div>

          {/* Right */}
          <div className="w-full md:w-[40%] flex justify-center md:justify-end gap-2 flex-wrap md:flex-nowrap">
            <a href="/academy">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-foreground text-background min-w-[7em] px-4 py-2 whitespace-nowrap rounded-md transition-all hover:bg-foreground/80 cursor-pointer"
              >
                Names
              </motion.button>
            </a>
            <a href="/names">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary  text-primary-foreground min-w-[6.5em] px-4 py-2 whitespace-nowrap rounded-md transition-all hover:bg-primary/90 cursor-pointer"
              >
                Fatwa
              </motion.button>
            </a>
            <a href="/articles">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground min-w-[6.5em] px-4 py-2 whitespace-nowrap rounded-md transition-all hover:bg-primary/90 cursor-pointer"
              >
                Articles
              </motion.button>
            </a>
          </div>

        </div>

      </nav>

    </>
  );
}

export default Navbar;