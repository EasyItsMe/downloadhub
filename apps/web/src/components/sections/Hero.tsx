"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import DownloadForm from "@/components/DownloadForm";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 w-full flex flex-col items-center overflow-hidden min-h-[90vh] justify-center">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>The #1 Media Downloader</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white leading-tight"
        >
          Download Any Video <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            In Original Quality
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Paste a link from your favorite social platform and get direct access to high-quality MP4 downloads. No limits, no watermarks, completely free.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto w-full"
        >
          <DownloadForm />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-sm text-slate-500 font-medium"
        >
          Trusted by over 1,000,000+ users worldwide.
        </motion.div>
      </div>
    </section>
  );
}
