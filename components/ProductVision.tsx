"use client";

import React, { useState } from "react";
import { Bot, SlidersHorizontal } from "lucide-react";
import { PRODUCT_MODULES } from "@/data/scenarioData";

export const ProductVision: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string>("collections");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#090A0F] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-700 dark:text-sky-400 font-bold">
            <span>SECTION 08 • THE PRODUCT VISION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            One optimisation is useful. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:via-indigo-300 dark:to-purple-300">
              A system that learns from every collection is the product.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Route Portal connects sellers, dispatchers, drivers, and financial analytics into a unified operational command center.
          </p>
        </div>

        {/* Conceptual Dashboard Mockup */}
        <div className="bg-white dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/10 rounded-2xl overflow-hidden shadow-card-light dark:shadow-2xl transition-colors duration-300">
          {/* Dashboard Header Bar */}
          <div className="bg-slate-100/90 dark:bg-surface border-b border-slate-200 dark:border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400 pl-2 border-l border-slate-300 dark:border-white/10 font-semibold">
                ROUTE PORTAL DISPATCHER CONSOLE v2.6
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>LIVE FLEET ONLINE</span>
            </div>
          </div>

          {/* Module Selector & Preview Layout */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Module Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PRODUCT_MODULES.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                    activeModule === mod.id
                      ? "bg-indigo-500/10 dark:bg-indigo-600/20 border-indigo-500/40 text-slate-900 dark:text-white font-bold shadow-sm dark:shadow-glow-sm"
                      : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  <div className="text-xs font-mono text-indigo-700 dark:text-indigo-400 mb-1 font-semibold">
                    {mod.badge}
                  </div>
                  <div className="font-semibold text-sm">{mod.title}</div>
                </button>
              ))}
            </div>

            {/* Selected Module Detail Panel */}
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-surface border border-slate-200 dark:border-white/10 space-y-4">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                {PRODUCT_MODULES.find((m) => m.id === activeModule)?.title}
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
                {PRODUCT_MODULES.find((m) => m.id === activeModule)?.desc}
              </p>

              {/* Mock Control Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="p-4 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs space-y-1 shadow-sm dark:shadow-none">
                  <div className="text-slate-500 dark:text-slate-400 font-mono font-semibold">SELLER CONFIRMATION</div>
                  <div className="font-bold text-emerald-700 dark:text-emerald-400">94.2% Pre-verified</div>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs space-y-1 shadow-sm dark:shadow-none">
                  <div className="text-slate-500 dark:text-slate-400 font-mono font-semibold">DRIVER MODES</div>
                  <div className="font-bold text-sky-700 dark:text-sky-400">3 Shuttle / 2 Train</div>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs space-y-1 shadow-sm dark:shadow-none">
                  <div className="text-slate-500 dark:text-slate-400 font-mono font-semibold">LIVE ETA STATUS</div>
                  <div className="font-bold text-indigo-700 dark:text-indigo-300">On Schedule</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Architecture Pipeline & AI Role Split */}
        <div className="space-y-8 bg-white dark:bg-surface border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-10 shadow-card-light dark:shadow-none">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-indigo-700 dark:text-indigo-400 font-bold uppercase tracking-wider">
              SYSTEM ARCHITECTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Data Pipeline & Deterministic vs AI Division
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              AI supports communications and predictions, while the OR-Tools solver handles hard mathematical optimisation.
            </p>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
              <div className="text-slate-500 dark:text-slate-400">INPUT</div>
              <div className="font-bold text-slate-900 dark:text-white">Process Data</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
              <div className="text-slate-500 dark:text-slate-400">MATRIX</div>
              <div className="font-bold text-sky-700 dark:text-sky-300">Travel-Time Engine</div>
            </div>
            <div className="p-3.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-600/30 border border-indigo-500/30 dark:border-indigo-500/40 space-y-1">
              <div className="text-indigo-700 dark:text-indigo-300 font-bold">SOLVER</div>
              <div className="font-bold text-slate-900 dark:text-white">Optimisation Engine</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
              <div className="text-slate-500 dark:text-slate-400">CONSOLE</div>
              <div className="font-bold text-amber-700 dark:text-amber-300">Dispatcher</div>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 space-y-1">
              <div className="text-emerald-800 dark:text-emerald-300 font-bold">EXECUTION</div>
              <div className="font-bold text-slate-900 dark:text-white">Drivers / Sellers</div>
            </div>
          </div>

          {/* AI vs Optimisation Split Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-white/10">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3 shadow-sm dark:shadow-none">
              <div className="flex items-center space-x-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                <Bot className="w-4 h-4" />
                <span>AI ASSISTANT (SUPPORTING ROLE)</span>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 font-mono">
                <li>• Automated seller WhatsApp slot reconfirmation</li>
                <li>• Photo & V5 document pre-flight verification</li>
                <li>• Human-readable plan change explanations</li>
                <li>• Seller unreadiness probability prediction</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-300 dark:border-emerald-500/30 space-y-3 shadow-sm dark:shadow-none">
              <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-400 font-bold text-sm">
                <SlidersHorizontal className="w-4 h-4" />
                <span>OPTIMISATION ENGINE (DETERMINISTIC)</span>
              </div>
              <ul className="text-xs text-emerald-900 dark:text-emerald-200/90 space-y-2 font-mono font-medium">
                <li>✓ Multi-vehicle route matrix solver</li>
                <li>✓ Driver mode assignment (shuttle vs train)</li>
                <li>✓ Precise drop sequence & arrival windows</li>
                <li>✓ Hold today vs collect today cost trade-offs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
