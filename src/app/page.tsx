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
        <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-blue-50/50 via-white to-orange-50/50">

          <h1 className="relative z-10 max-w-3xl text-center text-5xl font-medium tracking-tighter md:text-6xl mb-24 text-slate-900">
            The only learning platform you need to <br />
            <span className="italic font-serif text-slate-500">Transform Education</span>
          </h1>

          {/* The Grid Container - Matching the staggered layout in your image */}
          <div className="flex items-center justify-center gap-6 md:gap-10">

            {/* Column 1 (Single Icon) */}
            <div className="flex flex-col">
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg" />
            </div>

            {/* Column 2 (Two Icons) */}
            <div className="flex flex-col gap-16 -mt-8">
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg" />
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg" />
            </div>

            {/* Column 3 (Three Icons - Center) */}
            <div className="flex flex-col gap-16 -mt-16">
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg" />
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/laravel-icon.svg" />
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg" />
            </div>

            {/* Column 4 (Two Icons) */}
            <div className="flex flex-col gap-16 -mt-8">
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg" />
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg" />
            </div>

            {/* Column 5 (Three Icons) */}
            <div className="flex flex-col gap-16 -mt-16">
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg" />
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-icon.svg" />
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nike-icon.svg" />
            </div>

            {/* Column 6 (Two Icons) */}
            <div className="flex flex-col gap-16 -mt-8">
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg" />
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg" />
            </div>

            {/* Column 7 (Single Icon) */}
            <div className="flex flex-col">
              <IconCard src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg" />
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-32">
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
function IconCard({ src }: { src: string }) {
  return (
    <div className="flex size-24 md:size-28 items-center justify-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 transition-transform hover:scale-105">
      <img src={src} alt="Logo" className="size-10 md:size-12 object-contain" />
    </div>
  );
}
