"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`;

const CYCLING_WORDS = [
  { text: "smarter",     color: "#5b47e0", underline: "linear-gradient(90deg, #4f46e5, #a855f7)" },
  { text: "faster",      color: "#0284c7", underline: "linear-gradient(90deg, #0ea5e9, #6366f1)" },
  { text: "scalable",    color: "#059669", underline: "linear-gradient(90deg, #059669, #0d9488)" },
  { text: "intelligent", color: "#9333ea", underline: "linear-gradient(90deg, #c026d3, #7c3aed)" },
  { text: "impactful",   color: "#e11d48", underline: "linear-gradient(90deg, #e11d48, #9333ea)" },
];

const glitchShadows = [
  "0px 0px 0px rgba(255,0,0,0), 0px 0px 0px rgba(0,255,255,0)",
  "4px 0px 0px rgba(255,0,0,0.8), -4px 0px 0px rgba(0,255,255,0.8)",
  "-4px 2px 0px rgba(255,0,0,0.8), 4px -2px 0px rgba(0,255,255,0.8)",
  "2px -2px 0px rgba(255,0,0,0.8), -2px 2px 0px rgba(0,255,255,0.8)",
  "0px 0px 0px rgba(255,0,0,0), 0px 0px 0px rgba(0,255,255,0)",
];

const wordVariants = {
  enter: {
    y: 48,
    opacity: 0,
    filter: "blur(6px)",
    textShadow: "0px 0px 0px rgba(255,0,0,0), 0px 0px 0px rgba(0,255,255,0)",
  },
  center: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    textShadow: glitchShadows,
    transition: {
      y: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
      opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
      filter: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
      textShadow: { duration: 0.25, times: [0, 0.25, 0.5, 0.75, 1], delay: 0.2 }
    },
  },
  exit: {
    y: -48,
    opacity: 0,
    filter: "blur(6px)",
    textShadow: "0px 0px 0px rgba(255,0,0,0), 0px 0px 0px rgba(0,255,255,0)",
    transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] as any },
  },
};

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const current = CYCLING_WORDS[wordIndex];

  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap');

        .hero-headline {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: clamp(40px, 6vw, 82px);
          line-height: 1.12;
          letter-spacing: -0.02em;
          text-align: center;
          text-wrap: balance;
          color: #111111;
        }
        @media (max-width: 640px) {
          .hero-headline {
            font-size: clamp(34px, 9vw, 48px);
            line-height: 1.14;
            letter-spacing: -0.015em;
          }
        }

        .hero-line2 {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.22em;
          margin-top: 0.04em;
        }

        .hero-spotlight {
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, rgba(99,102,241,0.09) 0%, rgba(168,85,247,0.05) 40%, transparent 70%);
          pointer-events: none;
          filter: blur(10px);
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* Headline + CTAs */}
        <div className="max-w-[920px] mx-auto text-center mb-12 md:mb-24 flex flex-col items-center relative">

          <div className="hero-spotlight" />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="hero-headline mb-8 px-2 sm:px-4"
          >
            {/* Line 1 */}
            <span style={{ display: "block" }}>AI-powered learning</span>

            {/* Line 2 — "for [WORD] education" */}
            <span className="hero-line2">
              <span>for</span>

              {/* Cycling slot — fixed height, clips animation */}
              <span style={{
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "bottom",
                lineHeight: "inherit",
                height: "1.18em",
                position: "relative",
              }}>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={current.text}
                    variants={wordVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    whileHover={{
                      textShadow: glitchShadows,
                      transition: { duration: 0.25, times: [0, 0.25, 0.5, 0.75, 1] }
                    }}
                    style={{
                      display: "inline-block",
                      color: current.color,
                      position: "relative",
                      whiteSpace: "nowrap",
                      cursor: "default",
                    }}
                  >
                    {current.text}
                    {/* Animated underline bar */}
                    <motion.span
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 2,
                        height: 4,
                        borderRadius: 999,
                        background: current.underline,
                        transformOrigin: "left center",
                        display: "block",
                      }}
                    />
                  </motion.span>
                </AnimatePresence>
              </span>

              <span>education</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[16px] md:text-[19px] text-[#4b5563] mb-10 md:mb-12 max-w-[620px] mx-auto leading-relaxed font-sans px-4 sm:px-6"
          >
            TeachGrid is where powerful AI meets practical education solutions —
            so you can teach and learn smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[280px] sm:max-w-none mx-auto"
          >
            <Link
              href="/demo"
              className="w-full sm:w-auto bg-[#111110] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full text-[15px] md:text-[16px] font-medium hover:bg-black/90 transition-all active:scale-[0.98] text-center"
            >
              Request a demo
            </Link>

            <Link
              href="/platform/features"
              className="text-[15px] md:text-[16px] font-normal text-black hover:text-black transition-all underline decoration-[1px] underline-offset-[10px] decoration-[#cccccc] hover:decoration-black text-center"
            >
              Explore Features
            </Link>
          </motion.div>

        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-[1440px] mx-auto items-stretch mb-10 md:mb-24">

          {/* Card 1 — Dark premium video showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl w-full h-[260px] sm:h-[360px] md:h-[580px] md:flex-[0_0_72%]"
            style={{ background: "#0a0a0f" }}
          >
            {/* Earth at night background */}
            <img
              src="/earth_night.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ opacity: 1, filter: "brightness(0.85) saturate(1.1)" }}
            />
            {/* Dark fade overlay */}
            <div className="absolute inset-0" style={{ background: "rgba(5,5,15,0.18)" }} />

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="absolute top-[-20%] left-[10%] w-[55%] h-[55%] rounded-full blur-[90px] opacity-40"
                style={{ background: "radial-gradient(circle, #6366f1 0%, #4338ca 60%, transparent 100%)" }}
              />
              <div
                className="absolute bottom-[-10%] right-[5%] w-[45%] h-[45%] rounded-full blur-[80px] opacity-30"
                style={{ background: "radial-gradient(circle, #a855f7 0%, #7c3aed 60%, transparent 100%)" }}
              />
            </div>

            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{ backgroundImage: GRAIN, backgroundSize: "150px 150px", opacity: 0.18, mixBlendMode: "overlay" }}
            />

            <div className="absolute inset-0 flex items-center justify-center z-20" style={{ padding: "10% 12%" }}>
              <div
                className="w-full rounded-xl overflow-hidden shadow-[0_32px_80px_-12px_rgba(0,0,0,0.9)] ring-1 ring-white/10"
                style={{
                  transform: "perspective(1200px) rotateX(3deg) rotateY(-1.5deg)",
                  transformOrigin: "center center",
                  aspectRatio: "16/9",
                }}
              >
                <video
                  src="https://assets.jitter.video/product-import-hero-hd-20.mp4"
                  autoPlay loop muted playsInline preload="metadata"
                  className="block w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-30"
              style={{ background: "linear-gradient(to top, #0a0a0f 0%, transparent 100%)" }}
            />
          </motion.div>

          {/* Card 2 */}
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
              style={{ backgroundImage: GRAIN, backgroundSize: "150px 150px", opacity: 0.1, mixBlendMode: "multiply" }}
            />
            <div className="absolute top-8 right-8">
              <div className="bg-white/95 backdrop-blur-xl px-4 py-2.5 rounded-full shadow-lg border border-slate-100">
                <span className="text-xs font-bold text-slate-800 tracking-tight">AI-Powered ✦</span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/90 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-slate-200">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-600 mb-1">Education Ready</p>
                <h3 className="text-[17px] leading-tight text-[#111110]">Impact-driven learning.</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;