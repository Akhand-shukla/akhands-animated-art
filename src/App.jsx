import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import FloatingDock from './components/FloatingDock';
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
  const [activeSection, setActiveSection] = useState('top');

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

  // Active section scroll spy to keep above bar and bottom tabs in sync
  useEffect(() => {
    const sectionIds = ['top', 'about', 'skills', 'work', 'achievements', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sectionIds[i]);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b12] text-[#f1f5f9] selection:bg-[#f43f5e] selection:text-white font-body bg-grain">
      {/* Top Fixed Navbar (Above Bar) */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        activeSection={activeSection}
      />

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

      {/* Synchronized Floating Liquid Glass Bottom Tabs Dock */}
      <FloatingDock
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

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
