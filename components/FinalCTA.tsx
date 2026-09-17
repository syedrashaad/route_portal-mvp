"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Mail, FileText, Heart } from "lucide-react";

interface FinalCTAProps {
  onOpenAnalysis: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAnalysis }) => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#06070A] border-t border-white/5 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 text-center relative z-10">
        {/* Main Headline */}
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span>ROUTE PORTAL • EXECUTIVE SUMMARY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Don't optimise the route. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-slate-100 to-sky-300">
              Optimise the operation.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            This prototype is based on an illustrative five-car scenario. The next step would be replacing the assumptions with CarPlanet's real collection, cost and timing data.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAnalysis}
            className="px-6 py-3.5 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-white/20 active:scale-95"
          >
            <FileText className="w-4 h-4 text-slate-700" />
            <span>View the analysis</span>
          </button>

          <a
            href="mailto:mehvish@example.com?subject=Route%20Portal%20-%20CarPlanet%20Product%20Discussion"
            className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 flex items-center space-x-2 shadow-glow-sm hover:shadow-indigo-500/25 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Contact me</span>
            <ArrowUpRight className="w-4 h-4 text-indigo-200" />
          </a>
        </div>

        {/* Creator Attribution */}
        <div className="pt-16 border-t border-white/10 space-y-3">
          <div className="text-sm font-semibold text-white tracking-wide">
            Built by Mehivish
          </div>
          <div className="text-xs font-mono text-slate-400">
            Product × Technology × Optimisation
          </div>
          <p className="text-[11px] text-slate-500 font-mono italic max-w-lg mx-auto pt-2">
            Created as an interactive product concept for CarPlanet operational vehicle collection.
          </p>
        </div>
      </div>
    </section>
  );
};
