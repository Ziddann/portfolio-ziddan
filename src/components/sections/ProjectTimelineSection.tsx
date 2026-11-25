"use client";

import React, { useState } from "react";
import { projectMilestonesData } from "@/data/timeline";
import { SECTION_METADATA } from "@/data/sections";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/common/Container";
import { GameWindow } from "@/components/ui/GameWindow";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "smart-classroom-polling",
    name: "Smart Classroom Polling",
    tag: "ESP32 + ROS 2",
  },
  {
    id: "news-portal-winnicode",
    name: "News Portal App",
    tag: "Laravel + React",
  },
];

export function ProjectTimelineSection() {
  const metadata = SECTION_METADATA.timeline;
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    projects[0].id
  );

  const activeMilestones = projectMilestonesData.filter(
    (milestone) => milestone.projectId === selectedProjectId
  );
  const activeProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <section
      id="timeline"
      aria-label="Linimasa pengembangan proyek"
      className="relative overflow-hidden border-b-2 border-ink bg-paper-mid py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-pixel-grid bg-grid-4 opacity-40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 top-10 select-none font-display text-[9rem] leading-none text-ink/[0.04] sm:text-[13rem]"
      >
        05
      </span>

      <Container className="relative">
        <Reveal>
          <SectionHeading
            index="05"
            badge="DEVLOG"
            title="Linimasa: Catatan Pengembangan"
            description="Bukan hasil akhir yang instan — ini log iterasi nyata dari skema database, protokol socket, sampai pengujian perangkat."
            info={metadata}
            aside={
              <div className="flex flex-col gap-1 border-2 border-ink bg-paper-light p-1.5 shadow-pixel-sm">
                <span className="hud-label-sm px-1 text-muted">
                  PILIH PROYEK
                </span>
                <div className="flex flex-wrap gap-1">
                  {projects.map((project) => {
                    const active = selectedProjectId === project.id;
                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => setSelectedProjectId(project.id)}
                        aria-pressed={active}
                        className={cn(
                          "flex flex-col items-start gap-0.5 border-2 px-2 py-1.5 text-left transition-colors",
                          active
                            ? "border-ink bg-ink text-paper shadow-[2px_2px_0_0_#E3A23B]"
                            : "border-ink/20 text-muted hover:border-ink hover:text-ink"
                        )}
                      >
                        <span className="flex items-center gap-1.5 font-pixel text-[8px] uppercase leading-none">
                          <PixelIcon
                            name="git-commit"
                            size={10}
                            className={active ? "text-gold" : "text-rust"}
                          />
                          {project.name}
                        </span>
                        <span
                          className={cn(
                            "font-terminal text-sm leading-none",
                            active ? "text-paper/45" : "text-muted"
                          )}
                        >
                          {project.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            }
          />
        </Reveal>

        <Reveal delay={70}>
          <GameWindow
            title="DEVLOG.TXT / BUILD HISTORY"
            meta={`${activeMilestones.length} COMMITS`}
            tone="dark"
            className="scanlines"
            contentClassName="bg-ink-2"
          >
            {/* Terminal status bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-paper/20 bg-ink px-3 py-2">
              <span className="font-terminal text-base leading-none text-teal-light">
                <span className="text-gold">$</span> git log --oneline{" "}
                {activeProject?.name.toLowerCase().replace(/\s+/g, "-")}
              </span>
              <span className="hud-label-sm flex items-center gap-1.5 text-paper/40">
                <span className="h-1.5 w-1.5 animate-pulse-frame bg-moss" />
                TRACKED
              </span>
            </div>

            <div
              key={selectedProjectId}
              className="space-y-0 px-3 py-4 sm:px-4"
            >
              {activeMilestones.map((milestone, index) => (
                <article
                  key={milestone.id}
                  className="relative border-l-2 border-paper/20 pb-5 pl-4 last:pb-0 sm:pl-5"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[6px] top-1 h-[10px] w-[10px] border-2 border-ink bg-gold"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-paper/15 pb-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="border border-gold/60 bg-gold/15 px-1.5 py-0.5 font-pixel text-[7px] uppercase leading-none text-gold">
                        ITER {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xs font-bold leading-tight text-paper sm:text-sm">
                        {milestone.milestone}
                      </h3>
                    </div>
                    <span className="font-terminal text-base leading-none text-paper/40">
                      [{milestone.date}]
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] leading-relaxed text-paper/60 sm:text-xs">
                    <span className="font-terminal text-base text-teal-light">
                      FEAT &gt;{" "}
                    </span>
                    {milestone.featureImplemented}
                  </p>

                  <div className="mt-2 border-2 border-paper/15 bg-ink p-2">
                    <span className="hud-label-sm flex items-center gap-1.5 text-moss-light">
                      <PixelIcon name="check" size={9} />
                      TECHNICAL IMPROVEMENT
                    </span>
                    <p className="mt-1 text-[11px] leading-relaxed text-paper/55">
                      {milestone.technicalImprovement}
                    </p>
                  </div>

                  <p className="mt-2 flex items-start gap-1.5 font-terminal text-sm leading-snug text-paper/35">
                    <PixelIcon
                      name="terminal"
                      size={10}
                      className="mt-0.5 flex-shrink-0 text-gold"
                    />
                    NOTE: {milestone.notes}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex items-center justify-between gap-2 border-t-2 border-paper/20 bg-ink px-3 py-2">
              <span className="font-terminal text-sm leading-none text-paper/30">
                EOF — {activeMilestones.length} entri dimuat
              </span>
              <span className="hud-label-sm text-paper/25">
                {activeProject?.tag}
              </span>
            </div>
          </GameWindow>
        </Reveal>
      </Container>
    </section>
  );
}
