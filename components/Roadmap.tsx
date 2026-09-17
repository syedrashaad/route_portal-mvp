"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { ROADMAP_PHASES } from "@/data/scenarioData";

export const Roadmap: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
            <span>SECTION 09 • IMPLEMENTATION ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Start with the process. <br />
            Measure reality. <span className="text-indigo-400">Then optimise.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A practical, phased rollout built for operational adoption rather than high-risk enterprise transformation.
          </p>
        </div>

        {/* Horizontal Phased Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_PHASES.map((phase, idx) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-6 rounded-2xl border flex flex-col justify-between space-y-6 relative ${
                idx === 0
                  ? "bg-gradient-to-b from-indigo-950/30 to-surface border-indigo-500/40 shadow-glow-sm"
                  : "bg-surface border-white/10"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20">
                    {phase.phase}
                  </span>
                  {idx === 0 && (
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">
                      IMMEDIATE VALUE
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white">
                  {phase.title}
                </h3>

                <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
                  {phase.points.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-indigo-400 font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-slate-500">
                Phase {idx + 1} Target Outcome
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
