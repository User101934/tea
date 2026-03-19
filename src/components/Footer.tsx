"use client";
import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    /* z-10 and -mt-12 pulls the footer over the preceding section to hide the edge */
    <footer className="w-full relative z-10 -mt-12">
      {/* Background set to pure white and full width with a sharp, tight curve at the edges */}
      <div className="w-full bg-white text-[#111110] pt-24 pb-12 rounded-t-[20px] md:rounded-t-[24px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            {/* Company Info */}
            <div className="lg:col-span-4 lg:pr-4 flex flex-col">
              <Link href="/" className="inline-block mb-6">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="TeachGrid" className="h-[36px] w-auto" />
                </div>
              </Link>
              <p className="text-slate-500 text-[14px] leading-[1.6] mb-8">
                AI-powered learning infrastructure for smarter,<br />scalable education experiences.
              </p>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 lg:pl-8 mt-4 lg:mt-0">
              <div>
                <h4 className="font-bold mb-6 text-[15px]">Products</h4>
                <ul className="space-y-4 text-slate-500 text-[14px]">
                  <li><Link href="/platform/campus" className="hover:text-indigo-600 transition-colors">TeachGrid Campus</Link></li>
                  <li><Link href="/platform/spark" className="hover:text-indigo-600 transition-colors">TeachGrid Spark</Link></li>
                  <li><Link href="/platform/features/lxp-learner-portal" className="hover:text-indigo-600 transition-colors">LXP</Link></li>
                  <li><Link href="/platform/features/mxp-mentor-portal" className="hover:text-indigo-600 transition-colors">MXP</Link></li>
                  <li><Link href="/platform/features/crm-portal" className="hover:text-indigo-600 transition-colors">CRM Portal</Link></li>
                  <li><Link href="/platform/features" className="hover:text-indigo-600 transition-colors">All Features</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-[15px]">Solutions</h4>
                <ul className="space-y-4 text-slate-500 text-[14px]">
                  <li><Link href="/solutions/organizations" className="hover:text-indigo-600 transition-colors">For Organizations</Link></li>
                  <li><Link href="/solutions/schools" className="hover:text-indigo-600 transition-colors">Schools & Universities</Link></li>
                  <li><Link href="/solutions/institutes" className="hover:text-indigo-600 transition-colors">Institutes & Academies</Link></li>
                  <li><Link href="/solutions/white-labelled" className="hover:text-indigo-600 transition-colors">White-labelled Solution</Link></li>
                  <li><Link href="/solutions/api" className="hover:text-indigo-600 transition-colors">API Solution</Link></li>
                  <li className="pt-3"><span className="text-slate-900 font-semibold mb-2 block text-[12px] uppercase tracking-wider">Industries</span></li>
                  <li><Link href="/solutions/software" className="hover:text-indigo-600 transition-colors">Software & IT</Link></li>
                  <li><Link href="/solutions/healthcare" className="hover:text-indigo-600 transition-colors">Healthcare</Link></li>
                  <li><Link href="/solutions/finance" className="hover:text-indigo-600 transition-colors">Finance</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-[15px]">Resources</h4>
                <ul className="space-y-4 text-slate-500 text-[14px]">
                  <li><Link href="/resources/documentation" className="hover:text-indigo-600 transition-colors">Documentation</Link></li>
                  <li><Link href="/resources/help" className="hover:text-indigo-600 transition-colors">Help Center</Link></li>
                  <li><Link href="/resources/community" className="hover:text-indigo-600 transition-colors">Community & Q/A</Link></li>
                  <li><Link href="/resources/blog" className="hover:text-indigo-600 transition-colors">Blog & Insights</Link></li>
                  <li><Link href="/resources/release-notes" className="hover:text-indigo-600 transition-colors">Release Notes</Link></li>
                  <li><Link href="/resources/feedback" className="hover:text-indigo-600 transition-colors">Submit Feedback</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-[15px]">Company</h4>
                <ul className="space-y-4 text-slate-500 text-[14px]">
                  <li><Link href="/company/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
                  <li><Link href="/company/careers" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
                  <li><Link href="/company/case-studies" className="hover:text-indigo-600 transition-colors">Case Studies</Link></li>
                  <li><Link href="/company/reviews" className="hover:text-indigo-600 transition-colors">Customer Reviews</Link></li>
                  <li><Link href="/company/security" className="hover:text-indigo-600 transition-colors">Security</Link></li>
                  <li><Link href="/company/contact" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
                  <li><Link href="/company/legal" className="hover:text-indigo-600 transition-colors">Legal</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-100 pt-8 flex flex-col xl:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 xl:gap-6 order-2 xl:order-1">
              <p className="text-slate-400 text-[13px] font-medium text-center md:text-left">© 2026 HashInkludes. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-400 text-[13px] font-medium order-3 xl:order-2">
              <Link href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors">Cookie Settings</Link>
            </div>

            <div className="flex items-center gap-5 text-slate-400 order-1 xl:order-3">
              <a href="#" aria-label="Twitter" className="hover:text-indigo-600 transition-colors hover:scale-110 active:scale-95 transform">
                <Twitter className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-indigo-600 transition-colors hover:scale-110 active:scale-95 transform">
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-indigo-600 transition-colors hover:scale-110 active:scale-95 transform">
                <Github className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-indigo-600 transition-colors hover:scale-110 active:scale-95 transform">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;