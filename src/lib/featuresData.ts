import {
  Cpu,
  Code2,
  Bot,
  Workflow,
  Zap,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

export type FeatureCardType = "feature" | "brand" | "image";

export interface StandardFeature {
  type: "feature";
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BrandFeature {
  type: "brand";
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export interface ImageFeature {
  type: "image";
  id: string;
  imageSrc: string;
  alt: string;
  badgeText: string;
}

export type FeatureItem = StandardFeature | BrandFeature | ImageFeature;

export interface FeatureColumn {
  id: string;
  items: FeatureItem[];
}

export const featureColumns: FeatureColumn[] = [
  {
    id: "col-1",
    items: [
      {
        type: "feature",
        id: "multi-model-ai",
        title: "Multi-Model AI",
        description:
          "Seamlessly orchestrate GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro. Route prompts dynamically to the optimal model for maximum speed and accuracy.",
        icon: Cpu,
      },
      {
        type: "feature",
        id: "code-intelligence",
        title: "Code Intelligence",
        description:
          "Full-stack code generation, context-aware debugging, and automated architecture reviews built for high-velocity software teams.",
        icon: Code2,
      },
    ],
  },
  {
    id: "col-2",
    items: [
      {
        type: "feature",
        id: "ai-workspace",
        title: "AI Workspace",
        description:
          "Intuitive conversational interface designed for creators. Transform raw thoughts into structured documents, roadmaps, and creative designs.",
        icon: Bot,
      },
      {
        type: "brand",
        id: "brand-accent",
        title: "EchoGPT",
        subtitle: "Unified AI Workspace",
        icon: Zap,
      },
    ],
  },
  {
    id: "col-3",
    items: [
      {
        type: "feature",
        id: "smart-automation",
        title: "Smart Automation",
        description:
          "Connect autonomous AI workflows to repetitive tasks. Execute complex multi-step research, summarization, and data extraction hands-free.",
        icon: Workflow,
      },
      {
        type: "feature",
        id: "custom-agents",
        title: "Custom AI Agents",
        description:
          "Create tailored AI assistants configured with your specific prompts, brand voice, knowledge bases, and custom tools.",
        icon: Zap,
      },
    ],
  },
  {
    id: "col-4",
    items: [
      {
        type: "feature",
        id: "enterprise-solutions",
        title: "Enterprise Solutions:",
        description:
          "Bank-grade privacy, zero data retention training, custom SLA, and dedicated high-speed edge infrastructure for global teams.",
        icon: ShieldCheck,
      },
      {
        type: "image",
        id: "team-showcase",
        imageSrc: "/team_collaboration.jpg",
        alt: "Creative designers and engineers using EchoGPT workspace",
        badgeText: "Built for Creators & Devs",
      },
    ],
  },
];
