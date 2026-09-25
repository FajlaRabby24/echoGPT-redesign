"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAFAFC] selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Multi-chromatic Ambient Mesh Aura */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[550px] pointer-events-none select-none z-0 overflow-visible"
      >
        {/* Hot Pink / Magenta Aura (Top Center) */}
        <div className="absolute top-[8%] left-[26%] w-72 md:w-96 h-72 md:h-96 bg-[#EC4899] rounded-full mix-blend-multiply filter blur-[100px] md:blur-[130px] opacity-75 animate-pulse [animation-duration:9s]" />

        {/* Amber / Warm Orange Aura (Top Right) */}
        <div className="absolute top-[4%] right-[20%] w-72 md:w-96 h-72 md:h-96 bg-[#FB923C] rounded-full mix-blend-multiply filter blur-[100px] md:blur-[130px] opacity-65" />

        {/* Deep Violet / Indigo Aura (Center Right) */}
        <div className="absolute bottom-[10%] right-[18%] w-80 md:w-[420px] h-80 md:h-[420px] bg-[#6366F1] rounded-full mix-blend-multiply filter blur-[110px] md:blur-[140px] opacity-75" />

        {/* Electric Royal Blue Aura (Bottom Left) */}
        <div className="absolute bottom-[8%] left-[16%] w-80 md:w-[420px] h-80 md:h-[420px] bg-[#3B82F6] rounded-full mix-blend-multiply filter blur-[110px] md:blur-[140px] opacity-70" />
      </div>

      {/* Main Hero Center Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto pt-16 pb-24">
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-neutral-900 leading-[1.12] max-w-4xl mx-auto">
          Unified AI Workspace for <span>Creators</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Supercharge your workflow with next-generation multi-model AI, real-time collaboration, and powerful creative tools.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center">
          <Link
            href="/chat"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 text-base font-semibold text-white bg-[#1E1E24] hover:bg-black active:scale-[0.98] rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Launch Web App</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </main>

      {/* Subtle bottom spacer for optical balance */}
      <div className="h-6 pointer-events-none" />
    </div>
  );
};

export default Hero;
