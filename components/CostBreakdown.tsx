"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";
import { COST_BREAKDOWN } from "@/data/scenarioData";

export const CostBreakdown: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090D] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-400">
            <span>SECTION 03 • COST ANALYSIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            The problem isn't just routing.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Routing algorithms only optimize pathing. But up to 43% of total controllable collection cost is lost before a vehicle even turns its key.
          </p>
        </div>

        {/* Cost Allocation Bars */}
        <div className="space-y-6 bg-surface border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Controllable Cost Distribution
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Estimated share of controllable cost in the illustrative scenario
              </p>
            </div>
            <div className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-xs font-bold flex items-center space-x-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Waiting + Failed Journeys ≈ 43%</span>
            </div>
          </div>

          {/* Animated Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {COST_BREAKDOWN.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-200">{item.name}</span>
                  <span className="font-mono font-bold text-slate-100">{item.percentage}%</span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                <p className="text-xs text-slate-400 leading-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Flow Breakdown */}
        <div className="bg-[#0E1017] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              OPERATIONAL INSIGHT
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Two of the biggest opportunities happen before routing begins.
            </h3>
            <p className="text-sm text-slate-400">
              When a seller isn't ready or documents are missing, even the optimal route collapses.
            </p>
          </div>

          {/* Sequential Chain Visual */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="p-5 rounded-xl bg-white/5 border border-rose-500/20 space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 font-bold mx-auto flex items-center justify-center text-sm">
                1
              </div>
              <h4 className="font-semibold text-white text-sm">Seller Isn't Ready</h4>
              <p className="text-xs text-slate-400">Keys missing, V5 draft unlocated, vehicle blocked</p>
            </div>

            <div className="hidden md:flex items-center justify-center text-slate-500">
              <ArrowRight className="w-6 h-6" />
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-amber-500/20 space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold mx-auto flex items-center justify-center text-sm">
                2
              </div>
              <h4 className="font-semibold text-white text-sm">Driver Arrives On Site</h4>
              <p className="text-xs text-slate-400">Driver shuttle sits waiting on driveway or street</p>
            </div>

            <div className="hidden md:flex items-center justify-center text-slate-500">
              <ArrowRight className="w-6 h-6" />
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-red-500/30 space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 font-bold mx-auto flex items-center justify-center text-sm">
                3
              </div>
              <h4 className="font-semibold text-white text-sm">Wait / Failed Collection</h4>
              <p className="text-xs text-slate-400">Trip aborted or 45-min standing delay</p>
            </div>

            <div className="hidden md:flex items-center justify-center text-slate-500">
              <ArrowRight className="w-6 h-6" />
            </div>

            <div className="p-5 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-rose-500/30 text-rose-300 font-bold mx-auto flex items-center justify-center text-sm">
                4
              </div>
              <h4 className="font-semibold text-rose-200 text-sm">Paid Time Is Lost</h4>
              <p className="text-xs text-rose-300/80">Cascades downstream delays across 4 other drivers</p>
            </div>
          </div>

          {/* Key takeaway banner */}
          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-center">
            <p className="text-sm sm:text-base font-semibold text-indigo-300">
              This is why Route Portal starts with process, not AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
