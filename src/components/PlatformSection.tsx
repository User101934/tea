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
    <section className="relative pb-8 pt-6 md:pb-16 md:pt-8 bg-[#f8f9fa] overflow-hidden border-y border-[#ebebea]">
      {/* Premium Background Glows */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-zinc-200/40 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-200/40 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

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
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-900 font-sans mb-6 inline-flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-zinc-900 block rounded-full" />
            The Process
          </motion.span>

          <h2
            className="text-[clamp(36px,6vw,80px)] leading-[1.05] tracking-[-0.02em] text-[#111110] font-normal mb-8"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Steps to <br />
            <span className="text-zinc-500 italic font-serif relative">
              achieve success.
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-zinc-300 to-zinc-200 origin-left rounded-full"
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
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                d="M0 60C150 130 300 -10 450 60C600 130 750 -10 900 60C1050 130 1200 60 1200 60"
                stroke="url(#lineGradient)"
                strokeWidth="4"
                strokeDasharray="12 12"
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#52525b" />
                  <stop offset="50%" stopColor="#27272a" />
                  <stop offset="100%" stopColor="#52525b" />
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
                className="group relative bg-[#ffffffe6] backdrop-blur-md border border-[#ebebea] p-8 rounded-[2rem] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] hover:border-zinc-300 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/0 via-transparent to-zinc-100/0 group-hover:from-zinc-100/40 group-hover:to-zinc-50/40 transition-colors duration-500 rounded-[2rem] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[11px] font-bold tracking-[0.16em] text-gray-400 group-hover:text-zinc-500 transition-colors duration-300 font-sans">
                      STEP {step.number}
                    </span>
                    {/* Status Indicator */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-zinc-100 flex items-center justify-center text-zinc-800 border border-slate-100 group-hover:border-zinc-300 transition-colors duration-300"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.2 }}
                        className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-zinc-800 transition-colors duration-300 group-hover:shadow-[0_0_8px_rgba(0,0,0,0.15)]" 
                      />
                    </motion.div>
                  </div>

                  <h3
                    className="text-[#111110] text-[26px] leading-[1.2] tracking-[-0.01em] font-normal mb-4 group-hover:text-black transition-colors duration-300"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {step.headline}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-[#4b5563] group-hover:text-[#374151] transition-colors font-sans">
                    {step.body}
                  </p>
                </div>

                <div className="relative z-10 mt-10 pt-6 border-t border-dashed border-[#ebebea] group-hover:border-zinc-300 transition-colors duration-300">
                  <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-slate-500 group-hover:text-zinc-900 bg-slate-50 group-hover:bg-zinc-100 px-3 py-1.5 rounded-full font-sans transition-all duration-300 transform group-hover:-translate-y-0.5 shadow-sm group-hover:shadow-md">
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
          className="relative mt-12 md:mt-16 pt-10 border-t border-[#ebebea] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 cursor-pointer"
            >
              <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <p className="text-[16px] text-[#4b5563] font-sans max-w-md">
              Your journey to smarter education starts with a single step.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/onboarding"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-zinc-200 bg-white hover:border-zinc-900 hover:bg-zinc-900 transition-all duration-300 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] transform hover:-translate-y-1"
            >
              <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#111110] group-hover:text-white transition-colors duration-300 font-sans">
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