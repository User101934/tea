"use client";

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PLANS = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for growing institutes and academies.",
    features: ["Up to 1,000 learners", "Core LMS features", "Standard LXP Portal", "Community Support"]
  },
  {
    name: "Growth",
    price: "1,299",
    description: "Advanced AI features for large training organizations.",
    features: ["Up to 5,000 learners", "Whiteboard AI ✨", "Advanced Analytics", "Live Proctoring", "Priority Support"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Bespoke infrastructure for universities and corporations.",
    features: ["Unlimited learners", "Custom AI Training", "Full API Access", "White-labelling", "Dedicated Success Manager"]
  }
];

const Pricing = () => {
  return (
    <section className="relative py-32 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Grain Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.15] dark:opacity-[0.1] grayscale pointer-events-none">
        <img
          src="/images/premium-hero.png"
          alt=""
          className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay"
        />
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block font-sans">Pricing Plans</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#111110] mb-6">Simple, scalable pricing.</h2>
          <p className="text-xl text-slate-500 font-sans">Choose the plan that fits your organization&apos;s scale.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] border ${plan.popular ? 'border-indigo-600 ring-4 ring-indigo-50' : 'border-slate-100'} bg-white relative transition-all hover:shadow-2xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-xl font-serif text-[#111110] mb-2">{plan.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">{plan.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-serif tracking-tight text-[#111110]">
                  {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                </span>
                {plan.price !== "Custom" && <span className="text-slate-400 font-medium font-sans">/mo</span>}
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-slate-600 font-sans">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-indigo-600" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-bold transition-all font-sans ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-200' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
