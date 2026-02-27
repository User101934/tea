import React from 'react';
import { Sparkles, Linkedin, Twitter, Github } from 'lucide-react';
import Link from 'next/link';

const SECTIONS = [
  {
    title: 'Platform',
    links: ['Smart LMS', 'Cohort Management', 'LXP Portal', 'MXP Portal', 'CRM', 'Assessment']
  },
  {
    title: 'Solutions',
    links: ['Organizations', 'Colleges & Universities', 'Institutes & Academies', 'White-labelled Solution']
  },
  {
    title: 'Company',
    links: ['About Us', 'Customers', 'Case Studies', 'Testimonials', 'Careers', 'Security']
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Help Center', 'Community', 'Blog', 'Release Notes']
  }
];

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-32 pb-16 border-t border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 mb-24">
            <div className="col-span-2 space-y-8">
              <Link href="/" className="flex items-center gap-2 group">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/f32bc3e4-3637-45b4-97a7-8620b4aefe83/image-resized-1772182697345.webp?width=8000&height=8000&resize=contain" 
                  alt="TeachGrid" 
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs text-lg leading-relaxed">
              Powering the next generation of global learning infrastructure.
            </p>
            <div className="flex items-center gap-6 text-slate-400 dark:text-slate-600">
              <Link href="#" className="hover:text-indigo-600 transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors"><Github size={20} /></Link>
            </div>
          </div>

          {SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h5 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600">{section.title}</h5>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400 dark:text-slate-600">
          <p>© 2026 TeachGrid. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
