import React, { useRef, useState, useEffect } from 'react';
import CinematicCanvas from './CinematicCanvas';
import { ArrowDown, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function HeroSection({ onOpenResume }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute smooth opacity and transform for the 3 captions
  const getStageStyle = (start, end) => {
    const duration = end - start;
    const fadeDuration = duration * 0.22;

    let opacity = 0;
    let translateY = 20;

    if (scrollProgress >= start && scrollProgress <= end) {
      if (scrollProgress < start + fadeDuration) {
        // Fade in
        const factor = (scrollProgress - start) / fadeDuration;
        opacity = factor;
        translateY = 20 * (1 - factor);
      } else if (scrollProgress > end - fadeDuration) {
        // Fade out
        const factor = (end - scrollProgress) / fadeDuration;
        opacity = factor;
        translateY = -20 * (1 - factor);
      } else {
        // Full hold
        opacity = 1;
        translateY = 0;
      }
    } else if (scrollProgress < start) {
      opacity = 0;
      translateY = 20;
    } else {
      opacity = 0;
      translateY = -20;
    }

    return {
      opacity,
      transform: `translate3d(0, ${translateY}px, 0)`,
      pointerEvents: opacity > 0.3 ? 'auto' : 'none',
      transition: 'opacity 0.15s ease-out, transform 0.15s ease-out'
    };
  };

  return (
    <section ref={containerRef} id="top" className="relative h-[350vh] bg-[#080406]">
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Render the 240-frame Canvas */}
        <CinematicCanvas scrollProgress={scrollProgress} />

        {/* Cinematic Vignette & Ambient Radial Glows */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080406] via-transparent to-[#080406]/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#080406_95%)]" />
        <div className="pointer-events-none absolute inset-0 scanlines opacity-40" />

        {/* Captions Overlay Container */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 pointer-events-none">
          <div className="max-w-6xl mx-auto w-full relative">

            {/* Stage 1: The Developer & AI Engineer (0.0 to 0.28) */}
            <div style={getStageStyle(0.0, 0.28)} className="absolute bottom-0 left-0 right-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f43f5e]/15 border border-[#f43f5e]/30 text-[#f43f5e] font-mono text-xs uppercase tracking-widest mb-3">
                <Sparkles className="h-3 w-3" />
                <span>01 — Software Developer | AI & Full-Stack</span>
              </div>
              <h1 className="font-display text-5xl sm:text-7xl md:text-9xl tracking-tight text-white font-bold leading-none glow-text">
                AKHAND SHUKLA
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-neutral-300 font-body leading-relaxed">
                Specializing in Agentic AI, Multi-Agent Systems (LangGraph), and containerized microservices. Building real-world civic, environmental, and financial intelligence with scalable software.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="px-5 py-2.5 rounded-full bg-[#f43f5e] hover:bg-[#fb7185] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f43f5e]/30 flex items-center gap-2"
                >
                  <span>Explore 5 Flagship Projects</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
                <button
                  onClick={onOpenResume}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 backdrop-blur-md"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Curriculum Vitae</span>
                </button>
              </div>
            </div>

            {/* Stage 2: The Craft & Agentic AI (0.34 to 0.62) */}
            <div style={getStageStyle(0.34, 0.62)} className="absolute bottom-0 left-0 right-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f43f5e]/15 border border-[#f43f5e]/30 text-[#f43f5e] font-mono text-xs uppercase tracking-widest mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f43f5e] animate-pulse" />
                <span>02 — Autonomous Systems</span>
              </div>
              <h2 className="font-display text-5xl sm:text-7xl md:text-9xl tracking-tight text-white font-bold leading-none glow-text">
                <span className="text-[#f43f5e] drop-shadow-[0_0_50px_rgba(244,63,94,0.75)]">AUTONOMOUS</span> SYSTEMS
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-neutral-300 font-body leading-relaxed">
                LangGraph state machine duels, real-time Gemini multimodal Hinglish transcription, RAG environmental intelligence, and cryptographic audit ledgers.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                <span className="px-3 py-1 rounded-full bg-[#f43f5e]/10 border border-[#f43f5e]/25 text-[#f43f5e]">LangGraph</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">FastAPI</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Gemini 2.5</span>
                <span className="px-3 py-1 rounded-full bg-[#f43f5e]/10 border border-[#f43f5e]/25 text-[#f43f5e]">Docker</span>
              </div>
            </div>

            {/* Stage 3: National Hackathons & Platforms (0.68 to 0.96) */}
            <div style={getStageStyle(0.68, 0.96)} className="absolute bottom-0 left-0 right-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
                <span>03 — Proven Track Record</span>
              </div>
              <h2 className="font-display text-5xl sm:text-7xl md:text-9xl tracking-tight text-white font-bold leading-none glow-text">
                NATIONAL IMPACT
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-neutral-300 font-body leading-relaxed">
                4th Place finisher at GDG Indore Hackathon 2026. Internally shortlisted for Smart India Hackathon (SIH) 2026. 5 production projects shipped end-to-end.
              </p>
              <div className="mt-6">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f43f5e] hover:bg-[#fb7185] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f43f5e]/30"
                >
                  <span>View Project Architecture Below</span>
                  <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Scroll Cue */}
        <div className="pointer-events-none absolute bottom-5 right-6 z-20 hidden md:flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-neutral-400">
          <span>Scroll to scrub</span>
          <div className="h-7 w-4 rounded-full border border-neutral-600 flex items-start justify-center p-1">
            <span className="h-1.5 w-1 rounded-full bg-[#f43f5e] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
