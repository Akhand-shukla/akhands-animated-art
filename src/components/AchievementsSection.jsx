import React from 'react';
import { ACHIEVEMENTS, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { Award, GraduationCap, Trophy, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-28 border-t border-[#f43f5e]/20 bg-[#080406] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f43f5e]" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#f43f5e]">04 — Recognition & Competitions</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-12">
          HACKATHONS & CREDENTIALS
        </h2>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={i}
              className="liquid-glass p-6 rounded-2xl border border-white/10 hover:border-[#f43f5e]/50 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#f43f5e]/15 border border-[#f43f5e]/30 text-[#f43f5e]">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-[#f43f5e] mt-0.5">
                      {item.team}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs md:text-sm text-neutral-300 font-body leading-relaxed pt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Box */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#f43f5e]">
              <GraduationCap className="h-4 w-4" />
              <span>Academic Foundation</span>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="liquid-glass p-5 rounded-2xl border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm md:text-base font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-[11px] font-mono text-[#f43f5e] shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400 font-mono">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-neutral-400 font-body pt-1">
                    {edu.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Box */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#f43f5e]">
              <Award className="h-4 w-4" />
              <span>Industry Verified Certifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="liquid-glass p-4 rounded-xl border border-white/10 space-y-2">
                  <div className="text-xs font-semibold text-neutral-200">
                    {cert.name}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#f43f5e] px-2 py-0.5 rounded bg-[#f43f5e]/10 border border-[#f43f5e]/20">
                      {cert.issuer}
                    </span>
                    <CheckCircle className="h-3 w-3 text-neutral-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
