import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#003020] text-white">
      {/* Decorative Top Border */}
      <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,#e6c17a,#e6c17a_20px,#003020_20px,#003020_40px)]" />
      
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col items-center mb-12">
          {/* Bottom Navigation */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10 text-sm font-medium">
            <Link href="/about" className="hover:text-[#e6c17a] transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-[#e6c17a] transition-colors">Contact</Link>
            <Link href="/faqs" className="hover:text-[#e6c17a] transition-colors">FAQs</Link>
            <Link href="/privacy" className="hover:text-[#e6c17a] transition-colors">Privacy Policy</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mb-10">
            {/* <Link href="#" className="hover:text-[#e6c17a] transition-colors"><Twitter className="w-5 h-5" /></Link> */}
            {/* <Link href="#" className="hover:text-[#e6c17a] transition-colors"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-[#e6c17a] transition-colors"><Instagram className="w-5 h-5" /></Link> */}
            {/* <Link href="#" className="hover:text-[#e6c17a] transition-colors"><Youtube className="w-5 h-5" /></Link> */}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-white/60 mb-2">
              © {new Date().getFullYear()} Islam for Everyone. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

