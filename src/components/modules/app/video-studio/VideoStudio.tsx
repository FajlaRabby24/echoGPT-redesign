"use client";

import React, { useState } from "react";
import VideoStudioHeader from "./VideoStudioHeader";
import VideoPromptCard from "./VideoPromptCard";
import VideoCreationsGallery from "./VideoCreationsGallery";
import {
  INITIAL_USER_VIDEOS,
  UserVideoCreation,
  VideoModel,
  VideoAspectRatio,
  VideoDurationOption,
} from "@/lib/videoStudioData";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function VideoStudio() {
  const [creations, setCreations] = useState<UserVideoCreation[]>(
    INITIAL_USER_VIDEOS
  );
  const [userBalance, setUserBalance] = useState<number>(240);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Sample curated videos for new generations
  const sampleGenVideos = [
    {
      videoUrl:
        "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4",
      posterUrl:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    },
    {
      videoUrl:
        "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-42861-large.mp4",
      posterUrl:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80",
    },
    {
      videoUrl:
        "https://assets.mixkit.co/videos/preview/mixkit-tree-branches-in-the-breeze-1188-large.mp4",
      posterUrl:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    },
    {
      videoUrl:
        "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
      posterUrl:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const handleGenerate = ({
    prompt,
    model,
    ratio,
    duration,
    referenceImage,
  }: {
    prompt: string;
    model: VideoModel;
    ratio: VideoAspectRatio;
    duration: VideoDurationOption;
    referenceImage?: string;
  }) => {
    const cost = (model.baseCredits + ratio.extraCredits) * duration.multiplier;
    if (userBalance < cost) {
      alert("Insufficient video render credits. Please top up your balance.");
      return;
    }

    setIsGenerating(true);

    // Simulate render latency & credit deduction
    setTimeout(() => {
      setUserBalance((prev) => Math.max(0, prev - cost));

      const sample =
        sampleGenVideos[creations.length % sampleGenVideos.length];

      const newCreation: UserVideoCreation = {
        id: `gen-video-${Date.now()}`,
        title: prompt.slice(0, 32) || "New Generated Video",
        prompt,
        videoUrl: sample.videoUrl,
        posterUrl: referenceImage || sample.posterUrl,
        duration: duration.label,
        aspectRatio: ratio.label,
        modelName: model.name,
        creditsUsed: cost,
        createdAt: "Just now",
        likes: 1,
        category: "Cinematic",
      };

      setCreations((prev) => [newCreation, ...prev]);
      setIsGenerating(false);
    }, 1800);
  };

  return (
    <TooltipProvider delay={150}>
      <div className="w-full min-h-[calc(100vh-3.5rem)] py-8 sm:py-12 space-y-8 sm:space-y-10">
        {/* Header */}
        <VideoStudioHeader userBalance={userBalance} />

        {/* Video Prompt Generator Box */}
        <VideoPromptCard
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />

        {/* Gallery of User Video Creations */}
        <VideoCreationsGallery creations={creations} />
      </div>
    </TooltipProvider>
  );
}