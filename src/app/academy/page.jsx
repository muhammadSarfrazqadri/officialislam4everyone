'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from '../../../components/AnimatedButtons';
import { 
  ChevronLeft, ChevronRight, BookOpen, GraduationCap, 
  ShieldCheck, Globe2, Users, Clock, PlayCircle, Star,
  CheckCircle2, MessageSquare, Headphones, Calendar,
  Award, Heart, HelpCircle, ArrowRight
} from 'lucide-react';

const translations = {
  en: {
    fontClass: "font-sans", dir: "ltr",
    sections: {
      hero: { t: "Islam4Everyone <span class='text-accent'>Academy</span>", s: "Master the Quran & Sunnah with certified scholars from the comfort of your home." },
      stats: { s1: "5k+ Students", s2: "40+ Scholars", s3: "25+ Courses", s4: "15+ Countries" },
      features: "Why Choose Us",
      courses: "Our Specialized Courses",
      journey: "How It Works",
      faculty: "Meet Our Senior Scholars",
      curriculum: "Learning Environment",
      pricing: "Simple Monthly Fees",
      testimonials: "Student Success Stories",
      faq: "Common Questions",
      cta: "Your Path to Sacred Knowledge Starts Here",
      contact: "Need Assistance?"
    },
    btn: { enroll: "Enroll Now", apply: "Apply Now", trial: "Free Trial", chat: "Chat via WhatsApp" }
  },
  ur: {
    fontClass: "font-urdu", dir: "rtl",
    sections: {
      hero: { t: "اسلام فار ایوری ون <span class='text-accent'>اکیڈمی</span>", s: "اپنے گھر بیٹھے مستند اساتذہ کے ساتھ قرآن و سنت کی تعلیم حاصل کریں۔" },
      stats: { s1: "5000+ طلباء", s2: "40+ علماء", s3: "25+ کورسز", s4: "15+ ممالک" },
      features: "ہماری اکیڈمی کی خصوصیات",
      courses: "ہمارے خصوصی کورسز",
      journey: "داخلہ اور پڑھائی کا طریقہ",
      faculty: "ہمارے جید اساتذہ",
      curriculum: "تعلیمی ماحول",
      pricing: "ماہانہ تعلیمی فیس",
      testimonials: "طلباء کے تاثرات",
      faq: "عام سوالات",
      cta: "علمِ دین کا سفر آج ہی شروع کریں",
      contact: "کیا آپ کو مدد کی ضرورت ہے؟"
    },
    btn: { enroll: "داخلہ لیں", apply: "ابھی اپلائی کریں", trial: "ٹرائل کلاس", chat: "واٹس ایپ رابطہ" }
  }
};

export default function AcademyPage() {
  const [lang, setLang] = useState('ur');
  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-[#FBFAF9] text-[#061F1A] ${t.fontClass}`} dir={t.dir}>
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#020D0C] pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-4 mb-10">
             {['en', 'ur'].map(l => (
               <button key={l} onClick={() => setLang(l)} className={`w-14 h-14 rounded-full border transition-all font-bold ${lang === l ? 'bg-accent text-white border-accent shadow-islamic-glow' : 'bg-white/5 text-gray-400 border-white/10'}`}>{l.toUpperCase()}</button>
             ))}
          </div>
          <motion.h1 key={lang+'h'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl md:text-8xl text-white mb-8" dangerouslySetInnerHTML={{ __html: t.sections.hero.t }} />
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-xl mb-12">{t.sections.hero.s}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton variant="gold" className="px-12 h-16 text-lg">{t.btn.apply}</AnimatedButton>
            <AnimatedButton variant="outline" className="px-10 h-16 text-white border-white/20">{t.btn.trial}</AnimatedButton>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-accent py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
           {[t.sections.stats.s1, t.sections.stats.s2, t.sections.stats.s3, t.sections.stats.s4].map((s, i) => (
             <div key={i} className="text-center text-[#020D0C] font-black text-xl md:text-2xl">{s}</div>
           ))}
        </div>
      </section>

      {/* 3. CORE FEATURES */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl text-center mb-16 text-primary">{t.sections.features}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[ {i: ShieldCheck, t: "Authentic Silsila"}, {i: Users, t: "1-on-1 Sessions"}, {i: Globe2, t: "24/7 Schedule"} ].map((f, i) => (
             <div key={i} className="p-10 bg-white border border-emerald-50 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
                <f.i className="text-accent mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4">{f.t}</h3>
                <p className="text-muted-foreground">Certified teaching methods focused on correct Tajweed and profound understanding.</p>
             </div>
           ))}
        </div>
      </section>

      {/* 4. COURSE GRID (10 Courses) */}
      <section className="bg-secondary/20 py-24 border-y border-emerald-100/50 px-4">
        <h2 className="text-4xl md:text-6xl text-center mb-16 text-primary">{t.sections.courses}</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* Map the 10 courses here similarly to previous code */}
           <div className="bg-white p-8 rounded-[2rem] border border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Hifz-ul-Quran</h3>
              <AnimatedButton variant="primary" className="w-full">{t.btn.enroll}</AnimatedButton>
           </div>
        </div>
      </section>

      {/* 5. THE JOURNEY (Steps) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-center mb-16">{t.sections.journey}</h2>
        <div className="flex flex-col md:flex-row gap-8">
           {[1,2,3].map(step => (
             <div key={step} className="flex-1 p-8 bg-card rounded-3xl border-2 border-dashed border-accent/30 text-center">
                <div className="text-5xl font-black text-accent/20 mb-4">0{step}</div>
                <h4 className="text-xl font-bold">Step Title {step}</h4>
             </div>
           ))}
        </div>
      </section>

      {/* 6. FACULTY SECTION */}
      <section className="bg-[#020D0C] py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
           <div className="md:w-1/2">
              <h2 className="text-5xl mb-6 leading-tight" dangerouslySetInnerHTML={{__html: t.sections.faculty}} />
              <p className="text-emerald-100/50 mb-8 italic">"Teaching is not just a profession; it's a Prophetic legacy."</p>
              <AnimatedButton variant="gold">{t.btn.apply}</AnimatedButton>
           </div>
           <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-64 bg-accent/10 rounded-3xl border border-white/10" />
              <div className="h-64 bg-accent/10 rounded-3xl border border-white/10 mt-10" />
           </div>
        </div>
      </section>

      {/* 7. CURRICULUM HIGHLIGHTS */}
      <section className="py-24 max-w-7xl mx-auto px-4">
         <div className="bg-white rounded-[4rem] p-12 border border-emerald-50 shadow-2xl flex flex-wrap gap-10 justify-center">
            {[Headphones, Calendar, Award, Heart].map((Icon, i) => (
               <div key={i} className="flex items-center gap-4">
                  <Icon className="text-accent" size={40} />
                  <span className="font-bold text-lg">Feature {i+1}</span>
               </div>
            ))}
         </div>
      </section>

      {/* 8. PRICING SECTION */}
      <section className="py-24 bg-secondary/10">
         <h2 className="text-4xl text-center mb-16">{t.sections.pricing}</h2>
         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
            {[1,2,3].map(p => (
              <div key={p} className={`p-10 rounded-[3rem] border ${p===2 ? 'bg-primary text-white scale-110 shadow-emerald-glow' : 'bg-white'}`}>
                 <div className="text-center mb-6">
                    <div className="text-sm uppercase mb-2">Plan {p}</div>
                    <div className="text-4xl font-black">$30<span className="text-sm">/mo</span></div>
                 </div>
                 <AnimatedButton variant={p===2 ? "gold" : "primary"} className="w-full">Choose Plan</AnimatedButton>
              </div>
            ))}
         </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-4 overflow-hidden">
         <h2 className="text-4xl text-center mb-16">{t.sections.testimonials}</h2>
         <div className="flex gap-8">
            <motion.div animate={{ x: [-1000, 0] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="flex gap-8">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="min-w-[350px] p-8 bg-white border rounded-[2rem] shadow-sm italic">"Excellent platform for learning Quran."</div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 max-w-3xl mx-auto px-4">
         <h2 className="text-4xl text-center mb-16">{t.sections.faq}</h2>
         <div className="space-y-4">
            {[1,2,3,4].map(i => (
              <details key={i} className="p-6 bg-white border border-border rounded-2xl group cursor-pointer">
                 <summary className="font-bold list-none flex justify-between">Question {i} <HelpCircle className="text-accent"/></summary>
                 <p className="mt-4 text-muted-foreground">Answer for common question goes here.</p>
              </details>
            ))}
         </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-24 px-4">
         <div className="max-w-7xl mx-auto bg-primary rounded-[4rem] p-16 text-center relative">
            <h2 className="text-4xl md:text-6xl text-white mb-10">{t.sections.cta}</h2>
            <AnimatedButton variant="gold" className="px-16 h-16">{t.btn.apply}</AnimatedButton>
         </div>
      </section>

      {/* 12. CONTACT / WHATSAPP FLOAT */}
      <section className="py-20 text-center">
         <h3 className="text-2xl mb-6">{t.sections.contact}</h3>
         <AnimatedButton variant="outline" className="flex items-center gap-3 mx-auto px-10">
            <MessageSquare size={20} className="text-green-500" /> {t.btn.chat}
         </AnimatedButton>
      </section>

    </div>
  );
}