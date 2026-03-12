import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialProof from '@/components/SocialProof';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { platformFeatures } from '@/lib/platform-features';
import { notFound } from 'next/navigation';

// Next.js config for generating static params if you want it statically built
export async function generateStaticParams() {
    return platformFeatures.map((feature) => ({
        slug: feature.slug,
    }));
}

export default function PlatformFeaturePage({ params }: { params: { slug: string } }) {
    // Find the feature matching the slug in the URL
    const feature = platformFeatures.find(f => f.slug === params.slug);

    if (!feature) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow pt-[68px]"> {/* Offset for fixed Navbar */}

                {/* Dynamic Hero */}
                <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-[#0f0e0d] text-white">
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Grain overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.25]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                                backgroundSize: '150px 150px',
                            }}
                        />
                        {/* Dynamic Full Screen Gradient Background */}
                        <div
                            className="absolute inset-0 opacity-40 blur-[100px]"
                            style={{ background: feature.heroGradient }}
                        />

                        {/* Bottom fade for smooth transition to white section */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0e0d] to-transparent" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        {/* Back link */}
                        <a href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-12">
                            <ArrowLeft size={16} /> Back to Platform Overview
                        </a>

                        <div className="max-w-4xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 px-3 py-1 border border-white/20 rounded-full backdrop-blur-md">
                                    {feature.category}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif leading-[1.05] tracking-tight mb-8">
                                {feature.title}
                            </h1>

                            <p className="text-lg md:text-2xl font-light text-white/80 max-w-3xl leading-relaxed mb-12">
                                {feature.heroDescription}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <button className="px-8 py-4 bg-white text-[#111110] rounded-full font-semibold transition hover:scale-105 w-full sm:w-auto">
                                    Request a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-20">
                            <h2 className="text-3xl md:text-4xl font-serif text-[#111110] mb-4">Core Capabilities</h2>
                            <div className="w-12 h-1 bg-indigo-600 rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {feature.capabilities.map((cap, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {/* Render the icon component directly */}
                                        {cap.icon}
                                    </div>
                                    <h3 className="text-xl font-serif text-[#111110] mb-3">{cap.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-[15px]">{cap.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-slate-50 border-t border-slate-200">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-serif text-[#111110] mb-6">Explore the rest of TeachGrid</h2>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                            Our platform is built as a cohesive ecosystem. Every feature is designed to work seamlessly together out of the box.
                        </p>
                        <a href="/" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-4 transition-all pb-1 border-b border-indigo-200 hover:border-indigo-600">
                            View all features <ArrowRight size={18} />
                        </a>
                    </div>
                </section>

            </main>
            <SocialProof />

            <Footer />
        </div>
    );
}
