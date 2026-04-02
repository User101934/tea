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



          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative z-10"
          >
            {steps.map((step, i) => {
              const isFirst = i === 0;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative p-6 sm:p-7 md:p-8 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 overflow-hidden border-2 ${
                    isFirst 
                      ? 'bg-white/95 border-indigo-200/80 shadow-[0_32px_64px_-16px_rgba(79,70,229,0.1)]' 
                      : 'bg-white/60 backdrop-blur-xl border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
                  } hover:shadow-[0_45px_100px_-20px_rgba(79,70,229,0.15)] hover:border-indigo-300/60`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-slate-100/20 group-hover:from-white group-hover:to-slate-100 transition-colors duration-500 rounded-[2rem] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8 md:mb-10">
                      {isFirst ? (
                        <div className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-indigo-50/80 border border-indigo-100/30">
                          <div className="flex items-center justify-center size-5 rounded-full bg-white shadow-sm border border-indigo-100/30">
                            <svg className="size-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-indigo-600 font-sans">
                            STEP {step.number}
                          </span>
                        </div>
                      ) : (
                        <span className="text-[10px] font-bold tracking-[0.16em] text-gray-400 group-hover:text-slate-800 transition-colors duration-300 font-sans">
                          STEP {step.number}
                        </span>
                      )}

                      <motion.div
                        className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isFirst ? 'bg-indigo-50/80 shadow-inner' : 'bg-slate-50 border border-slate-100 group-hover:border-slate-300'
                        }`}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: i * 0.2 }}
                          className={`w-2.5 h-2.5 rounded-full ${
                            isFirst ? 'bg-indigo-600 shadow-[0_0_12px_rgba(79,70,229,0.5)]' : 'bg-slate-300 group-hover:bg-slate-600'
                          }`}
                        />
                      </motion.div>
                    </div>

                    <h3
                      className="text-[#111110] text-[18px] md:text-[20px] lg:text-[22px] leading-[1.2] tracking-[-0.03em] font-medium mb-4 transition-all duration-300 min-h-[3rem] flex items-start"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {step.headline}
                    </h3>

                    <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-600 group-hover:text-gray-900 transition-colors font-sans text-justify">
                      {step.body}
                    </p>
                  </div>

                  <div className="relative mt-8 md:mt-10">
                    <div className="absolute top-0 left-0 right-0 h-px border-t border-dashed border-slate-200 group-hover:border-slate-400/30 transition-colors duration-300" />
                    <div className="pt-6">
                      <span className={`inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full font-sans transition-all duration-300 ${
                        isFirst 
                          ? 'bg-slate-100 text-slate-800 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5' 
                          : 'text-gray-500 bg-slate-50 opacity-60 group-hover:opacity-100'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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