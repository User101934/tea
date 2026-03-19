"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── DATA ──────────────────────────────────────────────────────────────────────

const platformMenu = {
  cards: [
    {
      title: 'TeachGrid Campus',
      desc: 'Comprehensive AI infrastructure for universities and large-scale higher education.',
      dot: '#6366f1',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #7c3aed 100%)',
      href: '/platform/campus',
    },
    {
      title: 'TeachGrid Spark',
      desc: 'A nimble, high-performance platform for training institutes, bootcamps, and agile teams.',
      dot: '#a855f7',
      gradient: 'linear-gradient(135deg, #2e1065 0%, #7e22ce 50%, #c026d3 100%)',
      href: '/platform/spark',
    },
  ],
  portals: [
    {
      label: 'LXP',
      abbr: 'LX',
      desc: 'Learner Experience Portal',
      href: '/platform/features/lxp-learner-portal',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)',
    },
    {
      label: 'MXP',
      abbr: 'MX',
      desc: 'Mentor Experience Portal',
      href: '/platform/features/mxp-mentor-portal',
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #7e22ce 0%, #c026d3 100%)',
    },
    {
      label: 'CRM',
      abbr: 'CR',
      desc: 'Customer Relationship Management',
      href: '/platform/features/crm-portal',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
    },
  ],
  footer: [
    { label: 'Customize →', href: '#' },
    { label: 'Features →', href: '/platform/features' },
  ],
  portalCard: {
    title: 'Explore all Platform Features →',
    desc: 'Every tool you need, from intelligent delivery to AI-powered assessments.',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #0ea5e9 100%)',
    href: '/platform/features',
  },
};

const solutionsMenu = {
  col1: {
    heading: 'TEACHGRID FOR',
    links: ['Organizations', 'Schools, Colleges & Universities', 'Institutes & Academies'],
    heading2: 'EXTENDED SOLUTIONS',
    links2: ['Instructional Design', 'AI for Education', 'White-labelled Solution', 'API Solution'],
  },
  col2: {
    heading: 'INDUSTRY',
    links: ['Software', 'Finance', 'Healthcare', 'Education', 'Consulting', 'Tech / IT Services', 'Manufacturing'],
  },
  card: {
    title: 'TeachGrid Enterprise →',
    desc: 'Your all-in-one AI-powered learning infrastructure built for scale.',
    gradient: 'linear-gradient(135deg, #0a0a14 0%, #1e1040 40%, #c2410c 130%)',
  },
  footer: ['Security →', 'Private Deployments →'],
};

const resourcesMenu = {
  col1: {
    heading: 'SUPPORT & CONTENT',
    links: ['Documentation', 'Help Center', 'Community & Q/A', 'Blog & Insights', 'Release Notes'],
  },
  col2: {
    heading: 'CUSTOMER FEEDBACK',
    links: ['Submit Feedback', 'Feature Requests', 'Product Suggestions'],
  },
  card: {
    title: 'Customer Stories →',
    desc: 'Explore education case studies and success stories from TeachGrid users.',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 40%, #34d399 100%)',
  },
};

const companyMenu = {
  col1: {
    heading: 'COMPANY',
    links: ['About Us', 'Case Studies', 'Customer Reviews', 'Security', 'Legal'],
  },
  col2: {
    heading: 'CONNECT',
    links: ['Customers', 'Testimonials', 'Careers', 'Contact', 'Comparison'],
  },
  card: {
    title: 'Join our mission →',
    desc: 'We are looking for passionate individuals to help reshape the future of education.',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 40%, #7c3aed 100%)',
  },
};

// ─── SHARED COMPONENTS ─────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9ca3af] mb-5">
    {children}
  </p>
);

const DropNavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block text-[17px] text-[#1a1a1a] hover:text-[#5b47e0] transition-colors duration-300 ease-out leading-none py-[11px]"
  >
    {children}
  </Link>
);

const GradientCard = ({
  gradient, title, desc, href = '#', className = '',
}: { gradient: string; title: string; desc: string; href?: string; className?: string }) => (
  <Link
    href={href}
    className={cn(
      'relative overflow-hidden rounded-2xl flex flex-col justify-end p-6 group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] active:scale-[0.98]',
      className
    )}
    style={{ background: gradient }}
  >
    <div
      className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.25]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '160px 160px',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
    <div className="relative z-10">
      <p className="text-white font-semibold text-[15px] leading-snug mb-1.5 group-hover:underline underline-offset-4 decoration-white/30 transition-all duration-300">{title}</p>
      <p className="text-white/60 text-[13px] leading-relaxed transition-colors duration-300 group-hover:text-white/80">{desc}</p>
    </div>
  </Link>
);

const Grain = () => (
  <div
    className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: '120px 120px',
    }}
  />
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#9ca3af] hover:text-[#111110] transition-colors duration-300 ease-out"
  >
    {children}
  </Link>
);

// ─── NAVBAR ────────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140);
  };

  const navItems = [
    { label: 'Platform', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Resources', hasDropdown: true },
    { label: 'Pricing', hasDropdown: false, href: '/pricing' },
    { label: 'Company', hasDropdown: true },
  ];

  const dropVariants: any = {
    hidden: {
      opacity: 0,
      y: 0,
      x: '-50%',
      scale: 0.99,
      clipPath: 'inset(0% 0% 100% 0%)'
    },
    visible: {
      opacity: 1,
      y: 8,
      x: '-50%',
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        clipPath: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }
    },
    exit: {
      opacity: 0,
      y: 2,
      x: '-50%',
      scale: 0.995,
      clipPath: 'inset(0% 0% 100% 0%)',
      transition: {
        duration: 0.2,
        ease: [0.7, 0, 0.84, 0],
        clipPath: { duration: 0.15, ease: [0.7, 0, 0.84, 0] }
      }
    },
  };

  const staggerVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 + i * 0.04,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <nav className={cn(
        'bg-white transition-shadow duration-300',
        isScrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.08)]' : 'border-b border-[#ececea]'
      )}>
        <div className="max-w-full mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-[60px] md:h-[68px] relative">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img src="/logo.png" alt="TeachGrid" className="h-[32px] md:h-[40px] w-auto" />
          </Link>

          {/* Desktop Nav links */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
            {navItems.map((item) => {
              const isActive = activeMenu === item.label || (item.label === 'Products' && activeMenu === 'Platform');
              const trigger = (
                <button
                  className={cn(
                    'relative px-5 py-2 text-[15px] transition-all duration-300 ease-out select-none',
                    isActive ? 'text-[#111110]' : 'text-[#4b5563] hover:text-[#111110]'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navItemUnderline"
                      className="absolute bottom-0 left-5 right-5 h-[1.5px] bg-[#111110] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      open(item.label === 'Products' ? 'Platform' : item.label);
                    }
                  }}
                  onMouseLeave={scheduleClose}
                >
                  {item.hasDropdown
                    ? trigger
                    : <Link href={item.href || '#'}>{trigger}</Link>
                  }
                </div>
              );
            })}
          </div>

          {/* Dropdown panel */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-7xl px-10 pointer-events-none">
            <div className="relative w-full h-0">
              <AnimatePresence>
                {activeMenu && navItems.find(i => (i.label === activeMenu || (i.label === 'Products' && activeMenu === 'Platform')))?.hasDropdown && (
                  <motion.div
                    key={activeMenu}
                    variants={dropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseEnter={() => open(activeMenu)}
                    onMouseLeave={scheduleClose}
                    className="absolute top-2 left-1/2 bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden pointer-events-auto"
                    style={{
                      width:
                        activeMenu === 'Platform' ? 820
                          : activeMenu === 'Solutions' ? 880
                            : activeMenu === 'Resources' ? 840
                              : 820,
                      boxShadow:
                        '0 0 0 1px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.03), 0 24px 64px -12px rgba(0,0,0,0.12)',
                    }}
                  >
                    {/* PLATFORM */}
                    {activeMenu === 'Platform' && (
                      <motion.div initial="hidden" animate="visible" custom={0} variants={staggerVariants}>
                        <div className="px-8 pt-7 pb-0 flex items-center gap-2">
                          <span className="text-[14px] font-semibold text-[#111110]">Products</span>
                          <span className="text-[#c4c4c0] text-[14px]">→</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-[#f0f0ee] mt-5">
                          {/* Left: Cards */}
                          <div className="px-8 pb-8 flex flex-col gap-7">
                            {platformMenu.cards.map((card, idx) => (
                              <motion.div key={card.title} custom={idx + 1} variants={staggerVariants}>
                                <Link href={card.href} className="group flex flex-col gap-3 transition-transform duration-500 ease-out hover:translate-y-[-2px]">
                                  <div className="w-full h-[112px] rounded-xl relative overflow-hidden ring-1 ring-black/5" style={{ background: card.gradient }}>
                                    <Grain />
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="w-[7px] h-[7px] rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125" style={{ background: card.dot }} />
                                    <span className="text-[17px] font-medium text-[#111110] group-hover:text-[#5b47e0] transition-colors duration-300">{card.title}</span>
                                  </div>
                                  <p className="text-[14px] text-[#6b7280] leading-relaxed -mt-1 transition-colors duration-300 group-hover:text-[#4b5563]">{card.desc}</p>
                                </Link>
                              </motion.div>
                            ))}
                          </div>

                          {/* Right: Portals */}
                          <div className="px-8 pb-8 flex flex-col pt-1">
                            <SectionLabel>Portals</SectionLabel>
                            <div className="flex flex-col gap-1 mb-5">
                              {platformMenu.portals.map((portal, idx) => (
                                <motion.div key={portal.label} custom={idx + 4} variants={staggerVariants}>
                                  <Link href={portal.href} className="group flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-[#000]/[0.02] transition-all duration-300 ease-out hover:translate-x-1">
                                    <span className="flex-shrink-0 w-2 h-2 rounded-full mt-0.5 transition-transform duration-300 group-hover:scale-125" style={{ background: portal.color }} />
                                    <div className="flex flex-col gap-0.5">
                                      <span className="text-[17px] font-medium text-[#111110] group-hover:text-[#5b47e0] transition-colors duration-300 leading-tight">{portal.label}</span>
                                      <span className="text-[13.5px] text-[#9ca3af] leading-snug group-hover:text-[#6b7280] transition-colors duration-300">{portal.desc}</span>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>

                            {/* ── REPLACED: plain green box → GradientCard ── */}
                            <motion.div custom={3} variants={staggerVariants} className="mt-auto">
                              <GradientCard
                                gradient={platformMenu.portalCard.gradient}
                                title={platformMenu.portalCard.title}
                                desc={platformMenu.portalCard.desc}
                                href={platformMenu.portalCard.href}
                                className="w-full h-[112px]"
                              />
                            </motion.div>

                          </div>
                        </div>

                        <div className="px-8 py-5 border-t border-[#f0f0ee] flex items-center justify-end gap-8">
                          {platformMenu.footer.map((f) => <FooterLink key={f.label} href={f.href}>{f.label}</FooterLink>)}
                        </div>
                      </motion.div>
                    )}

                    {/* SOLUTIONS */}
                    {activeMenu === 'Solutions' && (
                      <motion.div initial="hidden" animate="visible" custom={0} variants={staggerVariants} className="grid grid-cols-[1fr_1fr_260px] divide-x divide-[#f0f0ee]">
                        <div className="px-8 py-8">
                          <SectionLabel>{solutionsMenu.col1.heading}</SectionLabel>
                          {solutionsMenu.col1.links.map((l, idx) => (
                            <motion.div key={l} custom={idx + 1} variants={staggerVariants}>
                              <DropNavItem href={`/solutions/${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{l}</DropNavItem>
                            </motion.div>
                          ))}
                          <div className="mt-7">
                            <SectionLabel>{solutionsMenu.col1.heading2}</SectionLabel>
                            {solutionsMenu.col1.links2.map((l, idx) => (
                              <motion.div key={l} custom={idx + 4} variants={staggerVariants}>
                                <DropNavItem href={`/solutions/${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{l}</DropNavItem>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <div className="px-8 py-8">
                          <SectionLabel>{solutionsMenu.col2.heading}</SectionLabel>
                          {solutionsMenu.col2.links.map((l, idx) => (
                            <motion.div key={l} custom={idx + 1} variants={staggerVariants}>
                              <DropNavItem href={`/solutions/${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{l}</DropNavItem>
                            </motion.div>
                          ))}
                        </div>
                        <div className="px-8 py-8">
                          <motion.div custom={6} variants={staggerVariants} className="h-full">
                            <GradientCard gradient={solutionsMenu.card.gradient} title={solutionsMenu.card.title} desc={solutionsMenu.card.desc} className="w-full h-full min-h-[200px]" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                    {/* RESOURCES */}
                    {activeMenu === 'Resources' && (
                      <motion.div initial="hidden" animate="visible" custom={0} variants={staggerVariants} className="grid grid-cols-[1fr_1fr_260px] divide-x divide-[#f0f0ee]">
                        <div className="px-8 py-8">
                          <SectionLabel>{resourcesMenu.col1.heading}</SectionLabel>
                          {resourcesMenu.col1.links.map((l, idx) => (
                            <motion.div key={l} custom={idx + 1} variants={staggerVariants}>
                              <DropNavItem href={`/resources/${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{l}</DropNavItem>
                            </motion.div>
                          ))}
                        </div>
                        <div className="px-8 py-8">
                          <SectionLabel>{resourcesMenu.col2.heading}</SectionLabel>
                          {resourcesMenu.col2.links.map((l, idx) => (
                            <motion.div key={l} custom={idx + 1} variants={staggerVariants}>
                              <DropNavItem href={`/resources/${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{l}</DropNavItem>
                            </motion.div>
                          ))}
                        </div>
                        <div className="px-8 py-8">
                          <motion.div custom={6} variants={staggerVariants} className="h-full">
                            <GradientCard gradient={resourcesMenu.card.gradient} title={resourcesMenu.card.title} desc={resourcesMenu.card.desc} className="w-full h-full min-h-[190px]" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                    {/* COMPANY */}
                    {activeMenu === 'Company' && (
                      <motion.div initial="hidden" animate="visible" custom={0} variants={staggerVariants} className="grid grid-cols-[1fr_1fr_260px] divide-x divide-[#f0f0ee]">
                        <div className="px-8 py-8">
                          <SectionLabel>{companyMenu.col1.heading}</SectionLabel>
                          {companyMenu.col1.links.map((l, idx) => (
                            <motion.div key={l} custom={idx + 1} variants={staggerVariants}>
                              <DropNavItem href={`/company/${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{l}</DropNavItem>
                            </motion.div>
                          ))}
                        </div>
                        <div className="px-8 py-8">
                          <SectionLabel>{companyMenu.col2.heading}</SectionLabel>
                          {companyMenu.col2.links.map((l, idx) => (
                            <motion.div key={l} custom={idx + 1} variants={staggerVariants}>
                              <DropNavItem href={`/company/${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{l}</DropNavItem>
                            </motion.div>
                          ))}
                        </div>
                        <div className="px-8 py-8">
                          <motion.div custom={6} variants={staggerVariants} className="h-full">
                            <GradientCard gradient={companyMenu.card.gradient} title={companyMenu.card.title} desc={companyMenu.card.desc} className="w-full h-full min-h-[190px]" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/get-started"
              className="hidden sm:block text-[14px] md:text-[15px] text-[#4b5563] hover:text-[#111110] transition-all duration-300 px-3 py-2 hover:translate-y-[-1px]"
            >
              Book a Demo
            </Link>
            <Link
              href="/login"
              className="bg-[#111110] hover:bg-[#2d2d2b] text-white px-4 md:px-6 py-[8px] md:py-[10px] rounded-full text-[13px] md:text-[14.5px] font-medium transition-all duration-300 ease-out active:scale-[0.96] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] hover:translate-y-[-1px]"
            >
              Login
            </Link>
            <button
              className="md:hidden p-2 text-[#374151] hover:text-black transition-colors duration-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl z-50 overflow-y-auto max-h-[calc(100vh-60px)]"
            >
              <div className="px-6 py-8">
                <div className="flex flex-col gap-0">
                  {navItems.map((item, idx) => {
                    const isPlatform = item.label === 'Platform';
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {isPlatform ? (
                          <div>
                            <button
                              className="w-full flex items-center justify-between text-[28px] text-[#111110] py-4 border-b border-slate-100 font-medium leading-tight tracking-[-0.03em] font-sans"
                              onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                            >
                              Platform
                              <ChevronDown
                                size={20}
                                className={cn(
                                  'transition-transform duration-200 text-[#9ca3af]',
                                  mobilePlatformOpen ? 'rotate-180' : ''
                                )}
                              />
                            </button>

                            {/* Mobile Platform Submenu */}
                            <AnimatePresence>
                              {mobilePlatformOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="py-4 pl-2 flex flex-col gap-2">
                                    {/* Products heading */}
                                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9ca3af] mb-2 px-2">Products</p>

                                    {/* Campus & Spark cards */}
                                    {platformMenu.cards.map((card) => (
                                      <Link
                                        key={card.title}
                                        href={card.href}
                                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f7f7f5] transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {/* Mini gradient box */}
                                        <div
                                          className="flex-shrink-0 w-10 h-10 rounded-lg relative overflow-hidden"
                                          style={{ background: card.gradient }}
                                        >
                                          <Grain />
                                        </div>
                                        <div>
                                          <p className="text-[15px] font-medium text-[#111110] leading-tight">{card.title}</p>
                                          <p className="text-[12px] text-[#9ca3af] leading-snug mt-0.5">{card.desc}</p>
                                        </div>
                                      </Link>
                                    ))}

                                    {/* Portals heading */}
                                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9ca3af] mt-4 mb-2 px-2">Portals</p>

                                    {/* LXP / MXP / CRM */}
                                    {platformMenu.portals.map((portal) => (
                                      <Link
                                        key={portal.label}
                                        href={portal.href}
                                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f7f7f5] transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        <span className="flex-shrink-0 w-2 h-2 rounded-full" style={{ background: portal.color }} />
                                        <div>
                                          <p className="text-[15px] font-medium text-[#111110] leading-tight">{portal.label}</p>
                                          <p className="text-[12px] text-[#9ca3af] leading-snug mt-0.5">{portal.desc}</p>
                                        </div>
                                      </Link>
                                    ))}

                                    {/* Mobile portal card CTA */}
                                    <Link
                                      href={platformMenu.portalCard.href}
                                      className="mt-2 mx-1 rounded-xl overflow-hidden relative h-[80px] flex items-end p-4"
                                      style={{ background: platformMenu.portalCard.gradient }}
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                                      <p className="relative z-10 text-white font-semibold text-[13px] leading-snug">
                                        {platformMenu.portalCard.title}
                                      </p>
                                    </Link>

                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href || '#'}
                            className="block text-[28px] text-[#111110] py-4 border-b border-slate-100 last:border-0 font-medium leading-tight tracking-[-0.03em] font-sans"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col gap-3 pt-8"
                >
                  <Link
                    href="/get-started"
                    className="text-center py-3.5 rounded-xl border border-slate-200 font-medium text-[#111110] text-[16px] hover:bg-slate-50 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a Demo
                  </Link>
                  <Link
                    href="/login"
                    className="text-center py-4 rounded-full bg-[#111110] text-white font-medium text-[16px] shadow-lg shadow-black/10 active:scale-[0.98] transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    Login
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;