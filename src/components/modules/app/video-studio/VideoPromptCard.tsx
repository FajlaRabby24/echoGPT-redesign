"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Plus,
  ChevronDown,
  Sparkles,
  Check,
  X,
  Clapperboard,
} from "lucide-react";
import {
  VIDEO_ASPECT_RATIOS,
  VIDEO_DURATIONS,
  VIDEO_MODELS,
  VideoAspectRatio,
  VideoDurationOption,
  VideoModel,
} from "@/lib/videoStudioData";
import VideoCreditBadge from "./VideoCreditBadge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "motion/react";

interface VideoPromptCardProps {
  onGenerate: (data: {
    prompt: string;
    model: VideoModel;
    ratio: VideoAspectRatio;
    duration: VideoDurationOption;
    referenceImage?: string;
  }) => void;
  isGenerating?: boolean;
}

export default function VideoPromptCard({
  onGenerate,
  isGenerating = false,
}: VideoPromptCardProps) {
  const [prompt, setPrompt] = useState("");
  const [selectedRatio, setSelectedRatio] = useState<VideoAspectRatio>(
    VIDEO_ASPECT_RATIOS[0]
  );
  const [selectedDuration, setSelectedDuration] = useState<VideoDurationOption>(
    VIDEO_DURATIONS[0]
  );
  const [selectedModel, setSelectedModel] = useState<VideoModel>(
    VIDEO_MODELS[0]
  );
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [referenceFrame, setReferenceFrame] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setModelDropdownOpen(false);
      }
    }
    if (modelDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modelDropdownOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setReferenceFrame(url);
    }
  };

  const handleTriggerGenerate = () => {
    if (!prompt.trim() && !referenceFrame) return;
    onGenerate({
      prompt: prompt.trim() || "Cinematic AI video shot",
      model: selectedModel,
      ratio: selectedRatio,
      duration: selectedDuration,
      referenceImage: referenceFrame || undefined,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 select-none">
      <div className="w-full rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-4 sm:p-5 space-y-4">
        {/* ========================================================= */}
        {/* 1. Prompt Textarea Input                                 */}
        {/* ========================================================= */}
        <div className="space-y-2">
          <textarea
            rows={2}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your video..."
            className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none resize-none leading-relaxed"
          />

          {/* Reference Image Preview */}
          {referenceFrame && (
            <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50/80 border border-indigo-100 text-xs font-medium text-indigo-900">
              <span className="truncate max-w-[200px]">Initial frame attached</span>
              <button
                type="button"
                onClick={() => setReferenceFrame(null)}
                className="p-0.5 rounded-full hover:bg-indigo-200 text-indigo-700 transition-colors cursor-pointer"
                aria-label="Remove initial frame"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* ========================================================= */}
        {/* 2. Controls Toolbar: Upload, Ratio, Duration, Model, Gen  */}
        {/* ========================================================= */}
        <div className="pt-2 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          {/* Left Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* 1. Attach Keyframe / Reference Frame (+) */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-8 h-8 rounded-full border border-neutral-200/90 hover:border-neutral-300 text-neutral-600 hover:text-neutral-900 bg-white hover:bg-neutral-50 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                aria-label="Upload reference frame"
              >
                <Plus className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">
                Upload start frame (Image-to-Video)
              </TooltipContent>
            </Tooltip>

            {/* 2. Aspect Ratio Segment Group (16:9, 9:16, 1:1) */}
            <div className="flex items-center p-0.5 rounded-full bg-neutral-100/80 border border-neutral-200/60 shadow-2xs">
              {VIDEO_ASPECT_RATIOS.map((item) => {
                const isActive = selectedRatio.id === item.id;
                return (
                  <Tooltip key={item.id}>
                    <TooltipTrigger
                      type="button"
                      onClick={() => setSelectedRatio(item)}
                      className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#4F46E5] hover:bg-[#4338CA]  text-white shadow-2xs"
                          : "text-neutral-600 hover:text-neutral-950"
                      }`}
                    >
                      {item.label}
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      Ratio {item.label}: {item.resolution}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>

            {/* 3. Duration Selector (5s, 10s) */}
            <div className="flex items-center p-0.5 rounded-full bg-neutral-100/80 border border-neutral-200/60 shadow-2xs">
              {VIDEO_DURATIONS.map((dur) => {
                const isActive = selectedDuration.id === dur.id;
                return (
                  <Tooltip key={dur.id}>
                    <TooltipTrigger
                      type="button"
                      onClick={() => setSelectedDuration(dur)}
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#4F46E5] hover:bg-[#4338CA]  text-white shadow-2xs"
                          : "text-neutral-600 hover:text-neutral-950"
                      }`}
                    >
                      {dur.label}
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      Render {dur.seconds} seconds ({dur.multiplier}x cost)
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>

            {/* 4. Model Selector Dropdown (Veo 3.1 fast, Sora 2.0, etc.) */}
            <div className="relative" ref={dropdownRef}>
              <Tooltip>
                <TooltipTrigger
                  type="button"
                  onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200/90 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold shadow-2xs transition-colors cursor-pointer group"
                >
                  <span className="truncate max-w-[130px]">
                    {selectedModel.name}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-transform duration-200 ${
                      modelDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </TooltipTrigger>
                <TooltipContent side="top">
                  Select AI video generation engine
                </TooltipContent>
              </Tooltip>

              {/* Animated Model Dropdown */}
              <AnimatePresence>
                {modelDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 bottom-full mb-2 w-72 sm:w-80 bg-white rounded-2xl border border-neutral-200/80 shadow-2xl p-1.5 z-50 overflow-hidden"
                  >
                    <div className="px-2.5 py-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                      Select Video Model
                    </div>
                    <div className="space-y-0.5">
                      {VIDEO_MODELS.map((model) => {
                        const isSelected = selectedModel.id === model.id;
                        return (
                          <button
                            key={model.id}
                            type="button"
                            onClick={() => {
                              setSelectedModel(model);
                              setModelDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer ${
                              isSelected
                                ? "bg-indigo-50/90 text-indigo-950 font-semibold"
                                : "hover:bg-neutral-100/70 text-neutral-700"
                            }`}
                          >
                            <div className="min-w-0 pr-2">
                              <div className="text-xs font-semibold text-neutral-900 flex items-center gap-1.5">
                                <span>{model.name}</span>
                                {model.badge && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-indigo-100 text-indigo-700">
                                    {model.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-neutral-500 truncate mt-0.5">
                                {model.description}
                              </p>
                              <p className="text-[10px] text-amber-600 font-medium">
                                Base: {model.baseCredits} credits ({model.provider})
                              </p>
                            </div>
                            {isSelected && (
                              <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 5. Live Credit Burn Badge */}
            <VideoCreditBadge
              model={selectedModel}
              ratio={selectedRatio}
              duration={selectedDuration}
            />
          </div>

          {/* Right: Generate Button */}
          <div className="shrink-0">
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={handleTriggerGenerate}
                disabled={isGenerating}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA]  text-white font-semibold text-xs sm:text-sm shadow-md shadow-purple-600/20 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Rendering...</span>
                  </>
                ) : (
                  <>
                    <span>Generate</span>
                  </>
                )}
              </TooltipTrigger>
              <TooltipContent side="top">
                Render {selectedDuration.label} video with {selectedModel.name}
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Footer Notice matching screenshot */}
        <div className="pt-2 text-center text-xs text-neutral-400">
          Video generation is a paid feature — upgrade to start creating videos.
        </div>
      </div>

      {/* Generation Speed Notice below container */}
      <p className="text-center text-[11px] sm:text-xs text-neutral-400 mt-2.5">
        Each video uses one message from your plan and takes a few minutes to render.
      </p>
    </div>
  );
}
