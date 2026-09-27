"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, Copy, Check, Heart, Maximize2 } from "lucide-react";
import { UserCreation } from "@/lib/imageStudioData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CreationCardProps {
  creation: UserCreation;
  onPreview?: (creation: UserCreation) => void;
}

export default function CreationCard({
  creation,
  onPreview,
}: CreationCardProps) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(creation.likes);

  const handleCopyPrompt = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(creation.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (liked) {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(creation.imageUrl, "_blank");
  };

  return (
    <div
      onClick={() => onPreview?.(creation)}
      className="group relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer select-none"
    >
      {/* Image Container with Aspect Ratio */}
      <div className="relative w-full aspect-square overflow-hidden bg-neutral-200">
        <Image
          fill
          src={creation.imageUrl}
          alt={creation.prompt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5" />

        {/* Top Badges (Model & Ratio) */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
            {creation.modelName}
          </span>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-neutral-200 border border-white/20">
            {creation.aspectRatio}
          </span>
        </div>

        {/* Bottom Content & Actions on Hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 space-y-2">
          {/* Prompt Snippet */}
          <p className="text-xs text-white/95 line-clamp-2 leading-snug drop-shadow-sm font-medium">
            {creation.prompt}
          </p>

          {/* Quick Toolbar */}
          <div className="flex items-center justify-between pt-1 border-t border-white/20">
            {/* Like count */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={handleToggleLike}
                className="flex items-center gap-1 text-[11px] text-white/90 hover:text-white transition-colors"
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    liked ? "fill-red-500 text-red-500" : "text-white"
                  }`}
                />
                <span>{likeCount}</span>
              </TooltipTrigger>
              <TooltipContent side="top">
                {liked ? "Unlike" : "Like this creation"}
              </TooltipContent>
            </Tooltip>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5">
              <Tooltip>
                <TooltipTrigger
                  type="button"
                  onClick={handleCopyPrompt}
                  className="p-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-xs transition-colors"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </TooltipTrigger>
                <TooltipContent side="top">
                  {copied ? "Copied!" : "Copy prompt"}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  type="button"
                  onClick={handleDownload}
                  className="p-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                </TooltipTrigger>
                <TooltipContent side="top">Open full image</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
