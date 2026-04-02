"use client";

import React, { useRef, useEffect } from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

const InteractiveShowcase = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Autoplay was prevented:", error);
            });
        }
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center py-16 md:py-20 bg-transparent px-4 md:px-8 overflow-hidden z-0 snap-start">

            <div className="w-full max-w-[1340px] relative z-10">

                {/* Header */}
                {/* Header Above the Outer Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 md:mb-10"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-3">
                        Founder's Vision
                    </p>
                    <h2
                        className="text-[clamp(28px,5vw,54px)] leading-[1.05] tracking-[-0.04em] text-[#111110] font-medium"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Why TeachGrid exists
                    </h2>
                </motion.div>

                {/* Desktop Split Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hidden lg:block relative w-full h-[480px] xl:h-[520px]"
                >
                    {/* LEFT CARD */}
                    <div className="absolute top-0 left-0 w-[56%] h-full z-10" style={{ filter: 'drop-shadow(0px 24px 48px rgba(0, 0, 0, 0.06))' }}>
                        <div
                            className="w-full h-full bg-white/95 backdrop-blur-3xl border-[2px] border-slate-200/80 rounded-[36px] p-8 xl:p-12 flex flex-col justify-between overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 86.5% 100%, 0 100%)' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-white/10 pointer-events-none rounded-[36px]" />

                            <div className="max-w-[85%] pr-4 relative z-10">
                                <div className="relative pt-4">
                                    <Quote className="absolute -top-6 -left-6 w-12 h-12 text-indigo-500/10 rotate-180" />
                                    <p
                                        className="text-[18px] xl:text-[22px] leading-[1.6] text-[#111110] font-medium tracking-tight relative z-10 text-justify"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                    >
                                        "Our goal with TeachGrid is simple - give educators the tools they need to deliver meaningful learning experiences at scale while keeping learners engaged and motivated."
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-10">
                                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 flex-shrink-0">
                                        <span className="text-slate-700 font-bold text-lg">PR</span>
                                    </div>
                                    <div>
                                        <p className="text-[#111110] font-bold text-[15px]" style={{ fontFamily: "'Poppins', sans-serif" }}>Prashanth Radhakrishnan</p>
                                        <p className="text-[13px] text-gray-500 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Founder & Managing Director</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 relative z-10">
                                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111110] text-white rounded-full font-bold text-[15px] hover:bg-slate-800 transition-colors group shadow-xl shadow-slate-900/10">
                                    Read more
                                    <ArrowUpRight size={18} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="absolute top-0 right-0 w-[50%] h-full z-0 group" style={{ filter: 'drop-shadow(0px 24px 48px rgba(0, 0, 0, 0.08))' }}>
                        <div
                            className="w-full h-full bg-white/95 backdrop-blur-3xl border-[2px] border-slate-200/80 rounded-[36px] relative overflow-hidden"
                            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
                        >
                            <video
                                ref={videoRef}
                                src="https://assets.jitter.video/design-1-hd-20.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Mobile & Tablet Layout */}
                <div className="lg:hidden flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full relative shadow-[0_12px_32px_rgba(0,0,0,0.06)] group"
                    >
                        {/* Gradient Outline Border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 rounded-[34px] shadow-[0_0_15px_rgba(0,0,0,0.05)] transition-all duration-500" />

                        {/* Inner Content */}
                        <div className="relative m-[2.5px] bg-white/98 backdrop-blur-3xl rounded-[32px] p-6 sm:p-8 md:p-12 flex flex-col overflow-hidden">
                            <div className="relative pt-6 mb-8">
                                <Quote className="absolute top-0 -left-6 w-14 h-14 text-indigo-500/10 rotate-180" />
                                <p
                                    className="text-[20px] md:text-[24px] leading-[1.6] text-[#111110] font-medium tracking-tight relative z-10 text-justify"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    "Our goal with TeachGrid is simple — give educators the tools they need to deliver meaningful learning experiences at scale while keeping learners engaged and motivated."
                                </p>
                            </div>

                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 flex-shrink-0">
                                    <span className="text-slate-700 font-bold text-sm">PR</span>
                                </div>
                                <div>
                                    <p className="text-[#111110] font-bold text-[14px]" style={{ fontFamily: "'Poppins', sans-serif" }}>Prashanth Radhakrishnan</p>
                                    <p className="text-[12px] text-gray-400 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Founder & Managing Director</p>
                                </div>
                            </div>

                            <div className="mt-auto pt-4 relative">
                                <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#111110] text-white rounded-full font-bold text-[14px] hover:bg-slate-700 transition-colors">
                                    Read more <ArrowUpRight size={16} strokeWidth={2.5} />
                                </a>
                            </div>
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
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default InteractiveShowcase;
