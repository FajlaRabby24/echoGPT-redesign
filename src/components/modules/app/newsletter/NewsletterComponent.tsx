"use client";

import React, { useState } from "react";
import {
  Mail,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Sparkles,
  ShieldCheck,
  Award,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const valueProps = [
  {
    icon: TrendingUp,
    title: "Industry Trends",
    description:
      "Stay updated with the latest breakthroughs in LLMs and generative AI.",
  },
  {
    icon: Zap,
    title: "Power Usage",
    description:
      "Advanced techniques to get the most out of EchoGPT's toolset.",
  },
  {
    icon: Sparkles,
    title: "Early Access",
    description:
      "Be the first to test new models and experimental features.",
  },
];

export default function NewsletterComponent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid business email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 select-none">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-10 sm:space-y-12">
        {/* ========================================================= */}
        {/* 1. Header Typography                                      */}
        {/* ========================================================= */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15]">
            Elevate Your{" "}
            <span className="text-[#6355FF] dark:text-[#7C71FF] drop-shadow-xs">
              AI Strategy
            </span>
          </h1>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Join 50,000+ professionals receiving curated insights on AI
            productivity, industry trends, and exclusive EchoGPT features.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. Form & Call to Action Box                              */}
        {/* ========================================================= */}
        <div className="w-full max-w-md mx-auto space-y-4">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-850 flex flex-col items-center justify-center space-y-2.5 text-center shadow-xs"
              >
                <div className="w-12 h-12 rounded-full bg-[#6355FF] text-white flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  You&apos;re on the list!
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300">
                  We&apos;ve sent a confirmation link to{" "}
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {email}
                  </span>
                  . Welcome aboard!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setEmail("");
                  }}
                  className="mt-2 text-xs font-semibold text-[#6355FF] dark:text-[#9087FF] hover:underline cursor-pointer"
                >
                  Subscribe another email
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >
                {/* Input Container */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 dark:text-neutral-500 group-focus-within:text-[#6355FF] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Enter your business email"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-sm sm:text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500 shadow-xs focus:outline-hidden focus:border-[#6355FF] dark:focus:border-[#6355FF] focus:ring-4 focus:ring-[#6355FF]/10 transition-all"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <p className="text-xs text-red-500 font-medium text-left px-1">
                    {errorMessage}
                  </p>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#6355FF] hover:bg-[#5244E6] active:scale-[0.99] text-white font-semibold text-sm sm:text-base shadow-[0_8px_24px_rgba(99,85,255,0.35)] hover:shadow-[0_12px_28px_rgba(99,85,255,0.45)] transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Join the Newsletter</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 pt-2 text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6355FF] dark:text-[#887EFF]" />
              <span className="uppercase tracking-wider">No Spam Policy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#6355FF] dark:text-[#887EFF]" />
              <span className="uppercase tracking-wider">Premium Insights</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. Bottom 3 Value Props Cards Grid                        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 w-full pt-6 sm:pt-10">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/90 shadow-2xs hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all text-left flex flex-col justify-start space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-[#6355FF] dark:text-[#887EFF] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}