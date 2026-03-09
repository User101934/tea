"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-linear-to-b from-indigo-50/50 to-transparent dark:from-indigo-900/10 -z-10 blur-3xl rounded-full" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-50/30 dark:bg-purple-900/5 -z-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/20 dark:bg-blue-900/5 -z-10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-400 mb-10"
        >
          <Sparkles size={14} className="text-indigo-600" />
          <span>Announcing TeachGrid Spark for Enterprises</span>
          <ArrowRight size={14} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-10 text-balance leading-[1.05]"
        >
          AI-Powered Learning Infrastructure for <span className="gradient-text">Smarter Education</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-12 text-balance leading-relaxed"
        >
          Transform how organizations create, deliver, and scale learning with TeachGrid’s intelligent platform. Trusted by leading institutions worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="btn-primary px-10 py-4 text-lg w-full sm:w-auto flex items-center justify-center gap-2">
            Get Started
            <ArrowRight size={18} />
          </button>
          <button className="btn-ghost px-10 py-4 text-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 w-full sm:w-auto">
            Book a Demo
          </button>
        </motion.div>

        {/* Floating Mockup / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 relative max-w-6xl mx-auto group"
        >
          <div className="absolute inset-0 bg-linear-to-r from-indigo-500/20 to-purple-500/20 blur-2xl rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="p-2 rounded-[2rem] bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
            <div className="rounded-[1.5rem] overflow-hidden bg-slate-900 aspect-video relative group/mockup">
              <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-900/90 to-indigo-900/40 flex items-center justify-center">
                {/* Inner Grain for depth */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                <div className="flex flex-col items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/f32bc3e4-3637-45b4-97a7-8620b4aefe83/image-resized-1772182697345.webp?width=8000&height=8000&resize=contain"
                      alt="TeachGrid Logo"
                      className="w-full h-auto object-contain p-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="w-48 h-2 bg-slate-700 rounded-full animate-pulse" />
                    <div className="w-32 h-2 bg-slate-700 rounded-full animate-pulse mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
