"use client";

import { Copy, ArrowRight, DownloadCloud } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 w-full max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">How it works</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">Getting your videos is as simple as 1-2-3. No software installation required.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
        {/* Connector Line */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-slate-700 to-transparent -z-10" />
        
        {[
          {
            step: "1. Copy Link",
            desc: "Find the video you want and copy its URL from the address bar or share menu.",
            icon: Copy,
            delay: 0
          },
          {
            step: "2. Paste URL",
            desc: "Paste the link into the search box above and hit the extract button.",
            icon: ArrowRight,
            delay: 0.2
          },
          {
            step: "3. Download",
            desc: "Choose your preferred quality and format, then download instantly.",
            icon: DownloadCloud,
            delay: 0.4,
            highlight: true
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className={`w-24 h-24 rounded-[28px] flex items-center justify-center mb-8 shadow-2xl z-10 ${
              item.highlight 
                ? "bg-blue-600 border-2 border-blue-500 shadow-blue-900/40 text-white" 
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-500 dark:text-blue-400"
            }`}>
              <item.icon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{item.step}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-[250px] leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
