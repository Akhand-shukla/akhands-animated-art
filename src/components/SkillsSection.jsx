import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Cpu, Server, Layout, Cloud, Terminal, Check } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const iconsMap = {
    Code2: Code2,
    Cpu: Cpu,
    Server: Server,
    Layout: Layout,
    Cloud: Cloud,
    Terminal: Terminal,
  };

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const displayedCategories = activeCategory === 'All' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="relative py-28 border-t border-white/10 bg-[#070b12] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f43f5e]" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#f43f5e]">02 — Technical Toolkit</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white">
              ENGINEERED COMPETENCIES
            </h2>
            <p className="text-neutral-400 font-body text-sm max-w-lg mt-2">
              From low-level data structures to multi-agent state machines, containerized FastAPI microservices, and 60fps canvas frontends.
            </p>
          </div>

          {/* Category Filter Pills (Liquid Glass Tab Dock) */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl md:rounded-full bg-[#0c1220]/85 backdrop-blur-2xl border border-white/[0.08] border-t-[#f43f5e]/30 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_10px_25px_rgba(0,0,0,0.6)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white font-bold shadow-[0_0_20px_rgba(244,63,94,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] scale-105"
                    : "text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, index) => {
            const Icon = iconsMap[category.icon] || Code2;
            return (
              <div
                key={category.title}
                className="liquid-glass p-6 rounded-2xl border border-white/10 hover:border-[#f43f5e]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#f43f5e]/10 border border-[#f43f5e]/20 text-[#f43f5e]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-xl text-white font-bold tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-neutral-300 transition-colors"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#f43f5e]/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-World Orchestration Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#f43f5e]/10 via-purple-500/10 to-amber-500/10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-[#f43f5e]/20 border border-[#f43f5e]/40 flex items-center justify-center shrink-0">
              <Cpu className="h-5 w-5 text-[#f43f5e]" />
            </div>
            <div>
              <div className="font-display text-lg text-white font-bold tracking-wide">
                Agentic Multi-Model Production Pipeline
              </div>
              <div className="text-xs text-neutral-400 font-body">
                Orchestrating Gemini 2.5 Multimodal, Groq Llama-3-70B, LangChain & LangGraph in distributed asynchronous topologies.
              </div>
            </div>
          </div>
          <a
            href="#work"
            className="shrink-0 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono uppercase tracking-wider text-white transition-colors"
          >
            See in Production
          </a>
        </div>
      </div>
    </section>
  );
}
