"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Globe2, Sparkles } from "lucide-react";
import { SOP_TEMPLATES } from "@/lib/sopTemplatesData";

const COUNTRIES = [
  { id: "usa", name: "United States", flag: "🇺🇸", desc: "Holistic, leadership, extra-curriculars" },
  { id: "uk", name: "United Kingdom", flag: "🇬🇧", desc: "Academic depth, subject passion, concise" },
  { id: "canada", name: "Canada", flag: "🇨🇦", desc: "Research alignment, clear career objectives" },
  { id: "germany", name: "Germany", flag: "🇩🇪", desc: "Technical rigour, modular prerequisites" },
  { id: "australia", name: "Australia", flag: "🇦🇺", desc: "Genuine student assessment, career link" },
  { id: "ireland", name: "Ireland", flag: "🇮🇪", desc: "Industry practicalities, innovation focus" },
];

function SopCountryContent() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("templatId") || "academic";
  const currentTemplate =
    SOP_TEMPLATES.find((t) => t.id === templateId) || SOP_TEMPLATES[0];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8 select-none">
      {/* Back button */}
      <div>
        <Link
          href="/app/sop"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to SOP Templates</span>
        </Link>
      </div>

      {/* Selected Template Badge Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-indigo-100 text-[#4F46E5] flex items-center justify-center font-bold shadow-2xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F46E5]">
              Active Template
            </span>
            <h2 className="text-base sm:text-lg font-bold text-neutral-900">
              {currentTemplate.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {currentTemplate.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white text-neutral-700 border border-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Country Selection Section */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-[#4F46E5]" />
            <span>Select Destination Country</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Tailor your {currentTemplate.title} statement according to specific national visa & admissions guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
          {COUNTRIES.map((c) => (
            <div
              key={c.id}
              className="group p-4 rounded-2xl bg-white border border-neutral-200/90 hover:border-indigo-400 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <h4 className="font-bold text-sm text-neutral-900 group-hover:text-[#4F46E5] transition-colors">
                    {c.name}
                  </h4>
                  <p className="text-[11px] text-neutral-400">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SopCountryComponent() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-sm text-neutral-400">
          Loading SOP Country options...
        </div>
      }
    >
      <SopCountryContent />
    </Suspense>
  );
}
