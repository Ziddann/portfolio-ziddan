"use client";

import React, { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/data/sections";
import { SectionId } from "@/types";
import { Container } from "@/components/common/Container";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
  onOpenCommandPalette: () => void;
}

export function Navbar({
  activeSection,
  onNavigate,
  onOpenCommandPalette,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      setScrolled(window.scrollY > 24);
    };

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mobileMenuOpen]);

  const handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: SectionId
  ) => {
    event.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-40 w-full border-b-2 border-ink bg-paper/95",
        scrolled ? "shadow-[0_4px_0_0_rgba(25,28,24,0.12)]" : ""
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between gap-3 transition-[height] duration-150",
            scrolled ? "h-[64px]" : "h-[76px]"
          )}
        >
          {/* Cartridge label */}
          <a
            href="#home"
            onClick={(event) => handleItemClick(event, "home")}
            className="group flex flex-shrink-0 items-center gap-2.5"
            aria-label="Kembali ke bagian home"
          >
            <span className="relative flex h-9 w-9 items-center justify-center border-2 border-ink bg-rust font-pixel text-[15px] text-paper-light shadow-pixel-sm transition-transform group-hover:-translate-y-0.5 group-hover:shadow-pixel">
              Z
              <span className="absolute -right-1 -top-1 h-2 w-2 bg-gold" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[15px] uppercase tracking-tight text-ink transition-colors group-hover:text-rust">
                Ziddan
              </span>
              <span className="hud-label-sm mt-1 text-muted">
                PORTFOLIO.EXE
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Navigasi utama"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleItemClick(event, item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative px-2.5 py-2 font-pixel text-[9px] uppercase tracking-[0.02em] transition-colors",
                    isActive
                      ? "bg-ink text-paper shadow-[2px_2px_0_0_#C1542D]"
                      : "text-muted hover:bg-paper-mid hover:text-ink"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2",
                      isActive ? "bg-gold" : "hidden"
                    )}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenCommandPalette}
              aria-label="Buka command palette (Ctrl+K)"
              className="hidden items-center gap-2 border-2 border-ink/30 bg-paper-light px-2.5 py-1.5 font-terminal text-base leading-none text-muted transition-colors hover:border-ink hover:text-ink sm:inline-flex"
            >
              <PixelIcon name="search" size={12} />
              <span className="hidden xl:inline">CARI</span>
              <span className="border border-ink/25 bg-paper-mid px-1 text-[13px] leading-tight">
                ⌘K
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="hidden items-center gap-1.5 border-2 border-ink bg-ink px-3 py-2 font-pixel text-[9px] uppercase tracking-[0.04em] text-paper shadow-pixel-sm transition-transform hover:-translate-y-0.5 hover:bg-ink-3 hover:shadow-pixel active:translate-x-1 active:translate-y-1 active:shadow-none sm:inline-flex"
            >
              <PixelIcon name="message" size={13} className="text-gold" />
              MULAI
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-paper-light text-ink shadow-pixel-sm transition-colors hover:bg-gold-light lg:hidden"
            >
              <PixelIcon name={mobileMenuOpen ? "close" : "menu"} size={16} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t-2 border-ink pb-4 pt-3 lg:hidden"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="hud-label text-rust">PILIH DESTINASI</span>
              <span className="hud-label-sm text-muted">
                {NAV_ITEMS.length} AREA
              </span>
            </div>
            <nav className="grid grid-cols-2 gap-1.5" aria-label="Navigasi seluler">
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(event) => handleItemClick(event, item.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "flex items-center gap-2 border-2 px-2.5 py-2",
                      isActive
                        ? "border-ink bg-ink text-paper shadow-pixel-sm"
                        : "border-ink/25 bg-paper-light text-muted hover:border-ink hover:text-ink"
                    )}
                  >
                    <span
                      className={cn(
                        "font-terminal text-base leading-none",
                        isActive ? "text-gold" : "text-rust"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-pixel text-[9px] uppercase">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </nav>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 border-2 border-ink bg-paper-mid px-3 py-2.5 font-pixel text-[9px] uppercase text-ink hover:bg-gold-light"
            >
              <PixelIcon name="search" size={12} />
              Buka command palette
            </button>
          </div>
        )}
      </Container>

      {/* Scroll progress */}
      <span
        ref={progressRef}
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gold"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
