"use client";

import React from "react";
import { Zap, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const allTestimonials = [
  {
    name: "Dr. Raj Patel",
    role: "Academy Director",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Raj",
    content: "Our coaching institute has seen remarkable improvement in student outcomes since adopting TeachGrid's intelligent learning platform. It completely transformed how our educators interact with students.",
  },
  {
    name: "Michael Chen",
    role: "Training Manager",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Michael",
    content: "Managing corporate training programs has never been easier. TeachGrid's scalable infrastructure handles our growing workforce seamlessly. A game changer for our global operations.",
  },
  {
    name: "Prof. Lisa Wang",
    role: "Academic Director",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Lisa",
    content: "The impact-driven analytics in TeachGrid help us understand student progress better and optimize our curriculum delivery methods like never before.",
  },
  {
    name: "James Rodriguez",
    role: "EdTech Coordinator",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=James",
    content: "From a digital learning perspective, TeachGrid's flexibility and AI capabilities are simply outstanding. It's streamlined our administration considerably.",
  },
  {
    name: "Dr. Emily Foster",
    role: "Dean of Studies",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Emily",
    content: "As an educator, I appreciate TeachGrid's robust learning analytics and simplicity. It has streamlined our academic management considerably, giving us more time to focus on teaching.",
  },
  {
    name: "Sarah Jenkins",
    role: "VP of Learning",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah",
    content: "Rolling out TeachGrid across our organization was incredibly smooth. The platform's intuitive design means our team required almost zero onboarding time.",
  },
];

const ReviewCard = ({ item }: { item: any }) => (
  <div className="w-[280px] sm:w-[320px] md:w-[340px] flex flex-col flex-shrink-0 bg-white/60 backdrop-blur-xl border border-white p-5 sm:p-6 md:p-8 rounded-[20px] sm:rounded-[24px] md:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-zinc-500/5 to-zinc-900/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500" />
    <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 text-zinc-100 group-hover:text-zinc-200 transition-colors duration-500" />

    <div className="flex items-center gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />
      ))}
    </div>

    <div className="flex-grow mb-5 relative z-10">
      <p className="text-[#374151] text-[14px] sm:text-[15px] leading-[1.6] font-sans line-clamp-5 text-justify">
        &ldquo;{item.content}&rdquo;
      </p>
    </div>

    <div className="flex items-center gap-3 sm:gap-4 mt-auto">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-50 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0 relative z-10">
        <img src={item.avatar} alt={item.name} className="w-7 h-7 sm:w-8 sm:h-8 object-cover" />
      </div>
      <div className="relative z-10">
        <h4 className="font-bold text-[#111110] text-[13px] sm:text-[14px]">{item.name}</h4>
        <p className="text-[#6b7280] text-[11px] sm:text-[12px] font-medium">{item.role}</p>
      </div>
    </div>
  </div>
);

const PlatformShowcase = () => {
  return (
    <section className="relative py-10 md:py-16 overflow-hidden bg-transparent snap-start">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative z-10 mb-6 md:mb-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4 sm:mb-6"
          >
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />
            <span className="font-bold text-[11px] sm:text-[13px] text-[#111110] uppercase tracking-wider">
              Loved by educators worldwide
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(28px,6vw,64px)] tracking-tight text-[#111110] leading-[1.05] mb-2 sm:mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Don't just take our word for it.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6b7280] text-[15px] sm:text-[18px] md:text-[20px] font-sans px-4"
          >
            Thousands of institutions use TeachGrid to power their next-generation learning infrastructure. Here's what they have to say.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-5 md:gap-8 pb-8 md:pb-10">

        <div className="absolute inset-y-0 left-0 w-12 sm:w-24 md:w-64 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-24 md:w-64 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-4 sm:gap-6 px-4 sm:px-6">
          {[...allTestimonials, ...allTestimonials, ...allTestimonials].map((item, idx) => (
            <ReviewCard key={`r1-${idx}`} item={item} />
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 45s linear infinite;
        }
      `}} />
    </section>
  );
};

export default PlatformShowcase;