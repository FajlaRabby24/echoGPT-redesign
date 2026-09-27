"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SopTemplateItem, SOP_TEMPLATES } from "@/lib/sopTemplatesData";

interface SopTemplateGridProps {
  country?: string;
}

export default function SopTemplateGrid({ country = "country" }: SopTemplateGridProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 space-y-6 select-none">
      {/* Section Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#4F46E5] dark:text-indigo-400">
          Choose Your SOP Template
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed">
          Select the template that best matches your background and the focus of your application. Each template is optimized for different types of applicants and academic goals.
        </p>
      </div>

      {/* 2x2 Template Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {SOP_TEMPLATES.map((item) => {
          const Icon = item.icon;
          const href = `/app/sop/country?templatId=${item.id}`;

          return (
            <Link
              key={item.id}
              href={href}
              className="group relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 hover:border-indigo-400 dark:hover:border-indigo-500/60 shadow-2xs hover:shadow-lg transition-all duration-200 active:scale-[0.99] cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 sm:gap-3.5 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:bg-[#4F46E5] group-hover:text-white transition-colors duration-200 shadow-2xs">
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="w-7 h-7 rounded-xl bg-neutral-50 dark:bg-neutral-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/60 flex items-center justify-center text-neutral-400 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>

              {/* Tag Chips */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-100/80 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
