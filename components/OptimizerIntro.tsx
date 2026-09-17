"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ChevronDown, ChevronUp, Code2, Check } from "lucide-react";
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#08090D] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-700 dark:text-sky-400 font-bold">
            <span>SECTION 05 • THE ENGINE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Instead of asking "What is the shortest route?" <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-emerald-600 dark:from-sky-400 dark:via-indigo-300 dark:to-emerald-400">
              ask "What is the cheapest complete plan?"
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Shortest-distance algorithms fail because driver hourly wages, waiting delays, and public transit options alter the total cost equation. Route Portal optimizes the entire operational ecosystem.
          </p>
        </div>

        {/* Engine Pipeline Architecture */}
        <div className="bg-slate-50/90 dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-10 space-y-8 shadow-card-light dark:shadow-none">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                ROUTE PORTAL OPTIMISATION ENGINE CONCEPT
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-bold">
              SOLVER: COST MINIMISATION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Inputs Column */}
            <div className="lg:col-span-4 bg-white dark:bg-surface p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-3 shadow-sm dark:shadow-none">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-200 dark:border-white/10 font-semibold">
                OPERATIONAL INPUTS (8 VARIABLES)
              </div>
              <div className="space-y-2">
                {inputs.map((input, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between"
                  >
                    <span>{input}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Central Engine Processing Hub with Exact Requested Wording */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-b from-indigo-50 via-white to-slate-50 dark:from-indigo-950/60 dark:to-slate-900 border border-indigo-200 dark:border-indigo-500/30 text-center space-y-4 shadow-sm dark:shadow-glow-sm">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 dark:bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                <Cpu className="w-7 h-7 animate-pulse-subtle" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Cost Minimisation Engine</h4>
                <p className="text-xs font-medium text-slate-700 dark:text-indigo-200/90 mt-1">
                  Evaluates feasible collection plans against total operational cost
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono italic mt-1.5">
                  Prototype demonstrates the decision logic using an illustrative five-car scenario.
                </p>
              </div>

              <div className="px-4 py-2 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300">
                Minimise total collection cost
              </div>
            </div>

            {/* Outputs Column */}
            <div className="lg:col-span-4 bg-white dark:bg-surface p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-3 shadow-sm dark:shadow-none">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-200 dark:border-white/10 font-semibold">
                OPTIMISED OUTPUTS (DISPATCH PLAN)
              </div>
              <div className="space-y-2">
                {outputs.map((output, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/20 text-xs font-medium text-emerald-800 dark:text-emerald-300 flex items-center justify-between"
                  >
                    <span>{output}</span>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expandable Mathematical Formulation Card */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10">
            <button
              onClick={() => setShowMaths(!showMaths)}
              className="w-full py-3 px-4 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center justify-between transition-colors shadow-sm dark:shadow-none"
            >
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>TECHNICAL SPECIFICATION • MATHEMATICAL FORMULATION</span>
              </div>
              <div className="flex items-center space-x-1 font-semibold text-indigo-600 dark:text-indigo-400">
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
                  <div className="mt-4 p-6 rounded-xl bg-slate-100 dark:bg-[#06070A] border border-slate-300 dark:border-indigo-500/30 space-y-4 font-mono text-xs text-slate-800 dark:text-slate-300">
                    <div className="text-amber-700 dark:text-amber-400 font-bold border-b border-slate-300 dark:border-white/10 pb-2">
                      // OBJECTIVE FUNCTION
                    </div>
                    <div className="p-3 rounded bg-white dark:bg-black/60 text-emerald-800 dark:text-emerald-400 border border-slate-300 dark:border-white/10 overflow-x-auto font-bold">
                      {MATH_FORMULATION.objective}
                    </div>

                    <div className="text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed text-[11px]">
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
