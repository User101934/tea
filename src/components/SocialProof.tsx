"use client";
import React from 'react';

const SocialProof = () => {
    const phrases = [
        'Together, We Learn Better',
        'The Future Belongs to the Intelligent',
        'Smarter Learning Starts Here',
        'Powered by Intelligence',
        'Learning Never Stops',
        'Together, We Learn Better',
        'The Future Belongs to the Intelligent',
        'Smarter Learning Starts Here',
        'Powered by Intelligence',
        'Learning Never Stops',
    ];

    return (
        /* w-full ensures the gradient stretches to both edges, removing white spots */
        <section className="w-full overflow-hidden relative z-0" style={{ background: 'linear-gradient(90deg, #6d3bef 0%, #a855c8 35%, #ef5f3a 75%, #f97316 100%)' }}>
            <style>{`
                @keyframes marquee-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee-scroll 35s linear infinite;
                }
            `}</style>

            {/* Reduced padding to shrink the overall height of the gradient strip */}
            <div className="marquee-track pt-4 pb-16">
                {phrases.map((phrase, i) => (
                    <span
                        key={i}
                        /* text-xl is a perfect 'medium' size compared to your previous versions */
                        className="flex items-center gap-10 px-12 text-white font-bold text-xl md:text-xl tracking-wide whitespace-nowrap select-none"
                    >
                        {phrase}
                        <span className="ml-4 text-white/50 text-sm">✦</span>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default SocialProof;