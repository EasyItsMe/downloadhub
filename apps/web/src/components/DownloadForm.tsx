"use client";

import { useState } from "react";
import { Download, Loader2, Link as LinkIcon, Video, Music, AlertCircle } from "lucide-react";

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
  
  // Track which format is currently being downloaded
  const [downloadingFormat, setDownloadingFormat] = useState<string | null>(null);

  const formatBytes = (bytes: number | null) => {
    if (!bytes) return null;
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
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
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full text-left">
      <form onSubmit={handleDownloadInfo} className="w-full">
        <div className="relative flex items-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/20 rounded-2xl overflow-hidden transition-all shadow-xl">
          <div className="pl-5 pr-3 text-zinc-400 dark:text-zinc-500">
            <LinkIcon className="w-5 h-5" />
          </div>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your video link here..."
            required
            className="flex-1 bg-transparent border-none outline-none text-zinc-900 dark:text-zinc-100 text-lg px-2 py-5 placeholder-zinc-400 dark:placeholder-zinc-600"
          />
          <div className="pr-2.5">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
              {loading ? "Extracting..." : "Extract"}
            </button>
          </div>
        </div>
      </form>

      {error && (
        <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 backdrop-blur-sm">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-sm text-red-300 font-medium">{error}</p>
        </div>
      )}

      {result && (
        <div className="mt-12 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="w-full md:w-[45%] shrink-0 bg-zinc-100 dark:bg-black/80 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={result.thumbnail} 
              alt={result.title} 
              className="w-full h-full aspect-video md:aspect-auto object-cover opacity-90"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-xs text-zinc-200 font-bold tracking-wide uppercase border border-white/10 shadow-lg">
                {result.extractor}
              </span>
            </div>
            {result.duration && (
              <div className="absolute bottom-4 right-4">
                <span className="px-2 py-1 rounded bg-black/80 text-xs text-zinc-200 font-medium tracking-wide">
                  {Math.floor(result.duration / 60)}:{(result.duration % 60).toString().padStart(2, '0')}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 p-6 md:p-8 min-w-0 flex flex-col">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 line-clamp-2 leading-snug" title={result.title}>{result.title}</h3>
            
            <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-3 custom-scrollbar flex-1">
              {result.formats
                .filter(f => f.resolution?.toLowerCase() !== 'unknown' && f.ext?.toLowerCase() !== 'unknown')
                .map((format, idx) => {
                const targetUrl = format.url && format.url.includes("tikwm.com") ? format.url : url;
                const downloadLink = `http://127.0.0.1:8000/api/download/file?url=${encodeURIComponent(targetUrl)}&format_id=${encodeURIComponent(format.format_id)}&ext=${encodeURIComponent(format.ext)}`;
                const isDownloading = downloadingFormat === format.format_id;
                
                const fileSizeStr = formatBytes(format.filesize);

                return (
                  <a
                    key={idx}
                    href={downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setDownloadingFormat(format.format_id);
                      // Clear it after a timeout so it doesn't spin forever
                      setTimeout(() => setDownloadingFormat(null), 10000);
                    }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-500/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 dark:text-zinc-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                        {format.vcodec === 'none' ? <Music className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                          {format.resolution === 'Audio' ? 'Audio Only' : format.resolution}
                          <span className="text-[10px] text-zinc-600 dark:text-zinc-500 ml-2 font-bold bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded uppercase tracking-wider">{format.ext}</span>
                        </p>
                        {fileSizeStr && (
                          <p className="text-xs text-zinc-500 mt-1 font-medium">{fileSizeStr}</p>
                        )}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                    </div>
                  </a>
                );
              })}
              {result.formats.length === 0 && (
                <div className="text-center p-6 border border-dashed border-zinc-800 rounded-xl">
                  <p className="text-zinc-500 text-sm font-medium">No direct download links available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
