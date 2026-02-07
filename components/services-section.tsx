import React from 'react';
import { Smartphone, Zap, Video } from 'lucide-react';

export function ServicesSection() {
    const services = [
        {
            title: "പ്രൊഫഷണൽ വെബ്സൈറ്റുകളും ആപ്പുകളും",
            description: "നിങ്ങളുടെ ബിസിനസ്സിന് അനുയോജ്യമായ ആധുനികമായ വെബ്സൈറ്റുകളും മൊബൈൽ ആപ്ലിക്കേഷനുകളും ഞങ്ങൾ നിർമ്മിക്കുന്നു.",
            icon: <Smartphone className="w-8 h-8 text-[#FF6B6B]" />,
            image: "/banner-1.png",
            className: "md:col-span-1", // Standard card
        },
        {
            title: "ബിസിനസ്സ് ഓട്ടോമേഷൻ",
            description: "ആവർത്തന സ്വഭാവമുള്ള ജോലികൾ ഓട്ടോമേറ്റ് ചെയ്യുന്നതിലൂടെ നിങ്ങളുടെ സമയവും പണവും ലാഭിക്കാം.",
            icon: <Zap className="w-8 h-8 text-[#FF6B6B]" />,
            image: "/banner-2.png",
            className: "md:col-span-1", // Standard card
        },
        {
            title: "വീഡിയോ മാർക്കറ്റിംഗ്",
            description: "ഉയർന്ന നിലവാരമുള്ള വീഡിയോകളിലൂടെ നിങ്ങളുടെ ബ്രാൻഡിനെ ജനങ്ങളിലേക്ക് എത്തിക്കാം.",
            icon: <Video className="w-8 h-8 text-[#FF6B6B]" />,
            image: "/banner-3.png",
            className: "md:col-span-1", // Standard card
        }
    ];

    return (
        <section className="bg-[#23332e] py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F2F4F3] text-center mb-12">
                    ഞങ്ങളുടെ സേവനങ്ങൾ
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden bg-gradient-to-br from-[#2A3B35] to-[#1F2E29] backdrop-blur-md p-8 rounded-[30px] border border-white/10 hover:border-[#FF6B6B]/50 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(255,107,107,0.3)] ${service.className}`}
                        >
                            {/* Premium Shine Effect Overlay */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />

                            {/* Hover Illustration */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute top-[-10px] right-[-10px] w-40 h-40 object-contain opacity-0 scale-50 translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-12 transition-all duration-500 ease-out z-0 pointer-events-none"
                            />

                            {/* Step Indicator */}
                            <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 flex items-center justify-center text-[#FF6B6B] font-bold text-sm">
                                {index + 1}
                            </div>

                            <div className="mb-6 mt-8 bg-[#2A3B35]/50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-inner">
                                {service.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-[#F2F4F3] mb-4 relative z-10 group-hover:text-[#FF6B6B] transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-[#B0B8B5] leading-relaxed relative z-10 group-hover:text-[#F2F4F3] transition-colors duration-300">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
