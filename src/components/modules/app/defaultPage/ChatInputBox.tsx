"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Paperclip,
  Mic,
  Send,
  Rocket,
  Network,
  Plus,
  History,
  Sparkles,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChatInputBoxProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (prompt: string) => void;
  placeholder?: string;
}

export default function ChatInputBox({
  value,
  onChange,
  onSubmit,
  placeholder = "Ask a question...",
}: ChatInputBoxProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea based on input content
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
      if (value.trim()) {
        onSubmit(value);
      }
    }
  };

  const handleEnhance = () => {
    if (!value.trim()) return;
    setIsEnhancing(true);
    // Simulate prompt enhancement
    setTimeout(() => {
      onChange(
        `${value.trim()}\n\nPlease provide a clear, step-by-step breakdown with actionable takeaways and concrete examples.`
      );
      setIsEnhancing(false);
    }, 400);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 select-none">
      <div
        className={`w-full rounded-2xl bg-white border transition-all duration-200 shadow-sm ${
          isFocused
            ? "border-indigo-500/80 shadow-[0_4px_20px_rgba(79,70,229,0.12)] ring-2 ring-indigo-500/10"
            : "border-neutral-200/90 hover:border-neutral-300 hover:shadow-md"
        }`}
      >
        {/* ========================================================= */}
        {/* 1. Top Toolbar Inside Input Box                          */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-neutral-100/90 bg-neutral-50/40 rounded-t-2xl">
          {/* Left: Model Pill & Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Model Selector Pill */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-300 text-neutral-800 text-xs font-semibold shadow-2xs hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <div className="relative w-4 h-4 rounded overflow-hidden shrink-0">
                  <Image
                    fill
                    src="/EchoGPT.png"
                    alt="EchoGPT logo"
                    sizes="16px"
                    className="object-contain"
                  />
                </div>
                <span>EchoGPT</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </TooltipTrigger>
              <TooltipContent side="top">Active Model Engine</TooltipContent>
            </Tooltip>

            {/* Divider */}
            <div className="h-3.5 w-px bg-neutral-200/80" />

            {/* Connectors / Integrations */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 active:scale-95 transition-all cursor-pointer"
                aria-label="Connectors"
              >
                <Network className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Connectors & Data Sources</TooltipContent>
            </Tooltip>

            {/* Prompt Enhancer Rocket */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={handleEnhance}
                className={`p-1.5 rounded-lg transition-all cursor-pointer active:scale-95 ${
                  isEnhancing
                    ? "bg-indigo-100 text-indigo-700 animate-pulse"
                    : "text-neutral-500 hover:text-indigo-600 hover:bg-indigo-50/80"
                }`}
                aria-label="Enhance Prompt"
              >
                <Rocket className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Enhance & Optimize Prompt</TooltipContent>
            </Tooltip>
          </div>

          {/* Right: New Session & History Buttons */}
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={() => onChange("")}
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 active:scale-95 transition-all cursor-pointer"
                aria-label="New Session"
              >
                <Plus className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Clear / New Session</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                type="button"
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 active:scale-95 transition-all cursor-pointer"
                aria-label="Prompt History"
              >
                <History className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Prompt & Chat History</TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. Text Input Area & Action Buttons                      */}
        {/* ========================================================= */}
        <div className="p-3 sm:p-3.5 flex items-end gap-2.5">
          {/* Left Attachment Button */}
          <Tooltip>
            <TooltipTrigger
              type="button"
              className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 active:scale-95 transition-colors cursor-pointer shrink-0"
              aria-label="Attach File or URL"
            >
              <Paperclip className="w-4 h-4" />
            </TooltipTrigger>
            <TooltipContent side="top">Attach files or links</TooltipContent>
          </Tooltip>

          {/* Textarea Input */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="flex-1 max-h-44 min-h-[38px] py-1.5 px-1 bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none resize-none leading-relaxed"
          />

          {/* Right Action Icons: Microphone & Send */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Microphone Button */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={() => setIsRecording(!isRecording)}
                className={`p-2 rounded-xl transition-colors cursor-pointer ${
                  isRecording
                    ? "bg-red-50 text-red-600 animate-pulse"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
                aria-label="Voice input"
              >
                <Mic className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">
                {isRecording ? "Listening..." : "Voice dictation"}
              </TooltipContent>
            </Tooltip>

            {/* Send Button */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                disabled={!value.trim()}
                onClick={() => {
                  if (value.trim()) onSubmit(value);
                }}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  value.trim()
                    ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-[0_2px_8px_rgba(79,70,229,0.35)] active:scale-95"
                    : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                }`}
                aria-label="Send prompt"
              >
                <Send className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Send prompt (Enter)</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
