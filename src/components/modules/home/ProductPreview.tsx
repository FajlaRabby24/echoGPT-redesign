"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function ProductPreview() {
  return (
    <section
      id="preview"
      className="relative py-20 sm:py-28 bg-white  overflow-hidden transition-colors"
    >
      {/* Subtle Background Ambient Mesh Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-blue-500/5 via-indigo-500/8 to-purple-500/5 rounded-full filter blur-[110px] pointer-events-none -z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
         <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600"  />
            <span>Product Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900  leading-tight">
            Designed for frictionless intelligence
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Experience the power and simplicity of EchoGPT across your daily
            workflows.
          </p>
        </div>

        {/* Showcase Image Frame */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] transition-all duration-300">
          <Image
            src="/designedforfrictionless.png"
            alt="Designed for Frictionless Intelligence"
            width={1598}
            height={1035}
            priority
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>
    </section>
  );
}
