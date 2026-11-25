"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { SECTION_METADATA } from "@/data/sections";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/common/Container";
import { GameWindow } from "@/components/ui/GameWindow";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { Reveal } from "@/components/ui/Reveal";

const contactRows = [
  {
    id: "email",
    label: "Alamat Email",
    value: profileData.email,
    href: `mailto:${profileData.email}`,
    icon: "mail" as const,
    external: false,
    accent: "text-rust",
  },
  {
    id: "whatsapp",
    label: "Telepon / WhatsApp",
    value: profileData.phone,
    href: profileData.socials.whatsapp,
    icon: "phone" as const,
    external: true,
    accent: "text-teal-dark",
  },
];

export function ContactSection() {
  const metadata = SECTION_METADATA.contact;

  return (
    <section
      id="contact"
      aria-label="Kontak dan komunikasi"
      className="relative overflow-hidden border-b-2 border-ink bg-paper-mid py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-pixel-grid bg-grid-6 opacity-40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 top-10 select-none font-display text-[9rem] leading-none text-ink/[0.04] sm:text-[13rem]"
      >
        08
      </span>

      <Container className="relative">
        <Reveal>
          <SectionHeading
            index="08"
            badge="SAVE POINT"
            title="Mari Terhubung & Berdiskusi"
            description="Terbuka untuk peluang penuh waktu, proyek IoT & perangkat lunak, atau diskusi teknis. Simpan kontak ini sebelum meninggalkan dunia permainan."
            info={metadata}
            aside={
              <div className="flex items-center gap-2 border-2 border-ink bg-paper-light px-3 py-2 shadow-pixel-sm">
                <span className="h-2 w-2 animate-pulse-frame bg-teal" />
                <span className="hud-label-sm text-teal-dark">
                  OPEN TO WORK
                </span>
              </div>
            }
          />
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
          {/* Save crystal / contact info */}
          <Reveal direction="left" className="lg:col-span-5">
            <div className="space-y-5">
              <GameWindow
                title="SAVE POINT / CONTACT"
                meta="READY"
                contentClassName="p-4 sm:p-5"
              >
                <div className="flex items-start gap-3 border-b-2 border-ink/15 pb-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border-2 border-ink bg-gold shadow-[3px_3px_0_0_#191C18]">
                    <PixelIcon name="heart" size={18} className="text-ink" />
                  </span>
                  <p className="text-xs leading-relaxed text-muted">
                    Saya selalu menyambut diskusi profesional, tawaran
                    rekrutmen, maupun pertanyaan seputar proyek. Pilih saluran
                    yang paling nyaman.
                  </p>
                </div>

                <div className="mt-4 space-y-2">
                  {contactRows.map((row) => (
                    <a
                      key={row.id}
                      href={row.href}
                      {...(row.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-3 border-2 border-ink/25 bg-paper-mid/60 px-2.5 py-2 transition-transform hover:-translate-y-0.5 hover:border-ink hover:bg-paper-light hover:shadow-[3px_3px_0_0_#191C18]"
                    >
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border-2 border-ink bg-paper-light">
                        <PixelIcon
                          name={row.icon}
                          size={14}
                          className={row.accent}
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="hud-label-sm block text-muted">
                          {row.label}
                        </span>
                        <span className="block truncate font-terminal text-lg leading-none text-ink">
                          {row.value}
                        </span>
                      </span>
                      <PixelIcon
                        name="arrow-up-right"
                        size={12}
                        className="ml-auto flex-shrink-0 text-muted transition-colors group-hover:text-rust"
                      />
                    </a>
                  ))}

                  <div className="flex items-center gap-3 border-2 border-ink/25 bg-paper-mid/60 px-2.5 py-2">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border-2 border-ink bg-paper-light">
                      <PixelIcon name="pin" size={14} className="text-gold-dark" />
                    </span>
                    <span className="min-w-0">
                      <span className="hud-label-sm block text-muted">
                        Domisili
                      </span>
                      <span className="block truncate font-terminal text-lg leading-none text-ink">
                        {profileData.location}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 border-t-2 border-ink/15 pt-3">
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-btn pixel-btn-sm justify-center"
                  >
                    <PixelIcon name="external" size={10} />
                    LINKEDIN
                  </a>
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-btn pixel-btn-sm justify-center"
                  >
                    <PixelIcon name="external" size={10} />
                    GITHUB
                  </a>
                </div>
              </GameWindow>

              <div className="border-2 border-ink bg-ink-2 p-3 text-paper shadow-[4px_4px_0_0_#2D7770]">
                <span className="hud-label-sm mb-1.5 flex items-center gap-1.5 text-gold">
                  <PixelIcon name="terminal" size={11} />
                  ALUR FORM
                </span>
                <p className="text-[11px] leading-relaxed text-paper/55">
                  Pesan divalidasi dengan skema Zod di server Next.js, diproteksi
                  honeypot anti-bot, lalu diteruskan via webhook n8n ke WhatsApp
                  Cloud API.
                </p>
                <div className="mt-2 flex items-center gap-1.5 border-t border-paper/15 pt-2 font-terminal text-sm leading-none text-teal-light">
                  <PixelIcon name="shield" size={10} />
                  Tanpa eksposur token di browser
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right" delay={90} className="lg:col-span-7">
            <ContactForm ownerWhatsApp={profileData.phone} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
