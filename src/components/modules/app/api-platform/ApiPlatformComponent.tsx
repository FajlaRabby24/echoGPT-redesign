"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Terminal,
  Code2,
  Sparkles,
  ArrowRight,
  Bell,
  CheckCircle2,
  Layers,
  Key,
} from "lucide-react";

export default function ApiPlatformComponent() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] py-12 px-4 select-none">
      <div className="w-full max-w-xl mx-auto text-center space-y-6">
        {/* Animated Badge & Icon */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative">
            <div className="w-16 h-16 rounded-3xl bg-indigo-50 border border-indigo-100/90 text-[#4F46E5] flex items-center justify-center shadow-lg shadow-indigo-500/10">
              <Terminal className="w-8 h-8" />
            </div>
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#4F46E5]" />
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50/80 border border-indigo-100 text-[#4F46E5] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Preview Coming Soon</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2.5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            EchoGPT API Platform
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-md mx-auto">
            We are engineering a unified, low-latency API gateway allowing developers to access multi-model routing, prompt pipelines, and custom agents with a single SDK.
          </p>
        </div>

        {/* Sneak Peek Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
          <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-1">
            <div className="flex items-center gap-1.5 text-[#4F46E5]">
              <Key className="w-4 h-4" />
              <span className="text-xs font-bold text-neutral-900">Universal API Key</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              One secret token for GPT, Claude, Gemini & DeepSeek.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-1">
            <div className="flex items-center gap-1.5 text-[#4F46E5]">
              <Layers className="w-4 h-4" />
              <span className="text-xs font-bold text-neutral-900">Smart Fallbacks</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              Auto-routing to secondary models if latency surges.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-1">
            <div className="flex items-center gap-1.5 text-[#4F46E5]">
              <Code2 className="w-4 h-4" />
              <span className="text-xs font-bold text-neutral-900">SDKs & Webhooks</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              Native TypeScript, Python, and Go developer libraries.
            </p>
          </div>
        </div>

        {/* Notify Me / Early Access Form */}
        <div className="pt-2 max-w-md mx-auto">
          {subscribed ? (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>You&apos;re on the early access waitlist! We&apos;ll notify you when keys go live.</span>
            </div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email for early keys..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 shadow-2xs transition-all"
              />
              <button
                type="submit"
                disabled={!email.trim()}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>Notify Me</span>
              </button>
            </form>
          )}
        </div>

        {/* Back to Workspace Link */}
        <div className="pt-3">
          <Link
            href="/app"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            <span>Return to Workspace</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
