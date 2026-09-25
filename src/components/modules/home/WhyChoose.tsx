"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { leftFeatures, rightFeatures, WhyChooseFeature } from "@/lib/whyChooseData";
import { Sparkles, ArrowRight } from "lucide-react";

const FeatureItem = ({
  feature,
  align = "left",
}: {
  feature: WhyChooseFeature;
  align?: "left" | "right";
}) => {
  const Icon = feature.icon;
  return (
    <div
      className={`flex flex-col items-center ${
        align === "right" ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
      } text-center group transition-all duration-300`}
    >
      {/* Icon Badge */}
      <div
        className={`w-11 h-11 rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-3.5 shadow-xs border border-neutral-200/60 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-600 leading-relaxed max-w-xs font-normal">
        {feature.description}
      </p>
    </div>
  );
};

export default function WhyChoose() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Background Ambient Aura */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-blue-500/5 via-indigo-500/8 to-purple-500/5 rounded-full filter blur-[120px] pointer-events-none -z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Competitive Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Why choose <span className="italic font-serif font-normal text-indigo-600">EchoGPT?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
            From frontier model orchestration to lightning-fast execution, we&apos;ve got your daily AI productivity covered with enterprise reliability.
          </p>
        </div>

        {/* 3-Column Symmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column (2 Features) */}
          <div className="flex flex-col gap-10 sm:gap-14 order-2 lg:order-1">
            {leftFeatures.map((feature) => (
              <FeatureItem key={feature.id} feature={feature} align="right" />
            ))}
          </div>

          {/* Center Column (Hero Image with Offset Backdrop Card) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5]">
              {/* Offset Decorative Backdrop Frame */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-100 via-indigo-50 to-purple-100 translate-x-3.5 translate-y-3.5 -z-10 border border-indigo-200/60 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
              />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.08)] group">
                <Image
                  src="/why_choose_hero.jpg"
                  alt="EchoGPT AI Workspace Core"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized
                />

                {/* Subtle Inner Glow Border Overlay */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column (2 Features) */}
          <div className="flex flex-col gap-10 sm:gap-14 order-3">
            {rightFeatures.map((feature) => (
              <FeatureItem key={feature.id} feature={feature} align="left" />
            ))}
          </div>
        </div>

        {/* Bottom Centered CTA Button */}
        <div className="mt-14 sm:mt-18 text-center">
          <Link
            href="/chat"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 text-white font-semibold text-sm sm:text-base shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <span>Get Started for Free</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
