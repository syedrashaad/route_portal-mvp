"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, CheckCircle, XCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { LEICESTER_DECISION } from "@/data/scenarioData";

export const DecisionExplanation: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SECTION 07 • EXPLAINABLE DECISION LOGIC</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Why did Leicester leave the route?
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Black-box AI recommendations create dispatch distrust. Route Portal explicitly quantifies the operational trade-offs behind every decision.
          </p>
        </div>

        {/* Side-by-Side Trade-off Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Keep on Shuttle Route (Option A) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-surface border border-rose-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <span className="text-sm font-semibold text-rose-300">
                    OPTION A: KEEP ON SHUTTLE ROUTE
                  </span>
                </div>
                <span className="text-xs font-mono text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded border border-rose-500/20">
                  REJECTED BY SOLVER
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-3xl font-extrabold text-white font-mono">
                  £{LEICESTER_DECISION.keepOnVehicle.totalCost.toFixed(2)}
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Estimated incremental cost to include Leicester on the main shuttle loop
                </p>
              </div>

              {/* Bullet Reasons */}
              <div className="space-y-2.5 pt-2">
                {LEICESTER_DECISION.keepOnVehicle.reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 flex items-start space-x-2"
                  >
                    <span className="text-rose-400 font-bold mt-0.5">•</span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Breakdown Sub-table */}
            <div className="pt-4 border-t border-white/10 text-xs font-mono space-y-1.5 text-slate-400">
              <div className="flex justify-between">
                <span>Additional 33 Shuttle Miles:</span>
                <span className="text-slate-200">£19.80</span>
              </div>
              <div className="flex justify-between">
                <span>115 Mins Paid Passenger Sitting Time:</span>
                <span className="text-slate-200">£66.06</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Send Driver Separately (Option B - Winner) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 bg-gradient-to-br from-emerald-950/40 via-surface to-slate-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-glow-emerald relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-300">
                    OPTION B: SEND DRIVER SEPARATELY
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-bold">
                  OPTIMAL SOLVER DECISION
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-3xl font-extrabold text-emerald-300 font-mono">
                  £{LEICESTER_DECISION.sendSeparately.totalCost.toFixed(2)}
                </div>
                <p className="text-xs text-emerald-200/80 font-mono">
                  Train fare (£22.00) + Taxi (£9.00) + Driver paid travel time (£17.33)
                </p>
              </div>

              {/* Bullet Reasons */}
              <div className="space-y-2.5 pt-2">
                {LEICESTER_DECISION.sendSeparately.reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-100 flex items-start space-x-2"
                  >
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Savings Conclusion Bar */}
            <div className="pt-4 border-t border-emerald-500/30 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-200">
                NET SINGLE-DRIVER SAVINGS:
              </span>
              <span className="text-lg font-bold font-mono text-emerald-300">
                £{LEICESTER_DECISION.sendSeparately.netSavings.toFixed(2)} saved
              </span>
            </div>
          </motion.div>
        </div>

        {/* Explainability Callout Banner */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Decision Equation: £85.86 &gt; £48.33
            </h4>
            <p className="text-xs text-slate-400">
              Sending the Leicester driver independently by train + taxi saves an estimated £37.53 on a single driver slot, while speeding up all remaining collections.
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold whitespace-nowrap">
            EXPLAINABLE DISPATCH REASONING
          </div>
        </div>
      </div>
    </section>
  );
};
