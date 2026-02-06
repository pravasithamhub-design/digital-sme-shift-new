import React from 'react';
import { Send } from 'lucide-react';

export function ContactSection() {
    return (
        <section className="bg-[#060507] py-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3B5249] rounded-full blur-[120px] opacity-20 translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-md rounded-[30px] border border-white/10 p-8 md:p-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    <div className="text-center mb-10 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F2F4F3] mb-4">
                            നിങ്ങളുടെ ബിസിനസ്സ് വളർത്താൻ തയ്യാറാണോ?
                        </h2>
                        <p className="text-xl text-[#FF6B6B] font-medium">
                            ഒരു ഫ്രീ കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യൂ.
                        </p>
                    </div>

                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-[#B0B8B5] ml-1">പേര്</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="നിങ്ങളുടെ പേര്"
                                    className="w-full bg-[#060507]/50 border border-white/10 rounded-xl px-5 py-4 text-[#F2F4F3] placeholder:text-white/20 focus:outline-none focus:border-[#FF6B6B]/50 focus:ring-1 focus:ring-[#FF6B6B]/50 transition-all backdrop-blur-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="business" className="text-sm font-medium text-[#B0B8B5] ml-1">ബിസിനസ്സ് നെയിം</label>
                                <input
                                    type="text"
                                    id="business"
                                    placeholder="ബിസിനസ്സിന്റെ പേര്"
                                    className="w-full bg-[#060507]/50 border border-white/10 rounded-xl px-5 py-4 text-[#F2F4F3] placeholder:text-white/20 focus:outline-none focus:border-[#FF6B6B]/50 focus:ring-1 focus:ring-[#FF6B6B]/50 transition-all backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="whatsapp" className="text-sm font-medium text-[#B0B8B5] ml-1">WhatsApp നമ്പർ</label>
                            <input
                                type="tel"
                                id="whatsapp"
                                placeholder="WhatsApp നമ്പർ"
                                className="w-full bg-[#060507]/50 border border-white/10 rounded-xl px-5 py-4 text-[#F2F4F3] placeholder:text-white/20 focus:outline-none focus:border-[#FF6B6B]/50 focus:ring-1 focus:ring-[#FF6B6B]/50 transition-all backdrop-blur-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-[#B0B8B5] ml-1">സന്ദേശം</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="നിങ്ങളുടെ ആവശ്യങ്ങൾ ഇവിടെ എഴുതുക..."
                                className="w-full bg-[#060507]/50 border border-white/10 rounded-xl px-5 py-4 text-[#F2F4F3] placeholder:text-white/20 focus:outline-none focus:border-[#FF6B6B]/50 focus:ring-1 focus:ring-[#FF6B6B]/50 transition-all backdrop-blur-sm resize-none"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#1A1A1A] transition-all duration-200 bg-[#FF6B6B] rounded-xl hover:bg-[#ff8585] hover:shadow-[0_0_20px_rgba(255,107,107,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B] focus:ring-offset-[#060507]"
                            >
                                <span>സബ്മിറ്റ് ചെയ്യൂ</span>
                                <Send className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
