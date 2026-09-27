import { LucideIcon, GraduationCap, Briefcase, Microscope, Palette, Sparkles, Globe2, LayoutGrid } from "lucide-react";

export interface SopPillStat {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export interface SopTemplateItem {
  id: string; // e.g. 'academic', 'professional', 'research', 'creative'
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  recommendedFor: string;
}

export const SOP_TOP_STATS: SopPillStat[] = [
  {
    id: "ai-enhanced",
    icon: Sparkles,
    title: "AI-Enhanced",
    subtitle: "Powered by Google Gemini",
  },
  {
    id: "countries",
    icon: Globe2,
    title: "6 Countries",
    subtitle: "Country-specific guidelines",
  },
  {
    id: "templates",
    icon: LayoutGrid,
    title: "4 Templates",
    subtitle: "Academic, Professional, Research, Creative",
  },
];

export const SOP_TEMPLATES: SopTemplateItem[] = [
  {
    id: "academic",
    title: "Academic Excellence",
    description: "Ideal for students with strong academic records applying to graduate programs.",
    icon: GraduationCap,
    tags: ["Academic", "Graduate Studies", "Scholarships"],
    recommendedFor: "Masters & PhD admissions",
  },
  {
    id: "professional",
    title: "Professional Track",
    description: "Designed for applicants with significant work experience seeking advanced degrees.",
    icon: Briefcase,
    tags: ["Career", "Professional Development", "MBA"],
    recommendedFor: "MBA & Executive programs",
  },
  {
    id: "research",
    title: "Research Focused",
    description: "Perfect for research-oriented applicants targeting PhD or research-intensive programs.",
    icon: Microscope,
    tags: ["Research", "PhD", "Innovation"],
    recommendedFor: "Doctoral fellowships & Lab positions",
  },
  {
    id: "creative",
    title: "Creative Arts",
    description: "Tailored for applicants to creative programs like fine arts, design, or writing.",
    icon: Palette,
    tags: ["Creative", "Arts", "Portfolio"],
    recommendedFor: "MFA & Design school portfolios",
  },
];
