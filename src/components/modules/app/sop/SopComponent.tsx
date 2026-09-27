"use client";

import React from "react";
import SopHero from "./SopHero";
import SopTemplateGrid from "./SopTemplateGrid";

export default function SopComponent() {
  return (
    <div className="flex-1 flex flex-col justify-start min-h-[calc(100vh-3.5rem)] py-8 sm:py-12 space-y-10 sm:space-y-14">
      {/* 1. Hero Header & 3 Pill Stats */}
      <SopHero />

      {/* 2. Choose Your SOP Template (Clickable to /sop/country?templatId=...) */}
      <SopTemplateGrid />
    </div>
  );
}