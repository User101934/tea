import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeSocialProof from '@/components/HomeSocialProof';
import ValueProps from '@/components/ValueProps';
import PlatformSection from '@/components/PlatformSection';
import IndustryCarousel from '@/components/IndustryCarousel';
import PlatformShowcase from '@/components/PlatformShowcase';
import InteractiveShowcase from '@/components/InteractiveShowcase';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HomeSocialProof />
        <ValueProps />
        <PlatformSection />
        <IndustryCarousel />

        {/* --- EXACT REPLICA OF THE SPREAD HONEYCOMB GRID --- */}
        <section className="relative py-20 md:py-24 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-blue-50/50 via-white to-orange-50/50">

          <h1 className="relative z-10 max-w-3xl text-center text-5xl font-medium tracking-tighter md:text-6xl mb-24 md:mb-32 text-slate-900">
            The only learning platform you need to <br />
            <span className="italic font-serif text-slate-500">Transform Education</span>
          </h1>

          {/* The Grid Container - Matching the staggered layout in your image */}
          {/* The Grid Container - Responsive wrap to prevent overflow on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 relative z-10 w-full max-w-7xl mx-auto px-4">
            <style>{`
              @keyframes spread-float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-12px); }
              }
            `}</style>

            {/* Column 1 (Single Icon) */}
            <div className="flex flex-col mb-4 md:mb-0">
              <IconCard src="https://cdn.simpleicons.org/googleclassroom" delay={0} />
            </div>

            {/* Column 2 (Two Icons) */}
            <div className="flex flex-col gap-8 md:gap-10 -mt-0 md:-mt-6 lg:-mt-10 mb-4 md:mb-0">
              <IconCard src="https://cdn.simpleicons.org/moodle" delay={0.5} />
              <IconCard src="https://cdn.simpleicons.org/instructure" delay={1} />
            </div>

            {/* Column 3 (Three Icons - Center) */}
            <div className="flex flex-col gap-8 md:gap-10 -mt-0 md:-mt-12 lg:-mt-20 mb-4 md:mb-0">
              <IconCard src="https://cdn.simpleicons.org/zoom" delay={1.5} />
              <IconCard src="https://cdn.simpleicons.org/coursera" delay={2} />
              <IconCard src="https://cdn.simpleicons.org/udemy" delay={2.5} />
            </div>

            {/* Column 4 (Two Icons) */}
            <div className="flex flex-col gap-8 md:gap-10 -mt-0 md:-mt-6 lg:-mt-10 mb-4 md:mb-0">
              <IconCard src="https://cdn.simpleicons.org/khanacademy" delay={3} />
              <IconCard src="https://cdn.simpleicons.org/edx" delay={3.5} />
            </div>

            {/* Column 5 (Three Icons) */}
            <div className="flex flex-col gap-8 md:gap-10 -mt-0 md:-mt-12 lg:-mt-20 mb-4 md:mb-0">
              <IconCard src="https://cdn.simpleicons.org/duolingo" delay={4} />
              <IconCard src="https://cdn.simpleicons.org/quizlet" delay={4.5} />
              <IconCard src="https://cdn.simpleicons.org/udacity" delay={5} />
            </div>

            {/* Column 6 (Two Icons) */}
            <div className="flex flex-col gap-8 md:gap-10 -mt-0 md:-mt-6 lg:-mt-10 mb-4 md:mb-0">
              <IconCard src="https://cdn.simpleicons.org/grammarly" delay={5.5} />
              <IconCard src="https://cdn.simpleicons.org/wikipedia" delay={6} />
            </div>

            {/* Column 7 (Single Icon) */}
            <div className="flex flex-col">
              <IconCard src="https://cdn.simpleicons.org/googlemeet" delay={6.5} />
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20 md:mt-24">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors">
              Get Started Free
            </button>
            <button className="text-slate-500 hover:text-slate-900 flex items-center gap-2 group transition-colors">
              Watch TeachGrid in Action
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        <InteractiveShowcase />
        <PlatformShowcase />
      </main>
    </div>
  );
}

// Exact Icon Card styling from the image: Large white rounded squares with soft shadows
function IconCard({ src, delay = 0 }: { src: string; delay?: number }) {
  return (
    <div style={{ animation: `spread-float 6s ease-in-out infinite`, animationDelay: `${delay}s` }}>
      <div className="group flex size-16 md:size-20 lg:size-24 items-center justify-center bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 hover:ring-slate-900/10 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:scale-[1.05] cursor-pointer relative overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-400/0 via-slate-500/0 to-slate-600/0 group-hover:from-slate-400/5 group-hover:via-slate-500/5 group-hover:to-slate-600/5 transition-all duration-500" />

        <img src={src} alt="Logo" className="relative z-10 size-7 md:size-9 lg:size-10 object-contain transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:-rotate-3" />
      </div>
    </div>
  );
}