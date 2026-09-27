"use client";

import React, { useState } from "react";
import CompareModeToggle, { CompareMode } from "./CompareModeToggle";
import FocusModelBar from "./FocusModelBar";
import CompareInputCard from "./CompareInputCard";
import ModelComparisonGrid from "./ModelComparisonGrid";
import {
  CompareModel,
  ComparisonAnswer,
  DEFAULT_COMPARE_MODELS,
  SAMPLE_COMPARISON_ANSWERS,
} from "@/lib/compareModelsData";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sparkles } from "lucide-react";

export default function ComparePage() {
  const [mode, setMode] = useState<CompareMode>("compare");
  const [selectedModels, setSelectedModels] = useState<CompareModel[]>(
    DEFAULT_COMPARE_MODELS
  );
  const [activeFocusModelId, setActiveFocusModelId] = useState<string>(
    DEFAULT_COMPARE_MODELS[0].id
  );
  const [isComparing, setIsComparing] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<string>(
    "What are the architectural trade-offs between Microservices and Monolithic systems?"
  );
  const [answers, setAnswers] = useState<ComparisonAnswer[] | null>(
    SAMPLE_COMPARISON_ANSWERS.default
  );
  const [winnerModelId, setWinnerModelId] = useState<string | null>("echogpt");

  const samplePrompts = [
    "Explain quantum computing in simple terms",
    "Write an optimal debounce function in TypeScript",
    "Microservices vs Modular Monolith trade-offs",
    "How does Transformer self-attention work?",
  ];

  const handleToggleModel = (model: CompareModel) => {
    setSelectedModels((prev) => {
      const exists = prev.some((m) => m.id === model.id);
      if (exists) {
        if (prev.length <= 2) return prev; // keep at least 2 models
        return prev.filter((m) => m.id !== model.id);
      } else {
        if (prev.length >= 5) {
          // replace last
          return [...prev.slice(0, 4), model];
        }
        return [...prev, model];
      }
    });
  };

  const handleCompareSubmit = (promptText: string) => {
    setCurrentPrompt(promptText);
    setIsComparing(true);

    // Simulate multi-model parallel inference
    setTimeout(() => {
      const generatedAnswers: ComparisonAnswer[] = selectedModels.map(
        (model, index) => {
          const latencies = ["0.74s", "0.89s", "1.12s", "1.35s", "0.95s"];
          const tokens = [298, 380, 412, 340, 365];
          return {
            modelId: model.id,
            modelName: model.name,
            provider: model.provider,
            iconSrc: model.iconSrc,
            responseTime: latencies[index % latencies.length],
            tokensUsed: tokens[index % tokens.length],
            content: `Response from ${model.name} (${model.provider}):\n\nAddressing "${promptText}":\n\n1. Core Principle: Formulate direct synthesis prioritized by latency and precision.\n2. Technical Implementation: Deploy modular decoupled boundaries with strict domain isolation.\n3. Recommendation: Optimize based on workload characteristics and developer velocity.`,
            strengths: [model.badge, "High Fidelity", "Zero Latency lag"],
          };
        }
      );

      setAnswers(generatedAnswers);
      setWinnerModelId(null);
      setIsComparing(false);
    }, 1200);
  };

  return (
    <TooltipProvider delay={150}>
      <div className="w-full min-h-[calc(100vh-3.5rem)] py-8 sm:py-12 space-y-7 sm:space-y-9">
        {/* ========================================================= */}
        {/* 1. Header: Compare/Focus Toggle & Subtitle               */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center space-y-3.5 max-w-2xl mx-auto px-4 select-none">
          {/* Compare vs Focus Mode Switcher */}
          <CompareModeToggle mode={mode} onModeChange={setMode} />

          {/* Focus Mode Model Bar (Visible when Focus is active) */}
          {mode === "focus" && (
            <FocusModelBar
              models={selectedModels}
              activeFocusModelId={activeFocusModelId}
              onSelectFocusModel={setActiveFocusModelId}
            />
          )}

          {/* Subtitle matching screenshots */}
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal">
            Ask one question and see how 5 models answer it.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. Compare Prompt Input Card                              */}
        {/* ========================================================= */}
        <CompareInputCard
          selectedModels={selectedModels}
          onToggleModel={handleToggleModel}
          onSubmit={handleCompareSubmit}
          isComparing={isComparing}
        />

        {/* Quick Sample Prompts */}
        <div className="flex items-center justify-center gap-2 flex-wrap px-4 max-w-4xl mx-auto select-none">
          <span className="text-xs text-neutral-400 font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#4F46E5]" />
            Try comparing:
          </span>
          {samplePrompts.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => handleCompareSubmit(p)}
              className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
            >
              {p}
            </button>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 3. Multi-Model Split / Focus Arena Answers                */}
        {/* ========================================================= */}
        {answers && (
          <ModelComparisonGrid
            answers={answers}
            activePrompt={currentPrompt}
            mode={mode}
            activeFocusModelId={activeFocusModelId}
            winnerModelId={winnerModelId}
            onVoteWinner={setWinnerModelId}
          />
        )}
      </div>
    </TooltipProvider>
  );
}