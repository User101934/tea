"use client";
import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full relative z-10 -mt-12">
      <div className="w-full bg-background text-[#111110] pt-12 md:pt-16 pb-8 md:pb-10 rounded-t-[20px] md:rounded-t-[24px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-10 md:mb-14">
            {/* Company Info */}
            <div className="lg:col-span-4 lg:pr-4 flex flex-col">
              <Link href="/" className="inline-block mb-4 md:mb-5">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="TeachGrid" className="h-[30px] md:h-[36px] w-auto" />
                </div>
              </Link>
              <p className="text-[#6b7280] text-[13px] md:text-[14px] leading-[1.6] mb-6 max-w-xs" style={{ fontFamily: "var(--font-sans)" }}>
                AI-powered learning infrastructure for smarter,<br className="hidden sm:block" />scalable education experiences.
              </p>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 lg:pl-8">
              <div>
                <h4 className="font-bold text-[#111110] mb-3 md:mb-5 text-[11px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>Products</h4>
                <ul className="space-y-3 md:space-y-4 text-[#6b7280] text-[13px] md:text-[14px]" style={{ fontFamily: "var(--font-sans)" }}>
                  <li><Link href="/platform/campus" className="hover:text-[#111110] transition-colors">TeachGrid Campus</Link></li>
                  <li><Link href="/platform/spark" className="hover:text-[#111110] transition-colors">TeachGrid Spark</Link></li>
                  <li><Link href="/platform/features/lxp-learner-portal" className="hover:text-[#111110] transition-colors">LXP</Link></li>
                  <li><Link href="/platform/features/mxp-mentor-portal" className="hover:text-[#111110] transition-colors">MXP</Link></li>
                  <li><Link href="/platform/features/crm-portal" className="hover:text-[#111110] transition-colors">CRM Portal</Link></li>
                  <li><Link href="/platform/features" className="hover:text-[#111110] transition-colors">All Features</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#111110] mb-3 md:mb-5 text-[11px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>Solutions</h4>
                <ul className="space-y-3 md:space-y-4 text-[#6b7280] text-[13px] md:text-[14px]" style={{ fontFamily: "var(--font-sans)" }}>
                  <li><Link href="/solutions/organizations" className="hover:text-[#111110] transition-colors">For Organizations</Link></li>
                  <li><Link href="/solutions/schools" className="hover:text-[#111110] transition-colors">Schools & Universities</Link></li>
                  <li><Link href="/solutions/institutes" className="hover:text-[#111110] transition-colors">Institutes & Academies</Link></li>
                  <li><Link href="/solutions/white-labelled" className="hover:text-[#111110] transition-colors">White-labelled</Link></li>
                  <li><Link href="/solutions/api" className="hover:text-[#111110] transition-colors">API Solution</Link></li>
                  <li className="pt-2"><span className="text-[#111110] font-bold text-[11px] sm:text-[13px] uppercase tracking-wider mb-2 block" style={{ fontFamily: "var(--font-sans)" }}>Industries</span></li>
                  <li><Link href="/solutions/software" className="hover:text-[#111110] transition-colors">Software & IT</Link></li>
                  <li><Link href="/solutions/healthcare" className="hover:text-[#111110] transition-colors">Healthcare</Link></li>
                  <li><Link href="/solutions/finance" className="hover:text-[#111110] transition-colors">Finance</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#111110] mb-3 md:mb-5 text-[11px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>Resources</h4>
                <ul className="space-y-3 md:space-y-4 text-[#6b7280] text-[13px] md:text-[14px]" style={{ fontFamily: "var(--font-sans)" }}>
                  <li><Link href="/resources/documentation" className="hover:text-[#111110] transition-colors">Documentation</Link></li>
                  <li><Link href="/resources/help" className="hover:text-[#111110] transition-colors">Help Center</Link></li>
                  <li><Link href="/resources/community" className="hover:text-[#111110] transition-colors">Community & Q/A</Link></li>
                  <li><Link href="/resources/blog" className="hover:text-[#111110] transition-colors">Blog & Insights</Link></li>
                  <li><Link href="/resources/release-notes" className="hover:text-[#111110] transition-colors">Release Notes</Link></li>
                  <li><Link href="/resources/feedback" className="hover:text-[#111110] transition-colors">Submit Feedback</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#111110] mb-3 md:mb-5 text-[11px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>Company</h4>
                <ul className="space-y-3 md:space-y-4 text-[#6b7280] text-[13px] md:text-[14px]" style={{ fontFamily: "var(--font-sans)" }}>
                  <li><Link href="/company/about" className="hover:text-[#111110] transition-colors">About Us</Link></li>
                  <li><Link href="/company/careers" className="hover:text-[#111110] transition-colors">Careers</Link></li>
                  <li><Link href="/company/case-studies" className="hover:text-[#111110] transition-colors">Case Studies</Link></li>
                  <li><Link href="/company/reviews" className="hover:text-[#111110] transition-colors">Customer Reviews</Link></li>
                  <li><Link href="/company/security" className="hover:text-[#111110] transition-colors">Security</Link></li>
                  <li><Link href="/company/contact" className="hover:text-[#111110] transition-colors">Contact</Link></li>
                  <li><Link href="/company/legal" className="hover:text-[#111110] transition-colors">Legal</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-100 pt-5 md:pt-6 flex flex-col xl:flex-row justify-between items-center gap-5 md:gap-6">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 order-2 xl:order-1">
              <p className="text-slate-400 text-[12px] md:text-[13px] font-medium text-center" style={{ fontFamily: "var(--font-sans)" }}>© 2026 HashInkludes. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-400 text-[12px] md:text-[13px] font-medium order-3 xl:order-2" style={{ fontFamily: "var(--font-sans)" }}>
              <Link href="#" className="hover:text-[#111110] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#111110] transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-[#111110] transition-colors">Cookie Settings</Link>
            </div>

            <div className="flex items-center gap-5 text-slate-400 order-1 xl:order-3">
              <a href="#" aria-label="Twitter" className="hover:text-[#111110] transition-colors hover:scale-110 active:scale-95 transform">
                <Twitter className="w-[17px] h-[17px] md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#111110] transition-colors hover:scale-110 active:scale-95 transform">
                <Linkedin className="w-[17px] h-[17px] md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-[#111110] transition-colors hover:scale-110 active:scale-95 transform">
                <Github className="w-[17px] h-[17px] md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#111110] transition-colors hover:scale-110 active:scale-95 transform">
                <Instagram className="w-[17px] h-[17px] md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;