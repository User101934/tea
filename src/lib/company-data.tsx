import React from 'react';
import {
    Info, BarChart3, Star, ShieldCheck,
    Gavel, Users, Heart, Briefcase,
    Mail, Scale, Globe, MapPin, Phone,
    Facebook, Twitter, Instagram, Linkedin,
    CheckCircle2, Building2, Sparkles, Rocket, HardDrive
} from 'lucide-react';

export type CompanyPoint = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

export type CompanyData = {
    slug: string;
    category: string;
    title: string;
    heroDescription: string;
    heroGradient: string;
    points: CompanyPoint[];
    specialLayout?: 'about' | 'contact' | 'default';
    hashInkludesDetails?: {
        address: string;
        phone: string;
        email: string;
        socials: { icon: React.ReactNode; href: string }[];
    };
};

export const companyData: CompanyData[] = [
    {
        slug: 'about-us',
        category: 'Company',
        title: 'About Us',
        heroDescription: 'TeachGrid is the intelligent learning infrastructure from HashInkludes. Built to scale, inspire, and reshape education.',
        heroGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
        specialLayout: 'about',
        points: [
            {
                icon: <Building2 className="text-indigo-400" />,
                title: 'About HashInkludes',
                description: 'HashInkludes is a company driven by innovation and purpose - creating ventures that empower people, redefine industries, and shape the future.'
            },
            {
                icon: <Sparkles className="text-indigo-400" />,
                title: 'Our Vision',
                description: 'We\'re reimagining the future of teaching and learning by building the world\'s most intelligent educational infrastructure.'
            },
            {
                icon: <Rocket className="text-indigo-400" />,
                title: 'Join Us',
                description: 'Experience the power of intelligent learning infrastructure. Join us in our mission to empower educators globally.'
            }
        ],
        hashInkludesDetails: {
            address: 'Regus - Hanudev Infopark, 6th Floor, Nava India Road, Udayampalayam Rd, Coimbatore - 641028, Tamil Nadu, India',
            phone: '+91 79040 24657',
            email: 'info@teachgrid.io',
            socials: [
                { icon: <Facebook size={18} />, href: '#' },
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Instagram size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' }
            ]
        }
    },
    {
        slug: 'contact',
        category: 'Company',
        title: 'Contact',
        heroDescription: 'We\'d love to hear from you! Have questions or feedback? Reach out – we\'re here to help!',
        heroGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        specialLayout: 'contact',
        points: [],
        hashInkludesDetails: {
            address: 'HashInkludes Technologies\nRegus - Hanudev Infopark, 6th Floor, Nava India Road, Udayampalayam Rd, Coimbatore - 641028, Tamil Nadu, India',
            phone: '+91 79040 24657',
            email: 'info@teachgrid.io',
            socials: [
                { icon: <Facebook size={18} />, href: '#' },
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Instagram size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' }
            ]
        }
    },
    {
        slug: 'case-studies',
        category: 'Company',
        title: 'Case Studies',
        heroDescription: 'See how leading organizations use TeachGrid to transform their learning outcomes and scale their educational impact.',
        heroGradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #0d9488 100%)',
        points: [
            {
                icon: <BarChart3 className="text-teal-400" />,
                title: 'Enterprise Success',
                description: 'How a Fortune 500 company reduced onboarding time by 40% using TeachGrid AI agents.'
            },
            {
                icon: <CheckCircle2 className="text-teal-400" />,
                title: 'University Scalability',
                description: 'Supporting 50,000 students across 12 departments with a single unified infrastructure.'
            },
            {
                icon: <Users className="text-teal-400" />,
                title: 'Global Impact',
                description: 'Delivering critical training to remote workforces in over 40 languages seamlessly.'
            }
        ]
    },
    {
        slug: 'customer-reviews',
        category: 'Company',
        title: 'Customer Reviews',
        heroDescription: 'Don\'t just take our word for it. Read what educators, administrators, and students have to say about TeachGrid.',
        heroGradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0284c7 100%)',
        points: [
            {
                icon: <Star className="text-sky-400" />,
                title: 'G2 Leader',
                description: 'Currently ranked as a high performer in the Enterprise LMS category for 4 consecutive quarters.'
            },
            {
                icon: <CheckCircle2 className="text-sky-400" />,
                title: '98% Satisfaction',
                description: 'Our customer support team maintains a near-perfect satisfaction rating across all support tickets.'
            },
            {
                icon: <Users className="text-sky-400" />,
                title: 'Industry Choice',
                description: 'Voted as the most innovative learning infrastructure by the Global EdTech Consortium.'
            }
        ]
    },
    {
        slug: 'security',
        category: 'Company',
        title: 'Security',
        heroDescription: 'Your data security is our top priority. We employ military-grade encryption and rigorous compliance standards to protect your academy.',
        heroGradient: 'linear-gradient(135deg, #171717 0%, #262626 50%, #404040 100%)',
        points: [
            {
                icon: <ShieldCheck className="text-white/50" />,
                title: 'SOC 2 Type II',
                description: 'We maintain continuous compliance with SOC 2 standards for security, availability, and confidentiality.'
            },
            {
                icon: <MapPin className="text-white/50" />,
                title: 'Data Sovereignty',
                description: 'Choose your hosting region to comply with local data regulations like GDPR or CCPA.'
            },
            {
                icon: <Scale className="text-white/50" />,
                title: 'Active Monitoring',
                description: '24/7 automated threat detection and DDoS protection for all TeachGrid instances.'
            }
        ]
    },
    {
        slug: 'legal',
        category: 'Company',
        title: 'Legal',
        heroDescription: 'Transparency and trust. Review our terms of service, privacy policy, and data processing agreements.',
        heroGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        points: [
            {
                icon: <Gavel className="text-slate-400" />,
                title: 'Terms of Service',
                description: 'The legal framework for using our platform and your rights as a TeachGrid customer.'
            },
            {
                icon: <ShieldCheck className="text-slate-400" />,
                title: 'Privacy Policy',
                description: 'How we collect, use, and protect your personal information and that of your learners.'
            },
            {
                icon: <Scale className="text-slate-400" />,
                title: 'DPA',
                description: 'Our Data Processing Addendum for enterprise customers requiring strict regulatory compliance.'
            }
        ]
    },
    {
        slug: 'customers',
        category: 'Company',
        title: 'Our Customers',
        heroDescription: 'From startups to global universities, TeachGrid powers the next generation of online education.',
        heroGradient: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #3b82f6 100%)',
        points: [
            {
                icon: <Building2 className="text-blue-400" />,
                title: 'Education Giants',
                description: 'Processing over 1 million concurrent learners across our largest university partners.'
            },
            {
                icon: <Globe className="text-blue-400" />,
                title: 'Global NGOs',
                description: 'Supporting educational outreach in developing nations with offline-first learning technologies.'
            },
            {
                icon: <Heart className="text-blue-400" />,
                title: 'Skill Bootcamps',
                description: 'Helping thousands of professionals transition into tech careers through intensive training platforms.'
            }
        ]
    },
    {
        slug: 'testimonials',
        category: 'Company',
        title: 'Testimonials',
        heroDescription: 'Voices from the frontlines of education. Hear how TeachGrid has changed lives and empowered teachers.',
        heroGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
        points: [
            {
                icon: <Star className="text-indigo-400" />,
                title: 'Teacher Voice',
                description: '"TeachGrid AI didn\'t replace me; it gave me back 10 hours a week to actually mentor my students."'
            },
            {
                icon: <Star className="text-indigo-400" />,
                title: 'Student Voice',
                description: '"The LXP is so clean and intuitive. I actually look forward to logging in and completing my modules."'
            },
            {
                icon: <Star className="text-indigo-400" />,
                title: 'Admin Voice',
                description: '"The best migration we\'ve ever done. We switched 20,000 users over a weekend with zero downtime."'
            }
        ]
    },
    {
        slug: 'careers',
        category: 'Company',
        title: 'Careers',
        heroDescription: 'Build the future of learning. We\'re always looking for brilliant minds to help us scale the world\'s intelligent learning infrastructure.',
        heroGradient: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #7c3aed 100%)',
        points: [
            {
                icon: <Briefcase className="text-violet-400" />,
                title: 'Remote First',
                description: 'Work from anywhere in the world. We value talent over location and flexibility over rigid schedules.'
            },
            {
                icon: <Heart className="text-violet-400" />,
                title: 'Impactful Work',
                description: 'Every line of code you write and every design you create directly impacts the education of millions.'
            },
            {
                icon: <Sparkles className="text-violet-400" />,
                title: 'Growth Mindset',
                description: 'Generous learning stipends and professional development paths to ensure you stay at the top of your game.'
            }
        ]
    },
    {
        slug: 'comparison',
        category: 'Company',
        title: 'Comparison',
        heroDescription: 'See why TeachGrid stands apart from legacy LMS systems and modern competitors.',
        heroGradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
        points: [
            {
                icon: <Scale className="text-slate-400" />,
                title: 'Feature Richness',
                description: 'More native AI features and assessment types than any other platform in its class.'
            },
            {
                icon: <HardDrive className="text-slate-400" />,
                title: 'Architectural Scale',
                description: 'Built on modern serverless infrastructure that scales automatically with your traffic peaks.'
            },
            {
                icon: <CheckCircle2 className="text-slate-400" />,
                title: 'Premium UX',
                description: 'A consumer-grade experience for students compared to the complex, clunky interfaces of competitors.'
            }
        ]
    }
];
