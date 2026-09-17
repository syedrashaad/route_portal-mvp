"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Zap, MapPin, Navigation, ArrowRight } from "lucide-react";
import { DESTINATIONS, HUB_LOCATION } from "@/data/scenarioData";

interface HeroProps {
  onSeeHowItWorks: () => void;
  onJumpToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSeeHowItWorks, onJumpToDemo }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Text & Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Concept Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-200/70 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono tracking-wider text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-500 animate-pulse" />
            <span>PRODUCT CONCEPT • SEPTEMBER 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            Every car has to come home. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-600 dark:from-indigo-300 dark:via-slate-200 dark:to-sky-300">
              The question is how.
            </span>
          </h1>

          {/* Subheadline with Updated Positioning */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-normal">
            RoutePortal already handles the core routing workflow. This concept explores the next layer: optimising how an entire day's vehicle collections are completed across drivers, travel modes, time and cost.
          </p>

          {/* New Thesis Banner */}
          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 max-w-2xl">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
              <span>PRODUCT THESIS</span>
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
              "From proximity-based routing to cost-aware collection planning."
            </p>
          </div>

          {/* Disclaimer Label */}
          <p className="text-xs text-slate-500 dark:text-slate-500 italic font-mono pt-1">
            *Illustrative product concept & operational analysis. An optimisation layer explored around the existing RoutePortal workflow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onSeeHowItWorks}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm transition-all duration-200 flex items-center space-x-2 shadow-lg dark:hover:shadow-white/20 active:scale-95 group"
            >
              <span>See how it works</span>
              <ArrowDown className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onJumpToDemo}
              className="px-6 py-3.5 rounded-xl bg-slate-200/80 hover:bg-slate-300/80 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 font-semibold text-sm transition-all duration-200 flex items-center space-x-2 active:scale-95"
            >
              <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>Jump to the optimisation</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Stylised Vector Map Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl bg-white dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/10 p-6 shadow-card-light dark:shadow-2xl overflow-hidden group transition-colors duration-300">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                  UK MIDLANDS COLLECTION NETWORK
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                5 TARGET CARS
              </span>
            </div>

            {/* Stylised SVG Vector Map */}
            <div className="relative w-full h-[340px] rounded-xl bg-slate-100/80 dark:bg-[#090A0F] border border-slate-200/80 dark:border-white/5 overflow-hidden flex items-center justify-center">
              <svg
                viewBox="0 0 800 550"
                className="w-full h-full object-contain filter drop-shadow-md"
              >
                <path
                  d="M 220 330 Q 290 335 360 340 T 480 320 T 580 370 T 670 430"
                  fill="none"
                  stroke="rgba(99, 102, 241, 0.4)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <path
                  d="M 220 330 Q 350 250 490 200"
                  fill="none"
                  stroke="rgba(14, 165, 233, 0.4)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <path
                  d="M 490 200 Q 535 285 580 370"
                  fill="none"
                  stroke="rgba(100, 116, 139, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {DESTINATIONS.map((dest, i) => (
                  <motion.line
                    key={dest.id}
                    x1={HUB_LOCATION.x}
                    y1={HUB_LOCATION.y}
                    x2={dest.x}
                    y2={dest.y}
                    className="stroke-slate-400/40 dark:stroke-white/15"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
                  />
                ))}

                <g transform={`translate(${HUB_LOCATION.x}, ${HUB_LOCATION.y})`}>
                  <circle r="24" className="fill-indigo-500/20 dark:fill-indigo-600/15 animate-ping" />
                  <circle r="14" fill="#4F46E5" stroke="#818CF8" strokeWidth="2.5" />
                  <text
                    y="-22"
                    textAnchor="middle"
                    className="fill-slate-900 dark:fill-white font-sans font-bold"
                    fontSize="16"
                  >
                    Birmingham (Hub)
                  </text>
                  <text y="30" textAnchor="middle" className="fill-indigo-600 dark:fill-indigo-400 font-mono font-semibold" fontSize="12">
                    Showroom / Base
                  </text>
                </g>

                {DESTINATIONS.map((dest, i) => (
                  <motion.g
                    key={dest.id}
                    transform={`translate(${dest.x}, ${dest.y})`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                  >
                    <circle r="8" className="fill-white dark:fill-[#1E293B] stroke-sky-600 dark:stroke-sky-400" strokeWidth="2.5" />
                    <circle r="3" className="fill-sky-600 dark:fill-sky-400" />
                    <text
                      y="-14"
                      textAnchor="middle"
                      className="fill-slate-900 dark:fill-slate-100 font-semibold"
                      fontSize="14"
                    >
                      {dest.name}
                    </text>
                    <text y="22" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 font-mono" fontSize="11">
                      {dest.distanceMiles} mi
                    </text>
                  </motion.g>
                ))}
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Showroom Hub</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <span>5 Collection Points</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
