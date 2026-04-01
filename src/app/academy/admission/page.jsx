'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  User,
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Clock,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const StepCard = ({ number, title, active }) => (
  <div className={`flex items-center gap-4 transition-all duration-500 ${active ? 'opacity-100' : 'opacity-30'}`}>
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${active ? 'bg-[#E14D4D] text-white shadow-[0_0_20px_rgba(225,77,77,0.4)]' : 'bg-white/10 text-white'}`}>
      {number}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">{title}</span>
  </div>
);

const AdmissionPage = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: 'Arabic Language',
    experience: 'Beginner'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#E14D4D] pb-32">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#E14D4D]/5 rounded-full blur-[180px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 pt-40 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-20 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              <Zap className="w-3 h-3 text-[#E14D4D]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Academy Admission Portal</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              Empower Your <span className="text-[#E14D4D]">Soul.</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-medium max-w-2xl italic">
              "Join a global community of scholars and students dedicated to the preservation of classical Islamic sciences."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Sidebar: Progress & Info */}
            <div className="lg:col-span-4 space-y-12">
              <div className="bg-[#111111] border border-white/5 rounded-[3rem] p-10 space-y-10">
                <div className="space-y-6">
                  <StepCard number="01" title="Personal Profile" active={step >= 1} />
                  <StepCard number="02" title="Academic Selection" active={step >= 2} />
                  <StepCard number="03" title="Verification" active={step >= 3} />
                </div>
                
                <div className="pt-10 border-t border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <ShieldCheck className="w-5 h-5 text-[#E14D4D]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Secure Enrollment</span>
                  </div>
                  <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest leading-relaxed">
                    All applications are reviewed by our senior faculty board to ensure placement in the correct proficiency level.
                  </p>
                </div>
              </div>

              <div className="hidden lg:block p-10 bg-gradient-to-br from-[#E14D4D]/10 to-transparent border border-[#E14D4D]/20 rounded-[3rem]">
                 <Clock className="w-8 h-8 text-[#E14D4D] mb-6" />
                 <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-white">Application Deadline</h4>
                 <p className="text-2xl font-black text-white uppercase tracking-tighter">Fall 2026</p>
                 <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-2">Limited Slots Available</p>
              </div>
            </div>

            {/* Right: The Form Context */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white/[0.02] border border-white/5 rounded-[4rem] p-10 md:p-20 shadow-2xl"
                  >
                    <form onSubmit={handleSubmit} className="space-y-12">
                      {step === 1 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                          <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 ml-4">Full Identity</label>
                            <div className="relative group">
                              <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-[#E14D4D] transition-colors" />
                              <input 
                                required
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-6 focus:outline-none focus:border-[#E14D4D]/50 transition-all font-medium"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                              />
                            </div>
                          </div>
                          <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 ml-4">Digital Channel</label>
                            <div className="relative group">
                              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-[#E14D4D] transition-colors" />
                              <input 
                                required
                                type="email"
                                placeholder="name@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-6 focus:outline-none focus:border-[#E14D4D]/50 transition-all font-medium"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                          <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 ml-4">Specialization</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {['Arabic Language', 'Islamic Jurisprudence', 'Hadith Sciences', 'Quranic Tafsir'].map(course => (
                                <button
                                  type="button"
                                  key={course}
                                  onClick={() => setFormData({...formData, course})}
                                  className={`p-6 rounded-2xl border transition-all text-left group ${formData.course === course ? 'bg-[#E14D4D] border-transparent' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                                >
                                  <span className={`text-xs font-bold uppercase tracking-widest ${formData.course === course ? 'text-white' : 'text-white/40'}`}>{course}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 ml-4">Proficiency Level</label>
                            <select 
                              className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-6 focus:outline-none focus:border-[#E14D4D]/50 transition-all font-medium"
                              value={formData.experience}
                              onChange={(e) => setFormData({...formData, experience: e.target.value})}
                            >
                              <option className="bg-[#0A0A0A]">Beginner (Zero experience)</option>
                              <option className="bg-[#0A0A0A]">Intermediate (Basic knowledge)</option>
                              <option className="bg-[#0A0A0A]">Advanced (Seeking specialization)</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                          <div className="p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-[2rem] flex items-start gap-6">
                            <CheckCircle2 className="w-8 h-8 text-emerald-500 mt-1" />
                            <div>
                               <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">Ready for Submission</h4>
                               <p className="text-white/50 text-sm italic">"By submitting, you agree to our code of conduct and academic ethics."</p>
                            </div>
                          </div>
                          
                          <div className="p-10 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                             <div className="flex justify-between">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">Name</span>
                                <span className="text-[11px] font-bold uppercase">{formData.name}</span>
                             </div>
                             <div className="flex justify-between">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">Specialization</span>
                                <span className="text-[11px] font-bold uppercase text-[#E14D4D]">{formData.course}</span>
                             </div>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-10">
                        {step > 1 && (
                          <button 
                            type="button" 
                            onClick={() => setStep(step - 1)}
                            className="text-[9px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                          >
                            Previous Phase
                          </button>
                        )}
                        <button 
                          type="submit"
                          className="ml-auto group bg-white text-black px-12 py-6 rounded-full flex items-center gap-4 hover:bg-[#E14D4D] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                        >
                          <span className="text-[11px] font-bold uppercase tracking-widest">
                            {step < 3 ? 'Next Phase' : 'Execute Application'}
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-500 text-white rounded-[4rem] p-12 md:p-32 text-center shadow-[0_30px_60px_rgba(16,185,129,0.3)] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)] opacity-20"></div>
                    <div className="relative z-10 space-y-8">
                       <CheckCircle2 className="w-24 h-24 mx-auto mb-8 drop-shadow-2xl" />
                       <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                         Application <br /> Preserved.
                       </h2>
                       <p className="text-xl opacity-80 italic font-medium max-w-lg mx-auto leading-relaxed">
                         "Your request has been successfully integrated into our academic queue. Our board will reach out via the provided digital channel."
                       </p>
                       <div className="pt-10">
                         <Link href="/" className="px-10 py-5 bg-black rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-white hover:text-black transition-all">
                           Return to Core Portal
                         </Link>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
