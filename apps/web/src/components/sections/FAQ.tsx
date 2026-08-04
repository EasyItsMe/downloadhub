"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is it completely free?",
    a: "Yes, our service is 100% free to use. There are no hidden fees, subscriptions, or paywalls."
  },
  {
    q: "Do you store the downloaded videos?",
    a: "No. All processing happens in memory, and files are streamed directly to your device. We do not store or keep any history of your downloads."
  },
  {
    q: "Why do some videos say 'Unknown Size'?",
    a: "Some platforms use chunked streaming (DASH/HLS) where the total file size isn't known until the download completes. The download will still work perfectly."
  },
  {
    q: "Can I download videos in 4K?",
    a: "Yes! If the original video was uploaded in 4K or 8K, our backend will fetch and merge the highest quality streams available."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 w-full max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <span className="font-semibold text-slate-900 dark:text-white">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/50 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
