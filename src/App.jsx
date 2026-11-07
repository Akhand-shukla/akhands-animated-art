import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Initialize Lenis Momentum Smooth Scrolling for zero-lag 60fps experience
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080406] text-[#f8fafc] selection:bg-[#f43f5e] selection:text-white font-body bg-grain">
      {/* Top Fixed Corner Anchors */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content */}
      <main>
        {/* Cinematic Scroll Hero Section */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Section & Live Metrics */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Technical Skills Matrix */}
        <SkillsSection />

        {/* Flagship Production Projects */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Hackathons, Education & Certifications */}
        <AchievementsSection />

        {/* Contact, Direct Connect & Footer */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
