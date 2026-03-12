"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Zap, ShieldCheck, Sparkles, Globe, Mail, Users, HardDrive, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PricingPage = () => {
    const [isYearly, setIsYearly] = useState(true);

    const plans = [
        {
            name: "Starter",
            price: isYearly ? 89 : 99,
            description: "50 Active Learners • 2 Instructors",
            features: [
                "Unlimited Registered Learners",
                "AI Teaching Assistant",
                "Real-time Analytics Dashboard",
                "Assessments & Auto-grading",
                "Live Classes & Recordings",
                "Certificates & Badges",
                "Discussion Boards",
                "Email / WhatsApp Notifications",
                "25 GB Content Storage",
                "AI Token Limit applies",
                "Cloud Hosting",
                "24×7 Support & Updates"
            ],
            accent: "from-blue-500 to-indigo-500",
            buttonStyle: "border border-slate-200 hover:bg-slate-50 text-[#111110]"
        },
        {
            name: "Growth",
            price: isYearly ? 249 : 299,
            description: "150 Active Learners • 4 Instructors",
            popular: true,
            features: [
                "Everything in Starter, plus:",
                "Custom branding options",
                "Priority support & training",
                "Assessment & grading tools",
                "Mobile learning app",
                "100 GB Content Storage",
                "AI Token Limit applies",
                "Integration capabilities",
                "Progress tracking dashboard"
            ],
            accent: "from-indigo-600 to-purple-600",
            buttonStyle: "bg-[#111110] text-white hover:bg-slate-800"
        },
        {
            name: "Pro",
            price: isYearly ? 749 : 899,
            description: "500 Active Learners • 10 Instructors",
            features: [
                "Everything in Growth, plus:",
                "DRM (Digital Rights Management)",
                "Dedicated account manager",
                "Custom AI model training",
                "500 GB Content Storage",
                "AI Token Limit applies",
                "Advanced security & compliance",
                "API access & integrations"
            ],
            accent: "from-purple-600 to-pink-600",
            buttonStyle: "border border-slate-200 hover:bg-slate-50 text-[#111110]"
        }
    ];

    return (
        <div className="bg-white text-[#111110] min-h-screen relative font-sans">
            <Navbar />

            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-purple-500/5 blur-[120px]" />
                {/* Grain overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                        backgroundSize: '150px 150px',
                    }}
                />
            </div>

            <main className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-serif mb-6 text-[#111110]"
                        >
                            TeachGrid pricing that scales <br className="hidden md:block" /> with your growth
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto"
                        >
                            Pick the TeachGrid plan that fits your organization and start delivering smarter learning experiences today.
                        </motion.p>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-16 px-1.5 py-1.5 bg-slate-100/80 border border-slate-200 rounded-full w-fit mx-auto backdrop-blur-sm">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-300 ${!isYearly ? 'bg-[#111110] text-white shadow-lg' : 'text-slate-500 hover:text-[#111110]'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-8 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 ${isYearly ? 'bg-[#111110] text-white shadow-lg' : 'text-slate-500 hover:text-[#111110]'}`}
                        >
                            Yearly
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold tracking-tight transition-colors ${isYearly ? 'bg-indigo-400 text-white' : 'bg-indigo-500 text-white'}`}>Save 16%</span>
                        </button>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + idx * 0.1 }}
                                className={`relative group p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden ${plan.popular
                                        ? 'bg-white border-indigo-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)]'
                                        : 'bg-white border-slate-100 hover:border-slate-200'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 p-4">
                                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-[10px] font-bold uppercase tracking-wider text-white">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                {/* Glow effect on hover */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity bg-gradient-to-br ${plan.accent}`} />

                                <div className="relative z-10">
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">{plan.name}</p>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl md:text-5xl font-serif text-[#111110]">${plan.price}</span>
                                        <span className="text-slate-400 text-sm">/ month</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mb-8">{isYearly ? 'billed annually' : 'billed monthly'}</p>
                                    <p className="text-sm font-medium text-slate-600 mb-8 border-l-2 border-indigo-500 pl-4">{plan.description}</p>

                                    <button className={`w-full py-4 rounded-xl font-bold transition-transform active:scale-95 mb-10 ${plan.buttonStyle}`}>
                                        Get Started
                                    </button>

                                    <div className="space-y-4">
                                        {plan.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex gap-3 items-start">
                                                <div className="mt-1 w-4 h-4 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                                    <Check size={10} className="text-indigo-600" />
                                                </div>
                                                <span className={`text-[13px] leading-relaxed ${feature.includes('plus') ? 'font-bold text-[#111110]' : 'text-slate-500'}`}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Extra Usage Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 text-center mb-24 backdrop-blur-sm"
                    >
                        <p className="text-slate-500 text-sm">
                            <span className="text-indigo-600 font-bold mr-2 uppercase tracking-widest italic">Extra Usage:</span>
                            $2.99 per Active Learner / month, $12.99 per Active Instructor / month + Tax
                        </p>
                    </motion.div>

                    {/* Academic & Enterprise Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1: Academic & Corporate */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:border-slate-200 transition-all duration-500 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-indigo-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                    <Users size={28} className="text-indigo-600" />
                                </div>
                                <h3 className="text-3xl font-serif mb-4 text-[#111110]">Academic & Corporate</h3>
                                <p className="text-slate-500 mb-8 max-w-sm">For large-scale deployments or universities with 500+ learners. Tailored infrastructure and dedicated support.</p>
                                <button className="px-8 py-3 rounded-full border border-slate-200 bg-white text-[#111110] font-bold transition-all flex items-center gap-2 group/btn hover:bg-slate-50">
                                    Contact Sales
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Card 2: White Label */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:border-slate-200 transition-all duration-500 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-8">
                                    <Globe size={28} className="text-purple-600" />
                                </div>
                                <h3 className="text-3xl font-serif mb-4 text-[#111110]">White-Label Solution</h3>
                                <p className="text-slate-500 mb-8 max-w-sm">Host TeachGrid on your own domain and brand. Completely remove all TeachGrid traces and make it yours.</p>
                                <button className="px-8 py-3 rounded-full border border-slate-200 bg-white text-[#111110] font-bold transition-all flex items-center gap-2 group/btn hover:bg-slate-50">
                                    Contact Sales
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ Quick Link */}
                    <div className="mt-20 text-center">
                        <p className="text-slate-400 flex items-center justify-center gap-2">
                            <HelpCircle size={18} />
                            Have questions about our plans? <a href="#" className="text-indigo-600 hover:text-indigo-500 underline underline-offset-4 decoration-indigo-600/30">View FAQ</a>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PricingPage;
