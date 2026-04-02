import React from 'react';
import Navbar from '@/components/Navbar';

import { ArrowRight, BookOpen, Users, ShieldCheck } from 'lucide-react';

export default function CampusPage() {
    return (
        <div className="flex flex-col min-h-screen bg-transparent">
            <Navbar />

            <main className="flex-grow pt-[68px]"> {/* Offset for fixed Navbar */}

                {/* Campus Hero */}
                <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent text-slate-900">
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Grain overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.25]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                                backgroundSize: '150px 150px',
                            }}
                        />
                        {/* Soft Campus Brand Glow */}
                        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/20 blur-[120px]" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[120px]" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-indigo-400 mb-6">TeachGrid Campus</span>
                        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-sans leading-[1.05] tracking-tight mb-8 max-w-4xl">
                            Powering the future of higher education.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-12">
                            A comprehensive AI-driven infrastructure designed specifically for universities, colleges, and large-scale academic institutions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="px-8 py-4 bg-white text-[#111110] rounded-full font-semibold transition hover:scale-105">
                                Request Campus Demo
                            </button>
                            <button className="px-8 py-4 border border-slate-200/50 rounded-full font-medium transition hover:bg-white/10">
                                Explore Features
                            </button>
                        </div>
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="py-24 bg-transparent">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-sans text-[#111110] mb-6">Everything an institution needs</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg hover:text-slate-600 transition">
                                Built to handle thousands of concurrent learners while maintaining an intimate, personalized learning experience for every student.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <BookOpen className="text-indigo-600" size={24} />,
                                    title: 'Unified Curriculum Management',
                                    desc: 'Centralize your entire syllabus across departments. Effortlessly push updates to hundreds of courses instantly.',
                                },
                                {
                                    icon: <Users className="text-purple-600" size={24} />,
                                    title: 'Cohort & Faculty Tools',
                                    desc: 'Give professors the analytics and administrative power they need to guide thousands of students uniquely.',
                                },
                                {
                                    icon: <ShieldCheck className="text-emerald-600" size={24} />,
                                    title: 'AI Proctoring & Integrity',
                                    desc: 'State-of-the-art academic integrity tools to monitor exams on campus or remotely, securely and fairly.',
                                },
                            ].map((feat, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all group">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        {feat.icon}
                                    </div>
                                    <h3 className="text-xl font-sans text-[#111110] mb-3">{feat.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to action connecting to main platform */}
                <section className="py-24 bg-transparent border-t border-slate-200">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-sans text-[#111110] mb-6">Want to see how it integrates?</h2>
                        <p className="text-slate-600 mb-8">
                            Campus acts as the backbone, but connects flawlessly to our Learner Portals and Assessment suites.
                        </p>
                        <a href="/" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-4 transition-all pb-1 border-b border-indigo-200 hover:border-indigo-600">
                            Back to main platform overview <ArrowRight size={18} />
                        </a>
                    </div>
                </section>

            </main>

            
        </div>
    );
}
