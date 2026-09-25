"use client";

import {
  ArrowRight,
  ArrowUp,
  Bot,
  CheckCircle2,
  ChevronRight,
  Layers,
  Paperclip,
  Play,
  SlidersHorizontal,
  Star,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";

const models = [
  { id: "gpt-4o", name: "GPT-4o", badge: "Smartest" },
  { id: "claude-3-5", name: "Claude 3.5 Sonnet", badge: "Coding" },
  { id: "gemini-1-5", name: "Gemini 1.5 Pro", badge: "Fast" },
];

const Hero = () => {
  const [activeModel, setActiveModel] = useState("gpt-4o");

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden w-full max-w-[100vw] bg-white selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Multi-chromatic Ambient Mesh Glow Aura (Responsive Rounded U-Arch Canopy) */}
      <div
        aria-hidden="true"
        style={{
          maskImage:
            "radial-gradient(ellipse 98% 85% at 50% 0%, black 48%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 98% 85% at 50% 0%, black 48%, transparent 85%)",
        }}
        className="absolute top-0 inset-x-0 w-full h-[520px] sm:h-[680px] md:h-[840px] lg:h-[940px] pointer-events-none select-none z-0 overflow-hidden"
      >
        {/* Top-Left Electric Royal Blue Swoop */}
        <div className="absolute -top-[10%] -left-[20%] sm:-left-[10%] md:-left-[2%] w-[380px] sm:w-[580px] md:w-[780px] h-[340px] sm:h-[480px] md:h-[620px] bg-[#0055FF] rounded-full filter blur-[70px] sm:blur-[110px] md:blur-[150px] opacity-90" />

        {/* Lower-Left Cyan / Turquoise Accent */}
        <div className="absolute top-[18%] left-[0%] sm:left-[2%] md:left-[8%] w-[280px] sm:w-[460px] md:w-[620px] h-[240px] sm:h-[360px] md:h-[460px] bg-[#00D4FF] rounded-full filter blur-[60px] sm:blur-[100px] md:blur-[140px] opacity-75" />

        {/* Top Center-Left Radiant Magenta / Hot Pink Core */}
        <div className="absolute -top-[8%] left-[10%] sm:left-[22%] md:left-[28%] w-[300px] sm:w-[480px] md:w-[640px] h-[260px] sm:h-[380px] md:h-[480px] bg-[#FF1E80] rounded-full filter blur-[70px] sm:blur-[105px] md:blur-[140px] opacity-85 animate-pulse [animation-duration:9s]" />

        {/* Top-Right Sunset Orange & Tangerine Swoop */}
        <div className="absolute -top-[14%] -right-[20%] sm:-right-[10%] md:-right-[2%] w-[400px] sm:w-[620px] md:w-[820px] h-[340px] sm:h-[520px] md:h-[660px] bg-[#FF7A00] rounded-full filter blur-[70px] sm:blur-[110px] md:blur-[155px] opacity-85" />

        {/* Mid-Right Radiant Violet / Indigo Wing */}
        <div className="absolute top-[14%] right-[0%] sm:right-[4%] md:right-[10%] w-[320px] sm:w-[500px] md:w-[680px] h-[280px] sm:h-[400px] md:h-[520px] bg-[#7000FF] rounded-full filter blur-[70px] sm:blur-[110px] md:blur-[145px] opacity-85" />

        {/* Upper-Right Golden Amber Accent */}
        <div className="absolute top-[0%] right-[15%] sm:right-[24%] md:right-[28%] w-[220px] sm:w-[360px] md:w-[500px] h-[180px] sm:h-[280px] md:h-[380px] bg-[#FFAA00] rounded-full filter blur-[60px] sm:blur-[90px] md:blur-[120px] opacity-75" />

        {/* Rounded Bottom Arc Bridge */}
        <div className="absolute top-[38%] md:top-[40%] left-1/2 -translate-x-1/2 w-[460px] sm:w-[700px] md:w-[950px] h-[180px] sm:h-[260px] md:h-[320px] bg-gradient-to-r from-[#0055FF]/40 via-[#7000FF]/50 to-[#FF7A00]/40 rounded-full filter blur-[70px] sm:blur-[100px] md:blur-[140px] opacity-75" />
      </div>

      {/* Main Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-w-0 pt-6 sm:pt-14 lg:pt-16 pb-16 sm:pb-20">
        {/* 1. Top Announcement Pill */}
        <div className="w-full flex justify-center mb-5 sm:mb-8">
          <Link
            href="/chat"
            className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-neutral-200/80 shadow-xs text-xs sm:text-sm font-medium text-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping shrink-0" />
            <span className="font-semibold text-neutral-900 shrink-0">
              EchoGPT 2.0
            </span>
            <span className="text-neutral-300 shrink-0">•</span>
            <span className="text-neutral-600 truncate">
              Multi-Model Orchestration is live
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </Link>
        </div>

        {/* 2. Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-extrabold tracking-[-0.03em] text-[#111116] leading-10 sm:leading-[1.12] max-w-4xl mx-auto break-words">
          Unified AI Workspace for{" "}
          <span className="inline-block">Creators</span>
        </h1>

        {/* 3. Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed px-1 sm:px-2">
          Supercharge your workflow with next-generation multi-model AI,
          real-time collaboration, and powerful creative tools.
        </p>

        {/* 4. Dual CTAs */}
        <div className="mt-7 sm:mt-10 flex  items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/chat"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-2 sm:px-9 py-2 sm:py-4 text-sm font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] active:scale-[0.98] rounded-xl shadow-[0_10px_25px_-5px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 border border-white/10 transition-all duration-200 cursor-pointer"
          >
            <span>Launch App</span>
            <ArrowRight
              size={16}
              className=" text-white/80 group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>

          <Link
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-2 sm:px-8 py-2 sm:py-4 text-sm  font-semibold text-neutral-800 bg-white/85 hover:bg-white active:scale-[0.98] backdrop-blur-md rounded-xl border border-neutral-200/90 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Play className=" fill-neutral-800 text-neutral-800" size={12} />
            <span>Watch Demo</span>
          </Link>
        </div>

        {/* 5. Social Proof / Trust Row */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-600 w-full">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-6 sm:h-7 w-6 sm:w-7 rounded-full ring-2 ring-white bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold flex items-center justify-center text-[9px] sm:text-[10px]">
                JD
              </div>
              <div className="inline-block h-6 sm:h-7 w-6 sm:w-7 rounded-full ring-2 ring-white bg-gradient-to-tr from-pink-500 to-rose-500 text-white font-bold flex items-center justify-center text-[9px] sm:text-[10px]">
                AK
              </div>
              <div className="inline-block h-6 sm:h-7 w-6 sm:w-7 rounded-full ring-2 ring-white bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold flex items-center justify-center text-[9px] sm:text-[10px]">
                SR
              </div>
              <div className="inline-block h-6 sm:h-7 w-6 sm:w-7 rounded-full ring-2 ring-white bg-gradient-to-tr from-blue-500 to-cyan-500 text-white font-bold flex items-center justify-center text-[9px] sm:text-[10px]">
                ML
              </div>
            </div>
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-center text-center">
            <span className="font-medium text-neutral-700">
              4.9/5 from 10,000+ creators & devs
            </span>
            <span className="hidden md:inline text-neutral-300">•</span>
            <span className="hidden md:inline text-neutral-500">
              No credit card required
            </span>
          </div>
        </div>

        {/* 6. AI Workspace Preview Card (macOS styled UI Mockup) */}
        <div className="relative mt-10 sm:mt-16 w-full max-w-5xl mx-auto min-w-0">
          {/* Left Floating Micro-Card (Desktop/Large Laptop) */}
          <div className="hidden xl:flex absolute -left-8 2xl:-left-12 top-1/4 -translate-y-1/2 z-20 items-center gap-3 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl border border-neutral-200/80 shadow-[0_12px_32px_rgba(0,0,0,0.08)] animate-bounce [animation-duration:6s]">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-sm">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-neutral-900">
                4.2x Faster Latency
              </div>
              <div className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Avg. ~120ms stream
              </div>
            </div>
          </div>

          {/* Right Floating Micro-Card (Desktop/Large Laptop) */}
          <div className="hidden xl:flex absolute -right-8 2xl:-right-12 bottom-1/4 z-20 items-center gap-3 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl border border-neutral-200/80 shadow-[0_12px_32px_rgba(0,0,0,0.08)] animate-bounce [animation-duration:7s]">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-sm">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-neutral-900">
                Multi-Model Routing
              </div>
              <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Optimal accuracy
              </div>
            </div>
          </div>

          {/* Main App Preview Window */}
          <div className="relative z-10 bg-neutral-900/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-neutral-800 shadow-[0_24px_70px_rgba(0,0,0,0.22)] overflow-hidden text-left w-full min-w-0">
            {/* Window Topbar */}
            <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-b border-neutral-800/80 bg-neutral-950/60 gap-2 w-full min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27C93F]" />
              </div>

              {/* Model Switcher Pills (Horizontal scroll on mobile) */}
              <div className="flex items-center gap-1 sm:gap-1.5 bg-neutral-900/90 p-1 rounded-xl border border-neutral-800 text-xs overflow-x-auto max-w-[200px] sm:max-w-none">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setActiveModel(model.id)}
                    className={`px-2 sm:px-3 py-1 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 shrink-0 text-[11px] sm:text-xs ${
                      activeModel === model.id
                        ? "bg-neutral-800 text-white shadow-xs"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <span>{model.name}</span>
                    <span className="hidden sm:inline text-[9px] px-1.5 py-0.5 rounded-md bg-neutral-800/90 text-neutral-300 font-normal">
                      {model.badge}
                    </span>
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-2 text-neutral-400 text-xs shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Parameters</span>
              </div>
            </div>

            {/* Window Chat Content Area */}
            <div className="p-3.5 sm:p-6 md:p-8 space-y-4 sm:space-y-6 w-full min-w-0">
              {/* User Prompt Message */}
              <div className="flex items-start gap-2 sm:gap-3.5 max-w-2xl ml-auto justify-end min-w-0">
                <div className="bg-[#4F46E5] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-2xl rounded-tr-xs text-xs sm:text-sm shadow-sm leading-relaxed max-w-[85%] sm:max-w-none break-words">
                  Design a scalable Next.js architecture with multi-model AI
                  routing and real-time streaming for our creators workspace.
                </div>
                <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-[9px] sm:text-xs shrink-0 ring-2 ring-white/10">
                  U
                </div>
              </div>

              {/* Assistant Response Message */}
              <div className="flex items-start gap-2 sm:gap-3.5 max-w-3xl min-w-0 w-full">
                <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                  <Bot className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div className="space-y-2 sm:space-y-3.5 flex-1 min-w-0 w-full">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-white">
                      EchoGPT
                    </span>
                    <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                      GPT-4o Orchestrator
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Here is the recommended architecture pattern using edge
                    orchestration and low-latency streaming pipeline:
                  </p>

                  {/* Code Mock Block */}
                  <div className="rounded-xl bg-neutral-950 border border-neutral-800/90 p-2.5 sm:p-4 font-mono text-[10px] sm:text-xs overflow-x-auto w-full max-w-full min-w-0">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800/60 text-neutral-400 text-[9px] sm:text-[11px] gap-2">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <Terminal className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-indigo-400" />
                        <span>orchestrator.ts</span>
                      </div>
                      <span className="text-emerald-400 font-sans text-[9px] sm:text-[11px] flex items-center gap-1 shrink-0">
                        <CheckCircle2 className="w-3 h-3" /> Ready to deploy
                      </span>
                    </div>
                    <pre className="text-neutral-300 space-y-1 block overflow-x-auto whitespace-pre">
                      <code>
                        <span className="text-purple-400">
                          export async function
                        </span>{" "}
                        <span className="text-blue-400">streamAIResponse</span>(
                        <span className="text-amber-300">query</span>:{" "}
                        <span className="text-emerald-400">string</span>) {"{"}
                      </code>
                      <br />
                      <code>
                        {"  "}
                        <span className="text-neutral-500">
                          // Dynamically select optimal model for task
                        </span>
                      </code>
                      <br />
                      <code>
                        {"  "}
                        <span className="text-purple-400">const</span> route ={" "}
                        <span className="text-purple-400">await</span>{" "}
                        <span className="text-blue-400">classifyIntent</span>
                        (query);
                      </code>
                      <br />
                      <code>
                        {"  "}
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-blue-400">
                          createStreamingPipeline
                        </span>
                        ({"{ "}
                        <span className="text-amber-300">model</span>:
                        route.targetModel,{" "}
                        <span className="text-amber-300">edge</span>:{" "}
                        <span className="text-orange-400">true</span> {"}"});
                      </code>
                      <br />
                      <code>{"}"}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Mock Input Bar */}
              <div className="pt-1 sm:pt-2 w-full">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-neutral-950/90 border border-neutral-800 rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 shadow-inner w-full min-w-0">
                  <button className="p-1.5 sm:p-2 text-neutral-400 hover:text-white rounded-lg sm:rounded-xl hover:bg-neutral-800/80 transition-colors shrink-0">
                    <Paperclip className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </button>
                  <input
                    type="text"
                    readOnly
                    placeholder="Ask EchoGPT anything..."
                    className="flex-1 bg-transparent text-xs sm:text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none px-1 sm:px-2 min-w-0"
                  />
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-800/80 text-[11px] text-neutral-400 border border-neutral-700/60 font-mono">
                      <span>⌘</span>
                      <span>K</span>
                    </div>
                    <button className="p-1.5 sm:p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg sm:rounded-xl shadow-xs transition-all cursor-pointer">
                      <ArrowUp className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Subtle bottom spacer */}
      <div className="h-6 sm:h-8 pointer-events-none" />
    </div>
  );
};

export default Hero;
