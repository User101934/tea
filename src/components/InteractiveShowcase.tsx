"use client";

import React from "react";
import { motion } from "framer-motion";

const FounderStory = () => {
    return (
        <section className="relative py-32 bg-[#111110] text-white overflow-hidden">

            {/* Grain texture */}
            <div
                className="absolute inset-0 opacity-[0.18] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: "200px 200px",
                }}
            />

            {/* Glow lights */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-400/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-emerald-400/20 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative">

                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">

                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                                alt="Corporate learning session"
                                className="w-full h-[520px] object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        </div>
                    </motion.div>


                    {/* CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4">
                            Founder’s Vision
                        </p>

                        <h2 className="font-serif text-[clamp(42px,5vw,64px)] leading-[1.1] mb-8">
                            Why TeachGrid exists
                        </h2>

                        <p className="text-white/70 text-[17px] leading-relaxed mb-10">
                            We created TeachGrid to make learning more accessible, engaging,
                            and measurable for institutions and organizations. Traditional
                            learning systems often fail to connect educators, learners, and
                            outcomes. TeachGrid bridges that gap by providing a platform that
                            simplifies learning delivery while improving engagement and
                            visibility.
                        </p>

                        <blockquote className="font-serif text-2xl leading-relaxed text-white mb-10">
                            “Our goal with TeachGrid is simple — give educators the tools they
                            need to deliver meaningful learning experiences at scale while
                            keeping learners engaged and motivated.”
                        </blockquote>

                        {/* Founder */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center font-bold">
                                PR
                            </div>

                            <div>
                                <p className="font-semibold text-white">
                                    Prashanth Radhakrishnan
                                </p>
                                <p className="text-sm text-white/50">
                                    Founder & Managing Director, TeachGrid
                                </p>
                            </div>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default FounderStory;