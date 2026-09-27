"use client";

import React from "react";
import Image from "next/image";
import { CompareModel } from "@/lib/compareModelsData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FocusModelBarProps {
  models: CompareModel[];
  activeFocusModelId: string;
  onSelectFocusModel: (modelId: string) => void;
}

export default function FocusModelBar({
  models,
  activeFocusModelId,
  onSelectFocusModel,
}: FocusModelBarProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap pt-2 px-4 select-none">
      {models.map((model) => {
        const isFocused = activeFocusModelId === model.id;
        return (
          <Tooltip key={model.id}>
            <TooltipTrigger
              type="button"
              onClick={() => onSelectFocusModel(model.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isFocused
                  ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-2 border-[#4F46E5] shadow-2xs"
                  : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-2xs"
              }`}
            >
              <div className="relative w-3.5 h-3.5 rounded overflow-hidden shrink-0">
                <Image
                  fill
                  src={model.iconSrc}
                  alt={model.name}
                  sizes="14px"
                  className="object-contain"
                />
              </div>
              <span>{model.name}</span>
            </TooltipTrigger>
            <TooltipContent side="top">
              Focus view on {model.name} ({model.provider})
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
