"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ValueProps = () => {
    const props = [
        {
            title: "For Organizations",
            href: "/solutions/organizations",
            description:
                "Deliver scalable, AI-powered training programs tailored to your organization's goals with zero friction setup.",
            svg: (
                <svg viewBox="0 0 72 72" fill="none" stroke="#6366f1" strokeWidth="1.5" className="w-10 h-10">
                    <path d="M36 8 L64 36 L36 64 L8 36 Z" />
                    <path d="M36 18 L54 36 L36 54 L18 36 Z" />
                    <path d="M36 28 L44 36 L36 44 L28 36 Z" />
                </svg>
            ),
        },
        {
            title: "For Colleges & Universities",
            href: "/solutions/schools-colleges-universities",
            description:
                "Empower educators and students with AI-driven content creation, delivery, and assessment tools built for academia.",
            svg: (
                <svg viewBox="0 0 72 72" fill="none" stroke="#10b981" strokeWidth="1.5" className="w-10 h-10">
                    <circle cx="36" cy="36" r="28" />
                    <path d="M18 36 H54" />
                    <path d="M36 18 V54" />
                </svg>
            ),
        },
        {
            title: "For Institutes & Academies",
            href: "/solutions/institutes-academies",
            description:
                "Manage courses, track learner progress, and automate assessments — all from a single intelligent dashboard.",
            svg: (
                <svg viewBox="0 0 72 72" fill="none" stroke="#f59e0b" strokeWidth="1.5" className="w-10 h-10">
                    <rect x="12" y="12" width="48" height="48" rx="8" />
                    <path d="M24 36 L32 44 L48 28" />
                </svg>
            ),
        },
    ];

    return (
        <section className="relative py-40 overflow-hidden bg-white">

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-50/20 blur-[120px] rounded-full -ml-80 -mt-80"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-50/20 blur-[120px] rounded-full -mr-80 -mb-80"></div>

            <div className="max-w-7xl mx-auto px-10 relative">

                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-32"
                >
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-600 font-sans mb-6 block">
                        Our Vision
                    </span>
                    <h2 
                      className="text-[clamp(44px,6vw,80px)] leading-[1.05] tracking-[-0.02em] text-[#111110] font-normal"
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                        Trusted. Flexible. <br /> Built for Education.
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {props.map((prop, index) => (
                        <motion.div
                            key={prop.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative p-12 rounded-[2.5rem] border border-[#ebebea] bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden cursor-pointer"
                        >
                            {/* Full-card link overlay */}
                            <Link href={prop.href} className="absolute inset-0 z-20" aria-label={`Learn more about ${prop.title}`} />

                            {/* Spotlight glow simulation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 h-full flex flex-col">
                                {/* Icon container */}
                                <div className="w-16 h-16 mb-10 rounded-[1.25rem] bg-slate-50 flex items-center justify-center group-hover:bg-white group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                                    {prop.svg}
                                </div>
                                
                                <h3 
                                  className="text-[28px] mb-5 text-[#111110] leading-[1.2] tracking-[-0.01em] font-normal"
                                  style={{ fontFamily: "'DM Serif Display', serif" }}
                                >
                                    {prop.title}
                                </h3>
                                
                                <p className="text-[#4b5563] text-[16px] leading-relaxed mb-10 font-sans flex-grow">
                                    {prop.description}
                                </p>

                                <Link
                                    href={prop.href}
                                    className="inline-flex items-center gap-2 text-[14px] font-bold text-indigo-600 font-sans group/link"
                                >
                                    <span className="border-b border-indigo-100 group-hover/link:border-indigo-600 transition-colors">
                                        Learn more
                                    </span>
                                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Subtle noise/grain texture simulation for that premium feel */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}></div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ValueProps;