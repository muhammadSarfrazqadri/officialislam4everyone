import React from 'react';

const FeaturesPage = () => {
  const features = [
    { title: 'Interactive Quran', description: 'Advanced search, audio recitation, and multi-language translations.' },
    { title: 'Authentic Hadith', description: 'Verified collections with complete chains of narration and commentary.' },
    { title: 'Digital Library', description: 'Thousands of Islamic books available for online reading and download.' },
    { title: 'Scholar-led Fatwas', description: 'Ask questions and get answers from qualified Islamic scholars.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted/30 border-b border-border py-32 text-center md:text-left">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-16 md:items-center">
          <div className="grow flex flex-col gap-10">
             <div className="w-24 h-px bg-primary opacity-40"></div>
             <h1 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-[0.9] flex flex-col gap-4">
                <span>Tailored</span>
                <span className="text-primary italic underline decoration-border underline-offset-8">Experiences</span>
             </h1>
             <p className="text-xl text-muted-foreground font-medium max-w-xl">
                Discover the tools and services we provide to enhance your Islamic learning experience.
             </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-32 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           {features.map((feature, i) => (
             <div key={i} className="group relative">
                <div className="bg-card border border-border hover:border-primary p-12 aspect-square flex flex-col items-center justify-center gap-10 hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-4 shadow-sm hover:shadow-primary/10">
                   <div className="text-4xl font-black text-foreground group-hover:text-primary transition-colors duration-500">✨</div>
                   <div className="flex flex-col items-center gap-2 grow">
                      <h4 className="text-2xl font-black text-foreground uppercase tracking-widest text-center">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest text-center leading-relaxed italic">{feature.description}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
