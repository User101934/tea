import React from 'react';
import {
    BookOpen, Users, Video, Calendar,
    PenTool, MonitorSmartphone, LayoutTemplate, MessageCircle,
    Pocket, FileCheck, ShieldAlert, Award,
    BarChart4, ClipboardCheck, Sparkles, Brain,
    Trophy, CreditCard, Link, Sliders, Settings,
    CheckCircle2, Laptop, Send, LineChart, Target,
    Activity, ShieldCheck, Microscope, Layers, Receipt, Globe,
    Smartphone, Search, HardDrive, Heart, Rocket, Code
} from 'lucide-react';

export type FeatureFeature = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

export type FeatureData = {
    slug: string;
    category: string;
    title: string;
    heroDescription: string;
    heroGradient: string;
    capabilities: FeatureFeature[];
};

export const platformFeatures: FeatureData[] = [
    // --- LEARNING & DELIVERY ---
    {
        slug: 'smart-learning-management',
        category: 'Learning & Delivery',
        title: 'Smart Learning Management',
        heroDescription: 'Create, manage, and scale personalized learning programs with ease.',
        heroGradient: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 50%, #818cf8 100%)',
        capabilities: [
            {
                icon: <Users className="text-indigo-500" />,
                title: 'Learners & Mentors',
                description: 'Comprehensive management of your entire educational community roles.'
            },
            {
                icon: <Layers className="text-indigo-500" />,
                title: 'Course & Cohort Creation',
                description: 'Build structured learning paths and group students for better outcomes.'
            },
            {
                icon: <Activity className="text-indigo-500" />,
                title: 'Attendance & Labs',
                description: 'Track participation and technical practice sessions in real-time.'
            },
            {
                icon: <Sparkles className="text-indigo-500" />,
                title: 'Micro-Programs',
                description: 'Deploy focused, high-impact learning sequences for specific skillsets.'
            },
            {
                icon: <MessageCircle className="text-indigo-500" />,
                title: 'Community & Collaboration',
                description: 'Bridge the gap between learners with integrated social tools.'
            },
            {
                icon: <CheckCircle2 className="text-indigo-500" />,
                title: 'Auto Progress Tracking',
                description: 'Automated monitoring of student journeys and milestone completion.'
            }
        ]
    },
    {
        slug: 'cohort-management',
        category: 'Learning & Delivery',
        title: 'Cohort Management',
        heroDescription: 'Create and manage cohorts for targeted learning experiences. Track group progress, facilitate collaboration, and deliver structured programs at scale.',
        heroGradient: 'linear-gradient(135deg, #0f172a 0%, #0ea5e9 50%, #38bdf8 100%)',
        capabilities: [
            {
                icon: <PenTool className="text-sky-500" />,
                title: 'Batch Creation',
                description: 'Establish multiple learning groups simultaneously with automated setup.'
            },
            {
                icon: <BarChart4 className="text-sky-500" />,
                title: 'Group Analytics',
                description: 'Deep dive into cohort-level performance metrics and trends.'
            },
            {
                icon: <Users className="text-sky-500" />,
                title: 'Bulk Enrollment',
                description: 'Onboard hundreds of learners to specific tracks in one click.'
            },
            {
                icon: <Calendar className="text-sky-500" />,
                title: 'Timeline Management',
                description: 'Control the pace and sequence of learning for different groups.'
            },
            {
                icon: <Heart className="text-sky-500" />,
                title: 'Peer Collaboration',
                description: 'Enable structured interaction between members of the same cohort.'
            }
        ]
    },
    {
        slug: 'live-sessions',
        category: 'Learning & Delivery',
        title: 'Live Sessions',
        heroDescription: 'Host interactive live classes with built-in collaboration tools, breakout rooms, and seamless recording — all in one platform.',
        heroGradient: 'linear-gradient(135deg, #3f2c23 0%, #d97706 50%, #fcd34d 100%)',
        capabilities: [
            {
                icon: <Video className="text-amber-500" />,
                title: 'HD Video & Audio',
                description: 'Crystal clear communication with adaptive quality streaming.'
            },
            {
                icon: <MonitorSmartphone className="text-amber-500" />,
                title: 'Screen Sharing',
                description: 'Share your screen, applications, or specific windows seamlessly.'
            },
            {
                icon: <MessageCircle className="text-amber-500" />,
                title: 'Interactive Chat',
                description: 'Real-time messaging, Q&A, and file sharing during sessions.'
            },
            {
                icon: <LayoutTemplate className="text-amber-500" />,
                title: 'Breakout Rooms',
                description: 'Split into smaller groups for focused discussions and activities.'
            },
            {
                icon: <Target className="text-amber-500" />,
                title: 'Hand Raise & Reactions',
                description: 'Non-verbal cues to keep sessions engaging and organized.'
            },
            {
                icon: <FileCheck className="text-amber-500" />,
                title: 'Session Recording',
                description: 'Auto-record sessions for playback and future reference.'
            }
        ]
    },
    {
        slug: 'calendar',
        category: 'Learning & Delivery',
        title: 'Calendar & Schedules',
        heroDescription: 'Never miss a session or deadline. TeachGrid\'s integrated calendar keeps learners, mentors, and admins synchronized with automated reminders and cohort timelines.',
        heroGradient: 'linear-gradient(135deg, #14532d 0%, #16a34a 50%, #86efac 100%)',
        capabilities: [
            {
                icon: <Activity className="text-emerald-500" />,
                title: 'Session Scheduling',
                description: 'Efficiently plan and organize all your upcoming learning events.'
            },
            {
                icon: <CheckCircle2 className="text-emerald-500" />,
                title: 'Assignment Deadlines',
                description: 'Visual tracking of all critical submission dates for learners.'
            },
            {
                icon: <ShieldAlert className="text-emerald-500" />,
                title: 'Auto Reminders',
                description: 'Proactive notifications to ensure high attendance and submission rates.'
            },
            {
                icon: <Layers className="text-emerald-500" />,
                title: 'Cohort Timeline View',
                description: 'Unified visualization of learning milestones across different groups.'
            },
            {
                icon: <Globe className="text-emerald-500" />,
                title: 'Export to Apps',
                description: 'Sync your TeachGrid schedule with Google, Apple, and Outlook calendars.'
            }
        ]
    },
    {
        slug: 'ai-features-ai-agents',
        category: 'Intelligence',
        title: 'AI Features & AI Agents ✨',
        heroDescription: 'TeachGrid\'s intelligent layer enhances learning creation, delivery, and insights automatically.',
        heroGradient: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #fed7aa 100%)',
        capabilities: [
            {
                icon: <PenTool className="text-orange-500" />,
                title: 'Whiteboard AI',
                description: 'Smart, collaborative whiteboard with context-aware assistance.'
            },
            {
                icon: <Target className="text-orange-500" />,
                title: 'AI Recommendations',
                description: 'Personalized course and micro-program suggestions for every user.'
            },
            {
                icon: <Brain className="text-orange-500" />,
                title: 'Automated Insights',
                description: 'Predictive analytics for mentors and admins to drive student success.'
            },
            {
                icon: <Sparkles className="text-orange-500" />,
                title: 'Smart Content',
                description: 'AI helps create quizzes, outlines, and lesson templates instantly.'
            }
        ]
    },
    {
        slug: 'quizzes-assignments',
        category: 'Assessment',
        title: 'Quizzes & Assignments',
        heroDescription: 'From quick quizzes to comprehensive assignments — flexible tools to evaluate, grade, and improve learning outcomes at scale.',
        heroGradient: 'linear-gradient(135deg, #701a75 0%, #c026d3 50%, #f0abfc 100%)',
        capabilities: [
            {
                icon: <PenTool className="text-fuchsia-500" />,
                title: 'Custom Quiz Builder',
                description: 'Create MCQs, short answers, and coding challenges with ease.'
            },
            {
                icon: <CheckCircle2 className="text-fuchsia-500" />,
                title: 'Auto-Grading',
                description: 'Instant feedback on objective assessments saves time and effort.'
            },
            {
                icon: <HardDrive className="text-fuchsia-500" />,
                title: 'Question Banks',
                description: 'Reusable question libraries for consistent assessment quality.'
            },
            {
                icon: <Calendar className="text-fuchsia-500" />,
                title: 'Timed Assessments',
                description: 'Set time limits and deadlines for structured evaluations.'
            },
            {
                icon: <Sliders className="text-fuchsia-500" />,
                title: 'Adaptive Difficulty',
                description: 'Adjust question complexity based on learner performance.'
            },
            {
                icon: <LineChart className="text-fuchsia-500" />,
                title: 'Performance Analytics',
                description: 'Track completion rates, scores, and identify learning gaps.'
            }
        ]
    },
    {
        slug: 'live-proctoring',
        category: 'Assessment',
        title: 'Live Proctoring',
        heroDescription: 'Maintain fairness and credibility in remote assessments with AI-powered live proctoring that detects anomalies while respecting privacy.',
        heroGradient: 'linear-gradient(135deg, #78350f 0%, #d97706 50%, #fde68a 100%)',
        capabilities: [
            {
                icon: <Search className="text-amber-500" />,
                title: 'Face Detection',
                description: 'AI ensures the right learner is present during the entire exam.'
            },
            {
                icon: <ShieldAlert className="text-amber-500" />,
                title: 'Tab Switching Alerts',
                description: 'Detect and prevent unauthorized external research during assessments.'
            },
            {
                icon: <Activity className="text-amber-500" />,
                title: 'Audio Monitoring',
                description: 'Identify suspicious ambient noise or unauthorized communication.'
            },
            {
                icon: <Video className="text-amber-500" />,
                title: 'Screen Recording',
                description: 'Continuous capture of the candidate\'s view for post-exam audit.'
            },
            {
                icon: <Brain className="text-amber-500" />,
                title: 'Behavior Analytics',
                description: 'AI-driven detection of non-standard movement and focus patterns.'
            }
        ]
    },
    {
        slug: 'whiteboard-ai',
        category: 'Learning & Delivery',
        title: 'Whiteboard AI ✨',
        heroDescription: 'Sketch, brainstorm, and problem-solve together with an intelligent whiteboard that understands context and offers real-time suggestions.',
        heroGradient: 'linear-gradient(135deg, #4c1d95 0%, #8b5cf6 50%, #c4b5fd 100%)',
        capabilities: [
            {
                icon: <MonitorSmartphone className="text-violet-500" />,
                title: 'Real-time Collaboration',
                description: 'Multiple users sketching and brainstorming on an infinite canvas.'
            },
            {
                icon: <Target className="text-violet-500" />,
                title: 'Shape Recognition',
                description: 'Messy sketches automatically convert into clean, geometric shapes.'
            },
            {
                icon: <Sparkles className="text-violet-500" />,
                title: 'AI Suggestions',
                description: 'Context-aware brainstorming help and automated flowcharting.'
            },
            {
                icon: <LayoutTemplate className="text-violet-500" />,
                title: 'Infinite Canvas',
                description: 'No borders to your creativity. Scale designs up to any complexity.'
            },
            {
                icon: <HardDrive className="text-violet-500" />,
                title: 'Export Options',
                description: 'Save your work as PDF, PNG, or structured documentation.'
            }
        ]
    },
    {
        slug: 'virtual-labs',
        category: 'Learning & Delivery',
        title: 'Virtual Labs',
        heroDescription: 'Provide safe, scalable practice spaces for technical skills. From coding environments to simulations — learning by doing, without infrastructure constraints.',
        heroGradient: 'linear-gradient(135deg, #082f49 0%, #0284c7 50%, #7dd3fc 100%)',
        capabilities: [
            {
                icon: <Globe className="text-sky-500" />,
                title: 'Cloud-Based Labs',
                description: 'Powerful technical environments accessible directly from any browser.'
            },
            {
                icon: <Settings className="text-sky-500" />,
                title: 'Pre-configured',
                description: 'Ready-to-use setups for coding, security, and hardware simulations.'
            },
            {
                icon: <Activity className="text-sky-500" />,
                title: 'Progress Tracking',
                description: 'Metric-driven monitoring of student performance within the lab.'
            },
            {
                icon: <Users className="text-sky-500" />,
                title: 'Mentor Supervision',
                description: 'Instructors can jump into any student\'s lab in real-time for guidance.'
            },
            {
                icon: <Rocket className="text-sky-500" />,
                title: 'Auto-provisioning',
                description: 'Instant environment spinning for hundreds of students simultaneously.'
            }
        ]
    },
    {
        slug: 'attendance',
        category: 'Assessment',
        title: 'Attendance Tracking',
        heroDescription: 'Automated attendance tracking for live sessions, cohorts, and modules. Get insights on engagement patterns and identify at-risk learners early.',
        heroGradient: 'linear-gradient(135deg, #3f3f46 0%, #71717a 50%, #d4d4d8 100%)',
        capabilities: [
            {
                icon: <CheckCircle2 className="text-zinc-500" />,
                title: 'Auto-Tracking',
                description: 'Intelligent detection of student presence in virtual and live classes.'
            },
            {
                icon: <Sliders className="text-zinc-500" />,
                title: 'Manual Override',
                description: 'Flexible options for mentors to adjust attendance status as needed.'
            },
            {
                icon: <BarChart4 className="text-zinc-500" />,
                title: 'Attendance Reports',
                description: 'Detailed logs and summaries of user participation across modules.'
            },
            {
                icon: <Brain className="text-zinc-500" />,
                title: 'Engagement Insights',
                description: 'AI analysis of log-in frequency and time-on-task patterns.'
            },
            {
                icon: <HardDrive className="text-zinc-500" />,
                title: 'Export to CSV',
                description: 'Download clean attendance data for external reporting or payroll.'
            }
        ]
    },
    {
        slug: 'grading',
        category: 'Assessment',
        title: 'Grading & Evaluation',
        heroDescription: 'Speed up feedback cycles with customizable rubrics, bulk grading, and instant notifications. Keep learners informed and motivated throughout their journey.',
        heroGradient: 'linear-gradient(135deg, #065f46 0%, #10b981 50%, #6ee7b7 100%)',
        capabilities: [
            {
                icon: <LayoutTemplate className="text-emerald-500" />,
                title: 'Custom Rubrics',
                description: 'Design structured evaluation frameworks for consistent grading.'
            },
            {
                icon: <Sparkles className="text-emerald-500" />,
                title: 'Auto-Grading',
                description: 'Define complex logic rules to score assessments automatically.'
            },
            {
                icon: <Layers className="text-emerald-500" />,
                title: 'Bulk Operations',
                description: 'Grade hundreds of assignments or apply adjustments in one action.'
            },
            {
                icon: <MessageCircle className="text-emerald-500" />,
                title: 'Feedback Comments',
                description: 'Integrated rich-text and video feedback for personalized coaching.'
            },
            {
                icon: <LineChart className="text-emerald-500" />,
                title: 'Grade Distribution',
                description: 'Visualize how your cohort is performing against target benchmarks.'
            }
        ]
    },
    {
        slug: 'polls-surveys',
        category: 'Assessment',
        title: 'Polls & Surveys',
        heroDescription: 'Quick polls and detailed surveys to capture insights, measure sentiment, and improve engagement.',
        heroGradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #bfdbfe 100%)',
        capabilities: [
            {
                icon: <Activity className="text-blue-500" />,
                title: 'Live Session Polls',
                description: 'Capture instant feedback during virtual classes and webinars.'
            },
            {
                icon: <Target className="text-blue-500" />,
                title: 'Post-Module Feedback',
                description: 'Automated surveys after completion to improve content quality.'
            },
            {
                icon: <ShieldAlert className="text-blue-500" />,
                title: 'Anonymous',
                description: 'Encourage honest feedback with identity-protected responses.'
            },
            {
                icon: <BarChart4 className="text-blue-500" />,
                title: 'Response Analytics',
                description: 'Visualize sentiment and satisfaction trends over time.'
            }
        ]
    },
    {
        slug: 'microlearning-studio',
        category: 'Learning & Delivery',
        title: 'Microlearning Studio',
        heroDescription: 'Build focused, impactful micro-modules that fit into busy schedules and drive better knowledge retention through spaced learning.',
        heroGradient: 'linear-gradient(135deg, #831843 0%, #db2777 50%, #f9a8d4 100%)',
        capabilities: [
            {
                icon: <Pocket className="text-pink-500" />,
                title: 'Bite-Sized Content',
                description: 'Create focused modules that learners can complete in minutes.'
            },
            {
                icon: <LayoutTemplate className="text-pink-500" />,
                title: 'Quick Creation',
                description: 'Drag-and-drop builder for rapid microlearning development.'
            },
            {
                icon: <Target className="text-pink-500" />,
                title: 'Learning Objectives',
                description: 'Define clear, measurable outcomes for each micro-module.'
            },
            {
                icon: <Activity className="text-pink-500" />,
                title: 'Spaced Repetition',
                description: 'Reinforce learning with intelligent content scheduling.'
            },
            {
                icon: <Smartphone className="text-pink-500" />,
                title: 'Mobile-Optimized',
                description: 'Perfect for on-the-go learning on any device natively.'
            },
            {
                icon: <LineChart className="text-pink-500" />,
                title: 'Retention Analytics',
                description: 'Track how well microlearning improves knowledge retention.'
            }
        ]
    },
    {
        slug: 'certificates-certificate-designer',
        category: 'Assessment',
        title: 'Certificates & Designer',
        heroDescription: 'Design, automate, and award professional certificates that learners are proud to share. Build trust and boost engagement with every completion.',
        heroGradient: 'linear-gradient(135deg, #4c1d95 0%, #8b5cf6 50%, #ddd6fe 100%)',
        capabilities: [
            {
                icon: <PenTool className="text-violet-500" />,
                title: 'Drag & Drop Designer',
                description: 'Intuitive visual builder to create stunning certificate templates.'
            },
            {
                icon: <Code className="text-violet-500" />, // Swapped manually to Code/Settings if available
                title: 'Dynamic Fields',
                description: 'Auto-populate name, course, score, date, and custom variables.'
            },
            {
                icon: <CheckCircle2 className="text-violet-500" />,
                title: 'Auto-Generation',
                description: 'Certificates generated automatically upon course completion.'
            },
            {
                icon: <HardDrive className="text-violet-500" />,
                title: 'Multiple Formats',
                description: 'Download as PDF, PNG, or share directly via email and social.'
            },
            {
                icon: <Award className="text-violet-500" />,
                title: 'Digital Badges',
                description: 'Issue verifiable digital badges alongside certificates.'
            },
            {
                icon: <Send className="text-violet-500" />,
                title: 'Social Sharing',
                description: 'Let learners showcase achievements on LinkedIn natively.'
            }
        ]
    },
    {
        slug: 'billing-desk',
        category: 'Administration',
        title: 'Billing Desk',
        heroDescription: 'Streamline financial operations with integrated billing, invoicing, and payment tracking. Keep your revenue management organized and transparent.',
        heroGradient: 'linear-gradient(135deg, #064e3b 0%, #10b981 50%, #6ee7b7 100%)',
        capabilities: [
            {
                icon: <Receipt className="text-emerald-500" />,
                title: 'Invoice Generation',
                description: 'Automated creation and delivery of professional tax invoices.'
            },
            {
                icon: <CreditCard className="text-emerald-500" />,
                title: 'Payment Tracking',
                description: 'Monitor all incoming course fees and pending student dues.'
            },
            {
                icon: <Target className="text-emerald-500" />,
                title: 'Subscriptions',
                description: 'Manage recurring revenue for memberships and recurring cohorts.'
            },
            {
                icon: <LineChart className="text-emerald-500" />,
                title: 'Revenue Reports',
                description: 'Deep insights into your academy\'s financial growth and health.'
            },
            {
                icon: <Globe className="text-emerald-500" />,
                title: 'Multiple Currencies',
                description: 'Collect payments in any currency with automated conversion.'
            }
        ]
    },
    {
        slug: 'community',
        category: 'Learning & Delivery',
        title: 'Community & Forum',
        heroDescription: 'Build vibrant learning communities where learners connect, collaborate, and learn from each other. Drive engagement beyond structured courses.',
        heroGradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #93c5fd 100%)',
        capabilities: [
            {
                icon: <MessageCircle className="text-blue-500" />,
                title: 'Discussion Forums',
                description: 'Long-form asynchronous spaces for deep topic exploration.'
            },
            {
                icon: <Users className="text-blue-500" />,
                title: 'Peer-to-Peer Chat',
                description: 'Instant private messaging for structured student collaboration.'
            },
            {
                icon: <HardDrive className="text-blue-500" />,
                title: 'Resource Sharing',
                description: 'Centralized hubs for students to upload and share study materials.'
            },
            {
                icon: <Heart className="text-blue-500" />,
                title: 'Study Groups',
                description: 'Self-organized student circles for collaborative goal achievement.'
            },
            {
                icon: <ShieldCheck className="text-blue-500" />,
                title: 'Moderation Tools',
                description: 'Maintain professional standards with AI and manual moderation.'
            }
        ]
    },
    {
        slug: 'mobile-friendly-experience',
        category: 'Learning & Delivery',
        title: 'Mobile Friendly Experience',
        heroDescription: 'TeachGrid\'s fully responsive interface delivers a seamless experience across desktop, tablet, and mobile.',
        heroGradient: 'linear-gradient(135deg, #172554 0%, #1d4ed8 50%, #60a5fa 100%)',
        capabilities: [
            {
                icon: <Smartphone className="text-blue-500" />,
                title: 'Mobile Dashboards',
                description: 'Glanceable performance metrics optimized for the palm of your hand.'
            },
            {
                icon: <Rocket className="text-blue-500" />,
                title: 'On-the-go Modules',
                description: 'Micro-learning segments designed for quick consumption anywhere.'
            },
            {
                icon: <ShieldAlert className="text-blue-500" />,
                title: 'Smart Notifications',
                description: 'Push and in-app alerts to keep learners engaged and on track.'
            },
            {
                icon: <HardDrive className="text-blue-500" />,
                title: 'Offline Access',
                description: 'Planned feature for pining content for network-less consumption.'
            }
        ]
    },
    {
        slug: 'integrations',
        category: 'Administration',
        title: 'Integrations',
        heroDescription: 'TeachGrid integrates seamlessly with popular communication, productivity, and learning tools. Build a connected learning ecosystem.',
        heroGradient: 'linear-gradient(135deg, #312e81 0%, #6366f1 50%, #c7d2fe 100%)',
        capabilities: [
            {
                icon: <Link className="text-indigo-500" />,
                title: 'Native API',
                description: 'Powerful endpoints to connect your own internal systems.'
            },
            {
                icon: <MessageCircle className="text-indigo-500" />,
                title: 'Discord & WhatsApp',
                description: 'Connect to where your learners are most comfortable chatting.'
            },
            {
                icon: <Brain className="text-indigo-500" />,
                title: 'LLM Integrations',
                description: 'Support for OpenAI, Gemini, and Grok for custom AI triggers.'
            },
            {
                icon: <Video className="text-indigo-500" />,
                title: 'Zoom & Meet',
                description: '1-click external video conferencing synchronization.'
            }
        ]
    },
    {
        slug: 'admin-controls',
        category: 'Administration',
        title: 'Admin Controls',
        heroDescription: 'Manage users, permissions, branding, and platform settings from a centralized dashboard. Full control with granular access management.',
        heroGradient: 'linear-gradient(135deg, #4c0519 0%, #e11d48 50%, #fda4af 100%)',
        capabilities: [
            {
                icon: <ShieldCheck className="text-rose-500" />,
                title: 'Role-Based Access',
                description: 'Granular permissions to control exactly what your team can see.'
            },
            {
                icon: <Users className="text-rose-500" />,
                title: 'User Management',
                description: 'Centralized controls to onboard, manage, and offboard users.'
            },
            {
                icon: <Layers className="text-rose-500" />,
                title: 'Platform Branding',
                description: 'Total control over logos, colors, and site-wide typography.'
            },
            {
                icon: <Sliders className="text-rose-500" />,
                title: 'Security Settings',
                description: 'Global enforcement of SSO, tracking, and data storage rules.'
            },
            {
                icon: <Activity className="text-rose-500" />,
                title: 'Activity Logs',
                description: 'Audit-ready history of every administrative action taken on site.'
            }
        ]
    },
    {
        slug: 'intelligent-analytics',
        category: 'Intelligence',
        title: 'Intelligent Analytics',
        heroDescription: 'Access real-time insights, performance metrics, and trend reports — all powered by AI.',
        heroGradient: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 50%, #93c5fd 100%)',
        capabilities: [
            {
                icon: <LayoutTemplate className="text-blue-500" />,
                title: 'Learner Dashboards',
                description: 'Real-time personalized views of progress for every student.'
            },
            {
                icon: <BarChart4 className="text-blue-500" />,
                title: 'Course-level Reports',
                description: 'Deep metrics on specific content performance and efficacy.'
            },
            {
                icon: <Sparkles className="text-blue-500" />,
                title: 'AI Recommendations',
                description: 'Data-driven suggestions to optimize learning paths automatically.'
            },
            {
                icon: <Trophy className="text-blue-500" />,
                title: 'Leaderboards',
                description: 'Analytics-backed contribution metrics to boost participation.'
            }
        ]
    },
    {
        slug: 'leaderboard-badges',
        category: 'Engagement',
        title: 'Leaderboard & Badges',
        heroDescription: 'Boost engagement and motivation through performance-based leaderboards and achievement badges that celebrate learner progress.',
        heroGradient: 'linear-gradient(135deg, #713f12 0%, #eab308 50%, #fef08a 100%)',
        capabilities: [
            {
                icon: <Trophy className="text-yellow-500" />,
                title: 'Real-time Rankings',
                description: 'Instantly updating competition boards based on learner activity.'
            },
            {
                icon: <PenTool className="text-yellow-500" />,
                title: 'Custom Badge Design',
                description: 'Create unique visual rewards aligned with your academy brand.'
            },
            {
                icon: <Award className="text-yellow-500" />,
                title: 'Achievement Milestones',
                description: 'Auto-unlock awards when students reach specific learning goals.'
            },
            {
                icon: <Users className="text-yellow-500" />,
                title: 'Team Competitions',
                description: 'Gamify learning across cohorts or groups for collective success.'
            },
            {
                icon: <Activity className="text-yellow-500" />,
                title: 'Progress Tracking',
                description: 'Visual motivation through real-time percent-complete metrics.'
            }
        ]
    },
    {
        slug: 'lxp-learner-portal',
        category: 'Portals',
        title: 'Learner Experience Portal (LXP)',
        heroDescription: 'An immersive, unified portal for students to discover, consume, and track their educational journey.',
        heroGradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #7c3aed 100%)',
        capabilities: [
            {
                icon: <LayoutTemplate className="text-indigo-500" />,
                title: 'Personalized Dashboard',
                description: 'A centralized view of courses, progress, and upcoming tasks.'
            },
            {
                icon: <Target className="text-indigo-500" />,
                title: 'Goal Tracking',
                description: 'Set and monitor personal learning objectives over time.'
            },
            {
                icon: <MessageCircle className="text-indigo-500" />,
                title: 'Peer Collaboration',
                description: 'Connect and learn alongside peers with integrated social features.'
            },
            {
                icon: <CheckCircle2 className="text-indigo-500" />,
                title: 'Auto Progress Tracking',
                description: 'Automated monitoring of your learning journey and milestone completion.'
            },
            {
                icon: <HardDrive className="text-indigo-500" />,
                title: 'Resource Library',
                description: 'Access all your necessary study materials and recorded sessions in one place.'
            }
        ]
    },
    {
        slug: 'mxp-mentor-portal',
        category: 'Portals',
        title: 'Mentor Experience Portal (MXP)',
        heroDescription: 'A dedicated workspace for mentors and educators to manage cohorts, evaluate performance, and guide students.',
        heroGradient: 'linear-gradient(135deg, #2e1065 0%, #7e22ce 50%, #c026d3 100%)',
        capabilities: [
            {
                icon: <Users className="text-fuchsia-500" />,
                title: 'Cohort Overview',
                description: 'Access detailed performance and engagement metrics for all students.'
            },
            {
                icon: <MessageCircle className="text-fuchsia-500" />,
                title: 'Direct Feedback',
                description: 'Streamlined tools to provide meaningful coaching and guidance.'
            },
            {
                icon: <Activity className="text-fuchsia-500" />,
                title: 'Activity Monitoring',
                description: 'Real-time tracking of learner participation, attendance, and lab activities.'
            },
            {
                icon: <LineChart className="text-fuchsia-500" />,
                title: 'Grade Distribution',
                description: 'Visualize cohort performance against target benchmarks.'
            },
            {
                icon: <Brain className="text-fuchsia-500" />,
                title: 'Automated Insights',
                description: 'Predictive analytics to identify at-risk students and drive success.'
            }
        ]
    },
    {
        slug: 'crm-portal',
        category: 'Portals',
        title: 'Customer Relationship Management',
        heroDescription: 'Built-in CRM features to manage enrollments, track prospects, and streamline communications.',
        heroGradient: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #34d399 100%)',
        capabilities: [
            {
                icon: <Globe className="text-emerald-500" />,
                title: 'Enrollment Tracking',
                description: 'Monitor the candidate journey from prospect to enrolled student.'
            },
            {
                icon: <LineChart className="text-emerald-500" />,
                title: 'Communication Logs',
                description: 'Keep a secure record of all interactions and updates.'
            },
            {
                icon: <ShieldAlert className="text-emerald-500" />,
                title: 'Auto Reminders',
                description: 'Proactive notifications for follow-ups and enrollment milestones.'
            },
            {
                icon: <Layers className="text-emerald-500" />,
                title: 'Bulk Operations',
                description: 'Update statuses or send communications to hundreds of prospects at once.'
            },
            {
                icon: <Link className="text-emerald-500" />,
                title: 'Integration Ready',
                description: 'Seamlessly connect your CRM data with external marketing tools.'
            }
        ]
    }
];
