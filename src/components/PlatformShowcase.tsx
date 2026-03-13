"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, BarChart3, Video, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: <BarChart3 size={18} className="text-indigo-500" />,
        title: "Learner Progress & Analytics",
        description: "Track completion rates, quiz scores, and learning progress across all courses with powerful analytics.",
        details: ["Completion Rate Tracking", "Quiz Score Reports", "Department Insights", "Time-on-Course Data"],
    },
    {
        icon: <Video size={18} className="text-emerald-500" />,
        title: "Live Instructor Sessions",
        description: "Host instructor-led classes, schedule cohorts, and interact with learners live.",
        details: ["Cohort Scheduling", "Live Classrooms", "Attendance Tracking", "Session Recordings"],
    },
    {
        icon: <ShieldCheck size={18} className="text-amber-500" />,
        title: "Live Proctoring",
        description: "AI monitors exams in real time and flags suspicious behaviour automatically.",
        details: ["AI Monitoring", "Real-time Alerts", "Screen Watch", "Audit Reports"],
    },
    {
        icon: <Sparkles size={18} className="text-purple-500" />,
        title: "Lumi AI Assistant",
        description: "Your AI learning assistant that answers questions, summarises modules and guides learners.",
        details: ["In-course Q&A", "Smart Recommendations", "Module Summaries", "Progress Nudges"],
    },
];

const panels = [
    { badge: "Analytics", badgeStyle: "bg-indigo-50 text-indigo-600", accentStyle: "text-indigo-500", title: "Understand learner progress instantly", body: "Real-time insights into engagement, progress, and performance.", stat: "94% completion this week" },
    { badge: "Live Classes", badgeStyle: "bg-emerald-50 text-emerald-600", accentStyle: "text-emerald-500", title: "Run interactive live classes", body: "Engage learners through real-time instructor-led sessions.", stat: "3 sessions live right now" },
    { badge: "Proctoring", badgeStyle: "bg-amber-50 text-amber-600", accentStyle: "text-amber-500", title: "Maintain exam integrity", body: "AI powered monitoring ensures secure and fair assessments.", stat: "0 integrity breaches" },
    { badge: "Lumi AI", badgeStyle: "bg-purple-50 text-purple-600", accentStyle: "text-purple-500", title: "AI learning companion", body: "Lumi helps learners stay on track with intelligent support.", stat: "Available 24 / 7" },
];

const PlatformShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const panel = panels[activeIndex];

    return (
        <section className="relative py-20 md:py-40 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/20 rounded-full blur-[120px] -mr-96 -mt-96" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[100px] -ml-40 -mb-40" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-[clamp(38px,5.5vw,82px)] leading-[1.05] tracking-[-0.02em] mb-12 md:mb-24 text-[#111110]"
                >
                    Our platform. <br /> All learning.
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start lg:items-center">
                    {/* LEFT PANEL — hidden on mobile, shown on lg */}
                    <div className="hidden lg:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.02, y: -20 }}
                                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                className="relative rounded-2xl p-10 bg-white border border-slate-100 shadow-xl overflow-hidden min-h-[480px] flex flex-col justify-center"
                            >
                                <div className="relative z-10">
                                    <span className={`text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-sans ${panel.badgeStyle}`}>
                                        {panel.badge}
                                    </span>
                                    <h3 className="font-serif text-3xl leading-tight mt-10 text-[#111110]">{panel.title}</h3>
                                    <p className="text-slate-500 text-[17px] leading-relaxed mt-5 max-w-md font-sans">{panel.body}</p>
                                    <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-sans">Status Update</span>
                                            <span className={`text-[15px] font-semibold font-sans ${panel.accentStyle}`}>{panel.stat}</span>
                                        </div>
                                        <Link href="#" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors">
                                            <ArrowRight size={20} className="text-[#111110]" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT ACCORDION */}
                    <div className="space-y-2 md:space-y-3">
                        {features.map((feature, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <motion.div
                                    key={feature.title}
                                    className={cn(
                                        "rounded-2xl border transition-all duration-300 px-1 md:px-2",
                                        isActive ? "bg-[#fafafa] border-[#ebebea] pb-6 md:pb-8 shadow-sm" : "bg-white/50 border-transparent hover:bg-slate-50 pb-3 md:pb-4"
                                    )}
                                >
                                    <button
                                        onClick={() => setActiveIndex(index)}
                                        className="w-full flex items-center justify-between p-4 md:p-6 text-left"
                                    >
                                        <div className="flex items-center gap-3 md:gap-5">
                                            <div className={cn("w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center transition-all duration-300", isActive ? "bg-white shadow-sm" : "bg-slate-100")}>
                                                {React.cloneElement(feature.icon as React.ReactElement<{ size: number }>, { size: 18 })}
                                            </div>
                                            <h3 className={cn("font-serif text-[18px] md:text-[22px] transition-colors duration-300", isActive ? "text-[#111110]" : "text-[#4b5563]")}>
                                                {feature.title}
                                            </h3>
                                        </div>
                                        <div className={cn("w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300", isActive ? "bg-white shadow-sm rotate-90" : "text-slate-300")}>
                                            {isActive ? <ArrowRight size={13} className="text-[#111110]" /> : <Plus size={14} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                {/* Mobile: show inline panel card */}
                                                <div className="lg:hidden mx-4 mb-4 rounded-xl p-5 bg-white border border-slate-100 shadow-sm">
                                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full font-sans ${panel.badgeStyle}`}>
                                                        {panel.badge}
                                                    </span>
                                                    <h3 className="font-serif text-xl leading-tight mt-4 text-[#111110]">{panel.title}</h3>
                                                    <p className="text-slate-500 text-[15px] leading-relaxed mt-3 font-sans">{panel.body}</p>
                                                    <p className={`mt-4 text-[13px] font-semibold font-sans ${panel.accentStyle}`}>{panel.stat}</p>
                                                </div>

                                                <div className="pl-[52px] md:pl-[72px] pr-4 md:pr-8">
                                                    <p className="text-[#6b7280] text-[14px] md:text-[16px] leading-relaxed mb-4 md:mb-6 font-sans">
                                                        {feature.description}
                                                    </p>
                                                    <ul className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-3 pb-2 md:pb-4">
                                                        {feature.details.map((d) => (
                                                            <li key={d} className="flex items-center gap-2 md:gap-3 text-[12px] md:text-[14px] font-medium text-[#374151] font-sans">
                                                                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                                                {d}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}

                        <div className="pt-6 md:pt-10 pl-4 md:pl-8">
                            <Link href="/platform/features" className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-semibold text-indigo-600 hover:gap-3 transition-all font-sans">
                                Explore all features
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformShowcase;