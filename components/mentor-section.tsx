import React from 'react';

export function MentorSection() {
    return (
        <section className="bg-[#060507] py-20 px-6 border-b border-[#1F2E29]">
            <div className="container mx-auto max-w-6xl">
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-md rounded-[30px] border border-white/10 p-8 md:p-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Image Column */}
                        <div className="order-1 md:order-1 flex justify-center md:justify-start">
                            <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="/salim.png"
                                    alt="Salim Haripad"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="order-2 md:order-2 space-y-6 text-center md:text-left">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 backdrop-blur-sm mb-2">
                                <span className="text-sm font-medium text-[#FF6B6B]">
                                    Meet Your Mentor
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2F4F3] leading-tight">
                                നിങ്ങളുടെ ബിസിനസ്സ് വളർത്താൻ കൂടെയുണ്ട് <span className="text-[#FF6B6B]">സലീം ഹരിപ്പാട്.</span>
                            </h2>

                            <p className="text-lg text-[#B0B8B5] leading-relaxed">
                                ഒരു ബിസിനസ്സ് മെന്റർ എന്ന നിലയിൽ, നൂറുകണക്കിന് സംരംഭങ്ങളെ ഡിജിറ്റൽ യുഗത്തിലേക്ക് കൈപിടിച്ചുയർത്താൻ എനിക്ക് സാധിച്ചിട്ടുണ്ട്.
                            </p>

                            <p className="text-[#B0B8B5] leading-relaxed">
                                പ്രൊഫഷണൽ വെബ്സൈറ്റുകൾ മുതൽ ബിസിനസ്സ് ഓട്ടോമേഷൻ വരെ, നിങ്ങളുടെ വളർച്ചയ്ക്കായി കൃത്യമായ പ്ലാൻ ഞങ്ങൾ നൽകുന്നു.
                            </p>

                            <div className="pt-4">
                                <button className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#1A1A1A] transition-all duration-200 bg-[#F2F4F3] rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    കൂടുതൽ അറിയാൻ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
