import React from 'react';
import {
    FileText, LifeBuoy, Users, BookOpen,
    Newspaper, Rocket, MessageSquare, Lightbulb,
    FileCode, ShieldCheck, Zap
} from 'lucide-react';

export type ResourceTopic = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

export type ResourceData = {
    slug: string;
    category: string;
    title: string;
    heroDescription: string;
    heroGradient: string;
    topics: ResourceTopic[];
};

export const resourcesData: ResourceData[] = [
    // --- SUPPORT & CONTENT ---
    {
        slug: 'documentation',
        category: 'Support & Content',
        title: 'Documentation',
        heroDescription: 'The comprehensive technical guide to building, scaling, and managing your TeachGrid infrastructure. From API references to integration guides.',
        heroGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        topics: [
            {
                icon: <FileCode className="text-slate-400" />,
                title: 'Quickstart Guide',
                description: 'Get your academy up and running in less than 15 minutes with our step-by-step onboarding documentation.'
            },
            {
                icon: <Zap className="text-slate-400" />,
                title: 'API Reference',
                description: 'Explore our extensive GraphQL and REST endpoints to build custom integrations and headless experiences.'
            },
            {
                icon: <ShieldCheck className="text-slate-400" />,
                title: 'Security Compliance',
                description: 'Detailed documentation on our data encryption standards, SSO configurations, and privacy protocols.'
            }
        ]
    },
    {
        slug: 'help-center',
        category: 'Support & Content',
        title: 'Help Center',
        heroDescription: 'Your first stop for troubleshooting and general support. Find answers to common questions about billing, account setup, and platform features.',
        heroGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
        topics: [
            {
                icon: <LifeBuoy className="text-indigo-400" />,
                title: 'Platform Basics',
                description: 'Learn how to create your first course, manage your student roster, and navigate the dashboard.'
            },
            {
                icon: <Users className="text-indigo-400" />,
                title: 'Billing & Account',
                description: 'Manage your subscription, update payment methods, and understand our seat-based pricing model.'
            },
            {
                icon: <MessageSquare className="text-indigo-400" />,
                title: 'Troubleshooting',
                description: 'Solutions for common browser issues, video playback problems, and mobile app synchronization.'
            }
        ]
    },
    {
        slug: 'community-q-a',
        category: 'Support & Content',
        title: 'Community & Q/A',
        heroDescription: 'Connect with fellow educators and TeachGrid power-users. Share best practices, ask for advice, and join the conversation.',
        heroGradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #0d9488 100%)',
        topics: [
            {
                icon: <Users className="text-teal-400" />,
                title: 'Educator Forums',
                description: 'Join discussions on pedagogical strategies and how to maximize student engagement using TeachGrid AI.'
            },
            {
                icon: <MessageSquare className="text-teal-400" />,
                title: 'Expert Q&A',
                description: 'Weekly live sessions where TeachGrid engineers and instructional designers answer your toughest questions.'
            },
            {
                icon: <Zap className="text-teal-400" />,
                title: 'Community Showcases',
                description: 'See how other organizations are using TeachGrid to transform their training and education programs.'
            }
        ]
    },
    {
        slug: 'blog-insights',
        category: 'Support & Content',
        title: 'Blog & Insights',
        heroDescription: 'Stay ahead of the curve with our latest thoughts on AI in education, workplace training trends, and platform updates.',
        heroGradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0284c7 100%)',
        topics: [
            {
                icon: <Newspaper className="text-sky-400" />,
                title: 'Industry Analysis',
                description: 'Deep dives into the state of EdTech and the future of artificial intelligence in the classroom.'
            },
            {
                icon: <Lightbulb className="text-sky-400" />,
                title: 'Teacher Spotlights',
                description: 'Hear from successful instructors about their journey and how they built thriving online academies.'
            },
            {
                icon: <BookOpen className="text-sky-400" />,
                title: 'Product Guides',
                description: 'Extended walkthroughs of new features and creative ways to use TeachGrid for your organization.'
            }
        ]
    },
    {
        slug: 'release-notes',
        category: 'Support & Content',
        title: 'Release Notes',
        heroDescription: 'The logbook of our continuous evolution. Track every new feature, bug fix, and performance improvement we ship.',
        heroGradient: 'linear-gradient(135deg, #171717 0%, #262626 50%, #404040 100%)',
        topics: [
            {
                icon: <Rocket className="text-white/50" />,
                title: 'Monthly Major Updates',
                description: 'Summary of the most significant features and architectural improvements we release every 30 days.'
            },
            {
                icon: <Zap className="text-white/50" />,
                title: 'Patch Logs',
                description: 'Technical breakdown of minor bug fixes and security patches applied to the platform.'
            },
            {
                icon: <FileText className="text-white/50" />,
                title: 'Upcoming Roadmap',
                description: 'A sneak peek into the features our engineering team is currently building for future releases.'
            }
        ]
    },

    // --- CUSTOMER FEEDBACK ---
    {
        slug: 'submit-feedback',
        category: 'Customer Feedback',
        title: 'Submit Feedback',
        heroDescription: 'We build TeachGrid for you. Share your experience and help us understand how we can make the platform better.',
        heroGradient: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 50%, #991b1b 100%)',
        topics: [
            {
                icon: <MessageSquare className="text-rose-400" />,
                title: 'User Experience',
                description: 'Tell us about your dashboard experience or any pain points you encounter during your daily workflows.'
            },
            {
                icon: <Zap className="text-rose-400" />,
                title: 'Performance Reports',
                description: 'Help us identify slow-loading areas or playback issues on specific devices or regions.'
            },
            {
                icon: <ShieldCheck className="text-rose-400" />,
                title: 'Accessibility Feedback',
                description: 'Help us improve our inclusive design by reporting any barriers for screen readers or specialized inputs.'
            }
        ]
    },
    {
        slug: 'feature-requests',
        category: 'Customer Feedback',
        title: 'Feature Requests',
        heroDescription: 'Have an idea for a new TeachGrid feature? Submit it here and vote on ideas from the community.',
        heroGradient: 'linear-gradient(135deg, #3f2c23 0%, #78350f 50%, #92400e 100%)',
        topics: [
            {
                icon: <Lightbulb className="text-amber-400" />,
                title: 'Upvote Ideas',
                description: 'Browse the most requested features from other users and add your support to the ones you need most.'
            },
            {
                icon: <Zap className="text-amber-400" />,
                title: 'Public Trello',
                description: 'Monitor our public development board to see which requested features have been moved to "In Progress".'
            },
            {
                icon: <Rocket className="text-amber-400" />,
                title: 'Beta Program',
                description: 'Sign up to be the first to test new, experimental features before they roll out to everyone.'
            }
        ]
    },
    {
        slug: 'product-suggestions',
        category: 'Customer Feedback',
        title: 'Product Suggestions',
        heroDescription: 'For strategic improvements and partnership ideas. Help us shape the long-term vision of the TeachGrid ecosystem.',
        heroGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)',
        topics: [
            {
                icon: <BookOpen className="text-indigo-400" />,
                title: 'Strategic Roadmap',
                description: 'Insights into where we are taking the platform over the next 12 to 24 months.'
            },
            {
                icon: <LifeBuoy className="text-indigo-400" />,
                title: 'Integration Ideas',
                description: 'Suggest new third-party tools (CRMs, HRIS, Slack) you would like to see natively integrated with TeachGrid.'
            },
            {
                icon: <Zap className="text-indigo-400" />,
                title: 'AI Innovation',
                description: 'Share your ideas on how we can use new AI models to make teaching more efficient and learning more effective.'
            }
        ]
    }
];
