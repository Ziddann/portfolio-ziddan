"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProjectTimelineSection } from "@/components/sections/ProjectTimelineSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { ProjectDetailModal } from "@/components/ui/ProjectDetailModal";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SectionId, ProjectItem } from "@/types";
import { projectsData } from "@/data/projects";

const SECTION_IDS: SectionId[] = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "timeline",
  "education",
  "certifications",
  "contact",
];

export default function PortfolioPage() {
  const { activeSection, scrollToSection } = useActiveSection(SECTION_IDS, 100);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelectProjectById = (projectId: string) => {
    const found = projectsData.find((project) => project.id === projectId);
    if (found) setSelectedProject(found);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      <main id="main-content" className="w-full flex-1">
        <HeroSection
          onExploreWork={() => scrollToSection("projects")}
          onContactClick={() => scrollToSection("contact")}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection onOpenDetail={(project) => setSelectedProject(project)} />
        <ProjectTimelineSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={scrollToSection}
        onSelectProject={handleSelectProjectById}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
