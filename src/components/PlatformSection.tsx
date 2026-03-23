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
    <section className="relative pt-10 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-transparent snap-start">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-4 md:px-6 relative z-10">

        {/* Headline block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-8 md:mb-12 max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 font-sans mb-6 inline-flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-indigo-600 block rounded-full" />
            The Process
          </motion.span>

          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(22px, 3.5vw, 42px)',
              lineHeight: 1.25,
              letterSpacing: '-0.025em',
              color: '#111110',
              marginBottom: 8
            }}
          >
            Steps to achieve success.
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">

          {/* Connecting Line — desktop only */}
          <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 hidden lg:block pointer-events-none z-0">
            <svg
              className="w-full h-full opacity-80"
              viewBox="0 0 1200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                d="M0 60C150 130 300 -10 450 60C600 130 750 -10 900 60C1050 130 1200 60 1200 60"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeDasharray="12 12"
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#111110" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#111110" stopOpacity="1" />
                  <stop offset="100%" stopColor="#111110" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative z-10"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/60 backdrop-blur-xl border border-white p-5 md:p-6 rounded-[1.75rem] md:rounded-[2rem] flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:border-slate-200 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-slate-100/20 group-hover:from-white group-hover:to-slate-100 transition-colors duration-500 rounded-[1.75rem] md:rounded-[2rem] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5 md:mb-6">
                    <span className="text-[11px] font-bold tracking-[0.16em] text-gray-400 group-hover:text-slate-800 transition-colors duration-300 font-sans">
                      STEP {step.number}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-50 border border-slate-100 group-hover:border-slate-300 flex items-center justify-center text-slate-500 transition-colors duration-300 shadow-sm"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.2 }}
                        className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-slate-700 transition-colors duration-300 group-hover:shadow-[0_0_8px_rgba(51,65,85,0.4)]"
                      />
                    </motion.div>
                  </div>

                  <h3
                    className="text-[#111110] text-[22px] md:text-[24px] leading-[1.2] tracking-[-0.01em] font-medium mb-3 md:mb-4 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {step.headline}
                  </h3>

                  <p className="text-[14px] md:text-[14px] leading-relaxed text-gray-600 group-hover:text-gray-900 transition-colors font-sans">
                    {step.body}
                  </p>
                </div>

                <div className="relative mt-6 md:mt-8 pt-4 md:pt-5 border-t border-dashed border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
                  <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-500 group-hover:text-slate-800 bg-slate-100 group-hover:bg-slate-200 px-3 py-1.5 rounded-full font-sans transition-all duration-300 transform group-hover:-translate-y-0.5 shadow-sm group-hover:shadow-md">
                    {step.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative mt-8 md:mt-10 pt-6 md:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 md:gap-8"
        >
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <p className="text-[14px] md:text-[16px] text-gray-600 font-sans max-w-md">
              Your journey to smarter education starts with a single step.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/onboarding"
              className="group relative inline-flex items-center gap-3 px-6 md:px-7 py-3 md:py-3.5 rounded-full border border-slate-200 bg-white hover:bg-[#111110] hover:border-[#111110] transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transform hover:-translate-y-1"
            >
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#111110] group-hover:text-white transition-colors duration-300 font-sans">
                Start Now
              </span>
              <motion.svg
                className="w-4 h-4 text-[#111110] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
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