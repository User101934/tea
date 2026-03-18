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
  <div className="w-[320px] md:w-[340px] flex-shrink-0 bg-white/60 backdrop-blur-xl border border-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-zinc-500/5 to-zinc-900/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500" />

    <Quote className="absolute top-8 right-8 w-10 h-10 text-zinc-100 group-hover:text-zinc-200 transition-colors duration-500" />

    <div className="flex items-center gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
      ))}
    </div>

    <p className="text-[#374151] text-[15px] leading-[1.6] font-sans mb-6 relative z-10">
      &ldquo;{item.content}&rdquo;
    </p>

    <div className="flex items-center gap-4 mt-auto">
      <div className="w-10 h-10 rounded-full bg-slate-50 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0 relative z-10">
        <img src={item.avatar} alt={item.name} className="w-8 h-8 object-cover" />
      </div>
      <div className="relative z-10">
        <h4 className="font-bold text-[#111110] text-[14px]">{item.name}</h4>
        <p className="text-[#6b7280] text-[12px] font-medium">{item.role}</p>
      </div>
    </div>
  </div>
);

const PlatformShowcase = () => {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-[#fafafa]">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zinc-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-200/40 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10 mb-12 md:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="font-bold text-[13px] text-[#111110] uppercase tracking-wider">
              Loved by educators worldwide
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(36px,6vw,64px)] tracking-tight text-[#111110] leading-[1.05] mb-6"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Don't just take our word for it.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6b7280] text-[18px] md:text-[20px] font-sans"
          >
            Thousands of institutions use TeachGrid to power their next-generation learning infrastructure. Here's what they have to say.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 md:gap-8 pb-10">

        {/* Edge Fades for the marquee */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

        {/* Single Row (Scrolls Left) */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-6 px-6">
          {[...allTestimonials, ...allTestimonials, ...allTestimonials].map((item, idx) => (
            <ReviewCard key={`r1-${idx}`} item={item} />
          ))}
        </div>

      </div>

      {/* Styles for marquee */}
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