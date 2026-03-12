"use client";

import React from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link'; // Added import for Link
import { ArrowRight } from 'lucide-react'; // Added import for ArrowRight

const FeatureGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-10 rounded-3xl bg-slate-900 text-white relative overflow-hidden group"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold mb-6 font-sans">Infrastructure</span>
                                <h3 className="text-3xl font-serif leading-tight">Deploy intelligent learning <br /> environments at scale.</h3>
                            </div>
                            <div className="mt-12">
                                <Link href="#" className="inline-flex items-center gap-2 text-indigo-400 font-bold font-sans hover:gap-3 transition-all">
                                    Learn more <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                        {/* Abstract background simulation */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-indigo-600/30 transition-colors duration-500"></div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="p-10 rounded-3xl bg-slate-50 border border-slate-100 relative overflow-hidden group"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-800 text-xs font-bold mb-6 shadow-sm font-sans">Impact</span>
                                <h3 className="text-3xl font-serif text-[#111110] leading-tight">Impact-driven learning. <br /> Zero friction delivery.</h3>
                            </div>
                            <div className="mt-12">
                                <Link href="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold font-sans hover:gap-3 transition-all">
                                    View solutions <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                        {/* Photo simulation */}
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-slate-200/50 rounded-tl-[4rem] group-hover:bg-slate-200/80 transition-colors duration-500"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
