"use client";

import React from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

const InteractiveShowcase = () => {
    return (
        <section className="relative py-24 md:py-36 bg-[#f8f9fb] flex justify-center px-4 md:px-8 overflow-hidden z-0">
            {/* ── STUNNING MESH GRADIENT BACKGROUND ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
                <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[120px] mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[550px] h-[550px] bg-purple-400/30 rounded-full blur-[100px] mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite_reverse]" />
                <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-[90px] mix-blend-multiply animate-[pulse_6s_ease-in-out_infinite]" />
            </div>

            <div className="w-full max-w-[1340px] relative z-10">

                {/* ── Header Above the Outer Box ── */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-indigo-600 font-bold mb-3">
                        Founder’s Vision
                    </p>
                    <h2 className="font-serif text-[clamp(32px,4vw,54px)] leading-[1.1] text-[#111110]">
                        Why TeachGrid exists
                    </h2>
                </motion.div>
                
                {/* ── Desktop Split Layout (Visible lg and up) ── */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hidden lg:block relative w-full h-[620px]"
                >
                    {/* LEFT CARD WRAPPER WITH ULTRA-SOFT DROP SHADOW */}
                    <div className="absolute top-0 left-0 w-[54%] h-full z-10" style={{ filter: 'drop-shadow(0px 24px 48px rgba(0, 0, 0, 0.06))' }}>
                        <div 
                            className="w-full h-full bg-white/95 backdrop-blur-3xl border-[2px] border-slate-200/80 rounded-[36px] p-16 flex flex-col justify-between"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 86% 100%, 0 100%)' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-white/10 pointer-events-none" />
                            
                            <div className="max-w-[85%] pr-4 relative z-10">
                                
                                {/* Quote */}
                                <div className="relative pt-4">
                                    <Quote className="absolute -top-6 -left-8 w-16 h-16 text-indigo-500/10 rotate-180" />
                                    <p className="text-[25px] leading-[1.6] text-[#111110] font-medium tracking-tight relative z-10">
                                        “Our goal with TeachGrid is simple — give educators the tools they need to deliver meaningful learning experiences at scale while keeping learners engaged and motivated.”
                                    </p>
                                </div>

                                {/* Persona */}
                                <div className="flex items-center gap-4 mt-12">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
                                        <span className="text-white font-bold text-lg">PR</span>
                                    </div>
                                    <div>
                                        <p className="text-[#111110] font-bold text-[15px]">Prashanth Radhakrishnan</p>
                                        <p className="text-[13px] text-gray-500 font-medium">Founder & Managing Director, TeachGrid</p>
                                    </div>
                                </div>
                            </div>

                            {/* Link */}
                            <div className="mt-4 relative z-10">
                                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111110] text-white rounded-full font-bold text-[15px] hover:bg-slate-800 transition-colors group shadow-xl shadow-slate-900/10">
                                    Read more 
                                    <ArrowUpRight size={18} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD WRAPPER WITH DROP SHADOW */}
                    <div className="absolute top-0 right-0 w-[50%] h-full z-0 group" style={{ filter: 'drop-shadow(0px 24px 48px rgba(0, 0, 0, 0.08))' }}>
                        <div 
                            className="w-full h-full bg-white/95 backdrop-blur-3xl border-[2px] border-slate-200/80 rounded-[36px] relative overflow-hidden"
                            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
                        >
                            <video 
                                src="https://assets.jitter.video/design-1-hd-20.mp4" 
                                autoPlay loop muted playsInline 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* ── Mobile & Tablet Layout (Hidden directly on lg and up) ── */}
                <div className="lg:hidden flex flex-col gap-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full bg-white/95 backdrop-blur-3xl border-[2px] border-slate-200/80 rounded-[32px] p-8 md:p-12 flex flex-col shadow-[0_12px_32px_rgba(0,0,0,0.06)] relative overflow-hidden"
                    >
                        <div className="relative pt-6 mb-8">
                            <Quote className="absolute top-0 -left-6 w-14 h-14 text-indigo-500/10 rotate-180" />
                            <p className="text-[20px] md:text-[24px] leading-[1.6] text-[#111110] font-medium tracking-tight relative z-10">
                                “Our goal with TeachGrid is simple — give educators the tools they need to deliver meaningful learning experiences at scale while keeping learners engaged and motivated.”
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/10">
                                <span className="text-white font-bold text-sm">PR</span>
                            </div>
                            <div>
                                <p className="text-[#111110] font-bold text-[14px]">Prashanth Radhakrishnan</p>
                                <p className="text-[12px] text-gray-400 font-medium">Founder & Managing Director, TeachGrid</p>
                            </div>
                        </div>

                        <div className="mt-auto pt-4 relative">
                            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#111110] text-white rounded-full font-bold text-[14px] hover:bg-slate-800 transition-colors">
                                Read more <ArrowUpRight size={16} strokeWidth={2.5} />
                            </a>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="w-full bg-white/95 backdrop-blur-3xl border-[2px] border-slate-200/80 rounded-[32px] shadow-[0_12px_32px_rgba(0,0,0,0.06)] relative overflow-hidden h-[340px] md:h-[420px]"
                    >
                        <video 
                            src="https://assets.jitter.video/design-1-hd-20.mp4" 
                            autoPlay loop muted playsInline 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default InteractiveShowcase;
