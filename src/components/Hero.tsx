"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`;

const CYCLING_WORDS = [
  { text: "AI-driven" },
  { text: "Intelligent" },
  { text: "Scalable" },
  { text: "Modern" },
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const i = loopNum % CYCLING_WORDS.length;
    const fullText = CYCLING_WORDS[i].text;

    const handleType = () => {
      const nextText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(nextText);

      if (!isDeleting && nextText === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      } else {
        setTypingSpeed(isDeleting ? 70 : 150);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-20 bg-[#f8f9fb] overflow-hidden snap-start">
      <style>{`
        .hero-headline {
          font-weight: 400;
          font-size: clamp(36px, 6.5vw, 86px);
          line-height: 1.08;
          letter-spacing: -0.01em;
          text-align: center;
          text-wrap: balance;
          color: #111111;
          font-style: normal; /* Removed italics */
        }

        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-spotlight {
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, rgba(148,163,184,0.08) 0%, rgba(148,163,184,0.04) 40%, transparent 70%);
          pointer-events: none;
          filter: blur(10px);
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="max-w-[1050px] mx-auto text-center mb-12 md:mb-24 flex flex-col items-center relative">
          <div className="hero-spotlight" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="hero-headline mb-8 px-2 sm:px-4"
          >
            <span className="flex flex-wrap justify-center items-center gap-x-[0.3em]">
              <motion.span
                layout="size"
                transition={{ duration: 0.1, ease: "linear" }}
                className="relative flex items-center justify-center px-4 py-1.5 sm:px-6 sm:py-2.5 bg-white/80 border border-black/[0.04] rounded-xl sm:rounded-2xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.03)] backdrop-blur-md mr-1"
              >
                <motion.span
                  layout="position"
                  className="text-[#111111] font-semibold tracking-tight whitespace-nowrap"
                >
                  {displayText}
                  <span
                    className="inline-block w-[2px] h-[0.85em] bg-indigo-600/80 ml-1.5"
                    style={{ animation: 'cursor-blink 1.2s step-end infinite' }}
                  />
                </motion.span>
              </motion.span>
              <span>learning &</span>
            </span>

            <span className="block mt-1 sm:mt-2">
              teaching infrastructure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[16px] md:text-[19px] text-[#4b5563] mb-10 md:mb-12 max-w-[620px] mx-auto leading-relaxed font-sans px-4 sm:px-6"
          >
            TeachGrid is where powerful AI meets practical infrastructure solutions -
            so you can deliver impactful learning & teaching with intelligence.
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
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-white/5 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5),0_20px_40px_-10px_rgba(0,0,0,0.3)] w-full h-[260px] sm:h-[360px] md:h-[580px] md:flex-[0_0_72%]"
            style={{ background: "#0a0a0f" }}
          >
            <img src="/earth_night.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 1, filter: "brightness(0.85) saturate(1.1)" }} />
            <div className="absolute inset-0" style={{ background: "rgba(5,5,15,0.18)" }} />

            {/* Top Light Fade to video top (semi-transparent) */}
            <div className="absolute top-0 left-0 right-0 h-[30%] pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)" }} />
            {/* Bottom Light Fade to video bottom (semi-transparent) */}
            <div className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none z-10" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)" }} />
            <div className="absolute inset-0 flex items-center justify-center z-20" style={{ padding: "6% 8%", md: "10% 12%" } as any}>
              <div className="w-full rounded-xl overflow-hidden shadow-[0_32px_80px_-12px_rgba(0,0,0,0.9)] ring-1 ring-white/10" style={{ transform: "perspective(1200px) rotateX(3deg) rotateY(-1.5deg)", transformOrigin: "center center", width: "612px", height: "400px", maxWidth: "100%" }}>
                <video src="https://assets.jitter.video/product-import-hero-hd-20.mp4" autoPlay loop muted playsInline preload="metadata" className="block w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-30" style={{ background: "linear-gradient(to top, #0a0a0f 0%, transparent 100%)" }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative rounded-lg overflow-hidden group border border-slate-100 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5),0_20px_40px_-10px_rgba(0,0,0,0.3)] bg-slate-50 w-full h-[260px] sm:h-[360px] md:h-[580px] md:flex-1"
          >
            <img src="/hero_1.jpeg" alt="Digital Education" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]" />

            {/* Top Light Fade */}
            <div className="absolute top-0 left-0 right-0 h-[30%] pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)" }} />
            {/* Bottom Light Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none z-10" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)" }} />
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