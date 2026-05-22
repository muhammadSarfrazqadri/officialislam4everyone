import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">

            {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 bg-clip-text text-transparent">
              The Holy Quran
            </h1>
            <p className="text-7xl arabic-title text-emerald-300 mb-6">القرآن الكريم</p>
            <p className="text-gray-300 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Explore the divine revelation of Allah with authentic Arabic text, translations, and detailed Tafseer explanations.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="bg-slate-50 border-b border-gray-100 py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl font-black text-[var(--secondary)] uppercase tracking-tighter mb-6">
            Privacy <span className="text-[var(--primary)]">Policy</span>
          </h1>
          <p className="text-slate-500 font-medium">Last Updated: March 30, 2026</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="prose prose-slate lg:prose-lg max-w-none">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-black text-[var(--secondary)] uppercase tracking-tight border-l-8 border-[var(--primary)] pl-6 mb-6">Introduction</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                At <span className="text-[var(--secondary)] font-black">ISLAM<span className="text-[var(--primary)]">4</span>EVERYONE</span>, we take your privacy seriously. This policy describes how we collect, use, and handle your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[var(--secondary)] uppercase tracking-tight border-l-8 border-[var(--primary)] pl-6 mb-6">Information Collection</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-black text-[var(--secondary)] mb-4 uppercase tracking-tighter">Usage Data</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                We may also collect information about how you access and use the service (e.g., page views, time spent on pages, and navigation paths).
              </p>
            </section>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-gray-100">
              <p className="text-sm font-bold text-slate-500 italic">
                If you have any questions about this Privacy Policy, please contact us at support@islam4everyone.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
