"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
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
    <div className="flex min-h-screen bg-[#FDFDFD] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      {/* ========================================================= */}
      {/* 1. Permanent Desktop Sidebar (lg screens and up)         */}
      {/* ========================================================= */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 fixed inset-y-0 z-40 border-r border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <Sidebar />
      </aside>

      {/* ========================================================= */}
      {/* 2. Main Page Content Viewport with Sticky Topbar         */}
      {/* ========================================================= */}
      <div className="flex-1 flex flex-col lg:pl-64 xl:pl-72 min-w-0">
        <Topbar onOpenMobileSidebar={() => setMobileOpen(true)} />
        <main className="flex-1 flex flex-col min-w-0">
          {children}
        </main>
      </div>

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
    </div>
  );
}
