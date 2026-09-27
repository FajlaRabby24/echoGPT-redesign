"use client";

import React from "react";
import { Flame, Info } from "lucide-react";
import { AspectRatioOption, ImageModel } from "@/lib/imageStudioData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CreditBadgeProps {
  model: ImageModel;
  ratio: AspectRatioOption;
  quantity: number;
}

export default function CreditBadge({
  model,
  ratio,
  quantity,
}: CreditBadgeProps) {
  const costPerImage = model.baseCredits + ratio.extraCredits;
  const totalCredits = costPerImage * quantity;

  return (
    <Tooltip>
      <TooltipTrigger
        type="button"
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50/90 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-semibold shadow-2xs hover:bg-amber-100 dark:hover:bg-amber-950/80 transition-colors cursor-pointer select-none"
      >
        <Flame className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 animate-bounce" />
        <span><span className="font-bold text-amber-950 dark:text-amber-100">{totalCredits}</span> {totalCredits === 1 ? "credit" : "credits"}
        </span>
        <Info className="w-3 h-3 text-amber-500 dark:text-amber-400 opacity-70" />
      </TooltipTrigger>
      <TooltipContent side="top" className="text-xs max-w-xs">
        <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-0.5">Credit Breakdown</p>
        <p className="text-neutral-500 dark:text-neutral-400">
          {model.name}: {model.baseCredits} cr
          {ratio.extraCredits > 0 ? ` + ${ratio.label} ratio: ${ratio.extraCredits} cr` : ""}
          {` × ${quantity} ${quantity === 1 ? "image" : "images"}`} ={" "}
          <span className="font-bold text-indigo-600 dark:text-indigo-400">{totalCredits} credits</span>
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
