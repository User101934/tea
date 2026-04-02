"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Library, Building2, GraduationCap, Landmark } from "lucide-react";

const ValueProps = () => {
    const props = [
        {
            title: "Colleges & Universities",
            href: "/solutions/schools-colleges-universities",
            description:
                "Empower educators and students with AI-driven content creation, delivery, and assessment tools built for academia.",
            icon: <GraduationCap size={28} className="text-indigo-600" strokeWidth={1.5} />,
        },
        {
            title: "Training Institutes & Academies",
            href: "/solutions/institutes-academies",
            description:
                "Manage courses, track learner progress, and automate assessments — all from a single intelligent dashboard.",
            icon: <Landmark size={28} className="text-indigo-600" strokeWidth={1.5} />,
        },
        {
            title: "Organizations",
            href: "/solutions/organizations",
            description:
                "Deliver scalable, AI-powered training programs tailored to your organization's goals with zero friction setup.",
            icon: <Building2 size={28} className="text-indigo-600" strokeWidth={1.5} />,
        },
    ];

    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 lg:pt-64 lg:pb-52 overflow-hidden bg-transparent snap-start">
            <style>{`
                @keyframes arrow-shoot {
                    0%   { transform: translateX(0);    opacity: 1; }
                    40%  { transform: translateX(8px);  opacity: 0; }
                    41%  { transform: translateX(-6px); opacity: 0; }
                    100% { transform: translateX(0);    opacity: 1; }
                }
                .group:hover .lm-arrow {
                    animation: arrow-shoot 0.42s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .lm-bar {
                    transform-origin: left center;
                    transform: scaleX(0);
                    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .group:hover .lm-bar {
                    transform: scaleX(1);
                }
            `}</style>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
                {/* Section title */}
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                    <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-zinc-900 font-sans mb-4 md:mb-5 block">
                        Our Vision
                    </span>
                    <h2
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(26px, 4.5vw, 52px)',
                            lineHeight: 1.15,
                            letterSpacing: '-0.03em',
                            color: '#111110',
                            marginBottom: 8
                        }}
                    >
                        Trusted Flexible Built for Education.
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
                    {props.map((prop, index) => (
                        <motion.div
                            key={prop.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative px-6 sm:px-8 md:px-10 py-8 lg:py-10 rounded-[2.5rem] border-2 border-indigo-200/80 bg-white/95 hover:shadow-[0_45px_100px_-20px_rgba(79,70,229,0.12)] hover:border-indigo-300/60 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full"
                        >
                            <Link href={prop.href} className="absolute inset-0 z-20" aria-label={`Learn more about ${prop.title}`} />
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-indigo-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 h-full flex flex-col">

                                {/* Icon */}
                                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 mb-6 md:mb-8 flex-shrink-0 self-start rounded-[1rem] bg-zinc-50 flex items-center justify-center group-hover:bg-white group-hover:scale-105 group-hover:shadow-sm transition-all duration-300">
                                    {prop.icon}
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-[18px] md:text-[20px] lg:text-[22px] mb-3 md:mb-5 text-[#111110] leading-[1.2] tracking-[-0.03em] font-medium min-h-[3rem] flex items-start"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    {prop.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#4b5563] text-[13px] md:text-[14px] leading-relaxed mb-8 md:mb-10 font-sans flex-grow text-justify">
                                    {prop.description}
                                </p>

                                {/* Simple Explore Link */}
                                <div className="relative mt-2 md:mt-4">
                                    <Link
                                        href={prop.href}
                                        className="inline-flex items-center gap-2 group/link"
                                    >
                                        <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#111110] border-b-2 border-black/0 group-hover/link:border-black transition-all duration-300 font-sans">
                                            EXPLORE
                                        </span>
                                        <svg
                                            className="w-3.5 h-3.5 text-[#111110] transition-transform duration-300 group-hover/link:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2 7h10M8 3l4 4-4 4" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Grain texture */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProps;