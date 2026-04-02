"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full relative z-10 -mt-12">
      <div className="w-full bg-background text-[#111110] pt-24 md:pt-32 pb-8 md:pb-10 rounded-t-[20px] md:rounded-t-[24px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-10 md:mb-14">
            {/* Company Info */}
            <div className="lg:col-span-4 lg:pr-4 flex flex-col">
              <Link href="/" className="inline-block mb-4 md:mb-5">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="TeachGrid" className="h-[44px] md:h-[56px] w-auto" />
                </div>
              </Link>
              {/* PRIMARY STYLE SOURCE - Color: #64748b, Font: var(--font-sans), Weight: Normal, Size: 13/14px */}
              <p className="text-[#64748b] text-[13px] md:text-[14px] leading-[1.6] mb-8 max-w-xs font-normal" style={{ fontFamily: "var(--font-sans)" }}>
                AI-powered learning infrastructure for smarter,<br className="hidden sm:block" />scalable education experiences.
              </p>

              <div className="flex items-center gap-5 text-[#64748b]">
                <a href="#" aria-label="Facebook" className="hover:text-[#111110] transition-colors hover:scale-110 active:scale-95 transform">
                  <Facebook className="w-[18.5px] h-[18.5px] stroke-[1.5px]" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-[#111110] transition-colors hover:scale-110 active:scale-95 transform">
                  <Instagram className="w-[18.5px] h-[18.5px] stroke-[1.5px]" />
                </a>
                <a href="#" aria-label="X (Twitter)" className="hover:text-[#111110] transition-colors hover:scale-110 active:scale-95 transform">
                  <Twitter className="w-[18.5px] h-[18.5px] stroke-[1.5px]" />
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-[#111110] transition-colors hover:scale-110 active:scale-95 transform">
                  <Youtube className="w-[18.5px] h-[18.5px] stroke-[1.5px]" />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#111110] transition-colors hover:scale-110 active:scale-95 transform">
                  <Linkedin className="w-[18.5px] h-[18.5px] stroke-[1.5px]" />
                </a>
              </div>
            </div>

            {/* Navigation links - FORCING exact style and color onto every Link component */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 lg:pl-8">
              <div>
                <h4 className="font-bold text-[#111110] mb-3 md:mb-5 text-[11px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>Products</h4>
                <ul className="space-y-3 md:space-y-4 text-[#64748b] text-[13px] md:text-[14px] leading-[1.6] font-normal" style={{ fontFamily: "var(--font-sans)" }}>
                  <li><Link href="/platform/campus" className="text-[#64748b] hover:text-[#111110] transition-colors">TeachGrid Campus</Link></li>
                  <li><Link href="/platform/spark" className="text-[#64748b] hover:text-[#111110] transition-colors">TeachGrid Spark</Link></li>
                  <li><Link href="/platform/features/lxp-learner-portal" className="text-[#64748b] hover:text-[#111110] transition-colors">Learning Experience Platform (LXP)</Link></li>
                  <li><Link href="/platform/features/mxp-mentor-portal" className="text-[#64748b] hover:text-[#111110] transition-colors">Mentor Experience Platform (MXP)</Link></li>
                  <li><Link href="/platform/features/crm-portal" className="text-[#64748b] hover:text-[#111110] transition-colors">Customer Relationship Management (CRM)</Link></li>
                  <li><Link href="/platform/features" className="text-[#64748b] hover:text-[#111110] transition-colors">All Features</Link></li>
                  <li><Link href="/platform/faqs" className="text-[#64748b] hover:text-[#111110] transition-colors">FAQs</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#111110] mb-3 md:mb-5 text-[11px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>Solutions</h4>
                <ul className="space-y-3 md:space-y-4 text-[#64748b] text-[13px] md:text-[14px] leading-[1.6] font-normal" style={{ fontFamily: "var(--font-sans)" }}>
                  <li><Link href="/solutions/organizations" className="text-[#64748b] hover:text-[#111110] transition-colors">For Organizations</Link></li>
                  <li><Link href="/solutions/schools" className="text-[#64748b] hover:text-[#111110] transition-colors">Schools & Universities</Link></li>
                  <li><Link href="/solutions/institutes" className="text-[#64748b] hover:text-[#111110] transition-colors">Institutes & Academies</Link></li>
                  <li><Link href="/solutions/white-labelled" className="text-[#64748b] hover:text-[#111110] transition-colors">White-labelled</Link></li>
                  <li><Link href="/solutions/software" className="text-[#64748b] hover:text-[#111110] transition-colors">Software & IT</Link></li>
                  <li><Link href="/solutions/healthcare" className="text-[#64748b] hover:text-[#111110] transition-colors">Healthcare</Link></li>
                  <li><Link href="/solutions/finance" className="text-[#64748b] hover:text-[#111110] transition-colors">Finance</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#111110] mb-3 md:mb-5 text-[11px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>Resources</h4>
                <ul className="space-y-3 md:space-y-4 text-[#64748b] text-[13px] md:text-[14px] leading-[1.6] font-normal" style={{ fontFamily: "var(--font-sans)" }}>
                  <li><Link href="/resources/documentation" className="text-[#64748b] hover:text-[#111110] transition-colors">Documentation</Link></li>
                  <li><Link href="/resources/help" className="text-[#64748b] hover:text-[#111110] transition-colors">Help Center</Link></li>
                  <li><Link href="/resources/community" className="text-[#64748b] hover:text-[#111110] transition-colors">Community & Q/A</Link></li>
                  <li><Link href="/resources/blog" className="text-[#64748b] hover:text-[#111110] transition-colors">Blog & Insights</Link></li>
                  <li><Link href="/resources/release-notes" className="text-[#64748b] hover:text-[#111110] transition-colors">Release Notes</Link></li>
                  <li><Link href="/resources/feedback" className="text-[#64748b] hover:text-[#111110] transition-colors">Submit Feedback</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#111110] mb-3 md:mb-5 text-[11px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>Company</h4>
                <ul className="space-y-3 md:space-y-4 text-[#64748b] text-[13px] md:text-[14px] leading-[1.6] font-normal" style={{ fontFamily: "var(--font-sans)" }}>
                  <li><Link href="/company/about" className="text-[#64748b] hover:text-[#111110] transition-colors">About Us</Link></li>
                  <li><Link href="/company/careers" className="text-[#64748b] hover:text-[#111110] transition-colors">Careers</Link></li>
                  <li><Link href="/company/case-studies" className="text-[#64748b] hover:text-[#111110] transition-colors">Case Studies</Link></li>
                  <li><Link href="/company/reviews" className="text-[#64748b] hover:text-[#111110] transition-colors">Customer Reviews</Link></li>
                  <li><Link href="/company/security" className="text-[#64748b] hover:text-[#111110] transition-colors">Security</Link></li>
                  <li><Link href="/company/contact" className="text-[#64748b] hover:text-[#111110] transition-colors">Contact</Link></li>
                  <li><Link href="/company/legal" className="text-[#64748b] hover:text-[#111110] transition-colors">Legal</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar - FORCED exact color and font match */}
          <div className="border-t border-slate-100 pt-7 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex items-center order-2 md:order-1">
              <p className="text-[#64748b] text-[13px] md:text-[14px] leading-[1.6] font-normal" style={{ fontFamily: "var(--font-sans)" }}>© 2026 HashInkludes. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-2 order-1 md:order-2">
              <Link href="#" className="text-[#64748b] text-[13px] md:text-[14px] leading-[1.6] font-normal hover:text-[#111110] transition-colors" style={{ fontFamily: "var(--font-sans)" }}>Terms and Conditions</Link>
              <Link href="#" className="text-[#64748b] text-[13px] md:text-[14px] leading-[1.6] font-normal hover:text-[#111110] transition-colors" style={{ fontFamily: "var(--font-sans)" }}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;