import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Intro", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Hackathons", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? "py-3 bg-[#070b12]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40" 
        : "py-5 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-[#f43f5e]/50 transition-colors">
            <span className="font-display text-lg text-white font-bold group-hover:text-[#f43f5e] transition-colors">A</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#f43f5e] ring-2 ring-[#070b12]" />
          </div>
          <div>
            <span className="font-display text-lg tracking-wider font-bold text-white block group-hover:text-[#f43f5e] transition-colors">
              AKHAND SHUKLA
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 block -mt-1">
              AI & Full-Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f43f5e]/10 hover:bg-[#f43f5e]/20 border border-[#f43f5e]/30 text-xs font-mono uppercase tracking-wider text-[#f43f5e] transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="px-3 py-1 rounded-full bg-[#f43f5e]/15 border border-[#f43f5e]/30 text-[11px] font-mono text-[#f43f5e]"
          >
            Resume
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-4 bg-[#070b12]/95 backdrop-blur-2xl border-b border-white/10 mt-2 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-neutral-300 hover:text-[#f43f5e] py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 font-mono">
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 font-mono">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
