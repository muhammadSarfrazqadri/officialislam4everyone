// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Play, ChevronRight, BookOpen, User, HandsPraying, FileText } from 'lucide-react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-[#fdfaf3] pt-16 font-sans">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-[#003020] text-white pt-20 pb-24 md:pb-40">
//         {/* Background Image/Pattern Wrapper */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           {/* Main Hero Image */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
//             style={{ 
//               backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop')`,
//             }}
//           />
//           {/* Elegant Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-[#003020]/90 via-[#003020]/70 to-[#003020]" />
          
//           {/* Subtle Islamic Motif Pattern (SVG placeholder idea) */}
//           <div className="absolute inset-0 opacity-10 pointer-events-none" 
//                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e6c17a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
//           />
//         </div>

//         <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-3xl mx-auto md:mx-0"
//           >
//             <motion.span 
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 }}
//               className="inline-block text-[#e6c17a] font-bold tracking-[0.3em] uppercase text-xs mb-4 border-b-2 border-[#e6c17a]/30 pb-1"
//             >
//               Welcome to the path of wisdom
//             </motion.span>
//             <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8 drop-shadow-2xl">
//               Discover the <br className="hidden md:block" /> 
//               <span className="text-[#e6c17a]">Divine Beauty</span> <br className="hidden md:block" />
//               of Islam
//             </h1>
//             <p className="text-lg md:text-xl text-white/80 mb-12 font-light max-w-xl leading-relaxed italic">
//               "Allah is beautiful and He loves beauty." Explore the authentic message of Islam through our curated resources.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
//               <Link 
//                 href="/get-started"
//                 className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#e6c17a] hover:bg-[#d4ad65] text-[#003020] px-10 py-4 rounded-full font-black uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(230,193,122,0.3)] hover:-translate-y-1"
//               >
//                 Get Started
//                 <ChevronRight className="w-5 h-5" />
//               </Link>
//               <Link 
//                 href="/about"
//                 className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full font-black uppercase tracking-wider backdrop-blur-sm transition-all"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </motion.div>
//         </div>

//         {/* Floating Cards Injection for Mobile (Visible only on small screens inside hero) */}
//         <div className="md:hidden container mx-auto px-6 mt-16 grid grid-cols-1 gap-4 relative z-20">
//           {[
//             { title: 'Introduction to Islam', icon: '🕌', link: '/intro' },
//             { title: 'Who is Prophet Muhammad?', icon: '👳', link: '/prophet' },
//             { title: 'Learn How to Pray', icon: '🤲', link: '/pray' },
//             { title: 'Read the Quran', icon: '📖', link: '/quran' },
//           ].map((card, i) => (
//             <Link key={i} href={card.link}>
//               <motion.div 
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 + (i * 0.1) }}
//                 className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#e6c17a]/20 flex items-center gap-5 active:scale-95 transition-transform"
//               >
//                 <div className="w-14 h-14 bg-[#fdfaf3] rounded-xl flex items-center justify-center text-4xl border border-[#e6c17a]/10">
//                   {card.icon}
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="font-serif font-black text-[#003020] leading-tight">
//                     {card.title}
//                   </span>
//                   <span className="text-[10px] uppercase tracking-widest text-[#006847] mt-1 font-bold">Explore Now</span>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </div>

//         {/* Subtle Bottom Border Overlay */}
//         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e6c17a]/50 to-transparent" />
//       </section>

//       {/* Quick Access Section (Visible only on desktop/tablet as floating row) */}
//       <section className="hidden md:block container mx-auto px-6 -mt-16 relative z-20">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { title: 'Introduction to Islam', icon: '🕌', link: '/intro' },
//             { title: 'Who is Prophet Muhammad?', icon: '👳', link: '/prophet' },
//             { title: 'Learn How to Pray', icon: '🤲', link: '/pray' },
//             { title: 'Read the Quran', icon: '📖', link: '/quran' },
//           ].map((card, i) => (
//             <Link key={i} href={card.link}>
//               <motion.div 
//                 whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
//                 className="bg-white p-6 rounded-3xl shadow-2xl border border-[#e6c17a]/20 flex flex-col items-center text-center gap-4 group cursor-pointer transition-all duration-300"
//               >
//                 <div className="w-20 h-20 bg-[#fdfaf3] rounded-2xl flex items-center justify-center text-5xl group-hover:bg-[#e6c17a]/10 transition-colors">
//                   {card.icon}
//                 </div>
//                 <span className="font-serif text-lg font-black text-[#003020] group-hover:text-[#006847] transition-colors leading-tight min-h-[3rem] flex items-center">
//                   {card.title}
//                 </span>
//                 <div className="w-8 h-1 bg-[#e6c17a] transition-all group-hover:w-16" />
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* Redesigned Content Sections for "Expensive" Feel */}
//       <section className="container mx-auto px-6 py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Daily Hadith */}
//           <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e2e8f0] relative overflow-hidden group">
//             <div className="absolute top-0 right-0 p-4 opacity-5">
//               <BookOpen className="w-32 h-32 text-[#006847]" />
//             </div>
//             <div className="flex items-center gap-2 text-[#e6c17a] font-bold mb-6">
//               <span className="text-2xl">🌙</span>
//               <h3 className="uppercase tracking-widest text-sm">Daily Hadith</h3>
//             </div>
//             <blockquote className="text-xl md:text-2xl font-serif italic text-[#003020] mb-6 leading-relaxed">
//               "The best of you are those who learn the Quran and teach it to others."
//             </blockquote>
//             <p className="text-[#666e6a] font-medium mb-8">— Sahih Bukhari</p>
//             <Link 
//               href="/hadith"
//               className="inline-flex items-center gap-2 bg-[#006847] text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-[#005a3e] transition-colors"
//             >
//               Read More <ChevronRight className="w-4 h-4" />
//             </Link>
//           </div>

//           {/* Islamic Q&A */}
//           <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e2e8f0] relative overflow-hidden group">
//              <div className="absolute top-0 right-0 p-4 opacity-5">
//               <FileText className="w-32 h-32 text-[#006847]" />
//             </div>
//             <div className="flex items-center gap-2 text-[#e6c17a] font-bold mb-6">
//               <span className="text-2xl">🕌</span>
//               <h3 className="uppercase tracking-widest text-sm">Islamic Q&A</h3>
//             </div>
//             <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#003020] mb-10 leading-snug">
//               Why do Muslims Fast in Ramadan?
//             </h3>
//             <Link 
//               href="/qna"
//               className="inline-flex items-center gap-2 bg-[#006847] text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-[#005a3e] transition-colors"
//             >
//               Find Answers <ChevronRight className="w-4 h-4" />
//             </Link>
            
//             {/* Background Image Sub-element */}
//             <div 
//               className="absolute bottom-4 right-4 w-32 h-32 opacity-20 pointer-events-none"
//               style={{ 
//                 backgroundImage: `url('https://images.unsplash.com/photo-1590074258757-040228d7a177?q=80&w=250&auto=format&fit=crop')`,
//                 backgroundSize: 'cover',
//                 borderRadius: '50%'
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Islam Section */}
//       <section className="bg-white py-20 border-y border-[#e2e8f0]">
//         <div className="container mx-auto px-6 text-center mb-16">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="h-px w-12 bg-[#e6c17a]" />
//             <span className="text-[#e6c17a] font-bold">✦</span>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003020]">Why Choose Islam?</h2>
//             <span className="text-[#e6c17a] font-bold">✦</span>
//             <div className="h-px w-12 bg-[#e6c17a]" />
//           </div>
//         </div>
        
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { 
//                 title: 'Peace & Purpose', 
//                 desc: 'A path to inner peace and fulfillment.', 
//                 img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
//                 icon: '🌙' 
//               },
//               { 
//                 title: 'Guidance from Allah', 
//                 desc: 'Divine wisdom to live a meaningful life.', 
//                 img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
//                 icon: '☪️' 
//               },
//               { 
//                 title: 'Brotherhood & Unity', 
//                 desc: 'A community of faith and support.', 
//                 img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
//                 icon: '🤝' 
//               },
//             ].map((item, i) => (
//               <motion.div key={i} whileHover={{ y: -5 }} className="bg-[#fdfaf3] rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0]">
//                 <div 
//                   className="h-48 bg-cover bg-center"
//                   style={{ backgroundImage: `url('${item.img}')` }}
//                 />
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 mb-3">
//                     <span className="text-xl">{item.icon}</span>
//                     <h3 className="font-serif font-bold text-[#003020] text-lg">{item.title}</h3>
//                   </div>
//                   <p className="text-[#666e6a] text-sm leading-relaxed">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Explore the Quran Section */}
//       <section className="py-20 bg-[#fdfaf3]">
//         <div className="container mx-auto px-6 text-center mb-16">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="h-px w-12 bg-[#e6c17a]" />
//             <span className="text-[#e6c17a] font-bold">✦</span>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003020]">Explore the Quran</h2>
//             <span className="text-[#e6c17a] font-bold">✦</span>
//             <div className="h-px w-12 bg-[#e6c17a]" />
//           </div>
//         </div>

//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <Link href="/quran" className="group">
//               <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
//                 <div 
//                   className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
//                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop')` }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//                 <div className="absolute bottom-0 left-0 p-8">
//                   <h3 className="text-2xl font-serif font-bold text-white mb-2">Read the Quran</h3>
//                   <p className="text-white/80 text-sm">Read the Quran with translation.</p>
//                 </div>
//               </div>
//             </Link>
            
//             <Link href="/tafsir" className="group">
//               <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
//                 <div 
//                   className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
//                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584281729155-3c90754c5fcd?q=80&w=800&auto=format&fit=crop')` }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//                 <div className="absolute bottom-0 left-0 p-8">
//                   <h3 className="text-2xl font-serif font-bold text-white mb-2">Tafsir & Tafseer</h3>
//                   <p className="text-white/80 text-sm">Understand the Quran's meaning.</p>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-20 border-t border-[#e2e8f0]">
//         <div className="container mx-auto px-6 max-w-4xl text-center">
//            <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="h-px w-12 bg-[#e6c17a]" />
//             <span className="text-[#e6c17a] font-bold">✦</span>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003020]">Join Our Newsletter</h2>
//             <span className="text-[#e6c17a] font-bold">✦</span>
//             <div className="h-px w-12 bg-[#e6c17a]" />
//           </div>
//           <p className="text-[#666e6a] mb-10">Get weekly Islamic insights and updates.</p>
          
//           <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               className="flex-1 px-6 py-4 rounded-md border border-[#e2e8f0] focus:outline-none focus:border-[#006847] bg-white text-[#003020]"
//               required
//             />
//             <button 
//               type="submit"
//               className="px-10 py-4 bg-[#003020] text-white font-bold rounded-md hover:bg-[#00261a] transition-colors"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;
