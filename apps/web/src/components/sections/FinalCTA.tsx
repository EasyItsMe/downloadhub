"use client";

import { DownloadCloud } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-32 px-6 w-full max-w-7xl mx-auto mb-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-[3rem] bg-blue-600 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full" />
        
        <div className="relative z-10 px-6 py-24 md:py-32 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-3xl">
            Ready to download your favorite content?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl">
            Join millions of users who rely on our platform for fast, secure, and high-quality video downloads.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-blue-600 hover:bg-slate-50 font-bold px-10 py-5 rounded-2xl text-lg transition-all shadow-xl shadow-blue-900/20 flex items-center gap-3 hover:scale-105 active:scale-95"
          >
            <DownloadCloud className="w-6 h-6" />
            Start Downloading Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}
