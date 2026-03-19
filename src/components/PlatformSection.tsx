"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'System Setup',
    headline: 'Initialize Grid',
    body: 'Instantly provision your TeachGrid environment. Configure institutional parameters and define AI-assisted learning trajectories.',
    stat: 'Fast',
    statLabel: 'Setup',
  },
  {
    number: '02',
    title: 'Data Integration',
    headline: 'Sync Knowledge',
    body: 'Seamlessly ingest existing curriculum data. Our proprietary AI automatically analyzes and structures your educational assets.',
    stat: 'Seamless',
    statLabel: 'Connectivity',
  },
  {
    number: '03',
    title: 'Course Deployment',
    headline: 'Deploy & Engage',
    body: 'Launch hyper-personalized learning modules to your students. Track cognitive engagement through real-time telemetry.',
    stat: 'Live',
    statLabel: 'Deployment',
  },
  {
    number: '04',
    title: 'Global Scaling',
    headline: 'Scale Impact',
    body: 'Expand your educational reach globally. Leverage predictive analytics to continually refine and optimize learning outcomes.',
    stat: 'Infinite',
    statLabel: 'Growth',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

const PlatformSection = () => {
  return (
    <section className="relative pb-12 pt-10 md:pb-24 md:pt-16 overflow-hidden border-y border-white/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/pl_2.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

        {/* Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* ── Headline block ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/80 font-sans mb-6 inline-flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-white/60 block rounded-full" />
            The Process
          </motion.span>

          <h2
            className="text-[clamp(40px,6vw,86px)] leading-[1.05] tracking-[-0.02em] text-white font-normal mb-8"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Steps to <br />
            <span className="text-white/60 italic relative">
              achieve success.
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-white/30 to-white/10 origin-left rounded-full"
              />
            </span>
          </h2>
        </motion.div>

        {/* ── Steps Grid with Connecting Line ── */}
        <div className="relative">

          {/* ── Animated Connecting Line ── */}
          <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 hidden lg:block pointer-events-none z-0">
            <svg
              className="w-full h-full drop-shadow-sm"
              viewBox="0 0 1200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                d="M0 60C150 130 300 -10 450 60C600 130 750 -10 900 60C1050 130 1200 60 1200 60"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeDasharray="12 12"
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-black/15 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] hover:border-white/25 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 group-hover:from-white/10 group-hover:to-white/10 transition-colors duration-500 rounded-[2rem] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[11px] font-bold tracking-[0.16em] text-white/40 group-hover:text-white/60 transition-colors duration-300 font-sans">
                      STEP {step.number}
                    </span>
                    {/* Status Indicator */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:border-white/20 transition-colors duration-300"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.2 }}
                        className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-300 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                      />
                    </motion.div>
                  </div>

                  <h3
                    className="text-white text-[26px] leading-[1.2] tracking-[-0.01em] font-medium mb-4 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {step.headline}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-white/70 group-hover:text-white/90 transition-colors font-sans">
                    {step.body}
                  </p>
                </div>

                <div className="relative z-10 mt-10 pt-6 border-t border-dashed border-white/10 group-hover:border-white/20 transition-colors duration-300">
                  <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-white/60 group-hover:text-white bg-white/5 group-hover:bg-white/10 px-3 py-1.5 rounded-full font-sans transition-all duration-300 transform group-hover:-translate-y-0.5 shadow-sm group-hover:shadow-md">
                    {step.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative mt-12 md:mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0 cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <p className="text-[16px] text-white/70 font-sans max-w-md">
              Your journey to smarter education starts with a single step.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/onboarding"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:border-white hover:bg-white transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] transform hover:-translate-y-1"
            >
              <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-white group-hover:text-black transition-colors duration-300 font-sans">
                Start Now
              </span>
              <motion.svg
                className="w-4 h-4 text-white group-hover:text-black transition-all duration-300 transform group-hover:translate-x-1"
                fill="none" viewBox="0 0 14 14" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 7h10M8 3l4 4-4 4" />
              </motion.svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;