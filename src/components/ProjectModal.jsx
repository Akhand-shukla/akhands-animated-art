import React from 'react';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Layers, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#0a0f1d] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 text-[#f1f5f9] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#f43f5e] to-transparent" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-[#f43f5e]/20 hover:text-[#f43f5e] border border-white/10 text-neutral-400 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#f43f5e]/10 border border-[#f43f5e]/20 text-[#f43f5e]">
              PROJECT {project.number}
            </span>
            {project.highlight && (
              <span className={`font-mono text-xs px-2.5 py-1 rounded border ${project.badgeColor}`}>
                {project.highlight}
              </span>
            )}
          </div>

          <div>
            <h2 className="font-display text-4xl text-white font-bold">{project.title}</h2>
            <p className="text-[#f43f5e] font-medium text-sm mt-1">{project.subtitle}</p>
            <p className="text-neutral-400 text-xs font-mono mt-1">{project.tagline}</p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2">Technologies & Architecture</span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Implementation */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-3">Key Technical Achievements</span>
            <ul className="space-y-2.5">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-300 leading-relaxed font-body">
                  <CheckCircle2 className="h-4 w-4 text-[#f43f5e] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Inspect Source on GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#f43f5e] hover:bg-[#fb7185] text-white text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
