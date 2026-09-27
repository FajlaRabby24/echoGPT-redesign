"use client";

import { featureColumns } from "@/lib/featuresData";
import { Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 bg-[#FAFAFC] overflow-hidden"
    >
      {/* Subtle Ambient Backing Glow */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[120px] pointer-events-none -z-0"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px] pointer-events-none -z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capabilities & Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            What We do
          </h2>
        </div>

        {/* 4-Column Responsive Grid rendered from featureColumns array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureColumns.map((column) => (
            <div key={column.id} className="flex flex-col gap-6">
              {column.items.map((item) => (
                <FeatureCard key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
