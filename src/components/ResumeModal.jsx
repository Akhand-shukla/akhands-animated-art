import React from 'react';
import { X, Download, Printer, ExternalLink, Award, BookOpen, Briefcase, Code, GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      {/* Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0e0508] border border-[#f43f5e]/25 rounded-2xl shadow-2xl p-6 md:p-10 text-[#f8fafc]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Control Bar */}
        <div className="sticky -top-6 -mx-6 -mt-6 mb-6 px-6 py-4 bg-[#0e0508]/95 backdrop-blur-md border-b border-[#f43f5e]/20 flex items-center justify-between z-30">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#f43f5e] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Official Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 transition-colors"
              title="Print / Save PDF"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-[#f43f5e]/20 hover:text-[#f43f5e] border border-white/10 text-neutral-400 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Resume Body */}
        <div className="space-y-8">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="font-display text-4xl md:text-5xl tracking-wide text-white font-bold">{PERSONAL_INFO.name}</h1>
            <p className="text-[#f43f5e] font-medium text-base md:text-lg mt-1 tracking-wide">{PERSONAL_INFO.title}</p>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#f43f5e]" />
                {PERSONAL_INFO.location}
              </span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 text-[#f43f5e]" />
                {PERSONAL_INFO.phone}
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 text-[#f43f5e]" />
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-[#f43f5e] transition-colors underline underline-offset-4"
              >
                LinkedIn Profile
              </a>
              <span className="text-neutral-600">•</span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-[#f43f5e] transition-colors underline underline-offset-4"
              >
                GitHub Profile
              </a>
              <span className="text-neutral-600">•</span>
              <a 
                href={PERSONAL_INFO.portfolio} 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-[#f43f5e] transition-colors underline underline-offset-4"
              >
                Live Portfolio
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#f43f5e] mb-2 flex items-center gap-2">
              <Briefcase className="h-3.5 w-3.5" />
              Professional Summary
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-body">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#f43f5e] mb-3 flex items-center gap-2">
              <Code className="h-3.5 w-3.5" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="font-semibold text-neutral-200 mb-1">{cat.title}:</div>
                  <div className="text-neutral-400 leading-relaxed">{cat.skills.join(", ")}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#f43f5e] mb-4 flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" />
              Flagship Projects
            </h2>
            <div className="space-y-5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.025] border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        {proj.title}
                        <span className="text-neutral-500 font-normal text-xs">— {proj.subtitle}</span>
                      </h3>
                    </div>
                    {proj.highlight && (
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded border self-start md:self-auto ${proj.badgeColor}`}>
                        {proj.highlight}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-xs font-mono text-[#f43f5e]/90 mb-2">
                    Stack: {proj.techStack.join(" • ")}
                  </div>

                  <ul className="list-disc list-inside space-y-1.5 text-xs text-neutral-300 font-body leading-relaxed">
                    {proj.bullets.map((b, idx) => (
                      <li key={idx} className="pl-1">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Hackathons */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#f43f5e] mb-3 flex items-center gap-2">
              <Award className="h-3.5 w-3.5" />
              Achievements & Hackathons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {ACHIEVEMENTS.map((ach, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="font-semibold text-neutral-100 flex items-center justify-between">
                    <span>{ach.title}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#f43f5e] mb-1">{ach.team}</div>
                  <p className="text-neutral-400 text-xs leading-relaxed">{ach.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#f43f5e] mb-3 flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5" />
                Education
              </h2>
              <div className="space-y-3 text-xs">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="font-semibold text-neutral-200">{edu.degree}</div>
                    <div className="text-neutral-400 font-mono text-[11px] mt-0.5">{edu.institution} | {edu.period}</div>
                    <div className="text-neutral-500 mt-1">{edu.details}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#f43f5e] mb-3 flex items-center gap-2">
                <Award className="h-3.5 w-3.5" />
                Certifications
              </h2>
              <div className="space-y-2 text-xs">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="text-neutral-300 font-medium">{cert.name}</span>
                    <span className="font-mono text-[10px] text-[#f43f5e] px-2 py-0.5 rounded bg-[#f43f5e]/10 border border-[#f43f5e]/20">
                      {cert.issuer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
