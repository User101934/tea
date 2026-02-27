"use client";

import React from 'react';
import { Layout, Users, GraduationCap, LineChart, Brain, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: <Layout className="text-indigo-600" />,
    title: "Smart LMS",
    description: "Next-gen learning management that adapts to your students' pace and style automatically."
  },
  {
    icon: <Users className="text-indigo-600" />,
    title: "Cohort Management",
    description: "Seamlessly manage thousands of learners across diverse groups with intelligent automation."
  },
  {
    icon: <Brain className="text-indigo-600" />,
    title: "Whiteboard AI",
    description: "Real-time AI assistance that generates diagrams, summaries, and quizzes during live sessions."
  },
  {
    icon: <LineChart className="text-indigo-600" />,
    title: "Intelligent Analytics",
    description: "Predictive insights that identify struggling learners before they fall behind."
  },
  {
    icon: <GraduationCap className="text-indigo-600" />,
    title: "LXP Portal",
    description: "A premium learner experience with personalized dashboards, achievements, and roadmaps."
  },
  {
    icon: <ShieldCheck className="text-indigo-600" />,
    title: "Live Proctoring",
    description: "Enterprise-grade security and integrity for online assessments and certifications."
  }
];

const PlatformSection = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">The Infrastructure</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Everything you need to power <br className="hidden md:block" /> global learning at scale.
          </h3>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            TeachGrid provides a modular, AI-first architecture that handles everything from enrollment to enterprise-grade analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
