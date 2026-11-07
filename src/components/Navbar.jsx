import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-6 md:p-8 pointer-events-none flex items-center justify-between">
      {/* Top Left Corner: Akhand Shukla */}
      <a 
        href="#top" 
        onClick={handleLogoClick} 
        className="pointer-events-auto flex items-center gap-2.5 group"
      >
        <span className="h-2 w-2 rounded-full bg-[#f43f5e] shadow-[0_0_8px_#f43f5e]" />
        <div>
          <span className="font-display text-xl md:text-2xl tracking-wider font-bold text-white block group-hover:text-[#f43f5e] transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            AKHAND SHUKLA
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 block -mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            AI & Full-Stack Engineer
          </span>
        </div>
      </a>

      {/* Top Right Corner: GitHub & LinkedIn */}
      <div className="pointer-events-auto flex items-center gap-2.5">
        <button
          onClick={onOpenResume}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#14060a]/80 hover:bg-[#f43f5e] border border-[#f43f5e]/35 text-xs font-mono uppercase tracking-wider text-[#f43f5e] hover:text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md"
        >
          <FileText className="h-3.5 w-3.5" />
          <span>CV</span>
        </button>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-[#14060a]/80 hover:bg-[#f43f5e] border border-[#f43f5e]/30 text-neutral-300 hover:text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md"
          title="GitHub Profile"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>

        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-[#14060a]/80 hover:bg-[#f43f5e] border border-[#f43f5e]/30 text-neutral-300 hover:text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md"
          title="LinkedIn Profile"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
