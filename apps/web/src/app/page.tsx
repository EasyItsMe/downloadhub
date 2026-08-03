import { DownloadCloud } from "lucide-react";
import DownloadForm from "@/components/DownloadForm";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <DownloadCloud className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold tracking-tight text-white">DownloadHub</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-sm text-purple-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Free forever. No ads. No limits.
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 animate-fade-in-up text-white" style={{ animationDelay: '0.2s' }}>
          Download Any Video,<br className="hidden md:block" />
          <span className="text-gradient">Anywhere</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Paste a link from YouTube, TikTok, Twitter, Facebook, or Instagram to extract direct download links instantly.
        </p>

        <DownloadForm />
      </section>
      
      {/* Footer */}
      <footer className="mt-auto py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} DownloadHub. Built for personal use only.</p>
        </div>
      </footer>
    </main>
  );
}
