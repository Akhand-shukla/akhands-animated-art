import React from 'react';
import { PERSONAL_INFO, METRICS } from '../data/portfolioData';
import { Award, CheckCircle, Code2, Cpu, Globe2, ShieldCheck, FileText } from 'lucide-react';

export default function AboutSection({ onOpenResume }) {
  return (
    <section id="about" className="relative py-28 border-t border-white/10 bg-[#070b12] overflow-hidden">
      {/* Background glow highlights */}
      <div className="pointer-events-none absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-[#f43f5e]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f43f5e]" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#f43f5e]">01 — About Akhand</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white">
          BUILT FOR IMPACT & SCALE
        </h2>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-16">
          {METRICS.map((metric, i) => (
            <div key={i} className="liquid-glass p-5 rounded-2xl border border-white/10 text-center">
              <div className="font-display text-3xl md:text-4xl text-white font-bold tracking-wide">
                {metric.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Deep Story */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white font-display tracking-wide">
              Software Developer & AI Engineer specializing in GenAI, LangGraph, and full-stack architecture.
            </h3>
            
            <p className="text-sm md:text-base text-neutral-300 font-body leading-relaxed">
              I am a Computer Science undergraduate at <strong className="text-white">Pranveer Singh Institute of Technology (PSIT), Kanpur</strong> (2025–2029). My focus centers on solving complex real-world civic, environmental, and financial challenges with scalable, intelligent software.
            </p>

            <p className="text-sm md:text-base text-neutral-300 font-body leading-relaxed">
              From building <strong className="text-white">Jal Sutra</strong> (computing HPI/HEI groundwater heavy-metal contamination indices for SIH 2026) to <strong className="text-white">CivicPulse AI</strong> (GDG Indore 4th-place multimodal complaint classification with Gemini) and <strong className="text-white">SurakshaPay</strong> (autonomous HMAC-verified Razorpay recovery pipelines), every system I ship pairs mathematical rigor with ultra-responsive UX.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f43f5e]/15 hover:bg-[#f43f5e]/25 border border-[#f43f5e]/30 text-[#f43f5e] font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>Read Full Resume</span>
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>Let's Discuss Opportunities</span>
              </a>
            </div>
          </div>

          {/* Right: Pillars / Credentials Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="liquid-glass p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#f43f5e] flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Engineering Standards</span>
              </div>

              <div className="space-y-3 text-xs md:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <Cpu className="h-4 w-4 text-[#f43f5e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Multi-Model Agentic Duels</strong>
                    LangGraph state machines routing Groq API and Gemini Flash with real-time arbitration.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="h-4 w-4 text-[#f43f5e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Geospatial Environmental GIS</strong>
                    Contamination hotspot algorithms, GIS clustering, and RAG-guided mitigation.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-[#f43f5e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Tamper-Evident Ledger Integrity</strong>
                    HMAC-SHA256 webhooks with chained journals guaranteeing zero idempotent duplicate charges.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Education Card */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">Current Education</div>
              <div className="text-sm font-semibold text-white mt-1">B.Tech in Computer Science & Engineering</div>
              <div className="text-xs text-neutral-400 font-mono mt-0.5">PSIT Kanpur — AKTU (2025–2029)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
