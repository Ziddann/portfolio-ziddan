import React from "react";
import { profileData } from "@/data/profile";
import { SECTION_METADATA } from "@/data/sections";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GameWindow } from "@/components/ui/GameWindow";
import { PixelIcon, PixelIconName } from "@/components/ui/PixelIcon";
import { PlayerPortrait } from "@/components/ui/PixelArt";
import { Reveal } from "@/components/ui/Reveal";

const focusIcons: PixelIconName[] = ["cpu", "layout", "brain"];
const traits = [
  "Pemecahan masalah sistematis",
  "Kolaboratif & komunikasi terbuka",
  "Cepat belajar & adaptif",
  "Disiplin dokumentasi",
];

export function AboutSection() {
  const metadata = SECTION_METADATA.about;

  return (
    <section
      id="about"
      aria-label="Tentang Ziddan Fadillah"
      className="relative overflow-hidden border-b-2 border-ink bg-paper py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-pixel-grid bg-grid-6 opacity-60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-10 select-none font-display text-[9rem] uppercase leading-none text-ink/[0.045] sm:text-[14rem]"
      >
        01
      </span>

      <Container className="relative">
        <Reveal>
          <SectionHeading
            index="01"
            badge="TENTANG SAYA"
            title="Latar Belakang & Filosofi Rekayasa"
            description="Cerita perjalanan personal, motivasi eksplorasi teknologi, serta pendekatan sistematis dalam membangun perangkat lunak dan sistem cerdas."
            info={metadata}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Character sheet */}
          <Reveal direction="left" className="lg:col-span-5">
            <GameWindow
              title="CHARACTER SHEET"
              meta="FILE 01"
              className="h-full"
              contentClassName="p-4 sm:p-5"
            >
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 border-2 border-ink shadow-pixel-sm">
                  <PlayerPortrait className="h-24 w-24 sm:h-28 sm:w-28" />
                  <span className="absolute -bottom-2 -right-2 border-2 border-ink bg-gold px-1 py-0.5 font-pixel text-[7px] text-ink">
                    P1
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="hud-label-sm text-rust">NAMA LENGKAP</span>
                  <h3 className="mt-1 font-display text-lg uppercase leading-tight text-ink">
                    Muhamad Ziddan Fadillah
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    Teknik Informatika · Universitas Trisakti
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 border border-teal bg-teal-light px-1.5 py-0.5 font-terminal text-sm leading-none text-teal-dark">
                    <span className="h-1.5 w-1.5 bg-teal" />
                    SIAP KERJA
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t-2 border-ink/20">
                {profileData.contextualMetadata.map((meta) => (
                  <div
                    key={meta.label}
                    className="flex items-start justify-between gap-3 border-b border-ink/15 py-2"
                  >
                    <span className="hud-label-sm pt-0.5 text-muted">
                      {meta.label}
                    </span>
                    <span className="max-w-[60%] text-right font-terminal text-base leading-tight text-ink">
                      {meta.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 border-2 border-ink bg-paper-mid p-3">
                <span className="hud-label-sm mb-2 flex items-center gap-1.5 text-rust">
                  <PixelIcon name="star" size={10} />
                  TRAITS
                </span>
                <div className="grid gap-1.5">
                  {traits.map((trait) => (
                    <div
                      key={trait}
                      className="flex items-center gap-2 text-xs text-ink/80"
                    >
                      <PixelIcon
                        name="check"
                        size={10}
                        className="text-teal"
                      />
                      {trait}
                    </div>
                  ))}
                </div>
              </div>
            </GameWindow>
          </Reveal>

          {/* Dialogue */}
          <Reveal direction="right" delay={100} className="lg:col-span-7">
            <GameWindow
              title="DIALOGUE / ZIDDAN"
              meta="AUTO"
              className="h-full"
              contentClassName="flex h-full flex-col p-5 sm:p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center border-2 border-ink bg-teal text-paper">
                  <PixelIcon name="user" size={11} />
                </span>
                <span className="hud-label text-ink">ZIDDAN</span>
                <span className="font-terminal text-base text-muted">
                  / cerita pemain
                </span>
              </div>

              <div className="space-y-3.5 text-sm leading-relaxed text-muted">
                {profileData.fullBio.map((paragraph, index) => (
                  <p key={index}>
                    {index === 0 ? (
                      <>
                        <span className="mr-2 border-2 border-rust bg-rust px-1 py-0.5 font-pixel text-[8px] leading-none text-paper-light">
                          INTRO
                        </span>
                        {paragraph}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 border-t-2 border-ink/20 pt-4 sm:grid-cols-2">
                <div className="border-l-4 border-rust pl-3">
                  <span className="hud-label-sm mb-1 flex items-center gap-1.5 text-rust">
                    <PixelIcon name="target" size={10} />
                    PENDEKATAN
                  </span>
                  <p className="text-xs leading-relaxed text-muted">
                    Mendiagnosis kebutuhan dari perspektif pengguna hingga
                    struktur basis data; memprioritaskan kode modular, efisien,
                    aman, dan dapat diuji.
                  </p>
                </div>
                <div className="border-l-4 border-teal pl-3">
                  <span className="hud-label-sm mb-1 flex items-center gap-1.5 text-teal-dark">
                    <PixelIcon name="compass" size={10} />
                    ARAH KARIR
                  </span>
                  <p className="text-xs leading-relaxed text-muted">
                    Berkolaborasi dalam tim teknologi inovatif untuk membangun
                    ekosistem IoT cerdas dan aplikasi web terukur yang
                    memberi dampak nyata.
                  </p>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between border-t-2 border-ink/15 pt-3">
                <span className="font-terminal text-base text-muted">
                  [ ESC ] tutup dialog
                </span>
                <button
                  type="button"
                  className="hud-label-sm flex items-center gap-1.5 text-rust"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  LANJUT
                  <PixelIcon name="arrow-right" size={10} />
                </button>
              </div>
            </GameWindow>
          </Reveal>
        </div>

        {/* Focus areas as quest trail */}
        <Reveal delay={80} className="mt-10">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-t-2 border-ink/20 pt-4">
            <span className="hud-label flex items-center gap-2 text-rust">
              <PixelIcon name="map" size={12} />
              ACTIVE QUESTS
            </span>
            <span className="hud-label-sm text-muted">
              03 OBJECTIVES · MAIN STORY
            </span>
          </div>

          <div className="relative grid gap-7 md:grid-cols-3">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-4 hidden border-t-2 border-dashed border-ink/25 md:block"
            />
            {profileData.focusAreas.map((area, index) => {
              const Icon = focusIcons[index % focusIcons.length];
              return (
                <Reveal
                  key={area.title}
                  delay={index * 90}
                  className="relative border-t-4 border-ink pt-5"
                >
                  <span className="absolute -top-3 left-0 flex h-6 w-6 items-center justify-center border-2 border-ink bg-gold font-pixel text-[9px] text-ink">
                    {index + 1}
                  </span>
                  <div className="mb-2 flex items-center gap-2">
                    <PixelIcon
                      name={Icon}
                      size={18}
                      className="text-rust"
                    />
                    <span className="hud-label-sm text-muted">
                      QUEST 0{index + 1}
                    </span>
                  </div>
                  <h4 className="font-display text-base uppercase leading-tight text-ink">
                    {area.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {area.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
