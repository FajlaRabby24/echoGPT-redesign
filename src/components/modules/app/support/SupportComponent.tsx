"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  ChevronRight,
  Send,
  CheckCircle2,
  X,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function SupportComponent() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !senderEmail.trim()) return;

    setIsSent(true);
    setTimeout(() => {
      setIsEmailModalOpen(false);
      setIsSent(false);
      setSubject("");
      setMessage("");
      setSenderEmail("");
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10 sm:py-16 space-y-10 sm:space-y-12 select-none">
      {/* ========================================================= */}
      {/* 1. Header: Talk with Our Team (Faithfully matching image) */}
      {/* ========================================================= */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
          Talk with Fajla Rabby
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-normal">
          Have questions or need assistance? Reach out directly to our engineering & product team.
        </p>
      </div>

      {/* ========================================================= */}
      {/* 2. Section: YOUR PREFERRED OPTION                         */}
      {/* ========================================================= */}
      <div className="space-y-3">
        <span className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
          Your Preferred Option
        </span>

        {/* Email Us Wide Card */}
        <Link
          href="mailto:fajlarabby.dev@gmail.com"
          className="w-full p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer text-left"
        >
          <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-neutral-50 dark:bg-neutral-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/60 border border-neutral-200/80 dark:border-neutral-700 group-hover:border-indigo-100 dark:group-hover:border-indigo-900 text-neutral-700 dark:text-neutral-300 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 flex items-center justify-center transition-colors shrink-0 shadow-2xs">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-0.5 min-w-0">
              <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors">
                Email Us
              </h3>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 font-normal">
                fajlarabby.dev@gmail.com · We will aim to respond in 1 day
              </p>
            </div>
          </div>

          <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all shrink-0" />
        </Link>
      </div>

      {/* ========================================================= */}
      {/* 3. Section: FOLLOW US & CONNECT                           */}
      {/* ========================================================= */}
      <div className="space-y-3">
        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
          Follow Us & Connect
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Contact Us Card (Updated from WhatsApp to redirect to contact portfolio) */}
          <Link
            href="https://fajlarabby.vercel.app/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-2xl bg-neutral-50 dark:bg-neutral-800 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/60 border border-neutral-200/80 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Contact Us
                </h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 font-normal truncate">
                  Get in touch directly at fajlarabby.vercel.app/#contact
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
          </Link>

          {/* LinkedIn Card */}
          <Link
            href="https://www.linkedin.com/in/FajlaRabby24"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 hover:border-sky-400 dark:hover:border-sky-500 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-2xl bg-neutral-50 dark:bg-neutral-800 group-hover:bg-sky-50 dark:group-hover:bg-sky-950/60 border border-neutral-200/80 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="space-y-0.5 min-w-0">
                <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 font-normal truncate">
                  Connect with us professionally on LinkedIn.
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
          </Link>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. Interactive Email Dispatch Modal                       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEmailModalOpen(false)}
              className="absolute inset-0 bg-neutral-900/40 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-white rounded-3xl border border-neutral-200/90 shadow-2xl p-6 sm:p-7 z-10 space-y-5"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-neutral-900">
                      Send Support Message
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Our team will reply to your inbox within 24 hours
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsEmailModalOpen(false)}
                  className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {isSent ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-neutral-900">
                    Message Dispatched
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Thank you! We will reply to {senderEmail} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendEmail} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-700">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-neutral-200 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Question regarding API or billing"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-neutral-200 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-700">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you today?"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-neutral-200 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => setIsEmailModalOpen(false)}
                      className="px-4 py-2 rounded-xl border border-neutral-200 text-neutral-600 text-xs sm:text-sm font-semibold hover:bg-neutral-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
