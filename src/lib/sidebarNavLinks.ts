import {
  MessageSquare,
  History,
  Star,
  Image as ImageIcon,
  Video,
  GitCompare,
  Briefcase,
  FileSpreadsheet,
  Link2,
  Store,
  Terminal,
  HelpCircle,
  Settings,
  Mail,
  CreditCard,
  MessageCircle,
  LucideIcon,
} from "lucide-react";

export interface SidebarNavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  external?: boolean;
}

export interface SidebarNavGroup {
  id: string;
  category?: string;
  items: SidebarNavItem[];
}

// 1. Primary Workspace Group
export const workspaceNavGroup: SidebarNavGroup = {
  id: "workspace",
  category: "WORKSPACE",
  items: [
    {
      id: "chat",
      label: "Chat",
      href: "/app",
      icon: MessageSquare,
      badge: "Active",
    },
    {
      id: "history",
      label: "History",
      href: "/app/history",
      icon: History,
    },
    {
      id: "favorites",
      label: "Favorites",
      href: "/app/favorites",
      icon: Star,
    },
  ],
};

// 2. AI Tools Suite Group
export const aiToolsNavGroup: SidebarNavGroup = {
  id: "ai-tools",
  category: "AI TOOLS",
  items: [
    {
      id: "image-studio",
      label: "Image Studio",
      href: "/app/image-studio",
      icon: ImageIcon,
    },
    {
      id: "video-studio",
      label: "Video Studio",
      href: "/app/video-studio",
      icon: Video,
    },
    {
      id: "compare",
      label: "Compare",
      href: "/app/compare",
      icon: GitCompare,
    },
    {
      id: "job-analysis",
      label: "AI Job Analysis",
      href: "/app/resume",
      icon: Briefcase,
    },
    {
      id: "sop-builder",
      label: "AI SOP Builder",
      href: "/app/sop-builder",
      icon: FileSpreadsheet,
    },
  ],
};

// 3. Platform & Ecosystem Group
export const platformNavGroup: SidebarNavGroup = {
  id: "platform",
  category: "WORKSPACE",
  items: [
    {
      id: "connectors",
      label: "Connectors",
      href: "/app/connectors",
      icon: Link2,
    },
    {
      id: "store",
      label: "Store",
      href: "/app/store",
      icon: Store,
    },
    {
      id: "api-platform",
      label: "API Platform",
      href: "/app/api-platform",
      icon: Terminal,
    },
  ],
};

// 4. Utility / General Actions
export const utilityNavItems: SidebarNavItem[] = [
  {
    id: "support",
    label: "Support",
    href: "/app/support",
    icon: HelpCircle,
  },
  {
    id: "settings",
    label: "Settings",
    href: "/app/settings",
    icon: Settings,
  },
];

// 5. Expandable "More" Group
export const moreNavItems: SidebarNavItem[] = [
  {
    id: "newsletter",
    label: "Newsletter",
    href: "/app/newsletter",
    icon: Mail,
  },
  {
    id: "subscriptions",
    label: "Subscriptions",
    href: "/app/subscriptions",
    icon: CreditCard,
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.gg/echogpt",
    icon: MessageCircle,
    external: true,
  },
];
