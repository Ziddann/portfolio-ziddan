"use client";

import React, { useState } from "react";
import { experienceData } from "@/data/experience";
import { SECTION_METADATA } from "@/data/sections";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/common/Container";
import { GameWindow } from "@/components/ui/GameWindow";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { Pagination } from "@/components/ui/Pagination";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type FilterType = "All" | "Work" | "Capstone" | "Organization";

const typeMeta: Record<
  Exclude<FilterType, "All">,
  { label: string; className: string }
> = {
  Work: { label: "MAGANG / KERJA", className: "bg-rust text-paper-light border-ink" },
  Capstone: { label: "CAPSTONE IOT", className: "bg-teal text-paper border-ink" },
  Organization: { label: "ORGANISASI", className: "bg-moss text-ink border-ink" },
};

const filters: { label: string; value: FilterType }[] = [
  { label: "SEMUA", value: "All" },
  { label: "MAGANG", value: "Work" },
  { label: "CAPSTONE", value: "Capstone" },
  { label: "ORGANISASI", value: "Organization" },
];

export function ExperienceSection() {
  const metadata = SECTION_METADATA.experience;
  const [filter, setFilter] = useState<FilterType>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems =
    filter === "All"
      ? experienceData
      : experienceData.filter((item) => item.type === filter);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <section
      id="experience"
      aria-label="Pengalaman kerja, capstone, dan organisasi"
      className="relative overflow-hidden border-b-2 border-ink bg-paper py-16 sm:py-24"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 top-12 select-none font-display text-[9rem] leading-none text-ink/[0.04] sm:text-[13rem]"
      >
        03
      </span>

      <Container className="relative">
        <Reveal>
          <SectionHeading
            index="03"
            badge="PENGALAMAN"
            title="Quest Log: Riwayat Profesional"
            description="Setiap peran adalah misi yang tercatat: magang industri, capstone IoT, dan kepemimpinan organisasi. Filter log untuk melihat jenis quest tertentu."
            info={metadata}
            aside={
              <div className="flex flex-wrap items-center gap-1 border-2 border-ink bg-paper-light p-1 shadow-pixel-sm">
                {filters.map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => handleFilterChange(tab.value)}
                    aria-pressed={filter === tab.value}
                    className={cn(
                      "border-2 px-2.5 py-1.5 font-pixel text-[8px] uppercase transition-colors",
                      filter === tab.value
                        ? "border-ink bg-ink text-paper shadow-[2px_2px_0_0_#C1542D]"
                        : "border-transparent text-muted hover:border-ink/30 hover:bg-paper-mid hover:text-ink"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            }
          />
        </Reveal>

        <Reveal delay={80}>
          <GameWindow
            title="QUEST LOG / PROFESSIONAL"
            meta={`${filteredItems.length} ENTRIES`}
            contentClassName="p-4 sm:p-6"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink/20 pb-3">
              <span className="hud-label flex items-center gap-2 text-rust">
                <PixelIcon name="scroll" size={13} />
                {filter === "All" ? "SEMUA QUEST" : `QUEST: ${filter}`}
              </span>
              <span className="font-terminal text-base text-muted">
                HALAMAN {currentPage} / {Math.max(1, totalPages)}
              </span>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[7px] top-0 hidden border-l-2 border-dashed border-ink/20 md:block"
              />
              {paginatedItems.map((exp, index) => {
                const meta = typeMeta[exp.type];
                const number = String(
                  (currentPage - 1) * itemsPerPage + index + 1
                ).padStart(2, "0");

                return (
                  <article
                    key={exp.id}
                    className="relative grid grid-cols-1 gap-4 border-b-2 border-ink/15 py-5 first:pt-1 last:border-b-0 md:grid-cols-[132px_1fr] md:gap-6"
                  >
                    <div className="relative md:pl-6">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-1 hidden h-4 w-4 border-2 border-ink bg-gold md:block"
                      />
                      <span className="font-terminal text-2xl leading-none text-ink">
                        {exp.period}
                      </span>
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span
                          className={cn(
                            "border px-1.5 py-0.5 font-pixel text-[7px] uppercase leading-relaxed",
                            meta.className
                          )}
                        >
                          {meta.label}
                        </span>
                      </div>
                      <p className="mt-2 flex items-center gap-1 font-terminal text-base leading-none text-muted">
                        <PixelIcon name="pin" size={10} className="text-rust" />
                        {exp.location}
                      </p>
                      <span
                        aria-hidden="true"
                        className="mt-3 block font-display text-3xl leading-none text-ink/10"
                      >
                        {number}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display text-lg uppercase leading-tight text-ink">
                            {exp.role}
                          </h3>
                          <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-rust">
                            <PixelIcon name="coin" size={12} />
                            {exp.company}
                          </p>
                        </div>
                        <PixelIcon
                          name="chevron-right"
                          size={16}
                          className="mt-1 hidden text-gold sm:block"
                        />
                      </div>

                      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                        {exp.description}
                      </p>

                      <div className="mt-3 border-l-2 border-gold/60 pl-3">
                        <span className="hud-label-sm mb-1.5 block text-ink/70">
                          TANGGUNG JAWAB & KONTRIBUSI
                        </span>
                        <ul className="grid gap-x-5 gap-y-1 text-xs leading-relaxed text-muted lg:grid-cols-2">
                          {exp.responsibilities.map((item) => (
                            <li key={item} className="flex items-start gap-1.5">
                              <PixelIcon
                                name="arrow-right"
                                size={9}
                                className="mt-1 flex-shrink-0 text-teal"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.technologies.length > 0 && (
                        <div className="mt-3 flex flex-wrap items-center gap-1.5">
                          <span className="hud-label-sm mr-1 text-muted">
                            LOOT:
                          </span>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="border border-ink/30 bg-paper-mid px-1.5 py-0.5 font-terminal text-sm leading-tight text-ink/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemCountDescription={`Menampilkan entri ${
                (currentPage - 1) * itemsPerPage + 1
              }–${Math.min(
                currentPage * itemsPerPage,
                filteredItems.length
              )} dari ${filteredItems.length}`}
            />
          </GameWindow>
        </Reveal>
      </Container>
    </section>
  );
}
