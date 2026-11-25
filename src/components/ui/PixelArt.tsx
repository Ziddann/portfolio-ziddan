import React from "react";
import { ProjectItem } from "@/types";

/* ------------------------------------------------------------------ */
/* Hero: developer at a CRT, seen from the side                        */
/* ------------------------------------------------------------------ */

export function HeroDeskScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 240"
      className={className}
      role="img"
      aria-label="Pixel art illustration of a developer working at a CRT computer in a small night-time room"
      shapeRendering="crispEdges"
    >
      <defs>
        <pattern id="hero-screen-lines" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="1" fill="#F2E7D2" opacity="0.09" />
        </pattern>
        <pattern id="hero-floor-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#F2E7D2" strokeOpacity="0.055" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Room */}
      <rect width="320" height="240" fill="#242822" />
      <rect y="150" width="320" height="90" fill="#1E231E" />
      <rect y="150" width="320" height="90" fill="url(#hero-floor-grid)" />

      {/* Window */}
      <rect x="16" y="16" width="108" height="82" fill="#191C18" />
      <rect x="21" y="21" width="98" height="72" fill="#233A3D" />
      <rect x="21" y="62" width="98" height="31" fill="#1B2B2C" />
      <rect x="86" y="28" width="18" height="18" fill="#E3A23B" />
      <rect x="83" y="31" width="3" height="12" fill="#E3A23B" />
      <rect x="104" y="31" width="3" height="12" fill="#E3A23B" />
      <rect x="90" y="34" width="4" height="4" fill="#C1542D" />
      <rect x="96" y="41" width="3" height="3" fill="#C1542D" />
      <rect x="24" y="78" width="14" height="15" fill="#101715" />
      <rect x="42" y="70" width="11" height="23" fill="#101715" />
      <rect x="57" y="74" width="16" height="19" fill="#101715" />
      <rect x="77" y="81" width="9" height="12" fill="#101715" />
      <rect x="90" y="76" width="13" height="17" fill="#101715" />
      <rect x="107" y="72" width="9" height="21" fill="#101715" />
      <rect x="46" y="75" width="2" height="2" fill="#E3A23B" />
      <rect x="61" y="80" width="2" height="2" fill="#2D7770" />
      <rect x="94" y="81" width="2" height="2" fill="#E3A23B" />
      <rect x="111" y="78" width="2" height="2" fill="#2D7770" />
      <rect x="69" y="21" width="2" height="72" fill="#191C18" />
      <rect x="21" y="55" width="98" height="2" fill="#191C18" />
      <rect x="16" y="96" width="108" height="4" fill="#191C18" />

      {/* Wall shelf and books */}
      <rect x="142" y="62" width="72" height="4" fill="#6B4A2F" />
      <rect x="146" y="42" width="5" height="20" fill="#C1542D" />
      <rect x="152" y="46" width="5" height="16" fill="#E3A23B" />
      <rect x="158" y="39" width="4" height="23" fill="#2D7770" />
      <rect x="163" y="48" width="6" height="14" fill="#7D9A5A" />
      <rect x="175" y="44" width="10" height="10" fill="#C9B99C" />
      <rect x="178" y="47" width="4" height="2" fill="#191C18" />
      <rect x="188" y="50" width="12" height="4" fill="#7D9A5A" />

      {/* Framed pixel sword poster */}
      <rect x="244" y="24" width="52" height="46" fill="#191C18" />
      <rect x="249" y="29" width="42" height="36" fill="#2B3630" />
      <rect x="268" y="34" width="4" height="16" fill="#E3A23B" />
      <rect x="264" y="46" width="12" height="3" fill="#C1542D" />
      <rect x="266" y="49" width="8" height="3" fill="#C1542D" />
      <rect x="268" y="52" width="4" height="8" fill="#C9B99C" />
      <rect x="263" y="33" width="2" height="2" fill="#2D7770" />
      <rect x="276" y="58" width="2" height="2" fill="#E3A23B" />

      {/* Desk lamp */}
      <rect x="48" y="128" width="4" height="38" fill="#191C18" />
      <rect x="44" y="164" width="14" height="4" fill="#191C18" />
      <rect x="43" y="118" width="22" height="12" fill="#E3A23B" />
      <rect x="47" y="130" width="14" height="3" fill="#E3A23B" opacity="0.5" />
      <rect x="56" y="132" width="3" height="10" fill="#F6E2B8" opacity="0.25" />
      <rect x="60" y="142" width="4" height="8" fill="#F6E2B8" opacity="0.15" />

      {/* Desk */}
      <rect x="34" y="166" width="260" height="10" fill="#7A5636" />
      <rect x="34" y="176" width="260" height="8" fill="#5C3F27" />
      <rect x="46" y="184" width="10" height="44" fill="#4A3320" />
      <rect x="274" y="184" width="10" height="44" fill="#4A3320" />
      <rect x="98" y="176" width="84" height="4" fill="#C9B99C" />

      {/* Monitor */}
      <rect x="74" y="90" width="108" height="76" fill="#101410" />
      <rect x="79" y="95" width="98" height="64" fill="#14322F" />
      <rect x="79" y="95" width="98" height="64" fill="url(#hero-screen-lines)" />
      <rect x="84" y="100" width="30" height="3" fill="#2D7770" />
      <rect x="84" y="107" width="52" height="3" fill="#8FBFB0" opacity="0.75" />
      <rect x="90" y="114" width="38" height="3" fill="#E3A23B" opacity="0.85" />
      <rect x="84" y="121" width="64" height="3" fill="#2D7770" opacity="0.7" />
      <rect x="90" y="128" width="26" height="3" fill="#C1542D" opacity="0.8" />
      <rect x="84" y="135" width="46" height="3" fill="#8FBFB0" opacity="0.5" />
      <rect x="120" y="135" width="6" height="3" fill="#F6E2B8" className="animate-blink" />
      <rect x="79" y="152" width="98" height="3" fill="#0B0F0D" />
      <rect x="124" y="166" width="12" height="8" fill="#101410" />
      <rect x="110" y="174" width="40" height="5" fill="#101410" />
      <rect x="79" y="95" width="98" height="3" fill="#F2E7D2" opacity="0.12" />
      <rect
        x="79"
        y="98"
        width="98"
        height="4"
        fill="#F2E7D2"
        opacity="0.06"
        className="animate-scan"
        style={{ transformBox: "fill-box" }}
      />

      {/* Books and mug */}
      <rect x="190" y="156" width="20" height="4" fill="#C1542D" />
      <rect x="190" y="160" width="20" height="4" fill="#E3A23B" />
      <rect x="190" y="164" width="20" height="2" fill="#2D7770" />
      <rect x="174" y="148" width="15" height="18" fill="#C1542D" />
      <rect x="177" y="151" width="9" height="2" fill="#F2E7D2" opacity="0.55" />
      <rect x="189" y="152" width="4" height="8" fill="#C1542D" />
      <rect x="193" y="154" width="2" height="4" fill="#242822" />
      <rect x="178" y="142" width="2" height="2" fill="#F2E7D2" opacity="0.55" className="animate-steam" />
      <rect x="183" y="140" width="2" height="2" fill="#F2E7D2" opacity="0.45" className="animate-steam" style={{ animationDelay: "-1.1s" }} />
      <rect x="187" y="143" width="2" height="2" fill="#F2E7D2" opacity="0.4" className="animate-steam" style={{ animationDelay: "-2.2s" }} />

      {/* Plant */}
      <rect x="244" y="150" width="22" height="18" fill="#C1542D" />
      <rect x="244" y="150" width="22" height="4" fill="#9A3B1F" />
      <rect x="248" y="138" width="4" height="14" fill="#4F6536" />
      <rect x="242" y="140" width="8" height="5" fill="#7D9A5A" />
      <rect x="250" y="132" width="5" height="8" fill="#7D9A5A" />
      <rect x="256" y="138" width="8" height="6" fill="#7D9A5A" />
      <rect x="260" y="146" width="5" height="5" fill="#4F6536" />

      {/* Chair */}
      <rect x="252" y="138" width="10" height="58" fill="#4A3320" />
      <rect x="242" y="190" width="44" height="6" fill="#4A3320" />
      <rect x="278" y="196" width="4" height="28" fill="#33382F" />
      <rect x="248" y="196" width="4" height="28" fill="#33382F" />

      {/* Developer */}
      <rect x="224" y="120" width="38" height="48" fill="#2D7770" />
      <rect x="224" y="120" width="8" height="42" fill="#1E5A55" />
      <rect x="216" y="116" width="30" height="12" fill="#1E5A55" />
      <rect x="212" y="126" width="12" height="20" fill="#2D7770" />
      <rect x="258" y="126" width="6" height="36" fill="#1E5A55" />
      <rect x="224" y="116" width="4" height="12" fill="#F2E7D2" opacity="0.15" />

      {/* Head, hair, glasses, headphones */}
      <rect x="210" y="96" width="26" height="24" fill="#C98E6A" />
      <rect x="208" y="92" width="30" height="10" fill="#2A211C" />
      <rect x="204" y="96" width="8" height="14" fill="#2A211C" />
      <rect x="228" y="100" width="8" height="16" fill="#2A211C" />
      <rect x="234" y="108" width="4" height="8" fill="#C98E6A" />
      <rect x="210" y="106" width="12" height="2" fill="#191C18" />
      <rect x="220" y="106" width="2" height="6" fill="#191C18" />
      <rect x="212" y="108" width="4" height="4" fill="#8FBFB0" />
      <rect x="218" y="108" width="2" height="4" fill="#8FBFB0" />
      <rect x="212" y="109" width="2" height="2" fill="#191C18" />
      <rect x="204" y="112" width="4" height="3" fill="#C98E6A" />
      <rect x="210" y="116" width="8" height="2" fill="#7A4A36" />
      <rect x="206" y="84" width="32" height="5" fill="#C1542D" />
      <rect x="200" y="88" width="8" height="8" fill="#C1542D" />
      <rect x="238" y="96" width="7" height="14" fill="#C1542D" />
      <rect x="203" y="90" width="3" height="4" fill="#E3A23B" />
      <rect x="240" y="99" width="3" height="8" fill="#E3A23B" />

      {/* Arm to keyboard */}
      <rect x="212" y="138" width="24" height="8" fill="#2D7770" />
      <rect x="206" y="144" width="12" height="7" fill="#C98E6A" />
      <rect x="216" y="146" width="10" height="2" fill="#7A4A36" />

      {/* Legs and shoes */}
      <rect x="230" y="164" width="30" height="14" fill="#33382F" />
      <rect x="252" y="176" width="20" height="7" fill="#191C18" />
      <rect x="254" y="176" width="6" height="3" fill="#C9B99C" opacity="0.4" />

      {/* Loose pixels in the air */}
      <rect x="134" y="42" width="3" height="3" fill="#E3A23B" className="animate-twinkle" />
      <rect x="302" y="112" width="2" height="2" fill="#2D7770" className="animate-twinkle" style={{ animationDelay: "-1s" }} />
      <rect x="150" y="128" width="2" height="2" fill="#F2E7D2" opacity="0.5" className="animate-twinkle" style={{ animationDelay: "-2s" }} />
      <rect x="292" y="74" width="3" height="3" fill="#C1542D" className="animate-twinkle" style={{ animationDelay: "-1.6s" }} />
      <rect x="40" y="70" width="2" height="2" fill="#F2E7D2" opacity="0.4" className="animate-twinkle" style={{ animationDelay: "-0.4s" }} />

      {/* Vignette edges */}
      <rect x="0" y="0" width="320" height="4" fill="#191C18" opacity="0.6" />
      <rect x="0" y="236" width="320" height="4" fill="#191C18" opacity="0.6" />
      <rect x="0" y="0" width="4" height="240" fill="#191C18" opacity="0.6" />
      <rect x="316" y="0" width="4" height="240" fill="#191C18" opacity="0.6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* About: player portrait                                              */
/* ------------------------------------------------------------------ */

export function PlayerPortrait({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      role="img"
      aria-label="Pixel art portrait of Ziddan wearing glasses and headphones"
      shapeRendering="crispEdges"
    >
      <defs>
        <pattern id="portrait-grid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M8 0H0V8" fill="none" stroke="#F2E7D2" strokeOpacity="0.07" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="80" height="80" fill="#242822" />
      <rect width="80" height="80" fill="url(#portrait-grid)" />
      <rect x="8" y="62" width="64" height="18" fill="#2D7770" />
      <rect x="8" y="62" width="64" height="4" fill="#1E5A55" />
      <rect x="30" y="54" width="20" height="12" fill="#C98E6A" />
      <rect x="20" y="18" width="40" height="38" fill="#C98E6A" />
      <rect x="18" y="14" width="44" height="10" fill="#2A211C" />
      <rect x="18" y="24" width="6" height="22" fill="#2A211C" />
      <rect x="56" y="24" width="6" height="20" fill="#2A211C" />
      <rect x="24" y="20" width="8" height="4" fill="#2A211C" />
      <rect x="24" y="34" width="14" height="8" fill="#191C18" />
      <rect x="42" y="34" width="14" height="8" fill="#191C18" />
      <rect x="38" y="37" width="4" height="2" fill="#191C18" />
      <rect x="27" y="36" width="8" height="4" fill="#8FBFB0" />
      <rect x="45" y="36" width="8" height="4" fill="#8FBFB0" />
      <rect x="29" y="37" width="3" height="2" fill="#191C18" />
      <rect x="47" y="37" width="3" height="2" fill="#191C18" />
      <rect x="24" y="34" width="2" height="2" fill="#F2E7D2" opacity="0.6" />
      <rect x="42" y="34" width="2" height="2" fill="#F2E7D2" opacity="0.6" />
      <rect x="34" y="46" width="12" height="2" fill="#7A4A36" />
      <rect x="36" y="48" width="8" height="2" fill="#7A4A36" />
      <rect x="14" y="10" width="52" height="5" fill="#C1542D" />
      <rect x="10" y="30" width="8" height="16" fill="#C1542D" />
      <rect x="62" y="30" width="8" height="16" fill="#C1542D" />
      <rect x="13" y="32" width="3" height="10" fill="#E3A23B" />
      <rect x="64" y="32" width="3" height="10" fill="#E3A23B" />
      <rect x="24" y="58" width="32" height="4" fill="#1E5A55" />
      <rect x="38" y="62" width="4" height="18" fill="#191C18" opacity="0.35" />
      <rect x="52" y="66" width="8" height="8" fill="#E3A23B" />
      <rect x="54" y="68" width="4" height="4" fill="#C1542D" />
      <rect x="12" y="70" width="4" height="4" fill="#E3A23B" opacity="0.7" />
      <rect x="66" y="14" width="3" height="3" fill="#2D7770" className="animate-twinkle" />
      <rect x="70" y="52" width="2" height="2" fill="#F2E7D2" opacity="0.5" className="animate-twinkle" style={{ animationDelay: "-1.4s" }} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Project level thumbnails                                            */
/* ------------------------------------------------------------------ */

export function ProjectThumbnail({
  category,
  className,
}: {
  category: ProjectItem["category"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 112"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
    >
      <rect width="200" height="112" fill="#191C18" />

      {category === "IoT & Hardware" && (
        <>
          <rect x="0" y="0" width="200" height="112" fill="#1E2B24" />
          <path d="M0 0H200V112H0z" fill="none" />
          <rect x="18" y="24" width="108" height="64" fill="#2D7770" />
          <rect x="24" y="30" width="96" height="52" fill="#1E5A55" />
          <rect x="56" y="42" width="34" height="28" fill="#191C18" />
          <rect x="62" y="48" width="22" height="16" fill="#7D9A5A" />
          <rect x="28" y="38" width="10" height="3" fill="#E3A23B" />
          <rect x="28" y="48" width="10" height="3" fill="#C1542D" />
          <rect x="28" y="58" width="10" height="3" fill="#E3A23B" />
          <rect x="28" y="68" width="10" height="3" fill="#2D7770" />
          <rect x="104" y="38" width="10" height="3" fill="#E3A23B" />
          <rect x="104" y="48" width="10" height="3" fill="#7D9A5A" />
          <rect x="104" y="58" width="10" height="3" fill="#C1542D" />
          <rect x="104" y="68" width="10" height="3" fill="#E3A23B" />
          <rect x="28" y="80" width="4" height="6" fill="#C9B99C" />
          <rect x="44" y="80" width="4" height="6" fill="#C9B99C" />
          <rect x="76" y="80" width="4" height="6" fill="#C9B99C" />
          <rect x="96" y="80" width="4" height="6" fill="#C9B99C" />
          <rect x="140" y="30" width="4" height="52" fill="#2D7770" />
          <rect x="144" y="26" width="4" height="4" fill="#E3A23B" />
          <rect x="151" y="34" width="8" height="4" fill="#E3A23B" opacity="0.9" />
          <rect x="159" y="28" width="10" height="4" fill="#E3A23B" opacity="0.7" />
          <rect x="169" y="22" width="12" height="4" fill="#E3A23B" opacity="0.45" />
          <rect x="156" y="48" width="3" height="3" fill="#F2E7D2" className="animate-twinkle" />
          <rect x="176" y="58" width="2" height="2" fill="#7D9A5A" className="animate-twinkle" style={{ animationDelay: "-1s" }} />
        </>
      )}

      {category === "Fullstack Web" && (
        <>
          <rect width="200" height="112" fill="#202633" />
          <rect x="22" y="16" width="156" height="80" fill="#191C18" />
          <rect x="26" y="20" width="148" height="72" fill="#F2E7D2" />
          <rect x="26" y="20" width="148" height="12" fill="#C1542D" />
          <rect x="32" y="24" width="4" height="4" fill="#F6E2B8" />
          <rect x="40" y="24" width="4" height="4" fill="#F6E2B8" />
          <rect x="48" y="24" width="4" height="4" fill="#F6E2B8" />
          <rect x="32" y="40" width="44" height="44" fill="#E8DABF" />
          <rect x="82" y="40" width="40" height="8" fill="#2D7770" />
          <rect x="82" y="54" width="80" height="4" fill="#8A8776" />
          <rect x="82" y="62" width="64" height="4" fill="#8A8776" />
          <rect x="82" y="74" width="36" height="10" fill="#C1542D" />
          <rect x="40" y="48" width="28" height="4" fill="#8A8776" />
          <rect x="40" y="58" width="20" height="4" fill="#8A8776" />
          <rect x="40" y="70" width="24" height="8" fill="#7D9A5A" />
          <rect x="146" y="6" width="30" height="30" fill="#242822" />
          <rect x="150" y="10" width="22" height="22" fill="#2D7770" />
          <rect x="154" y="14" width="14" height="3" fill="#8FBFB0" />
          <rect x="154" y="20" width="10" height="3" fill="#E3A23B" />
          <rect x="154" y="26" width="12" height="3" fill="#8FBFB0" />
          <rect x="12" y="92" width="30" height="3" fill="#E3A23B" opacity="0.5" />
        </>
      )}

      {category === "Data & AI" && (
        <>
          <rect width="200" height="112" fill="#1B2420" />
          <rect x="18" y="88" width="164" height="3" fill="#5A5A4C" />
          <rect x="18" y="18" width="3" height="73" fill="#5A5A4C" />
          <rect x="34" y="64" width="18" height="24" fill="#2D7770" />
          <rect x="60" y="48" width="18" height="40" fill="#7D9A5A" />
          <rect x="86" y="56" width="18" height="32" fill="#E3A23B" />
          <rect x="112" y="34" width="18" height="54" fill="#C1542D" />
          <rect x="138" y="44" width="18" height="44" fill="#2D7770" />
          <rect x="34" y="60" width="18" height="3" fill="#8FBFB0" opacity="0.5" />
          <rect x="60" y="44" width="18" height="3" fill="#DFE9CB" opacity="0.5" />
          <rect x="86" y="52" width="18" height="3" fill="#F6E2B8" opacity="0.6" />
          <rect x="112" y="30" width="18" height="3" fill="#F3D6C6" opacity="0.6" />
          <rect x="158" y="22" width="26" height="26" fill="#242822" />
          <rect x="162" y="26" width="18" height="18" fill="#2D7770" />
          <rect x="168" y="32" width="6" height="6" fill="#F2E7D2" />
          <rect x="156" y="56" width="3" height="3" fill="#E3A23B" />
          <rect x="166" y="56" width="3" height="3" fill="#E3A23B" />
          <rect x="176" y="56" width="3" height="3" fill="#E3A23B" />
          <rect x="156" y="66" width="3" height="3" fill="#C1542D" />
          <rect x="166" y="66" width="3" height="3" fill="#C1542D" />
          <rect x="176" y="66" width="3" height="3" fill="#C1542D" />
        </>
      )}

      {category === "Software Engineering" && (
        <>
          <rect width="200" height="112" fill="#2A2721" />
          <rect x="14" y="14" width="70" height="34" fill="#F2E7D2" />
          <rect x="18" y="18" width="62" height="26" fill="#E8DABF" />
          <rect x="24" y="24" width="20" height="3" fill="#191C18" />
          <rect x="24" y="31" width="34" height="2" fill="#8A8776" />
          <rect x="24" y="37" width="28" height="2" fill="#8A8776" />
          <rect x="104" y="24" width="70" height="34" fill="#2D7770" />
          <rect x="108" y="28" width="62" height="26" fill="#1E5A55" />
          <rect x="114" y="34" width="22" height="3" fill="#F2E7D2" />
          <rect x="114" y="41" width="40" height="2" fill="#8FBFB0" />
          <rect x="114" y="47" width="32" height="2" fill="#8FBFB0" />
          <rect x="56" y="64" width="70" height="34" fill="#C1542D" />
          <rect x="60" y="68" width="62" height="26" fill="#9A3B1F" />
          <rect x="66" y="74" width="24" height="3" fill="#F2E7D2" />
          <rect x="66" y="81" width="44" height="2" fill="#F3D6C6" />
          <rect x="66" y="87" width="34" height="2" fill="#F3D6C6" />
          <rect x="84" y="48" width="20" height="16" fill="none" stroke="#E3A23B" strokeWidth="2" />
          <rect x="162" y="64" width="24" height="24" fill="#E3A23B" />
          <rect x="168" y="70" width="12" height="12" fill="#191C18" />
          <rect x="170" y="72" width="8" height="8" fill="#E3A23B" />
          <rect x="10" y="82" width="16" height="3" fill="#E3A23B" opacity="0.6" />
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Certification medal                                                 */
/* ------------------------------------------------------------------ */

const MEDAL_COLORS = [
  { face: "#E3A23B", shade: "#9C6A15", ribbon: "#C1542D" },
  { face: "#2D7770", shade: "#1E5A55", ribbon: "#E3A23B" },
  { face: "#C1542D", shade: "#7E2F18", ribbon: "#2D7770" },
];

export function TrophyBadge({
  index = 0,
  className,
}: {
  index?: number;
  className?: string;
}) {
  const palette = MEDAL_COLORS[index % MEDAL_COLORS.length];
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      <rect x="16" y="2" width="6" height="14" fill={palette.ribbon} />
      <rect x="26" y="2" width="6" height="14" fill={palette.shade} />
      <rect x="12" y="16" width="24" height="4" fill={palette.face} />
      <rect x="8" y="20" width="32" height="4" fill={palette.face} />
      <rect x="6" y="24" width="36" height="12" fill={palette.face} />
      <rect x="8" y="36" width="32" height="4" fill={palette.shade} />
      <rect x="12" y="40" width="24" height="4" fill={palette.shade} />
      <rect x="18" y="44" width="12" height="2" fill={palette.face} />
      <rect x="18" y="24" width="12" height="4" fill="#F2E7D2" />
      <rect x="22" y="28" width="4" height="8" fill="#F2E7D2" />
      <rect x="12" y="24" width="4" height="4" fill="#F2E7D2" opacity="0.55" />
      <rect x="32" y="24" width="4" height="4" fill="#F2E7D2" opacity="0.35" />
    </svg>
  );
}
