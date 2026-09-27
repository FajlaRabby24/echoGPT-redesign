"use client";

import React, { useRef, useState } from "react";
import { Download, Copy, Check, Heart, Play, Pause } from "lucide-react";
import { UserVideoCreation } from "@/lib/videoStudioData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface VideoCreationCardProps {
  creation: UserVideoCreation;
  onPreview?: (creation: UserVideoCreation) => void;
}

export default function VideoCreationCard({
  creation,
  onPreview,
}: VideoCreationCardProps) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(creation.likes);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    window.open(creation.videoUrl, "_blank");
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      onClick={() => onPreview?.(creation)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer select-none"
    >
      {/* Video Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          src={creation.videoUrl}
          poster={creation.posterUrl}
          loop
          muted
          playsInline
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Center Play Icon when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 pointer-events-none group-hover:bg-transparent transition-colors">
            <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-md group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-neutral-900 ml-0.5" />
            </div>
          </div>
        )}

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Top Badges (Model, Ratio, Duration) */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
              {creation.modelName}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-600/90 text-white shadow-2xs">
              {creation.duration}
            </span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-neutral-200 border border-white/20">
              {creation.aspectRatio}
            </span>
          </div>
        </div>

        {/* Bottom Content & Controls */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 space-y-2">
          {/* Prompt Snippet */}
          <p className="text-xs text-white/95 line-clamp-2 leading-snug drop-shadow-sm font-medium">
            {creation.prompt}
          </p>

          {/* Quick Toolbar */}
          <div className="flex items-center justify-between pt-1 border-t border-white/20">
            {/* Likes */}
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
                {liked ? "Unlike" : "Like this video"}
              </TooltipContent>
            </Tooltip>

            {/* Actions */}
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
                <TooltipContent side="top">Open video in new tab</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
