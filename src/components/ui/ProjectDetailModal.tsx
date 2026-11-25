"use client";

import React, { useEffect, useRef } from "react";
import { ProjectItem } from "@/types";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { cn } from "@/lib/utils";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { stop, start } = useSmoothScroll();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(Boolean(project), dialogRef);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    stop();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      start();
    };
  }, [project, onClose, stop, start]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/85 p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        className="relative my-auto w-full max-w-3xl border-2 border-paper bg-ink-2 text-paper shadow-[8px_8px_0_0_#C1542D]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b-2 border-paper/30 bg-ink-3 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <span className="border border-gold bg-gold/15 px-1.5 py-0.5 font-pixel text-[7px] uppercase leading-none text-gold">
                PROJECT DOSSIER
              </span>
              <span className="hud-label-sm text-paper/40">{project.year}</span>
            </div>
            <h3
              id="project-detail-title"
              className="font-display text-base uppercase leading-tight text-paper sm:text-lg"
            >
              {project.title}
            </h3>
            <p className="mt-1 font-terminal text-base leading-none text-paper/55">
              {project.role}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup detail proyek"
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center border-2 border-paper/50 bg-ink-2 text-paper transition-colors hover:border-gold hover:text-gold"
          >
            <PixelIcon name="close" size={13} />
          </button>
        </div>

        {/* Body */}
        <div
          data-lenis-prevent
          className="max-h-[72vh] space-y-5 overflow-y-auto px-4 py-5 sm:px-5"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="border border-paper/35 bg-ink px-1.5 py-0.5 font-pixel text-[7px] uppercase text-paper/70">
              {project.category}
            </span>
            <span className="border border-teal/60 bg-teal/15 px-1.5 py-0.5 font-pixel text-[7px] uppercase text-teal-light">
              {project.status}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 border border-gold/60 bg-gold/10 px-1.5 py-0.5 font-pixel text-[7px] uppercase text-gold">
                <PixelIcon name="star" size={8} />
                FEATURED
              </span>
            )}
          </div>

          {/* Overview */}
          <section>
            <h4 className="hud-label mb-2 flex items-center gap-2 text-gold">
              <PixelIcon name="terminal" size={12} />
              Ikhtisar Proyek
            </h4>
            <p className="text-xs leading-relaxed text-paper/70 sm:text-[0.82rem]">
              {project.detail.overview}
            </p>
          </section>

          {/* Problem */}
          <section className="border-2 border-gold/45 bg-gold/[0.07] p-3">
            <h4 className="hud-label-sm mb-1.5 flex items-center gap-1.5 text-gold">
              <PixelIcon name="info" size={11} />
              Problem Statement
            </h4>
            <p className="text-xs leading-relaxed text-paper/70">
              {project.detail.problemStatement}
            </p>
          </section>

          {/* Objectives */}
          <section>
            <h4 className="hud-label mb-2 flex items-center gap-2 text-teal-light">
              <PixelIcon name="target" size={12} />
              Engineering Objectives
            </h4>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {project.detail.objectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 border border-paper/15 bg-ink px-2 py-1.5 text-[11px] leading-relaxed text-paper/65"
                >
                  <PixelIcon
                    name="check"
                    size={10}
                    className="mt-0.5 flex-shrink-0 text-teal-light"
                  />
                  {objective}
                </li>
              ))}
            </ul>
          </section>

          {/* Architecture */}
          <section>
            <h4 className="hud-label mb-2 flex items-center gap-2 text-gold">
              <PixelIcon name="layers" size={12} />
              Arsitektur Teknis
            </h4>
            <div className="border-2 border-paper/25 bg-ink p-3">
              <div className="mb-2 flex items-center gap-1.5 border-b border-paper/15 pb-1.5">
                <span className="h-1.5 w-1.5 bg-rust" />
                <span className="h-1.5 w-1.5 bg-gold" />
                <span className="h-1.5 w-1.5 bg-teal" />
                <span className="ml-auto font-terminal text-sm text-paper/25">
                  architecture.txt
                </span>
              </div>
              <p className="font-terminal text-base leading-relaxed text-teal-light">
                {project.detail.architecture}
              </p>
            </div>
          </section>

          {/* Development process */}
          <section>
            <h4 className="hud-label mb-2 flex items-center gap-2 text-teal-light">
              <PixelIcon name="git-commit" size={12} />
              Development Log
            </h4>
            <ol className="space-y-1.5">
              {project.detail.developmentProcess.map((step, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center border border-paper/35 bg-ink font-pixel text-[7px] text-gold">
                    {index + 1}
                  </span>
                  <span className="text-[11px] leading-relaxed text-paper/65">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* Challenges */}
          <section>
            <h4 className="hud-label mb-2 flex items-center gap-2 text-gold">
              <PixelIcon name="shield" size={12} />
              Tantangan &amp; Solusi
            </h4>
            <div className="space-y-2">
              {project.detail.challengesAndSolutions.map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-paper/20 bg-ink p-2.5"
                >
                  <span className="hud-label-sm mb-1 block text-rose-light">
                    BUG #{index + 1}
                  </span>
                  <p className="text-[11px] font-semibold leading-relaxed text-paper/85">
                    {item.challenge}
                  </p>
                  <p className="mt-1.5 border-l-2 border-teal pl-2 text-[11px] leading-relaxed text-paper/55">
                    <span className="text-teal-light">FIX &gt; </span>
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcome */}
          <section className="border-2 border-moss/60 bg-moss/10 p-3">
            <h4 className="hud-label-sm mb-1.5 flex items-center gap-1.5 text-moss-light">
              <PixelIcon name="trophy" size={11} />
              Hasil Akhir &amp; Dampak
            </h4>
            <p className="text-xs leading-relaxed text-paper/70">
              {project.detail.finalOutcome}
            </p>
          </section>

          {/* Tech stack */}
          <section>
            <span className="hud-label-sm mb-2 block text-paper/45">
              LOOT / TEKNOLOGI
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-paper/30 bg-ink-3 px-1.5 py-0.5 font-terminal text-sm leading-tight text-paper/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-paper/30 bg-ink px-4 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn pixel-btn-dark pixel-btn-sm"
              >
                <PixelIcon name="external" size={11} />
                REPOSITORI
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn pixel-btn-sm border-paper/40 bg-ink-2 text-paper hover:bg-ink-3"
              >
                <PixelIcon name="play" size={11} className="text-teal-light" />
                LIVE DEMO
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className={cn(
              "hud-label-sm flex items-center gap-1.5 text-paper/45 transition-colors hover:text-gold"
            )}
          >
            <PixelIcon name="close" size={10} />
            TUTUP [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
