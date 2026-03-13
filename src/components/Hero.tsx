"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`;

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">
      {/* Cohere-matching serif headline font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .hero-headline {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: clamp(52px, 8.5vw, 110px);
          line-height: 1.12;
          letter-spacing: -0.01em;
          color: #0a0a0a;
        }
        @media (max-width: 640px) {
          .hero-headline {
            font-size: clamp(42px, 11vw, 64px);
            line-height: 1.13;
            letter-spacing: -0.005em;
          }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        {/* Headline + CTAs */}
        <div className="max-w-6xl mx-auto text-center mb-10 md:mb-24 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-headline mb-6 md:mb-10 px-2 sm:px-4"
          >
            AI-powered Learning{' '}
            <br className="hidden md:block" />
            for Smarter Education.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[15px] md:text-[19px] text-[#4b5563] mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed font-sans px-4 sm:px-6"
          >
            TeachGrid is where powerful AI meets practical education solutions —{' '}
            so you can teach and learn smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 w-full max-w-[280px] sm:max-w-none mx-auto"
          >
            <Link
              href="/demo"
              className="w-full sm:w-auto bg-[#111110] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full text-[15px] md:text-[16px] font-medium hover:bg-black/90 transition-all active:scale-[0.98] font-sans text-center"
            >
              Request a demo
            </Link>
            <Link
              href="/platform/features"
              className="text-[15px] md:text-[16px] font-normal text-black hover:text-black transition-all underline decoration-[1px] underline-offset-[10px] decoration-[#cccccc] hover:decoration-black font-sans text-center"
            >
              Explore Features
            </Link>
          </motion.div>
        </div>

        {/* Cards — responsive: stack on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-[1440px] mx-auto items-stretch mb-10 md:mb-24">
          {/* Card 1: Wide primary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative rounded-lg overflow-hidden group border border-slate-100 shadow-2xl bg-white w-full h-[260px] sm:h-[360px] md:h-[580px] md:flex-[0_0_72%]"
          >
            <img
              src="/hero_2.jpeg"
              alt="Intelligent LMS Platform"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: GRAIN,
                backgroundSize: '150px 150px',
                opacity: 0.15,
                mixBlendMode: 'overlay',
              }}
            />
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
              <div className="bg-white/80 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-white/20">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 mb-1">Collaborative</p>
                <h3 className="text-sm sm:text-base font-serif text-[#111110]">Deliver learning content at scale.</h3>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Narrow portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative rounded-lg overflow-hidden group border border-slate-100 shadow-2xl bg-slate-50 w-full h-[260px] sm:h-[360px] md:h-[580px] md:flex-1"
          >
            <img
              src="/hero_1.jpeg"
              alt="Digital Education"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: GRAIN,
                backgroundSize: '150px 150px',
                opacity: 0.1,
                mixBlendMode: 'multiply',
              }}
            />
            <div className="absolute top-5 right-5 sm:top-8 sm:right-8">
              <div className="bg-white/95 backdrop-blur-xl px-4 py-2.5 rounded-full shadow-lg border border-slate-100">
                <span className="text-xs font-bold text-slate-800 tracking-tight">AI-Powered ✦</span>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="bg-white/90 backdrop-blur-xl px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl border border-slate-200">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 mb-1">Education Ready</p>
                <h3 className="text-[15px] sm:text-[17px] font-serif leading-tight text-[#111110]">
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
