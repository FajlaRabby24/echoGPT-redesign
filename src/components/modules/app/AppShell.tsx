"use client";

import { Menu, Plus, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent background scrolling when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="flex min-h-screen bg-[#FDFDFD] text-neutral-900">
      {/* ========================================================= */}
      {/* 1. Permanent Desktop Sidebar (lg screens and up)         */}
      {/* ========================================================= */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 fixed inset-y-0 z-40 border-r border-neutral-200/80">
        <Sidebar />
      </aside>

      {/* ========================================================= */}
      {/* 2. Mobile & Tablet Sticky Top Navigation Bar (< lg)     */}
      {/* ========================================================= */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-30 h-14 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 px-4 flex items-center justify-between">
        {/* Left: Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 -ml-1 rounded-xl text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 active:scale-95 transition-all cursor-pointer"
            aria-label="Open sidebar menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-2xs">
              <Zap className="w-3.5 h-3.5 fill-white text-white" />
            </div>
            <span className="font-bold text-sm sm:text-base text-neutral-900 tracking-tight">
              EchoGPT
            </span>
          </Link>
        </div>

        {/* Right: Quick + New Chat Button on Mobile */}
        <div className="flex items-center gap-2">
          <Link
            href="/app"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4F46E5] text-white text-xs font-semibold shadow-xs hover:bg-[#4338CA] active:scale-95 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">New Chat</span>
          </Link>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 3. Animated Mobile & Tablet Drawer (Framer Motion)       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            {/* Backdrop Overlay with Smooth Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Sidebar Sliding Panel with Spring Animation */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 300,
                mass: 0.8,
              }}
              className="relative w-[280px] sm:w-80 max-w-[85vw] h-full shadow-2xl z-10 flex flex-col"
            >
              <Sidebar
                onClose={() => setMobileOpen(false)}
                showCloseButton={true}
              />
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 4. Main Page Content Viewport                            */}
      {/* ========================================================= */}
      <main className="flex-1 flex flex-col lg:pl-64 xl:pl-72 min-w-0 pt-14 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
