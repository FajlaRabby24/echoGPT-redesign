"use client";

import { footerColumns } from "@/lib/footerData";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

// Official Social SVG Icons
const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const XTwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative px-4 bg-white overflow-hidden">
      {/* Outer Banner Card with Vibrant Multi-Chromatic Ambient Glow (Exact Hero Palette) */}
      <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-white/70 backdrop-blur-3xl p-8 sm:p-14 lg:p-18 shadow-[0_24px_70px_rgba(0,0,0,0.06)] border border-neutral-200/90">
        {/* Exact Hero Multi-Chromatic Ambient Mesh Glow Aura */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        >
          {/* Top-Left Electric Royal Blue Swoop (#0055FF) */}
          <div className="absolute -top-[15%] -left-[10%] w-[480px] sm:w-[680px] h-[380px] sm:h-[500px] bg-[#0055FF] rounded-full filter blur-[80px] sm:blur-[120px] opacity-75" />

          {/* Lower-Left Cyan / Turquoise Accent (#00D4FF) */}
          <div className="absolute top-[20%] left-[0%] w-[380px] sm:w-[520px] h-[300px] sm:h-[400px] bg-[#00D4FF] rounded-full filter blur-[70px] sm:blur-[110px] opacity-65" />

          {/* Top Center Radiant Magenta / Hot Pink Core (#FF1E80) */}
          <div className="absolute -top-[10%] left-[25%] w-[400px] sm:w-[580px] h-[320px] sm:h-[440px] bg-[#FF1E80] rounded-full filter blur-[85px] sm:blur-[125px] opacity-70" />

          {/* Top-Right Sunset Orange & Tangerine Swoop (#FF7A00) */}
          <div className="absolute -top-[15%] -right-[10%] w-[500px] sm:w-[720px] h-[400px] sm:h-[540px] bg-[#FF7A00] rounded-full filter blur-[85px] sm:blur-[130px] opacity-75" />

          {/* Mid-Right Radiant Violet / Indigo Wing (#7000FF) */}
          <div className="absolute top-[15%] right-[2%] w-[420px] sm:w-[600px] h-[340px] sm:h-[460px] bg-[#7000FF] rounded-full filter blur-[80px] sm:blur-[120px] opacity-70" />

          {/* Upper-Right Golden Amber Accent (#FFAA00) */}
          <div className="absolute top-[0%] right-[20%] w-[300px] sm:w-[440px] h-[240px] sm:h-[340px] bg-[#FFAA00] rounded-full filter blur-[70px] sm:blur-[100px] opacity-65" />

          {/* Soft White Frosting Overlay to ensure optimal contrast & readability */}
          <div className="absolute inset-0 bg-white/55 backdrop-blur-2xl" />
        </div>

        {/* Top CTA Banner Section */}
        <div className="relative z-10 max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-[#111116] leading-tight sm:leading-[1.12]">
            Ready to start elevating <br className="hidden sm:inline" />
            your AI workflows?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-normal leading-relaxed max-w-xl">
            Join thousands of creators, engineers, and teams building faster
            with EchoGPT.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(79,70,229,0.35)] hover:shadow-[0_15px_30px_-5px_rgba(79,70,229,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 text-white/90" />
            </Link>

            <Link
              href="#faq"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/85 hover:bg-white text-neutral-800 font-semibold text-sm sm:text-base border border-neutral-200/90 shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore FAQs</span>
            </Link>
          </div>
        </div>

        {/* Bottom Grid: Newsletter + Navigation Columns */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-12 border-t border-neutral-300/60">
          {/* Newsletter Column */}
          <div className="lg:col-span-5 max-w-md">
            <h3 className="text-base font-bold text-neutral-900 mb-2 tracking-tight">
              Newsletter
            </h3>
            <p className="text-sm text-neutral-600 font-normal leading-relaxed mb-5">
              We&apos;d love to share our latest product updates, new foundation
              models, and AI productivity guides with you in our monthly
              newsletter.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2.5"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/90 text-neutral-900 placeholder-neutral-500 border border-neutral-300/80 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs backdrop-blur-md transition-all"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] transition-all duration-200 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerColumns.map((col, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-sm font-bold text-neutral-900 tracking-tight">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-600 hover:text-neutral-950 font-medium transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons & Copyright Row */}
        <div className="relative z-10 mt-14 pt-6 border-t border-neutral-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
          <p>© 2026 EchoGPT Inc. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:support@echogpt.live"
              aria-label="Email"
              className="w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-center text-neutral-700 hover:text-indigo-600 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-center text-neutral-700 hover:text-indigo-600 transition-all"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-center text-neutral-700 hover:text-indigo-600 transition-all"
            >
              <XTwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-center text-neutral-700 hover:text-indigo-600 transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
