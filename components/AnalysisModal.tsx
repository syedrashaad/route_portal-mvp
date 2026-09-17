"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, ShieldCheck } from "lucide-react";

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalysisModal: React.FC<AnalysisModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 dark:bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto transition-colors duration-300"
        >
          {/* Modal Header */}
          <div className="p-6 bg-slate-100/90 dark:bg-surface border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Route Portal Concept Analysis & Methodology
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Executive Briefing & Technical Optimization Assumptions • Sep 2026
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-200/80 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed max-h-[75vh] overflow-y-auto font-sans">
            {/* Disclaimer Alert */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs font-mono flex items-start space-x-3 font-medium">
              <ShieldCheck className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <strong>IMPORTANT NOTICE ON CONCEPT DATA:</strong> The data, routes, rates, and figures presented in this prototype are derived from an illustrative concept analysis created to demonstrate operational optimization principles for CarPlanet. They are strictly illustrative example figures and do not represent verified CarPlanet proprietary operational records.
              </div>
            </div>

            {/* Core Thesis */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">1. Executive Summary & Problem Formulation</h4>
              <p>
                In multi-vehicle collection models, manual dispatching defaults to group shuttling (one driver shuttle transporting 5+ collection drivers to sequential seller drop points). While straightforward, this strategy creates massive hidden costs in <strong>paid passenger ride time</strong> (drivers sitting idle waiting to be dropped off) and <strong>route detours</strong> to reach outlying locations.
              </p>
            </div>

            {/* Economic Baseline */}
            <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-white/10">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">2. Economic Baseline (5-Car Scenario)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1">
                  <div className="text-slate-500 dark:text-slate-400">DRIVER HOURLY RATE</div>
                  <div className="text-slate-900 dark:text-white font-bold">£16.00 / hour (paid portal-to-portal)</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1">
                  <div className="text-slate-500 dark:text-slate-400">SHUTTLE VEHICLE COST</div>
                  <div className="text-slate-900 dark:text-white font-bold">£0.60 / mile (fuel, wear, insurance)</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1">
                  <div className="text-slate-500 dark:text-slate-400">COLLECTED CAR MILEAGE</div>
                  <div className="text-slate-900 dark:text-white font-bold">£0.40 / mile</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1">
                  <div className="text-slate-500 dark:text-slate-400">HANDOVER / WAITING TIME</div>
                  <div className="text-slate-900 dark:text-white font-bold">40 mins per seller site</div>
                </div>
              </div>
            </div>

            {/* Mathematical Model */}
            <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-white/10">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">3. Multi-Modal Optimisation Architecture</h4>
              <p>
                The Route Portal engine models vehicle collection as a Mixed-Integer Linear Program (MILP) combined with public transit network integration. The solver evaluates:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs font-mono text-slate-600 dark:text-slate-400 pl-2">
                <li>Multi-driver passenger shuttle corridor optimization</li>
                <li>Point-to-point rail & taxi independent driver positioning</li>
                <li>Seller readiness slot verification & pre-flight checks</li>
                <li>Hold-in-place vs collect-today cost trade-off analysis</li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-900 dark:text-indigo-200 text-xs font-medium">
              <strong>Next Steps for CarPlanet:</strong> Connect CarPlanet's historical collection records, real driver locations, and seller readiness data into the solver to calibrate the cost model against true operational telemetry.
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-100/90 dark:bg-surface border-t border-slate-200 dark:border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
            >
              Close Analysis
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
