import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialProof from '@/components/SocialProof';
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import { solutionsData } from '@/lib/solutions-data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return solutionsData.map((solution) => ({
        slug: solution.slug,
    }));
}

export default function SolutionsPage({ params }: { params: { slug: string } }) {
    const solution = solutionsData.find(s => s.slug === params.slug);

    if (!solution) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow pt-[68px]">

                {/* Solutions Hero */}
                <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-[#0a0a09] text-white">
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Grain overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.20]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                                backgroundSize: '150px 150px',
                            }}
                        />
                        {/* Split Gradient Overlay */}
                        <div
                            className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] opacity-30 blur-[130px] rounded-full"
                            style={{ background: solution.heroGradient }}
                        />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-500/10 blur-[120px] rounded-full" />

                        {/* Bottom fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a09] to-transparent" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 items-center">

                        {/* Left side text */}
                        <div className="flex-1">
                            <a href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-10">
                                <ArrowLeft size={16} /> Back to Home
                            </a>

                            <div className="inline-block px-4 py-1.5 border border-white/10 bg-white/5 rounded-full backdrop-blur-md mb-6">
                                <span className="text-xs font-bold tracking-[0.15em] uppercase text-white/70">
                                    {solution.category}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight mb-8">
                                TeachGrid for <br />
                                <span className="text-transparent bg-clip-text" style={{ backgroundImage: solution.heroGradient }}>
                                    {solution.title}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl leading-relaxed mb-10">
                                {solution.heroDescription}
                            </p>

                            <div className="flex items-center gap-4">
                                <button className="px-8 py-4 bg-white text-[#0a0a09] rounded-full font-semibold transition hover:scale-105">
                                    Talk to an Expert
                                </button>
                                <button className="px-8 py-4 text-white hover:bg-white/5 rounded-full font-medium transition flex items-center gap-2 group">
                                    View Case Studies
                                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Right side abstract graphic (mockup area) */}
                        <div className="flex-1 hidden md:flex justify-end">
                            <div className="relative w-full max-w-[500px] aspect-square rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-2xl">
                                <div
                                    className="absolute inset-[10%] rounded-full opacity-60 blur-3xl animate-pulse"
                                    style={{ background: solution.heroGradient }}
                                />
                                {/* Placeholder for actual dashboard mockup */}
                                <div className="w-[70%] h-[70%] bg-[#1a1a1a] rounded-2xl shadow-2xl border border-white/10 relative z-10 overflow-hidden flex flex-col">
                                    <div className="h-6 border-b border-white/10 bg-black/40 flex items-center px-3 gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-rose-500/50" />
                                        <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                                        <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                                    </div>
                                    <div className="flex-1 p-6 relative">
                                        {/* Abstract chart bars */}
                                        <div className="absolute bottom-6 left-6 right-6 h-32 flex items-end gap-3 opacity-30">
                                            {[40, 70, 45, 90, 60, 100].map((h, i) => (
                                                <div key={i} className="flex-1 bg-white rounded-t-sm" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-32 bg-white relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div className="max-w-3xl">
                                <h2 className="text-4xl md:text-5xl font-serif text-[#111110] mb-6 leading-[1.1]">
                                    Why {solution.title} teams choose TeachGrid
                                </h2>
                                <p className="text-xl text-slate-500 leading-relaxed font-light">
                                    Transforming educational operations requires more than just standard tools. It requires a platform built deeply around your specific workflows.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                            {solution.benefits.map((benefit, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif text-[#111110] mb-4 group-hover:text-indigo-600 transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-[15.5px]">
                                        {benefit.description}
                                    </p>
                                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        Learn more <ArrowRight size={16} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Optional Trusted By Section */}
                {solution.trustedBy && (
                    <section className="py-32 bg-[#fafafa] border-y border-slate-100">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-20">
                                <h2 className="text-3xl md:text-4xl font-serif text-[#111110] mb-4">
                                    {solution.trustedBy.title}
                                </h2>
                                <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {solution.trustedBy.categories.map((cat, i) => (
                                    <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
                                        <h3 className="text-xl font-serif text-[#111110] mb-8 pb-4 border-b border-slate-50">
                                            {cat.name}
                                        </h3>
                                        <ul className="space-y-4">
                                            {cat.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

            </main>
            <SocialProof />

            <Footer />
        </div>
    );
}
