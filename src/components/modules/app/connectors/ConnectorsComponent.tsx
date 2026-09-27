"use client";

import React, { useState } from "react";
import {
  Search,
  Check,
  RotateCw,
  Link2,
} from "lucide-react";
import { ConnectorItem, DEFAULT_CONNECTORS } from "@/lib/connectorsData";

// Vector / official icons render helper
function ConnectorIcon({ type }: { type: ConnectorItem["iconType"] }) {
  switch (type) {
    case "github":
      return (
        <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-2xs">
          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </div>
      );
    case "gmail":
      return (
        <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200/80 p-1 flex items-center justify-center shrink-0 shadow-2xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M1.5 5.5v13a2 2 0 0 0 2 2h2v-11l6.5 4.5 6.5-4.5v11h2a2 2 0 0 0 2-2v-13a2 2 0 0 0-3.15-1.63L12 9.5 3.65 3.87A2 2 0 0 0 1.5 5.5z"
            />
            <path fill="#EA4335" d="M18.5 4l-6.5 4.5L5.5 4h13z" />
          </svg>
        </div>
      );
    case "gcalendar":
      return (
        <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200/80 p-1 flex items-center justify-center shrink-0 shadow-2xs">
          <div className="w-6 h-6 rounded-md bg-[#4285F4] flex flex-col items-center justify-center text-white font-bold text-[9px] leading-none">
            <span className="text-[7px] uppercase font-semibold text-white/90">
              31
            </span>
          </div>
        </div>
      );
    case "gdrive":
      return (
        <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200/80 p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
          <svg className="w-5 h-5" viewBox="0 0 87.3 78">
            <path
              d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
              fill="#0066da"
            />
            <path
              d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z"
              fill="#00ac47"
            />
            <path
              d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
              fill="#ea4335"
            />
            <path
              d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
              fill="#00832d"
            />
            <path
              d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
              fill="#2684fc"
            />
            <path
              d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
              fill="#ffba00"
            />
          </svg>
        </div>
      );
    case "higgsfield":
      return (
        <div className="w-8 h-8 rounded-xl bg-[#CDFF00] p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
          <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 12c0-4 4-8 8-8s8 4 8 8-4 8-8 8" />
            <path d="M12 8c0-2 2-4 4-4" />
          </svg>
        </div>
      );
    case "notion":
      return (
        <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200/80 p-1 flex items-center justify-center shrink-0 shadow-2xs font-serif font-black text-neutral-900 text-sm">
          N
        </div>
      );
    default:
      return (
        <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
          <Link2 className="w-4 h-4" />
        </div>
      );
  }
}

export default function ConnectorsComponent() {
  const [connectors, setConnectors] = useState<ConnectorItem[]>(DEFAULT_CONNECTORS);
  const [connectingId, setConnectingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleConnect = (id: string) => {
    setConnectingId(id);

    setTimeout(() => {
      setConnectors((prev) =>
        prev.map((c) => {
          if (c.id === id) {
            const nextStatus =
              c.status === "connected" ? "disconnected" : "connected";
            return { ...c, status: nextStatus };
          }
          return c;
        })
      );
      setConnectingId(null);
    }, 600);
  };

  const filteredConnectors = connectors.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-6 sm:space-y-8 select-none">
      {/* ========================================================= */}
      {/* 1. Header & Search Bar                                    */}
      {/* ========================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
              Connected Apps & Services
            </h1>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-[#4F46E5] border border-indigo-100">
              Live
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal">
            Grant permission to external platforms to query live documentation, sync schedules, and trigger pipelines.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64 shrink-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search connectors..."
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl border border-neutral-200 bg-white placeholder:text-neutral-400 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
          />
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. Connectors Data Table (Light Theme)                    */}
      {/* ========================================================= */}
      <div className="w-full bg-white rounded-2xl border border-neutral-200/90 shadow-2xs overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 px-5 py-3 border-b border-neutral-100 bg-neutral-50/50 text-[11px] font-bold uppercase tracking-wider text-neutral-400 select-none">
          <div className="col-span-8 sm:col-span-6">Connector</div>
          <div className="col-span-2 sm:col-span-3 text-center sm:text-left">Type</div>
          <div className="col-span-2 sm:col-span-3 text-right">Status</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-neutral-100">
          {filteredConnectors.map((connector) => {
            const isConnected = connector.status === "connected";
            const isLoading = connectingId === connector.id;

            return (
              <div
                key={connector.id}
                className="grid grid-cols-12 items-center px-4 sm:px-5 py-3.5 sm:py-4 hover:bg-neutral-50/60 transition-colors"
              >
                {/* Column 1: Connector Icon & Name */}
                <div className="col-span-8 sm:col-span-6 flex items-center gap-3 min-w-0 pr-2">
                  <ConnectorIcon type={connector.iconType} />
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 truncate">
                      {connector.name}
                    </h3>
                    <p className="hidden sm:block text-[11px] text-neutral-400 truncate">
                      {connector.description}
                    </p>
                  </div>
                </div>

                {/* Column 2: Type & Custom Badge */}
                <div className="col-span-2 sm:col-span-3 flex items-center gap-1.5 text-center sm:text-left">
                  <span className="text-xs font-medium text-neutral-600">
                    {connector.type}
                  </span>
                  {connector.isCustom && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200/60">
                      Custom
                    </span>
                  )}
                </div>

                {/* Column 3: Action Button */}
                <div className="col-span-2 sm:col-span-3 flex justify-end">
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleToggleConnect(connector.id)}
                    className={`inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
                      isConnected
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100/80"
                        : "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-xs hover:shadow-md active:scale-95"
                    }`}
                  >
                    {isLoading ? (
                      <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    ) : isConnected ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Connected</span>
                      </>
                    ) : (
                      <span>Connect</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}

          {filteredConnectors.length === 0 && (
            <div className="py-12 text-center text-xs text-neutral-400">
              No connectors found matching &quot;{searchQuery}&quot;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}