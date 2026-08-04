"use client";

import { motion } from "framer-motion";

export function Screenshots() {
  return (
    <section className="py-32 px-6 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Beautifully designed</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">A clean, modern interface that respects your eyes and your workflow.</p>
      </div>

      <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/20 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 group">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-full relative"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/browser_mockup.png" 
            alt="Browser Mockup" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </motion.div>
        
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -bottom-8 -right-8 w-1/3 aspect-[9/19] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-900"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/phone_mockup.png" 
            alt="Mobile Mockup" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
