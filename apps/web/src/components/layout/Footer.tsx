import { DownloadCloud, Code2, MessageSquare } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
              <DownloadCloud className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">SnapVid</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
            The fastest, most reliable way to download videos from your favorite platforms in original quality. 100% free and secure.
          </p>
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><MessageSquare className="w-5 h-5" /></a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Code2 className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li><Link href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</Link></li>
            <li><Link href="#how-it-works" className="hover:text-slate-900 dark:hover:text-white transition-colors">How It Works</Link></li>
            <li><Link href="#faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <p>© {new Date().getFullYear()} SnapVid. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
