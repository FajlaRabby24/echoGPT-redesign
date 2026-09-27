"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Sparkles,
  Check,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const MODELS_FILTER = [
  "All Models",
  "GLM-5.2",
  "EchoGPT Pro",
  "GPT-4o",
  "DeepSeek R1",
  "Gemini 1.5 Pro",
  "Grok 2",
];

export default function HistoryComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState("GLM-5.2");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8 sm:space-y-10 select-none">
      {/* ========================================================= */}
      {/* 1. Header: Title & Subtitle (Faithfully matching image)   */}
      {/* ========================================================= */}
      <div className="text-center space-y-2.5 max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
          My Chat History
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
          Access your complete chat history across diverse topics and interactions with different models or characters.
        </p>
      </div>

      {/* ========================================================= */}
      {/* 2. Search & Model Filter Bar (Matching screenshot)        */}
      {/* ========================================================= */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Search Input Box */}
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chat history..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-neutral-200/90 bg-white placeholder:text-neutral-400 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 shadow-2xs transition-all"
          />
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Model Filter Dropdown */}
        <div className="relative w-full sm:w-48 shrink-0" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-2xl border border-neutral-200/90 bg-white hover:bg-neutral-50/80 text-xs sm:text-sm font-semibold text-neutral-800 shadow-2xs transition-all cursor-pointer"
          >
            <span>{selectedModel}</span>
            <ChevronDown
              className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Animated Dropdown Menu */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute right-0 top-full mt-1.5 w-full bg-white rounded-2xl border border-neutral-200/90 shadow-xl shadow-neutral-900/10 p-1.5 z-40 overflow-hidden"
              >
                <div className="space-y-0.5">
                  {MODELS_FILTER.map((m) => {
                    const isSelected = selectedModel === m;
                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => {
                          setSelectedModel(m);
                          setDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-indigo-50 text-indigo-900"
                            : "text-neutral-700 hover:bg-neutral-100/70"
                        }`}
                      >
                        <span>{m}</span>
                        {isSelected && (
                          <Check className="w-3.5 h-3.5 text-[#4F46E5]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. Empty Chat History State (Faithfully matching image)   */}
      {/* ========================================================= */}
      <div className="py-24 sm:py-32 flex flex-col items-center justify-center text-center space-y-4">
        <p className="text-sm sm:text-base text-neutral-400 font-medium">
          Empty Chat History
        </p>

        {/* Action Button: Start New Conversation */}
        <Link
          href="/app"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>Start New Conversation</span>
        </Link>
      </div>
    </div>
  );
}
