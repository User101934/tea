"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { GraduationCap, Library, Building2 } from "lucide-react";

const ValueProps = () => {
    const props = [
        {
            title: "Colleges & Universities",
            href: "/solutions/schools-colleges-universities",
            description:
                "Empower educators and students with AI-driven content creation, delivery, and assessment tools built for academia.",
            icon: <GraduationCap size={28} className="text-emerald-500" strokeWidth={1.5} />,
        },
        {
            title: "Training Institutes & Academies",
            href: "/solutions/institutes-academies",
            description:
                "Manage courses, track learner progress, and automate assessments — all from a single intelligent dashboard.",
            icon: <Library size={28} className="text-amber-500" strokeWidth={1.5} />,
        },
        {
            title: "Organizations",
            href: "/solutions/organizations",
            description:
                "Deliver scalable, AI-powered training programs tailored to your organization's goals with zero friction setup.",
            icon: <Building2 size={28} className="text-zinc-600" strokeWidth={1.5} />,
        },
    ];

    return (
        <section className="relative pt-10 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-transparent snap-start">
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

            <div className="max-w-[1440px] mx-auto px-4 sm:px-4 md:px-6 relative">
                {/* Section title */}
                <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-900 font-sans mb-3 md:mb-4 block">
                        Our Vision
                    </span>
                    <h2
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 'clamp(20px, 3.2vw, 38px)',
                            lineHeight: 1.25,
                            letterSpacing: '-0.025em',
                            color: '#111110',
                            marginBottom: 8
                        }}
                    >
                        Trusted Flexible Built for Education.
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
                    {props.map((prop, index) => (
                        <motion.div
                            key={prop.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative p-6 sm:p-8 md:p-8 lg:p-10 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2rem] border border-[#ebebea] bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden cursor-pointer"
                        >
                            <Link href={prop.href} className="absolute inset-0 z-20" aria-label={`Learn more about ${prop.title}`} />
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/5 to-zinc-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 h-full flex flex-col">
                                {/* Icon */}
                                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-5 md:mb-6 lg:mb-8 rounded-[1.1rem] bg-zinc-50 flex items-center justify-center group-hover:bg-white group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                                    {prop.icon}
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-[20px] md:text-[22px] lg:text-[26px] mb-3 md:mb-4 text-[#111110] leading-[1.2] tracking-[-0.02em] font-medium"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    {prop.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#4b5563] text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed mb-6 md:mb-8 font-sans flex-grow">
                                    {prop.description}
                                </p>

                                {/* Learn more */}
                                <Link
                                    href={prop.href}
                                    className="learn-more-link relative z-30 inline-flex items-center gap-2 self-start transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    <span className="relative">
                                        <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#111110] group-hover:text-black transition-colors duration-300 font-sans">
                                            Explore
                                        </span>
                                        <span className="lm-bar absolute -bottom-px left-0 right-0 h-[1.5px] bg-black block" />
                                    </span>

                                    <svg
                                        className="lm-arrow w-3 h-3 text-[#111110] group-hover:text-black transition-colors duration-300 flex-shrink-0"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M2 7h10M8 3l4 4-4 4" />
                                    </svg>
                                </Link>
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