"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { NAV_ITEMS } from "@/data/sections";
import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";
import { SectionId } from "@/types";
import { PixelIcon, PixelIconName } from "@/components/ui/PixelIcon";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { cn } from "@/lib/utils";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: SectionId) => void;
  onSelectProject?: (projectId: string) => void;
}

interface PaletteItem {
  id: string;
  title: string;
  category: "SECTION" | "PROJECT" | "SOCIAL" | "ACTION";
  icon: PixelIconName;
  action: () => void;
  detail?: string;
  accent?: string;
}

export function CommandPalette({
  isOpen,
  onClose,
  onNavigate,
  onSelectProject,
}: CommandPaletteProps) {
  const { stop, start } = useSmoothScroll();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useFocusTrap(isOpen, dialogRef);

  useEffect(() => {
    if (!isOpen) return;
    setQuery("");
    setSelectedIndex(0);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    stop();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
      start();
    };
  }, [isOpen, onClose, stop, start]);

  const items = useMemo<PaletteItem[]>(
    () => [
      ...NAV_ITEMS.map((item) => ({
        id: `section-${item.id}`,
        title: `Navigasi ke ${item.label}`,
        category: "SECTION" as const,
        icon: "compass" as const,
        detail: `#${item.id}`,
        accent: "text-gold",
        action: () => {
          onNavigate(item.id);
          onClose();
        },
      })),

      ...projectsData.map((project) => ({
        id: `project-${project.id}`,
        title: project.title,
        category: "PROJECT" as const,
        icon: "folder" as const,
        detail: `${project.category} · ${project.year}`,
        accent: "text-teal-light",
        action: () => {
          onNavigate("projects");
          if (onSelectProject) onSelectProject(project.id);
          onClose();
        },
      })),

      {
        id: "action-resume",
        title: "Download CV / Resume PDF",
        category: "ACTION" as const,
        icon: "download" as const,
        detail: "/resume.pdf",
        accent: "text-gold",
        action: () => {
          window.open("/resume.pdf", "_blank");
          onClose();
        },
      },
      {
        id: "action-contact-form",
        title: "Kirim Pesan Langsung (Contact)",
        category: "ACTION" as const,
        icon: "send" as const,
        detail: "Buka formulir kontak",
        accent: "text-rust",
        action: () => {
          onNavigate("contact");
          onClose();
        },
      },
      {
        id: "social-github",
        title: "Buka Profil GitHub (@Ziddann)",
        category: "SOCIAL" as const,
        icon: "external" as const,
        detail: "github.com/Ziddann",
        accent: "text-paper/50",
        action: () => {
          window.open(profileData.socials.github, "_blank");
          onClose();
        },
      },
      {
        id: "social-linkedin",
        title: "Buka Profil LinkedIn",
        category: "SOCIAL" as const,
        icon: "external" as const,
        detail: "linkedin.com/in/muhammad-ziddan-fadillah",
        accent: "text-paper/50",
        action: () => {
          window.open(profileData.socials.linkedin, "_blank");
          onClose();
        },
      },
      {
        id: "social-whatsapp",
        title: "Hubungi via WhatsApp Langsung",
        category: "SOCIAL" as const,
        icon: "phone" as const,
        detail: profileData.phone,
        accent: "text-teal-light",
        action: () => {
          window.open(profileData.socials.whatsapp, "_blank");
          onClose();
        },
      },
    ],
    [onClose, onNavigate, onSelectProject]
  );

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(normalized) ||
        (item.detail && item.detail.toLowerCase().includes(normalized)) ||
        item.category.toLowerCase().includes(normalized)
    );
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex(
        (prev) =>
          (prev - 1 + filteredItems.length) % (filteredItems.length || 1)
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      filteredItems[selectedIndex]?.action();
    } else if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink/85 px-3 pt-16 sm:pt-24"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-palette-title"
        className="w-full max-w-xl border-2 border-paper bg-ink-2 text-paper shadow-[8px_8px_0_0_#E3A23B]"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between gap-3 border-b-2 border-paper/30 bg-ink-3 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-rust" />
            <span className="h-1.5 w-1.5 bg-gold" />
            <span className="h-1.5 w-1.5 bg-teal" />
            <span
              id="command-palette-title"
              className="hud-label-sm ml-1 text-paper/70"
            >
              COMMAND.EXE
            </span>
          </div>
          <span className="hud-label-sm text-paper/35">CTRL + K</span>
        </div>

        {/* Search input */}
        <div className="flex items-center gap-2.5 border-b-2 border-paper/25 bg-ink px-3 py-3">
          <PixelIcon name="search" size={14} className="text-gold" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari bagian, proyek, atau kata kunci..."
            aria-label="Cari bagian, proyek, atau kata kunci"
            autoComplete="off"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent font-terminal text-lg leading-none text-paper placeholder:text-paper/30 focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Hapus pencarian"
              className="border border-paper/30 bg-ink-2 p-1 text-paper/60 hover:border-gold hover:text-gold"
            >
              <PixelIcon name="close" size={10} />
            </button>
          ) : (
            <span className="hidden border border-paper/25 bg-ink-2 px-1.5 py-0.5 font-pixel text-[8px] text-paper/40 sm:inline">
              ESC
            </span>
          )}
        </div>

        {/* Results */}
        <div
          data-lenis-prevent
          className="max-h-[360px] space-y-1 overflow-y-auto p-2"
        >
          {filteredItems.length === 0 ? (
            <div className="px-3 py-10 text-center">
              <p className="font-terminal text-lg leading-none text-paper/50">
                &gt; tidak ada hasil untuk &ldquo;{query}&rdquo;
              </p>
              <p className="mt-2 font-pixel text-[8px] uppercase text-paper/25">
                Coba kata kunci lain
              </p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={cn(
                    "flex w-full items-center justify-between gap-2 border-2 px-2.5 py-2 text-left transition-colors",
                    isSelected
                      ? "border-gold bg-ink-3 shadow-[3px_3px_0_0_#E3A23B]"
                      : "border-transparent hover:border-paper/25 hover:bg-ink-2"
                  )}
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <span
                      className={cn(
                        "flex h-7 w-7 flex-shrink-0 items-center justify-center border",
                        isSelected
                          ? "border-gold/50 bg-gold/10"
                          : "border-paper/20 bg-ink"
                      )}
                    >
                      <PixelIcon
                        name={item.icon}
                        size={13}
                        className={item.accent ?? "text-paper/70"}
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[12px] font-semibold leading-tight text-paper">
                        {item.title}
                      </span>
                      {item.detail && (
                        <span className="mt-0.5 block truncate font-terminal text-sm leading-none text-paper/40">
                          {item.detail}
                        </span>
                      )}
                    </span>
                  </span>

                  <span className="flex flex-shrink-0 items-center gap-2 pl-2">
                    <span
                      className={cn(
                        "hidden font-pixel text-[7px] uppercase sm:inline",
                        isSelected ? "text-gold" : "text-paper/25"
                      )}
                    >
                      {item.category}
                    </span>
                    {isSelected && (
                      <PixelIcon
                        name="arrow-right"
                        size={11}
                        className="text-gold"
                      />
                    )}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t-2 border-paper/25 bg-ink px-3 py-2">
          <div className="flex items-center gap-3 font-terminal text-sm leading-none text-paper/40">
            <span>&uarr;&darr; navigasi</span>
            <span>&crarr; pilih</span>
          </div>
          <span className="font-terminal text-sm leading-none text-paper/40">
            ESC untuk menutup
          </span>
        </div>
      </div>
    </div>
  );
}
