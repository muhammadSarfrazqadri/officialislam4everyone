import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-background text-muted-foreground border-t border-border font-sans">
      {/* Top Accent Bar matching Navbar buttons */}
      <div className="h-1.5 w-full bg-primary" />
      
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex flex-col items-start group">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-primary absolute -top-1 -right-2 group-hover:scale-150 transition-transform duration-300"></div>
                <p className='text-3xl font-black text-foreground tracking-tighter uppercase'>
                  ISLAM<span className="text-primary">4</span>EVERYONE
                </p>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed max-w-sm">
              Providing authentic Islamic resources, including Quran, Hadith, Fatwa, and educational courses for the global community.
            </p>

            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'YouTube', 'Instagram'].map((social) => (
                <Link 
                  key={social} 
                  href="#" 
                  className="h-9 w-9 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-5">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.2em] border-l-4 border-primary pl-3">Resources</h3>
              <ul className="flex flex-col gap-3 text-[13px] font-medium">
                <li><Link href="/quran" className="hover:text-primary transition-colors">The Holy Quran</Link></li>
                <li><Link href="/hadith" className="hover:text-primary transition-colors">Hadith Collection</Link></li>
                <li><Link href="/books" className="hover:text-primary transition-colors">Islamic Books</Link></li>
                <li><Link href="/fatwa" className="hover:text-primary transition-colors">Fatwa Services</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.2em] border-l-4 border-primary pl-3">Education</h3>
              <ul className="flex flex-col gap-3 text-[13px] font-medium">
                <li><Link href="/academy" className="hover:text-primary transition-colors">Online Academy</Link></li>
                <li><Link href="/courses" className="hover:text-primary transition-colors">Specialized Courses</Link></li>
                <li><Link href="/names" className="hover:text-primary transition-colors">Islamic Names</Link></li>
                <li><Link href="/media" className="hover:text-primary transition-colors">Multimedia Blogs</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-5 col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.2em] border-l-4 border-primary pl-3">Newsletter</h3>
              <p className="text-[11px] font-medium leading-relaxed">Stay updated with our latest articles and courses.</p>
              <div className="flex flex-col gap-2 mt-1">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-muted border border-border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary transition-colors text-foreground"
                />
                <button className="bg-primary hover:opacity-90 text-primary-foreground text-[11px] font-bold py-2 rounded-lg transition-colors uppercase tracking-wider shadow-sm shadow-primary/20">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
            &copy; {new Date().getFullYear()} ISLAM<span className="text-primary">4</span>EVERYONE. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[11px] font-bold text-muted-foreground tracking-widest uppercase">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
