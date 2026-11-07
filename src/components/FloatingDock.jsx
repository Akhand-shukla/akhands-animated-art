import React from 'react';
import { Home, User, Code2, Briefcase, Trophy, Mail, FileText } from 'lucide-react';

export default function FloatingDock({ activeSection, onOpenResume }) {
  const dockItems = [
    { id: 'top', label: 'Intro', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'achievements', label: 'Awards', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 select-none">
      <nav 
        aria-label="Floating quick navigation"
        className="flex items-center gap-1 p-1.5 rounded-full bg-[#070b12]/85 backdrop-blur-2xl border border-white/[0.08] border-t-[#f43f5e]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(244,63,94,0.18)]"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white font-bold shadow-[0_0_20px_rgba(244,63,94,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] scale-105"
                  : "text-neutral-400 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-neutral-400"}`} />
              <span className="hidden sm:inline">{item.label}</span>
              {isActive && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-white shadow-[0_0_8px_#fff]" />
              )}
            </a>
          );
        })}

        {/* Divider */}
        <div className="h-4 w-px bg-white/10 mx-1" />

        {/* Quick Resume Button */}
        <button
          onClick={onOpenResume}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f43f5e]/15 hover:bg-[#f43f5e]/30 border border-[#f43f5e]/35 text-[#f43f5e] hover:text-white font-mono text-[11px] uppercase tracking-wider transition-all"
          title="Open Curriculum Vitae"
        >
          <FileText className="h-3.5 w-3.5" />
          <span className="hidden md:inline">CV</span>
        </button>
      </nav>
    </div>
  );
}
