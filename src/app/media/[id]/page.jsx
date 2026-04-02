'use client';

import React from 'react';
import Link from 'next/link';

const BlogPostPage = ({ params }) => {
  const post = { title: "The Power of Patience (Sabr)", category: "Spiritual", date: "Oct 15, 2023", author: "Sheikh Muhammad" };

  return (
    <div className="min-h-screen bg-background">
      {/* Blog Detail Header */}
      <section className="bg-slate-50 border-b-8 border-[var(--primary)] py-40 w-full relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-24 text-[20rem] font-black text-[var(--secondary)]/5 leading-none group-hover:text-[var(--primary)]/5 transition-colors duration-1000 uppercase tracking-tighter pointer-events-none">Blog</div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="w-16 h-1 bg-[var(--primary)] mx-auto opacity-50 shadow-[0_0_20px_rgba(225,77,77,0.5)] mb-8"></div>
          <h1 className="text-6xl md:text-8xl font-black text-[var(--secondary)] uppercase tracking-tighter mb-4 scale-y-110">
            {post.title}
          </h1>
          <div className="flex flex-col items-center gap-4 mt-8">
            <span className="text-sm font-black uppercase text-[var(--primary)] tracking-widest">{post.category}</span>
            <div className="flex gap-6 text-[11px] font-black text-slate-400 tracking-widest uppercase">
               <span>By {post.author}</span>
               <span>•</span>
               <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="container mx-auto px-6 py-40 max-w-4xl">
         <article className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed">
            <div className="space-y-12">
               <p className="text-3xl text-[var(--secondary)] font-black italic border-l-[12px] border-[var(--primary)] pl-8 mb-16 leading-relaxed">
                  "Patience is not the ability to wait, but the ability to keep a good attitude while waiting."
               </p>
               
               <p className="text-xl">
                  Patience (Sabr) is one of the most emphasized virtues in Islam. It is mentioned in the Holy Quran over 90 times, highlighting its immense importance in the spiritual journey of a believer. Sabr is not merely waiting; it is a conscious decision to remain firm and steadfast in the face of difficulties, out of love and obedience to Allah.
               </p>
               
               <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tighter border-b-2 border-border pb-4 inline-block">The Three Types of Sabr</h2>
               
               <ul className="list-disc pl-8 space-y-6">
                  <li className="pl-4 border-l-4 border-transparent hover:border-[var(--primary)] transition-all"><strong>Patience in Obeying Allah:</strong> Consistently performing acts of worship even when it's difficult.</li>
                  <li className="pl-4 border-l-4 border-transparent hover:border-[var(--primary)] transition-all"><strong>Patience in Avoiding Sins:</strong> Staying away from what is prohibited despite the temptation.</li>
                  <li className="pl-4 border-l-4 border-transparent hover:border-[var(--primary)] transition-all"><strong>Patience in Calamities:</strong> Accepting trials and tribulations without despairing or losing faith in Allah's mercy.</li>
               </ul>

               <div className="mt-20 pt-20 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-slate-100 border-4 border-white shadow-xl flex items-center justify-center text-4xl group hover:scale-110 transition-transform">👤</div>
                      <div className="flex flex-col gap-1">
                         <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase italic">Published By</span>
                         <span className="text-lg font-black text-[var(--secondary)] uppercase tracking-tighter">{post.author}</span>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      {['🔗', 'X', 'FB'].map((social) => (
                        <button key={social} className="w-12 h-12 rounded-2xl bg-slate-50 border border-border flex items-center justify-center text-slate-400 hover:bg-[var(--primary)] hover:text-foreground hover:border-[var(--primary)] transition-all shadow-md group-hover:rotate-12">{social}</button>
                      ))}
                   </div>
               </div>
            </div>
         </article>
         
         <div className="mt-40 flex justify-center">
            <Link href="/media" className="px-24 py-8 bg-[var(--secondary)] text-foreground text-sm font-black uppercase tracking-[1em] hover:bg-[var(--primary)] transition-all shadow-2xl hover:tracking-[1.2em] duration-1000">Back Blogs</Link>
         </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
