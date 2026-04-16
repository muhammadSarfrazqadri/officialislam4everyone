'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from '../../../components/AnimatedButtons';
import { 
  ChevronLeft, ChevronRight, BookOpen, GraduationCap, 
  ShieldCheck, Globe2, Users, Clock, PlayCircle, Star,
  MessageSquare, Headphones, Calendar, Award, Heart, HelpCircle
} from 'lucide-react';

const translations = {
  en: {
    fontClass: "font-sans", dir: "ltr",
    sections: {
      hero: { t: "Islam4Everyone <span class='text-accent'>Academy</span>", s: "Master the Quran & Sunnah with certified scholars from the comfort of your home." },
      stats: { s1: "5k+ Students", s2: "40+ Scholars", s3: "25+ Courses", s4: "15+ Countries" },
      features: "Why Choose Us",
      courses: "Specialized Programs",
      journey: "How It Works",
      faculty: "Our Expert <span class='text-accent'>Scholars</span>",
      curriculum: "Advanced Learning Tools",
      pricing: "Investment in Knowledge",
      testimonials: "Student Voices",
      faq: "General Inquiries",
      cta: "Embark on Your Spiritual Journey",
      contact: "Speak with our Admission Team"
    },
    btn: { enroll: "Enroll Now", apply: "Apply Now", trial: "Free Trial", chat: "WhatsApp" },
    courseList: [
      "Hifz & Nazra Quran", "Faizan-e-Shariat", "Arabic Language", "Faizan-e-Hadith", "Faizan-e-Tafseer",
      "Dars-e-Nizami", "Specialization in Fiqh", "Islamic Economics", "Hadith Specialization", "Fard Uloom"
    ]
  },
  ur: {
    fontClass: "font-urdu", dir: "rtl",
    sections: {
      hero: { t: "اسلام فار ایوری ون <span class='text-accent'>اکیڈمی</span>", s: "اپنے گھر بیٹھے مستند اساتذہ کے ساتھ قرآن و سنت کی تعلیم حاصل کریں۔" },
      stats: { s1: "5000+ طلباء", s2: "40+ علماء", s3: "25+ کورسز", s4: "15+ ممالک" },
      features: "ہماری اکیڈمی کیوں؟",
      courses: "ہمارے خصوصی کورسز",
      journey: "تعلیمی طریقہ کار",
      faculty: "ہمارے جید <span class='text-accent'>اساتذہ</span>",
      curriculum: "جدید تعلیمی سہولیات",
      pricing: "تعلیمی اخراجات",
      testimonials: "طلباء کے تاثرات",
      faq: "عام سوالات",
      cta: "علمِ دین کا سفر آج ہی شروع کریں",
      contact: "ایڈمشن ٹیم سے رابطہ کریں"
    },
    btn: { enroll: "داخلہ لیں", apply: "ابھی اپلائی کریں", trial: "ٹرائل کلاس", chat: "واٹس ایپ" },
    courseList: [
      "حفظ و ناظرہ قرآن پاک", "فیضان شریعت کورس", "عربی لینگویج کورس", "فیضان حدیث کورس", "فیضان تفسیر کورس",
      "درس نظامی", "تخصص فی الفقہ الحنفی", "تخصص فی الاقتصادیات", "تخصص فی الحدیث", "فیضان شریعت (فرض علوم)"
    ]
  }
};

export default function AcademyPage() {
  const [lang, setLang] = useState('ur');
  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-[#FBFAF9] text-[#061F1A] selection:bg-accent selection:text-white ${t.fontClass}`} dir={t.dir}>
      
      {/* 1. HERO SECTION - High Impact */}
      <section className="bg-[#020D0C] pt-40 pb-32 px-4 relative overflow-hidden border-b border-accent/20">
        <div className="absolute inset-0 islamic-pattern opacity-[0.03] scale-150" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center gap-2 mb-12">
             {['en', 'ur'].map(l => (
               <button key={l} onClick={() => setLang(l)} className={`px-6 py-2 rounded-full border transition-all text-xs font-bold tracking-widest ${lang === l ? 'bg-accent text-white border-accent shadow-islamic-glow' : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'}`}>{l.toUpperCase()}</button>
             ))}
          </motion.div>
          <motion.h1 key={lang+'h'} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-5xl md:text-8xl text-white mb-8 font-serif leading-tight" dangerouslySetInnerHTML={{ __html: t.sections.hero.t }} />
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-xl mb-14 font-light leading-relaxed">{t.sections.hero.s}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <AnimatedButton variant="gold" className="px-14 h-16 text-lg shadow-xl">{t.btn.apply}</AnimatedButton>
            <AnimatedButton variant="outline" className="px-12 h-16 text-white border-white/20 backdrop-blur-sm">{t.btn.trial}</AnimatedButton>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR - Floating Glass Design */}
      <section className="relative z-20 -mt-10 px-4">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-[3rem] py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden">
           {[t.sections.stats.s1, t.sections.stats.s2, t.sections.stats.s3, t.sections.stats.s4].map((s, i) => (
             <div key={i} className="text-center border-r last:border-0 border-emerald-100/50">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1 tracking-tighter">{s.split(' ')[0]}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-accent">{s.split(' ')[1]}</div>
             </div>
           ))}
        </div>
      </section>

      {/* 3. CORE FEATURES - Modern Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-4">{t.sections.features}</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {[ 
             {i: ShieldCheck, t: lang === 'ur' ? "مستند اساتذہ" : "Authentic Scholars", d: "Graduates from Al-Azhar & Madinah University."}, 
             {i: Users, t: lang === 'ur' ? "انفرادی توجہ" : "1-on-1 Classes", d: "Personalized attention for every single student."}, 
             {i: Globe2, t: lang === 'ur' ? "عالمی معیار" : "Global Standards", d: "Joining students from over 15 countries worldwide."} 
           ].map((f, i) => (
             <motion.div key={i} whileHover={{ y: -10 }} className="p-12 bg-white rounded-[3rem] border border-emerald-50 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative group overflow-hidden">
                <div className="absolute -right-8 -bottom-8 text-emerald-50/50 group-hover:scale-110 transition-transform">
                   <f.i size={120} strokeWidth={1} />
                </div>
                <f.i className="text-accent mb-8" size={56} />
                <h3 className="text-2xl font-bold mb-4">{f.t}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{f.d}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 4. COURSE GRID - Elegant Cards */}
      <section className="bg-[#04211D] py-32 border-y border-white/5 px-4 relative">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl text-center mb-20 text-white font-serif">{t.sections.courses}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {t.courseList.map((course, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.08] transition-all group backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                            <GraduationCap size={24} />
                        </div>
                        <Star className="text-accent/20 group-hover:text-accent transition-colors" size={20} fill="currentColor" />
                    </div>
                    <h3 className="text-2xl text-white font-bold mb-8 h-16 line-clamp-2 leading-snug">{course}</h3>
                    <AnimatedButton variant="gold" className="w-full h-12 rounded-2xl">{t.btn.enroll}</AnimatedButton>
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* 5. THE JOURNEY - Visual Flow */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl text-center mb-20 font-serif text-primary">{t.sections.journey}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {[1,2,3].map(step => (
             <div key={step} className="relative group text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-12">
                    <span className="text-4xl font-black">{step}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4">{lang === 'ur' ? 'مرحلہ' : 'Step'} 0{step}</h4>
                <p className="text-muted-foreground">Detailed explanation of how this step helps your learning progress.</p>
             </div>
           ))}
        </div>
      </section>

      {/* 6. FACULTY SECTION - Dark Prestige */}
      <section className="bg-[#020D0C] py-32 px-4 text-white relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
           <div className="md:w-1/2">
              <h2 className="text-5xl md:text-7xl mb-8 leading-tight font-serif" dangerouslySetInnerHTML={{__html: t.sections.faculty}} />
              <p className="text-emerald-100/40 mb-12 text-xl italic font-light">"The excellence of knowledge is better than the excellence of worship."</p>
              <AnimatedButton variant="gold" className="px-14 h-16">{t.btn.apply}</AnimatedButton>
           </div>
           <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] bg-white/5 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden relative group">
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 font-bold text-accent">Teacher Name</div>
              </div>
              <div className="aspect-[4/5] bg-white/5 rounded-[3rem] border border-white/10 shadow-2xl mt-12 overflow-hidden relative group">
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 font-bold text-accent">Teacher Name</div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. CURRICULUM HIGHLIGHTS - Icon Strip */}
      <section className="py-24 px-4">
         <div className="max-w-7xl mx-auto bg-white rounded-[4rem] p-16 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-emerald-50 flex flex-wrap gap-12 justify-between items-center">
            {[ 
                {i: Headphones, t: "Audio Support"}, {i: Calendar, t: "Flexible Slots"}, 
                {i: Award, t: "Certifications"}, {i: Heart, t: "Character Building"} 
            ].map((f, i) => (
               <div key={i} className="flex flex-col items-center gap-4 text-center">
                  <f.i className="text-accent" size={48} />
                  <span className="font-bold text-lg uppercase tracking-wider">{f.t}</span>
               </div>
            ))}
         </div>
      </section>

      {/* 8. PRICING SECTION - Focus Design */}
      <section className="py-32 bg-secondary/20">
         <h2 className="text-4xl md:text-6xl text-center mb-24 font-serif text-primary">{t.sections.pricing}</h2>
         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-4 items-center">
            {[1,2,3].map(p => (
              <div key={p} className={`p-12 rounded-[4rem] border transition-all duration-500 ${p===2 ? 'bg-primary text-white scale-110 shadow-emerald-glow border-primary z-10' : 'bg-white border-emerald-50 shadow-xl'}`}>
                 <div className="text-center mb-10">
                    <div className={`text-xs uppercase tracking-[0.3em] font-black mb-4 ${p===2 ? 'text-accent' : 'text-muted-foreground'}`}>Standard Program</div>
                    <div className="text-6xl font-black mb-2">$30<span className="text-lg opacity-60">/mo</span></div>
                 </div>
                 <ul className="space-y-4 mb-12 opacity-80 text-sm">
                    <li>• 12 Classes Per Month</li>
                    <li>• One-on-One Session</li>
                    <li>• Monthly Assessment</li>
                 </ul>
                 <AnimatedButton variant={p===2 ? "gold" : "primary"} className="w-full h-14 rounded-2xl">{t.btn.enroll}</AnimatedButton>
              </div>
            ))}
         </div>
      </section>

      {/* 9. TESTIMONIALS - Infinite Glass Slider */}
      <section className="py-32 overflow-hidden bg-[#020D0C] relative">
         <div className="absolute inset-0 islamic-pattern opacity-[0.02]" />
         <h2 className="text-4xl md:text-6xl text-center mb-20 text-white font-serif">{t.sections.testimonials}</h2>
         <div className="flex">
            <motion.div animate={{ x: [-2000, 0] }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="flex gap-10">
               {[1,2,3,4,5,6,7,8].map(i => (
                 <div key={i} className="min-w-[450px] p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md relative">
                    <Star className="text-accent mb-6" fill="currentColor" size={24} />
                    <p className="text-xl text-emerald-50/80 mb-8 italic">"Teaching quality is beyond my expectations. My kids are now reciting Quran with Tajweed."</p>
                    <div className="font-bold text-accent">— Parent, United States</div>
                 </div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* 10. FAQ SECTION - Clean Minimal */}
      <section className="py-32 max-w-4xl mx-auto px-4">
         <h2 className="text-4xl md:text-6xl text-center mb-20 font-serif text-primary">{t.sections.faq}</h2>
         <div className="space-y-6">
            {[1,2,3,4].map(i => (
              <details key={i} className="group p-8 bg-white border border-emerald-50 rounded-[2.5rem] cursor-pointer shadow-sm hover:shadow-lg transition-all">
                 <summary className="font-bold text-xl list-none flex justify-between items-center text-primary">
                    How long is the course duration? 
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent group-open:rotate-180 transition-transform">
                        <ChevronRight size={20} />
                    </div>
                 </summary>
                 <p className="mt-8 text-muted-foreground leading-relaxed pt-8 border-t border-emerald-50/50">It varies from student to student, but typically the Noorani Qaida takes 3-6 months based on the student's learning speed.</p>
              </details>
            ))}
         </div>
      </section>

      {/* 11. FINAL CTA - Massive Visual Wrap */}
      <section className="py-32 px-4">
         <div className="max-w-7xl mx-auto bg-primary rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-emerald-glow">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -mr-40 -mt-40" />
            <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl text-white mb-12 font-serif">{t.sections.cta}</h2>
                <AnimatedButton variant="gold" className="px-20 h-20 text-xl shadow-2xl">{t.btn.apply}</AnimatedButton>
            </div>
         </div>
      </section>

      {/* 12. CONTACT / WHATSAPP FLOAT */}
      <section className="py-32 text-center bg-secondary/30">
         <h3 className="text-3xl font-serif text-primary mb-10">{t.sections.contact}</h3>
         <div className="flex justify-center gap-6">
            <AnimatedButton variant="outline" className="flex items-center gap-4 px-12 h-16 rounded-full border-primary/20 bg-white shadow-xl group">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <MessageSquare size={20} /> 
                </div>
                <span className="font-bold">{t.btn.chat}</span>
            </AnimatedButton>
         </div>
      </section>

    </div>
  );
}