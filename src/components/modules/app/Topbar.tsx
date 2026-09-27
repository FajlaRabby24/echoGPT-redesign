"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  ChevronDown,
  Check,
  Sparkles,
  Share2,
  HelpCircle,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ModelOption {
  id: string;
  name: string;
  provider: string;
  badge: string;
  iconSrc: string;
  description: string;
}

const AVAILABLE_MODELS: ModelOption[] = [
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

interface TopbarProps {
  onOpenMobileSidebar?: () => void;
}

export default function Topbar({ onOpenMobileSidebar }: TopbarProps) {
  const [selectedModel, setSelectedModel] = useState<ModelOption>(
    AVAILABLE_MODELS[0]
  );
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
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

  return (
    <header className="sticky top-0 z-30 h-14 bg-white/80 backdrop-blur-md border-b border-neutral-200/80 px-3 sm:px-6 flex items-center justify-between transition-all select-none">
      {/* ========================================================= */}
      {/* 1. Left Section: Mobile Menu / Desktop Model Selector     */}
      {/* ========================================================= */}
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
        {/* Mobile-only Menu Toggle & Brand Logo */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenMobileSidebar}
            className="p-1.5 -ml-1 rounded-xl text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 active:scale-95 transition-all cursor-pointer"
            aria-label="Open sidebar menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center shadow-2xs shrink-0">
              <Image
                fill
                alt="EchoGPT logo"
                loading="eager"
                src="/EchoGPT.png"
                sizes="28px"
                className="object-contain"
              />
            </div>
            <span className="font-bold text-sm sm:text-base text-neutral-900 tracking-tight">
              EchoGPT
            </span>
          </Link>
        </div>

        {/* Desktop Model Selector Dropdown */}
        <div className="hidden lg:block relative" ref={dropdownRef}>
          <button
            onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-neutral-200/80 bg-neutral-50/80 hover:bg-neutral-100/80 text-neutral-800 text-xs sm:text-sm font-semibold shadow-2xs transition-all cursor-pointer group"
          >
            <div className="relative w-4 h-4 rounded overflow-hidden shrink-0">
              <Image
                fill
                src={selectedModel.iconSrc}
                alt={selectedModel.name}
                sizes="16px"
                className="object-contain"
              />
            </div>
            <span className="text-neutral-900 font-semibold truncate max-w-[140px]">
              {selectedModel.name}
            </span>
            <span className="hidden xl:inline text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100/80">
              {selectedModel.badge}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-transform duration-200 ${
                modelDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Animated Model Selector Dropdown */}
          <AnimatePresence>
            {modelDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl border border-neutral-200/80 shadow-xl shadow-neutral-900/5 p-1.5 z-50 overflow-hidden"
              >
                <div className="px-2.5 py-1.5 mb-1 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                  Select AI Engine
                </div>
                <div className="space-y-0.5">
                  {AVAILABLE_MODELS.map((model) => {
                    const isSelected = selectedModel.id === model.id;
                    return (
                      <button
                        key={model.id}
                        onClick={() => {
                          setSelectedModel(model);
                          setModelDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-indigo-50/80 text-indigo-950 font-semibold"
                            : "hover:bg-neutral-100/70 text-neutral-700"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="relative w-6 h-6 rounded-lg bg-white border border-neutral-200/60 p-1 flex items-center justify-center shrink-0 shadow-2xs">
                            <Image
                              fill
                              src={model.iconSrc}
                              alt={model.name}
                              sizes="24px"
                              className="object-contain p-0.5"
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-neutral-900 flex items-center gap-1.5 truncate">
                              <span>{model.name}</span>
                              <span className="text-[9px] font-medium text-neutral-400">
                                · {model.provider}
                              </span>
                            </div>
                            <p className="text-[10px] text-neutral-500 truncate">
                              {model.description}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <Check className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* System / Latency Status Indicator (Desktop) */}
        <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 px-2 py-1 rounded-lg bg-neutral-50 border border-neutral-200/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Online</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. Right Section: Quick Actions & Sign In Button          */}
      {/* ========================================================= */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Help / Docs Action Button */}
        <Link
          href="/faq"
          className="hidden sm:flex p-2 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors"
          title="Help & Support"
        >
          <HelpCircle className="w-4 h-4" />
        </Link>

        {/* Share Button */}
        <button
          onClick={() => {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(window.location.href);
            }
          }}
          className="hidden sm:flex p-2 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors cursor-pointer"
          title="Share conversation"
        >
          <Share2 className="w-4 h-4" />
        </button>

        {/* Upgrade / Pro Pill Badge */}
        <Link
          href="/pricing"
          className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 hover:from-indigo-100 hover:to-violet-100 border border-indigo-200/60 text-indigo-700 text-xs font-semibold shadow-2xs transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>Pro</span>
        </Link>

        {/* Primary Action: Sign In Button (Styled exactly to match existing theme) */}
        <Link
          href="/auth/login"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
