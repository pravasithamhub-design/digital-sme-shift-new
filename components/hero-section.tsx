"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="relative bg-[#2A3B35] text-[#F2F4F3] overflow-hidden min-h-[85vh] flex items-center">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-60"
                >
                    <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-[#060507]/60" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-32 relative z-10 flex flex-col items-center text-center">

                {/* Main Content */}
                <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">

                    {/* Badge / Pill */}
                    <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#3B5249] border border-[#4A6359] backdrop-blur-sm mb-2 md:mb-4">
                        <span className="text-xs md:text-sm font-medium text-[#F2F4F3] opacity-90">
                            For Forward-Thinking SMEs
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                        <motion.span
                            animate={{ y: [0, -10, 0], color: ["#F2F4F3", "#B0B8B5", "#F2F4F3"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                            className="inline-block"
                        >
                            ബിസിനസ്സിനെ
                        </motion.span>
                        <br className="hidden md:block" />

                        <motion.span
                            animate={{ y: [0, -10, 0], color: ["#FF6B6B", "#FF8585", "#FF6B6B"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                            className="inline-block mr-2"
                        >
                            ഡിജിറ്റൽ
                        </motion.span>
                        <motion.span
                            animate={{ y: [0, -10, 0], color: ["#FF6B6B", "#FF4040", "#FF6B6B"] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                            className="inline-block"
                        >
                            യുഗത്തിലേക്ക്
                        </motion.span>

                        <br className="hidden md:block" />

                        <motion.span
                            animate={{ y: [0, -10, 0], color: ["#F2F4F3", "#FF6B6B", "#F2F4F3"] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                            className="inline-block"
                        >
                            കൈപിടിച്ചുയർത്തെണ്ടേ?
                        </motion.span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-base sm:text-lg md:text-xl text-[#B0B8B5] max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2">
                        മോഡേൺ വെബ്സൈറ്റുകൾ, ആപ്പുകൾ, ബിസിനസ്സ് ഓട്ടോമേഷൻ, വീഡിയോ മാർക്കറ്റിംഗ് എന്നിവയിലൂടെ
                        നിങ്ങളുടെ ബിസിനസ്സിന്റെ വളർച്ച നിങ്ങൾക്ക് തന്നെ കാണാൻ...
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4 w-full md:w-auto">
                        <button className="group relative inline-flex items-center justify-center w-full md:w-auto px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold text-[#1A1A1A] transition-all duration-200 bg-[#FF6B6B] rounded-full hover:bg-[#ff8585] hover:shadow-[0_0_20px_rgba(255,107,107,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B] focus:ring-offset-[#2A3B35]">
                            <span>ഫ്രീ കൺസൾട്ടേഷൻ </span>
                            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                    </div>

                </div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#060507] to-transparent pointer-events-none" />
        </section>
    );
}
