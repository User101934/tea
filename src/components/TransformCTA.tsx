"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const TransformCTA = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative px-4 pb-20 md:pb-32 mt-12 md:mt-20 bg-transparent overflow-hidden snap-start">
      <div 
        className="max-w-[1400px] mx-auto rounded-[2.5rem] md:rounded-[3.1rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-indigo-200/50 overflow-hidden relative"
        style={{ background: 'linear-gradient(to bottom, #fdfcfb 0%, #eef2ff 100%)' }}
      >
        {/* 🔥 High-Intensity Grain Overlay - 0.9 Opacity */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1.2 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, 
            backgroundSize: '180px',
            opacity: 0.9,
            mixBlendMode: 'multiply'
          }} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">

          {/* Left Content */}
          <div className="p-8 sm:p-12 md:p-16 lg:p-24 relative z-20 text-[#111110]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(32px,4.5vw,56px)] font-medium leading-[1.08] tracking-tight text-[#111110] mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Transform Learning with TeachGrid
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-lg font-sans"
            >
              Experience the future of education with TeachGrid. Create, manage, and deliver AI-powered learning experiences that scale with your organization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <button className="w-full sm:w-auto px-10 py-4.5 bg-[#111110] text-white rounded-full font-semibold text-[15px] hover:bg-black/90 transition-all active:scale-[0.98] shadow-lg shadow-black/5 whitespace-nowrap">
                Get Started Free
              </button>
              <button className="w-full sm:w-auto px-10 py-4.5 bg-white border border-slate-200 text-[#111110] rounded-full font-semibold text-[15px] hover:bg-slate-50 transition-all active:scale-[0.98] flex items-center justify-center gap-3 group whitespace-nowrap">
                Watch TeachGrid in Action
                <Play size={18} fill="currentColor" className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Video Container */}
          <div className="relative group lg:h-full flex items-end justify-end overflow-hidden pt-10 lg:pt-32 lg:pl-10">
            <video
              ref={videoRef}
              src="https://assets.jitter.video/product-import-hero-hd-20.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l border-[#e5e1d3] object-cover pt-3.5 pl-3.5 backdrop-blur-sm shadow-[-20px_-20px_40px_-5px_rgba(0,0,0,0.05)] transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

        </div>

        {/* Subtle Decorative Accents */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
};

export default TransformCTA;
