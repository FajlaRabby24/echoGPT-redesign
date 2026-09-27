"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { STORE_APPS, } from "@/lib/storeAppsData";

export default function StoreComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredApps = STORE_APPS.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-8 sm:space-y-10 select-none">
      {/* ========================================================= */}
      {/* 1. Header: Title & Subtitle                               */}
      {/* ========================================================= */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
          EchoGPT Store
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
          Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.
        </p>
      </div>

      {/* ========================================================= */}
      {/* 2. Centered Search Bar                                    */}
      {/* ========================================================= */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for the Apps"
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-neutral-200 bg-white placeholder:text-neutral-400 text-sm text-neutral-900 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 shadow-2xs transition-all"
          />
          <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. 3x3 App Cards Grid (Faithfully matching screenshot)    */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            className="group relative p-5 sm:p-6 rounded-xl bg-white border border-neutral-200/90 hover:border-indigo-400 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
          >
            {/* Top row: Icon + Try App button */}
            <div className="flex items-center justify-between">
              <div className="relative w-10 h-10 rounded-2xl bg-white border border-neutral-200/80 p-1 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  fill
                  src={app.iconSrc}
                  alt={app.name}
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>

              <Link
                href="/app"
                className="px-3.5 py-1.5 rounded-full border border-neutral-200/90 hover:border-indigo-400 bg-white hover:bg-neutral-50 text-neutral-700 hover:text-[#4F46E5] text-xs font-semibold shadow-2xs transition-all cursor-pointer"
              >
                Try App
              </Link>
            </div>

            {/* Middle row: Name + Description */}
            <div className="space-y-1.5 flex-1">
              <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-[#4F46E5] transition-colors">
                {app.name}
              </h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed line-clamp-3">
                {app.description}
              </p>
            </div>
          </div>
        ))}

        {filteredApps.length === 0 && (
          <div className="col-span-full py-16 text-center text-sm text-neutral-400">
            No AI apps found matching &quot;{searchQuery}&quot;
          </div>
        )}
      </div>
    </div>
  );
}