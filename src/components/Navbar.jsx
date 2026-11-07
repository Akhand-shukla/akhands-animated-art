import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenResume, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pageScroll, setPageScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setPageScroll(Math.min(Math.max(window.scrollY / total, 0), 1));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: "top", name: "Intro", href: "#top" },
    { id: "about", name: "About", href: "#about" },
    { id: "skills", name: "Skills", href: "#skills" },
    { id: "work", name: "Work", href: "#work" },
    { id: "achievements", name: "Awards", href: "#achievements" },
    { id: "contact", name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Global Scroll Progress Beam */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-neutral-900">
        <div
          className="h-full bg-gradient-to-r from-[#f43f5e] via-[#fb7185] to-[#f43f5e] shadow-[0_0_12px_#f43f5e] transition-all duration-75"
          style={{ width: `${pageScroll * 100}%` }}
        />
      </div>

      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-[#070b12]/85 backdrop-blur-2xl border-b border-[#f43f5e]/20 shadow-[0_15px_40px_rgba(0,0,0,0.85)]" 
          : "py-5 bg-gradient-to-b from-[#070b12]/90 to-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand / Name */}
          <a href="#top" onClick={(e) => handleNavClick(e, '#top')} className="flex items-center gap-3 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#f43f5e]/60 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <span className="font-display text-lg text-white font-bold group-hover:text-[#f43f5e] transition-colors">A</span>
              <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#f43f5e] shadow-[0_0_8px_#f43f5e] ring-2 ring-[#070b12]" />
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
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#0c1220]/75 backdrop-blur-3xl border border-white/[0.08] border-t-white/15 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#f43f5e]/15 text-[#f43f5e] border border-[#f43f5e]/30 shadow-[0_0_15px_rgba(244,63,94,0.3)] font-semibold"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f43f5e]/15 hover:bg-[#f43f5e] border border-[#f43f5e]/40 text-xs font-mono uppercase tracking-wider text-[#f43f5e] hover:text-white transition-all shadow-[0_0_20px_rgba(244,63,94,0.25)] hover:scale-105 active:scale-95"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
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
          <div className="lg:hidden px-6 py-5 bg-[#070b12]/95 backdrop-blur-2xl border-b border-[#f43f5e]/20 mt-2 space-y-3 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block text-sm font-mono uppercase tracking-wider py-1.5 transition-colors ${
                  activeSection === link.id ? "text-[#f43f5e] font-bold" : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center gap-4">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 font-mono">
                <Github className="h-3.5 w-3.5 text-[#f43f5e]" /> GitHub
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 font-mono">
                <Linkedin className="h-3.5 w-3.5 text-[#f43f5e]" /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
