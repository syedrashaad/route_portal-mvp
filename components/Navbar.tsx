"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Compass, Sparkles } from "lucide-react";

interface NavbarProps {
  currentSection: number;
  totalSections: number;
  onSkipToDemo: () => void;
  onOpenAnalysis: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  totalSections,
  onSkipToDemo,
  onOpenAnalysis,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090D]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-panel"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Concept Tag */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm tracking-wider">
            RP
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold tracking-tight text-white text-sm sm:text-base">
                ROUTE PORTAL
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                CONCEPT DEMO
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Optimising vehicle collection for CarPlanet
            </p>
          </div>
        </div>

        {/* Right Section: Progress & Actions */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Section Indicator */}
          <div className="hidden md:flex items-center space-x-2 font-mono text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            <span>
              {String(currentSection).padStart(2, "0")} / {String(totalSections).padStart(2, "0")}
            </span>
          </div>

          {/* Analysis Modal Trigger */}
          <button
            onClick={onOpenAnalysis}
            className="text-xs font-medium text-slate-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 hidden sm:inline-flex items-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>View Analysis</span>
          </button>

          {/* Skip to Demo CTA */}
          <button
            onClick={onSkipToDemo}
            className="text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 shadow-glow-sm hover:shadow-indigo-500/25 active:scale-95"
          >
            <span>Skip to demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
