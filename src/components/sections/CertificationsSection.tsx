import React from "react";
import { certificationsData } from "@/data/certifications";
import { SECTION_METADATA } from "@/data/sections";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/common/Container";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { TrophyBadge } from "@/components/ui/PixelArt";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const frameTones = [
  { strip: "bg-rust", shadow: "shadow-[6px_6px_0_0_#C1542D]", label: "GOLD TIER" },
  { strip: "bg-teal", shadow: "shadow-[6px_6px_0_0_#2D7770]", label: "TEAL TIER" },
  { strip: "bg-gold", shadow: "shadow-[6px_6px_0_0_#E3A23B]", label: "GOLD TIER" },
];

export function CertificationsSection() {
  const metadata = SECTION_METADATA.certifications;

  return (
    <section
      id="certifications"
      aria-label="Sertifikasi dan kredensial kompetensi"
      className="relative overflow-hidden border-b-2 border-ink bg-paper-deep py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-pixel-grid bg-grid-6 opacity-50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-12 select-none font-display text-[9rem] leading-none text-ink/[0.04] sm:text-[13rem]"
      >
        07
      </span>

      <Container className="relative">
        <Reveal>
          <SectionHeading
            index="07"
            badge="TROPHY ROOM"
            title="Sertifikasi & Kredensial"
            description="Tiga piala dari ruang kaca: kredensial teknis yang memvalidasi dasar web, rekayasa capstone IoT, dan kontribusi komunitas developer."
            info={metadata}
            aside={
              <div className="flex items-center gap-3 border-2 border-ink bg-paper-light px-3 py-2 shadow-pixel-sm">
                <PixelIcon name="trophy" size={18} className="text-gold-dark" />
                <div>
                  <span className="hud-label-sm block text-muted">
                    MEDALS UNLOCKED
                  </span>
                  <span className="font-terminal text-xl leading-none text-ink">
                    {String(certificationsData.length).padStart(2, "0")} / 03
                  </span>
                </div>
              </div>
            }
          />
        </Reveal>

        {/* Trophy shelf */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-2 left-0 right-0 hidden h-3 border-2 border-ink bg-paper-mid sm:block"
          />

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certificationsData.map((cert, index) => {
              const tone = frameTones[index % frameTones.length];
              return (
                <Reveal key={cert.id} delay={index * 80} className="h-full">
                  <article
                    data-cursor="card"
                    className={cn(
                      "group flex h-full flex-col border-2 border-ink bg-paper-light transition-transform duration-100 hover:-translate-y-1",
                      tone.shadow
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-between gap-2 border-b-2 border-ink px-2.5 py-1.5",
                        tone.strip
                      )}
                    >
                      <span
                        className={cn(
                          "hud-label-sm",
                          tone.strip === "bg-gold" ? "text-ink" : "text-paper"
                        )}
                      >
                        {tone.label}
                      </span>
                      <span
                        className={cn(
                          "font-terminal text-base leading-none",
                          tone.strip === "bg-gold"
                            ? "text-ink/55"
                            : "text-paper/65"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center border-2 border-ink bg-ink-2">
                          <TrophyBadge index={index} className="h-9 w-9" />
                        </div>
                        <div className="text-right">
                          <span className="hud-label-sm block text-muted">
                            TAHUN
                          </span>
                          <span className="font-terminal text-lg leading-none text-ink">
                            {cert.year}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-3 font-display text-sm uppercase leading-snug text-ink transition-colors group-hover:text-rust">
                        {cert.title}
                      </h3>
                      <p className="mt-1.5 flex items-center gap-1.5 font-terminal text-base leading-none text-rust">
                        <PixelIcon name="award" size={11} />
                        {cert.issuer}
                      </p>

                      {cert.credentialId && (
                        <div className="mt-3 flex items-center gap-1.5 border border-ink/20 bg-paper-mid px-2 py-1">
                          <PixelIcon
                            name="hash"
                            size={10}
                            className="flex-shrink-0 text-muted"
                          />
                          <span className="truncate font-terminal text-sm leading-none text-ink/70">
                            {cert.credentialId}
                          </span>
                        </div>
                      )}

                      <div className="mt-auto border-t-2 border-ink/15 pt-3">
                        <span className="hud-label-sm mb-1.5 block text-muted">
                          SKILL TERVALIDASI
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="flex items-center gap-1 border border-ink/25 bg-paper-light px-1.5 py-0.5 font-terminal text-sm leading-tight text-ink/75"
                            >
                              <PixelIcon
                                name="check"
                                size={8}
                                className="text-teal"
                              />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-2 border-t border-ink/15 pt-2">
                        <span className="hud-label-sm flex items-center gap-1 text-teal-dark">
                          <PixelIcon name="shield" size={9} />
                          VERIFIED
                        </span>
                        {cert.verificationUrl ? (
                          <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-terminal text-base leading-none text-rust hover:underline"
                          >
                            CEK
                            <PixelIcon name="external" size={9} />
                          </a>
                        ) : (
                          <span className="font-terminal text-sm leading-none text-muted">
                            ARCADE RECORD
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
