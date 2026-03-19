"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Up-scaled Logos ── */

const MercuryLogo = () => (
  <svg height="42" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="24" r="17" stroke="#000000" strokeWidth="4" fill="none" />
    <circle cx="20" cy="24" r="8" fill="#000000" />
    <text x="48" y="34" fontFamily="Georgia, serif" fontSize="30" fontWeight="800" fill="#000000">mercury</text>
  </svg>
);

const WatershedLogo = () => (
  <svg height="42" viewBox="0 0 260 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="24" r="19" stroke="#000000" strokeWidth="3.5" fill="none" />
    <path d="M6 17 Q22 31 38 17" stroke="#000000" strokeWidth="3.2" fill="none" />
    <path d="M6 25 Q22 39 38 25" stroke="#000000" strokeWidth="3.2" fill="none" />
    <text x="56" y="34" fontFamily="Georgia, serif" fontSize="30" fontWeight="800" fill="#000000">Watershed</text>
  </svg>
);

const RetoolLogo = () => (
  <svg height="42" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="13" height="34" rx="3" fill="#000000" />
    <rect x="20" y="7" width="13" height="22" rx="3" fill="#000000" />
    <rect x="20" y="33" width="13" height="8" rx="3" fill="#000000" />
    <text x="42" y="34" fontFamily="Georgia, serif" fontSize="30" fontWeight="800" fill="#000000">Retool</text>
  </svg>
);

const DescriptLogo = () => (
  <svg height="42" viewBox="0 0 210 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="36" height="7" rx="3" fill="#000000" />
    <rect x="2" y="21" width="30" height="7" rx="3" fill="#000000" />
    <rect x="2" y="34" width="36" height="7" rx="3" fill="#000000" />
    <text x="48" y="34" fontFamily="Georgia, serif" fontSize="30" fontWeight="700" fill="#000000">descript</text>
  </svg>
);

const PerplexityLogo = () => (
  <svg height="42" viewBox="0 0 260 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4 L34 18 L20 18 L6 18 Z" stroke="#000000" strokeWidth="3.2" fill="none" />
    <path d="M20 18 L34 32 L20 44 L6 32 Z" stroke="#000000" strokeWidth="3.2" fill="none" />
    <text x="52" y="34" fontFamily="Georgia, serif" fontSize="30" fontWeight="600" fill="#000000">perplexity</text>
  </svg>
);

const MonzoLogo = () => (
  <svg height="42" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="36" fontFamily="Georgia, serif" fontSize="36" fontWeight="900" fill="#000000" letterSpacing="-1">monzo</text>
  </svg>
);

const RampLogo = () => (
  <svg height="42" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="36" fontFamily="Georgia, serif" fontSize="34" fontWeight="800" fill="#000000">ramp</text>
    <path d="M102 36 L118 16 L118 36" stroke="#000000" strokeWidth="4" fill="none" />
  </svg>
);

const RaycastLogo = () => (
  <svg height="42" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 40 L20 6 L20 24 L36 24 L20 40 Z" fill="#000000" />
    <text x="54" y="34" fontFamily="Georgia, serif" fontSize="30" fontWeight="700" fill="#000000">Raycast</text>
  </svg>
);

const ArcLogo = () => (
  <svg height="42" viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 42 C9 42 3 34 3 24 C3 14 9 6 22 6 C35 6 41 14 41 24 C41 34 35 42 22 42Z" stroke="#000000" strokeWidth="3.5" fill="none" />
    <path d="M13 24 L22 10 L31 24" stroke="#000000" strokeWidth="3.5" fill="none" />
    <text x="56" y="34" fontFamily="Georgia, serif" fontSize="30" fontWeight="800" fill="#000000">ARC</text>
  </svg>
);

/* ── Content Sets ── */
const SET_1 = [
  { name: 'Mercury', Logo: MercuryLogo },
  { name: 'Watershed', Logo: WatershedLogo },
  { name: 'Retool', Logo: RetoolLogo },
  { name: 'Descript', Logo: DescriptLogo },
  { name: 'Perplexity', Logo: PerplexityLogo },
];

const SET_2 = [
  { name: 'Monzo', Logo: MonzoLogo },
  { name: 'Ramp', Logo: RampLogo },
  { name: 'Raycast', Logo: RaycastLogo },
  { name: 'Arc', Logo: ArcLogo },
  { name: 'Watershed_Alt', Logo: WatershedLogo },
];

const HomeSocialProof = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setToggle(prev => !prev), 4500);
    return () => clearInterval(timer);
  }, []);

  const currentSet = toggle ? SET_2 : SET_1;

  return (
    <section className="relative overflow-hidden bg-[#fafafa]" style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Header Content - Bold Removed from H2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p style={{ fontFamily: "sans-serif", fontSize: 12, fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: 14 }}>
            World-class partners
          </p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: '#000000', marginBottom: 14 }}>
            Trusted by leading educational institutions.
          </h2>
          <p style={{ fontFamily: "Georgia, serif", fontSize: '20px', fontStyle: 'italic', color: '#64748b' }}>
            From global enterprises to premier universities.
          </p>
        </motion.div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-16 items-center justify-items-center">
          <AnimatePresence mode="wait">
            {currentSet.map((brand, i) => (
              <motion.div
                key={`${brand.name}-${toggle}`}
                initial={{ opacity: 0, rotateX: -95, y: 20 }}
                animate={{ opacity: 0.9, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: 95, y: -20 }}
                whileHover={{ opacity: 1, scale: 1.06 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="perspective-1200 flex items-center justify-center w-full"
              >
                <brand.Logo />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .perspective-1200 {
          perspective: 1500px;
        }
      `}</style>
    </section>
  );
};

export default HomeSocialProof;