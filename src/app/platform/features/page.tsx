import React from 'react';
import Navbar from '@/components/Navbar';

import Link from 'next/link';
import {
    BookOpen, Users, Video, Calendar,
    PenTool, MonitorSmartphone, MessageCircle,
    FileCheck, ShieldAlert, Award,
    BarChart4, Sparkles, Brain,
    Trophy, CreditCard, Link as LinkIcon, Sliders, Settings,
    CheckCircle2, Laptop, LineChart,
    Smartphone, Code2, HeartPulse, Zap, ArrowRight
} from 'lucide-react';

const featureGroups = [
    {
        heading: 'Learning & Delivery',
        color: '#6366f1',
        features: [
            { icon: <BookOpen size={20} />, title: 'Smart Learning Management', desc: 'Organize and deliver courses with an intuitive LMS built for modern educators and institutions.', href: '/platform/features/smart-learning-management' },
            { icon: <Users size={20} />, title: 'Cohort Management', desc: 'Group learners into cohorts, track their progress, and deliver a structured learning journey.', href: '/platform/features/cohort-management' },
            { icon: <Video size={20} />, title: 'Live Sessions', desc: 'Host real-time classes with HD video, screen sharing, and built-in collaboration tools.', href: '/platform/features/live-sessions' },
            { icon: <Calendar size={20} />, title: 'Calendar', desc: 'Schedule sessions, deadlines, and events with a shared calendar synced for all learners and mentors.', href: '/platform/features/calendar' },
            { icon: <PenTool size={20} />, title: 'Whiteboard AI ✨', desc: 'An AI-powered collaborative whiteboard for brainstorming, diagrams, and live teaching.', href: '/platform/features/whiteboard-ai' },
            { icon: <Laptop size={20} />, title: 'Virtual Labs', desc: 'Hands-on cloud-based environments for coding, simulations, and practical skill-building.', href: '/platform/features/virtual-labs' },
            { icon: <Zap size={20} />, title: 'Microlearning Studio', desc: 'Create bite-sized, high-impact learning modules designed for fast knowledge transfer.', href: '/platform/features/microlearning-studio' },
            { icon: <MessageCircle size={20} />, title: 'Community', desc: 'Discussion boards, peer channels, and Q&A threads to foster a thriving learner community.', href: '/platform/features/community' },
            { icon: <Smartphone size={20} />, title: 'Mobile-Friendly Experience', desc: 'Fully responsive and app-ready platform so learners can access content anytime, anywhere.', href: '/platform/features/mobile-friendly-experience' },
        ],
    },
    {
        heading: 'Experience Portals',
        color: '#a855f7',
        features: [
            { icon: <MonitorSmartphone size={20} />, title: 'LXP (Learner Portal)', desc: 'A personalized learner experience portal with smart recommendations and progress tracking.', href: '/platform/features/lxp-learner-portal' },
            { icon: <Users size={20} />, title: 'MXP (Mentor Portal)', desc: 'A powerful mentor dashboard for managing sessions, feedback, and learner performance.', href: '/platform/features/mxp-mentor-portal' },
            { icon: <MessageCircle size={20} />, title: 'Learner Feedback Submission', desc: 'Structured feedback workflows that help mentors continuously improve the learning experience.', href: '/platform/features/learner-feedback-submission' },
            { icon: <Sliders size={20} />, title: 'Personalized Dashboard', desc: 'Every user gets a custom dashboard tailored to their role, goals, and progress.', href: '/platform/features/personalized-dashboard' },
        ],
    },
    {
        heading: 'Assessment',
        color: '#f43f5e',
        features: [
            { icon: <FileCheck size={20} />, title: 'Quizzes & Assignments', desc: 'Create flexible assessments with auto-grading, time limits, and multiple question types.', href: '/platform/features/quizzes-assignments' },
            { icon: <ShieldAlert size={20} />, title: 'Live Proctoring', desc: 'AI-powered exam proctoring to ensure academic integrity during high-stakes assessments.', href: '/platform/features/live-proctoring' },
            { icon: <CheckCircle2 size={20} />, title: 'Grading', desc: 'Streamlined grading workflows with rubrics, feedback templates, and grade book management.', href: '/platform/features/grading' },
            { icon: <BarChart4 size={20} />, title: 'Polls & Surveys', desc: 'Gather real-time insights from learners with in-session polls and post-course surveys.', href: '/platform/features/polls-surveys' },
            { icon: <Award size={20} />, title: 'Certificates & Certificate Designer', desc: 'Issue branded certificates of completion with a drag-and-drop designer.', href: '/platform/features/certificates-certificate-designer' },
            { icon: <Calendar size={20} />, title: 'Attendance', desc: 'Automated attendance tracking for live sessions with reporting and alerts.', href: '/platform/features/attendance' },
        ],
    },
    {
        heading: 'Intelligence',
        color: '#f59e0b',
        features: [
            { icon: <Sparkles size={20} />, title: 'AI Features & AI Agents ✨', desc: 'Embed AI across your platform — from content generation to intelligent study suggestions.', href: '/platform/features/ai-features-ai-agents' },
            { icon: <LineChart size={20} />, title: 'Intelligent Analytics', desc: 'Deep learning analytics with predictive insights, cohort comparisons, and outcome tracking.', href: '/platform/features/intelligent-analytics' },
            { icon: <Brain size={20} />, title: 'Lumi AI Assistant', desc: 'A conversational AI tutor available 24/7 to help learners understand concepts and solve problems.', href: '/platform/lumi-ai' },
        ],
    },
    {
        heading: 'Engagement',
        color: '#22c55e',
        features: [
            { icon: <Trophy size={20} />, title: 'Leaderboard & Badges', desc: 'Drive motivation with gamified leaderboards, achievement badges, and milestone rewards.', href: '/platform/features/leaderboard-badges' },
        ],
    },
    {
        heading: 'Administration',
        color: '#0ea5e9',
        features: [
            { icon: <CreditCard size={20} />, title: 'Billing Desk', desc: 'Manage subscriptions, invoices, and payments in one place with full billing visibility.', href: '/platform/features/billing-desk' },
            { icon: <LinkIcon size={20} />, title: 'Integrations', desc: 'Connect TeachGrid with tools like Zoom, Slack, Google Workspace, and 50+ integrations.', href: '/platform/features/integrations' },
            { icon: <ShieldAlert size={20} />, title: 'Admin Controls', desc: 'Role-based permissions, audit logs, and access controls to keep your platform secure.', href: '/platform/features/admin-controls' },
            { icon: <Settings size={20} />, title: 'System Settings', desc: 'Full platform customization — branding, domains, notifications, and global configurations.', href: '/platform/features/system-settings' },
        ],
    },
];


export default function PlatformFeaturesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-transparent selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />

            <main className="flex-grow pt-[68px]">

                {/* Hero */}
                <section className="relative pt-32 pb-24 bg-transparent text-slate-900 overflow-hidden">
                    {/* Grain overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.25] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                            backgroundSize: '150px 150px',
                        }}
                    />
                    {/* Sophisticated radial glow */}
                    <div className="absolute inset-0 opacity-20 blur-[140px] pointer-events-none"
                        style={{ background: 'radial-gradient(circle at 50% 50%, #4f46e5 0%, transparent 70%)' }}
                    />
                    
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <p className="text-[11px] font-sans font-bold tracking-[0.35em] uppercase text-slate-400 mb-8">Platform Capabilities</p>
                        <h1 className="text-6xl md:text-[80px] lg:text-[104px] font-sans font-bold leading-[0.93] tracking-tight mb-8">
                            Everything you need to<br /> educate at scale.
                        </h1>
                        <p className="text-[18px] md:text-[21px] text-slate-900/55 max-w-2xl mx-auto leading-[1.75] mb-14 font-sans font-light">
                            A cohesive ecosystem of tools designed to work seamlessly together — from intelligent delivery to AI-powered assessments.
                        </p>
                        <a 
                            href="#all-features"
                            className="inline-block bg-slate-900/10 hover:bg-white/20 text-slate-900 px-10 py-[14px] rounded-full text-[15px] tracking-wide font-sans font-semibold transition-all backdrop-blur-sm border border-white/15"
                        >
                            Explore all features
                        </a>
                    </div>
                </section>

                {/* All Features Grid — Rich detail cards */}
                <section id="all-features" className="py-32 bg-[#fafafa]">
                    <div className="max-w-7xl mx-auto px-6">
                        {featureGroups.map((group) => (
                            <div key={group.heading} className="mb-24 last:mb-0">
                                {/* Section heading */}
                                <div className="flex items-center gap-4 mb-10">
                                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: group.color }} />
                                    <h2 className="text-[26px] font-sans font-bold tracking-tight text-[#0f0e0d]">{group.heading}</h2>
                                    <div className="flex-1 h-px bg-slate-200 ml-2" />
                                </div>

                                {/* Feature cards */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {group.features.map((f) => (
                                        <Link
                                            key={f.title}
                                            href={f.href}
                                            className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6"
                                        >
                                            {/* Icon */}
                                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${group.color}18`, color: group.color }}>
                                                {f.icon}
                                            </div>
                                            {/* Text */}
                                            <div className="flex-1">
                                                <h3 className="text-[18px] font-sans font-bold text-[#111110] mb-3 group-hover:text-[#0a0a09] transition-colors leading-snug">{f.title}</h3>
                                                <p className="text-[14.5px] font-sans text-slate-500 leading-[1.7] font-normal">{f.desc}</p>
                                            </div>
                                            {/* Learn more */}
                                            <span className="inline-flex items-center gap-2 text-[13px] font-sans font-semibold tracking-wide transition-all" style={{ color: group.color }}>
                                                Learn more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* CTA */}
                <section className="py-32 bg-transparent text-slate-900 relative overflow-hidden">
                     {/* Grain overlay */}
                     <div
                        className="absolute inset-0 opacity-[0.15] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain-cta'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain-cta)'/%3E%3C/svg%3E")`,
                            backgroundSize: '150px 150px',
                        }}
                    />
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-sans mb-8 leading-tight">Build your learning <br /> infrastructure today.</h2>
                        <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto font-sans">
                            Every tool you need, integrated by design. Get started with the full TeachGrid ecosystem.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <Link
                                href="/get-started"
                                className="px-10 py-4 bg-white text-[#111110] rounded-full font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href="/pricing"
                                className="px-10 py-4 border border-slate-200/50 text-slate-900 rounded-full font-bold hover:bg-slate-900/5 active:scale-[0.98] transition-all"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            
        </div>
    );
}
