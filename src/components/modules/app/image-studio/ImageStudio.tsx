"use client";

import React, { useState } from "react";
import ImageStudioHeader from "./ImageStudioHeader";
import ImagePromptCard from "./ImagePromptCard";
import CreationsGallery from "./CreationsGallery";
import {
  INITIAL_USER_CREATIONS,
  UserCreation,
  ImageModel,
  AspectRatioOption,
} from "@/lib/imageStudioData";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function ImageStudio() {
  const [creations, setCreations] = useState<UserCreation[]>(
    INITIAL_USER_CREATIONS
  );
  const [userBalance, setUserBalance] = useState<number>(150);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Sample curated URLs for simulated new generations
  const sampleGenImages = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
  ];

  const handleGenerate = ({
    prompt,
    model,
    ratio,
    quantity,
    referenceImage,
  }: {
    prompt: string;
    model: ImageModel;
    ratio: AspectRatioOption;
    quantity: number;
    referenceImage?: string;
  }) => {
    const cost = (model.baseCredits + ratio.extraCredits) * quantity;
    if (userBalance < cost) {
      alert("Insufficient credits. Please top up your account balance.");
      return;
    }

    setIsGenerating(true);

    // Simulate generation latency & credit deduction
    setTimeout(() => {
      setUserBalance((prev) => Math.max(0, prev - cost));

      const newCreations: UserCreation[] = [];
      for (let i = 0; i < quantity; i++) {
        const randomImg =
          sampleGenImages[(creations.length + i) % sampleGenImages.length];
        newCreations.push({
          id: `gen-${Date.now()}-${i}`,
          prompt,
          imageUrl: referenceImage && i === 0 ? referenceImage : randomImg,
          aspectRatio: ratio.label,
          modelName: model.name,
          creditsUsed: model.baseCredits + ratio.extraCredits,
          createdAt: "Just now",
          likes: 1,
          category: "Portraits",
        });
      }

      setCreations((prev) => [...newCreations, ...prev]);
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <TooltipProvider delay={150}>
      <div className="w-full min-h-[calc(100vh-3.5rem)] py-8 sm:py-12 space-y-8 sm:space-y-10">
        {/* Header */}
        <ImageStudioHeader userBalance={userBalance} />

        {/* Prompt Card with aspect ratio, quantity, model dropdown, credit burn */}
        <ImagePromptCard
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />

        {/* Gallery of User Creations */}
        <CreationsGallery creations={creations} />
      </div>
    </TooltipProvider>
  );
}
