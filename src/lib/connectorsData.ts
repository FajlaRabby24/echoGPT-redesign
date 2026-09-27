export interface ConnectorItem {
  id: string;
  name: string;
  description: string;
  type: string;
  isCustom?: boolean;
  status: "connected" | "disconnected";
  iconType: "github" | "gmail" | "gcalendar" | "gdrive" | "higgsfield" | "claude" | "chatgpt" | "slack" | "notion";
}

export const DEFAULT_CONNECTORS: ConnectorItem[] = [
  {
    id: "github",
    name: "GitHub Integration",
    description: "Sync repositories, pull requests, commits, and code review workflows directly with AI.",
    type: "Web",
    status: "disconnected",
    iconType: "github",
  },
  {
    id: "gmail",
    name: "Gmail",
    description: "Read, summarize, triage, and draft email responses using your preferred AI models.",
    type: "Web",
    status: "disconnected",
    iconType: "gmail",
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    description: "Schedule events, optimize meeting schedules, and query daily agendas seamlessly.",
    type: "Web",
    status: "disconnected",
    iconType: "gcalendar",
  },
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Search, analyze, and cite Google Docs, Sheets, and Slides in your conversations.",
    type: "Web",
    status: "disconnected",
    iconType: "gdrive",
  },
  {
    id: "higgsfield",
    name: "HiggsField",
    description: "Generate cinema-quality generative video motion clips directly into your workspace.",
    type: "Web",
    isCustom: true,
    status: "disconnected",
    iconType: "higgsfield",
  },
  {
    id: "notion",
    name: "Notion Workspace",
    description: "Access team wikis, project roadmaps, and knowledge bases for contextual synthesis.",
    type: "Web",
    status: "connected",
    iconType: "notion",
  },
];
