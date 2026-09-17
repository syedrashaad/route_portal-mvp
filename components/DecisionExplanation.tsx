"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Sparkles } from "lucide-react";
import { LEICESTER_DECISION } from "@/data/scenarioData";

export const DecisionExplanation: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#08090D] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header with Exact Requested Framing */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SECTION 07 • EXPLAINABLE DECISION LOGIC</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            How the optimisation layer could challenge a proximity-based plan
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Leicester is not removed because it is badly routed. It is removed because keeping it on the shared vehicle imposes additional time and mileage on everyone else.
          </p>
        </div>

        {/* Side-by-Side Trade-off Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Keep Leicester on Shuttle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-slate-50 dark:bg-surface border border-rose-300 dark:border-rose-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative shadow-card-light dark:shadow-none"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <span className="text-sm font-semibold text-rose-800 dark:text-rose-300 uppercase">
                    KEEP LEICESTER ON SHUTTLE
                  </span>
                </div>
                <span className="text-xs font-mono text-rose-700 dark:text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded border border-rose-500/20 font-bold">
                  REJECTED BY SOLVER
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                  £85.86*
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                  Estimated incremental cost to include Leicester on the main shuttle loop
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {LEICESTER_DECISION.keepOnVehicle.reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 flex items-start space-x-2 shadow-sm dark:shadow-none"
                  >
                    <span className="text-rose-600 dark:text-rose-400 font-bold mt-0.5">•</span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-mono space-y-1.5 text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Additional 33 Shuttle Miles:</span>
                <span className="text-slate-900 dark:text-slate-200 font-semibold">£19.80</span>
              </div>
              <div className="flex justify-between">
                <span>115 Mins Paid Passenger Sitting Time:</span>
                <span className="text-slate-900 dark:text-slate-200 font-semibold">£66.06</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Send Leicester Driver Separately */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 bg-emerald-50/80 dark:bg-gradient-to-br dark:from-emerald-950/40 dark:via-surface dark:to-slate-900 border border-emerald-300 dark:border-emerald-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-card-light dark:shadow-glow-emerald relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-200 dark:border-white/10">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-300 uppercase">
                    SEND DRIVER SEPARATELY
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-bold">
                  OPTIMAL SOLVER DECISION
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-3xl font-extrabold text-emerald-800 dark:text-emerald-300 font-mono">
                  £48.33*
                </div>
                <p className="text-xs text-emerald-900 dark:text-emerald-200/80 font-mono font-medium">
                  Train fare (£22.00) + Taxi (£9.00) + Driver paid travel time (£17.33)
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {LEICESTER_DECISION.sendSeparately.reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 flex items-start space-x-2 font-medium shadow-sm dark:shadow-none"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">✓</span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-300 dark:border-emerald-500/30 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-900 dark:text-emerald-200 font-semibold uppercase">
                ESTIMATED DIFFERENCE SAVED:
              </span>
              <span className="text-lg font-bold font-mono text-emerald-800 dark:text-emerald-300">
                £37.53*
              </span>
            </div>
          </motion.div>
        </div>

        {/* Footnote & Explainability Banner */}
        <div className="p-6 rounded-2xl bg-slate-100/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2 shadow-sm dark:shadow-none">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Same collection. Different operating decision.
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Sending the Leicester driver independently via train + taxi saves an estimated £37.53 while accelerating all downstream collections by over 45 minutes.
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-indigo-800 dark:text-indigo-300 text-xs font-mono font-semibold whitespace-nowrap">
              EXPLAINABLE DISPATCH REASONING
            </div>
          </div>
          <p className="text-[11px] text-slate-500 font-mono italic pt-2 text-center md:text-left">
            * Figures calculated from the prototype five-car scenario, NOT verified CarPlanet production economics.
          </p>
        </div>
      </div>
    </section>
  );
};
