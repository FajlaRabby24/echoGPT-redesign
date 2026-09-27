"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Plus,
  ChevronDown,
  Sparkles,
  Check,
  UploadCloud,
  X,
  Sliders,
} from "lucide-react";
import {
  ASPECT_RATIOS,
  AspectRatioOption,
  IMAGE_MODELS,
  ImageModel,
} from "@/lib/imageStudioData";
import CreditBadge from "./CreditBadge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "motion/react";

interface ImagePromptCardProps {
  onGenerate: (data: {
    prompt: string;
    model: ImageModel;
    ratio: AspectRatioOption;
    quantity: number;
    referenceImage?: string;
  }) => void;
  isGenerating?: boolean;
}

export default function ImagePromptCard({
  onGenerate,
  isGenerating = false,
}: ImagePromptCardProps) {
  const [prompt, setPrompt] = useState("");
  const [selectedRatio, setSelectedRatio] = useState<AspectRatioOption>(
    ASPECT_RATIOS[0]
  );
  const [quantity, setQuantity] = useState<number>(4);
  const [selectedModel, setSelectedModel] = useState<ImageModel>(
    IMAGE_MODELS[0]
  );
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
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
      setReferenceImage(url);
    }
  };

  const handleTriggerGenerate = () => {
    if (!prompt.trim() && !referenceImage) return;
    onGenerate({
      prompt: prompt.trim() || "Creative AI Studio Generation",
      model: selectedModel,
      ratio: selectedRatio,
      quantity,
      referenceImage: referenceImage || undefined,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 select-none">
      <div className="w-full rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-200 p-4 sm:p-5 space-y-4">
        {/* ========================================================= */}
        {/* 1. Prompt Input Textarea                                  */}
        {/* ========================================================= */}
        <div className="space-y-2">
          <textarea
            rows={2}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Turn my photo into a professional headshot"
            className="w-full bg-transparent text-sm sm:text-base text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none resize-none leading-relaxed"
          />

          {/* Optional Reference Image Preview */}
          {referenceImage && (
            <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 text-xs font-medium text-indigo-900 dark:text-indigo-200">
              <span className="truncate max-w-[200px]">Reference photo attached</span>
              <button
                type="button"
                onClick={() => setReferenceImage(null)}
                className="p-0.5 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 transition-colors"
                aria-label="Remove reference image"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Hidden file input for reference upload */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* ========================================================= */}
        {/* 2. Controls Toolbar: Upload, Ratio, Quantity, Model, Gen  */}
        {/* ========================================================= */}
        <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          {/* Left Toolbar Items: Upload, Ratio group, Quantity group, Model */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* 1. Upload Button (+) */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-8 h-8 rounded-full border border-neutral-200/90 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-750 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                aria-label="Upload reference photo"
              >
                <Plus className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">
                Upload reference photo (Image-to-Image)
              </TooltipContent>
            </Tooltip>

            {/* 2. Aspect Ratio Segmented Group */}
            <div className="flex items-center p-0.5 rounded-full bg-neutral-100/80 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700 shadow-2xs">
              {ASPECT_RATIOS.map((item) => {
                const isActive = selectedRatio.id === item.id;
                return (
                  <Tooltip key={item.id}>
                    <TooltipTrigger
                      type="button"
                      onClick={() => setSelectedRatio(item)}
                      className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-2xs"
                          : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100"
                      }`}
                    >
                      {item.label}
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      Ratio {item.label}: {item.resolution}
                      {item.extraCredits > 0 ? ` (+${item.extraCredits} cr)` : ""}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>

            {/* 3. Quantity Segmented Group */}
            <div className="flex items-center p-0.5 rounded-full bg-neutral-100/80 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700 shadow-2xs">
              {[1, 2, 3, 4].map((num) => {
                const isActive = quantity === num;
                return (
                  <Tooltip key={num}>
                    <TooltipTrigger
                      type="button"
                      onClick={() => setQuantity(num)}
                      className={`w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-2xs"
                          : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100"
                      }`}
                    >
                      {num}
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      Generate {num} {num === 1 ? "image" : "variations"}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>

            {/* 4. Model Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <Tooltip>
                <TooltipTrigger
                  type="button"
                  onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200/90 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-750 text-neutral-800 dark:text-neutral-200 text-xs font-semibold shadow-2xs transition-colors cursor-pointer group"
                >
                  <span className="truncate max-w-[130px]">
                    {selectedModel.name}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-transform duration-200 ${
                      modelDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </TooltipTrigger>
                <TooltipContent side="top">
                  Select AI image synthesis model
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
                    className="absolute left-0 bottom-full mb-2 w-72 sm:w-80 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-2xl shadow-neutral-900/10 dark:shadow-neutral-950/40 p-1.5 z-50 overflow-hidden"
                  >
                    <div className="px-2.5 py-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                      Select Model & Quality
                    </div>
                    <div className="space-y-0.5">
                      {IMAGE_MODELS.map((model) => {
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
                                ? "bg-indigo-50/90 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-200 font-semibold"
                                : "hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300"
                            }`}
                          >
                            <div className="min-w-0 pr-2">
                              <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                                <span>{model.name}</span>
                                {model.badge && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                                    {model.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                                {model.description}
                              </p>
                              <p className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">
                                Base: {model.baseCredits} credits / image
                              </p>
                            </div>
                            {isSelected && (
                              <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
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
            <CreditBadge
              model={selectedModel}
              ratio={selectedRatio}
              quantity={quantity}
            />
          </div>

          {/* Right: Generate Button */}
          <div className="shrink-0">
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={handleTriggerGenerate}
                disabled={isGenerating}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/20 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <span>Generate</span>
                  </>
                )}
              </TooltipTrigger>
              <TooltipContent side="top">
                Render {quantity} variations with {selectedModel.name}
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Footer Notice matching screenshot */}
        <div className="pt-2 text-center text-xs text-neutral-400 dark:text-neutral-500">
          Image generation is a paid feature — upgrade to start creating images.
        </div>
      </div>

      {/* Generation Speed Notice below container */}
      <p className="text-center text-[11px] sm:text-xs text-neutral-400 mt-2.5">
        Each image uses one message from your plan. Generation takes up to a minute.
      </p>
    </div>
  );
}
