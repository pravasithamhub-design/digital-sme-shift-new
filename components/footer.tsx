import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-[#060507] text-[#F2F4F3] border-t border-[#1F2E29]">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#F2F4F3] to-[#B0B8B5] bg-clip-text text-transparent">
                            Pravasitham
                        </h2>
                        <p className="text-sm text-[#B0B8B5] mt-2">
                            Empowering Business Growth
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-[#B0B8B5] hover:text-[#FF6B6B] transition-colors duration-300 transform hover:scale-110"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            className="text-[#B0B8B5] hover:text-[#FF6B6B] transition-colors duration-300 transform hover:scale-110"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            className="text-[#B0B8B5] hover:text-[#FF6B6B] transition-colors duration-300 transform hover:scale-110"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-[#1F2E29] text-center">
                    <p className="text-sm text-[#B0B8B5]/60">
                        &copy; 2026 Pravasitham. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
