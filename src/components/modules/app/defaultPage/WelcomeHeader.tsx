"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface WelcomeHeaderProps {
  userName?: string;
}

export default function WelcomeHeader({ userName }: WelcomeHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto px-4 select-none">
      {/* Subtle Pill Tag */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
        <span>Unified Multi-Model Intelligence</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
        Hello There! <span className="inline-block animate-wave origin-bottom-right">👋</span>{" "}
        <span className="bg-linear-to-r from-neutral-900 via-neutral-800 to-indigo-950 dark:from-neutral-100 dark:via-neutral-200 dark:to-indigo-300 bg-clip-text text-transparent">
          How can I assist you today?
        </span>
      </h1>

      {/* Modernized Supportive Subtitle */}
      <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal max-w-lg leading-relaxed">
        Your personal AI assistant is ready to help — ask questions, brainstorm bold ideas, or orchestrate complex tasks anytime.
      </p>
    </div>
  );
}
