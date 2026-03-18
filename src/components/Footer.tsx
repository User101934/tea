"use client";
import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    /* z-10 and -mt-12 pulls the black footer over the marquee to hide the bottom edge and white spots */
    <footer className="w-full relative z-10 -mt-12">
      {/* Background set to black and full width */}
      <div className="w-full bg-[#0a0a0a] text-white pt-24 pb-12 rounded-t-[40px] md:rounded-t-[50px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-4 lg:pr-4 flex flex-col">
              <Link href="/" className="inline-block mb-6">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="TeachGrid" className="h-[36px] w-auto brightness-0 invert" />
                </div>
              </Link>
              <p className="text-white/60 text-[14px] leading-relaxed mb-8 max-w-[320px]">
                The all-in-one unified intelligence network built to scale and secure the future of global education and enterprise training.
              </p>

              <div className="mt-auto space-y-4">
                <div className="flex items-start gap-3 text-white/60 text-[14px]">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/40" />
                  <p>123 Innovation Drive, Tech District<br />San Francisco, CA 94105</p>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-[14px]">
                  <Mail className="w-5 h-5 flex-shrink-0 text-white/40" />
                  <a href="mailto:hello@teachgrid.com" className="hover:text-white transition-colors">hello@teachgrid.com</a>
                </div>
              </div>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 lg:pl-8 mt-4 lg:mt-0">
              <div>
                <h4 className="font-bold mb-6 text-[15px]">Products</h4>
                <ul className="space-y-4 text-white/50 text-[14px] font-medium">
                  <li><Link href="/platform/campus" className="hover:text-white transition-colors">TeachGrid Campus</Link></li>
                  <li><Link href="/platform/spark" className="hover:text-white transition-colors">TeachGrid Spark</Link></li>
                  <li><Link href="/platform/features/lxp-learner-portal" className="hover:text-white transition-colors">LXP</Link></li>
                  <li><Link href="/platform/features/mxp-mentor-portal" className="hover:text-white transition-colors">MXP</Link></li>
                  <li><Link href="/platform/features/crm-portal" className="hover:text-white transition-colors">CRM Portal</Link></li>
                  <li><Link href="/platform/features" className="hover:text-white transition-colors">All Features</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-[15px]">Solutions</h4>
                <ul className="space-y-4 text-white/50 text-[14px] font-medium">
                  <li><Link href="/solutions/organizations" className="hover:text-white transition-colors">For Organizations</Link></li>
                  <li><Link href="/solutions/schools" className="hover:text-white transition-colors">Schools & Universities</Link></li>
                  <li><Link href="/solutions/institutes" className="hover:text-white transition-colors">Institutes & Academies</Link></li>
                  <li><Link href="/solutions/white-labelled" className="hover:text-white transition-colors">White-labelled Solution</Link></li>
                  <li><Link href="/solutions/api" className="hover:text-white transition-colors">API Solution</Link></li>
                  <li className="pt-3"><span className="text-white/90 font-semibold mb-2 block text-[12px] uppercase tracking-wider">Industries</span></li>
                  <li><Link href="/solutions/software" className="hover:text-white transition-colors">Software & IT</Link></li>
                  <li><Link href="/solutions/healthcare" className="hover:text-white transition-colors">Healthcare</Link></li>
                  <li><Link href="/solutions/finance" className="hover:text-white transition-colors">Finance</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-[15px]">Resources</h4>
                <ul className="space-y-4 text-white/50 text-[14px] font-medium">
                  <li><Link href="/resources/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="/resources/help" className="hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link href="/resources/community" className="hover:text-white transition-colors">Community & Q/A</Link></li>
                  <li><Link href="/resources/blog" className="hover:text-white transition-colors">Blog & Insights</Link></li>
                  <li><Link href="/resources/release-notes" className="hover:text-white transition-colors">Release Notes</Link></li>
                  <li><Link href="/resources/feedback" className="hover:text-white transition-colors">Submit Feedback</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-[15px]">Company</h4>
                <ul className="space-y-4 text-white/50 text-[14px] font-medium">
                  <li><Link href="/company/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/company/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/company/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link href="/company/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
                  <li><Link href="/company/security" className="hover:text-white transition-colors">Security</Link></li>
                  <li><Link href="/company/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/company/legal" className="hover:text-white transition-colors">Legal</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col xl:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 xl:gap-6 order-2 xl:order-1">
              <p className="text-white/40 text-[13px] font-medium text-center md:text-left">© 2026 HashInkludes. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/40 text-[13px] font-medium order-3 xl:order-2">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
            </div>

            <div className="flex items-center gap-5 text-white/40 order-1 xl:order-3">
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors hover:scale-110 active:scale-95 transform">
                <Twitter className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors hover:scale-110 active:scale-95 transform">
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-white transition-colors hover:scale-110 active:scale-95 transform">
                <Github className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors hover:scale-110 active:scale-95 transform">
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