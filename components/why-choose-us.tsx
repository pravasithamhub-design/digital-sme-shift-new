import React from 'react';
import { TrendingUp, Globe, Clock } from 'lucide-react';

export function WhyChooseUsSection() {
    const reasons = [
        {
            title: "പ്രവർത്തനക്ഷമത വർദ്ധിപ്പിക്കാം",
            description: "ഓട്ടോമേഷനിലൂടെ നിങ്ങളുടെ ബിസിനസ്സ് പ്രവർത്തനങ്ങൾ 50% വേഗത്തിലാക്കാം.",
            icon: <TrendingUp className="w-8 h-8 text-[#FF6B6B]" />,
            className: "md:col-span-1",
        },
        {
            title: "കൂടുതൽ ഉപഭോക്താക്കളിലേക്ക്",
            description: "മികച്ച വെബ്സൈറ്റിലൂടെയും മാർക്കറ്റിംഗിലൂടെയും പുതിയ കസ്റ്റമേഴ്സിനെ കണ്ടെത്താം.",
            icon: <Globe className="w-8 h-8 text-[#FF6B6B]" />,
            className: "md:col-span-1",
        },
        {
            title: "എപ്പോഴും ഉണർന്നു പ്രവർത്തിക്കുന്ന ബിസിനസ്സ്",
            description: "നിങ്ങൾ ഉറങ്ങുമ്പോഴും നിങ്ങളുടെ വെബ്സൈറ്റും ഓട്ടോമേഷനും നിങ്ങൾക്കായി പണിയെടുക്കും.",
            icon: <Clock className="w-8 h-8 text-[#FF6B6B]" />,
            className: "md:col-span-1",
        }
    ];

    return (
        <section className="bg-[#060507] py-20 px-6 border-b border-[#1F2E29]">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F2F4F3] text-center mb-12">
                    എന്തുകൊണ്ട് ഞങ്ങൾ?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden bg-white/5 backdrop-blur-md p-8 rounded-[30px] border border-white/10 hover:border-[#FF6B6B]/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group ${reason.className}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="mb-6 bg-[#000000]/30 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-[#3B5249]/30 shadow-inner">
                                {reason.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-[#F2F4F3] mb-4 relative z-10">
                                {reason.title}
                            </h3>

                            <p className="text-[#B0B8B5] leading-relaxed relative z-10">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
