import React from 'react';
import Navbar from '@/components/Navbar';
import { ArrowLeft, ArrowRight, Search, BookOpen, MessageCircle } from 'lucide-react';
import { resourcesData } from '@/lib/resources-data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return resourcesData.map((resource) => ({
        slug: resource.slug,
    }));
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
    const resource = resourcesData.find(r => r.slug === params.slug);

    if (!resource) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow pt-[68px]">

                {/* Resource Hero */}
                <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50 border-b border-slate-200">
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Grain overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                                backgroundSize: '150px 150px',
                            }}
                        />
                        {/* Subtle Gradient Glow */}
                        <div
                            className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] opacity-[0.08] blur-[120px] rounded-full"
                            style={{ background: resource.heroGradient }}
                        />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="max-w-3xl">
                            <a href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium mb-12">
                                <ArrowLeft size={16} /> Home
                            </a>

                            <div className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
                                    {resource.category}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-8 leading-[1.1]">
                                {resource.title}
                            </h1>

                            <p className="text-xl md:text-2xl font-light text-slate-500 leading-relaxed mb-10">
                                {resource.heroDescription}
                            </p>

                            {/* Search Bar - Aesthetic choice for Resources */}
                            <div className="relative max-w-xl group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                                <input
                                    type="text"
                                    placeholder={`Search in ${resource.title}...`}
                                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm group-hover:bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Topics Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            {resource.topics.map((topic, i) => (
                                <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.08)] transition-all duration-300">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center mb-8 transition-colors duration-300">
                                        {topic.icon}
                                    </div>
                                    <h3 className="text-xl font-serif text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                                        {topic.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-[15px] mb-8">
                                        {topic.description}
                                    </p>
                                    <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:gap-3 transition-all">
                                        Browse articles <ArrowRight size={16} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Support CTA */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute inset-0 opacity-[0.4]" style={{ background: resource.heroGradient }} />
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl" />

                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-xl mb-8 border border-white/10">
                            <MessageCircle className="text-white" size={28} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Can&apos;t find what you&apos;re looking for?</h2>
                        <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto font-light">
                            Our support team is standing by 24/7 to help you with any technical or platform-related questions.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold transition hover:scale-105 w-full sm:w-auto">
                                Submit a Ticket
                            </button>
                            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full font-semibold transition w-full sm:w-auto">
                                Live Chat
                            </button>
                        </div>
                    </div>
                </section>

            </main>

        </div>
    );
}
