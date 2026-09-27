"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Copy, Check, ThumbsUp, Clock, ChevronDown } from "lucide-react";
import { ComparisonAnswer } from "@/lib/compareModelsData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ModelCardResponseProps {
  answer: ComparisonAnswer;
  isWinner?: boolean;
  onVoteWinner?: (modelId: string) => void;
  defaultExpanded?: boolean;
}

export default function ModelCardResponse({
  answer,
  isWinner = false,
  onVoteWinner,
  defaultExpanded = false,
}: ModelCardResponseProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(answer.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVote = (e: React.MouseEvent) => {
    e.stopPropagation();
    onVoteWinner?.(answer.modelId);
  };

  return (
    <div
      className={`flex flex-col justify-between rounded-2xl bg-white dark:bg-neutral-900 border transition-all duration-200 p-4 sm:p-5 shadow-2xs hover:shadow-md select-none ${
        isWinner
          ? "border-[#4F46E5] ring-2 ring-indigo-500/20 shadow-indigo-500/5"
          : "border-neutral-200/80 dark:border-neutral-800"
      }`}
    >
      <div className="space-y-3">
        {/* Model Card Header (Clickable to toggle expand/minimize) */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3 cursor-pointer group"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative w-7 h-7 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 overflow-hidden shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Image
                fill
                src={answer.iconSrc}
                alt={answer.modelName}
                sizes="28px"
                className="object-contain p-0.5"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {answer.modelName}
                </h4>
              </div>
              <p className="text-[10px] text-neutral-400 dark:text-neutral-500 truncate">
                {answer.provider}
              </p>
            </div>
          </div>

          {/* Right: Latency Badge & Dropdown Expand/Collapse Icon */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
              <Clock className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
              {answer.responseTime}
            </span>

            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="p-1 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isExpanded ? "rotate-180 text-indigo-600 dark:text-indigo-400" : ""
                  }`}
                />
              </TooltipTrigger>
              <TooltipContent side="top">
                {isExpanded ? "Collapse response" : "Expand full response"}
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Answer Content */}
        <div
          onClick={() => !isExpanded && setIsExpanded(true)}
          className={`text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal whitespace-pre-line select-text transition-all duration-200 ${
            isExpanded
              ? ""
              : "line-clamp-3 cursor-pointer hover:text-neutral-950 dark:hover:text-neutral-100"
          }`}
        >
          {answer.content}
        </div>

        {/* Read more hint if minimized */}
        {!isExpanded && (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="text-[11px] font-semibold text-[#4F46E5] dark:text-indigo-400 hover:text-[#4338CA] dark:hover:text-indigo-300 hover:underline cursor-pointer flex items-center gap-1 pt-0.5"
          >
            <span>Read full response</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Card Footer: Strengths & Actions */}
      <div className="pt-3.5 mt-3.5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-2">
        {/* Tags */}
        <div className="flex items-center gap-1 flex-wrap min-w-0">
          <span className="text-[10px] font-medium text-neutral-400 dark:text-neutral-500">
            {answer.tokensUsed} tokens
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          {answer.strengths.slice(0, 2).map((st) => (
            <span
              key={st}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 truncate max-w-[110px]"
            >
              {st}
            </span>
          ))}
        </div>

        {/* Action Buttons: Vote & Copy */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Tooltip>
            <TooltipTrigger
              type="button"
              onClick={handleVote}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isWinner
                  ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800"
                  : "bg-white dark:bg-neutral-900 text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              }`}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </TooltipTrigger>
            <TooltipContent side="top">
              {isWinner ? "Selected as best answer" : "Vote as best response"}
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              type="button"
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </TooltipTrigger>
            <TooltipContent side="top">
              {copied ? "Copied!" : "Copy response"}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
