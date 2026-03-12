"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const PlatformSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Full width */}
      <img
        src="/platform.jpeg"
        alt="TeachGrid Platform"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content - Centered */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white leading-[1.0] mb-12 tracking-[-0.03em] font-normal"
          style={{ 
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(44px, 7vw, 92px)',
          }}
        >
          The all-in-one AI platform <br className="hidden md:block" /> for impactful education.
        </motion.h2>
        
        <Link href="/platform/features">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white text-black rounded-full px-12 py-5 text-lg font-semibold hover:bg-slate-100 transition-all active:scale-[0.98]"
          >
            Explore TeachGrid
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default PlatformSection;
