"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { COST_BREAKDOWN, EXISTING_WORKFLOW_STEPS } from "@/data/scenarioData";

export const CostBreakdown: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#08090D] border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-rose-500/5 dark:bg-rose-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-700 dark:text-rose-400 font-bold">
            <span>SECTION 03 • WORKFLOW & COST ANALYSIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            The problem isn't just routing.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            RoutePortal already handles point-to-point routing. But up to 43% of total controllable collection cost is lost before a vehicle even turns its key.
          </p>
        </div>

        {/* Existing Workflow vs Optimisation Layer Architecture */}
        <div className="bg-slate-50/80 dark:bg-surface border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-card-light dark:shadow-none">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                THE EXISTING ROUTEPORTAL WORKFLOW
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Production baseline execution pipeline
              </p>
            </div>
            <span className="text-xs font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 font-bold">
              6 CORE STEPS
            </span>
          </div>

          {/* Existing 6 steps grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-xs font-mono">
            {EXISTING_WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1 text-center shadow-sm dark:shadow-none"
              >
                <div className="text-indigo-600 dark:text-indigo-400 font-bold">0{step.step}</div>
                <div className="font-semibold text-slate-900 dark:text-white text-[11px]">{step.name}</div>
              </div>
            ))}
          </div>

          {/* Highlighting Where Collection Optimiser Layer Sits */}
          <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-indigo-500/10 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-700 dark:text-indigo-400">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Where does the next optimisation layer sit?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  The <strong>Collection Optimiser</strong> sits directly above the route generator—evaluating the entire day's collection plan across drivers, modes, and costs rather than only the next route.
                </p>
              </div>
            </div>
            <span className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold whitespace-nowrap shadow-sm">
              OPTIMISATION LAYER
            </span>
          </div>
        </div>

        {/* Cost Allocation Bars */}
        <div className="space-y-6 bg-slate-50/80 dark:bg-surface border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-card-light dark:shadow-none">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Controllable Cost Distribution
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Estimated share of controllable cost in the illustrative scenario
              </p>
            </div>
            <div className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300 font-mono text-xs font-bold flex items-center space-x-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
              <span>Waiting + Failed Journeys ≈ 43%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {COST_BREAKDOWN.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-3 shadow-sm dark:shadow-none"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{item.percentage}%</span>
                </div>

                <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
