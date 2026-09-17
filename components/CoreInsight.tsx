"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sliders, ShieldCheck, ArrowLeftRight } from "lucide-react";
import { CORE_INSIGHT_SPLIT } from "@/data/scenarioData";

export const CoreInsight: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#090A0F] border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-700 dark:text-indigo-400 font-bold">
            <span>SECTION 04 • THE KEY INSIGHT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            The return journey is fixed. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-indigo-500 dark:from-sky-400 dark:to-indigo-300">
              The journey to the car isn't.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Once a car is purchased at a seller location, its return distance back to the Birmingham hub is geographically non-negotiable. But how you position the driver to reach that car is 100% controllable.
          </p>
        </div>

        {/* Visual Split Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Fixed Portion Card (28%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-white dark:bg-surface border border-slate-200/80 dark:border-white/10 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-card-light dark:shadow-none"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  NON-NEGOTIABLE GEOGRAPHY
                </span>
                <span className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-5 h-5" />
                </span>
              </div>

              <div className="text-5xl font-extrabold text-slate-900 dark:text-white font-mono">
                {CORE_INSIGHT_SPLIT.fixedPercentage}%
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                {CORE_INSIGHT_SPLIT.fixedLabel}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {CORE_INSIGHT_SPLIT.fixedDesc}
              </p>
            </div>

            {/* Mini route diagram for Return */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                <span>Seller Location</span>
                <ArrowLeftRight className="w-3.5 h-3.5 text-slate-400" />
                <span>Showroom Hub</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div className="w-full h-full bg-slate-600 dark:bg-slate-400" />
              </div>
              <p className="text-[11px] text-slate-500 font-mono italic">
                Direct single-vehicle return leg
              </p>
            </div>
          </motion.div>

          {/* Controllable Portion Card (72%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/50 dark:from-indigo-950/40 dark:via-surface dark:to-slate-900 border border-indigo-300 dark:border-indigo-500/30 rounded-2xl p-8 flex flex-col justify-between shadow-card-light dark:shadow-glow-sm relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-800 dark:text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 font-bold">
                  THE HIGH-VALUE OPTIMISATION ZONE
                </span>
                <span className="p-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400">
                  <Sliders className="w-5 h-5" />
                </span>
              </div>

              <div className="flex items-baseline space-x-3">
                <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-300 dark:via-sky-300 dark:to-emerald-300 font-mono">
                  {CORE_INSIGHT_SPLIT.controllablePercentage}%
                </div>
                <span className="text-lg font-semibold text-indigo-950 dark:text-indigo-200">
                  CONTROLLABLE OPERATIONAL COST
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {CORE_INSIGHT_SPLIT.controllableLabel}
              </h3>

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
                This is where Route Portal operates. By evaluating alternative travel modes (trains, taxis, solo shuttles, dynamic drop points), we unlock massive savings in paid driver sitting time and wasted shuttle mileage.
              </p>
            </div>

            {/* High-level visual list */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs shadow-sm dark:shadow-none">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Driver Positioning</div>
                <div className="text-slate-600 dark:text-slate-400">Shuttle vs Train + Taxi vs Rideshare</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs shadow-sm dark:shadow-none">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Seller Readiness</div>
                <div className="text-slate-600 dark:text-slate-400">Pre-slot document & photo validation</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs shadow-sm dark:shadow-none">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Drop Sequence</div>
                <div className="text-slate-600 dark:text-slate-400">Minimising total paid driver hours</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Small Footnote */}
        <p className="text-xs text-slate-500 font-mono italic text-center">
          * Figures based on the illustrative five-car scenario analysis.
        </p>
      </div>
    </section>
  );
};
