"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 md:pt-32 pb-12 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 mb-16 md:mb-32">

          {/* Left: Newsletter/CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="text-[13px] font-semibold text-[#ff6b6b] mb-4 tracking-tight">AI moves fast</p>
            <h2 className="text-[26px] md:text-[40px] font-serif font-bold leading-[1.15] mb-6 max-w-sm tracking-tight">
              We'll keep you up to date with the latest.
            </h2>
            <p className="text-[13px] text-white/40 mb-10 max-w-sm leading-relaxed">
              Enter your business email below to receive updates from TeachGrid.{' '}
              Please refer to our{' '}
              <Link href="#" className="underline hover:text-white transition-colors">privacy policy</Link>{' '}
              for details.
            </p>

            <div className="relative max-w-sm group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-[15px] placeholder:text-white/30 focus:border-white transition-colors font-medium"
              />
              <button className="absolute right-0 bottom-4 text-white/40 group-focus-within:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right: Links Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
          >
            {/* Products */}
            <div>
              <Link href="/platform/features" className="group flex items-center gap-1 mb-6">
                <h4 className="text-[14px] md:text-[15px] font-bold text-white tracking-tight">Products</h4>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <ul className="space-y-3 text-[13px] md:text-[14px] text-white/60 font-medium">
                <li><Link href="/platform/campus" className="hover:text-white transition-colors">Campus</Link></li>
                <li><Link href="/platform/spark" className="hover:text-white transition-colors">Spark</Link></li>
                <li><Link href="/platform/features/lxp-learner-portal" className="hover:text-white transition-colors">LXP</Link></li>
                <li><Link href="/platform/features/mxp-mentor-portal" className="hover:text-white transition-colors">MXP</Link></li>
                <li><Link href="/platform/features/crm-portal" className="hover:text-white transition-colors">CRM / Admin</Link></li>
                <li><Link href="/platform/features" className="hover:text-white transition-colors">Capabilities</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <Link href="/solutions" className="group flex items-center gap-1 mb-6">
                <h4 className="text-[14px] md:text-[15px] font-bold text-white tracking-tight">Solutions</h4>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <ul className="space-y-3 text-[13px] md:text-[14px] text-white/60 font-medium">
                <li><Link href="/solutions/organizations" className="hover:text-white transition-colors">Technology</Link></li>
                <li><Link href="/solutions/higher-education" className="hover:text-white transition-colors">Education</Link></li>
                <li><Link href="/solutions/institutes" className="hover:text-white transition-colors">Higher Ed</Link></li>
                <li><Link href="/solutions/instructional-design" className="hover:text-white transition-colors">Finance</Link></li>
                <li><Link href="/solutions/ai-for-education" className="hover:text-white transition-colors">Healthcare</Link></li>
                <li><Link href="/solutions/white-label" className="hover:text-white transition-colors">Consulting</Link></li>
                <li><Link href="/solutions/api" className="hover:text-white transition-colors">API Solution</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[14px] md:text-[15px] font-bold text-white tracking-tight mb-6">Resources</h4>
              <ul className="space-y-3 text-[13px] md:text-[14px] text-white/60 font-medium">
                <li><Link href="/resources/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/resources/docs" className="hover:text-white transition-colors">Developers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Events</Link></li>
                <li><Link href="/resources/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/resources/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/resources/release-notes" className="hover:text-white transition-colors">Release Notes</Link></li>
                <li><Link href="/resources/feedback" className="hover:text-white transition-colors">Feedback</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[14px] md:text-[15px] font-bold text-white tracking-tight mb-6">Company</h4>
              <ul className="space-y-3 text-[13px] md:text-[14px] text-white/60 font-medium">
                <li><Link href="/company/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/company/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/company/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Newsroom</Link></li>
                <li><Link href="/company/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Trust Center</Link></li>
                <li><Link href="/company/legal" className="hover:text-white transition-colors">Legal</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/">
              <img src="/logo.png" alt="TeachGrid Logo" className="h-6 md:h-7 w-auto brightness-0 invert opacity-80" />
            </Link>
            <p className="text-[11px] md:text-[12px] text-white/30 font-medium tracking-tight">© 2026 TeachGrid Inc.</p>
          </div>
          <div className="flex items-center gap-6 md:gap-10 text-[11px] md:text-[12px] font-medium text-white/40 tracking-tight flex-wrap">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
