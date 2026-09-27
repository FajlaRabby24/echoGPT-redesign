"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Sparkles,
  Share2,
  HelpCircle,
  LogOut,
  User,
  Settings,
  Shield,
  ChevronDown,
  Search,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Input } from "@/components/ui/input";

interface TopbarProps {
  onOpenMobileSidebar?: () => void;
}

export default function Topbar({ onOpenMobileSidebar }: TopbarProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check auth cookies on mount and on storage/cookie change
  const checkAuth = () => {
    if (typeof document === "undefined") return;
    const cookies = document.cookie.split(";").reduce((acc, c) => {
      const [k, v] = c.trim().split("=");
      if (k && v) acc[k] = decodeURIComponent(v);
      return acc;
    }, {} as Record<string, string>);

    if (cookies.echogpt_is_logged_in === "true" || cookies.echogpt_auth_token) {
      setIsLoggedIn(true);
      setUserEmail(cookies.echogpt_user_email || "user@echogpt.ai");
    } else {
      setIsLoggedIn(false);
      setUserEmail("");
    }
  };

  useEffect(() => {
    checkAuth();

    // Close dropdown on outside click
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Clear cookies
    document.cookie = "echogpt_is_logged_in=; path=/; max-age=0";
    document.cookie = "echogpt_auth_token=; path=/; max-age=0";
    document.cookie = "echogpt_user_email=; path=/; max-age=0";
    document.cookie = "echogpt_auth_provider=; path=/; max-age=0";

    setIsLoggedIn(false);
    setUserEmail("");
    setProfileDropdownOpen(false);
    window.location.reload();
  };

  const displayName = userEmail
    ? userEmail.split("@")[0].replace(/[._-]/g, " ")
    : "Member";
  const userInitial = displayName.charAt(0).toUpperCase() || "U";

  return (
    <header className="sticky top-0 z-30 h-14 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800 px-3 sm:px-6 flex items-center justify-between transition-all select-none">
      {/* ========================================================= */}
      {/* 1. Left Section: Mobile Menu / Brand Logo & Search Input  */}
      {/* ========================================================= */}
      <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1 max-w-xs sm:max-w-sm md:max-w-md mr-2">
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={onOpenMobileSidebar}
            className="p-1.5 -ml-1 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 active:scale-95 transition-all cursor-pointer"
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
            <span className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 tracking-tight hidden xs:inline">
              EchoGPT
            </span>
          </Link>
        </div>

        {/* Left-Aligned Responsive Search Bar Using @/components/ui/input */}
        <div className="relative flex-1 min-w-0 flex items-center">
          <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none text-neutral-400 dark:text-neutral-500 z-10">
            <Search className="w-3.5 h-3.5" />
          </div>
          <Input
            type="search"
            placeholder="Search chats, tools, models..."
            className="h-8.5 sm:h-9 w-full pl-8 sm:pl-9 pr-7 sm:pr-10 text-xs rounded-full bg-neutral-100/70 dark:bg-neutral-800/60 border-neutral-200/80 dark:border-neutral-700/80 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus-visible:bg-white dark:focus-visible:bg-neutral-900 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-500 transition-all duration-200"
          />
          <div className="absolute inset-y-0 right-0 pr-2 sm:pr-2.5 hidden sm:flex items-center pointer-events-none">
            <kbd className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-semibold text-neutral-400 dark:text-neutral-500 bg-neutral-200/60 dark:bg-neutral-700/60 rounded border border-neutral-300/60 dark:border-neutral-600/60">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. Right Section: Quick Actions, Pro Badge & Auth Profile */}
      {/* ========================================================= */}
      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
        {/* Animated Theme Toggler directly inside Topbar */}
        <AnimatedThemeToggler
          variant="circle"
          duration={400}
          className="p-2 rounded-xl text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 transition-colors cursor-pointer [&>svg]:w-4 [&>svg]:h-4 shrink-0"
          title="Toggle Dark / Light Mode"
        />

        {/* Dynamic Auth Section: Profile Icon when logged in, Sign In when unauthenticated */}
        {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            {/* User Profile Trigger Button */}
            <button
              type="button"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2 p-1 sm:px-2 sm:py-1 rounded-full border border-neutral-200/80 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 bg-white dark:bg-neutral-800 hover:bg-neutral-50/80 dark:hover:bg-neutral-700/80 shadow-2xs transition-all cursor-pointer group"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#4F46E5] to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 ring-2 ring-white dark:ring-neutral-800 shadow-2xs">
                {userInitial}
              </div>
              <span className="hidden sm:block text-xs font-semibold text-neutral-800 dark:text-neutral-200 max-w-[100px] truncate capitalize">
                {displayName}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-transform duration-200 ${
                  profileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Profile Dropdown Popover */}
            <AnimatePresence>
              {profileDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-2 w-60 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-xl shadow-neutral-900/10 p-1.5 z-50 overflow-hidden"
                >
                  {/* Account Capsule */}
                  <div className="p-2.5 border-b border-neutral-100 dark:border-neutral-700 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#4F46E5] to-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {userInitial}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100 capitalize truncate">
                        {displayName}
                      </p>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                        {userEmail}
                      </p>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1 space-y-0.5">
                    <Link
                      href="/app"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <User className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                      <span>Workspace</span>
                    </Link>

                    <Link
                      href="/pricing"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>Subscription & Plan</span>
                    </Link>

                    <Link
                      href="/app/settings"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <Settings className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                      <span>Settings</span>
                    </Link>
                  </div>

                  {/* Logout Button */}
                  <div className="pt-1 border-t border-neutral-100 dark:border-neutral-700">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 text-red-500 dark:text-red-400" />
                      <span>Log out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* Unauthenticated: Sign In Button */
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
}
