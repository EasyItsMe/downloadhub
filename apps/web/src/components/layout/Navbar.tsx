"use client";

import { DownloadCloud, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@wrksz/themes/client";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 w-full border-b border-zinc-200 dark:border-white/5 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <DownloadCloud className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">SnapVid</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-slate-900 dark:hover:text-white transition-colors">How It Works</Link>
          <Link href="#faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">FAQ</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
            ) : (
              <div className="w-4 h-4" />
            )}
          </button>
          
          <a 
            href="#" 
            className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-md"
          >
            <DownloadCloud className="w-4 h-4" />
            Download App
          </a>
        </div>
      </div>
    </header>
  );
}
