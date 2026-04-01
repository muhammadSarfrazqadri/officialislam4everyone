import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Dynamic Hero Section */}
      <section className="bg-[#222222] border-b-8 border-[#E14D4D] py-32 w-full relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-24 text-[15rem] font-black text-white/5 leading-none group-hover:text-[#E14D4D]/5 transition-colors duration-1000 uppercase tracking-tighter pointer-events-none">Mission</div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-4 scale-y-110">
            About <span className="text-[#E14D4D]">Us</span>
          </h1>
          <p className="text-xl md:text-2xl font-black uppercase text-slate-400 tracking-[0.5em] mb-12 max-w-3xl mx-auto leading-relaxed">Dedicated to sharing authentic Islamic knowledge with everyone.</p>
          <div className="w-24 h-1.5 bg-[#E14D4D] mx-auto opacity-80 shadow-[0_0_30px_rgba(225,77,77,0.8)]"></div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="container mx-auto px-6 py-32 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#222222] uppercase tracking-tighter leading-none border-l-[12px] border-[#E14D4D] pl-8 mb-6">Our Vision</h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                <span className="text-[#222222] font-black italic">ISLAM<span className="text-[#E14D4D]">4</span>EVERYONE</span> was born out of a desire to provide a digital sanctuary for authentic Islamic wisdom in an increasingly complex world.
              </p>
            </div>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              We aim to break down barriers to knowledge by providing free, accessible, and high-quality resources for students of knowledge, new Muslims, and anyone seeking the truth about Islam.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-[#E14D4D] transition-all group">
                <h4 className="text-3xl font-black text-[#222222] mb-2 group-hover:text-[#E14D4D]">100%</h4>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Authentic Content</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-[#E14D4D] transition-all group">
                <h4 className="text-3xl font-black text-[#222222] mb-2 group-hover:text-[#E14D4D]">Verified</h4>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">By Scholars</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-[4rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 border-8 border-white shadow-2xl relative z-10 flex items-center justify-center p-20">
               <div className="text-[12rem] text-[#E14D4D]/10 font-black italic select-none">I4E</div>
            </div>
            <div className="absolute -inset-4 bg-[#E14D4D]/5 rounded-[4rem] blur-2xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-32 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center mb-24 text-center">
            <h3 className="text-4xl md:text-5xl font-black text-[#222222] uppercase tracking-tighter mb-4 underline decoration-[#E14D4D] decoration-8 underline-offset-8">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Taqwa', desc: 'Consciousness of Allah in every piece of content we produce.', icon: '🌙' },
              { title: 'Ikhlas', desc: 'Sincerity in our mission to serve the global Ummah.', icon: '💎' },
              { title: 'Ihsan', desc: 'Excellence in the quality of education and technology.', icon: '✨' }
            ].map((value, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl hover:-translate-y-4 transition-all duration-500 border border-slate-100 group">
                <div className="text-6xl mb-8 group-hover:scale-125 transition-transform duration-500 inline-block">{value.icon}</div>
                <h4 className="text-3xl font-black text-[#222222] mb-4 uppercase tracking-tighter group-hover:text-[#E14D4D] transition-colors">{value.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
