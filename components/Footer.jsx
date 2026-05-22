'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// import {
//   Facebook,
//   Instagram,
//   Youtube,
//   Mail,
//   MapPin,
//   Phone,
//   Heart,
//   ChevronRight,
// } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaHeart,
  FaChevronRight,
} from "react-icons/fa";

import FooterLogo from "../public/isalm-for-everyone-logo2.png";

const Footer = () => {

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const islamicLinks = [
    { name: "Quran", href: "/quran" },
    { name: "Hadith", href: "/hadith" },
    { name: "Fatwa", href: "/fatwa" },
    { name: "Articles", href: "/articles" },
    { name: "Islamic Names", href: "/names" },
    { name: "Academy", href: "/academy" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background to-secondary/40">

      {/* Islamic Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>

            <Link href="/" className="inline-block mb-5">
              <Image
                src={FooterLogo}
                alt="Islam4Everyone"
                className="h-[70px] w-auto object-contain"
              />
            </Link>

            <p className="text-muted-foreground leading-7 text-sm">
              Islam4Everyone is dedicated to spreading authentic Sunni Islamic
              knowledge through modern technology with simplicity, beauty,
              and reliability.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">

              {[
                FaFacebook,
                FaInstagram,
                FaYoutube,
              ].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/"
                    className="w-10 h-10 rounded-full border border-border bg-card hover:bg-primary transition-all duration-300 flex items-center justify-center group"
                  >
                    <Icon
                      size={18}
                      className="text-primary group-hover:text-primary-foreground"
                    />
                  </Link>
                </motion.div>
              ))}

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold text-foreground mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <FaChevronRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* ISLAMIC SECTIONS */}
          <div>

            <h3 className="text-lg font-semibold text-foreground mb-5">
              Islamic Sections
            </h3>

            <ul className="space-y-3">

              {islamicLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <FaChevronRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-semibold text-foreground mb-5">
              Contact Information
            </h3>

            <div className="space-y-5 text-sm">

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <FaEnvelope size={17} />
                </div>

                <div>
                  <p className="text-muted-foreground">
                    info@islam4everyone.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <FaPhone size={17} />
                </div>

                <div>
                  <p className="text-muted-foreground">
                    +92 300 0000000
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <FaMapMarkerAlt size={17} />
                </div>

                <div>
                  <p className="text-muted-foreground">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

            </div>

            {/* Donate Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-7"
            >
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow-lg hover:opacity-90 transition-all duration-300"
              >
                Support The Mission
              </Link>
            </motion.div>

          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="mt-16 border border-border rounded-3xl bg-card/60 backdrop-blur-xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Join Our Islamic Newsletter
            </h3>

            <p className="text-muted-foreground text-sm">
              Receive authentic Islamic reminders, articles, and updates.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">

            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 min-w-[280px] rounded-full border border-border bg-background px-5 outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all duration-300"
            >
              Subscribe
            </button>

          </form>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-7 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Islam4Everyone. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">

            <span>Made with</span>

            <FaHeart
              size={15}
              className="fill-accent text-accent"
            />

            <span>for spreading authentic Islam</span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;