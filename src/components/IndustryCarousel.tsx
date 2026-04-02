"use client";
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`;

const Card = ({ image, label, href }: { image: string; label: string; href: string }) => (
    <Link
        href={href}
        className="group/card relative inline-flex h-[289px] w-[289px] rounded-xl md:h-[399px] md:w-[399px] lg:h-[420px] lg:w-[420px] cursor-pointer flex-none snap-center transition-transform duration-500 ease-in-out md:snap-none overflow-hidden"
    >
        <div className="relative h-full w-full overflow-hidden rounded-xl">
            <img
                src={image}
                alt={label}
                className="h-full w-full rounded-xl object-cover p-0 transition-transform duration-300 ease-in-out group-hover/card:scale-[1.2]"
                width="420"
                height="420"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-b-xl bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-8">
            <div className="pt-0">
                <p className="text-[20px] lg:text-[24px] font-medium leading-tight text-white/95">
                    {label}
                </p>
            </div>
            <div className="mt-6 text-white">
                <div className="space-y-3"></div>
            </div>
        </div>
    </Link>
);

const cards = [
    { label: "Course Management", image: "/images/lms/img1.png", href: "/platform/features/smart-learning-management" },
    { label: "Learner Progress", image: "/images/lms/img2.png", href: "/platform/features/intelligent-analytics" },
    { label: "AI Assessments", image: "/images/lms/img3.png", href: "/platform/features/ai-features-ai-agents" },
    { label: "Live Classrooms", image: "/images/lms/img4.png", href: "/platform/features/live-sessions" },
    { label: "Certifications", image: "/images/lms/img5.png", href: "/platform/features/certificates-certificate-designer" },
    { label: "Integrations", image: "/images/lms/img6.png", href: "/platform/features/integrations" },
    { label: "White-label", image: "/images/lms/img7.png", href: "/solutions/white-labelled-solution" },
];

const IndustryCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-20 bg-transparent overflow-hidden snap-start">
            <div className="max-w-[1440px] mx-auto pl-0 pr-4 sm:pr-4 md:pr-6 mb-10 md:mb-12 flex items-center justify-between relative z-10">
                <h2
                    className="text-[clamp(22px,3.5vw,42px)] font-medium tracking-[-0.03em] text-[#111110] leading-[1.1]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >Everything your LMS needs to succeed</h2>
                {/* Navigation Arrows */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => {
                            if (scrollRef.current) {
                                const container = scrollRef.current;
                                const scrollAmount = container.clientWidth * 0.8;
                                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                            }
                        }}
                        className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-[#111110] hover:bg-zinc-50 hover:border-zinc-400 active:scale-95 transition-all duration-300"
                        aria-label="Scroll left"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            if (scrollRef.current) {
                                const container = scrollRef.current;
                                const scrollAmount = container.clientWidth * 0.8;
                                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                            }
                        }}
                        className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-[#111110] hover:bg-zinc-50 hover:border-zinc-400 active:scale-95 transition-all duration-300"
                        aria-label="Scroll right"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 snap-x snap-mandatory no-scrollbar py-4"
                style={{ scrollSnapType: 'x mandatory', scrollPadding: '2rem' }}
            >
                {cards.map((card) => (
                    <Card key={card.label} {...card} />
                ))}
            </div>
        </section>
    );
};

export default IndustryCarousel;
