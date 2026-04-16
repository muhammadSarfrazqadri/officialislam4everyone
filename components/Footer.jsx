'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import { Facebook, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B0C0C] text-[#FFDE42]/70 pt-16 pb-8 px-6 md:px-12 border-t border-[#313E17]">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#FFDE42] mb-4">
            Islam4Everyone
          </h2>
          <p className="text-sm leading-relaxed">
            Spreading authentic Islamic knowledge through modern technology. 
            Learn Quran, Hadith, and explore structured courses easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-[#FFDE42] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#FFDE42] cursor-pointer transition-colors">Home</li>
            <li className="hover:text-[#FFDE42] cursor-pointer transition-colors">About</li>
            <li className="hover:text-[#FFDE42] cursor-pointer transition-colors">Contact</li>
            <li className="hover:text-[#FFDE42] cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Islamic Sections */}
        <div>
          <h3 className="font-semibold text-[#FFDE42] mb-4">
            Sections
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#FFDE42] cursor-pointer transition-colors">Quran</li>
            <li className="hover:text-[#FFDE42] cursor-pointer transition-colors">Hadith</li>
            <li className="hover:text-[#FFDE42] cursor-pointer transition-colors">Courses</li>
            <li className="hover:text-[#FFDE42] cursor-pointer transition-colors">Academy</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-semibold text-[#FFDE42] mb-4">
            Contact
          </h3>

          <div className="flex items-center gap-2 text-sm mb-3">
            {/* <Mail size={16} /> */}
            <span>info@islam4everyone.com</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <motion.div whileHover={{ scale: 1.2 }}>
              {/* <Facebook className="cursor-pointer hover:text-[#FFDE42]" /> */}
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }}>
              {/* <Twitter className="cursor-pointer hover:text-[#FFDE42]" /> */}
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }}>
              {/* <Youtube className="cursor-pointer hover:text-[#FFDE42]" /> */}
            </motion.div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#313E17] mt-10 pt-6 text-center text-sm text-[#FFDE42]/40">
        © {new Date().getFullYear()} Islam4Everyone. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;