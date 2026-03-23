"use client";
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`;

const Card = ({ image, label, href }: { image: string; label: string; href: string }) => (
    <Link
        href={href}
        className="flex-shrink-0 snap-start rounded-2xl overflow-hidden relative group cursor-pointer block"
        style={{ width: '240px', height: '300px' }}
    >
        <img
            src={image}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(145deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.0) 50%)' }}
        />
        <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: GRAIN, backgroundSize: '150px 150px', opacity: 0.15, mixBlendMode: 'overlay' }}
        />
        <p className="absolute top-4 left-4 text-white text-[14px] font-semibold leading-tight drop-shadow-sm">
            {label}
        </p>
    </Link>
);

const cards = [
    { label: "Course Management", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=85", href: "/platform/features/smart-learning-management" },
    { label: "Learner Progress", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=85", href: "/platform/features/intelligent-analytics" },
    { label: "AI Assessments", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=85", href: "/platform/features/ai-features-ai-agents" },
    { label: "Live Classrooms", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=85", href: "/platform/features/live-sessions" },
    { label: "Certifications", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=85", href: "/platform/features/certificates-certificate-designer" },
    { label: "Integrations", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=85", href: "/platform/features/integrations" },
    { label: "White-label", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=85", href: "/solutions/white-labelled-solution" },
];

const IndustryCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    return (
        <section className="relative pt-10 pb-16 md:pt-12 md:pb-20 bg-transparent overflow-hidden snap-start">
            <div className="max-w-[1440px] mx-auto pl-0 pr-4 sm:pr-4 md:pr-6 mb-6 md:mb-8 flex items-end justify-between relative z-10">
                <h2
                    className="text-[clamp(22px,3.5vw,42px)] font-medium tracking-[-0.03em] text-[#111110] leading-[1.1]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >Everything your LMS needs to succeed</h2>
                {/* Scroll progress bar — desktop only */}
                <div className="hidden md:flex h-[3px] w-48 bg-slate-100 rounded-full relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-[#111110] rounded-full"
                        style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
                    />
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-3 md:gap-4 overflow-x-auto px-6 snap-x snap-mandatory no-scrollbar"
            >
                {cards.map((card) => (
                    <Card key={card.label} {...card} />
                ))}
            </div>
        </section>
    );
};

export default IndustryCarousel;
