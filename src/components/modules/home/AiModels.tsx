"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { AiModel, firstRowModels, secondRowModels } from "@/lib/modelsData";
import { Zap } from "lucide-react";

// Reusable Model Card
const ModelCard = ({ model }: { model: AiModel }) => {
  return (
    <div className="group relative flex items-center gap-4 bg-white/95 hover:bg-white backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 min-w-[280px] sm:min-w-[320px] cursor-pointer">
      {/* Real Model Logo Image Container */}
      <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 p-2 overflow-hidden">
        <Image
          src={model.imageSrc}
          alt={`${model.name} logo`}
          width={36}
          height={36}
          className="w-full h-full object-contain"
          unoptimized
        />
      </div>

      {/* Model Information */}
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="font-bold text-sm sm:text-base text-neutral-900 tracking-tight truncate group-hover:text-indigo-600 transition-colors">
            {model.name}
          </h4>
          <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200/80 shrink-0 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
            {model.badge}
          </span>
        </div>
        <p className="text-xs text-neutral-500 truncate font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {model.provider}
        </p>
      </div>
    </div>
  );
};

const AiModels = () => {
  return (
    <section id="models" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Ambient Mesh Glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/5 via-indigo-500/10 to-purple-500/5 rounded-full filter blur-[100px] pointer-events-none -z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <Zap className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
          <span>Multi-Model Ecosystem</span>
        </div>

        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
          Available Model
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Access the world&apos;s leading frontier foundation models directly within your EchoGPT workspace.
        </p>
      </div>

      {/* Marquee Container with Left & Right Gradient Masking */}
      <div className="relative w-full overflow-hidden space-y-4">
        {/* Row 1: Left to Right Marquee */}
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1.5rem]">
          {firstRowModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </Marquee>

        {/* Row 2: Right to Left Marquee (Reversed) */}
        <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:1.5rem]">
          {secondRowModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </Marquee>

        {/* Left Edge Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Right Edge Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      </div>
    </section>
  );
};

export default AiModels;
