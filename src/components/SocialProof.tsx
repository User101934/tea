"use client";
import React from 'react';

const SocialProof = () => {
    // Phrases exactly as they appear in the original design
    const phrases = [
        "Learning Never Stops",
        "Together, We Learn Better",
        "The Future Belongs to the Intelligent",
        "Smarter Learning Starts Here",
        "Powered by Intelligence",
    ];

    // Triple the phrases to ensure seamless infinite scroll
    const displayPhrases = [...phrases, ...phrases, ...phrases];

    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 pt-[22px] pb-[70px] mt-20 md:mt-32">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.3333%); }
                }
                .animate-marquee-exact {
                    display: flex;
                    width: max-content;
                    animation: marquee 50s linear infinite;
                    /* Reduced to 2.5rem to match the closer spacing in your latest reference */
                    gap: 2.5rem; 
                    align-items: center;
                }
                .marquee-text {
                    font-family: var(--font-jakarta), var(--font-sans), sans-serif;
                    font-weight: 500;
                    letter-spacing: -0.01em;
                    color: white;
                    white-space: nowrap;
                }
            `}} />

            <div className="flex whitespace-nowrap">
                <div className="animate-marquee-exact">
                    {displayPhrases.map((phrase, i) => (
                        <React.Fragment key={i}>
                            <span className="marquee-text text-[18px] font-medium">
                                {phrase}
                            </span>
                            <span className="marquee-text text-[18px] font-medium opacity-90">✦</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialProof;