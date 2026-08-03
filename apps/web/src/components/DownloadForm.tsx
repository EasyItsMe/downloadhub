"use client";

import { useState } from "react";
import { Download, Loader2, Link as LinkIcon, Video, Music } from "lucide-react";

type Format = {
  format_id: string;
  ext: string;
  resolution: string;
  filesize: number | null;
  url: string;
  vcodec: string;
  acodec: string;
};

type VideoInfo = {
  id: string;
  title: string;
  thumbnail: string;
  duration: number | null;
  extractor: string;
  formats: Format[];
};

export default function DownloadForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<VideoInfo | null>(null);

  const formatBytes = (bytes: number | null) => {
    if (!bytes) return "Unknown size";
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleDownloadInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/download/info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || "Failed to fetch video information");
      }

      const data: VideoInfo = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <form onSubmit={handleDownloadInfo} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-[#0a0a1a] rounded-2xl border border-white/10 p-2 shadow-2xl">
          <div className="pl-4 pr-2 text-gray-500">
            <LinkIcon className="w-6 h-6" />
          </div>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your video URL here (YouTube, TikTok, Twitter...)"
            required
            className="flex-1 bg-transparent border-none outline-none text-white text-lg px-2 py-4 placeholder-gray-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
            {loading ? "Extracting..." : "Get Links"}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center animate-fade-in-up">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-12 glass-panel p-6 rounded-3xl animate-fade-in-up flex flex-col md:flex-row gap-8 text-left">
          <div className="w-full md:w-1/3 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={result.thumbnail} 
              alt={result.title} 
              className="w-full h-auto aspect-video object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-xs text-blue-300 font-medium mb-3 uppercase tracking-wider">
              {result.extractor}
            </div>
            <h3 className="text-xl font-bold text-white mb-6 truncate" title={result.title}>{result.title}</h3>
            
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {result.formats.map((format, idx) => (
                <a
                  key={idx}
                  href={format.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    {format.vcodec === 'none' ? <Music className="w-5 h-5 text-purple-400" /> : <Video className="w-5 h-5 text-blue-400" />}
                    <div>
                      <p className="font-semibold text-gray-200">
                        {format.resolution === 'Audio' ? 'Audio Only' : `${format.resolution}`}
                        <span className="text-xs text-gray-500 ml-2 uppercase">.{format.ext}</span>
                      </p>
                      <p className="text-xs text-gray-400">{formatBytes(format.filesize)}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all text-purple-400">
                    <Download className="w-4 h-4" />
                  </div>
                </a>
              ))}
              {result.formats.length === 0 && (
                <p className="text-gray-400 text-sm italic">No direct download links available for this media.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
