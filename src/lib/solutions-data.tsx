import React from 'react';
import {
    Building2, GraduationCap, School,
    PenTool, Brain, LayoutTemplate, TerminalSquare,
    Code2, Landmark, HeartPulse, BookOpen,
    Briefcase, MonitorSmartphone, Factory, Laptop,
    LineChart, ShieldAlert, Sparkles, Users, Lock, Calendar, MessageCircle,
    Layers, Rocket, ShieldCheck, Link, Award
} from 'lucide-react';

export type SolutionBenefit = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

export type SolutionData = {
    slug: string;
    category: string;
    title: string;
    heroDescription: string;
    heroGradient: string;
    benefits: SolutionBenefit[];
    trustedBy?: {
        title: string;
        categories: {
            name: string;
            items: string[];
        }[];
    };
};

export const solutionsData: SolutionData[] = [
    // --- TEACHGRID FOR ---
    {
        slug: 'organizations',
        category: 'TeachGrid For',
        title: 'Organizations',
        heroDescription: 'Empower your teams with AI-driven training programs, real-time analytics, and scalable learning infrastructure designed for modern enterprises.',
        heroGradient: 'linear-gradient(135deg, #020617 0%, #1e40af 50%, #3b82f6 100%)',
        benefits: [
            {
                icon: <Layers className="text-blue-500" />,
                title: 'Scale Effortlessly',
                description: 'Train thousands of employees simultaneously with cohort management and automated workflows.'
            },
            {
                icon: <LineChart className="text-blue-500" />,
                title: 'Data-Driven Insights',
                description: 'Track engagement, measure ROI, and identify skill gaps with intelligent analytics.'
            },
            {
                icon: <Rocket className="text-blue-500" />,
                title: 'Accelerate Onboarding',
                description: 'Reduce time-to-productivity with AI-personalized learning paths for new hires.'
            },
            {
                icon: <ShieldCheck className="text-blue-500" />,
                title: 'Enterprise Security',
                description: 'Bank-level encryption, SSO integration, and compliance with industry standards.'
            },
            {
                icon: <Link className="text-blue-500" />,
                title: 'Seamless Integrations',
                description: 'Connect with your existing HR systems, CRM, and productivity tools.'
            },
            {
                icon: <LayoutTemplate className="text-blue-500" />,
                title: 'White-Label Ready',
                description: 'Fully customizable platform that aligns with your brand identity.'
            }
        ],
        trustedBy: {
            title: 'Built for Your Training Needs',
            categories: [
                {
                    name: 'Employee Onboarding',
                    items: ['Structured onboarding programs', 'AI-guided learning paths', 'Faster time-to-productivity']
                },
                {
                    name: 'Skills Development',
                    items: ['Upskill and reskill workforce', 'Personalized training programs', 'Align with business goals']
                },
                {
                    name: 'Compliance Training',
                    items: ['Tracked certifications', 'Automated reminders', 'Audit-ready reports']
                },
                {
                    name: 'Leadership Development',
                    items: ['Specialized programs', 'Assessments', 'Performance tracking']
                }
            ]
        }
    },
    {
        slug: 'schools-colleges-universities',
        category: 'TeachGrid For',
        title: 'Schools, Colleges & Universities',
        heroDescription: 'Empower educators, engage students, and drive academic excellence with AI-powered learning infrastructure designed for modern educational institutions.',
        heroGradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #818cf8 100%)',
        benefits: [
            {
                icon: <BookOpen className="text-indigo-500" />,
                title: 'Complete Course Management',
                description: 'Organize curricula, assignments, and learning materials across departments and programs.'
            },
            {
                icon: <Users className="text-indigo-500" />,
                title: 'Student & Faculty Portal',
                description: 'Dedicated dashboards for students, teachers, and administrators with role-based access.'
            },
            {
                icon: <Calendar className="text-indigo-500" />,
                title: 'Academic Calendar',
                description: 'Manage semesters, exams, holidays, and events with automated notifications.'
            },
            {
                icon: <LineChart className="text-indigo-500" />,
                title: 'Performance Analytics',
                description: 'Track student progress, identify at-risk learners, and measure learning outcomes.'
            },
            {
                icon: <MessageCircle className="text-indigo-500" />,
                title: 'Parent Communication',
                description: 'Keep parents informed with real-time updates on attendance, grades, and activities.'
            },
            {
                icon: <Building2 className="text-indigo-500" />,
                title: 'Multi-Campus Support',
                description: 'Manage multiple campuses, branches, or schools from a unified platform.'
            }
        ],
        trustedBy: {
            title: 'Trusted by Educational Institutions Worldwide',
            categories: [
                {
                    name: 'K-12 Schools',
                    items: ['Digital classrooms', 'Parent-teacher communication', 'Student progress tracking', 'Online assignments & quizzes']
                },
                {
                    name: 'Colleges & Universities',
                    items: ['Department management', 'Research collaboration', 'Degree program tracking', 'Alumni engagement']
                },
                {
                    name: 'Distance Learning',
                    items: ['Virtual classrooms', 'Recorded lectures', 'Online examinations', 'Mobile learning apps']
                }
            ]
        }
    },
    {
        slug: 'institutes-academies',
        category: 'TeachGrid For',
        title: 'Institutes & Academies',
        heroDescription: 'Launch, scale, and monetize your training business. A lightning-fast platform to build courses, manage cohorts, and process payments globally.',
        heroGradient: 'linear-gradient(135deg, #4a044e 0%, #a21caf 50%, #e879f9 100%)',
        benefits: [
            {
                icon: <School className="text-fuchsia-500" />,
                title: 'Rapid Content Authoring',
                description: 'Build beautiful, interactive courses in hours instead of weeks using our intuitive drag-and-drop studio and AI builders.'
            },
            {
                icon: <Sparkles className="text-fuchsia-500" />,
                title: 'Integrated Monetization',
                description: 'Hook up your Stripe account instantly to sell courses via subscriptions, one-off payments, or bundled multi-course packages.'
            },
            {
                icon: <LayoutTemplate className="text-fuchsia-500" />,
                title: 'White-Label Branding',
                description: 'Your domain, your logos, your color scheme. Students experience a premium, custom-branded environment that looks exclusively yours.'
            },
            {
                icon: <Calendar className="text-fuchsia-500" />,
                title: 'Global Cohort Scheduling',
                description: 'Effortlessly organize live training sessions that adapt to differing time zones.'
            },
            {
                icon: <MessageCircle className="text-fuchsia-500" />,
                title: 'Peer Collaboration',
                description: 'Enable structured interaction and community building among your learners.'
            },
            {
                icon: <Award className="text-fuchsia-500" />,
                title: 'Auto-Grading & Certification',
                description: 'Instantly evaluate assessments and issue verifiable digital certificates to graduates.'
            }
        ]
    },

    // --- EXTENDED SOLUTIONS ---
    {
        slug: 'instructional-design',
        category: 'Extended Solutions',
        title: 'Instructional Design',
        heroDescription: 'Beyond software. Leverage our elite in-house team of educational experts to transform your raw knowledge into engaging, pedagogical masterpieces.',
        heroGradient: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #34d399 100%)',
        benefits: [
            {
                icon: <PenTool className="text-emerald-500" />,
                title: 'Syllabus Restructuring',
                description: 'We analyze your 100-page slide decks and structurally adapt them for optimal asynchronous online retaining.'
            },
            {
                icon: <MonitorSmartphone className="text-emerald-500" />,
                title: 'Custom Multimedia',
                description: 'Our design team creates bespoke animated videos, interactive diagrams, and professional voiceovers specifically for your courses.'
            },
            {
                icon: <ShieldAlert className="text-emerald-500" />,
                title: 'Accessibility Compliance',
                description: 'We ensure all delivered courses meet strict WCAG 2.1 AA guidelines, including complete captioning and screen-reader optimizations.'
            }
        ]
    },
    {
        slug: 'ai-for-education',
        category: 'Extended Solutions',
        title: 'AI for Education',
        heroDescription: 'Pioneering artificial intelligence specifically tuned for pedagogy. Supercharge both the teaching and the learning experience with proprietary AI models.',
        heroGradient: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #fb923c 100%)',
        benefits: [
            {
                icon: <Brain className="text-orange-500" />,
                title: 'Bespoke LLM Deployment',
                description: 'We can train and isolate a custom Large Language Model strictly on your university\'s or corporation\'s proprietary curriculum data.'
            },
            {
                icon: <Sparkles className="text-orange-500" />,
                title: 'Automated Essay Grading',
                description: 'Train our AI on your specific grading rubrics to instantly evaluate complex, free-text student submissions.'
            },
            {
                icon: <Users className="text-orange-500" />,
                title: 'Socratic Prompt Tuning',
                description: 'Our AI engineers configure your bots to act as Socratic tutors—guiding students to answers rather than just giving them away.'
            }
        ]
    },
    {
        slug: 'white-labelled-solution',
        category: 'Extended Solutions',
        title: 'White-labelled Solution',
        heroDescription: 'Own the experience. Deploy the entire power of the TeachGrid infrastructure completely hidden behind your organization\'s unique branding.',
        heroGradient: 'linear-gradient(135deg, #3f3f46 0%, #71717a 50%, #d4d4d8 100%)',
        benefits: [
            {
                icon: <LayoutTemplate className="text-zinc-500" />,
                title: 'Complete Visual Override',
                description: 'From the login screen to the certificates, inject your CSS variables, fonts, and hex codes across every single pixel.'
            },
            {
                icon: <Lock className="text-zinc-500" />,
                title: 'Custom Domains & SSL',
                description: 'Host your academy on `learning.yourcompany.com` with automatically managed SSL certificates.'
            },
            {
                icon: <LineChart className="text-zinc-500" />,
                title: 'Invisible Infrastructure',
                description: 'All system emails (password resets, notifications) are sent from your corporate SMTP servers. TeachGrid remains entirely invisible.'
            }
        ]
    },
    {
        slug: 'api-solution',
        category: 'Extended Solutions',
        title: 'Headless API Solutions',
        heroDescription: 'For engineering teams. Build your own completely custom front-end applications while relying on TeachGrid\'s robust backend to process the complex learning logic.',
        heroGradient: 'linear-gradient(135deg, #14532d 0%, #15803d 50%, #86efac 100%)',
        benefits: [
            {
                icon: <TerminalSquare className="text-green-500" />,
                title: 'Extensive GraphQL API',
                description: 'Query exactly the data you need. Retrieve user progress, trigger enrollments, and manipulate cohort data programmatically.'
            },
            {
                icon: <Sparkles className="text-green-500" />,
                title: 'Real-time Webhooks',
                description: 'Subscribe to platform events (e.g. `course.completed`, `quiz.failed`) to trigger logic in your internal CRMs or HR tools instantly.'
            },
            {
                icon: <Code2 className="text-green-500" />,
                title: 'SDKs for Major Frameworks',
                description: 'Hit the ground running with officially maintained SDK wrappers for Node.js, Python, Ruby, and Java.'
            }
        ]
    },

    // --- INDUSTRY ---
    {
        slug: 'software',
        category: 'Industry',
        title: 'Software & Technology',
        heroDescription: 'Continuous learning for continuous deployment. A platform capable of keeping up with rapidly changing codebases and highly technical engineering teams.',
        heroGradient: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 50%, #60a5fa 100%)',
        benefits: [
            {
                icon: <Code2 className="text-blue-500" />,
                title: 'Executable Code Sandboxes',
                description: 'Assess engineers by asking them to write real Python, React, or Go code directly inside the browser-based test environment.'
            },
            {
                icon: <Brain className="text-blue-500" />,
                title: 'GitHub Integration',
                description: 'Automatically trigger micro-learning courses based on common pull-request comments or recurring CI/CD failures.'
            },
            {
                icon: <Sparkles className="text-blue-500" />,
                title: 'Documentation ingestion',
                description: 'TeachGrid AI consumes your internal READMEs and Confluence pages to instantly generate onboarding pathways for new hires.'
            }
        ]
    },
    {
        slug: 'finance',
        category: 'Industry',
        title: 'Financial Services',
        heroDescription: 'Secure, compliant, and auditable training logistics for banks, fintechs, and massive accounting firms operating in highly regulated environments.',
        heroGradient: 'linear-gradient(135deg, #022c22 0%, #059669 50%, #6ee7b7 100%)',
        benefits: [
            {
                icon: <Landmark className="text-emerald-500" />,
                title: 'Regulatory Audit Trails',
                description: 'Generate instant, tamper-proof reporting to prove to auditors precisely when an employee completed mandated SEC/FINRA compliance training.'
            },
            {
                icon: <ShieldAlert className="text-emerald-500" />,
                title: 'Data Sovereignty',
                description: 'Ensure extreme security compliance by dictating exactly which geographic servers (US/EU) house your sensitive employee data.'
            },
            {
                icon: <Lock className="text-emerald-500" />,
                title: 'On-Premises Options',
                description: 'For organizations with extreme security requirements, TeachGrid offers private cloud and fully on-premises deployment solutions.'
            }
        ]
    },
    {
        slug: 'healthcare',
        category: 'Industry',
        title: 'Healthcare & Pharma',
        heroDescription: 'Lifesaving training requires flawless delivery. Educate doctors, nurses, and medical staff with a platform designed for critical continuous education.',
        heroGradient: 'linear-gradient(135deg, #4c0519 0%, #e11d48 50%, #fca5a5 100%)',
        benefits: [
            {
                icon: <HeartPulse className="text-rose-500" />,
                title: 'CEU Management',
                description: 'Automatically track and distribute Continuing Education Units (CEUs) to medical professionals as they complete their yearly requirements.'
            },
            {
                icon: <TerminalSquare className="text-rose-500" />,
                title: 'High-Fidelity Virtual Labs',
                description: 'Integrate massive SCORM files and 3D medical simulations directly into the browser without stuttering or lag.'
            },
            {
                icon: <ShieldAlert className="text-rose-500" />,
                title: 'HIPAA & Compliance Ready',
                description: 'Our enterprise infrastructure is built to support the rigorous privacy and security requirements demanded by global healthcare regulators.'
            }
        ]
    },
    {
        slug: 'education',
        category: 'Industry',
        title: 'K-12 & Higher Education',
        heroDescription: 'Inspire the next generation. A comprehensive, accessible, and deeply engaging digital environment designed specifically for modern students.',
        heroGradient: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 50%, #818cf8 100%)',
        benefits: [
            {
                icon: <School className="text-indigo-500" />,
                title: 'Parent/Guardian Portals',
                description: 'Give parents dedicated logins to transparently track their child\'s progress, attendance, and upcoming assignment deadlines.'
            },
            {
                icon: <MonitorSmartphone className="text-indigo-500" />,
                title: 'Accessibility First',
                description: 'Dyslexia-friendly fonts, high contrast modes, and robust screen-reader support to ensure equitable learning for every single student.'
            },
            {
                icon: <ShieldAlert className="text-indigo-500" />,
                title: 'FERPA Compliant',
                description: 'Built from the ground up to protect student privacy and ensure compliance with educational data regulations.'
            }
        ]
    },
    {
        slug: 'consulting',
        category: 'Industry',
        title: 'Consulting & Agencies',
        heroDescription: 'Productize your knowledge. Turn your firm\'s unique frameworks and methodologies into scalable, digital training products for your clients.',
        heroGradient: 'linear-gradient(135deg, #312e81 0%, #7c3aed 50%, #c4b5fd 100%)',
        benefits: [
            {
                icon: <Briefcase className="text-violet-500" />,
                title: 'B2B Client Portals',
                description: 'Spin up distinct, white-labeled sub-academies (multi-tenancy) so each of your consulting clients has their own private learning environment.'
            },
            {
                icon: <LineChart className="text-violet-500" />,
                title: 'Engagement Proof',
                description: 'Demonstrate ROI to your clients by showing them exact analytics on how their teams are utilizing your specialized digital training.'
            },
            {
                icon: <Sparkles className="text-violet-500" />,
                title: 'Rapid Monetization',
                description: 'Transition from selling expensive one-off workshops to selling scalable, recurring subscriptions to your digital academy.'
            }
        ]
    },
    {
        slug: 'tech-it-services',
        category: 'Industry',
        title: 'Tech & IT Services',
        heroDescription: 'Keep certifications current globally. Manage the incredibly complex certification logic required for massive MSPs and global IT service providers.',
        heroGradient: 'linear-gradient(135deg, #082f49 0%, #0284c7 50%, #7dd3fc 100%)',
        benefits: [
            {
                icon: <Laptop className="text-sky-500" />,
                title: 'Certification Expirations',
                description: 'The system automatically tracks when vendor certifications (AWS, Cisco) expire and triggers re-certification pathways for those employees.'
            },
            {
                icon: <TerminalSquare className="text-sky-500" />,
                title: 'Integration Deep-Links',
                description: 'Embed training modules directly into your internal ticketing systems (Jira, ServiceNow) so agents can learn exactly when they encounter a new issue.'
            },
            {
                icon: <Users className="text-sky-500" />,
                title: 'Global Cohort Scheduling',
                description: 'Effortlessly organize live training sessions that automatically adapt to the differing time zones and holidays of your global workforce.'
            }
        ]
    },
    {
        slug: 'manufacturing',
        category: 'Industry',
        title: 'Manufacturing & Supply Chain',
        heroDescription: 'Training beyond the desk. Deliver critical safety protocols and operational training directly to frontline workers seamlessly across mobile devices.',
        heroGradient: 'linear-gradient(135deg, #713f12 0%, #ca8a04 50%, #fde047 100%)',
        benefits: [
            {
                icon: <Factory className="text-yellow-600" />,
                title: 'Mobile-First Microlearning',
                description: 'Frontline workers can access highly compressed 3-minute safety videos on their smartphones directly on the factory floor.'
            },
            {
                icon: <Sparkles className="text-yellow-600" />,
                title: 'Multilingual AI Support',
                description: 'Automatically translate mandatory safety protocols into 40+ languages so your global supply chain workforce learns in their native tongue.'
            },
            {
                icon: <ShieldAlert className="text-yellow-600" />,
                title: 'Compliance Sign-Offs',
                description: 'Require digital signatures and strict video watch-throughs before an employee is permitted to operate new, heavy machinery.'
            }
        ]
    }
];
