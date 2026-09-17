"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ArrowRight, ChevronDown, ChevronUp, Code2, Check, Sparkles } from "lucide-react";
import { MATH_FORMULATION } from "@/data/scenarioData";

export const OptimizerIntro: React.FC = () => {
  const [showMaths, setShowMaths] = useState<boolean>(false);

  const inputs = [
    "Target Cars & Locations",
    "Driver Roster & Shift Limits",
    "Real-time Travel Times",
    "Seller Readiness Windows",
    "Vehicle Passenger Capacity",
    "Train & Taxi Schedules / Fares",
    "External Transporter Rates",
    "Vehicle Hold / Storage Fares",
  ];

  const outputs = [
    "Optimal Driver Assignments",
    "Travel Mode per Driver (Shuttle vs Train)",
    "Sequence of Drop-off Points",
    "Exact Arrival & Handover Slots",
    "Hold vs Collect Today Decisions",
    "Transporter Dispatch Triggers",
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <span>SECTION 05 • THE ENGINE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Instead of asking "What is the shortest route?" <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400">
              ask "What is the cheapest complete plan?"
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Shortest-distance algorithms fail because driver hourly wages, waiting delays, and public transit options alter the total cost equation. Route Portal optimizes the entire operational ecosystem.
          </p>
        </div>

        {/* Engine Pipeline Architecture */}
        <div className="bg-[#0E1017] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span className="text-sm font-semibold text-white">
                ROUTE PORTAL OPTIMISATION ENGINE
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              SOLVER: COST MINIMISATION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Inputs Column */}
            <div className="lg:col-span-4 bg-surface p-5 rounded-xl border border-white/10 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider pb-2 border-b border-white/10">
                OPERATIONAL INPUTS (8 VARIABLES)
              </div>
              <div className="space-y-2">
                {inputs.map((input, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white/5 text-xs font-medium text-slate-300 flex items-center justify-between"
                  >
                    <span>{input}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Central Engine Processing Hub */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-b from-indigo-950/60 to-slate-900 border border-indigo-500/30 text-center space-y-4 shadow-glow-sm">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-300">
                <Cpu className="w-7 h-7 animate-pulse-subtle" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">Cost Minimisation Engine</h4>
                <p className="text-xs text-indigo-200/80 mt-1">
                  Evaluates thousands of permutation plans per second
                </p>
              </div>

              <div className="px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-xs font-mono font-bold text-indigo-300">
                Minimise total collection cost
              </div>
            </div>

            {/* Outputs Column */}
            <div className="lg:col-span-4 bg-surface p-5 rounded-xl border border-white/10 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider pb-2 border-b border-white/10">
                OPTIMISED OUTPUTS (DISPATCH PLAN)
              </div>
              <div className="space-y-2">
                {outputs.map((output, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs font-medium text-emerald-300 flex items-center justify-between"
                  >
                    <span>{output}</span>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expandable Mathematical Formulation Card */}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => setShowMaths(!showMaths)}
              className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>TECHNICAL SPECIFICATION • MATHEMATICAL FORMULATION</span>
              </div>
              <div className="flex items-center space-x-1 font-semibold text-indigo-400">
                <span>{showMaths ? "Hide the maths" : "Show the maths"}</span>
                {showMaths ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            <AnimatePresence>
              {showMaths && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 p-6 rounded-xl bg-[#06070A] border border-indigo-500/30 space-y-4 font-mono text-xs text-slate-300">
                    <div className="text-amber-400 font-bold border-b border-white/10 pb-2">
                      // OBJECTIVE FUNCTION
                    </div>
                    <div className="p-3 rounded bg-black/60 text-emerald-400 border border-white/10 overflow-x-auto">
                      {MATH_FORMULATION.objective}
                    </div>

                    <div className="text-slate-400 whitespace-pre-line leading-relaxed text-[11px]">
                      {MATH_FORMULATION.explanation}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
