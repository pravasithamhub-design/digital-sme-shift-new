import React from 'react';
import { Smartphone, Zap, Video } from 'lucide-react';

export function ServicesSection() {
    const services = [
        {
            title: "പ്രൊഫഷണൽ വെബ്സൈറ്റുകളും ആപ്പുകളും",
            description: "നിങ്ങളുടെ ബിസിനസ്സിന് അനുയോജ്യമായ ആധുനികമായ വെബ്സൈറ്റുകളും മൊബൈൽ ആപ്ലിക്കേഷനുകളും ഞങ്ങൾ നിർമ്മിക്കുന്നു.",
            icon: <Smartphone className="w-8 h-8 text-[#FF6B6B]" />,
            className: "md:col-span-1", // Standard card
        },
        {
            title: "ബിസിനസ്സ് ഓട്ടോമേഷൻ",
            description: "ആവർത്തന സ്വഭാവമുള്ള ജോലികൾ ഓട്ടോമേറ്റ് ചെയ്യുന്നതിലൂടെ നിങ്ങളുടെ സമയവും പണവും ലാഭിക്കാം.",
            icon: <Zap className="w-8 h-8 text-[#FF6B6B]" />,
            className: "md:col-span-1", // Standard card
        },
        {
            title: "വീഡിയോ മാർക്കറ്റിംഗ്",
            description: "ഉയർന്ന നിലവാരമുള്ള വീഡിയോകളിലൂടെ നിങ്ങളുടെ ബ്രാൻഡിനെ ജനങ്ങളിലേക്ക് എത്തിക്കാം.",
            icon: <Video className="w-8 h-8 text-[#FF6B6B]" />,
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
                            className={`relative overflow-hidden bg-white/5 backdrop-blur-md p-8 rounded-[30px] border border-white/10 hover:border-[#FF6B6B]/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group ${service.className}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="mb-6 bg-[#2A3B35]/50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {service.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-[#F2F4F3] mb-4 relative z-10">
                                {service.title}
                            </h3>

                            <p className="text-[#B0B8B5] leading-relaxed relative z-10">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
