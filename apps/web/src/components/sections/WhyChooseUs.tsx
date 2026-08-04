"use client";

import { Check, X, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  return (
    <section className="py-32 px-6 w-full max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Why Choose Us?</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">See how we compare against other generic downloader websites.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Competitors Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-full flex flex-col p-10 md:p-12 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 border border-red-500/20">
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
          
          <h3 className="text-2xl font-bold text-slate-600 dark:text-slate-400 mb-8">Other Websites</h3>
          
          <ul className="space-y-5">
            {[
              "Fake download buttons",
              "Slow download speeds",
              "Watermarks on videos",
              "Confusing interfaces",
              "Hidden fees or limits"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-medium">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* New Way */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-full flex flex-col bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] p-10 md:p-12 shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
          
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 relative z-10">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-8 relative z-10">SnapVid Way</h3>
          
          <ul className="space-y-5 relative z-10">
            {[
              "Clean interface, 100% safe",
              "Up to 4K & 8K Resolution",
              "Audio is automatically merged seamlessly",
              "Maximized bandwidth delivery",
              "Cloud-based, no installation needed"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-blue-200" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
