"use client";

import React from "react";
import { ComparisonAnswer } from "@/lib/compareModelsData";
import ModelCardResponse from "./ModelCardResponse";
import { CompareMode } from "./CompareModeToggle";
import { Sparkles, Trophy } from "lucide-react";

interface ModelComparisonGridProps {
  answers: ComparisonAnswer[];
  activePrompt: string;
  mode: CompareMode;
  activeFocusModelId: string;
  winnerModelId: string | null;
  onVoteWinner: (modelId: string) => void;
}

export default function ModelComparisonGrid({
  answers,
  activePrompt,
  mode,
  activeFocusModelId,
  winnerModelId,
  onVoteWinner,
}: ModelComparisonGridProps) {
  const displayedAnswers =
    mode === "focus"
      ? answers.filter((a) => a.modelId === activeFocusModelId)
      : answers;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-4 pb-12 space-y-5">
      {/* Comparison Arena Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
              {mode === "compare" ? "Multi-Model Split Arena" : "Focused Inspection"}
            </span>
            <span className="text-xs text-neutral-400">
              ({displayedAnswers.length} {displayedAnswers.length === 1 ? "Model" : "Models"})
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium italic line-clamp-1">
            "{activePrompt}"
          </p>
        </div>

        {winnerModelId && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Community Best Answer Picked</span>
          </div>
        )}
      </div>

      {/* Answers Grid */}
      <div
        className={`grid gap-4 sm:gap-5 items-start ${
          mode === "focus"
            ? "grid-cols-1 max-w-3xl mx-auto"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5"
        }`}
      >
        {displayedAnswers.map((ans) => (
          <ModelCardResponse
            key={ans.modelId}
            answer={ans}
            isWinner={winnerModelId === ans.modelId}
            onVoteWinner={onVoteWinner}
          />
        ))}
      </div>
    </div>
  );
}
