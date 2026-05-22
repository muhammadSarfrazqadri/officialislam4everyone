'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import KhutbaaImage from "../public/khutbaa.png";
import BismillahCaligraphy from "../public/bismillahCaligraphy.png";
import Islam4everyoneLogo from "../public/isalm-for-everyone-logo2.png";
import Image from "next/image";
import AnimatedButton from "./AnimatedButtons";

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const hijriDate = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <>
      {/* TOP HEADER */}
      <nav className="bg-background border-b border-border px-4 py-2 flex items-center justify-around text-xs">

        {/* LEFT: ISLAMIC BRAND MARK */}
        <div className="flex items-center gap-3">

          {/* <Image
            src={KhutbaaImage}
            alt="Khutbah"
            className="hidden lg:block h-[28px] w-auto opacity-70"
          /> */}

          {/* <div className="hidden lg:flex items-center">
          <span className="text-primary text-lg font-arabic tracking-wide">
            اَلحمدُ لِلّٰهِ رَبِّ العٰلَمِينَ والصَّلاةُ وَالسَّلامُ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِهِ وَصَحْبِهِ أَجْمَعِينَ
          </span>
        </div> */}

          {/* <Image
            src={BismillahCaligraphy}
            alt="Bismillah"
            className="block lg:hidden h-[28px] w-auto opacity-70"
          /> */}

          {/* <div className="block lg:hidden text-center">
            <span className="text-primary text-base font-arabic">
              بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ
            </span>
          </div> */}

          {/* ISLAMIC TITLE */}
          <div className="hidden md:block text-muted-foreground font-medium tracking-wide">
            Islam4Everyone • Authentic Source of Islamic Knowledge
          </div>

        </div>

        {/* CENTER: ISLAMIC DATE */}
        <div className="hidden md:flex flex-col items-center leading-tight">

          <span className="text-primary font-medium">
            Islamic Date: {hijriDate}
          </span>

          <span className="text-muted-foreground text-[10px]">
            {formattedDate}
          </span>

        </div>

        <div className="flex md:hidden flex-col items-center leading-tight">

          <span className="text-primary font-medium">
            {hijriDate}
          </span>

          <span className="text-muted-foreground text-[10px]">
            {formattedDate}
          </span>

        </div>

        {/* RIGHT: LANGUAGE */}
        <div className="flex items-center gap-2">

          <button
            onClick={() => setLanguage("English")}
            className={`
      px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-300
      ${language === "English"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground border-border hover:bg-secondary"}
    `}
          >
            EN
          </button>

          <button
            onClick={() => setLanguage("Urdu")}
            className={`
      px-4 py-1.5 rounded-full text-xs font-urdu border transition-all duration-300
      ${language === "Urdu"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground border-border hover:bg-secondary"}
    `}
          >
            اردو
          </button>

        </div>

      </nav >

      {/* MARQUEE */}
      < div className="relative overflow-hidden border-b border-border bg-secondary h-[2.5em] flex items-center" >

        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        />

        <div className="relative w-full overflow-hidden whitespace-nowrap">

          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >

            <span className="text-primary font-medium tracking-wider px-4 uppercase text-[10px] md:text-xs">
              Authentic Islamic Knowledge • Quran • Hadith • Fatwa • Academy • Articles •
            </span>

            <span className="text-primary font-medium tracking-wider px-4 uppercase text-[10px] md:text-xs">
              Authentic Islamic Knowledge • Quran • Hadith • Fatwa • Academy • Articles •
            </span>

          </motion.div>

        </div>

      </div >

      {/* MAIN NAV */}
      <nav className="sticky -top-6 z-50 py-2 border-b border-border bg-primary backdrop-blur-xl shadow-md">

  <div className="max-w-7xl mx-auto px-4 py-4 lg:py-3 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center w-full">

    {/* LEFT */}
    <div className="w-full lg:w-[40%] flex justify-center gap-3 flex-wrap">

      {["Quran", "Books", "Academy"].map((item) => (

        <a key={item} href={`/${item.toLowerCase()}`}>

          <AnimatedButton
            variant="gold"
            className="
              text-[11px] lg:text-[14px]
              px-4 lg:px-6
              uppercase tracking-wider font-semibold
            "
          >
            {item}
          </AnimatedButton>

        </a>

      ))}

    </div>

    {/* CENTER LOGO */}
    <div className="w-full lg:w-[20%] flex justify-center relative group">

      {/* STRONGER BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full opacity-60" />

      <a href="/" className="relative hover:scale-105 transition-transform duration-500">

        <Image
          src={Islam4everyoneLogo}
          alt="Logo"
          className="h-[60px] lg:h-[50px] w-auto drop-shadow-md"
        />

      </a>

    </div>

    {/* RIGHT */}
    <div className="w-full lg:w-[40%] flex justify-center gap-3 flex-wrap">

      {["Names", "Fatwa", "Articles"].map((item) => (

        <a
          key={item}
          href={item === "Names" ? "/names" : "/articles"}
        >

          <AnimatedButton
            variant="primary"
            className="
              text-[11px] lg:text-[14px]
              px-4 lg:px-6
              uppercase tracking-wider font-semibold
            "
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
};

export default Navbar;