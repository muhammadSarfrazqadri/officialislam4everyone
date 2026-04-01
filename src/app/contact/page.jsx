import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      {/* Dynamic Header */}
      <section className="bg-white border-b-8 border-[#E14D4D] py-40 w-full relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-24 text-[20rem] font-black text-slate-50/50 leading-none group-hover:text-[#E14D4D]/5 transition-colors duration-1000 uppercase tracking-tighter">Reach</div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-9xl font-black text-[#222222] uppercase tracking-tighter mb-4 scale-y-110">
            Contact <span className="text-[#E14D4D]">Us</span>
          </h1>
          <p className="text-2xl font-black uppercase text-slate-300 tracking-[0.5em] mb-12">Get in touch with our team</p>
          <div className="w-16 h-1 bg-[#E14D4D] mx-auto opacity-50 shadow-[0_0_20px_rgba(225,77,77,0.5)]"></div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="container mx-auto px-6 py-40 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                 <h2 className="text-4xl font-black text-[#222222] uppercase tracking-tighter leading-none shrink-0 border-l-[12px] border-[#E14D4D] pl-8 mb-6">Ask Anything</h2>
                 <p className="text-lg text-slate-600 font-medium">Whether you have a question about our courses, fatwa services, or anything else, our team is here to help you.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="bg-white p-10 rounded-3xl border border-gray-100 group hover:border-[#E14D4D] transition-all">
                    <h3 className="text-xl font-black text-[#222222] uppercase tracking-tighter mb-4">Email</h3>
                    <p className="text-sm text-slate-500 font-medium italic">info@islam4everyone.com</p>
                 </div>
                 <div className="bg-white p-10 rounded-3xl border border-gray-100 group hover:border-[#E14D4D] transition-all">
                    <h3 className="text-xl font-black text-[#222222] uppercase tracking-tighter mb-4">Office</h3>
                    <p className="text-sm text-slate-500 font-medium italic">Karachi, Pakistan</p>
                 </div>
              </div>
           </div>

           <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 flex flex-col gap-8 hover:-translate-y-4 transition-all duration-700">
              <div className="flex flex-col gap-2">
                 <label className="text-xs font-black uppercase tracking-[0.2em] text-[#222222]">Full name</label>
                 <input type="text" placeholder="John Doe" className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#E14D4D] font-bold text-slate-800 transition-all"/>
              </div>
              <div className="flex flex-col gap-2">
                 <label className="text-xs font-black uppercase tracking-[0.2em] text-[#222222]">Email Address</label>
                 <input type="email" placeholder="name@email.com" className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#E14D4D] font-bold text-slate-800 transition-all"/>
              </div>
              <div className="flex flex-col gap-2">
                 <label className="text-xs font-black uppercase tracking-[0.2em] text-[#222222]">Message</label>
                 <textarea rows="4" placeholder="How can we help you?" className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-[#E14D4D] font-bold text-slate-800 transition-all resize-none"></textarea>
              </div>
              <button className="bg-[#E14D4D] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl hover:bg-[#c93d3d] hover:scale-105 transition-all">
                 Send Message
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
