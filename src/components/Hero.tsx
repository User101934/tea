"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`;

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Headline + CTAs — Precise Original Style */}
        <div className="max-w-4xl mx-auto text-center mb-24 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(40px,8vw,100px)] leading-[1.0] tracking-[-0.04em] font-medium text-black mb-8 md:mb-10"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            AI-powered Learning <br className="hidden md:block" />
            for Smarter Education.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[19px] md:text-[21px] text-[#424242] max-w-[580px] mx-auto mb-8 md:mb-14 leading-[1.5] font-sans"
          >
            TeachGrid is where powerful AI meets practical education solutions — so you can
            teach and learn smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-row items-center justify-center gap-6 md:gap-12"
          >
            <Link
              href="/demo"
              className="bg-[#111110] text-white px-8 md:px-10 py-3.5 md:py-4.5 rounded-full text-[16px] md:text-[17px] font-medium hover:bg-black/90 transition-all active:scale-[0.98] font-sans"
            >
              Request a demo
            </Link>
            <Link
              href="/platform/features"
              className="text-[16px] md:text-[17px] font-normal text-black hover:text-black transition-all underline decoration-[1px] underline-offset-[12px] decoration-[#cccccc] hover:decoration-black font-sans"
            >
              Explore Features
            </Link>
          </motion.div>
        </div>

        {/* ── Cards — exact ratio from reference image ────────────────── */}
        {/* Proportions: ~62% Left, ~38% Right. Responsive heights. */}
        <div
          className="flex flex-col md:flex-row gap-4 max-w-[1440px] mx-auto items-stretch mb-12 md:mb-24"
        >

          {/* ── Card 1: Wide primary — matching reference layout ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative rounded-lg overflow-hidden group border border-slate-100 shadow-2xl bg-white w-full h-[400px] md:h-[580px] md:flex-[0_0_72%]"
          >
            {/* Background Image — Modern Platform Abstract */}
            <img
              src="/hero_2.jpeg"
              alt="Intelligent LMS Platform"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />

            {/* Grain overlay for depth */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: GRAIN,
                backgroundSize: '150px 150px',
                opacity: 0.15,
                mixBlendMode: 'overlay',
              }}
            />

            {/* Bottom-left small label (Requested "Collaborative") */}
            <div className="absolute bottom-8 left-8">
              <div className="bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 mb-1">Collaborative</p>
                <h3 className="text-base font-serif text-[#111110]">Deliver learning content at scale.</h3>
              </div>
            </div>
          </motion.div>

          {/* ── Card 2: Narrow portrait — matching reference layout ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative rounded-lg overflow-hidden group border border-slate-100 shadow-2xl bg-slate-50 w-full h-[400px] md:h-[580px] md:flex-1"
          >
            {/* Real photo — Student learning interaction */}
            <img
              src="/hero_1.jpeg"
              alt="Digital Education"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />

            {/* Grain overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: GRAIN,
                backgroundSize: '150px 150px',
                opacity: 0.1,
                mixBlendMode: 'multiply',
              }}
            />

            {/* Top-right floating tag */}
            <div className="absolute top-8 right-8">
              <div className="bg-white/95 backdrop-blur-xl px-4 py-2.5 rounded-full shadow-lg border border-slate-100">
                <span className="text-xs font-bold text-slate-800 tracking-tight">AI-Powered ✦</span>
              </div>
            </div>

            {/* Bottom frosted label (Requested "Education Ready") */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/90 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-slate-200">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 mb-1">Education Ready</p>
                <h3 className="text-[17px] font-serif leading-tight text-[#111110]">
                  Impact-driven learning.
                </h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
