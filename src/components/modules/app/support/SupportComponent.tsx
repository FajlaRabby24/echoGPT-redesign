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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
          Talk with Our Team
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 font-normal">
          Have questions or need assistance? Reach out directly to our engineering & product team.
        </p>
      </div>

      {/* ========================================================= */}
      {/* 2. Section: YOUR PREFERRED OPTION                         */}
      {/* ========================================================= */}
      <div className="space-y-3">
        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
          Your Preferred Option
        </span>

        {/* Email Us Wide Card */}
        <Link
          href="mailto:fajlarabby.dev@gmail.com"
          className="w-full p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 hover:border-indigo-400 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer text-left"
        >
          <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-neutral-50 group-hover:bg-indigo-50 border border-neutral-200/80 group-hover:border-indigo-100 text-neutral-700 group-hover:text-[#4F46E5] flex items-center justify-center transition-colors shrink-0 shadow-2xs">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-0.5 min-w-0">
              <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-[#4F46E5] transition-colors">
                Email Us
              </h3>
              <p className="text-xs text-neutral-400 font-normal">
                fajlarabby.dev@gmail.com · We will aim to respond in 1 day
              </p>
            </div>
          </div>

          <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[#4F46E5] group-hover:translate-x-0.5 transition-all shrink-0" />
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
          {/* Facebook Card */}
          <Link
            href="https://www.facebook.com/fajla.rabby.305400"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 hover:border-blue-400 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-2xl bg-neutral-50 group-hover:bg-blue-50 border border-neutral-200/80 text-neutral-700 group-hover:text-blue-600 flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="space-y-0.5 min-w-0">
                <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-blue-600 transition-colors">
                  Facebook
                </h3>
                <p className="text-xs text-neutral-400 font-normal truncate">
                  Follow us on Facebook for the latest updates and news!
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
          </Link>

          {/* WhatsApp Card (Updated from Instagram) */}
          <Link
            href="https://wa.me/8801307495864"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 hover:border-emerald-400 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-2xl bg-neutral-50 group-hover:bg-emerald-50 border border-neutral-200/80 text-neutral-700 group-hover:text-emerald-600 flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div className="space-y-0.5 min-w-0">
                <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-emerald-600 transition-colors">
                  WhatsApp
                </h3>
                <p className="text-xs text-neutral-400 font-normal truncate">
                  Chat directly via WhatsApp at +880 1307-495864
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
          </Link>

          {/* LinkedIn Card */}
          <Link
            href="https://www.linkedin.com/in/FajlaRabby24"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 hover:border-sky-400 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-2xl bg-neutral-50 group-hover:bg-sky-50 border border-neutral-200/80 text-neutral-700 group-hover:text-sky-600 flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="space-y-0.5 min-w-0">
                <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-sky-600 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-xs text-neutral-400 font-normal truncate">
                  Connect with us professionally on LinkedIn.
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
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
