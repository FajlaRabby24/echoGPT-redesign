"use client";

import React from "react";
import { SOP_TOP_STATS } from "@/lib/sopTemplatesData";

export default function SopHero() {
  return (
    <div className="text-center space-y-6 max-w-3xl mx-auto px-4 select-none">
      {/* Title & Subtitle */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#4F46E5]">
          AI-Powered SOP Builder
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto">
          Create compelling Statements of Purpose with AI assistance, tailored for your dream university and destination country.
        </p>
      </div>

      {/* 3 Pill Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-2">
        {SOP_TOP_STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100/80 text-[#4F46E5] flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                  {stat.title}
                </h3>
                <p className="text-xs text-neutral-400 font-normal">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
