"use client";

import React, { useState } from "react";
import { Clapperboard, X, Download, Copy, Check, Clock, Coins, Video } from "lucide-react";
import { UserVideoCreation } from "@/lib/videoStudioData";
import VideoCreationCard from "./VideoCreationCard";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

interface VideoCreationsGalleryProps {
  creations: UserVideoCreation[];
}

export default function VideoCreationsGallery({
  creations,
}: VideoCreationsGalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [previewVideo, setPreviewVideo] = useState<UserVideoCreation | null>(
    null
  );
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const categories = ["All", "Nature", "Futuristic", "Cinematic"];

  const filteredCreations =
    selectedFilter === "All"
      ? creations
      : creations.filter((item) => item.category === selectedFilter);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pt-8 pb-16 space-y-6">
      {/* ========================================================= */}
      {/* 1. Gallery Header & Category Filters                      */}
      {/* ========================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
            Your creations
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Rendered with EchoGPT neural video engines
          </p>
        </div>

        {/* Filter Pills */}
        {creations.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 bg-neutral-100/80 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. Video Grid or Empty State                              */}
      {/* ========================================================= */}
      {filteredCreations.length === 0 ? (
        <div className="py-20 flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 dark:text-neutral-500 shadow-2xs">
            <Clapperboard className="w-5 h-5" />
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
            Nothing here yet — describe a video above to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {filteredCreations.map((item) => (
            <VideoCreationCard
              key={item.id}
              creation={item}
              onPreview={(vid) => setPreviewVideo(vid)}
            />
          ))}
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. Full Video Preview Player Modal                        */}
      {/* ========================================================= */}
      <AnimatePresence>
        {previewVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewVideo(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row border border-neutral-200/80 dark:border-neutral-800"
            >
              {/* Left Video Player */}
              <div className="relative w-full lg:w-3/5 bg-black flex items-center justify-center min-h-[260px] sm:min-h-[360px]">
                <video
                  src={previewVideo.videoUrl}
                  poster={previewVideo.posterUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full max-h-[500px] object-contain"
                />
              </div>

              {/* Right Metadata & Controls */}
              <div className="w-full lg:w-2/5 p-6 flex flex-col justify-between space-y-5 bg-white dark:bg-neutral-900">
                <div className="space-y-4">
                  {/* Top Bar with model badge and close */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/60">
                        {previewVideo.modelName}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        {previewVideo.duration}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setPreviewVideo(null)}
                      className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Title & Prompt */}
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                      {previewVideo.title}
                    </h3>
                    <label className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                      Video Prompt
                    </label>
                    <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed bg-neutral-50 dark:bg-neutral-800/60 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 max-h-40 overflow-y-auto font-normal">
                      {previewVideo.prompt}
                    </p>
                  </div>

                  {/* Metadata Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800 flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                      <Clock className="w-4 h-4 text-neutral-400" />
                      <span>{previewVideo.createdAt}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800 flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                      <Coins className="w-4 h-4 text-amber-500" />
                      <span>{previewVideo.creditsUsed} credits used</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="space-y-2 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <button
                    type="button"
                    onClick={() => handleCopy(previewVideo.prompt)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>Prompt Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-neutral-500" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>

                  <Link
                    href={previewVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA]  text-white font-semibold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download MP4 Video</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
