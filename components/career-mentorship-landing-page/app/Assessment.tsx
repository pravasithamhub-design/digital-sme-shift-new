import React, { useState } from 'react';
import { ChevronRight, ClipboardCheck } from 'lucide-react';

export default function Assessment() {
  const [step, setStep] = useState(0);

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

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <div className="bg-white border border-cyan-100 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-cyan-900/5 relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1.5 bg-cyan-500 transition-all duration-500" style={{ width: `${(step + 1) * 50}%` }}></div>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600">
            <ClipboardCheck size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Life Stage Discovery</h2>
            <p className="text-slate-500 text-sm italic">Where am I now?</p>
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
                onClick={() => step < stages.length - 1 ? setStep(step + 1) : alert("നിങ്ങളുടെ റിസൾട്ട് റെഡിയാണ്!")}
                className="w-full text-left p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-cyan-300 hover:bg-cyan-50/30 transition-all group flex justify-between items-center"
              >
                <span className="font-medium text-slate-700 group-hover:text-cyan-700">{option}</span>
                <ChevronRight className="text-slate-300 group-hover:text-cyan-500 transition-transform group-hover:translate-x-1" size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}