"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";

interface PreviewCardItem {
  id: string;
  imageSrc: string;
  alt: string;
  className: string;
  objectPosition?: string;
}

const previewCards: PreviewCardItem[] = [
  {
    id: "card-1",
    imageSrc: "/ai_code_editor.jpg",
    alt: "AI Code and File Workspace Preview",
    className: "col-span-1 md:col-span-1 h-[240px] sm:h-[280px] lg:h-[320px]",
    objectPosition: "object-top",
  },
  {
    id: "card-2",
    imageSrc: "/ai_analytics_dashboard.jpg",
    alt: "AI Analytics and Parallel Stream Dashboard",
    className: "col-span-1 md:col-span-2 h-[240px] sm:h-[280px] lg:h-[320px]",
    objectPosition: "object-center",
  },
  {
    id: "card-3",
    imageSrc: "/ai_ui_workflow.jpg",
    alt: "AI Multi-Model Workflow Canvas",
    className: "col-span-1 md:col-span-2 h-[240px] sm:h-[280px] lg:h-[320px]",
    objectPosition: "object-center",
  },
  {
    id: "card-4",
    imageSrc: "/ai_growth_dashboard.jpg",
    alt: "AI Automations and Performance Overview",
    className: "col-span-1 md:col-span-1 h-[240px] sm:h-[280px] lg:h-[320px]",
    objectPosition: "object-top",
  },
];

export default function ProductPreview() {
  return (
    <section
      id="preview"
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
    >
      {/* Subtle Background Ambient Mesh Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-blue-500/5 via-indigo-500/8 to-purple-500/5 rounded-full filter blur-[110px] pointer-events-none -z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Product Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Designed for frictionless intelligence
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Experience the power and simplicity of EchoGPT across your daily
            workflows.
          </p>
        </div>

        {/* Bento Grid - Pure Image Cards without Overlay Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {previewCards.map((card) => (
            <div
              key={card.id}
              className={`group relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-neutral-300 transition-all duration-300 cursor-pointer ${card.className}`}
            >
              <Image
                src={card.imageSrc}
                alt={card.alt}
                fill
                className={`object-cover  transition-transform duration-500 ease-out group-hover:scale-105`}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
