"use client";

import React, { useMemo, useState } from "react";
import { skillCategoriesData } from "@/data/skills";
import { SECTION_METADATA } from "@/data/sections";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/common/Container";
import { GameWindow } from "@/components/ui/GameWindow";
import { PixelIcon, PixelIconName } from "@/components/ui/PixelIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SkillItem } from "@/types";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, PixelIconName> = {
  "Programming Languages": "code",
  "Frontend Development": "layout",
  "Backend Development": "server",
  "Database Management": "database",
  "Development Tools & IoT": "cpu",
  "Soft Skills & Methodologies": "users",
};

const levelStyles: Record<
  string,
  { text: string; block: string; border: string }
> = {
  Advanced: {
    text: "text-gold",
    block: "bg-gold",
    border: "border-gold/60",
  },
  Proficient: {
    text: "text-teal-light",
    block: "bg-teal",
    border: "border-teal/60",
  },
  Comfortable: {
    text: "text-moss-light",
    block: "bg-moss",
    border: "border-moss/60",
  },
  Familiar: {
    text: "text-paper/70",
    block: "bg-paper/60",
    border: "border-paper/30",
  },
};

function SkillMeter({
  percentage,
  blockClass,
  label,
}: {
  percentage: number;
  blockClass: string;
  label: string;
}) {
  const filled = Math.round(percentage / 10);
  return (
    <div
      className="flex gap-[2px]"
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "h-1.5 flex-1",
            index < filled ? blockClass : "bg-paper/10"
          )}
        />
      ))}
    </div>
  );
}

export function SkillsSection() {
  const metadata = SECTION_METADATA.skills;
  const totalSkills = useMemo(
    () => skillCategoriesData.reduce((sum, group) => sum + group.skills.length, 0),
    []
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(
    skillCategoriesData[0].skills[0]
  );

  const filteredGroups =
    selectedCategory === "All"
      ? skillCategoriesData
      : skillCategoriesData.filter((group) => group.category === selectedCategory);

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    const group =
      category === "All"
        ? skillCategoriesData[0]
        : skillCategoriesData.find((item) => item.category === category);
    if (group) setSelectedSkill(group.skills[0]);
  };

  const selectedLevel = levelStyles[selectedSkill.level] ?? levelStyles.Familiar;

  return (
    <section
      id="skills"
      aria-label="Keahlian dan keterampilan teknis"
      className="relative overflow-hidden border-b-2 border-ink bg-paper-mid py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-pixel-grid bg-grid-4 opacity-40"
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            index="02"
            badge="KEAHLIAN TEKNIS"
            title="Inventory & Ability Tree"
            description="Setiap teknologi adalah item di dalam tas. Pilih kategori untuk memfilter, lalu pilih item untuk membaca level kenyamanan teknisnya."
            info={metadata}
            aside={
              <div className="flex items-center gap-3 border-2 border-ink bg-paper-light px-3 py-2 shadow-pixel-sm">
                <PixelIcon name="cartridge" size={18} className="text-rust" />
                <div>
                  <span className="hud-label-sm block text-muted">
                    ITEMS LOGGED
                  </span>
                  <span className="font-terminal text-xl leading-none text-ink">
                    {totalSkills} / {skillCategoriesData.length} BAGS
                  </span>
                </div>
              </div>
            }
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
          {/* Bag rail + item detail */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="space-y-4">
              <div className="border-2 border-ink bg-paper-light p-2 shadow-pixel-md">
                <div className="mb-2 flex items-center justify-between border-b-2 border-ink/20 px-1 pb-2">
                  <span className="hud-label-sm flex items-center gap-1.5 text-rust">
                    <PixelIcon name="folder" size={11} />
                    BAGS
                  </span>
                  <span className="font-terminal text-base text-muted">
                    {filteredGroups.length}
                  </span>
                </div>
                <div className="flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                  <button
                    type="button"
                    onClick={() => handleCategory("All")}
                    aria-pressed={selectedCategory === "All"}
                    className={cn(
                      "flex flex-shrink-0 items-center gap-2 border-2 px-2.5 py-2 text-left transition-colors lg:w-full",
                      selectedCategory === "All"
                        ? "border-ink bg-ink text-paper shadow-pixel-sm"
                        : "border-transparent text-muted hover:border-ink/30 hover:bg-paper-mid hover:text-ink"
                    )}
                  >
                    <PixelIcon
                      name="star"
                      size={12}
                      className={selectedCategory === "All" ? "text-gold" : "text-rust"}
                    />
                    <span className="font-pixel text-[8px] uppercase">
                      SEMUA ITEM
                    </span>
                  </button>
                  {skillCategoriesData.map((group) => {
                    const active = selectedCategory === group.category;
                    return (
                      <button
                        key={group.category}
                        type="button"
                        onClick={() => handleCategory(group.category)}
                        aria-pressed={active}
                        className={cn(
                          "flex flex-shrink-0 items-center gap-2 border-2 px-2.5 py-2 text-left transition-colors lg:w-full",
                          active
                            ? "border-ink bg-ink text-paper shadow-pixel-sm"
                            : "border-transparent text-muted hover:border-ink/30 hover:bg-paper-mid hover:text-ink"
                        )}
                      >
                        <PixelIcon
                          name={categoryIcons[group.category] ?? "folder"}
                          size={12}
                          className={active ? "text-gold" : "text-teal"}
                        />
                        <span className="text-[11px] font-semibold leading-tight">
                          {group.category}
                        </span>
                        <span
                          className={cn(
                            "ml-auto font-terminal text-sm",
                            active ? "text-paper/50" : "text-muted"
                          )}
                        >
                          {group.skills.length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Item detail */}
              <div className="border-2 border-ink bg-ink-2 p-3 text-paper shadow-pixel-gold">
                <div className="mb-2 flex items-center justify-between border-b border-paper/20 pb-2">
                  <span className="hud-label-sm text-gold">ITEM DETAIL</span>
                  <span className="hud-label-sm text-paper/35">EQUIPPED</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border-2 border-paper/30 bg-ink-3 text-gold">
                    <PixelIcon
                      name={categoryIcons[selectedSkill.category] ?? "code"}
                      size={22}
                    />
                  </span>
                  <div className="min-w-0" aria-live="polite">
                    <h3 className="text-sm font-bold leading-tight text-paper">
                      {selectedSkill.name}
                    </h3>
                    <p className="mt-1 text-[10px] leading-tight text-paper/45">
                      {selectedSkill.category}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-end justify-between">
                  <span className="hud-label-sm text-paper/45">POWER</span>
                  <span className="font-terminal text-3xl leading-none text-gold">
                    {selectedSkill.percentage}
                    <span className="text-base text-paper/40">/100</span>
                  </span>
                </div>
                <div className="mt-2">
                  <SkillMeter
                    percentage={selectedSkill.percentage}
                    blockClass={selectedLevel.block}
                    label={`${selectedSkill.name}: ${selectedSkill.level}, ${selectedSkill.percentage} persen`}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-paper/15 pt-2">
                  <span className={cn("hud-label-sm", selectedLevel.text)}>
                    {selectedSkill.level}
                  </span>
                  <span className="font-terminal text-sm text-paper/35">
                    TIER {Math.max(1, Math.ceil(selectedSkill.percentage / 20))}
                  </span>
                </div>
                <p className="mt-3 text-[10px] leading-relaxed text-paper/40">
                  Indikator menunjukkan kenyamanan teknis berdasarkan pengalaman
                  proyek, bukan sertifikasi formal.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Inventory */}
          <Reveal direction="right" delay={100} className="lg:col-span-9">
            <GameWindow
              title="INVENTORY / SKILLS"
              meta={`${totalSkills} ITEMS`}
              tone="dark"
              className="h-full scanlines"
              contentClassName="p-3 sm:p-4"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-paper/20 pb-3">
                <div>
                  <span className="hud-label-sm text-gold">
                    {selectedCategory === "All"
                      ? "SEMUA KATEGORI"
                      : selectedCategory}
                  </span>
                  <p className="mt-1 max-w-xl text-[11px] leading-relaxed text-paper/45">
                    {selectedCategory === "All"
                      ? "Telusuri seluruh item. Klik salah satu untuk melihat detail daya dan tier."
                      : filteredGroups[0]?.description}
                  </p>
                </div>
                <span className="hud-label-sm flex items-center gap-1.5 text-paper/35">
                  <span className="h-2 w-2 bg-teal" />
                  LIVE DATA
                </span>
              </div>

              <div className="space-y-5">
                {filteredGroups.map((group) => (
                  <div key={group.category}>
                    <div className="mb-2 flex items-center gap-2">
                      <PixelIcon
                        name={categoryIcons[group.category] ?? "folder"}
                        size={13}
                        className="text-gold"
                      />
                      <span className="hud-label-sm text-paper/70">
                        {group.category}
                      </span>
                      <span className="h-px flex-1 bg-paper/15" />
                      <span className="font-terminal text-sm text-paper/30">
                        {group.skills.length} SLOTS
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
                      {group.skills.map((skill) => {
                        const active = selectedSkill.name === skill.name;
                        const level = levelStyles[skill.level] ?? levelStyles.Familiar;
                        return (
                          <button
                            key={skill.name}
                            type="button"
                            onClick={() => setSelectedSkill(skill)}
                            data-cursor="card"
                            aria-pressed={active}
                            className={cn(
                              "group flex h-full flex-col justify-between gap-2 border-2 p-2.5 text-left transition-all duration-100",
                              active
                                ? "border-gold bg-ink-3 shadow-[3px_3px_0_0_#E3A23B]"
                                : "border-paper/20 bg-ink-2 hover:-translate-y-0.5 hover:border-paper/60 hover:bg-ink-3 hover:shadow-[3px_3px_0_0_#2D7770]"
                            )}
                          >
                            <div className="flex w-full items-start gap-2">
                              <span
                                className={cn(
                                  "mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center border",
                                  active
                                    ? "border-gold/60 bg-gold/15 text-gold"
                                    : "border-paper/15 bg-ink text-teal-light"
                                )}
                              >
                                <PixelIcon
                                  name={categoryIcons[skill.category] ?? "code"}
                                  size={14}
                                />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block text-[11px] font-semibold leading-snug text-paper">
                                  {skill.name}
                                </span>
                                <span
                                  className={cn(
                                    "mt-1 block font-terminal text-sm leading-none",
                                    level.text
                                  )}
                                >
                                  {skill.level}
                                </span>
                              </span>
                              <span className="font-terminal text-base leading-none text-paper/40 group-hover:text-gold">
                                {skill.percentage}
                              </span>
                            </div>

                            <SkillMeter
                              percentage={skill.percentage}
                              blockClass={level.block}
                              label={`${skill.name}: ${skill.level}, ${skill.percentage} persen`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-paper/20 pt-3">
                <span className="hud-label-sm text-paper/30">LEGEND</span>
                {Object.entries(levelStyles).map(([level, style]) => (
                  <span
                    key={level}
                    className={cn(
                      "flex items-center gap-1 font-terminal text-sm leading-none",
                      style.text
                    )}
                  >
                    <span className={cn("h-2 w-2", style.block)} />
                    {level}
                  </span>
                ))}
              </div>
            </GameWindow>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
