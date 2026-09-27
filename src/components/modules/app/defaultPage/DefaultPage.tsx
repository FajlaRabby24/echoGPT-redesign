"use client";

import React, { useState } from "react";
import WelcomeHeader from "./WelcomeHeader";
import SuggestionGrid from "./SuggestionGrid";
import ChatInputBox from "./ChatInputBox";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DefaultPage() {
  const [prompt, setPrompt] = useState("");

  const handleSelectPrompt = (selectedText: string) => {
    setPrompt(selectedText);
    // Smooth scroll to input if on mobile
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleSubmit = (submittedText: string) => {
    console.log("Submitted prompt:", submittedText);
    // Handle submission workflow / navigation here
  };

  return (
    <TooltipProvider delay={150}>
      <div className="flex-1 flex flex-col justify-between min-h-[calc(100vh-3.5rem)] py-6 sm:py-10">
        {/* Top & Center: Greeting Header + Suggestion Grid */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-6 sm:space-y-8 w-full">
          <WelcomeHeader />
          <SuggestionGrid onSelectPrompt={handleSelectPrompt} />
        </div>

        {/* Bottom Section: Chat Input Box & Disclaimer */}
        <div className="w-full pt-6 pb-2 space-y-2.5">
          <ChatInputBox
            value={prompt}
            onChange={setPrompt}
            onSubmit={handleSubmit}
            placeholder="Ask a question or enter a prompt..."
          />
          <p className="text-[11px] text-center text-neutral-400 select-none">
            EchoGPT 2.0 can make mistakes. Verify critical facts and data sources.
          </p>
        </div>
      </div>
    </TooltipProvider>
  );
}