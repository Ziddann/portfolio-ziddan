import React from "react";
import { educationData } from "@/data/education";
import { SECTION_METADATA } from "@/data/sections";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/common/Container";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { TrophyBadge } from "@/components/ui/PixelArt";
import { Reveal } from "@/components/ui/Reveal";

export function EducationSection() {
  const metadata = SECTION_METADATA.education;
  const edu = educationData[0];

  return (
    <section
      id="education"
      aria-label="Riwayat pendidikan akademik"
      className="relative overflow-hidden border-b-2 border-ink bg-paper py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-pixel-grid bg-grid-6 opacity-60"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            index="06"
            badge="AKADEMI"
            title="Akademi & Fondasi Keilmuan"
            description="Pendidikan formal Teknik Informatika di Universitas Trisakti, ditambah seminar, kuliah umum, dan studi ekskursi sebagai EXP tambahan."
            info={metadata}
          />
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-7">
          {/* Diploma */}
          <Reveal direction="left" className="lg:col-span-7">
            <div className="border-2 border-ink bg-paper-deep p-1.5 shadow-pixel-md">
              <div className="border-2 border-ink bg-paper-light p-4 sm:p-6">
                <div className="flex items-center justify-between gap-2 border-b-2 border-ink/20 pb-3">
                  <span className="hud-label-sm text-rust">
                    DIPLOMA // CLASS OF 2026
                  </span>
                  <span className="font-terminal text-base leading-none text-muted">
                    ARSIP AKADEMIK
                  </span>
                </div>

                <div className="mt-5 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center border-2 border-ink bg-ink shadow-[4px_4px_0_0_#E3A23B]">
                    <TrophyBadge index={0} className="h-12 w-12" />
                  </div>
                  <div className="min-w-0">
                    <span className="hud-label-sm text-teal-dark">
                      UNIVERSITAS TRISAKTI
                    </span>
                    <h3 className="mt-1 font-display text-lg uppercase leading-tight text-ink sm:text-xl">
                      {edu.degree}
                    </h3>
                    <p className="mt-1.5 font-terminal text-lg leading-none text-rust">
                      {edu.major}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-1.5 border-y-2 border-dashed border-ink/25 py-3 sm:grid-cols-2">
                  <span className="flex items-center gap-1.5 font-terminal text-base leading-none text-muted">
                    <PixelIcon name="calendar" size={11} className="text-rust" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 font-terminal text-base leading-none text-muted sm:justify-end">
                    <PixelIcon name="pin" size={11} className="text-rust" />
                    {edu.location}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="border-2 border-teal bg-teal-light px-2.5 py-1.5">
                    <span className="hud-label-sm block text-teal-dark">
                      INDEKS PRESTASI KUMULATIF
                    </span>
                    <span className="font-terminal text-2xl leading-none text-teal-dark">
                      {edu.gpa}
                    </span>
                  </div>
                  <span className="rotate-[-2deg] border-2 border-rust bg-rust/10 px-2 py-1 font-pixel text-[8px] uppercase leading-relaxed text-rust">
                    CLASS OF 2026
                  </span>
                </div>

                <div className="mt-5 border-t-2 border-ink/20 pt-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-terminal text-sm leading-none text-muted">
                      PROGRAM STUDI TEKNIK INFORMATIKA
                    </span>
                    <span className="font-pixel text-[8px] uppercase text-ink/50">
                      ARSIP
                    </span>
                  </div>
                  <div className="mt-2 h-[2px] w-40 bg-ink/30" />
                  <span className="mt-1 block font-terminal text-sm leading-none text-muted">
                    Fakultas Teknologi Industri
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Coursework + seminars */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal direction="right">
              <div className="border-2 border-ink bg-paper-light shadow-pixel-sm">
                <div className="flex items-center justify-between gap-2 border-b-2 border-ink bg-paper-mid px-3 py-2">
                  <span className="hud-label-sm flex items-center gap-1.5 text-ink/75">
                    <PixelIcon name="book" size={11} className="text-rust" />
                    COURSE SLOTS
                  </span>
                  <span className="font-terminal text-base leading-none text-muted">
                    {edu.coursework.length} / 8
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3">
                  {edu.coursework.map((course, index) => (
                    <div
                      key={course}
                      className="flex items-center gap-2 border border-ink/20 bg-paper-mid/60 px-2 py-1.5"
                    >
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center border border-ink bg-paper-light font-terminal text-sm leading-none text-rust">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] leading-snug text-ink/80">
                        {course}
                      </span>
                      <PixelIcon
                        name="check"
                        size={10}
                        className="ml-auto flex-shrink-0 text-teal"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={90}>
              <div className="border-2 border-ink bg-ink-2 p-3 text-paper shadow-[4px_4px_0_0_#2D7770]">
                <span className="hud-label-sm mb-2 flex items-center gap-1.5 text-gold">
                  <PixelIcon name="compass" size={11} />
                  FIELD NOTES
                </span>
                <p className="text-[11px] leading-relaxed text-paper/60">
                  Kurikulum menanamkan disiplin perancangan algoritma, analisis
                  kompleksitas komputasi, dan kepatuhan pada standar rekayasa
                  perangkat lunak.
                </p>
                <div className="mt-2 border-t border-paper/15 pt-2 font-terminal text-sm leading-relaxed text-teal-light">
                  <p>&gt; arsip akademik tersimpan</p>
                  <p className="text-paper/35">&gt; akses: publik</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Seminars */}
        <Reveal delay={80} className="mt-8">
          <div className="border-2 border-ink bg-paper-light shadow-pixel-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink bg-paper-mid px-3 py-2">
              <span className="hud-label-sm flex items-center gap-1.5 text-ink/75">
                <PixelIcon name="users" size={11} className="text-teal-dark" />
                SEMINAR &amp; STUDI EKSKURSI LOG
              </span>
              <span className="font-terminal text-base leading-none text-muted">
                {edu.seminars.length} ENTRY
              </span>
            </div>
            <ul className="grid gap-1.5 p-3 sm:grid-cols-2">
              {edu.seminars.map((seminar) => (
                <li
                  key={seminar}
                  className="flex items-start gap-2 border-l-2 border-gold pl-2.5 text-[11px] leading-relaxed text-muted"
                >
                  <PixelIcon
                    name="check"
                    size={10}
                    className="mt-0.5 flex-shrink-0 text-teal"
                  />
                  {seminar}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
