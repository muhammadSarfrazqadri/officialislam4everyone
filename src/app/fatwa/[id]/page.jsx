'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Globe, 
  ShieldCheck, 
  BookOpen, 
  UserCheck, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  Info,
  Scale,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

const fatwas = [
  { 
    id: 1,
    question: 'What is the importance of prayer in daily life?', 
    answer: 'Prayer (Salah) is the second pillar of Islam and the primary connection between the servant and the Creator. It serves as a spiritual anchor, providing discipline, gratitude, and a constant reminder of our purpose in this world.', 
    detailedAnswer: `Prayer (Salah) is the second pillar of Islam and the primary connection between the servant and the Creator. It serves as a spiritual anchor, providing discipline, gratitude, and a constant reminder of our purpose in this world.

Detailed Explanation:
1. Spiritual Connection: Salah is a direct link between the worshipper and Allah. Five times a day, a Muslim leaves the distractions of the world to stand before their Creator.
2. Character Building: The Quran states, "Indeed, prayer prohibits immorality and wrongdoing" (29:45). Regular prayer instills discipline and mindfulness of God.
3. Psychological Well-being: Scientific and spiritual perspectives both highlight the meditative benefits of prayer, reducing stress and providing a sense of community.
4. Social Cohesion: Praying in congregation (Jama'ah) strengthens the bonds between community members, regardless of their social status.`,
    category: 'Fiqh', 
    date: 'Oct 20, 2023',
    views: '12k',
    mufti: 'Sheikh Yahya Al-Habib',
    muftiRole: 'Senior Jurisprudence Consultant',
    status: 'Verified',
    references: ['Sahih Bukhari 527', 'Quran 2:43', 'Quran 29:45'],
    tags: ['Salah', 'Worship', 'Spirituality']
  },
  { 
    id: 2,
    question: 'Is crypto trading allowed in Shariah?', 
    answer: 'The permissibility of cryptocurrency depends on its underlying value, transparency, and usage in a specific jurisdiction. Scholars emphasize avoiding Gharar (uncertainty) and ensuring the asset has real utility rather than purely speculative gambling.', 
    detailedAnswer: `The permissibility of cryptocurrency depends on its underlying value, transparency, and usage in a specific jurisdiction. Scholars emphasize avoiding Gharar (uncertainty) and ensuring the asset has real utility rather than purely speculative gambling.

Core Principles Applied:
1. Mal (Property): Does the digital asset qualify as property in Shariah? Most contemporary scholars agree that digital assets with utility qualify.
2. Gharar (Uncertainty): High volatility is a concern, but scholars differentiate between inherent uncertainty and market fluctuation.
3. Riba (Usury): Trading must be direct and avoid interest-bearing models prevalent in DeFi.
4. Utility: If the token serves a specific purpose (gas fees, governance), it is more likely to be seen as permissible compared to "meme coins" with no value.`,
    category: 'Business', 
    date: 'Oct 22, 2023',
    views: '5.6k',
    mufti: 'Dr. Umar Qudrat',
    muftiRole: 'Islamic Finance PhD',
    status: 'Verified',
    references: ['AAOIFI Shariah Standards', 'Majlis Ash-Shura Ruling 2022'],
    tags: ['Finance', 'Crypto', 'Investment']
  },
  { 
    id: 3,
    question: 'How to perform Umrah step by step?', 
    answer: 'Umrah involves four key pillars: Ihram (intention and dress), Tawaf (circumambulation of the Kaaba), Sa’i (walking between Safa and Marwa), and Halq/Taqsir (cutting of hair). Each step must be performed with specific intentions and supplications.', 
    detailedAnswer: `Umrah involves four key pillars: Ihram (intention and dress), Tawaf (circumambulation of the Kaaba), Sa’i (walking between Safa and Marwa), and Halq/Taqsir (cutting of hair). Each step must be performed with specific intentions and supplications.

Step-by-Step Guide:
1. Ihram: Entering the state of sanctity at the Miqat. Men wear two unstitched white cloths; women wear modest clothing. Perform two Rak’ahs and make the Niyyah (intention).
2. Tawaf: Circumbulating the Kaaba seven times counter-clockwise, starting from the Black Stone (Hajar al-Aswad).
3. Sa'i: Walking seven times between the hills of Safa and Marwah, commemorating Hajar’s search for water.
4. Halq/Taqsir: Shaving the head (Halq) or cutting a portion of hair (Taqsir) to symbolise the completion of the pilgrimage.`,
    category: 'Hajj & Umrah', 
    date: 'Oct 25, 2023',
    views: '8.1k',
    mufti: 'Sheikh Ibrahim Zayed',
    muftiRole: 'Grand Mosque Lecturer',
    status: 'Verified',
    references: ['Sahih Muslim 1218', 'Fiqh as-Sunnah'],
    tags: ['Umrah', 'Hajj', 'Pilgrimage']
  },
  { 
    id: 4,
    question: 'Can zakat be given to non-Muslim relatives?', 
    answer: 'Zakat is specifically for Muslims in need (the eight categories mentioned in Quran 9:60). However, Sadaqah (voluntary charity) can and should be given to non-Muslim relatives as an act of kindness and family bond.', 
    detailedAnswer: `Zakat is specifically for Muslims in need (the eight categories mentioned in Quran 9:60). However, Sadaqah (voluntary charity) can and should be given to non-Muslim relatives as an act of kindness and family bond.

Key Legal Points:
1. Purpose of Zakat: It is an obligatory purification of wealth for the Muslim community to support its own members in need.
2. Eight Categories: Quran 9:60 explicitly lists the recipients, which generally refers to the Muslim poor, needy, and others.
3. Sadaqah vs Zakat: While Zakat has strict rules, General Charity (Sadaqah) is encouraged for all of humanity, especially relatives, regardless of faith.
4. Da'wah through Kindness: Treating non-Muslim relatives with financial kindness is a praised act in Islam and serves as a beautiful representation of the faith.`,
    category: 'Zakat', 
    date: 'Nov 1, 2023',
    views: '3.2k',
    mufti: 'Prof. Fatima Mahmoud',
    muftiRole: 'Shariah Law Professor',
    status: 'Verified',
    references: ['Quran 9:60', 'Al-Mughni by Ibn Qudamah'],
    tags: ['Zakat', 'Charity', 'Family']
  },
];

const FatwaDetailPage = ({ params }) => {
  const { id } = React.use(params);
  const fatwa = fatwas.find(f => f.id === parseInt(id));

  if (!fatwa) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
            <h1 className="text-4xl font-black text-[#222222]">Ruling Not Found</h1>
            <Link href="/fatwa" className="text-[#E14D4D] font-bold mt-4 block">Back to List</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Header */}
      <section className="bg-[#222222] text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/fatwa" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-[#E14D4D] mb-16 hover:gap-6 transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to Archive
          </Link>
          
          <div className="max-w-4xl">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              className="h-2 bg-[#E14D4D] mb-12 rounded-full"
            ></motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight"
            >
              {fatwa.question}
            </motion.h1>
            
            <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#E14D4D] flex items-center justify-center text-white font-black">
                        {fatwa.mufti[0]}
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white">{fatwa.mufti}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{fatwa.muftiRole}</p>
                    </div>
                </div>
                <div className="h-10 w-px bg-white/10 hidden md:block"></div>
                <div className="flex items-center gap-3 text-slate-400">
                    <Clock className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Published {fatwa.date}</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-full">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{fatwa.status} Ruling</span>
                </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[30rem] font-black text-white/5 opacity-[0.02] pointer-events-none select-none">
            FATWA
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-20">
            {/* Main Content Area */}
            <div className="lg:w-2/3">
                <div className="prose prose-xl prose-slate max-w-none">
                    <p className="text-2xl font-bold text-[#222222] mb-10 leading-relaxed italic border-l-8 border-[#E14D4D] pl-8">
                        "{fatwa.answer}"
                    </p>
                    
                    <div className="space-y-10 mt-16">
                        <h2 className="text-2xl font-black text-[#222222] uppercase tracking-tighter flex items-center gap-4">
                            Detailed Explanation <div className="h-px flex-grow bg-slate-100"></div>
                        </h2>
                        <div className="text-lg text-slate-600 leading-relaxed font-medium whitespace-pre-line">
                            {fatwa.detailedAnswer}
                        </div>
                    </div>

                    <div className="mt-20 p-12 bg-slate-50 rounded-[3rem] border-2 border-slate-100">
                        <h4 className="text-xs font-black text-[#222222] uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                            <BookOpen className="w-5 h-5 text-[#E14D4D]" /> Primary References
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {fatwa.references.map((ref, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-500 text-sm font-bold uppercase tracking-wider">
                                    <div className="w-2 h-2 rounded-full bg-[#E14D4D]"></div> {ref}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sidebar Tools */}
            <aside className="lg:w-1/3 space-y-12">
                <div className="bg-[#222222] rounded-[3rem] p-10 text-white">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-[#E14D4D]">Quick Actions</h3>
                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-between px-8 py-6 bg-white/5 hover:bg-[#E14D4D] rounded-2xl transition-all group">
                            <span className="text-[10px] font-black uppercase tracking-widest">Share this Ruling</span>
                            <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </button>
                        <button className="w-full flex items-center justify-between px-8 py-6 bg-white/5 hover:bg-[#E14D4D] rounded-2xl transition-all group">
                            <span className="text-[10px] font-black uppercase tracking-widest">Request Clarification</span>
                            <MessageSquare className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        </button>
                        <button className="w-full flex items-center justify-between px-8 py-6 bg-white/5 hover:bg-white hover:text-[#222222] rounded-2xl transition-all group">
                            <span className="text-[10px] font-black uppercase tracking-widest">Download PDF</span>
                            <Info className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="p-10 border-2 border-slate-50 rounded-[3rem]">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-slate-400">Relevant Tags</h3>
                    <div className="flex flex-wrap gap-3">
                        {fatwa.tags.map(tag => (
                            <span key={tag} className="px-6 py-3 bg-slate-50 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 border border-slate-100">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="relative group overflow-hidden bg-emerald-50 p-10 rounded-[3rem] border-2 border-emerald-100">
                    <div className="relative z-10 text-emerald-900">
                        <Scale className="w-12 h-12 mb-6" />
                        <h4 className="text-xl font-black uppercase tracking-tighter">Verified by the Scholarly Board</h4>
                        <p className="mt-4 text-emerald-700 font-medium text-sm leading-relaxed">
                            This ruling has undergone double-blind peer review by our panel of independent Muftis to ensure strict adherence to Shariah standards.
                        </p>
                        <div className="mt-8 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Authenticity Guaranteed</span>
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 text-8xl font-black text-emerald-100 pointer-events-none select-none">ثقة</div>
                </div>
            </aside>
        </div>
      </section>
    </div>
  );
};

export default FatwaDetailPage;
