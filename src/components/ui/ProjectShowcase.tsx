import React from "react";
import { ProjectItem } from "@/types";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { ProjectThumbnail } from "@/components/ui/PixelArt";
import { cn } from "@/lib/utils";

const categoryMeta: Record<
  ProjectItem["category"],
  { code: string; chip: string; accent: string }
> = {
  "IoT & Hardware": {
    code: "STAGE // IOT-01",
    chip: "bg-teal text-paper",
    accent: "text-teal-dark",
  },
  "Fullstack Web": {
    code: "STAGE // WEB-02",
    chip: "bg-rust text-paper-light",
    accent: "text-rust",
  },
  "Data & AI": {
    code: "STAGE // DATA-03",
    chip: "bg-moss text-ink",
    accent: "text-moss-dark",
  },
  "Software Engineering": {
    code: "STAGE // SENG-04",
    chip: "bg-gold text-ink",
    accent: "text-gold-dark",
  },
};

interface ProjectShowcaseProps {
  project: ProjectItem;
  onOpenDetail: (project: ProjectItem) => void;
  variant?: "default" | "featured";
  stage?: string;
}

export function ProjectShowcase({
  project,
  onOpenDetail,
  variant = "default",
  stage = "01",
}: ProjectShowcaseProps) {
  const meta = categoryMeta[project.category];
  const featured = variant === "featured";
  const highlightLimit = featured ? 4 : 3;

  return (
    <article
      data-cursor="card"
      className={cn(
        "group relative flex h-full flex-col border-2 border-ink bg-paper-light shadow-pixel-md transition-transform duration-100 hover:-translate-y-1 hover:shadow-pixel-lg",
        featured ? "sm:flex-row" : ""
      )}
    >
      {/* Level thumbnail */}
      <div
        className={cn(
          "relative overflow-hidden border-b-2 border-ink bg-ink",
          featured ? "sm:w-[44%] sm:shrink-0 sm:border-b-0 sm:border-r-2" : ""
        )}
      >
        <ProjectThumbnail
          category={project.category}
          className={cn("w-full", featured ? "h-full sm:min-h-[16rem]" : "")}
        />

        <span className="absolute left-2 top-2 border-2 border-paper/60 bg-ink px-1.5 py-0.5 font-pixel text-[8px] uppercase leading-none text-gold">
          STAGE {stage}
        </span>
        <span className="absolute right-2 top-2 border border-paper/40 bg-ink-2 px-1.5 py-0.5 font-pixel text-[7px] uppercase leading-none text-paper/75">
          {project.status}
        </span>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 border-t-2 border-paper/25 bg-ink px-2 py-1.5">
          <span className="hud-label-sm text-paper/55">{meta.code}</span>
          <span className="font-terminal text-sm leading-none text-paper/45">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <span
            className={cn(
              "border-2 border-ink px-1.5 py-0.5 font-pixel text-[7px] uppercase leading-relaxed",
              meta.chip
            )}
          >
            {project.category}
          </span>
          {project.featured && (
            <span className="hud-label-sm flex items-center gap-1 text-rust">
              <PixelIcon name="star" size={9} />
              FEATURED
            </span>
          )}
        </div>

        <h3 className="mt-2.5 font-display text-base uppercase leading-tight text-ink transition-colors group-hover:text-rust sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-1 font-terminal text-base leading-tight text-muted">
          {project.role}
        </p>
        <p
          className={cn(
            "mt-2.5 text-xs leading-relaxed text-muted",
            featured ? "line-clamp-4" : "line-clamp-3"
          )}
        >
          {project.description}
        </p>

        <ul className="mt-3 space-y-1.5">
          {project.highlights.slice(0, highlightLimit).map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-1.5 text-[11px] leading-relaxed text-ink/75"
            >
              <PixelIcon
                name="check"
                size={10}
                className="mt-0.5 flex-shrink-0 text-teal"
              />
              <span className="line-clamp-2">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-3">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, featured ? 7 : 5).map((tech) => (
              <span
                key={tech}
                className="border border-ink/25 bg-paper-mid px-1.5 py-0.5 font-terminal text-sm leading-tight text-ink/75"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (featured ? 7 : 5) && (
              <span className="border border-ink/25 bg-paper-light px-1.5 py-0.5 font-terminal text-sm leading-tight text-muted">
                +{project.technologies.length - (featured ? 7 : 5)}
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t-2 border-ink/15 pt-3">
            <button
              type="button"
              onClick={() => onOpenDetail(project)}
              className="pixel-btn pixel-btn-primary pixel-btn-sm group/btn"
            >
              <PixelIcon name="book" size={11} />
              <span>DETAIL PROYEK</span>
              <PixelIcon
                name="arrow-right"
                size={10}
                className="transition-transform group-hover/btn:translate-x-0.5"
              />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-terminal text-base leading-none text-muted transition-colors hover:text-rust"
                >
                  <PixelIcon name="external" size={10} />
                  GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-terminal text-base leading-none text-accent transition-colors hover:text-accent-hover"
                >
                  Demo
                  <PixelIcon name="arrow-up-right" size={10} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
