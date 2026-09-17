"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CurrentProblem } from "@/components/CurrentProblem";
import { CostBreakdown } from "@/components/CostBreakdown";
import { CoreInsight } from "@/components/CoreInsight";
import { OptimizerIntro } from "@/components/OptimizerIntro";
import { RouteDemo } from "@/components/RouteDemo";
import { DecisionExplanation } from "@/components/DecisionExplanation";
import { ProductVision } from "@/components/ProductVision";
import { Roadmap } from "@/components/Roadmap";
import { FinalCTA } from "@/components/FinalCTA";
import { AnalysisModal } from "@/components/AnalysisModal";
import { ProgressIndicator } from "@/components/ProgressIndicator";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState<boolean>(false);

  const TOTAL_SECTIONS = 10;

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id^='section-'], section#interactive-demo");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setCurrentSection(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FC] dark:bg-[#08090D] text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white relative transition-colors duration-300">
      {/* Persistent Navigation Bar */}
      <Navbar
        currentSection={currentSection}
        totalSections={TOTAL_SECTIONS}
        onSkipToDemo={() => scrollToSection("interactive-demo")}
        onOpenAnalysis={() => setIsAnalysisOpen(true)}
      />

      {/* Floating Bottom-Right Progress Tracker */}
      <ProgressIndicator currentSection={currentSection} totalSections={TOTAL_SECTIONS} />

      {/* Section 01: Hero */}
      <section id="section-1">
        <Hero
          onSeeHowItWorks={() => scrollToSection("section-2")}
          onJumpToDemo={() => scrollToSection("interactive-demo")}
        />
      </section>

      {/* Section 02: Current Operating Model */}
      <section id="section-2">
        <CurrentProblem />
      </section>

      {/* Section 03: Where Money Goes Cost Breakdown */}
      <section id="section-3">
        <CostBreakdown />
      </section>

      {/* Section 04: The Key Insight */}
      <section id="section-4">
        <CoreInsight />
      </section>

      {/* Section 05: Optimizer Architecture & Formulation */}
      <section id="section-5">
        <OptimizerIntro />
      </section>

      {/* Section 06: Core Interactive Demo */}
      <section id="section-6">
        <RouteDemo />
      </section>

      {/* Section 07: Explainable Decision Logic */}
      <section id="section-7">
        <DecisionExplanation />
      </section>

      {/* Section 08: Product Vision & System Architecture */}
      <section id="section-8">
        <ProductVision />
      </section>

      {/* Section 09: Implementation Roadmap */}
      <section id="section-9">
        <Roadmap />
      </section>

      {/* Section 10: Final Closing CTA & Attribution */}
      <section id="section-10">
        <FinalCTA onOpenAnalysis={() => setIsAnalysisOpen(true)} />
      </section>

      {/* Concept Analysis Modal */}
      <AnalysisModal isOpen={isAnalysisOpen} onClose={() => setIsAnalysisOpen(false)} />
    </main>
  );
}
