"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  CheckCircle2,
  Clock,
  AlertCircle,
  Train,
  Receipt,
  RotateCcw,
  ArrowRight,
  MapPin,
  Car,
  Navigation,
  Sparkles,
} from "lucide-react";
import { DRIVER_MOBILE_APP_DATA } from "@/data/scenarioData";

export const DriverMobileExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"shuttle" | "independent">("shuttle");
  const [reportingCostFor, setReportingCostFor] = useState<string | null>(null);
  const [costFormSubmitted, setCostFormSubmitted] = useState<boolean>(false);

  // Cost reporting form state
  const [milesDriven, setMilesDriven] = useState("20");
  const [travelCost, setTravelCost] = useState("0");
  const [parking, setParking] = useState("4.50");
  const [tolls, setTolls] = useState("0");

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCostFormSubmitted(true);
    setTimeout(() => {
      setReportingCostFor(null);
      setCostFormSubmitted(false);
    }, 2000);
  };

  return (
    <section id="mobile-experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#090A0F] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-700 dark:text-indigo-400 font-bold">
            <Smartphone className="w-3.5 h-3.5" />
            <span>SECTION 08 • DRIVER MOBILE EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            From routing to collection experience.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            The optimisation engine connects directly to the buyer's mobile app—giving vehicle buyers real-time route visibility, arrival updates, and effortless journey cost reporting.
          </p>
        </div>

        {/* Mobile Experience Interactive Mockup Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Driver Mobile App Prototype */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[40px] bg-slate-900 border-[8px] border-slate-800 p-4 shadow-2xl space-y-4 relative text-white font-sans overflow-hidden">
              {/* Phone Speaker Notch */}
              <div className="w-32 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2" />

              {/* Mobile Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 text-xs">
                <div>
                  <div className="font-bold text-white text-sm">ROUTEPORTAL BUYER</div>
                  <div className="text-[10px] text-slate-400 font-mono">DRIVER: SAM (VEHICLE BUYER)</div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Driver View Switcher */}
              <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-slate-800 text-[11px] font-mono">
                <button
                  onClick={() => setActiveTab("shuttle")}
                  className={`py-1.5 rounded-lg font-bold transition-all ${
                    activeTab === "shuttle" ? "bg-indigo-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Shuttle Route
                </button>
                <button
                  onClick={() => setActiveTab("independent")}
                  className={`py-1.5 rounded-lg font-bold transition-all ${
                    activeTab === "independent" ? "bg-sky-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Independent Mode
                </button>
              </div>

              {/* App Main Content Area */}
              {activeTab === "shuttle" ? (
                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1 text-xs">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                    TODAY'S SCHEDULED COLLECTIONS
                  </div>

                  {DRIVER_MOBILE_APP_DATA.shuttleRoute.map((item, idx) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-100">{idx + 1}. {item.locationName}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          item.status === "Vehicle Collected"
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : item.status === "In Transit"
                            ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                            : "bg-slate-700 text-slate-300"
                        }`}>
                          {item.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300 font-mono">
                        <div>ETA: <span className="text-white">{item.eta}</span></div>
                        <div>Est Cost: <span className="text-amber-300">{item.estDriveCost}</span></div>
                      </div>

                      {/* Driver Action Buttons */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <button className="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-[10px] font-mono text-slate-200">
                          Running late
                        </button>
                        <button className="px-2 py-1 rounded bg-indigo-600/40 hover:bg-indigo-600/60 text-[10px] font-mono text-indigo-200">
                          Arrived
                        </button>
                        <button
                          onClick={() => setReportingCostFor(item.locationName)}
                          className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-[10px] font-mono text-white font-bold flex items-center space-x-1"
                        >
                          <Receipt className="w-2.5 h-2.5" />
                          <span>Report cost</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Independent Leicester View */
                <div className="p-4 rounded-xl bg-slate-800/90 border border-sky-500/40 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sky-300">{DRIVER_MOBILE_APP_DATA.independentDriver.locationName}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30">
                      {DRIVER_MOBILE_APP_DATA.independentDriver.status}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-700 space-y-1.5 font-mono text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Travel Mode:</span>
                      <span className="font-bold text-white">{DRIVER_MOBILE_APP_DATA.independentDriver.mode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Estimated Cost:</span>
                      <span className="font-bold text-emerald-400">{DRIVER_MOBILE_APP_DATA.independentDriver.estCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Door-to-Car ETA:</span>
                      <span className="font-bold text-sky-300">{DRIVER_MOBILE_APP_DATA.independentDriver.eta}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setReportingCostFor("Leicester Collection")}
                    className="w-full py-2 rounded-lg bg-sky-600 hover:bg-sky-500 font-bold text-xs text-white flex items-center justify-center space-x-1.5"
                  >
                    <Receipt className="w-3.5 h-3.5" />
                    <span>Report Train & Taxi Cost</span>
                  </button>
                </div>
              )}

              {/* Cost Reporting Modal Flow Overlay inside Phone */}
              <AnimatePresence>
                {reportingCostFor && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-x-3 bottom-4 top-16 bg-slate-900 border border-slate-700 rounded-2xl p-4 z-20 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="font-bold text-xs text-white">Report Journey Cost</span>
                        <button
                          onClick={() => setReportingCostFor(null)}
                          className="text-[10px] font-mono text-slate-400 hover:text-white"
                        >
                          ✕ Close
                        </button>
                      </div>

                      <p className="text-[10px] text-slate-400">{reportingCostFor}</p>

                      {costFormSubmitted ? (
                        <div className="py-8 text-center space-y-2 text-emerald-400">
                          <CheckCircle2 className="w-8 h-8 mx-auto" />
                          <div className="font-bold text-xs">Cost Logged to RoutePortal!</div>
                        </div>
                      ) : (
                        <form onSubmit={handleReportSubmit} className="space-y-2 text-[10px] font-mono">
                          <div>
                            <label className="text-slate-400 block mb-0.5">Miles Driven</label>
                            <input
                              type="text"
                              value={milesDriven}
                              onChange={(e) => setMilesDriven(e.target.value)}
                              className="w-full p-1.5 rounded bg-slate-800 border border-slate-700 text-white"
                            />
                          </div>
                          <div>
                            <label className="text-slate-400 block mb-0.5">Travel / Transit Cost (£)</label>
                            <input
                              type="text"
                              value={travelCost}
                              onChange={(e) => setTravelCost(e.target.value)}
                              className="w-full p-1.5 rounded bg-slate-800 border border-slate-700 text-white"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            <div>
                              <label className="text-slate-400 block mb-0.5">Parking (£)</label>
                              <input
                                type="text"
                                value={parking}
                                onChange={(e) => setParking(e.target.value)}
                                className="w-full p-1.5 rounded bg-slate-800 border border-slate-700 text-white"
                              />
                            </div>
                            <div>
                              <label className="text-slate-400 block mb-0.5">Tolls (£)</label>
                              <input
                                type="text"
                                value={tolls}
                                onChange={(e) => setTolls(e.target.value)}
                                className="w-full p-1.5 rounded bg-slate-800 border border-slate-700 text-white"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full mt-2 py-2 rounded bg-emerald-600 font-bold text-white"
                          >
                            Submit Actuals to RoutePortal
                          </button>
                        </form>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Feedback Loop Concept */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-surface border border-slate-200/80 dark:border-white/10 space-y-4 shadow-card-light dark:shadow-none">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Closing the Feedback Loop: Planned vs Actual Costs
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                By enabling buyers to capture real-time drive costs, parking, and transit fares directly from their mobile app, RoutePortal compares planned cost models against true execution telemetry.
              </p>

              {/* Feedback Loop Steps */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs font-mono">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 font-bold flex items-center justify-center text-xs">
                    1
                  </span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">PLAN:</span> Multi-modal solver predicts optimal cost & timing
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs font-mono">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 font-bold flex items-center justify-center text-xs">
                    2
                  </span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">EXECUTE:</span> Driver follows mobile app route & status actions
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs font-mono">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center text-xs">
                    3
                  </span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">CAPTURE ACTUALS:</span> Buyer logs miles, transit fares, tolls & parking
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs font-mono">
                  <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-700 dark:text-sky-400 font-bold flex items-center justify-center text-xs">
                    4
                  </span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">LEARN & IMPROVE:</span> System calibrates cost parameters for future plans
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
