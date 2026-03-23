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

            <div className="marquee-track pt-5 pb-[60px] sm:pt-6 sm:pb-[72px]">
                {phrases.map((phrase, i) => (
                    <span
                        key={i}
                        className="flex items-center text-white font-bold text-[13px] sm:text-[16px] md:text-[18px] tracking-[0.01em] whitespace-nowrap select-none"
                    >
                        {phrase}
                        <span className="mx-8 sm:mx-12 md:mx-14 text-white text-[12px] sm:text-[14px]">✦</span>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default SocialProof;