"use client";

import React from "react";
import { Flame, Info } from "lucide-react";
import {
  VideoAspectRatio,
  VideoDurationOption,
  VideoModel,
} from "@/lib/videoStudioData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface VideoCreditBadgeProps {
  model: VideoModel;
  ratio: VideoAspectRatio;
  duration: VideoDurationOption;
}

export default function VideoCreditBadge({
  model,
  ratio,
  duration,
}: VideoCreditBadgeProps) {
  const baseCost = model.baseCredits + ratio.extraCredits;
  const totalCredits = baseCost * duration.multiplier;

  return (
    <Tooltip>
      <TooltipTrigger
        type="button"
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50/90 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-semibold shadow-2xs hover:bg-amber-100 dark:hover:bg-amber-950/80 transition-colors cursor-pointer select-none"
      >
        <Flame className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 animate-bounce" />
        <span>
          Burns <span className="font-bold text-amber-950 dark:text-amber-100">{totalCredits}</span> credits
        </span>
        <Info className="w-3 h-3 text-amber-500 dark:text-amber-400 opacity-70" />
      </TooltipTrigger>
      <TooltipContent side="top" className="text-xs max-w-xs">
        <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-0.5">Render Cost Breakdown</p>
        <p className="text-neutral-500 dark:text-neutral-400">
          {model.name}: {model.baseCredits} cr
          {ratio.extraCredits > 0 ? ` + ${ratio.label}: ${ratio.extraCredits} cr` : ""}
          {` × ${duration.label} duration (${duration.multiplier}x)`} ={" "}
          <span className="font-bold text-indigo-600 dark:text-indigo-400">{totalCredits} credits</span>
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
