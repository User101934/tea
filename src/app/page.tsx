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
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HomeSocialProof />
        <ValueProps />
        <PlatformSection />
        <IndustryCarousel />
        <PlatformShowcase />
        <InteractiveShowcase />

        {/* Final CTA — Dark grained section */}
        <section className="relative py-40 overflow-hidden" style={{ backgroundColor: '#0f0e0d' }}>

          {/* Professional LMS background image — grayscale + high contrast */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=85')`,
              filter: 'grayscale(100%) contrast(1.1) brightness(0.28)',
            }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(15,14,13,0.0) 0%, rgba(15,14,13,0.55) 60%, rgba(15,14,13,0.92) 100%)',
            }}
          />

          {/* Grain texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.28,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
              backgroundSize: '140px 140px',
            }}
          />

          {/* Bottom fade into footer */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #111110)' }}
          />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 text-center">

            {/* Headline only */}
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight text-white mb-14 leading-[1.05]">
              Ready to transform <br className="hidden md:block" /> your learning experience?
            </h2>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                className="px-12 py-5 text-base rounded-full font-semibold transition-all active:scale-[0.98]"
                style={{ backgroundColor: '#ffffff', color: '#0f0e0d' }}
              >
                Get Started Free
              </button>
              <button className="text-base font-medium text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                Watch TeachGrid in Action
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}