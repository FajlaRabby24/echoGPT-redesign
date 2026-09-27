"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Check, Palette } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function SettingsComponent() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleSetTheme = (theme: "light" | "dark") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8 select-none">
      {/* Header */}
      <div className="border-b border-neutral-100 dark:border-neutral-800 pb-5 space-y-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
            Settings & Preferences
          </h1>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-[#4F46E5] dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60">
            General
          </span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-normal">
          Customize your appearance and interface behavior across EchoGPT.
        </p>
      </div>

      {/* Theme Customizer Card */}
      <div className="w-full bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 shadow-2xs p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center font-bold shadow-2xs shrink-0">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Interface Theme
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Select between light mode and dark mode for your workspace.
              </p>
            </div>
          </div>

          {/* Quick Animated Theme Toggler Pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700 shadow-2xs">
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Quick Toggle:
            </span>
            <AnimatedThemeToggler
              variant="circle"
              duration={450}
              className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:text-[#4F46E5] dark:hover:text-indigo-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 shadow-2xs transition-all cursor-pointer [&>svg]:w-4 [&>svg]:h-4"
            />
          </div>
        </div>

        {/* Visual Theme Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Light Theme Card */}
          <div
            onClick={() => handleSetTheme("light")}
            className={`group p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 ${
              !isDark
                ? "border-[#4F46E5] bg-indigo-50/30 dark:bg-indigo-950/20 shadow-md ring-2 ring-indigo-500/10"
                : "border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-2xs"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    !isDark
                      ? "bg-[#4F46E5] text-white"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700"
                  }`}
                >
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    Light Mode
                  </h3>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    Clean, crisp & airy contrast
                  </p>
                </div>
              </div>

              {!isDark && (
                <div className="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              )}
            </div>

            {/* Light Mode Mock Preview */}
            <div className="h-16 rounded-xl bg-neutral-100/90 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 p-2.5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
              </div>
              <div className="w-3/4 h-2 bg-neutral-300/80 dark:bg-neutral-600/80 rounded-full" />
            </div>
          </div>

          {/* Dark Theme Card */}
          <div
            onClick={() => handleSetTheme("dark")}
            className={`group p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 ${
              isDark
                ? "border-[#4F46E5] bg-indigo-50/30 dark:bg-indigo-950/20 shadow-md ring-2 ring-indigo-500/10"
                : "border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-2xs"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isDark
                      ? "bg-[#4F46E5] text-white"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700"
                  }`}
                >
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    Dark Mode
                  </h3>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    Low-glare deep contrast
                  </p>
                </div>
              </div>

              {isDark && (
                <div className="w-6 h-6 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              )}
            </div>

            {/* Dark Mode Mock Preview */}
            <div className="h-16 rounded-xl bg-neutral-900 border border-neutral-800 p-2.5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-neutral-700" />
                <div className="w-2 h-2 rounded-full bg-neutral-700" />
                <div className="w-2 h-2 rounded-full bg-neutral-700" />
              </div>
              <div className="w-3/4 h-2 bg-neutral-700 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
