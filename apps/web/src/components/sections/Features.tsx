"use client";

import { Zap, CheckCircle2, ShieldCheck, Music, Smartphone, Infinity } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Lightning Fast",
    desc: "Our backend servers process and merge audio/video streams instantly, delivering your files with maximum bandwidth.",
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Maximum Quality",
    desc: "We bypass artificial limitations to fetch the absolute highest quality streams available, up to 4K resolution.",
    icon: CheckCircle2,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Private & Secure",
    desc: "No tracking, no history logs. Videos are processed entirely in memory and deleted immediately after you download.",
    icon: ShieldCheck,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Audio Extraction",
    desc: "Easily extract high-quality audio (MP3/M4A) directly from any video without losing sound quality.",
    icon: Music,
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    title: "100% Free Forever",
    desc: "Download as many videos as you want. There are no paywalls, no daily limits, and no hidden fees.",
    icon: Infinity,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    title: "Cross Platform",
    desc: "Works perfectly on Windows, macOS, iOS, and Android. No software installation required.",
    icon: Smartphone,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6 w-full max-w-7xl mx-auto relative">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight"
        >
          Everything you need in a downloader.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
        >
          Built with cutting-edge technology to ensure you get your files exactly the way you want them.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="p-8 rounded-[24px] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700/50 transition-all group shadow-sm hover:shadow-md"
          >
            <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className={`w-7 h-7 ${feature.color}`} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
