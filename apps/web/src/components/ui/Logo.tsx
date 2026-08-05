import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 overflow-hidden ${className}`}>
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.4)_0%,transparent_50%,rgba(0,0,0,0.1)_100%)]" />
      
      {/* Custom Abstract S & Play Shape */}
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 text-white drop-shadow-md"
      >
        <path 
          d="M7 4V20L20 12L7 4Z" 
          fill="currentColor"
        />
        <path 
          d="M7 4L20 12L7 12V4Z" 
          fill="rgba(0,0,0,0.15)"
        />
        <circle cx="11" cy="12" r="2" fill="white" className="animate-pulse" />
      </svg>
    </div>
  );
}
