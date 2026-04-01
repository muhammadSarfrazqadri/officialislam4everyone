import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 border-b border-gray-100 py-32 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E14D4D]/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-6 scale-y-110">
            Terms of <span className="text-[#E14D4D]">Service</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Agreement and conditions</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 max-w-4xl">
        <div className="space-y-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-black text-[#222222] uppercase tracking-tighter border-b-8 border-[#E14D4D] inline-block self-start pb-4">Usage Rules</h2>
            <p className="text-lg text-slate-600 leading-none font-medium">By accessing our website, you agree to comply with these terms. All content provided is for educational and informational purposes only.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-3xl border border-gray-100 group hover:border-[#E14D4D] transition-all">
              <h3 className="text-xl font-black text-[#222222] uppercase tracking-tighter mb-4">Ownership</h3>
              <p className="text-sm text-slate-500 font-medium">All material on this site is owned by <span className="text-[#E14D4D]">ISLAM4EVERYONE</span>. You may not reproduce or distribute any content without our express written permission.</p>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-3xl border border-gray-100 group hover:border-[#E14D4D] transition-all">
              <h3 className="text-xl font-black text-[#222222] uppercase tracking-tighter mb-4">Liability</h3>
              <p className="text-sm text-slate-500 font-medium">We are not liable for any content that is accessed through our platform, and we do not guarantee the accuracy of any third-party information.</p>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100">
             <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 text-center">These terms are subject to change without prior notice.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
