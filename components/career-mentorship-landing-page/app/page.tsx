"use client";

import React, { useState } from 'react';
import { Play, CheckCircle2, ArrowRight, ShieldCheck, ClipboardCheck, ChevronRight } from 'lucide-react';

// --- Assessment Component ---
const AssessmentTool = () => {
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const stages = [
    {
      title: "നിങ്ങളുടെ ഇപ്പോഴത്തെ അവസ്ഥ?",
      options: ["നാട്ടിലേക്ക് മടങ്ങാൻ തയ്യാറെടുക്കുന്നു", "ഇപ്പോൾ പ്ലാനുകൾ ഒന്നുമില്ല", "നാട്ടിൽ സെറ്റിൽഡ് ആണ്, പക്ഷെ വരുമാനമില്ല"]
    },
    {
      title: "സാമ്പത്തിക സുരക്ഷ എത്രത്തോളമുണ്ട്?",
      options: ["അടുത്ത 6 മാസത്തേക്ക് തികയും", "കടബാധ്യതകൾ ഉണ്ട്", "നിലവിൽ സുരക്ഷിതമാണ്"]
    }
  ];

  const handleNext = () => {
    if (step < stages.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <section id="assessment" className="max-w-4xl mx-auto py-24 px-6 scroll-mt-20">
      <div className="bg-white border border-cyan-100 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-cyan-900/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1.5 bg-cyan-500 transition-all duration-500" style={{ width: showResult ? '100%' : `${(step + 1) * 50}%` }}></div>
        
        {!showResult ? (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600">
                <ClipboardCheck size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Life Stage Discovery</h2>
                <p className="text-slate-500 text-sm italic">നിങ്ങളുടെ നിലവിലെ അവസ്ഥ കണ്ടെത്തൂ</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-8 leading-snug">
                {stages[step].title}
              </h3>
              <div className="grid gap-4">
                {stages[step].options.map((option, index) => (
                  <button 
                    key={index}
                    onClick={handleNext}
                    className="w-full text-left p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-cyan-300 hover:bg-cyan-50/30 transition-all group flex justify-between items-center"
                  >
                    <span className="font-medium text-slate-700 group-hover:text-cyan-700">{option}</span>
                    <ChevronRight className="text-slate-300 group-hover:text-cyan-500 transition-transform group-hover:translate-x-1" size={20} />
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={40} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">റിസൾട്ട് തയ്യാറാണ്!</h3>
            <p className="text-slate-600 mb-8 text-lg">നിങ്ങളുടെ സ്റ്റേജ് അനുസരിച്ച് നാട്ടിലെ മടക്കം സുരക്ഷിതമാക്കാൻ ഒരു പ്രത്യേക പ്ലാൻ ആവശ്യമാണ്.</p>
            <button className="bg-cyan-500 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-cyan-200 hover:scale-105 transition-transform">
              നിങ്ങളുടെ പേഴ്സണൽ പ്ലാൻ കാണുക
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// --- Main Page Component ---
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50/30 to-white text-slate-900 selection:bg-cyan-100">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-cyan-100/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg rotate-12 shadow-lg shadow-cyan-200"></div>
            <span className="text-xl font-bold text-slate-800">പ്രവാസിതം</span>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-all shadow-md">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-sm font-semibold tracking-wide uppercase">
              Second Innings Planning Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              വർഷങ്ങളുടെ പ്രവാസ ജീവിതത്തിനു ശേഷം…<br />
              <span className="text-cyan-600">നിങ്ങളുടെ മടക്കം ശരിക്കും ഭദ്രമാണോ?</span>
            </h1>
            <p className="text-xl text-slate-600">ജീവിതത്തിന്റെ സെക്കൻഡ് ഇന്നിങ്സിനായി നിങ്ങളെ തയ്യാറാക്കുന്ന സംവിധാനം — പ്രവാസിതം</p>
            
            <ul className="space-y-4">
              {[
                "Return Life Planning for NRKs", 
                "Smart Home + Income + Stability Roadmap", 
                "Community + Guidance + Practical Systems"
              ].map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-cyan-500" size={22} /> {p}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-500 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-cyan-200 flex items-center gap-3 hover:scale-105 transition-transform"
            >
              Start Your Assessment <ArrowRight />
            </button>
          </div>

          {/* Hero Video Preview */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-cyan-200/40 rounded-[40px] blur-2xl transition-all"></div>
            <div className="relative bg-white p-4 rounded-[32px] shadow-2xl border border-white overflow-hidden">
              <div className="relative aspect-video rounded-[24px] overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                  alt="Mentor" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 group-hover:bg-slate-900/30 transition-all">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-500 text-white shadow-xl shadow-cyan-500/50 hover:scale-110 transition-transform cursor-pointer">
                    <Play fill="currentColor" size={28} className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Assessment Section */}
      <AssessmentTool />

      {/* Footer */}
      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-100 bg-white">
        © 2026 പ്രവാസിതം. All rights reserved. | 100% ശരീയത്ത് കംപ്ലയിന്റ്.
      </footer>
    </div>
  );
}