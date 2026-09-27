"use client";

import React from "react";
import { Coins, Video } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface VideoStudioHeaderProps {
  userBalance?: number;
}

export default function VideoStudioHeader({
  userBalance = 240,
}: VideoStudioHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto px-4 select-none">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
        Video Studio
      </h1>

      {/* Subtitle matching original screenshot */}
      <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal">
        Just type what you imagine, and the video makes itself.
      </p>

      {/* Video Credits Balance Pill */}
      <div className="pt-1">
        <Tooltip>
          <TooltipTrigger
            type="button"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100/80 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-850 transition-colors cursor-pointer"
          >
            <Coins className="w-3.5 h-3.5 text-amber-500" />
            <span>Available balance:</span>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">{userBalance} credits</span>
            <span className="text-neutral-300 dark:text-neutral-700">·</span>
            <Link
              href="/pricing"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold"
            >
              Top up
            </Link>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            Your monthly render credits for generative AI video
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
