"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  workspaceNavGroup,
  aiToolsNavGroup,
  platformNavGroup,
  utilityNavItems,
  moreNavItems,
  SidebarNavItem,
  SidebarNavGroup,
} from "@/lib/sidebarNavLinks";
import {
  Plus,
  ChevronDown,
  MoreHorizontal,
  ExternalLink,
  X,
} from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  onClose?: () => void;
  showCloseButton?: boolean;
}

// Single Navigation Link Item Component
const NavLink = ({
  item,
  isActive,
  onClick,
}: {
  item: SidebarNavItem;
  isActive: boolean;
  onClick?: () => void;
}) => {
  const Icon = item.icon;

  const content = (
    <div
      className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-indigo-50/90 text-indigo-700 font-semibold shadow-2xs"
          : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/80"
      }`}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <Icon
          className={`w-4 h-4 shrink-0 transition-colors ${
            isActive
              ? "text-indigo-600"
              : "text-neutral-500 group-hover:text-neutral-900"
          }`}
        />
        <span className="truncate">{item.label}</span>
      </div>

      {item.badge && (
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
            isActive
              ? "bg-indigo-600 text-white"
              : "bg-neutral-200/80 text-neutral-600"
          }`}
        >
          {item.badge}
        </span>
      )}

      {item.external && (
        <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
      )}
    </div>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} onClick={onClick} className="block">
      {content}
    </Link>
  );
};

// Nav Category Section Component
const NavSection = ({
  group,
  currentPath,
  onItemClick,
}: {
  group: SidebarNavGroup;
  currentPath: string;
  onItemClick?: () => void;
}) => {
  return (
    <div className="space-y-1">
      {group.category && (
        <h4 className="px-3 text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5 select-none">
          {group.category}
        </h4>
      )}
      <div className="space-y-0.5">
        {group.items.map((item) => (
          <NavLink
            key={item.id}
            item={item}
            isActive={currentPath === item.href}
            onClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default function Sidebar({
  onClose,
  showCloseButton = false,
}: SidebarProps) {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(true);

  return (
    <div className="flex flex-col h-full w-full bg-white border-r border-neutral-200/80 select-none">
      {/* 1. Header: Brand Logo & Optional Close Button on Mobile */}
      <div className="p-4 sm:p-5 pb-3 flex items-center justify-between border-b border-neutral-100">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2 group"
        >
          <div className="relative w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <Image
              fill
              alt="EchoGPT logo"
              loading="eager"
              src="/EchoGPT.png"
              sizes="32px"
              className="object-contain"
            />
          </div>
          <span className="font-bold text-base text-neutral-900 tracking-tight">
            EchoGPT
          </span>
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100">
            2.0
          </span>
        </Link>

        {showCloseButton && onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 2. Primary Action: + New Chat Button */}
      <div className="px-3 sm:px-4 pt-3.5 pb-2">
        <Link
          href="/app"
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New Chat</span>
        </Link>
      </div>

      {/* 3. Scrollable Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 space-y-5 scrollbar-thin scrollbar-thumb-neutral-200">
        {/* Workspace Nav Group */}
        <NavSection
          group={workspaceNavGroup}
          currentPath={pathname}
          onItemClick={onClose}
        />

        {/* AI Tools Suite Group */}
        <NavSection
          group={aiToolsNavGroup}
          currentPath={pathname}
          onItemClick={onClose}
        />

        {/* Extensions & Platform Group */}
        <NavSection
          group={platformNavGroup}
          currentPath={pathname}
          onItemClick={onClose}
        />
      </div>

      {/* 4. Bottom Divider & Utility Navigation */}
      <div className="p-3 sm:p-4 border-t border-neutral-200/80 bg-neutral-50/50 space-y-1">
        {/* Support & Settings */}
        <div className="space-y-0.5 mb-1">
          {utilityNavItems.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              isActive={pathname === item.href}
              onClick={onClose}
            />
          ))}
        </div>

        {/* Expandable "More" Accordion */}
        <div className="pt-1">
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <MoreHorizontal className="w-4 h-4 text-neutral-500" />
              <span>More</span>
            </div>
            <ChevronDown
              className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                moreOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Sub-menu items */}
          {moreOpen && (
            <div className="pl-3.5 pt-1 space-y-0.5 border-l border-neutral-200/80 ml-4.5 my-1">
              {moreNavItems.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  isActive={pathname === item.href}
                  onClick={onClose}
                />
              ))}
            </div>
          )}
        </div>

        {/* User Profile Mini Capsule */}
        <div className="mt-3 pt-2.5 border-t border-neutral-200/80 flex items-center justify-between px-1">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold text-xs flex items-center justify-center shrink-0 ring-1 ring-neutral-200">
              U
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-neutral-900 truncate">
                Alex Johnson
              </p>
              <p className="text-[10px] text-neutral-500 truncate">
                alex@echogpt.live
              </p>
            </div>
          </div>
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
            PRO
          </span>
        </div>
      </div>
    </div>
  );
}
