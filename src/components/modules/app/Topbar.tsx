"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Sparkles,
  Share2,
  HelpCircle,
} from "lucide-react";

interface TopbarProps {
  onOpenMobileSidebar?: () => void;
}

export default function Topbar({ onOpenMobileSidebar }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 h-14 bg-white/80 backdrop-blur-md border-b border-neutral-200/80 px-3 sm:px-6 flex items-center justify-between transition-all select-none">
      {/* ========================================================= */}
      {/* 1. Left Section: Mobile Menu / Desktop Workspace Title   */}
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

        {/* Desktop Workspace Title & Online Indicator */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
            <span className="text-neutral-400 font-medium">Workspace</span>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-800">New Chat</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 px-2 py-0.5 rounded-lg bg-neutral-50 border border-neutral-200/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Online</span>
          </div>
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
