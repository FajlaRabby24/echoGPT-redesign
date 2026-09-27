"use client";

import React from "react";

export default function ResumeHeader() {
  return (
    <div className="text-center space-y-3 px-4 select-none">
      <h1 className="text-2xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-neutral-900 flex items-center justify-center gap-2.5 flex-wrap">
        <span>EchoGPT – AI Job Insight</span>
        <span className="inline-block px-4 py-1 rounded-2xl bg-[#4F46E5] text-white font-black shadow-lg shadow-indigo-500/30">
          Assistant
        </span>
      </h1>
      <p className="text-xs sm:text-sm text-neutral-500 max-w-xl mx-auto font-normal">
        Elevate your career trajectory with automated resume tailoring, vacancy analysis, and personalized interview readiness.
      </p>
    </div>
  );
}
