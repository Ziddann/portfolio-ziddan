"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { SECTION_METADATA } from "@/data/sections";
import { ProjectShowcase } from "@/components/ui/ProjectShowcase";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/common/Container";
import { Pagination } from "@/components/ui/Pagination";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectItem } from "@/types";
import { cn } from "@/lib/utils";

type CategoryFilter =
  | "All"
  | "IoT & Hardware"
  | "Fullstack Web"
  | "Data & AI"
  | "Software Engineering";

interface ProjectsSectionProps {
  onOpenDetail: (project: ProjectItem) => void;
}

const categories: { label: string; value: CategoryFilter }[] = [
  { label: "SEMUA", value: "All" },
  { label: "IoT", value: "IoT & Hardware" },
  { label: "WEB", value: "Fullstack Web" },
  { label: "DATA / AI", value: "Data & AI" },
  { label: "SENG", value: "Software Engineering" },
];

export function ProjectsSection({ onOpenDetail }: ProjectsSectionProps) {
  const metadata = SECTION_METADATA.projects;
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category: CategoryFilter) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section
      id="projects"
      aria-label="Proyek pilihan dan studi kasus"
      className="scanlines relative overflow-hidden border-b-2 border-ink bg-ink py-16 text-paper sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-pixel-grid-dark bg-grid-6 opacity-70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-8 select-none font-display text-[9rem] uppercase leading-none text-paper/[0.04] sm:text-[14rem]"
      >
        04
      </span>

      <Container className="relative">
        <Reveal>
          <SectionHeading
            index="04"
            badge="STAGE SELECT"
            title="Pilih Level: Studi Kasus Proyek"
            description="Empat kategori peta, satu pemain. Buka dossier tiap level untuk membaca arsitektur, tantangan teknis, dan hasil akhirnya."
            info={metadata}
            tone="dark"
            aside={
              <div className="flex items-center gap-3 border-2 border-paper/35 bg-ink-2 px-3 py-2 shadow-[3px_3px_0_0_#C1542D]">
                <PixelIcon name="cartridge" size={20} className="text-gold" />
                <div>
                  <span className="hud-label-sm block text-paper/45">
                    LEVELS TERSEDIA
                  </span>
                  <span className="font-terminal text-xl leading-none text-paper">
                    {String(projectsData.length).padStart(2, "0")} LEVEL · 04 MAP
                  </span>
                </div>
              </div>
            }
          />
        </Reveal>

        {/* Filter rail */}
        <Reveal delay={60}>
          <div className="mb-6 flex flex-col gap-2 border-2 border-paper/30 bg-ink-2 p-2 shadow-[4px_4px_0_0_#191C18] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="hud-label-sm flex items-center gap-1.5 px-1 text-paper/40">
                <PixelIcon name="map" size={11} className="text-gold" />
                FILTER
              </span>
              <div className="flex flex-wrap gap-1">
                {categories.map((category) => {
                  const active = selectedCategory === category.value;
                  return (
                    <button
                      key={category.value}
                      type="button"
                      onClick={() => handleCategoryChange(category.value)}
                      aria-pressed={active}
                      className={cn(
                        "border-2 px-2 py-1.5 font-pixel text-[8px] uppercase leading-none transition-colors",
                        active
                          ? "border-ink bg-gold text-ink shadow-[2px_2px_0_0_#C1542D]"
                          : "border-paper/20 text-paper/55 hover:border-paper/50 hover:text-paper"
                      )}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <span className="font-terminal text-base leading-none text-paper/40">
              {filteredProjects.length} LEVEL · HAL {currentPage}/
              {Math.max(1, totalPages)}
            </span>
          </div>
        </Reveal>

        {/* Stage grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {paginatedProjects.map((project, index) => {
            const isFeaturedFull =
              selectedCategory === "All" &&
              currentPage === 1 &&
              index === 0 &&
              Boolean(project.featured);
            const stage = String(
              (currentPage - 1) * itemsPerPage + index + 1
            ).padStart(2, "0");

            return (
              <Reveal
                key={project.id}
                delay={index * 70}
                className={isFeaturedFull ? "sm:col-span-2" : ""}
              >
                <ProjectShowcase
                  project={project}
                  onOpenDetail={onOpenDetail}
                  variant={isFeaturedFull ? "featured" : "default"}
                  stage={stage}
                />
              </Reveal>
            );
          })}
        </div>

        {paginatedProjects.length === 0 && (
          <div className="border-2 border-paper/30 bg-ink-2 p-8 text-center">
            <p className="font-terminal text-lg text-paper/55">
              &gt; tidak ada level pada filter ini.
            </p>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          tone="dark"
          itemCountDescription={`Menampilkan level ${
            (currentPage - 1) * itemsPerPage + 1
          }–${Math.min(
            currentPage * itemsPerPage,
            filteredProjects.length
          )} dari ${filteredProjects.length}`}
        />
      </Container>
    </section>
  );
}
