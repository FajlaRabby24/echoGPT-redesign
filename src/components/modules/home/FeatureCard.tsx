"use client";

import { FeatureItem } from "@/lib/featuresData";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface FeatureCardProps {
  item: FeatureItem;
}

const FeatureCard = ({ item }: FeatureCardProps) => {
  // 1. Solid Brand Accent Card
  if (item.type === "brand") {
    const Icon = item.icon;
    return (
      <div className="group bg-[#4F46E5] hover:bg-[#4338CA] rounded-2xl p-8 shadow-[0_12px_36px_rgba(79,70,229,0.32)] hover:shadow-[0_18px_45px_rgba(79,70,229,0.42)] hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col items-center justify-center min-h-[190px] relative overflow-hidden text-center cursor-pointer">
        {/* Subtle ambient light flare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Centered Brand Icon & Name */}
        <div className="relative z-10 flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 shadow-inner">
            <Icon className="w-9 h-9 fill-white text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-white font-sans">
            {item.title}
          </span>
          <span className="text-xs text-indigo-200 mt-1 font-medium">
            {item.subtitle}
          </span>
        </div>
      </div>
    );
  }

  // 2. Team Collaboration Image Showcase Card
  if (item.type === "image") {
    return (
      <div className="relative rounded-2xl overflow-hidden border border-neutral-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group min-h-[190px] flex-1">
        <Image
          src={item.imageSrc}
          alt={item.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Overlay with subtle gradient and badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-5">
          <span className="text-xs font-semibold text-white flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            <span>{item.badgeText}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    );
  }

  // 3. Standard Text Feature Card
  const Icon = item.icon;
  return (
    <div className="group bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-between">
      <div>
        <div className="w-11 h-11 rounded-2xl bg-neutral-50 border border-neutral-200/70 flex items-center justify-center text-neutral-700 mb-6 group-hover:scale-105 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-3">
          {item.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed font-normal">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
