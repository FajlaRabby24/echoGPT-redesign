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
      className={`flex flex-col justify-between rounded-2xl bg-white border transition-all duration-200 p-4 sm:p-5 shadow-2xs hover:shadow-md select-none ${
        isWinner
          ? "border-[#4F46E5] ring-2 ring-indigo-500/20 shadow-indigo-500/5"
          : "border-neutral-200/80"
      }`}
    >
      <div className="space-y-3">
        {/* Model Card Header (Clickable to toggle expand/minimize) */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between border-b border-neutral-100 pb-3 cursor-pointer group"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative w-7 h-7 rounded-xl bg-white border border-neutral-200/80 overflow-hidden shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
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
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 truncate group-hover:text-indigo-600 transition-colors">
                  {answer.modelName}
                </h4>
              </div>
              <p className="text-[10px] text-neutral-400 truncate">
                {answer.provider}
              </p>
            </div>
          </div>

          {/* Right: Latency Badge & Dropdown Expand/Collapse Icon */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              <Clock className="w-2.5 h-2.5 text-emerald-600" />
              {answer.responseTime}
            </span>

            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isExpanded ? "rotate-180 text-indigo-600" : ""
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
          className={`text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal whitespace-pre-line select-text transition-all duration-200 ${
            isExpanded
              ? ""
              : "line-clamp-3 cursor-pointer hover:text-neutral-950"
          }`}
        >
          {answer.content}
        </div>

        {/* Read more hint if minimized */}
        {!isExpanded && (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="text-[11px] font-semibold text-[#4F46E5] hover:text-[#4338CA] hover:underline cursor-pointer flex items-center gap-1 pt-0.5"
          >
            <span>Read full response</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Card Footer: Strengths & Actions */}
      <div className="pt-3.5 mt-3.5 border-t border-neutral-100 flex items-center justify-between gap-2">
        {/* Tags */}
        <div className="flex items-center gap-1 flex-wrap min-w-0">
          <span className="text-[10px] font-medium text-neutral-400">
            {answer.tokensUsed} tokens
          </span>
          <span className="text-neutral-300">·</span>
          {answer.strengths.slice(0, 2).map((st) => (
            <span
              key={st}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600 truncate max-w-[110px]"
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
                  ? "bg-indigo-100 text-indigo-700 border-indigo-300"
                  : "bg-white text-neutral-400 hover:text-neutral-700 border-neutral-200 hover:bg-neutral-50"
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
              className="p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200/80 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
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
