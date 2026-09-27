"use client";

import React, { useRef, useState, useEffect } from "react";
import { Plus, History, Lightbulb, Send, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ResumeInputBoxProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (prompt: string) => void;
  placeholder?: string;
  isAnalyzing?: boolean;
}

export default function ResumeInputBox({
  value,
  onChange,
  onSubmit,
  placeholder = "Paste job posting URL, paste job description, or describe your target role...",
  isAnalyzing = false,
}: ResumeInputBoxProps) {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        180
      )}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !isAnalyzing) {
        onSubmit(value);
      }
    }
  };

  const handleTriggerSubmit = () => {
    if (!value.trim() || isAnalyzing) return;
    onSubmit(value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 select-none">
      <div
        className={`w-full rounded-2xl bg-white border transition-all duration-200 shadow-sm p-4 sm:p-5 space-y-4 ${
          isFocused
            ? "border-indigo-500/80 shadow-[0_4px_20px_rgba(79,70,229,0.12)] ring-2 ring-indigo-500/10"
            : "border-neutral-200/90 hover:border-neutral-300 hover:shadow-md"
        }`}
      >
        {/* Top Textarea with Right Quick Action Icons */}
        <div className="flex items-start justify-between gap-3">
          <textarea
            ref={textareaRef}
            rows={2}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="flex-1 min-h-[48px] max-h-44 bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none resize-none leading-relaxed"
          />

          {/* Top-Right Helper Icons: Plus & History */}
          <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={() => onChange("")}
                className="w-8 h-8 rounded-full border border-neutral-200/80 bg-white hover:bg-neutral-50 text-neutral-500 hover:text-neutral-900 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              >
                <Plus className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">New analysis session</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                type="button"
                className="w-8 h-8 rounded-full border border-neutral-200/80 bg-white hover:bg-neutral-50 text-neutral-500 hover:text-neutral-900 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              >
                <History className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Previous job analyses</TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Bottom Toolbar: Mode Badge + Analyze Job Action Button */}
        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between gap-3 flex-wrap">
          {/* Left Pill: Job Insights */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100/90 text-[#4F46E5] text-xs font-semibold shadow-2xs">
            <Lightbulb className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Job Insights</span>
          </div>

          {/* Right: Analyze Job Button */}
          <Tooltip>
            <TooltipTrigger
              type="button"
              disabled={!value.trim() || isAnalyzing}
              onClick={handleTriggerSubmit}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/25 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <span>Analyze Job</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </TooltipTrigger>
            <TooltipContent side="top">
              Analyze job description and generate tailored recommendations
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
