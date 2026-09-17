"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  Zap,
  Train,
  PoundSterling,
  TrendingDown,
  Navigation,
} from "lucide-react";
import {
  CURRENT_PLAN,
  OPTIMISED_PLAN,
  SAVINGS_SUMMARY,
  HUB_LOCATION,
  DESTINATIONS,
  ALL_LOCATIONS,
} from "@/data/scenarioData";

export const RouteDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"current" | "optimised">("current");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [animationProgress, setAnimationProgress] = useState<number>(0);

  const activePlan = activeTab === "current" ? CURRENT_PLAN : OPTIMISED_PLAN;

  const handleTogglePlan = (plan: "current" | "optimised") => {
    setActiveTab(plan);
    setAnimationProgress(0);
    setIsAnimating(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAnimating) {
      setAnimationProgress(0);
      let p = 0;
      timer = setInterval(() => {
        p += 0.05;
        if (p >= 1) {
          p = 1;
          setIsAnimating(false);
          clearInterval(timer);
        }
        setAnimationProgress(p);
      }, 50);
    }
    return () => clearInterval(timer);
  }, [isAnimating]);

  const handleReplay = () => {
    setIsAnimating(true);
  };

  return (
    <section id="interactive-demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#090A0F] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
              <Zap className="w-3.5 h-3.5" />
              <span>SECTION 06 • INTERACTIVE OPTIMISATION DEMO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Let's plan the same five-car day.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Compare the manual multi-driver shuttle route against the Route Portal multi-modal optimisation engine.
            </p>
          </div>

          {/* Plan Toggle Control */}
          <div className="flex items-center p-1.5 rounded-xl bg-white dark:bg-surface border border-slate-200 dark:border-white/10 space-x-2 shadow-sm dark:shadow-none">
            <button
              onClick={() => handleTogglePlan("current")}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === "current"
                  ? "bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/30 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>Current Plan</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                £466.37
              </span>
            </button>

            <button
              onClick={() => handleTogglePlan("optimised")}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === "optimised"
                  ? "bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 border border-emerald-500/30 shadow-sm dark:shadow-glow-emerald"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Optimised Plan</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                £408.84
              </span>
            </button>
          </div>
        </div>

        {/* Map & Visual Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Map Visualiser */}
          <div className="lg:col-span-8 bg-white dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-card-light dark:shadow-none">
            {/* Top Bar Status */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-4 z-10">
              <div className="flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase">
                  {activeTab === "current"
                    ? "Current Manual Shuttle Route"
                    : "Optimised Multi-Modal Dispatch Plan"}
                </span>
              </div>

              <button
                onClick={handleReplay}
                className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 flex items-center space-x-1.5"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay demo</span>
              </button>
            </div>

            {/* SVG Interactive Canvas with Dedicated Light Mode Styling */}
            <div className="relative w-full h-[400px] rounded-xl bg-slate-100/90 dark:bg-[#08090D] border border-slate-200 dark:border-white/5 overflow-hidden">
              <svg viewBox="0 0 800 550" className="w-full h-full object-contain">
                {/* Background Grid Lines */}
                {ALL_LOCATIONS.map((loc, i) =>
                  ALL_LOCATIONS.slice(i + 1).map((dest) => (
                    <line
                      key={`${loc.id}-${dest.id}`}
                      x1={loc.x}
                      y1={loc.y}
                      x2={dest.x}
                      y2={dest.y}
                      className="stroke-slate-300/60 dark:stroke-white/5"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  ))
                )}

                {/* Active Shuttle Route Path */}
                {activePlan.routeSequence.map((locId, idx) => {
                  if (idx === 0) return null;
                  const prevLoc = ALL_LOCATIONS.find(
                    (l) => l.id === activePlan.routeSequence[idx - 1]
                  );
                  const currLoc = ALL_LOCATIONS.find((l) => l.id === locId);
                  if (!prevLoc || !currLoc) return null;

                  return (
                    <motion.line
                      key={`route-${activeTab}-${idx}`}
                      x1={prevLoc.x}
                      y1={prevLoc.y}
                      x2={currLoc.x}
                      y2={currLoc.y}
                      stroke={activeTab === "current" ? "#D97706" : "#059669"}
                      strokeWidth="4"
                      strokeDasharray="6 6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                    />
                  );
                })}

                {/* Leicester Split Route (Optimised Mode Only) */}
                {activeTab === "optimised" && (
                  <g>
                    {/* Public Transit Line Birmingham -> Leicester */}
                    <motion.line
                      x1={HUB_LOCATION.x}
                      y1={HUB_LOCATION.y}
                      x2={DESTINATIONS.find((d) => d.id === "leicester")?.x}
                      y2={DESTINATIONS.find((d) => d.id === "leicester")?.y}
                      stroke="#0284C7"
                      strokeWidth="3.5"
                      strokeDasharray="8 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </g>
                )}

                {/* Hub Node (Birmingham) */}
                <g transform={`translate(${HUB_LOCATION.x}, ${HUB_LOCATION.y})`}>
                  <circle r="16" fill="#4F46E5" stroke="#312E81" strokeWidth="3" />
                  <text y="-22" textAnchor="middle" className="fill-slate-900 dark:fill-white font-sans font-bold" fontSize="15">
                    Birmingham (Hub)
                  </text>
                </g>

                {/* Destination Nodes */}
                {DESTINATIONS.map((dest) => {
                  const isLeicester = dest.id === "leicester";
                  const isIndependent = activeTab === "optimised" && isLeicester;

                  return (
                    <g key={dest.id} transform={`translate(${dest.x}, ${dest.y})`}>
                      <circle
                        r="10"
                        className={
                          isIndependent
                            ? "fill-sky-100 dark:fill-[#0369A1] stroke-sky-600 dark:stroke-sky-400"
                            : "fill-white dark:fill-[#1E293B] stroke-slate-600 dark:stroke-slate-400"
                        }
                        strokeWidth="2.5"
                      />
                      <circle
                        r="4"
                        className={
                          isIndependent
                            ? "fill-sky-600 dark:fill-sky-300"
                            : "fill-slate-800 dark:fill-slate-200"
                        }
                      />
                      <text
                        y="-16"
                        textAnchor="middle"
                        className={
                          isIndependent
                            ? "fill-sky-700 dark:fill-sky-300 font-bold"
                            : "fill-slate-900 dark:fill-slate-100 font-semibold"
                        }
                        fontSize="14"
                      >
                        {dest.name}
                      </text>
                      <text y="24" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 font-mono font-medium" fontSize="11">
                        {dest.distanceMiles} mi
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Overlay Badge for Leicester Train Split */}
              {activeTab === "optimised" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute top-16 right-8 bg-sky-50 dark:bg-sky-950/90 border border-sky-300 dark:border-sky-500/40 rounded-xl p-3 shadow-md flex items-center space-x-3 text-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-700 dark:text-sky-400 flex items-center justify-center">
                    <Train className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      Leicester Independent Travel
                    </div>
                    <div className="text-sky-800 dark:text-sky-300 font-mono text-[11px] font-medium">
                      Train + Taxi • £22 + £9 = £31 • 65 mins
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sub-text CTA toggle */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/5 gap-2">
              <span className="font-mono">
                {activeTab === "current"
                  ? "Sequence: Coventry → Leicester → Rugby → Northampton → Milton Keynes"
                  : "Optimised Sequence: Coventry → Rugby → Northampton → Milton Keynes"}
              </span>

              {activeTab === "current" && (
                <button
                  onClick={() => handleTogglePlan("optimised")}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center space-x-1.5 transition-all shadow-sm"
                >
                  <span>Optimise this day →</span>
                </button>
              )}
            </div>
          </div>

          {/* Metrics & Results Sidebar */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            {/* Live Metrics Card */}
            <div className="bg-white dark:bg-surface border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 space-y-6 shadow-card-light dark:shadow-none">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                  PLAN METRICS & METRIC TICKER
                </span>
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded font-bold ${
                    activeTab === "current"
                      ? "text-amber-800 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20"
                      : "text-emerald-800 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                  }`}
                >
                  {activeTab === "current" ? "MANUAL" : "OPTIMISED"}
                </span>
              </div>

              {/* Total Estimated Cost Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center space-x-1 font-semibold">
                  <PoundSterling className="w-3.5 h-3.5 text-slate-500" />
                  <span>TOTAL ESTIMATED COST</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                  £{activePlan.totalCost.toFixed(2)}
                </div>
              </div>

              {/* Detailed Metrics List */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-white/5">
                  <span className="text-slate-600 dark:text-slate-400">Shuttle Vehicle Miles</span>
                  <span className="font-bold text-slate-900 dark:text-white">{activePlan.vehicleMiles} mi</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-white/5">
                  <span className="text-slate-600 dark:text-slate-400">Paid Passenger Ride Time</span>
                  <span className="font-bold text-slate-900 dark:text-white">{activePlan.paidRideTime}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-white/5">
                  <span className="text-slate-600 dark:text-slate-400">Vehicle Driver Time</span>
                  <span className="font-bold text-slate-900 dark:text-white">{activePlan.vehicleDriverTime}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-white/5">
                  <span className="text-slate-600 dark:text-slate-400">Handovers & Waiting</span>
                  <span className="font-bold text-slate-900 dark:text-white">{activePlan.handoversWaiting}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-white/5">
                  <span className="text-slate-600 dark:text-slate-400">Total Paid Driver Hours</span>
                  <span className="font-bold text-amber-700 dark:text-amber-300">{activePlan.totalPaidHours}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-600 dark:text-slate-400">Final Car Return Time</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">{activePlan.lastCarHome}</span>
                </div>
              </div>
            </div>

            {/* Savings Callout Box (Shows when Optimised is active) */}
            <AnimatePresence>
              {activeTab === "optimised" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-6 rounded-2xl bg-emerald-50 dark:bg-gradient-to-br dark:from-emerald-950/60 dark:via-surface dark:to-slate-900 border border-emerald-300 dark:border-emerald-500/40 shadow-sm dark:shadow-glow-emerald space-y-4"
                >
                  <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold">
                    <TrendingDown className="w-4 h-4" />
                    <span>OPTIMISATION IMPACT</span>
                  </div>

                  <div className="flex items-baseline space-x-3">
                    <span className="text-4xl font-black text-emerald-700 dark:text-emerald-300 font-mono">
                      £{SAVINGS_SUMMARY.costSaved.toFixed(2)}
                    </span>
                    <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                      ({SAVINGS_SUMMARY.percentageSaved}% daily cost reduction)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-emerald-300 dark:border-emerald-500/20">
                    <div className="text-emerald-900 dark:text-emerald-200">
                      ⚡ {SAVINGS_SUMMARY.hoursSaved} paid hours saved
                    </div>
                    <div className="text-emerald-900 dark:text-emerald-200">
                      🚗 {SAVINGS_SUMMARY.milesSaved} fewer shuttle miles
                    </div>
                    <div className="text-emerald-900 dark:text-emerald-200 col-span-2">
                      ⏰ {SAVINGS_SUMMARY.timeEarlier} earlier final arrival
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
