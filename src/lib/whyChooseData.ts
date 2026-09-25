import {
  Layers,
  Zap,
  DollarSign,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

export interface WhyChooseFeature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export const leftFeatures: WhyChooseFeature[] = [
  {
    id: "all-in-one",
    icon: Layers,
    title: "Unified AI Ecosystem",
    description:
      "Access GPT-4o, Claude 3.5, Gemini 1.5, and DeepSeek R1 in one seamless workspace without managing separate subscriptions.",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: "zero-latency",
    icon: Zap,
    title: "Sub-Second Switching",
    description:
      "Switch between reasoning, coding, and multimodal models instantly with continuous context preservation across tabs.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export const rightFeatures: WhyChooseFeature[] = [
  {
    id: "cost-effective",
    icon: DollarSign,
    title: "Cost-Effective Pricing",
    description:
      "Cut AI subscription expenses by up to 70% with intelligent model auto-routing and consolidated flexible billing.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: "enterprise-privacy",
    icon: ShieldCheck,
    title: "Enterprise Data Privacy",
    description:
      "Your proprietary code, documents, and chat threads are strictly encrypted and never used for foundation model training.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];
