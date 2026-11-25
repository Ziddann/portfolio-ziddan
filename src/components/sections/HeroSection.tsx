"use client";

import React, { useEffect, useRef } from "react";
import { profileData } from "@/data/profile";
import { SECTION_METADATA } from "@/data/sections";
import { SectionInfoPopup } from "@/components/ui/SectionInfoPopup";
import { Container } from "@/components/common/Container";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { HeroDeskScene } from "@/components/ui/PixelArt";
import { GameWindow } from "@/components/ui/GameWindow";
import { PixelDivider } from "@/components/common/PixelDivider";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  onExploreWork: () => void;
  onContactClick: () => void;
  onOpenCommandPalette: () => void;
}

const menuItems = [
  {
    id: "projects",
    label: "EXPLORE PROJECTS",
    hint: "ENTER",
    icon: "play" as const,
    primary: true,
  },
  {
    id: "cv",
    label: "DOWNLOAD CV",
    hint: "PDF",
    icon: "download" as const,
    primary: false,
  },
  {
    id: "contact",
    label: "CONTACT PLAYER",
    hint: "MSG",
    icon: "message" as const,
    primary: false,
  },
];

const socialTiles = [
  { label: "GH", aria: "GitHub", href: profileData.socials.github, external: true },
  { label: "IN", aria: "LinkedIn", href: profileData.socials.linkedin, external: true },
  { label: "WA", aria: "WhatsApp", href: profileData.socials.whatsapp, external: true },
  { label: "MAIL", aria: "Email", href: `mailto:${profileData.email}`, external: false },
];

const equipped = [
  "ESP32",
  "ROS 2",
  "Laravel",
  "React.js",
  "TypeScript",
  "Python",
  "MySQL",
  "Tailwind",
];

export function HeroSection({
  onExploreWork,
  onContactClick,
  onOpenCommandPalette,
}: HeroSectionProps) {
  const metadata = SECTION_METADATA.home;
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (decorRef.current) {
        const offset = Math.min(window.scrollY * 0.12, 80);
        decorRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleMenu = (id: string) => {
    if (id === "projects") onExploreWork();
    else if (id === "contact") onContactClick();
    else if (id === "cv") window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      id="home"
      aria-label="Pengenalan developer — layar judul"
      className="relative overflow-hidden border-b-2 border-ink bg-ink text-paper"
    >
      {/* Night sky texture */}
      <div
        ref={decorRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-pixel-grid-dark bg-grid-6 opacity-60" />
        <span className="absolute left-[8%] top-[16%] h-1 w-1 bg-gold animate-twinkle" />
        <span
          className="absolute left-[23%] top-[9%] h-1.5 w-1.5 bg-paper/60 animate-twinkle"
          style={{ animationDelay: "-0.8s" }}
        />
        <span
          className="absolute left-[42%] top-[20%] h-1 w-1 bg-teal animate-twinkle"
          style={{ animationDelay: "-1.6s" }}
        />
        <span
          className="absolute right-[14%] top-[12%] h-1.5 w-1.5 bg-gold animate-twinkle"
          style={{ animationDelay: "-2.1s" }}
        />
        <span
          className="absolute right-[32%] top-[28%] h-1 w-1 bg-paper/40 animate-twinkle"
          style={{ animationDelay: "-1.2s" }}
        />
        <span className="absolute bottom-[22%] left-[4%] h-2 w-2 bg-rust/70" />
        <span className="absolute bottom-[16%] right-[6%] h-1 w-1 bg-paper/30" />
        <div className="absolute -right-24 top-24 h-48 w-48 border-2 border-paper/10" />
        <div className="absolute -right-16 top-32 h-32 w-32 border-2 border-paper/[0.07]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(to_top,rgba(25,28,24,0.75),transparent)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100svh-76px)] grid-cols-1 items-center gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
          <div className="lg:col-span-7">
            <div className="animate-fade-up">
              <div className="mb-6 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 border-2 border-teal bg-teal-dark px-2.5 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping bg-teal opacity-60" />
                    <span className="relative inline-flex h-2 w-2 bg-paper" />
                  </span>
                  <span className="hud-label text-paper">
                    {profileData.statusBadge}
                  </span>
                </span>
                <span className="hud-label border-2 border-paper/25 px-2 py-1.5 text-paper/55">
                  PLAYER 1
                </span>
                <SectionInfoPopup info={metadata} triggerLabel="INFO" />
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "80ms" }}>
              <p className="hud-label mb-3 text-gold">
                MUHAMAD · JAKARTA, INDONESIA
              </p>
              <h1 className="font-display uppercase leading-[0.9] tracking-tight">
                <span className="block text-[clamp(3.1rem,8vw,5.8rem)] text-paper">
                  ZIDDAN
                </span>
                <span className="mt-1 block text-[clamp(2.1rem,5vw,3.7rem)] text-gold">
                  FADILLAH
                </span>
              </h1>
              <p className="mt-5 font-terminal text-xl leading-tight text-paper/75 sm:text-2xl">
                <span className="text-teal">$</span> IoT · AI · Software
                Engineering
              </p>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/65 sm:text-[0.95rem]">
                {profileData.shortBio}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-paper/55">
                <span className="inline-flex items-center gap-1.5">
                  <PixelIcon name="pin" size={13} className="text-rust" />
                  {profileData.location}
                </span>
                <span className="text-paper/20" aria-hidden="true">
                  /
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <PixelIcon name="grad" size={13} className="text-gold" />
                  Universitas Trisakti
                </span>
                <span className="text-paper/20" aria-hidden="true">
                  /
                </span>
                <span className="inline-flex items-center gap-1.5 border border-teal/60 bg-teal-dark/50 px-2 py-0.5 font-terminal text-base text-teal-light">
                  IPK 3.24 / 4.00
                </span>
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "240ms" }}>
              <div className="mt-8 max-w-md border-t-2 border-paper/15 pt-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="hud-label text-paper/40">MAIN MENU</span>
                  <button
                    type="button"
                    onClick={onOpenCommandPalette}
                    className="hud-label flex items-center gap-1 text-paper/40 hover:text-gold"
                  >
                    <PixelIcon name="search" size={10} />
                    CTRL + K
                  </button>
                </div>

                <div className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleMenu(item.id)}
                      className={cn(
                        "group flex w-full items-center gap-3 border-2 px-3 py-2.5 text-left transition-all duration-100",
                        item.primary
                          ? "border-paper bg-rust text-paper-light shadow-[4px_4px_0_0_#E3A23B] hover:-translate-y-0.5 hover:bg-rust-dark hover:shadow-[5px_5px_0_0_#E3A23B] active:translate-x-1 active:translate-y-1 active:shadow-none"
                          : "border-paper/30 bg-ink-2 text-paper/80 hover:border-paper hover:bg-ink-3 hover:text-paper"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 flex-shrink-0 items-center justify-center border",
                          item.primary
                            ? "border-paper/50 bg-ink/15 text-paper"
                            : "border-paper/20 bg-ink text-gold"
                        )}
                      >
                        <PixelIcon name={item.icon} size={13} />
                      </span>
                      <span className="flex-1 font-pixel text-[9px] uppercase tracking-[0.03em]">
                        {item.label}
                      </span>
                      <span
                        className={cn(
                          "font-terminal text-sm",
                          item.primary ? "text-paper/60" : "text-paper/35"
                        )}
                      >
                        {item.hint}
                      </span>
                      <PixelIcon
                        name="arrow-right"
                        size={13}
                        className={cn(
                          "transition-transform group-hover:translate-x-1",
                          item.primary ? "text-gold-light" : "text-gold"
                        )}
                      />
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-1.5">
                  {socialTiles.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.aria}
                      {...(social.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex min-w-9 items-center justify-center border-2 border-paper/25 bg-ink-2 px-2 py-1.5 font-pixel text-[8px] uppercase text-paper/55 transition-colors hover:border-gold hover:bg-ink-3 hover:text-gold"
                    >
                      {social.label}
                    </a>
                  ))}
                  <span className="ml-2 hidden font-terminal text-base text-paper/25 sm:inline">
                    SELECT WITH SCROLL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Player profile / pixel scene */}
          <div
            className="animate-fade-right lg:col-span-5"
            style={{ animationDelay: "160ms" }}
          >
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-4 z-20 border-2 border-ink bg-gold px-2 py-1 font-pixel text-[8px] uppercase text-ink shadow-pixel-sm"
              >
                SAVE SLOT 01
              </span>

              <GameWindow
                title="PLAYER 1 / JAKARTA SECTOR"
                meta="LIVE"
                tone="dark"
                className="scanlines"
                contentClassName="bg-ink-2"
              >
                <HeroDeskScene className="w-full" />

                <div className="border-t-2 border-paper/25 bg-ink-3 px-3 py-3">
                  <div className="flex items-center justify-between gap-3 border-b border-paper/15 pb-2">
                    <span className="hud-label-sm text-paper/45">CLASS</span>
                    <span className="hud-label-sm text-gold">
                      FULLSTACK / IOT
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-b border-paper/15 py-2">
                    <span className="hud-label-sm text-paper/45">GUILD</span>
                    <span className="hud-label-sm text-paper/80">
                      UNIV. TRISAKTI
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <span className="hud-label-sm text-paper/45">STATUS</span>
                    <span className="hud-label-sm flex items-center gap-1.5 text-teal-light">
                      <span className="h-1.5 w-1.5 bg-teal" />
                      READY FOR QUEST
                    </span>
                  </div>
                </div>

                <div className="border-t-2 border-paper/25 bg-ink-2 px-3 py-3">
                  <span className="hud-label-sm mb-2 block text-paper/35">
                    EQUIPPED STACK
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {equipped.map((item) => (
                      <span
                        key={item}
                        className="border border-paper/25 bg-ink-3 px-1.5 py-0.5 font-terminal text-sm leading-tight text-paper/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GameWindow>

              <span
                aria-hidden="true"
                className="absolute -bottom-3 right-4 z-20 border-2 border-paper bg-teal-dark px-2 py-1 font-pixel text-[8px] uppercase text-paper shadow-[3px_3px_0_0_#C1542D]"
              >
                SIGNAL ▮▮▮▯
              </span>
            </div>
          </div>
        </div>
      </Container>

      <PixelDivider tone="rust" />
    </section>
  );
}
