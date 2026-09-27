"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PromptSuggestion } from "@/lib/promptSuggestions";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SuggestionCardProps {
  suggestion: PromptSuggestion;
  onSelect: (promptText: string) => void;
}

export default function SuggestionCard({
  suggestion,
  onSelect,
}: SuggestionCardProps) {
  const Icon = suggestion.icon;

  return (
    <div className="group relative w-full text-left p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/80 hover:border-indigo-300 shadow-2xs hover:shadow-md transition-all duration-200 active:scale-[0.99] cursor-pointer flex flex-col justify-between select-none">
        {/* Card Top: Icon, Tag Badge, and Arrow Indicator */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50/90 border border-indigo-100/80 text-indigo-600 flex items-center justify-center shadow-2xs group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200 shrink-0">
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-100/80 px-2 py-0.5 rounded-md border border-neutral-200/50">
              {suggestion.tag}
            </span>
          </div>

          <div className="w-6 h-6 rounded-lg bg-neutral-50 group-hover:bg-indigo-50 flex items-center justify-center text-neutral-400 group-hover:text-indigo-600 transition-colors shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </div>
        </div>

        {/* Card Content: Title and Description */}
        <div className="space-y-1">
          <h3 className="font-bold text-neutral-900 text-sm sm:text-base tracking-tight group-hover:text-indigo-600 transition-colors">
            {suggestion.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed line-clamp-2">
            {suggestion.description}
          </p>
        </div>
        </div>
  );
}
