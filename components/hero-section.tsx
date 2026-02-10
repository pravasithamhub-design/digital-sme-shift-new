"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ConsultationModal } from './consultation-modal';

export function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: custom * 0.2 }
        })
    };

    return (
        <section className="relative bg-[#060507] text-[#F2F4F3] min-h-[90vh] flex items-center justify-center p-4 md:p-8 overflow-hidden">
            {/* Background Video - Fixed/Absolute behind everything */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-40 blur-[2px] scale-105"
                >
                    <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060507] via-[#060507]/50 to-transparent" />
                <div className="absolute inset-0 bg-[#060507]/40" />
            </div>

            {/* Glass Card Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card w-full max-w-6xl relative z-10 px-6 py-20 md:py-28 md:px-12 flex flex-col items-center text-center overflow-hidden"
            >
                {/* Subtle Glow behind text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Badge */}
                <motion.div
                    custom={0}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <span className="text-sm font-medium tracking-wide text-gray-300">
                        For Forward-Thinking SMEs
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    custom={1}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
                >
                    <span className="inline-block bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                        ബിസിനസ്സിനെ
                    </span>
                    <br />
                    <span className="inline-block text-white">
                        ഡിജിറ്റൽ
                    </span>{" "}
                    <span className="inline-block italic font-light text-[#FF6B6B]">
                        യുഗത്തിലേക്ക്
                    </span>
                    <br />
                    <span className="inline-block bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                        കൈപിടിച്ചുയർത്താം
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    custom={2}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10 font-light"
                >
                    മോഡേൺ വെബ്സൈറ്റുകൾ, ആപ്പുകൾ, ബിസിനസ്സ് ഓട്ടോമേഷൻ എന്നിവയിലൂടെ
                    നിങ്ങളുടെ ബിസിനസ്സിന്റെ വളർച്ച ഉറപ്പാക്കാം.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    custom={3}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#FF6B6B] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#ff5252] hover:shadow-[0_0_40px_-10px_rgba(255,107,107,0.5)]"
                    >
                        <span className="relative z-10 flex items-center">
                            ഫ്രീ കൺസൾട്ടേഷൻ
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </button>
                </motion.div>

            </motion.div>

            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
