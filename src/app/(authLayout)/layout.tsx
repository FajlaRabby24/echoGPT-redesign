import AppShell from "@/components/modules/app/AppShell";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "EchoGPT - Auth",
  description: "Unified multi-model AI assistant and creator workspace.",
};

export default function AppLayout({ children }: LayoutProps<"/">) {
  return <main>{children}</main>
}

