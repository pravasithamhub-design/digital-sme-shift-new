"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        businessName: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call, WhatsApp redirect)
        console.log("Form Submitted", formData);

        // Construct WhatsApp message
        const message = `Hello, I'm interested in a free consultation.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Business:* ${formData.businessName}`;
        window.open(`https://wa.me/919496660144?text=${message}`, '_blank');

        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#060507]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                            className="bg-[#2A3B35]/90 border border-[#3B5249] p-6 md:p-8 rounded-2xl w-full max-w-md shadow-2xl relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-[#B0B8B5] hover:text-[#FF6B6B] transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-[#F2F4F3] mb-2">Free Consultation</h2>
                                <p className="text-[#B0B8B5] text-sm">
                                    Fill in your details and we'll get back to you shortly.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#B0B8B5] mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-[#060507]/50 border border-[#3B5249] text-[#F2F4F3] rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B6B] focus:ring-1 focus:ring-[#FF6B6B] transition-all"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#B0B8B5] mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full bg-[#060507]/50 border border-[#3B5249] text-[#F2F4F3] rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B6B] focus:ring-1 focus:ring-[#FF6B6B] transition-all"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#B0B8B5] mb-1">Business Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-[#060507]/50 border border-[#3B5249] text-[#F2F4F3] rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6B6B] focus:ring-1 focus:ring-[#FF6B6B] transition-all"
                                        placeholder="Enter your business name"
                                        value={formData.businessName}
                                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#FF6B6B] text-[#1A1A1A] font-bold py-4 rounded-full mt-6 hover:bg-[#ff8585] transition-colors flex items-center justify-center gap-2"
                                >
                                    <span>Get Free Advice</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
