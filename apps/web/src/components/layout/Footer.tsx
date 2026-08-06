import { Mail } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pt-16 pb-8 overflow-hidden">
      {/* Decorative glowing accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-xl h-24 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-6 lg:col-span-5">
          <div className="flex items-center gap-2.5 mb-6 hover:opacity-90 transition-opacity cursor-pointer">
            <Logo />
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">SnapVid</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed max-w-sm">
            The fastest, most reliable way to download videos from your favorite platforms in original quality. 100% free and secure.
          </p>
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            <a href="https://www.linkedin.com/in/ahmad-zaki-6b85ab425" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all shadow-sm">
              <LinkedinIcon />
            </a>
            <a href="https://github.com/EasyItsMe" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:bg-[#333] hover:text-white transition-all shadow-sm">
              <GithubIcon />
            </a>
            <a href="mailto:adroitahmadzaki@gmail.com" aria-label="Email" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all shadow-sm">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="col-span-1 md:col-span-6 lg:col-span-7 grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-5">Product</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">How It Works</Link></li>
              <li><Link href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/dmca" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">DMCA</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 dark:text-slate-500">
        <p>© {new Date().getFullYear()} SnapVid. All rights reserved.</p>
        <p className="mt-4 md:mt-0">v1.0.0</p>
      </div>
    </footer>
  );
}
