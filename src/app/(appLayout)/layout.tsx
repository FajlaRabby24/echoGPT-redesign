import AppShell from "@/components/modules/app/AppShell";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "EchoGPT - AI Workspace",
  description: "Unified multi-model AI assistant and creator workspace.",
};

export default function AppLayout({ children }: LayoutProps<"/">) {
  return <AppShell>{children}</AppShell>;
}

