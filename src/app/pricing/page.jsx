import React from 'react';

const PricingPage = () => {
  const plans = [
    { title: 'Free', price: '$0', features: ['Basic Access', 'Community Forum', 'Weekly Newsletter'] },
    { title: 'Pro', price: '$19', features: ['Advanced Courses', 'Priority Support', 'Ad-Free Experience', 'Exclusive Content'] },
    { title: 'Premium', price: '$49', features: ['All-Access Pass', '1-on-1 Mentoring', 'Certification Support', 'Lifetime Access'] },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      <section className="bg-background border-b-8 border-[var(--primary)] py-40 w-full relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-24 text-[20rem] font-black text-slate-50/50 leading-none group-hover:text-[var(--primary)]/5 transition-colors duration-1000 uppercase tracking-tighter">Value</div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black text-[var(--secondary)] uppercase tracking-tighter mb-4 scale-y-110">
            Our <span className="text-[var(--primary)]">Pricing</span>
          </h1>
          <p className="text-2xl font-black uppercase text-slate-400 tracking-[0.5em] mb-12">Flexible plans for everyone</p>
          <div className="w-16 h-1 bg-[var(--primary)] mx-auto opacity-50 shadow-[0_0_20px_rgba(225,77,77,0.5)]"></div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-40 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {plans.map((plan, i) => (
             <div key={i} className="group relative">
                <div className={`bg-background border-[0.5px] border-border p-12 aspect-square flex flex-col items-center justify-center gap-10 hover:shadow-2xl transition-all duration-700 bg-grid-slate-200/20 group-hover:-translate-y-4 ${plan.title === 'Pro' ? 'bg-slate-100/50 shadow-2xl scale-105' : ''}`}>
                   <div className="flex flex-col items-center gap-2">
                      <h4 className="text-4xl font-black text-[var(--secondary)] uppercase tracking-widest">{plan.title}</h4>
                      <p className="text-2xl font-black text-[var(--primary)] tracking-widest leading-none mt-2">{plan.price}</p>
                   </div>
                   <div className="flex flex-col items-center gap-4 grow">
                      {plan.features.map((feature, j) => (
                        <p key={j} className="text-sm text-slate-400 font-bold uppercase tracking-widest text-center leading-relaxed italic">{feature}</p>
                      ))}
                   </div>
                   <div className="absolute top-4 right-6 text-[10px] font-black text-slate-200 uppercase tracking-widest group-hover:text-[var(--primary)] transition-colors">{plan.title === 'Pro' ? 'BEST VALUE' : ''}</div>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
