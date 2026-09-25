"use client";

import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/faqData";
import { Sparkles } from "lucide-react";

export default function Faq() {
  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full filter blur-[120px] pointer-events-none -z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Subtitle + Scenic Landscape Artwork */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Common Inquiries</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Frequently <br className="hidden sm:inline" />
                asked questions
              </h2>

              {/* Subtitle */}
              <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-md">
                A few quick answers about how EchoGPT works, model access, and what to expect.
              </p>
            </div>

            {/* Scenic Landscape Image with Smooth Right Fade (Matching Reference Design) */}
            <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden mt-10 sm:mt-14 shadow-sm border border-neutral-100">
              <Image
                src="/faq_scenic_landscape.jpg"
                alt="EchoGPT Scenic Landscape"
                fill
                className="object-cover object-left-bottom"
                unoptimized
              />
              {/* Smooth Right and Top Gradient Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/40" />
            </div>
          </div>

          {/* Right Column: Clean Accordion List */}
          <div className="lg:col-span-7">
            <Accordion
              className="w-full space-y-0 divide-y divide-neutral-200/90 border-t border-b border-neutral-200/90"
              defaultValue={["item-2"]}
            >
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="py-1 border-neutral-200/90"
                >
                  <AccordionTrigger className="py-5 text-left text-base sm:text-lg lg:text-xl font-bold text-neutral-900 hover:text-indigo-600 hover:no-underline transition-colors group cursor-pointer">
                    <span className="pr-4">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-1 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
