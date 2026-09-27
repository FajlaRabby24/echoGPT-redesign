import { Sparkles, FileText, Target, Share2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface PromptSuggestion {
  id: string;
  title: string;
  tag: string;
  description: string;
  prompt: string;
  icon: LucideIcon;
}

export const defaultSuggestions: PromptSuggestion[] = [
  {
    id: "creative-flow",
    title: "Unlock Your Creative Flow",
    tag: "Ideation & Writing",
    description:
      "Receive custom prompts that adapt to your writing style, break through creative blocks, and spark fresh perspectives.",
    prompt:
      "Generate 5 compelling creative writing prompts with distinctive narrative hooks and multi-layered character conflicts.",
    icon: Sparkles,
  },
  {
    id: "resume-shines",
    title: "Build a Resume That Shines",
    tag: "Career Strategy",
    description:
      "Craft a resume tailored to highlight your high-impact achievements and match the exact requirements of top employers.",
    prompt:
      "Help me transform my bullet points into metrics-driven achievements using the Google X-Y-Z formula for senior tech roles.",
    icon: FileText,
  },
  {
    id: "transform-challenge",
    title: "Set a Challenge That Transforms You",
    tag: "Personal Growth",
    description:
      "Create a personalized challenge structured around your goals and habits, designed to push you outside your comfort zone.",
    prompt:
      "Design a rigorous 30-day deep work and productivity challenge with clear weekly milestones and daily action steps.",
    icon: Target,
  },
  {
    id: "social-content",
    title: "Write Irresistible Social Content",
    tag: "Engagement & Reach",
    description:
      "Generate magnetic hooks, insightful threads, and viral captions engineered to spark conversations and maximize reach.",
    prompt:
      "Write 3 attention-grabbing social media thread hooks about the future of multi-model AI workflows, with sample outlines.",
    icon: Share2,
  },
];
