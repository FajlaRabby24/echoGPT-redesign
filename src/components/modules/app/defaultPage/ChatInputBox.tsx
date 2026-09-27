"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Paperclip,
  Mic,
  Send,
  Rocket,
  Network,
  Plus,
  History,
  Sparkles,
  Check,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface ModelOption {
  id: string;
  name: string;
  provider: string;
  badge: string;
  iconSrc: string;
  description: string;
}

export const AVAILABLE_MODELS: ModelOption[] = [
  {
    id: "echogpt",
    name: "EchoGPT 2.0",
    provider: "Echo Team",
    badge: "Smart Multi-Model",
    iconSrc: "/EchoGPT.png",
    description: "Orchestrated multi-model intelligence",
  },
  {
    id: "chatgpt",
    name: "GPT-4o",
    provider: "OpenAI",
    badge: "Omni & Fast",
    iconSrc: "/chatgpt.svg",
    description: "High speed, versatile reasoning",
  },
  {
    id: "gemini",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    badge: "2M Context",
    iconSrc: "/gemini.svg",
    description: "Massive context window & research",
  },
  {
    id: "deepseek",
    name: "DeepSeek R1",
    provider: "DeepSeek",
    badge: "Reasoning",
    iconSrc: "/depseek.ico",
    description: "Advanced logic & mathematical reasoning",
  },
  {
    id: "grok",
    name: "Grok 2",
    provider: "xAI",
    badge: "Real-time",
    iconSrc: "/grok.ico",
    description: "Real-time knowledge and witty responses",
  },
];

interface ChatInputBoxProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (prompt: string) => void;
  placeholder?: string;
  selectedModel?: ModelOption;
  onSelectModel?: (model: ModelOption) => void;
}

export default function ChatInputBox({
  value,
  onChange,
  onSubmit,
  placeholder = "Ask a question...",
  selectedModel: controlledSelectedModel,
  onSelectModel,
}: ChatInputBoxProps) {
  const [internalModel, setInternalModel] = useState<ModelOption>(
    AVAILABLE_MODELS[0]
  );
  const activeModel = controlledSelectedModel ?? internalModel;

  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const modelDropdownRef = useRef<HTMLDivElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modelDropdownRef.current &&
        !modelDropdownRef.current.contains(event.target as Node)
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

  // Auto-resize textarea based on input content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        180
      )}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        onSubmit(value);
      }
    }
  };

  const handleEnhance = () => {
    if (!value.trim()) return;
    setIsEnhancing(true);
    // Simulate prompt enhancement
    setTimeout(() => {
      onChange(
        `${value.trim()}\n\nPlease provide a clear, step-by-step breakdown with actionable takeaways and concrete examples.`
      );
      setIsEnhancing(false);
    }, 400);
  };

  const handleSelectModel = (model: ModelOption) => {
    if (onSelectModel) {
      onSelectModel(model);
    } else {
      setInternalModel(model);
    }
    setModelDropdownOpen(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 select-none">
      <div
        className={`w-full rounded-2xl bg-white dark:bg-neutral-900 border transition-all duration-200 shadow-sm ${
          isFocused
            ? "border-indigo-500/80 shadow-[0_4px_20px_rgba(79,70,229,0.12)] ring-2 ring-indigo-500/10"
            : "border-neutral-200/90 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md"
        }`}
      >
        {/* ========================================================= */}
        {/* 1. Top Toolbar Inside Input Box                          */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-neutral-100/90 dark:border-neutral-800/80 bg-neutral-50/40 dark:bg-neutral-900/60 rounded-t-2xl">
          {/* Left: Model Pill & Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Model Selector Pill with Dropdown */}
            <div className="relative" ref={modelDropdownRef}>
              <Tooltip>
                <TooltipTrigger
                  type="button"
                  onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-200 text-xs font-semibold shadow-2xs hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors cursor-pointer group"
                >
                  <div className="relative w-4 h-4 rounded overflow-hidden shrink-0">
                    <Image
                      fill
                      src={activeModel.iconSrc}
                      alt={activeModel.name}
                      sizes="16px"
                      className="object-contain"
                    />
                  </div>
                  <span>{activeModel.name}</span>
                  <ChevronDown
                    className={`w-3 h-3 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-transform duration-200 ${
                      modelDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </TooltipTrigger>
                <TooltipContent side="top">Select AI Engine</TooltipContent>
              </Tooltip>

              {/* Animated Model Selector Dropdown Popover */}
              <AnimatePresence>
                {modelDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 bottom-full mb-2 w-72 sm:w-80 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-2xl shadow-neutral-900/10 dark:shadow-neutral-950/40 p-1.5 z-50 overflow-hidden"
                  >
                    <div className="px-2.5 py-1.5 mb-1 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                      Select AI Engine
                    </div>
                    <div className="space-y-0.5 max-h-72 overflow-y-auto scrollbar-thin">
                      {AVAILABLE_MODELS.map((model) => {
                        const isSelected = activeModel.id === model.id;
                        return (
                          <button
                            key={model.id}
                            type="button"
                            onClick={() => handleSelectModel(model)}
                            className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer ${
                              isSelected
                                ? "bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-200 font-semibold"
                                : "hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="relative w-6 h-6 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700 p-1 flex items-center justify-center shrink-0 shadow-2xs">
                                <Image
                                  fill
                                  src={model.iconSrc}
                                  alt={model.name}
                                  sizes="24px"
                                  className="object-contain p-0.5"
                                />
                              </div>
                              <div className="min-w-0">
                                <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5 truncate">
                                  <span>{model.name}</span>
                                  <span className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500">
                                    · {model.provider}
                                  </span>
                                </div>
                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                                  {model.description}
                                </p>
                              </div>
                            </div>

                            {isSelected && (
                              <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="h-3.5 w-px bg-neutral-200/80 dark:bg-neutral-800" />

            {/* Connectors / Integrations */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
                aria-label="Connectors"
              >
                <Network className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Connectors & Data Sources</TooltipContent>
            </Tooltip>

            {/* Prompt Enhancer Rocket */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={handleEnhance}
                className={`p-1.5 rounded-lg transition-all cursor-pointer active:scale-95 ${
                  isEnhancing
                    ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 animate-pulse"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40"
                }`}
                aria-label="Enhance Prompt"
              >
                <Rocket className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Enhance & Optimize Prompt</TooltipContent>
            </Tooltip>
          </div>

          {/* Right: New Session & History Buttons */}
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={() => onChange("")}
                className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
                aria-label="New Session"
              >
                <Plus className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Clear / New Session</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                type="button"
                className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
                aria-label="Prompt History"
              >
                <History className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Prompt & Chat History</TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. Text Input Area & Action Buttons                      */}
        {/* ========================================================= */}
        <div className="p-3 sm:p-3.5 flex items-end gap-2.5">
          {/* Left Attachment Button */}
          <Tooltip>
            <TooltipTrigger
              type="button"
              className="p-2 rounded-xl text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-95 transition-colors cursor-pointer shrink-0"
              aria-label="Attach File or URL"
            >
              <Paperclip className="w-4 h-4" />
            </TooltipTrigger>
            <TooltipContent side="top">Attach files or links</TooltipContent>
          </Tooltip>

          {/* Textarea Input */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="flex-1 max-h-44 min-h-[38px] py-1.5 px-1 bg-transparent text-sm sm:text-base text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none resize-none leading-relaxed"
          />

          {/* Right Action Icons: Microphone & Send */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Microphone Button */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={() => setIsRecording(!isRecording)}
                className={`p-2 rounded-xl transition-colors cursor-pointer ${
                  isRecording
                    ? "bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 animate-pulse"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
                aria-label="Voice input"
              >
                <Mic className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">
                {isRecording ? "Listening..." : "Voice dictation"}
              </TooltipContent>
            </Tooltip>

            {/* Send Button */}
            <Tooltip>
              <TooltipTrigger
                type="button"
                disabled={!value.trim()}
                onClick={() => {
                  if (value.trim()) onSubmit(value);
                }}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  value.trim()
                    ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-[0_2px_8px_rgba(79,70,229,0.35)] active:scale-95"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
                }`}
                aria-label="Send prompt"
              >
                <Send className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent side="top">Send prompt (Enter)</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
