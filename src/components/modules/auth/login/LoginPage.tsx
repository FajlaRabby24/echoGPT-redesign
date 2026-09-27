"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ChevronLeft, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function LoginPage() {
  const [receiveUpdates, setReceiveUpdates] = useState(true);

  return (
    <TooltipProvider delay={150}>
      <div className="relative min-h-screen w-full flex items-center justify-center bg-[#FAFAFA] overflow-hidden select-none px-4 py-8">
        {/* ========================================================= */}
        {/* Subtle Decorative Wave & Dot Patterns                     */}
        {/* ========================================================= */}
        {/* Top-Right & Bottom-Left Abstract Wave lines */}
        <div className="absolute top-0 right-0 w-[420px] h-[350px] pointer-events-none opacity-30 select-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 0C150 80 250 40 400 120V0H50Z"
              stroke="#D4D4D8"
              strokeWidth="1"
            />
            <path
              d="M0 40C120 120 220 80 400 160V0H0Z"
              stroke="#E4E4E7"
              strokeWidth="0.8"
            />
            <path
              d="M0 90C160 170 260 120 400 200V0H0Z"
              stroke="#F4F4F5"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-[480px] h-[380px] pointer-events-none opacity-40 select-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 500C120 420 220 450 350 360C450 290 480 230 500 180"
              stroke="#D4D4D8"
              strokeWidth="1"
            />
            <path
              d="M0 460C140 380 240 410 370 320C470 250 490 190 500 140"
              stroke="#E4E4E7"
              strokeWidth="0.8"
            />
            <path
              d="M0 420C160 340 260 370 390 280C490 210 500 150 500 100"
              stroke="#F4F4F5"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        {/* Scattered Indigo Circles / Rings */}
        <div className="absolute top-[18%] left-[6%] w-2.5 h-2.5 rounded-full border-2 border-[#4F46E5]/40 pointer-events-none" />
        <div className="absolute top-[8%] left-[58%] w-3 h-3 rounded-full border-2 border-[#4F46E5]/45 pointer-events-none" />
        <div className="absolute top-[24%] right-[4%] w-2.5 h-2.5 rounded-full border-2 border-[#4F46E5]/40 pointer-events-none" />
        <div className="absolute top-[54%] left-[14%] w-2.5 h-2.5 rounded-full border-2 border-[#4F46E5]/35 pointer-events-none" />
        <div className="absolute bottom-[28%] left-[6%] w-2.5 h-2.5 rounded-full border-2 border-[#4F46E5]/40 pointer-events-none" />
        <div className="absolute bottom-[10%] left-[42%] w-3 h-3 rounded-full border-2 border-[#4F46E5]/40 pointer-events-none" />
        <div className="absolute bottom-[12%] left-[4%] w-2.5 h-2.5 rounded-full border-2 border-[#4F46E5]/40 pointer-events-none" />

        {/* Bottom Right Distinctive Chevron Shapes (from image) */}
        <div className="absolute bottom-6 right-8 sm:bottom-10 sm:right-12 flex items-center -space-x-4 pointer-events-none select-none">
          {/* Outlined Chevron */}
          <div className="w-12 h-16 sm:w-16 sm:h-20 border-r-3 border-b-3 border-[#4F46E5] -rotate-45" />
          {/* Solid Indigo Chevron */}
          <div className="w-12 h-16 sm:w-16 sm:h-20 bg-[#4F46E5] -rotate-45" />
        </div>

        {/* Top-Left Back Navigation Button */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
          <Tooltip>
            <TooltipTrigger
              type="button"
              onClick={() => window.history.back()}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-sm hover:border-neutral-300 text-neutral-600 hover:text-neutral-900 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </TooltipTrigger>
            <TooltipContent side="bottom">Back</TooltipContent>
          </Tooltip>
        </div>

        {/* ========================================================= */}
        {/* Main Authentication Card                                  */}
        {/* ========================================================= */}
        <div className="relative z-10 w-full max-w-[420px] bg-white rounded-3xl border border-neutral-200/90 shadow-xl shadow-neutral-200/40 p-6 sm:p-9 space-y-6 text-center">
          {/* EchoGPT Logo and Brand Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden shrink-0">
                <Image
                  fill
                  src="/EchoGPT.svg"
                  alt="EchoGPT Logo"
                  sizes="32px"
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                EchoGPT
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
              Don&apos;t have an account ?{" "}
              <Link
                href="/auth/register"
                className="font-semibold text-[#4F46E5] hover:text-[#4338CA] hover:underline transition-colors"
              >
                Sign up for free
              </Link>
            </p>
          </div>

          {/* Social & Email Sign In Options */}
          <div className="space-y-3 pt-1">
            {/* 1. Sign in with Email */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl border border-neutral-200/90 hover:border-neutral-300 bg-white hover:bg-neutral-50/80 text-neutral-800 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
            >
              <Mail className="w-4 h-4 text-neutral-600 shrink-0" />
              <span>Sign in with email</span>
            </button>

            {/* 2. Sign in with Google (Featured Primary Button) */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-500/25 active:scale-[0.99] cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-2xs p-0.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>
              <span>Sign in with Google</span>
            </button>

            {/* 3. Sign in with Twitter */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl border border-neutral-200/90 hover:border-neutral-300 bg-white hover:bg-neutral-50/80 text-neutral-800 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Sign in with Twitter</span>
            </button>

            {/* 4. Sign in with GitHub */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl border border-neutral-200/90 hover:border-neutral-300 bg-white hover:bg-neutral-50/80 text-neutral-800 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>Sign in with GitHub</span>
            </button>
          </div>

          {/* Receive Updates Checkbox */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setReceiveUpdates(!receiveUpdates)}
              className={`w-4 h-4 rounded flex items-center justify-center transition-all cursor-pointer ${
                receiveUpdates
                  ? "bg-[#4F46E5] text-white"
                  : "border border-neutral-300 bg-white"
              }`}
            >
              {receiveUpdates && <Check className="w-3 h-3 stroke-[3]" />}
            </button>
            <label
              onClick={() => setReceiveUpdates(!receiveUpdates)}
              className="text-[11px] sm:text-xs text-neutral-600 font-medium cursor-pointer"
            >
              I want to receive updates about EchoGPT
            </label>
          </div>

          {/* Terms and Privacy Footer Note */}
          <p className="text-[10px] text-neutral-400 font-normal leading-relaxed">
            By proceeding, you agree to our{" "}
            <Link
              href="/terms"
              className="text-neutral-600 hover:text-neutral-900 underline underline-offset-2 transition-colors"
            >
              Terms of use
            </Link>
            . Read our{" "}
            <Link
              href="/privacy"
              className="text-neutral-600 hover:text-neutral-900 underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </TooltipProvider>
  );
}