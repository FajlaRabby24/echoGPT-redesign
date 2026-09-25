import Sidebar from "@/components/modules/chat/Sidebar";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "EchoGPT",
  description: "AI Powered Assistant",
};

export default function ChatLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* 1. Desktop Sidebar (Sticky left) */}
      <aside className="hidden md:flex flex-col w-64 fixed inset-y-0 z-40 border-r border-border/30">
        <Sidebar />
      </aside>

      {/* 2. Main Content Column */}
      <main className="flex-1 flex flex-col md:pl-64 min-w-0">{children}</main>
    </div>
  );
}
