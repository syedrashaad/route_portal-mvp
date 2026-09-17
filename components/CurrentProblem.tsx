"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Car, Clock, PoundSterling, Play, RotateCcw, AlertTriangle, ArrowRight } from "lucide-react";

export const CurrentProblem: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const steps = [
    {
      title: "08:00 — Shuttle Departs Hub",
      location: "Birmingham Showroom",
      desc: "1 vehicle driver + 5 collection drivers depart together in a single passenger shuttle.",
      shuttlePassengerCount: 5,
      carsCollected: 0,
      paidHoursAccrued: "0.0h",
      costAccrued: "£0.00",
    },
    {
      title: "08:30 — Stop 1: Coventry",
      location: "Coventry (20 mi)",
      desc: "Driver 1 dropped off. Begins inspection, seller handover, and paperwork.",
      shuttlePassengerCount: 4,
      carsCollected: 1,
      paidHoursAccrued: "3.5h",
      costAccrued: "£78.20",
    },
    {
      title: "09:25 — Stop 2: Leicester",
      location: "Leicester (42 mi)",
      desc: "Shuttle drives 22 miles north. Driver 2 dropped off. 4 remaining drivers sit as passengers.",
      shuttlePassengerCount: 3,
      carsCollected: 2,
      paidHoursAccrued: "7.8h",
      costAccrued: "£174.50",
    },
    {
      title: "10:10 — Stop 3: Rugby",
      location: "Rugby (33 mi)",
      desc: "Shuttle backtracks south to Rugby. Driver 3 dropped off. Mileage accumulates.",
      shuttlePassengerCount: 2,
      carsCollected: 3,
      paidHoursAccrued: "12.2h",
      costAccrued: "£272.10",
    },
    {
      title: "11:15 — Stop 4: Northampton",
      location: "Northampton (52 mi)",
      desc: "Driver 4 dropped off. Driver 5 remains as passenger in shuttle.",
      shuttlePassengerCount: 1,
      carsCollected: 4,
      paidHoursAccrued: "16.5h",
      costAccrued: "£368.40",
    },
    {
      title: "12:35 — Stop 5: Milton Keynes",
      location: "Milton Keynes (72 mi)",
      desc: "Final driver dropped off. Shuttle completes trip and returns empty to Birmingham base.",
      shuttlePassengerCount: 0,
      carsCollected: 5,
      paidHoursAccrued: "20.9h",
      costAccrued: "£466.37",
    },
  ];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handleAutoPlay = () => {
    setIsPlaying(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= steps.length) {
        clearInterval(interval);
        setIsPlaying(false);
      } else {
        setActiveStep(step);
      }
    }, 2200);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#090A0F] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header with Updated Positioning */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-700 dark:text-amber-400 font-bold">
            <span>SECTION 02 • THE OPPORTUNITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            RoutePortal already solves the core routing problem. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-indigo-600 dark:from-amber-400 dark:to-indigo-300">
              The next opportunity is to optimise the collection decision itself.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Proximity is a useful starting point. But proximity alone doesn't always minimise the cost of completing the day.
          </p>
        </div>

        {/* Visual Comparison: PROXIMITY vs TOTAL COLLECTION COST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-surface border border-slate-200 dark:border-white/10 space-y-4 shadow-card-light dark:shadow-none">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold uppercase">
                APPROACH 1: PROXIMITY ROUTING
              </span>
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">
                BASELINE
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Assigns the nearest buyer to the next available appointment based purely on geographic distance.
            </p>
            <div className="space-y-2 pt-2 text-xs font-mono text-slate-500">
              <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Accumulates paid passenger sitting time</span>
              </div>
              <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Forces unnecessary shuttle vehicle mileage</span>
              </div>
              <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Creates knock-on delays across downstream drops</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/20 border border-indigo-300 dark:border-indigo-500/30 space-y-4 shadow-card-light dark:shadow-none">
            <div className="flex items-center justify-between border-b border-indigo-200 dark:border-white/10 pb-3">
              <span className="text-xs font-mono text-indigo-800 dark:text-indigo-400 font-bold uppercase">
                APPROACH 2: TOTAL COLLECTION COST OPTIMISATION
              </span>
              <span className="text-xs font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded font-bold">
                CONCEPT LAYER
              </span>
            </div>
            <p className="text-xs text-indigo-950 dark:text-indigo-200 leading-relaxed font-medium">
              Evaluates driver hourly wages, multi-modal travel options (train/taxi), seller windows, and total daily cost.
            </p>
            <div className="space-y-2 pt-2 text-xs font-mono text-indigo-900 dark:text-indigo-300">
              <div className="flex items-center space-x-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Minimises total paid driver shift hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Dispatches independent drivers via rail/taxi where cheaper</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Accelerates final car return time by 1+ hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Sequence Visualiser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Step Controls & Narration */}
          <div className="lg:col-span-5 bg-white dark:bg-surface border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-card-light dark:shadow-none">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  SEQUENCE STEP {activeStep + 1} OF {steps.length}
                </span>
                <span className="text-xs font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20 font-bold">
                  {steps[activeStep].location}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Sequence Progress Bar */}
            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="grid grid-cols-6 gap-1.5">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeStep
                        ? "bg-amber-500 dark:bg-amber-400 w-full"
                        : idx < activeStep
                        ? "bg-slate-400 dark:bg-slate-600 w-full"
                        : "bg-slate-200 dark:bg-white/10 w-full"
                    }`}
                  />
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={handleNext}
                  className="flex-1 py-2.5 rounded-lg bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20 text-white font-medium text-xs transition-colors"
                >
                  Next Drop-Off →
                </button>

                <button
                  onClick={handleAutoPlay}
                  disabled={isPlaying}
                  className="px-4 py-2.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-300 font-medium text-xs border border-amber-500/30 flex items-center space-x-1.5"
                >
                  {isPlaying ? (
                    <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Play className="w-3.5 h-3.5" />
                  )}
                  <span>{isPlaying ? "Playing..." : "Play All"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Visual Simulation Canvas */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-card-light dark:shadow-none">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                  CREW DISPATCH STATUS (6 PEOPLE TOTAL)
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  SHUTTLE CAPACITY: 6
                </span>
              </div>

              <div className="mt-6 p-5 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      Primary Shuttle Vehicle
                    </span>
                  </div>
                  <span className="text-xs font-mono text-indigo-700 dark:text-indigo-300 font-bold">
                    1 Vehicle Driver + {steps[activeStep].shuttlePassengerCount} Passengers
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <div className="px-3 py-1.5 rounded-lg bg-indigo-500/10 dark:bg-indigo-600/30 border border-indigo-500/30 dark:border-indigo-500/40 flex items-center space-x-1.5 text-xs text-indigo-800 dark:text-indigo-200 font-medium">
                    <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="font-mono">Shuttle Driver</span>
                  </div>

                  {Array.from({ length: steps[activeStep].shuttlePassengerCount }).map(
                    (_, i) => (
                      <motion.div
                        key={`passenger-${i}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="px-3 py-1.5 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center space-x-1.5 text-xs text-amber-900 dark:text-amber-300 font-medium"
                      >
                        <User className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span className="font-mono">Driver {i + 1}</span>
                      </motion.div>
                    )
                  )}

                  {Array.from({
                    length: 5 - steps[activeStep].shuttlePassengerCount,
                  }).map((_, i) => (
                    <div
                      key={`dropped-${i}`}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center space-x-1.5 text-xs text-emerald-800 dark:text-emerald-400 font-medium"
                    >
                      <Car className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="font-mono">Car {i + 1} Collected</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-slate-100/80 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 text-xs font-mono font-semibold">
                  <Car className="w-3.5 h-3.5 text-slate-500" />
                  <span>CARS COLLECTED</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1 font-mono">
                  {steps[activeStep].carsCollected} / 5
                </div>
              </div>

              <div className="bg-slate-100/80 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 text-xs font-mono font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>PAID DRIVER HOURS</span>
                </div>
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-300 mt-1 font-mono">
                  {steps[activeStep].paidHoursAccrued}
                </div>
              </div>

              <div className="bg-slate-100/80 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/5 col-span-2 sm:col-span-1">
                <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 text-xs font-mono font-semibold">
                  <PoundSterling className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                  <span>CUMULATIVE COST</span>
                </div>
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 mt-1 font-mono">
                  {steps[activeStep].costAccrued}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote Disclaimer */}
        <p className="text-xs text-slate-500 font-mono italic text-center pt-2">
          * Illustrative scenario based on the Route Portal analysis. This does not represent CarPlanet's production routing algorithm.
        </p>
      </div>
    </section>
  );
};
