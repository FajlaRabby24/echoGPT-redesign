"use client";

import React from "react";
import { LayoutGrid, Maximize2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type CompareMode = "compare" | "focus";

interface CompareModeToggleProps {
  mode: CompareMode;
  onModeChange: (mode: CompareMode) => void;
}

export default function CompareModeToggle({
  mode,
  onModeChange,
}: CompareModeToggleProps) {
  return (
    <div className="flex items-center justify-center select-none">
      <div className="inline-flex items-center p-1 rounded-full bg-neutral-100/80 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700 shadow-2xs">
        {/* 1. Compare Mode Tab */}
        <Tooltip>
          <TooltipTrigger
            type="button"
            onClick={() => onModeChange("compare")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              mode === "compare"
                ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-xs"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Compare</span>
          </TooltipTrigger>
          <TooltipContent side="top">
            Side-by-side consensus from 5 models simultaneously
          </TooltipContent>
        </Tooltip>

        {/* 2. Focus Mode Tab */}
        <Tooltip>
          <TooltipTrigger
            type="button"
            onClick={() => onModeChange("focus")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              mode === "focus"
                ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-xs"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Focus</span>
          </TooltipTrigger>
          <TooltipContent side="top">
            Select and focus on specific individual model responses
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
