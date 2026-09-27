"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Layers, ChevronDown, Check, X } from "lucide-react";
import {
  ALL_AVAILABLE_COMPARE_MODELS,
  CompareModel,
} from "@/lib/compareModelsData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "motion/react";

interface CompareInputCardProps {
  selectedModels: CompareModel[];
  onToggleModel: (model: CompareModel) => void;
  onSubmit: (prompt: string) => void;
  isComparing?: boolean;
}

export default function CompareInputCard({
  selectedModels,
  onToggleModel,
  onSubmit,
  isComparing = false,
}: CompareInputCardProps) {
  const [prompt, setPrompt] = useState("");
  const [modelManagerOpen, setModelManagerOpen] = useState(false);
  const managerRef = useRef<HTMLDivElement>(null);

  // Close manager on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        managerRef.current &&
        !managerRef.current.contains(event.target as Node)
      ) {
        setModelManagerOpen(false);
      }
    }
    if (modelManagerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modelManagerOpen]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (prompt.trim()) {
        onSubmit(prompt);
      }
    }
  };

  const handleTriggerCompare = () => {
    if (!prompt.trim()) return;
    onSubmit(prompt);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 select-none">
      <div className="w-full rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-4 sm:p-5 space-y-4">
        {/* ========================================================= */}
        {/* 1. Prompt Textarea Input                                 */}
        {/* ========================================================= */}
        <textarea
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message 5 models..."
          className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none resize-none leading-relaxed"
        />

        {/* ========================================================= */}
        {/* 2. Bottom Toolbar: Stacked Models Pill + Compare Button  */}
        {/* ========================================================= */}
        <div className="pt-2 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          {/* Left: Overlapping Model Avatars Pill */}
          <div className="relative" ref={managerRef}>
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={() => setModelManagerOpen(!modelManagerOpen)}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-neutral-200/90 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold shadow-2xs transition-colors cursor-pointer group"
              >
                {/* Overlapping circular avatars */}
                <div className="flex -space-x-1.5 overflow-hidden py-0.5">
                  {selectedModels.map((model) => (
                    <div
                      key={model.id}
                      className="relative w-4.5 h-4.5 rounded-full bg-white ring-1.5 ring-white overflow-hidden shrink-0 shadow-2xs"
                    >
                      <Image
                        fill
                        src={model.iconSrc}
                        alt={model.name}
                        sizes="18px"
                        className="object-contain p-0.5"
                      />
                    </div>
                  ))}
                </div>

                {/* Model Stack Label */}
                <span className="text-neutral-900 font-semibold">
                  {selectedModels[0]?.name || "EchoGPT"} +{Math.max(0, selectedModels.length - 1)} more
                </span>

                <ChevronDown
                  className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-transform duration-200 ${
                    modelManagerOpen ? "rotate-180" : ""
                  }`}
                />
              </TooltipTrigger>
              <TooltipContent side="top">
                Configure the 5 models in this comparison arena
              </TooltipContent>
            </Tooltip>

            {/* Model Manager Dropdown Popover */}
            <AnimatePresence>
              {modelManagerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 bottom-full mb-2 w-72 sm:w-80 bg-white rounded-2xl border border-neutral-200/80 shadow-2xl p-2 z-50 overflow-hidden"
                >
                  <div className="flex items-center justify-between px-2 py-1.5 border-b border-neutral-100 mb-1">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                      Selected Models ({selectedModels.length}/5)
                    </span>
                    <button
                      type="button"
                      onClick={() => setModelManagerOpen(false)}
                      className="text-neutral-400 hover:text-neutral-700 p-0.5 rounded-full cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-0.5 max-h-64 overflow-y-auto scrollbar-thin">
                    {ALL_AVAILABLE_COMPARE_MODELS.map((model) => {
                      const isSelected = selectedModels.some(
                        (m) => m.id === model.id
                      );
                      return (
                        <button
                          key={model.id}
                          type="button"
                          onClick={() => onToggleModel(model)}
                          className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer ${
                            isSelected
                              ? "bg-indigo-50/80 text-indigo-950 font-semibold"
                              : "hover:bg-neutral-100/70 text-neutral-700"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="relative w-5 h-5 rounded-full bg-white border border-neutral-200/80 overflow-hidden shrink-0 shadow-2xs">
                              <Image
                                fill
                                src={model.iconSrc}
                                alt={model.name}
                                sizes="20px"
                                className="object-contain p-0.5"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold truncate">
                                {model.name}
                              </p>
                              <p className="text-[10px] text-neutral-400 truncate">
                                {model.provider} · {model.speed}
                              </p>
                            </div>
                          </div>

                          {isSelected && (
                            <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Compare Action Button */}
          <div className="shrink-0">
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={handleTriggerCompare}
                disabled={!prompt.trim() || isComparing}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/20 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isComparing ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Comparing...</span>
                  </>
                ) : (
                  <span>Compare</span>
                )}
              </TooltipTrigger>
              <TooltipContent side="top">
                Dispatch prompt to {selectedModels.length} models simultaneously
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Footnote matching screenshot */}
        <p className="text-[11px] text-neutral-400 pt-1 select-none">
          Every selected model answers the same prompt.
        </p>
      </div>
    </div>
  );
}
