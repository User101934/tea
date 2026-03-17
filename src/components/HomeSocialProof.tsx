"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Inline SVGs ─── */

const MercuryLogo = () => (
  <svg height="44" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="24" r="17" stroke="#111110" strokeWidth="3.5" fill="none"/>
    <circle cx="20" cy="24" r="7" fill="#111110"/>
    <text x="48" y="33" fontFamily="Georgia, 'DM Serif Display', serif" fontSize="26" fontWeight="700" fill="#111110">mercury</text>
  </svg>
);

const WatershedLogo = () => (
  <svg height="44" viewBox="0 0 260 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="24" r="18" stroke="#111110" strokeWidth="3" fill="none"/>
    <path d="M6 17 Q22 31 38 17" stroke="#111110" strokeWidth="2.8" fill="none"/>
    <path d="M6 25 Q22 39 38 25" stroke="#111110" strokeWidth="2.8" fill="none"/>
    <text x="52" y="33" fontFamily="Georgia, 'DM Serif Display', serif" fontSize="26" fontWeight="700" fill="#111110">Watershed</text>
  </svg>
);

const RetoolLogo = () => (
  <svg height="44" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="11" height="34" rx="3" fill="#111110"/>
    <rect x="17" y="7" width="11" height="22" rx="3" fill="#111110"/>
    <rect x="17" y="33" width="11" height="8" rx="3" fill="#111110"/>
    <text x="36" y="33" fontFamily="Georgia, 'DM Serif Display', serif" fontSize="26" fontWeight="700" fill="#111110">Retool</text>
  </svg>
);

const DescriptLogo = () => (
  <svg height="44" viewBox="0 0 210 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="9"  width="32" height="6"  rx="3" fill="#111110"/>
    <rect x="2" y="21" width="26" height="6"  rx="3" fill="#111110"/>
    <rect x="2" y="33" width="32" height="6"  rx="3" fill="#111110"/>
    <text x="44" y="33" fontFamily="Georgia, 'DM Serif Display', serif" fontSize="26" fontWeight="600" fill="#111110">descript</text>
  </svg>
);

const PerplexityLogo = () => (
  <svg height="44" viewBox="0 0 260 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4 L34 18 L20 18 L6 18 Z"  stroke="#111110" strokeWidth="2.8" fill="none" strokeLinejoin="round"/>
    <path d="M20 18 L34 32 L20 44 L6 32 Z" stroke="#111110" strokeWidth="2.8" fill="none" strokeLinejoin="round"/>
    <path d="M20 4 L20 44"  stroke="#111110" strokeWidth="2.8"/>
    <path d="M6 18 L34 18"  stroke="#111110" strokeWidth="2.8"/>
    <text x="48" y="33" fontFamily="Georgia, 'DM Serif Display', serif" fontSize="26" fontWeight="500" fill="#111110">perplexity</text>
  </svg>
);

const MonzoLogo = () => (
  <svg height="44" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="34" fontFamily="Georgia, 'DM Serif Display', serif" fontSize="32" fontWeight="800" fill="#111110" letterSpacing="-1">monzo</text>
  </svg>
);

const RampLogo = () => (
  <svg height="44" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="34" fontFamily="Georgia, 'DM Serif Display', serif" fontSize="30" fontWeight="700" fill="#111110">ramp</text>
    <path d="M102 34 L118 14 L118 34" stroke="#111110" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RaycastLogo = () => (
  <svg height="44" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 40 L20 6 L20 24 L36 24 L20 40 Z" fill="#111110"/>
    <text x="50" y="33" fontFamily="Georgia, 'DM Serif Display', serif" fontSize="26" fontWeight="600" fill="#111110">Raycast</text>
  </svg>
);

const ArcLogo = () => (
  <svg height="44" viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 42 C9 42 3 34 3 24 C3 14 9 6 22 6 C35 6 41 14 41 24 C41 34 35 42 22 42Z" stroke="#111110" strokeWidth="3" fill="none"/>
    <path d="M13 24 L22 10 L31 24" stroke="#111110" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="52" y="33" fontFamily="Georgia, 'DM Serif Display', serif" fontSize="26" fontWeight="700" fill="#111110">ARC</text>
  </svg>
);

/* ── Brand list ── */
const BRANDS: { name: string; Logo: React.FC; color: string }[] = [
  { name: 'Mercury',    Logo: MercuryLogo,    color: '#6d3bef' },
  { name: 'Watershed',  Logo: WatershedLogo,  color: '#0ea5e9' },
  { name: 'Retool',     Logo: RetoolLogo,     color: '#ef5f3a' },
  { name: 'Descript',   Logo: DescriptLogo,   color: '#14BF96' },
  { name: 'Perplexity', Logo: PerplexityLogo, color: '#a855f7' },
  { name: 'Monzo',      Logo: MonzoLogo,      color: '#f43f5e' },
  { name: 'Ramp',       Logo: RampLogo,       color: '#22c55e' },
  { name: 'Raycast',    Logo: RaycastLogo,    color: '#f97316' },
  { name: 'Arc',        Logo: ArcLogo,        color: '#6366f1' },
];

// Triple for seamless loop
const TRACK = [...BRANDS, ...BRANDS, ...BRANDS];

/* ── Scrolling logo item ── */
const LogoItem = ({ brand }: { brand: typeof BRANDS[0] }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-shrink-0 flex flex-col items-center justify-center cursor-pointer"
      // Reduced margins from 100 → 36 so ~7 logos fit in view
      style={{ marginLeft: 36, marginRight: 36, paddingBottom: 28 }}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.45, scale: hovered ? 1.08 : 1, y: hovered ? -4 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'center', height: 52 }}
      >
        <brand.Logo />
      </motion.div>

      {/* Colour glow dot */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.18 }}
        style={{
          position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
          width: 48, height: 7, borderRadius: 99, background: brand.color,
          filter: 'blur(5px)', pointerEvents: 'none',
        }}
      />

      {/* Name label */}
      <motion.span
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 5 }}
        transition={{ duration: 0.16 }}
        style={{
          position: 'absolute', bottom: 0,
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: brand.color,
          whiteSpace: 'nowrap', pointerEvents: 'none',
        }}
      >
        {brand.name}
      </motion.span>
    </motion.div>
  );
};

/* ── Static grid logo item (for the expanded view) ── */
const GridLogoItem = ({ brand }: { brand: typeof BRANDS[0] }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center justify-center cursor-pointer rounded-2xl border border-transparent hover:border-[#ebebea] hover:bg-white transition-all duration-200"
      style={{ padding: '24px 12px 38px', minWidth: 0 }}
    >
      {/* Container specifically designed to hold SVG without overflowing */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.5, y: hovered ? -3 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          width: '100%',
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="w-full flex justify-center [&>svg]:w-[90%] [&>svg]:max-w-[120px] [&>svg]:h-auto">
          <brand.Logo />
        </div>
      </motion.div>

      {/* Colour glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.18 }}
        style={{
          position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
          width: 40, height: 6, borderRadius: 99, background: brand.color,
          filter: 'blur(5px)', pointerEvents: 'none',
        }}
      />

      {/* Name label */}
      <motion.span
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
        transition={{ duration: 0.16 }}
        style={{
          position: 'absolute', bottom: 6,
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: brand.color,
          whiteSpace: 'nowrap', pointerEvents: 'none',
        }}
      >
        {brand.name}
      </motion.span>
    </motion.div>
  );
};

/* ── Section ── */
const HomeSocialProof = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #eeeef6 0%, #f5f5fa 40%, #fafafa 70%, #f0eff8 100%)',
        paddingTop: '6rem',
        paddingBottom: '5rem',
      }}
    >
      <style>{`
        @keyframes logo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .logo-track {
          display: flex;
          align-items: center;
          width: max-content;
          /* Slowed from 40s → 70s */
          animation: logo-scroll 70s linear infinite;
        }
        .logo-track:hover { animation-play-state: paused; }

        @keyframes shimmer {
          0%   { background-position: -500px center; }
          100% { background-position:  500px center; }
        }
        .shimmer-word {
          background: linear-gradient(
            90deg,
            #6d3bef 0%, #a855f7 28%, #e879f9 50%, #a855f7 72%, #ef5f3a 100%
          );
          background-size: 500px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4.5s ease-in-out infinite;
        }
      `}</style>

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 z-10 pointer-events-none"
        style={{ width: 120, background: 'linear-gradient(to right, #eeeef6 30%, transparent)' }} />
      <div className="absolute inset-y-0 right-0 z-10 pointer-events-none"
        style={{ width: 120, background: 'linear-gradient(to left, #f0eff8 30%, transparent)' }} />

      {/* ── Headline ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6"
        style={{ marginBottom: '5rem' }}
      >
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 36, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ display: 'inline-block', height: 1, borderRadius: 99, background: 'linear-gradient(to right, transparent, #a78bfa)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#a78bfa', margin: 0 }}
          >
            World-class partners
          </motion.p>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 36, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ display: 'inline-block', height: 1, borderRadius: 99, background: 'linear-gradient(to left, transparent, #a78bfa)' }}
          />
        </div>

        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: 1.2, letterSpacing: '-0.025em', color: '#111110', marginBottom: 10 }}>
          Trusted by <span className="shimmer-word">leading</span> educational institutions.
        </h2>

        <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(16px, 1.8vw, 22px)', fontStyle: 'italic', color: '#94a3b8', letterSpacing: '-0.01em', margin: 0 }}>
          From global enterprises to premier universities.
        </p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ margin: '20px auto 0', height: 1, width: 110, transformOrigin: 'center', background: 'linear-gradient(90deg, transparent, #a78bfa 40%, #f472b6 60%, transparent)' }}
        />
      </motion.div>

      {/* ── Scrolling logos — moved slightly down via mt ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={{ marginTop: '1.5rem' }}
      >
        <div className="logo-track">
          {TRACK.map((brand, i) => (
            <LogoItem key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </motion.div>

      {/* ── Show All button ── */}
      <div className="relative z-10 flex justify-center">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#d8d4f0] bg-white/80 backdrop-blur-sm text-[13px] font-semibold text-[#6d3bef] hover:bg-white hover:border-[#a78bfa] transition-all duration-200 shadow-sm"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif", letterSpacing: '0.02em', marginTop: '3rem' }}
        >
          {showAll ? 'Hide partners' : 'View all partners'}
          <motion.svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        </motion.button>
      </div>

      {/* ── Expanded all-partners grid ── */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              exit={{ y: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto px-6 mt-10"
            >
              <div
                className="rounded-2xl border border-[#e8e6f4] bg-white/60 backdrop-blur-sm p-6"
                style={{ boxShadow: '0 4px 32px -8px rgba(109,59,239,0.08)' }}
              >
                <p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase text-[#a78bfa] mb-6"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  All Partners
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3">
                  {BRANDS.map((brand) => (
                    <GridLogoItem key={brand.name} brand={brand} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HomeSocialProof;
