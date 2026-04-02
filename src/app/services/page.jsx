import React from 'react';
import { 
  Users, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Clock,
  Globe,
  Mail,
  LinkIcon
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    { title: 'Quran Tutoring', desc: 'Online classes for children and adults with certified Tajweed instructors.', icon: '🎓' },
    { title: 'Hadith Research', desc: 'Detailed analysis and authentication consultation for researchers.', icon: '📜' },
    { title: 'Fatwa Inquiries', desc: 'Direct access to qualified scholars for personal religious guidance.', icon: '⚖️' },
    { title: 'Arabic Language', desc: 'Specialized courses designed to help you understand the language of the Quran.', icon: '📖' },
    { title: 'Community Support', desc: 'A dedicated space for new Muslims to find support and resources.', icon: '🤝' },
    { title: 'Library Access', desc: 'Unlimited digital access to high-resolution Islamic manuscripts and books.', icon: '🏛️' }
  ];

  const team = [
    {
      name: "Sheikh Abdullah Mansoor",
      role: "Director of Education",
      bio: "Leading our curriculum development with 15 years of academic excellence.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=800&auto=format"
    },
    {
      name: "Dr. Sarah Ahmed",
      role: "Head Researcher",
      bio: "Specializing in contemporary Islamic studies and ethical finance.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format"
    },
    {
      name: "Omar Al-Faruq",
      role: "Student Success Manager",
      bio: "Ensuring every student has the tools they need to master their journey.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format"
    },
    {
      name: "Hafiz Ibrahim Ali",
      role: "Lead Qari",
      bio: "Certified in multiple Qira'at styles with focus on vocal training.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* High-Contrast Professional Header */}
      <section className="bg-slate-50 border-b-8 border-[var(--primary)] py-40 w-full relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-24 text-[18rem] font-black text-[var(--secondary)]/5 leading-none group-hover:text-[var(--primary)]/5 transition-colors duration-1000 uppercase tracking-tighter pointer-events-none">Services</div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black text-[var(--secondary)] uppercase tracking-tighter mb-4 scale-y-110">
            Our <span className="text-[var(--primary)]">Services</span>
          </h1>
          <p className="text-2xl font-black uppercase text-slate-400 tracking-[0.5em] mb-12">Professional Islamic Guidance</p>
          <div className="w-16 h-1 bg-[var(--primary)] mx-auto opacity-50 shadow-[0_0_20px_rgba(225,77,77,0.5)]"></div>
        </div>
      </section>

      {/* Services Grid Content */}
      <section className="container mx-auto px-6 py-40 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {services.map((service, i) => (
             <div key={i} className="group relative">
                <div className="bg-background border-[0.5px] border-border p-16 aspect-square flex flex-col items-center justify-center gap-12 group-hover:shadow-2xl transition-all duration-700 hover:border-[var(--primary)] hover:-translate-y-4 rounded-[4rem] group-hover:bg-slate-50/50">
                   <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-500 scale-125 transform">{service.icon}</div>
                   <div className="flex flex-col items-center gap-4 grow">
                      <h4 className="text-2xl md:text-3xl font-black text-[var(--secondary)] uppercase tracking-widest text-center leading-none group-hover:text-[var(--primary)] transition-colors">{service.title}</h4>
                      <p className="text-sm md:text-base text-slate-400 font-bold uppercase tracking-widest text-center leading-relaxed italic group-hover:text-slate-600 transition-colors">{service.desc}</p>
                   </div>
                   <div className="absolute bottom-10 opacity-30 group-hover:opacity-100 group-hover:bottom-12 transition-all">
                      <span className="text-xs font-black uppercase tracking-[1em] text-[var(--primary)]">&rarr; Learn More</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-slate-900 py-40 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)] mb-6 block">The Backbone of Excellence</span>
              <h2 className="text-6xl md:text-8xl font-black text-foreground uppercase tracking-tighter leading-none italic">
                Our <span className="text-foreground/20">Core Team</span>
              </h2>
            </div>
            <p className="text-slate-400 text-lg font-medium max-w-md italic border-l border-[var(--primary)] pl-8">
              A diverse collective of scholars, educators, and technology experts dedicated to Islamic literacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group bg-card/5 border border-white/10 rounded-[3rem] p-8 hover:bg-background/10 transition-all duration-500">
                <div className="relative mb-8 aspect-[4/5] rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-6 left-6 right-6 flex justify-around">
                      <button className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-md flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                        <LinkIcon className="w-4 h-4 text-foreground" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-md flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                        <Mail className="w-4 h-4 text-foreground" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-md flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                        <ExternalLink className="w-4 h-4 text-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-foreground uppercase tracking-tight mb-2">{member.name}</h3>
                <p className="text-[var(--primary)] text-[10px] font-black uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm font-medium italic line-clamp-3">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-black text-foreground/[0.02] pointer-events-none select-none italic uppercase">
          Elite
        </div>
      </section>

      {/* Why Choose Us / Trust Metrics */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl rotate-3 group hover:rotate-6 transition-transform border border-[var(--primary)]/10">
                <ShieldCheck className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <h4 className="text-3xl font-black uppercase tracking-tighter">Verified Authenticity</h4>
              <p className="text-slate-500 font-medium leading-relaxed italic">All our courses and content are vetted by a global board of recognized Islamic authorities and educational specialists.</p>
            </div>
            
            <div className="space-y-8">
              <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl -rotate-3 group hover:-rotate-6 transition-transform border border-[var(--primary)]/10">
                <Zap className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <h4 className="text-3xl font-black uppercase tracking-tighter">Proprietary LMS</h4>
              <p className="text-slate-500 font-medium leading-relaxed italic">Learn through our custom-built digital environment designed specifically for the unique requirements of Islamic pedagogy.</p>
            </div>

            <div className="space-y-8">
              <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl rotate-3 group hover:rotate-6 transition-transform border border-[var(--primary)]/10">
                <Clock className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <h4 className="text-3xl font-black uppercase tracking-tighter">Lifetime Support</h4>
              <p className="text-slate-500 font-medium leading-relaxed italic">Your learning doesn't end with a certificate. Join our global alumni network for perpetual access to mentors and resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--secondary)] py-40 text-center text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--primary)]/5 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[var(--primary)] mb-12">Take the first step</span>
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 max-w-4xl leading-[0.9] italic">
            Ready to <span className="text-[var(--primary)]">Transform</span> your understanding?
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <button className="px-12 py-6 bg-[var(--primary)] text-foreground text-[11px] font-black uppercase tracking-[0.5em] hover:bg-background hover:text-[var(--primary)] transition-all shadow-2xl hover:scale-105 duration-300 rounded-full">
                 Initialize Registration
            </button>
            <button className="px-12 py-6 border border-white/10 text-foreground text-[11px] font-black uppercase tracking-[0.5em] hover:bg-background hover:text-black transition-all rounded-full flex items-center gap-4 group">
                 Watch Orientation <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
