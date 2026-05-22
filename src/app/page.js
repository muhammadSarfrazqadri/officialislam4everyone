'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

import Islam4EveryoneLogo from "../../public/isalm-for-everyone-logo2.png";

export default function HomePage() {

  return (
    <main className="bg-background text-foreground">

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 border-b border-border">

        <Image
          src={Islam4EveryoneLogo}
          alt="Islam4Everyone"
          className="h-24 w-auto mb-6"
        />

        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          Authentic Islamic Knowledge Platform
        </h1>

        <p className="text-muted-foreground mt-4 max-w-2xl">
          Quran, Hadith, Fatwa, Articles and Islamic Learning — all in one place with authentic references.
        </p>

        {/* SEARCH BAR */}
        <div className="mt-8 flex items-center w-full max-w-xl border border-border bg-card rounded-full px-4 py-3">

          <Search className="text-muted-foreground" size={18} />

          <input
            type="text"
            placeholder="Search Quran, Hadith, Articles..."
            className="w-full bg-transparent outline-none px-3 text-sm"
          />

        </div>

        {/* CTA */}
        <div className="mt-6 flex gap-3 flex-wrap justify-center">

          <Link href="/quran">
            <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground">
              Read Quran
            </button>
          </Link>

          <Link href="/hadith">
            <button className="px-6 py-2 rounded-full border border-border">
              Explore Hadith
            </button>
          </Link>

        </div>

      </section>

      {/* ================= QUICK CATEGORIES ================= */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

        {[
          "Quran",
          "Hadith",
          "Fatwa",
          "Articles",
          "Learn Islam",
          "Prayer Times",
          "Zakat Calculator",
          "Qibla Finder",
        ].map((item, i) => (

          <Link key={i} href={`/${item.toLowerCase().replace(/\s/g, '-')}`}>

            <div className="p-4 border border-border rounded-xl bg-card hover:bg-secondary transition text-center">

              <p className="text-sm font-medium">{item}</p>

            </div>

          </Link>

        ))}

      </section>

      {/* ================= FEATURED QURAN ================= */}
      <section className="py-16 px-4 border-t border-border">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl font-bold mb-6">Featured Quran Section</h2>

          <div className="grid md:grid-cols-3 gap-4">

            {[1, 2, 3].map((i) => (

              <div key={i} className="p-5 border border-border rounded-xl bg-card">

                <h3 className="font-semibold">Surah Example {i}</h3>

                <p className="text-sm text-muted-foreground mt-2">
                  Short description or Ayah preview will go here.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= HADITH SECTION ================= */}
      <section className="py-16 px-4 bg-secondary/40 border-t border-border">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl font-bold mb-6">Daily Hadith</h2>

          <div className="p-6 border border-border rounded-xl bg-card">

            <p className="text-lg leading-relaxed">
              “The best among you are those who learn the Quran and teach it.”
            </p>

            <span className="text-sm text-muted-foreground block mt-3">
              — Sahih Bukhari
            </span>

          </div>

        </div>

      </section>

      {/* ================= ISLAMIC LEARN SECTION ================= */}
      <section className="py-16 px-4 border-t border-border">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-2xl font-bold mb-4">Learn Islam Step by Step</h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Structured Islamic learning for beginners and advanced students.
          </p>

          <div className="grid md:grid-cols-4 gap-4">

            {["Namaz", "Wudu", "Ghusl", "Aqeedah"].map((item, i) => (

              <div key={i} className="p-5 border border-border rounded-xl bg-card hover:bg-secondary">

                <p className="font-medium">{item}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-20 px-4 border-t border-border text-center">

        <h2 className="text-3xl font-bold">
          Join Islam4Everyone Mission
        </h2>

        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Help us spread authentic Islamic knowledge worldwide.
        </p>

        <div className="mt-6 flex justify-center gap-3">

          <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground">
            Donate
          </button>

          <button className="px-6 py-2 rounded-full border border-border">
            Contact Us
          </button>

        </div>

      </section>

    </main>
  );
}