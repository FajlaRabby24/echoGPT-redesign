"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight, X, KeyRound, CheckCircle2, RotateCw } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface EmailAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "login" | "register";
}

type AuthStep = "email" | "otp" | "success";

export default function EmailAuthModal({
  isOpen,
  onClose,
  mode = "login",
}: EmailAuthModalProps) {
  const router = useRouter();
  const [step, setStep] = useState<AuthStep>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Reset state when opening modal
  useEffect(() => {
    if (isOpen) {
      setStep("email");
      setEmail("");
      setOtp(["", "", "", "", "", ""]);
      setError("");
      setIsLoading(false);
      setTimeout(() => emailInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Focus first OTP input when transitioning to 'otp' step
  useEffect(() => {
    if (step === "otp") {
      setTimeout(() => {
        otpInputsRef.current[0]?.focus();
      }, 100);
    }
  }, [step]);

  // Handle email submit
  const handleEmailSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
    }, 400);
  };

  // Handle individual OTP digit change
  const handleOtpChange = (index: number, val: string) => {
    // Only accept numeric or clean single character
    const cleaned = val.replace(/[^0-9]/g, "");

    // Handling paste of multi-character code
    if (cleaned.length > 1) {
      const nextOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        if (cleaned[i]) nextOtp[i] = cleaned[i];
      }
      setOtp(nextOtp);
      const nextFocus = Math.min(cleaned.length, 5);
      otpInputsRef.current[nextFocus]?.focus();
      return;
    }

    const nextOtp = [...otp];
    nextOtp[index] = cleaned;
    setOtp(nextOtp);
    setError("");

    // Automatically advance focus
    if (cleaned && index < 5) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleOtpSubmit();
    }
  };

  // Handle OTP submission & set auth cookies
  const handleOtpSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length < 6) {
      setError("Please enter all 6 digits of the OTP");
      return;
    }

    setIsLoading(true);
    setError("");

    setTimeout(() => {
      // Set auth cookies for session tracking
      const maxAgeSeconds = 7 * 24 * 60 * 60; // 7 days
      document.cookie = `echogpt_auth_token=session_${Date.now()}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
      document.cookie = `echogpt_user_email=${encodeURIComponent(
        email.trim()
      )}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
      document.cookie = `echogpt_is_logged_in=true; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;

      setIsLoading(false);
      setStep("success");

      // Redirect to /app after brief confirmation
      setTimeout(() => {
        onClose();
        router.push("/app");
      }, 900);
    }, 500);
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
            className="relative w-full max-w-[400px] bg-white rounded-3xl border border-neutral-200/90 shadow-2xl shadow-neutral-900/15 p-6 sm:p-7 z-10 space-y-5"
          >
            {/* Close Icon Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Brand Logo & Header */}
            <div className="text-center space-y-2 pt-1">
              <div className="flex items-center justify-center gap-2">
                <div className="relative w-7 h-7 rounded-xl overflow-hidden shrink-0">
                  <Image
                    fill
                    src="/EchoGPT.svg"
                    alt="EchoGPT"
                    sizes="28px"
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-lg text-neutral-900">
                  EchoGPT
                </span>
              </div>

              {step === "email" && (
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    {mode === "login"
                      ? "Sign in with Email"
                      : "Create your account"}
                  </h3>
                  <p className="text-xs text-neutral-500 font-normal">
                    Enter your email to receive a 6-digit access code
                  </p>
                </div>
              )}

              {step === "otp" && (
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    Verification Code
                  </h3>
                  <p className="text-xs text-neutral-500 font-normal">
                    Enter any 6-digit number sent to{" "}
                    <span className="font-semibold text-neutral-800">
                      {email}
                    </span>
                  </p>
                </div>
              )}

              {step === "success" && (
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-emerald-600">
                    Authenticated!
                  </h3>
                  <p className="text-xs text-neutral-500 font-normal">
                    Redirecting to your workspace...
                  </p>
                </div>
              )}
            </div>

            {/* ========================================================= */}
            {/* STEP 1: Email Input Form                                  */}
            {/* ========================================================= */}
            {step === "email" && (
              <form onSubmit={handleEmailSubmit} className="space-y-4 pt-1">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700 block">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      ref={emailInputRef}
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 pl-10 rounded-xl bg-neutral-50/70 border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-all ${
                        error
                          ? "border-red-400 focus:border-red-500 ring-2 ring-red-500/10"
                          : "border-neutral-200 focus:border-[#4F46E5] focus:bg-white focus:ring-2 focus:ring-[#4F46E5]/10"
                      }`}
                    />
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {error && (
                    <p className="text-[11px] text-red-500 font-medium pt-0.5">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/25 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <RotateCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Continue with code</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* ========================================================= */}
            {/* STEP 2: 6-Digit OTP Form                                  */}
            {/* ========================================================= */}
            {step === "otp" && (
              <form onSubmit={handleOtpSubmit} className="space-y-4 pt-1">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-[#4F46E5]" />
                      6-Digit Security Code
                    </label>
                    <button
                      type="button"
                      onClick={() => setStep("email")}
                      className="text-[11px] text-[#4F46E5] hover:text-[#4338CA] hover:underline cursor-pointer"
                    >
                      Change email
                    </button>
                  </div>

                  {/* 6 Digit Inputs */}
                  <div className="flex items-center justify-center gap-2 sm:gap-2.5">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={(el) => {
                          otpInputsRef.current[idx] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                        className="w-10 h-12 sm:w-11 sm:h-13 rounded-xl border border-neutral-200 bg-neutral-50/60 focus:bg-white text-center text-lg font-bold text-neutral-900 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/15 transition-all"
                      />
                    ))}
                  </div>

                  {error && (
                    <p className="text-[11px] text-red-500 font-medium text-center pt-1">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading || otp.join("").length < 6}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/25 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <RotateCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Verify & Enter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* ========================================================= */}
            {/* STEP 3: Success Animation                                 */}
            {/* ========================================================= */}
            {step === "success" && (
              <div className="py-6 flex flex-col items-center justify-center space-y-2 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-xs text-neutral-500">
                  Logged in as{" "}
                  <span className="font-semibold text-neutral-800">
                    {email}
                  </span>
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
