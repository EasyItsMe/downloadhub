"use client";

import { motion } from "framer-motion";

const platforms = [
  { name: "YouTube", slug: "youtube" },
  { name: "Instagram", slug: "instagram" },
  { name: "TikTok", slug: "tiktok" },
  { name: "X (Twitter)", slug: "x" },
  { name: "Facebook", slug: "facebook" },
  { name: "Twitch", slug: "twitch" },
  { name: "Pinterest", slug: "pinterest" },
  { name: "RedNote", slug: "xiaohongshu" }
];

export function SupportedPlatforms() {
  // Duplicate array for seamless infinite scroll
  const duplicatedPlatforms = [...platforms, ...platforms];

  return (
    <section className="w-full py-16 border-y border-slate-200 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-center text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Supported Platforms
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <motion.div 
          className="flex whitespace-nowrap gap-12 md:gap-20 items-center w-max pr-12 md:pr-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {duplicatedPlatforms.map((platform, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={`https://cdn.simpleicons.org/${platform.slug}`} 
                alt={platform.name} 
                className="w-7 h-7 md:w-8 md:h-8"
              />
              <span className="font-bold text-xl md:text-2xl tracking-tight text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                {platform.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
