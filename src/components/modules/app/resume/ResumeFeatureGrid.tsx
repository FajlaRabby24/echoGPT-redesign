"use client";

import React from "react";
import { ResumeFeature, RESUME_FEATURES } from "@/lib/resumeFeatures";

interface ResumeFeatureGridProps {
  onSelectFeature: (feature: ResumeFeature) => void;
}

export default function ResumeFeatureGrid({
  onSelectFeature,
}: ResumeFeatureGridProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {RESUME_FEATURES.map((feat) => (
          <div
            key={feat.id}
            onClick={() => onSelectFeature(feat)}
            className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-indigo-300 shadow-2xs hover:shadow-md transition-all duration-200 active:scale-[0.99] cursor-pointer text-center flex flex-col justify-center items-center space-y-1.5"
          >
            <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-[#4F46E5] transition-colors">
              {feat.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-xs">
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
