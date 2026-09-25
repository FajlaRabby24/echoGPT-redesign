"use client";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/navItems";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50 pt-5 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-14">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <div className="w-9 h-9 rounded-xl bg-neutral-950 text-white flex items-center justify-center shadow-sm">
            <Zap className="w-4 h-4 fill-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-neutral-900 font-sans">
            EchoGPT
          </span>
        </Link>

        {/* Center Floating Glass Island (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
          {navItems.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm px-4 py-1.5 rounded-full transition-all duration-200 ${
                link.active
                  ? "font-semibold text-neutral-950 bg-neutral-100 shadow-xs"
                  : "font-medium text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50/60"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-950 px-3.5 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="bg-[#4F46E5] hover:bg-[#4338CA] active:scale-[0.98] text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-800 hover:bg-neutral-100 rounded-xl"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-neutral-200/80 shadow-xl flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-3 duration-200">
          {navItems.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                link.active
                  ? "bg-neutral-100 text-neutral-950 font-semibold"
                  : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-neutral-200/60 my-1" />
          <div className="flex flex-col gap-2 pt-1">
            <Link
              href="/auth/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-xl transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-medium rounded-xl shadow-sm transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
