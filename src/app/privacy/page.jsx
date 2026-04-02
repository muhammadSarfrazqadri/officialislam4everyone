import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
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
