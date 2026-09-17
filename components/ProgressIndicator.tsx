"use client";

import React from "react";
import { Compass } from "lucide-react";

interface ProgressIndicatorProps {
  currentSection: number;
  totalSections: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentSection,
  totalSections,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center space-x-2 bg-[#0E1017]/90 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-full shadow-2xl text-xs font-mono text-slate-300">
      <Compass className="w-3.5 h-3.5 text-indigo-400" />
      <span>
        {String(currentSection).padStart(2, "0")} / {String(totalSections).padStart(2, "0")}
      </span>
      <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden ml-1">
        <div
          className="h-full bg-indigo-500 rounded-full transition-all duration-300"
          style={{ width: `${(currentSection / totalSections) * 100}%` }}
        />
      </div>
    </div>
  );
};
