import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Github, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="work" className="relative py-28 border-t border-white/10 bg-[#070b12] overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#f43f5e]/5 blur-[140px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f43f5e]" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#f43f5e]">03 — Flagship Production Work</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white">
              SHIPPED ARCHITECTURES
            </h2>
            <p className="text-neutral-400 font-body text-sm max-w-lg mt-2">
              Deeply engineered platforms designed for national hackathons, enterprise compliance, civic infrastructure, and fintech revenue recovery.
            </p>
          </div>
          <div className="font-mono text-xs text-neutral-400">
            5 Verified Production Platforms
          </div>
        </div>

        {/* Projects List / Cards */}
        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#f43f5e]/50 transition-all cursor-pointer group relative overflow-hidden"
            >
              {/* Top Accent Rim */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f43f5e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left: Number and Main Titles */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl md:text-4xl text-neutral-500 font-bold group-hover:text-[#f43f5e] transition-colors">
                      {project.number}
                    </span>
                    {project.highlight && (
                      <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${project.badgeColor}`}>
                        {project.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-3xl md:text-5xl font-bold text-white group-hover:text-[#f43f5e] transition-colors tracking-wide">
                    {project.title}
                  </h3>
                  <div className="text-[#f43f5e] text-xs font-mono font-medium">
                    {project.subtitle}
                  </div>
                  <p className="text-neutral-400 text-xs font-mono">
                    {project.tagline}
                  </p>
                </div>

                {/* Middle: Key Highlight Bullets */}
                <div className="lg:col-span-5 space-y-2 text-xs md:text-sm text-neutral-300 font-body">
                  <div className="space-y-1.5">
                    {project.bullets.slice(0, 2).map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#f43f5e] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-neutral-400">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Action Trigger */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 group-hover:bg-[#f43f5e] text-white text-xs font-mono uppercase tracking-wider transition-all"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-neutral-400 hover:text-white p-2 transition-colors"
                    title="View GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
