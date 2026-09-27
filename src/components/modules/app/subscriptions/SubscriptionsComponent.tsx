"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Flame,
  Check,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ModelItem {
  name: string;
  imageSrc?: string;
}

const basicModels: ModelItem[] = [
  { name: "EchoGPT", imageSrc: "/EchoGPT.png" },
  { name: "Nemotron 3 Ultra", imageSrc: "/Nemotron 3 Ultra.webp" },
  { name: "LongCat 2.0", imageSrc: "/longchat.webp" },
];

const advancedModels: ModelItem[] = [
  { name: "DeepSeek V4 Pro", imageSrc: "/depseek.ico" },
  { name: "GLM-5.2", imageSrc: "/glm.webp" },
  { name: "DeepSeek V4 Flash", imageSrc: "/depseek.ico" },
  { name: "Tencent Hy3", imageSrc: "/Tencent Hy3.svg" },
  { name: "MiMo V2.5 Pro", imageSrc: "/minimax.webp" },
  { name: "Qwen 3.7 Plus", imageSrc: "/qween.webp" },
  { name: "GPT-5.6 Sol", imageSrc: "/chatgpt.svg" },
  { name: "Kimi K2.7 Code", imageSrc: "/kimi.webp" },
  { name: "GLM-5.3 Flash", imageSrc: "/glm.webp" },
  { name: "Qwen 3.8 27B", imageSrc: "/qween.webp" },
  { name: "Qwen 3.7 Max", imageSrc: "/qween.webp" },
  { name: "Qwen 3.6 Plus", imageSrc: "/qween.webp" },
  { name: "Gemini 3.8 Flash", imageSrc: "/gemini.svg" },
  { name: "Kimi K3", imageSrc: "/kimi.webp" },
];

interface PlanTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceUnit: string;
  billedNote: string;
  isRecommended?: boolean;
  pillBadge?: string;
  savingsNote?: string;
  monthlyEquivalent: string;
  buttonText: string;
}

const plans: PlanTier[] = [
  {
    id: "monthly",
    name: "Monthly",
    description: "Ideal for short-term projects & flexibility.",
    price: "$9.99",
    priceUnit: "/ month",
    billedNote: "Billed monthly • Cancel anytime",
    monthlyEquivalent: "$9.99/mo",
    buttonText: "Get Started",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    description: "Great balance for active creators.",
    price: "$29.99",
    priceUnit: "/ 3 months",
    billedNote: "Billed quarterly as $29.99",
    pillBadge: "Popular",
    savingsNote: "Save 10%",
    monthlyEquivalent: "$9.99/mo",
    buttonText: "Subscribe Quarterly",
  },
  {
    id: "annual",
    name: "Annual Plan",
    description: "Maximum savings for professionals & teams.",
    price: "$99.99",
    priceUnit: "/ year",
    billedNote: "Billed $99.99 yearly • 2 Months Free",
    isRecommended: true,
    pillBadge: "MOST POPULAR • BEST VALUE",
    savingsNote: "Save 17% • 2 Months Free",
    monthlyEquivalent: "$8.33/mo",
    buttonText: "Upgrade to Annual",
  },
  {
    id: "half-yearly",
    name: "Half-Yearly",
    description: "Extended productivity with steady access.",
    price: "$59.99",
    priceUnit: "/ 6 months",
    billedNote: "Billed every 6 months as $59.99",
    savingsNote: "Save 15%",
    monthlyEquivalent: "$9.99/mo",
    buttonText: "Subscribe 6 Months",
  },
];

export default function SubscriptionsComponent() {
  const [selectedPlan, setSelectedPlan] = useState<string>("annual");
  const [subscribedPlan, setSubscribedPlan] = useState<string | null>(null);
  // Store expanded state for non-recommended cards
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (planId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [planId]: !prev[planId],
    }));
  };

  const handleSubscribe = (planId: string) => {
    setSubscribedPlan(planId);
  };

  // Render the list of basic and advanced models
  const renderModelsList = () => (
    <div className="space-y-4 pt-1">
      {/* Section 1: Access to basic models */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 flex items-center justify-between">
          <span>Access to basic models</span>
          <Check className="w-3.5 h-3.5 text-emerald-500" />
        </h4>
        <ul className="space-y-1.5">
          {basicModels.map((model, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300"
            >
              <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                {model.imageSrc ? (
                  <Image
                    src={model.imageSrc}
                    alt={model.name}
                    fill
                    sizes="16px"
                    className="object-contain"
                  />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                )}
              </div>
              <span className="truncate">{model.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2: Access to advanced models */}
      <div className="space-y-2 pt-1 border-t border-neutral-100 dark:border-neutral-800/80">
        <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 flex items-center justify-between">
          <span>Access to advanced models</span>
          <Check className="w-3.5 h-3.5 text-emerald-500" />
        </h4>
        <ul className="space-y-1.5 max-h-[340px] overflow-y-auto scrollbar-none pr-1">
          {advancedModels.map((model, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300"
            >
              <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                {model.imageSrc ? (
                  <Image
                    src={model.imageSrc}
                    alt={model.name}
                    fill
                    sizes="16px"
                    className="object-contain"
                  />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                )}
              </div>
              <span className="truncate">{model.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="w-full flex-1 flex flex-col items-center px-4 sm:px-6 py-10 sm:py-16 select-none">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* ========================================================= */}
        {/* 1. Header Section                                         */}
        {/* ========================================================= */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-1 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>EchoGPT Plus Membership</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
            Affordable plans for every need
          </h1>

          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Want to get more out of EchoGPT Plus? Subscribe to one of our
            professional plans and unlock unlimited high-speed AI access.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. Notification / Active Feedback                         */}
        {/* ========================================================= */}
        {subscribedPlan && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between gap-3 text-emerald-800 dark:text-emerald-200"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <p className="text-xs sm:text-sm font-semibold">
                Selected the{" "}
                <span className="capitalize font-bold">
                  {plans.find((p) => p.id === subscribedPlan)?.name}
                </span>
                . Directing to secure checkout...
              </p>
            </div>
            <button
              onClick={() => setSubscribedPlan(null)}
              className="text-xs font-bold underline hover:opacity-80 cursor-pointer"
            >
              Dismiss
            </button>
          </motion.div>
        )}

        {/* ========================================================= */}
        {/* 3. Tiered Plan Cards Grid                                 */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 items-start">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const isRec = plan.isRecommended;
            const isExpanded = isRec || !!expandedCards[plan.id];

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative flex flex-col justify-between rounded-3xl transition-all duration-200 cursor-pointer pt-7 pb-6 px-5 sm:px-6 ${
                  isRec
                    ? "bg-white dark:bg-neutral-900 border-2 border-[#6355FF] shadow-xl shadow-[#6355FF]/10 lg:-translate-y-2 ring-2 ring-[#6355FF]/20"
                    : isSelected
                    ? "bg-white dark:bg-neutral-900 border-2 border-indigo-400 dark:border-indigo-600 shadow-md"
                    : "bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-xs hover:shadow-md"
                }`}
              >
                {/* Single Top RECOMMENDED Badge (Only on Recommended Plan) */}
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-[#6355FF] to-violet-600 text-white text-[11px] font-black tracking-wider uppercase shadow-[0_4px_14px_rgba(99,85,255,0.45)]">
                      <Flame className="w-3 h-3 fill-amber-300 text-amber-300" />
                      RECOMMENDED
                    </span>
                  </div>
                )}

                {/* Sub-badge for other plans if present */}
                {!isRec && plan.pillBadge && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-[10px] font-bold tracking-wide uppercase border border-neutral-200 dark:border-neutral-700">
                      {plan.pillBadge}
                    </span>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Plan Name & Sparkle */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-neutral-900 dark:text-neutral-100 font-extrabold text-base">
                        <Sparkles
                          className={`w-4 h-4 ${
                            isRec
                              ? "text-[#6355FF] dark:text-[#8278FF]"
                              : "text-neutral-400 dark:text-neutral-500"
                          }`}
                        />
                        <span>{plan.name}</span>
                      </div>
                      {isRec && (
                        <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 px-2 py-0.5 rounded-md">
                          Best ROI
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">
                        {plan.priceUnit}
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">
                      {plan.billedNote}
                    </div>
                  </div>

                  {/* Call to Action Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubscribe(plan.id);
                    }}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] ${
                      isRec
                        ? "bg-[#6355FF] hover:bg-[#5244E6] text-white shadow-[0_8px_20px_rgba(99,85,255,0.4)] hover:shadow-[0_10px_24px_rgba(99,85,255,0.5)]"
                        : "bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-900"
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  {/* Features / Models Section */}
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                    {isRec ? (
                      /* Recommended Card: Always show all models directly */
                      renderModelsList()
                    ) : (
                      /* Non-Recommended Cards: Collapsible Dropdown Accordion */
                      <div className="space-y-2">
                        {/* Summary Pill when Collapsed */}
                        {!isExpanded && (
                          <div className="py-1 text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>Includes all 17+ AI models</span>
                          </div>
                        )}

                        {/* Dropdown Toggle Trigger Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(plan.id);
                          }}
                          className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-semibold text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                        >
                          <span>
                            {isExpanded ? "Hide models" : "View available models"}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Animated Dropdown Body */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden pt-2"
                            >
                              {renderModelsList()}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </div>

                {/* Savings / Business Highlight */}
                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] font-semibold">
                  <span
                    className={
                      isRec
                        ? "text-[#6355FF] dark:text-[#887EFF] font-bold"
                        : "text-neutral-500 dark:text-neutral-400 font-medium"
                    }
                  >
                    {plan.savingsNote || "Standard billing"}
                  </span>
                  <span className="text-neutral-400 dark:text-neutral-500 font-normal">
                    {plan.monthlyEquivalent}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 4. Enterprise & Security Guarantee Bar                    */}
        {/* ========================================================= */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100/70 dark:bg-indigo-950/60 text-[#6355FF] dark:text-[#887EFF] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                Cancel Anytime
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                No contracts or lock-in. You retain full Plus access until the end of your billing cycle.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100/70 dark:bg-indigo-950/60 text-[#6355FF] dark:text-[#887EFF] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                Priority Model Inference
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Zero queuing latency. Dedicated throughput across DeepSeek R1, GPT-5.6, and Gemini 3.8.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100/70 dark:bg-indigo-950/60 text-[#6355FF] dark:text-[#887EFF] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                Instant Activation
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Access unlocked models and increased context windows immediately after checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
