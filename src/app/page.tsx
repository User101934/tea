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
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HomeSocialProof />
        <ValueProps />
        <PlatformSection />
        <IndustryCarousel />

        {/* Honeycomb / Integration Grid Section */}
        <section className="relative py-10 md:py-16 overflow-hidden flex flex-col items-center justify-center bg-transparent px-4 snap-start">

          <h1 
            className="relative z-10 max-w-3xl text-center text-[clamp(24px,5vw,56px)] font-medium tracking-tighter mb-10 md:mb-16 lg:mb-20 text-slate-900 leading-tight px-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            The only learning platform you need to{' '}
            <br className="hidden sm:block" />
            <span className="italic text-slate-500">Transform Education</span>
          </h1>

          {/* Icon Grid — responsive */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 relative z-10 w-full max-w-5xl mx-auto">
            <style>{`
              @keyframes spread-float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-12px); }
              }
            `}</style>

            {/* Col 1 */}
            <div className="flex flex-col">
              <IconCard src="https://cdn.simpleicons.org/googleclassroom" delay={0} />
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 -mt-0 md:-mt-4 lg:-mt-10">
              <IconCard src="https://cdn.simpleicons.org/moodle" delay={0.5} />
              <IconCard src="https://cdn.simpleicons.org/instructure" delay={1} />
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 -mt-0 md:-mt-8 lg:-mt-20">
              <IconCard src="https://cdn.simpleicons.org/zoom" delay={1.5} />
              <IconCard src="https://cdn.simpleicons.org/coursera" delay={2} />
              <IconCard src="https://cdn.simpleicons.org/udemy" delay={2.5} />
            </div>

            {/* Col 4 */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 -mt-0 md:-mt-4 lg:-mt-10">
              <IconCard src="https://cdn.simpleicons.org/khanacademy" delay={3} />
              <IconCard src="https://cdn.simpleicons.org/edx" delay={3.5} />
            </div>

            {/* Col 5 */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 -mt-0 md:-mt-8 lg:-mt-20">
              <IconCard src="https://cdn.simpleicons.org/duolingo" delay={4} />
              <IconCard src="https://cdn.simpleicons.org/quizlet" delay={4.5} />
              <IconCard src="https://cdn.simpleicons.org/udacity" delay={5} />
            </div>

            {/* Col 6 */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 -mt-0 md:-mt-4 lg:-mt-10">
              <IconCard src="https://cdn.simpleicons.org/grammarly" delay={5.5} />
              <IconCard src="https://cdn.simpleicons.org/wikipedia" delay={6} />
            </div>

            {/* Col 7 */}
            <div className="flex flex-col">
              <IconCard src="https://cdn.simpleicons.org/googlemeet" delay={6.5} />
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 md:mt-16 w-full relative z-10 px-4">
            <button className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors text-[15px]">
              Get Started Free
            </button>
            <button className="text-slate-500 hover:text-slate-900 flex items-center gap-2 group transition-colors text-[15px]">
              Watch TeachGrid in Action
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        <InteractiveShowcase />
        <PlatformShowcase />
      </main>
    </div>
  );
}

function IconCard({ src, delay = 0 }: { src: string; delay?: number }) {
  return (
    <div style={{ animation: `spread-float 6s ease-in-out infinite`, animationDelay: `${delay}s` }}>
      <div className="group flex size-14 sm:size-16 md:size-20 lg:size-24 items-center justify-center bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 hover:ring-slate-900/10 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:scale-[1.05] cursor-pointer relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-400/0 via-slate-500/0 to-slate-600/0 group-hover:from-slate-400/5 group-hover:via-slate-500/5 group-hover:to-slate-600/5 transition-all duration-500" />
        <img src={src} alt="Logo" className="relative z-10 size-6 sm:size-7 md:size-9 lg:size-10 object-contain transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:-rotate-3" />
      </div>
    </div>
  );
}