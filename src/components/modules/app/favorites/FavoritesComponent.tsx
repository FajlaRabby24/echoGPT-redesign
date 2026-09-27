"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  Search,
  Sparkles,
  MessageSquare,
  Image as ImageIcon,
  Video,
  FileText,
  Trash2,
  ExternalLink,
  Filter,
} from "lucide-react";

interface FavoriteItem {
  id: string;
  title: string;
  snippet: string;
  type: "chat" | "image" | "video" | "prompt";
  model: string;
  createdAt: string;
  href: string;
}

const INITIAL_FAVORITES: FavoriteItem[] = [
  {
    id: "fav-1",
    title: "Microservices vs Monolith Architecture Synthesis",
    snippet: "Detailed consensus and latency comparison between 5 AI models for high scale distributed systems.",
    type: "chat",
    model: "Multi-Model Arena",
    createdAt: "2 hours ago",
    href: "/app/compare",
  },
  {
    id: "fav-2",
    title: "Cyberpunk Neo-Tokyo Cybernetic Samurai",
    snippet: "Ultra-detailed 8K cinematic render with volumetric neon lighting and rain reflections.",
    type: "image",
    model: "FLUX.1 Schnell",
    createdAt: "Yesterday",
    href: "/app/image-studio",
  },
  {
    id: "fav-3",
    title: "Senior Frontend Engineer ATS Resume Optimization",
    snippet: "Actionable keyword breakdown and executive profile summary tailored for Next.js and TypeScript roles.",
    type: "prompt",
    model: "AI Job Assistant",
    createdAt: "Sep 25, 2026",
    href: "/app/resume",
  },
];

export default function FavoritesComponent() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(INITIAL_FAVORITES);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  const filteredItems = favorites.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || item.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleRemoveFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const getTypeIcon = (type: FavoriteItem["type"]) => {
    switch (type) {
      case "chat":
        return <MessageSquare className="w-4 h-4 text-[#4F46E5]" />;
      case "image":
        return <ImageIcon className="w-4 h-4 text-emerald-600" />;
      case "video":
        return <Video className="w-4 h-4 text-purple-600" />;
      case "prompt":
        return <FileText className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-7 sm:space-y-9 select-none">
      {/* ========================================================= */}
      {/* 1. Header: Title & Subtitle                               */}
      {/* ========================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Starred & Favorites
            </h1>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60">
              {favorites.length} saved
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-normal">
            Quickly access your pinned chat responses, generated art, and high-impact prompts.
          </p>
        </div>

        {/* Action: Clear All or New Chat */}
        <Link
          href="/app"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md active:scale-95 transition-all cursor-pointer shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span>New Prompt</span>
        </Link>
      </div>

      {/* ========================================================= */}
      {/* 2. Search & Category Filters                              */}
      {/* ========================================================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search saved items..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 shadow-2xs transition-all"
          />
          <Search className="w-4 h-4 text-neutral-400 dark:text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {[
            { id: "all", label: "All Items" },
            { id: "chat", label: "Chats" },
            { id: "image", label: "Images" },
            { id: "prompt", label: "Job Prompts" },
          ].map((tab) => {
            const isActive = filterType === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#4F46E5] text-white shadow-2xs"
                    : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. Favorites Cards Grid / Empty State                     */}
      {/* ========================================================= */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 hover:border-indigo-400 dark:hover:border-indigo-500/60 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-3 cursor-pointer"
            >
              {/* Card Top: Type Pill + Model + Delete Star */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center shrink-0">
                    {getTypeIcon(item.type)}
                  </div>
                  <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    {item.model}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
                    {item.createdAt}
                  </span>
                  <button
                    type="button"
                    title="Remove from favorites"
                    onClick={(e) => handleRemoveFavorite(item.id, e)}
                    className="p-1 rounded-lg text-amber-500 hover:text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <Star className="w-4 h-4 fill-amber-400 text-amber-500 hover:fill-transparent" />
                  </button>
                </div>
              </div>

              {/* Title & Snippet */}
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed line-clamp-2">
                  {item.snippet}
                </p>
              </div>

              {/* Card Footer: Open Indicator */}
              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors">
                <span>Open in workspace</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-24 sm:py-32 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-14 h-14 rounded-3xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40 flex items-center justify-center text-amber-500 shadow-sm">
            <Star className="w-7 h-7" />
          </div>
          <div className="space-y-1 max-w-sm">
            <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
              No favorites saved yet
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Star important AI responses, generated designs, or job analysis insights to access them here anytime.
            </p>
          </div>
          <Link
            href="/app"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Explore EchoGPT</span>
          </Link>
        </div>
      )}
    </div>
  );
}
