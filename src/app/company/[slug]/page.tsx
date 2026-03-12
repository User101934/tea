import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialProof from '@/components/SocialProof';
import {
    ArrowLeft, ArrowRight, MapPin, Phone,
    Mail, Send, Globe, Facebook,
    Twitter, Instagram, Linkedin, Building2,
    Sparkles, Rocket, Heart
} from 'lucide-react';
import { companyData } from '@/lib/company-data';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';

export async function generateStaticParams() {
    return companyData.map((item) => ({
        slug: item.slug,
    }));
}

export default function CompanyPage({ params }: { params: { slug: string } }) {
    const item = companyData.find(d => d.slug === params.slug);

    if (!item) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow pt-[68px]">

                {/* Company Hero */}
                <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0a0a09] text-white">
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Grain overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.20]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                                backgroundSize: '150px 150px',
                            }}
                        />
                        {/* Ambient Glow */}
                        <div
                            className="absolute top-[-10%] right-[-5%] w-[45vw] h-[45vw] opacity-[0.15] blur-[130px] rounded-full"
                            style={{ background: item.heroGradient }}
                        />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <a href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium mb-12">
                                <ArrowLeft size={16} /> Home
                            </a>

                            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                                    {item.category}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]">
                                {item.title === 'About Us' ? (
                                    <>TeachGrid is the <span className="text-transparent bg-clip-text" style={{ backgroundImage: item.heroGradient }}>intelligent learning infrastructure</span> from HashInkludes</>
                                ) : item.title}
                            </h1>

                            <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed mb-10 max-w-3xl">
                                {item.heroDescription}
                            </p>

                            {item.slug === 'about-us' && (
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-8 py-4 bg-white text-black rounded-full font-semibold transition hover:scale-105">
                                        Book a Demo
                                    </button>
                                    <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold transition hover:bg-white/10">
                                        Explore Platform
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                {item.specialLayout === 'about' ? (
                    <AboutLayout item={item} />
                ) : item.specialLayout === 'contact' ? (
                    <ContactLayout item={item} />
                ) : (
                    <DefaultLayout item={item} />
                )}

            </main>
            <SocialProof />

            <Footer />
        </div>
    );
}

function AboutLayout({ item }: { item: any }) {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">About HashInkludes</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            HashInkludes is a company driven by innovation and purpose - creating ventures that empower people, redefine industries, and shape the future.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-700">
                                &quot;We&apos;re reimagining the future of teaching and learning.&quot;
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-3xl bg-slate-100 overflow-hidden shadow-2xl relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Building2 size={80} className="text-slate-300 group-hover:text-indigo-500 transition-colors duration-500" />
                            </div>
                        </div>
                        {/* Decorative floating card */}
                        <div className="absolute -bottom-10 -left-10 p-8 bg-white rounded-3xl shadow-xl border border-slate-100 max-w-[280px] hidden lg:block">
                            <Sparkles className="text-indigo-500 mb-4" />
                            <p className="text-sm font-medium text-slate-900">Experience the power of intelligent learning infrastructure</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 pt-20 border-t border-slate-100 mb-24">
                    {item.points.map((p: any, i: number) => (
                        <div key={i}>
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
                                {p.icon}
                            </div>
                            <h3 className="text-xl font-serif text-slate-900 mb-4">{p.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-[15px]">{p.description}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Section Integrated into About */}
                <div className="mt-32 pt-24 border-t-2 border-slate-900/5">
                    <ContactLayout item={{ ...item, specialLayout: 'contact' }} />
                </div>
            </div>
        </div>
    );
}

function ContactLayout({ item }: { item: any }) {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Contact Details */}
                    <div>
                        <h2 className="text-4xl font-serif text-slate-900 mb-8 whitespace-pre-line">
                            We&apos;d love to hear from you!
                        </h2>
                        <p className="text-xl text-slate-500 font-light mb-12">
                            Have questions or feedback? Reach out – we&apos;re here to help!
                        </p>

                        <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-indigo-600" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Location</h4>
                                    <p className="text-slate-900 font-medium leading-relaxed whitespace-pre-line">
                                        {item.hashInkludesDetails.address}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-indigo-600" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Call Us</h4>
                                    <p className="text-slate-900 font-medium">{item.hashInkludesDetails.phone}</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-indigo-600" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Email</h4>
                                    <p className="text-slate-900 font-medium">{item.hashInkludesDetails.email}</p>
                                </div>
                            </div>

                            <div className="pt-6">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Follow Us</h4>
                                <div className="flex gap-4">
                                    {item.hashInkludesDetails.socials.map((s: any, i: number) => (
                                        <a key={i} href={s.href} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                                            {s.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 ml-1">Name</label>
                                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 ml-1">Email</label>
                                    <input type="email" className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 ml-1">Phone</label>
                                <div className="flex gap-3">
                                    <div className="w-24 bg-white border border-slate-200 rounded-xl py-3 px-4 flex items-center gap-2">
                                        <span>🇮🇳</span> <span className="text-slate-500">+91</span>
                                    </div>
                                    <input type="tel" className="flex-1 bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 ml-1">Your Message</label>
                                <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all resize-none" />
                            </div>
                            <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 active:scale-[0.98] transition-all">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DefaultLayout({ item }: { item: any }) {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    {item.points.map((p: any, i: number) => (
                        <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-8">
                                {p.icon}
                            </div>
                            <h3 className="text-xl font-serif text-slate-900 mb-4">{p.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-[15px]">{p.description}</p>
                        </div>
                    ))}
                </div>

                {/* Placeholder Content for secondary pages */}
                <div className="mt-32 p-12 rounded-[2.5rem] bg-indigo-600 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10 max-w-2xl text-center mx-auto">
                        <h2 className="text-3xl font-serif mb-6">Ready to transform your education?</h2>
                        <p className="text-white/80 mb-10 text-lg">
                            TeachGrid provides the tools you need to build a world-class online academy.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="px-10 py-4 bg-white text-indigo-600 rounded-full font-bold hover:scale-105 transition-all">
                                Get Started
                            </button>
                            <button className="px-10 py-4 border border-white/20 hover:bg-white/10 rounded-full font-bold transition-all">
                                Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
