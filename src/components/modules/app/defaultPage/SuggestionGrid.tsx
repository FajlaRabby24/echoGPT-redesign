"use client";

import React from "react";
import SuggestionCard from "./SuggestionCard";
import { defaultSuggestions, PromptSuggestion } from "@/lib/promptSuggestions";

interface SuggestionGridProps {
  suggestions?: PromptSuggestion[];
  onSelectPrompt: (promptText: string) => void;
}

export default function SuggestionGrid({
  suggestions = defaultSuggestions,
  onSelectPrompt,
}: SuggestionGridProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
        {suggestions.map((item) => (
          <SuggestionCard
            key={item.id}
            suggestion={item}
            onSelect={onSelectPrompt}
          />
        ))}
      </div>
    </div>
  );
}
