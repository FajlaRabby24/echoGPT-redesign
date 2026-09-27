"use client";

import React, { useState } from "react";
import { X, Globe, AlertCircle, RotateCw } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ConnectorItem } from "@/lib/connectorsData";

interface AddConnectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddConnector: (connector: ConnectorItem) => void;
}

export default function AddConnectorModal({
  isOpen,
  onClose,
  onAddConnector,
}: AddConnectorModalProps) {
  const [name, setName] = useState("");
  const [serverUrl, setServerUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please specify a name for the custom connector.");
      return;
    }

    if (!serverUrl.trim()) {
      setError("Please provide an MCP server URL.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newConnector: ConnectorItem = {
        id: `custom-${Date.now()}`,
        name: name.trim(),
        description: `Custom MCP connector endpoint at ${serverUrl.trim()}`,
        type: "Web",
        isCustom: true,
        status: "connected",
        iconType: "higgsfield",
      };

      onAddConnector(newConnector);
      setIsSubmitting(false);
      setName("");
      setServerUrl("");
      onClose();
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[480px] bg-white rounded-3xl border border-neutral-200/90 shadow-2xl shadow-neutral-900/15 p-6 sm:p-7 z-10 space-y-5"
          >
            {/* Header: Title and Close button */}
            <div className="flex items-center justify-between pb-1">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900">
                Add custom connector
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-neutral-200/80 bg-neutral-50 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Subtitle with links */}
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              Connect EchoGPT to your data and tools.{" "}
              <Link
                href="/faq"
                className="font-medium text-[#4F46E5] hover:text-[#4338CA] underline underline-offset-2"
              >
                Learn more about connectors
              </Link>{" "}
              or get started with{" "}
              <button
                type="button"
                onClick={onClose}
                className="font-medium text-[#4F46E5] hover:text-[#4338CA] underline underline-offset-2 cursor-pointer"
              >
                pre-built ones
              </button>
              .
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Name */}
              <div className="space-y-1.5">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                  }}
                  placeholder="Name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200/90 bg-neutral-50/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
                />
                <p className="text-[11px] text-neutral-400">
                  Shown in the connectors list.
                </p>
              </div>

              {/* Field 2: MCP Server URL */}
              <div className="space-y-1.5">
                <input
                  type="text"
                  value={serverUrl}
                  onChange={(e) => {
                    setServerUrl(e.target.value);
                    setError("");
                  }}
                  placeholder="MCP server URL"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200/90 bg-neutral-50/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
                />
                <p className="text-[11px] text-neutral-400 leading-normal">
                  The HTTPS address where the server accepts MCP requests, for example{" "}
                  <span className="font-mono text-neutral-600">https://mcp.example.com/mcp</span>.
                </p>
              </div>

              {/* Warning Notice matching screenshot */}
              <div className="p-3 rounded-xl bg-neutral-50/80 border border-neutral-100 text-[11px] text-neutral-500 font-normal leading-relaxed space-y-1.5">
                <p>
                  Only use connectors from developers you trust. EchoGPT does not control which tools developers make available and cannot verify that they will work as intended or that they won&apos;t change.
                </p>
                <p>
                  Building an MCP server?{" "}
                  <Link
                    href="/faq"
                    className="font-medium text-[#4F46E5] hover:text-[#4338CA] underline underline-offset-2"
                  >
                    Report issues and subscribe to updates here
                  </Link>
                </p>
              </div>

              {error && (
                <p className="text-xs text-red-500 font-medium">{error}</p>
              )}

              {/* Actions Footer */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !serverUrl.trim()}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <RotateCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Validating...</span>
                    </>
                  ) : (
                    <span>Continue</span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
