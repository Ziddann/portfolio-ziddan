"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Container } from "@/components/common/Container";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { PixelDivider } from "@/components/common/PixelDivider";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

const socialLinks = [
  { label: "GITHUB", href: profileData.socials.github, external: true },
  { label: "LINKEDIN", href: profileData.socials.linkedin, external: true },
  { label: "WHATSAPP", href: profileData.socials.whatsapp, external: true },
  { label: "EMAIL", href: `mailto:${profileData.email}`, external: false },
];

export function Footer() {
  const { scrollTo } = useSmoothScroll();

  const handleTop = () => {
    scrollTo(0);
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <PixelDivider tone="rust" />
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="hud-label mb-3 block text-gold">
              END OF CARTRIDGE
            </span>
            <p className="font-display text-2xl uppercase leading-tight text-paper sm:text-3xl">
              Thanks for
              <br />
              playing.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/65">
              {profileData.name} — Teknik Informatika, Universitas Trisakti
              (2022–2026). Terbuka untuk peluang penuh waktu di bidang IoT,
              fullstack, dan rekayasa perangkat lunak.
            </p>
          </div>

          <div className="md:col-span-4">
            <span className="hud-label mb-3 block text-paper/45">
              HUBUNGI PEMBUAT
            </span>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-1.5 border-2 border-paper/35 bg-ink-2 px-2.5 py-1.5 font-pixel text-[8px] uppercase tracking-[0.04em] text-paper/80 transition-colors hover:border-gold hover:bg-ink-3 hover:text-gold"
                >
                  <PixelIcon name="arrow-up-right" size={10} />
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-5 space-y-1 text-sm text-paper/55">
              <p className="flex items-center gap-2">
                <PixelIcon name="mail" size={12} className="text-gold" />
                {profileData.email}
              </p>
              <p className="flex items-center gap-2">
                <PixelIcon name="phone" size={12} className="text-gold" />
                {profileData.phone}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 md:col-span-3 md:items-end">
            <span className="hud-label text-teal">SAVE COMPLETE</span>
            <div className="flex items-center gap-2 text-paper/60">
              <PixelIcon name="heart" size={14} className="text-rust" />
              <span className="font-terminal text-lg leading-none">
                build 2026.11
              </span>
            </div>
            <button
              type="button"
              onClick={handleTop}
              className="inline-flex items-center gap-2 border-2 border-paper/35 bg-ink-2 px-3 py-2 font-pixel text-[8px] uppercase text-paper/80 transition-colors hover:border-gold hover:text-gold"
            >
              <PixelIcon name="arrow-up" size={12} />
              Kembali ke atas
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t-2 border-paper/15 pt-5 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profileData.name}. Semua hak cipta
            dilindungi.
          </p>
          <p className="font-terminal text-base">
            Dibuat dengan Next.js, TypeScript & Tailwind CSS · 16-bit edition
          </p>
        </div>
      </Container>
    </footer>
  );
}
