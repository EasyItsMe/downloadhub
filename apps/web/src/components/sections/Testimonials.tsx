"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Content Creator",
    image: "/images/avatar_1.png",
    content: "I&apos;ve tried dozens of downloaders, but this one is lightyears ahead. The 4K downloads are actually 4K, and the audio sync is perfect. Absolute lifesaver for my editing workflow."
  },
  {
    name: "Marcus Chen",
    role: "Content Strategist",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    content: "The fact that it&apos;s 100% free and lightning fast makes it my go-to tool. I use it daily to curate videos for my agency&apos;s clients. Highly recommended."
  },
  {
    name: "Elena Rodriguez",
    role: "Video Editor",
    image: "/images/avatar_3.png",
    content: "Finally, a downloader that doesn&apos;t feel like a spam site. The clean UI and the sheer speed of the backend processing is incredible. Best SaaS tool of the year."
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 w-full max-w-7xl mx-auto bg-slate-100 dark:bg-slate-900/30 rounded-[3rem] border border-slate-200 dark:border-slate-800/50 my-20">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Loved by creators</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">Don't just take our word for it. Here's what professionals have to say.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm"
          >
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">&quot;{t.content}&quot;</p>
            <div className="flex items-center gap-4 mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800" />
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold">{t.name}</h4>
                <p className="text-slate-500 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
