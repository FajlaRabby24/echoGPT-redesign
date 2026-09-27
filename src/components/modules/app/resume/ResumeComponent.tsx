"use client";

import React, { useState } from "react";
import ResumeHeader from "./ResumeHeader";
import ResumeFeatureGrid from "./ResumeFeatureGrid";
import ResumeInputBox from "./ResumeInputBox";
import { ResumeFeature } from "@/lib/resumeFeatures";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CheckCircle2, Sparkles, FileText, Target, ArrowRight } from "lucide-react";

export default function ResumeComponent() {
  const [prompt, setPrompt] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    role: string;
    matchScore: number;
    keySkills: string[];
    strengths: string[];
    gaps: string[];
    tailoredSummary: string;
  } | null>(null);

  const handleSelectFeature = (feat: ResumeFeature) => {
    setPrompt(feat.promptTemplate);
  };

  const handleAnalyzeJob = (submittedText: string) => {
    setIsAnalyzing(true);

    // Simulate AI Job Insight synthesis
    setTimeout(() => {
      setAnalysisResult({
        role: "Senior Frontend Engineer / Fullstack Specialist",
        matchScore: 92,
        keySkills: [
          "React 19 / Next.js App Router",
          "TypeScript Strict Mode",
          "Tailwind CSS & Shadcn UI",
          "Distributed Architecture",
          "Performance Optimization",
        ],
        strengths: [
          "Strong alignment with modern Next.js ecosystem paradigms",
          "Proven component isolation and micro-frontend state handling",
          "Clean accessible UI engineering skills",
        ],
        gaps: [
          "Highlight concrete metrics in previous projects (e.g. reduced latency by 35%)",
          "Add mention of automated end-to-end testing (Playwright/Cypress)",
        ],
        tailoredSummary:
          "High-impact Senior Frontend Engineer with deep expertise in Next.js, TypeScript, and modern design systems. Adept at building responsive, accessible, and high-performance web applications with focus on developer velocity and user-centric architecture.",
      });
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <TooltipProvider delay={150}>
      <div className="flex-1 flex flex-col justify-between min-h-[calc(100vh-3.5rem)] py-8 sm:py-12 space-y-8 sm:space-y-12 select-none">
        {/* ========================================================= */}
        {/* 1. Header & 2x2 Feature Cards Grid                       */}
        {/* ========================================================= */}
        <div className="space-y-7 sm:space-y-9 w-full">
          <ResumeHeader />
          <ResumeFeatureGrid onSelectFeature={handleSelectFeature} />
        </div>

        {/* ========================================================= */}
        {/* 2. Interactive Analysis Result Card (If analyzed)         */}
        {/* ========================================================= */}
        {analysisResult && (
          <div className="w-full max-w-4xl mx-auto px-4 select-text">
            <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-md p-5 sm:p-7 space-y-6">
              {/* Header Match Score */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-full">
                      AI Job Match Report
                    </span>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500">· Real-time</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    {analysisResult.role}
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500">
                      Profile Match
                    </p>
                    <p className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                      {analysisResult.matchScore}%
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Tailored Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#4F46E5] dark:text-indigo-400" />
                  Tailored Executive Summary
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed bg-neutral-50/80 dark:bg-neutral-800/60 p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-800">
                  {analysisResult.tailoredSummary}
                </p>
              </div>

              {/* Two Column Grid: Strengths vs Skill Gaps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Identified Strengths */}
                <div className="space-y-2 p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100/70 dark:border-emerald-900/40">
                  <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Key Matched Strengths
                  </h4>
                  <ul className="space-y-1.5 text-xs text-emerald-900/80 dark:text-emerald-200/80">
                    {analysisResult.strengths.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 dark:text-emerald-400 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill Gaps / Recommendation */}
                <div className="space-y-2 p-3.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-100/70 dark:border-amber-900/40">
                  <h4 className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    High-Impact Enhancements
                  </h4>
                  <ul className="space-y-1.5 text-xs text-amber-900/80 dark:text-amber-200/80">
                    {analysisResult.gaps.map((g, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-500 dark:text-amber-400 font-bold">•</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Top Required Skills Tags */}
              <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <span className="text-xs font-bold text-neutral-600 dark:text-neutral-400">
                  Essential Keywords for ATS Optimization:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {analysisResult.keySkills.map((sk) => (
                    <span
                      key={sk}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 3. Bottom Input Box & Footnote                            */}
        {/* ========================================================= */}
        <div className="w-full pt-4 pb-2 space-y-2.5">
          <ResumeInputBox
            value={prompt}
            onChange={setPrompt}
            onSubmit={handleAnalyzeJob}
            isAnalyzing={isAnalyzing}
          />
          <p className="text-[11px] text-center text-neutral-400 select-none">
            EchoGPT AI Job Insight processes job descriptions securely and highlights tailored career advantages.
          </p>
        </div>
      </div>
    </TooltipProvider>
  );
}