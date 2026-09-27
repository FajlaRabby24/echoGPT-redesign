"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, X, Download, Copy, Check, Clock, Coins } from "lucide-react";
import { UserCreation } from "@/lib/imageStudioData";
import CreationCard from "./CreationCard";
import { AnimatePresence, motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CreationsGalleryProps {
  creations: UserCreation[];
}

export default function CreationsGallery({ creations }: CreationsGalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [previewCreation, setPreviewCreation] = useState<UserCreation | null>(
    null
  );
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const categories = ["All", "Portraits", "Architecture", "Cinematic", "Art"];

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
            Your creations
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Rendered with EchoGPT studio pipelines
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
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "text-neutral-600 bg-neutral-100/80 hover:bg-neutral-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. Creations Grid or Empty State                           */}
      {/* ========================================================= */}
      {filteredCreations.length === 0 ? (
        <div className="py-20 flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-400 shadow-2xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="text-sm text-neutral-500 font-medium">
            Nothing here yet — describe an image above to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredCreations.map((item) => (
            <CreationCard
              key={item.id}
              creation={item}
              onPreview={(creation) => setPreviewCreation(creation)}
            />
          ))}
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. Image Preview Lightbox Modal                           */}
      {/* ========================================================= */}
      <AnimatePresence>
        {previewCreation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewCreation(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
            >
              {/* Image Preview Side */}
              <div className="relative w-full md:w-3/5 min-h-[300px] md:min-h-[500px] bg-neutral-950 flex items-center justify-center">
                <Image
                  fill
                  src={previewCreation.imageUrl}
                  alt={previewCreation.prompt}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>

              {/* Details & Actions Side */}
              <div className="w-full md:w-2/5 p-6 flex flex-col justify-between space-y-5 bg-white">
                <div className="space-y-4">
                  {/* Top Bar with Close button */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {previewCreation.modelName}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPreviewCreation(null)}
                      className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Prompt Text */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Prompt
                    </label>
                    <p className="text-sm text-neutral-800 leading-relaxed font-normal bg-neutral-50 p-3 rounded-xl border border-neutral-100 max-h-48 overflow-y-auto">
                      {previewCreation.prompt}
                    </p>
                  </div>

                  {/* Metadata Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center gap-2 text-neutral-600">
                      <Clock className="w-4 h-4 text-neutral-400" />
                      <span>{previewCreation.createdAt}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center gap-2 text-neutral-600">
                      <Coins className="w-4 h-4 text-amber-500" />
                      <span>{previewCreation.creditsUsed} credits used</span>
                    </div>
                  </div>
                </div>

                {/* Modal Bottom Actions */}
                <div className="space-y-2 pt-4 border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={() => handleCopy(previewCreation.prompt)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-neutral-800 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Prompt Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-neutral-500" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>

                  <a
                    href={previewCreation.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download High Resolution</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
