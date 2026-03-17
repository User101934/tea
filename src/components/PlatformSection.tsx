"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const pillars = [
  {
    number: '01',
    title: 'Intelligent Management',
    headline: 'All your tools together',
    body: 'TeachGrid brings all your educational tools together. Instantly create, track, and optimize your courses with AI-powered insights right from a single dashboard.',
    stat: 'Unified',
    statLabel: 'Operations',
  },
  {
    number: '02',
    title: 'Collaboration',
    headline: 'Never miss progress',
    body: 'Collaborate with educators and never miss progress. TeachGrid keeps you in sync and ahead.',
    stat: 'Sync',
    statLabel: 'Always Ahead',
  },
  {
    number: '03',
    title: 'Ecosystem',
    headline: 'Integrate. Scale. Teach.',
    body: 'Connect TeachGrid to your favorite tools Linear, Netlify, GitHub, and more. Automate your workflow and focus on what matters: delivering impactful education.',
    stat: 'Native',
    statLabel: 'Integrations',
  },
  {
    number: '04',
    title: 'Scalability',
    headline: 'Learn. Teach. Scale.',
    body: 'Experience the future of education with TeachGrid. Create, manage, and deliver AI-powered learning experiences that scale with your organization.',
    stat: 'Limitless',
    statLabel: 'Scaling',
  },
];

const PlatformSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-40 bg-[#f8f9fa] overflow-hidden border-y border-[#ebebea]">
      {/* Subtle organic background elements instead of harsh tech grids */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[80px] pointer-events-none transform -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

        {/* ── Headline block ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-indigo-600 font-sans mb-6 block">
            Infrastructure
          </span>

          <h2
            className="text-[clamp(36px,6vw,80px)] leading-[1.05] tracking-[-0.02em] text-[#111110] font-normal mb-8"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            The foundation <br />
            <span className="text-gray-400 italic font-serif">education is built on.</span>
          </h2>
          <p className="text-[16px] leading-relaxed text-[#4b5563] font-sans max-w-lg">
            TeachGrid is not just software. It’s the structured, resilient learning infrastructure underlying top institutions, forward-thinking enterprises, and global academies.
          </p>
        </motion.div>

        {/* ── Pillar cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-[#ebebea] p-8 md:p-10 rounded-[2rem] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div>
                {/* Number & Title */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[11px] font-bold tracking-[0.16em] text-gray-400 font-sans">
                    {pillar.number}
                  </span>
                  <div className="h-px w-6 bg-[#ebebea] transition-colors duration-300 group-hover:bg-indigo-200" />
                  <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md font-sans">
                    {pillar.title}
                  </span>
                </div>

                {/* Headline */}
                <h3
                  className="text-[#111110] text-[22px] leading-[1.2] tracking-[-0.01em] font-normal mb-4"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {pillar.headline}
                </h3>

                {/* Body */}
                <p className="text-[14px] leading-relaxed text-[#4b5563] font-sans">
                  {pillar.body}
                </p>
              </div>

              {/* Stat Footer */}
              <div className="mt-10 pt-6 border-t border-[#ebebea]">
                <p className="text-[28px] text-[#111110] font-normal leading-none mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {pillar.stat}
                </p>
                <p className="text-[12px] tracking-wide text-gray-500 font-sans uppercase">
                  {pillar.statLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 pt-10 border-t border-[#ebebea] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <p className="text-[15px] text-[#4b5563] font-sans max-w-md">
            Architected for scale. Loved for simplicity.
          </p>

          <div className="flex items-center gap-6">
            <Link
                href="/platform/features"
                className="group relative inline-flex items-center gap-2"
            >
                <span className="relative">
                    <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#111110] group-hover:text-indigo-600 transition-colors duration-300 font-sans">
                        Platform Tour
                    </span>
                    <span className="absolute -bottom-px left-0 right-0 h-[1.5px] bg-indigo-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 block" />
                </span>
                <svg
                    className="w-3 h-3 text-[#111110] group-hover:text-indigo-600 transition-colors duration-300 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 14 14"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M2 7h10M8 3l4 4-4 4" />
                </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;
