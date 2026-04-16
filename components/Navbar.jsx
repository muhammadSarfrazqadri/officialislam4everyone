'use client'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import KhutbaaImage from "../public/khutbaa.png"
import BismillahCaligraphy from "../public/bismillahCaligraphy.png"
import Islam4everyoneLogo from "../public/isalm-for-everyone-logo2.png"
import Image from "next/image";
import AnimatedButton from "./AnimatedButtons";

const Navbar = () => {
  const [language, setLanguage] = useState("English | انگریزی");

  return (
    <>
      {/* Top Header - Language & Calligraphy */}
      <nav className="bg-background border-b border-border flex items-center justify-around text-xs py-2 px-4">
        <Image
          src={KhutbaaImage}
          alt="Khutbaa"
          className="hidden lg:block h-[30px] w-auto opacity-70 brightness-150"
        />
        <Image
          src={BismillahCaligraphy}
          alt="Bismillah"
          className="block lg:hidden h-[30px] w-auto opacity-70 brightness-150"
        />

        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground border border-primary hover:bg-secondary/20 hover:text-accent w-[160px] transition-all duration-300 rounded-full"
            >
              {language}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-card text-card-foreground border-border">
            <DropdownMenuItem className="focus:bg-primary focus:text-primary-foreground cursor-pointer" onClick={() => setLanguage("English | انگریزی")}>
              English | انگریزی
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem className="focus:bg-primary focus:text-primary-foreground cursor-pointer" onClick={() => setLanguage("Urdu | اردو")}>
              Urdu | اردو
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem className="focus:bg-primary focus:text-primary-foreground cursor-pointer" onClick={() => setLanguage("Arabic | عربی")}>
              Arabic | عربی
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Marquee Ticker */}
      <div className="relative overflow-hidden border-b border-primary/20 bg-secondary h-[2.5em] flex items-center">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
        />
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <span className="text-accent font-semibold tracking-widest px-4 uppercase text-[10px] md:text-xs">
              Official Islam 4 Everyone • Authentic Islamic Resources • Quran • Hadith • Academy • Fatwa • Islamic Names • Articles •
            </span>
            <span className="text-accent font-semibold tracking-widest px-4 uppercase text-[10px] md:text-xs">
              Official Islam 4 Everyone • Authentic Islamic Resources • Quran • Hadith • Academy • Fatwa • Islamic Names • Articles •
            </span>
          </motion.div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/80 backdrop-blur-md top-0 z-50 shadow-xl border-b border-border min-h-[5.5em] flex items-center">
  <div className="max-w-7xl mx-auto px-4 py-6 lg:py-3 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center w-full">
    
    {/* 1. Left Side - Wrapped/Centered on Mobile & iPad, Left-aligned on Desktop */}
    <div className="w-full lg:w-[40%] flex justify-center gap-3 flex-wrap">
      {["Quran", "Hadith", "Academy"].map((item) => (
        <a key={item} href={`/${item.toLowerCase()}`}>
          <AnimatedButton 
            variant="gold" 
            className="text-[11px] lg:text-[14px] px-4 lg:px-6 uppercase tracking-wider font-bold"
          >
            {item}
          </AnimatedButton>
        </a>
      ))}
    </div>

    {/* 2. Logo - Always Centered */}
    <div className="w-full lg:w-[20%] flex justify-center relative group ">
      <div className="absolute inset-0 blur-3xl bg-accent/5 group-hover:bg-accent/10 transition-colors rounded-full" />
      <a href="/" className="relative transition-transform hover:scale-110 duration-500">
        <Image 
          src={Islam4everyoneLogo} 
          alt="Logo" 
          className="h-[60px] lg:h-[50px] w-auto drop-shadow-glow" 
        />
      </a>
    </div>

    {/* 3. Right Side - Wrapped/Centered on Mobile & iPad, Right-aligned on Desktop */}
    <div className="w-full lg:w-[40%] flex justify-center gap-3 flex-wrap">
      {["Names", "Fatwa", "Articles"].map((item) => (
        <a key={item} href={item === "Names" ? "/names" : "https://www.fatwaqa.com/en"}>
          <AnimatedButton 
            variant="primary" 
            className="text-[11px] lg:text-[14px] px-4 lg:px-6 uppercase tracking-wider font-bold"
          >
            {item}
          </AnimatedButton>
        </a>
      ))}
    </div>

  </div>
</nav>
    </>
  );
}

export default Navbar;