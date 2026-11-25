# Portfolio Design System — "ZIDDAN.EXE"

## Direction

A developer portfolio presented as a hand-built 16-bit adventure cartridge, not a
game pastiche. The interface borrows the *grammar* of retro RPGs — title screens,
dialogue windows, inventories, quest logs, level select, save points — and applies
it to real engineering content. Retro texture is a frame; the work stays readable
and credible.

**One sentence:** a warm, editorial game manual for an engineer, with dark HUD
panels, hard pixel edges, and one very deliberate CRT glow.

### What was wrong before

- Every section used the same white card on the same off-white background:
  nine chapters with one visual voice.
- Soft rounded corners, soft shadows, and a floating glass navbar read as a
  generic SaaS template, not a personal identity.
- The accent blue carried no meaning and appeared everywhere.
- Motion was limited to colour hovers; nothing rewarded exploration.
- The developer-as-character idea was suggested by `$ whoami` but never staged.

### Principles

1. **Sections are rooms, not cards.** Each section gets its own composition and
   surface. Shared tokens keep them in one world.
2. **Hard edges, human warmth.** 2px ink borders, offset shadows, paper and
   rust — no glass, no purple gradients, no random glow.
3. **Pixel type is a spice.** `Press Start 2P` only for labels; `Silkscreen` for
   display; `VT323` for HUD readouts; Inter for every paragraph.
4. **Motion explains state.** Presses move down, hover lifts, panels enter once.
   Nothing loops in the reading path.
5. **The content is the loot.** Real projects, roles, and skills occupy the game
   furniture; no invented levels, XP, or achievements.

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `ink` | `#191C18` | Text, borders, dark surfaces |
| `ink-2` | `#242822` | Raised dark panels |
| `paper` | `#F2E7D2` | Page background |
| `paper-2` | `#E8DABF` | Alternate section surface |
| `paper-3` | `#FBF5E7` | Light panels |
| `rust` | `#C1542D` | Primary accent, active states |
| `gold` | `#E3A23B` | Reward / highlight accent |
| `teal` | `#2D7770` | Secondary accent, success |
| `moss` | `#7D9A5A` | Nature / growth accent |
| `rose` | `#B44A4A` | Errors and warnings |
| `muted` | `#5A5A4C` | Supporting text (AA on paper) |

No gradients are used as decoration. Flat blocks and dither patterns only.

## Typography

| Token | Family | Use |
| --- | --- | --- |
| `font-pixel` | Press Start 2P | Eyebrows, HUD labels, tiny metadata |
| `font-display` | Silkscreen | Hero name, section titles |
| `font-terminal` | VT323 | Terminal output, counters, dates |
| `font-sans` | Inter | Body copy, forms, long descriptions |

Rules: pixel type never sets a paragraph; body line-height ≥ 1.65; maximum
measure ~68ch; headings have more space above than below.

## Surfaces & components

- `.pixel-panel` — 2px ink border, 6px hard ink offset shadow, square corners.
- `.pixel-panel-dark` — dark panel, paper border, rust offset shadow.
- `.pixel-inset` — 2px inset border for inputs and slots.
- `.pixel-btn` — hard shadow that collapses on `:active` (button press).
- `.pixel-chip` — small bordered label, no pill radius.
- `.scanlines` — very low-opacity repeating lines inside dark panels only.
- Section divider: a 12px dither strip built from CSS gradients.

## Section staging

| Section | Room | Composition |
| --- | --- | --- |
| Hero | Title screen, night | Asymmetric 7/5: menu + name left, pixel desk scene right |
| About | Character sheet | Portrait + dialogue window, focus pillars as a horizontal trail |
| Skills | Inventory | Category rail + item grid + live item detail card |
| Experience | Quest log | Single chronological ledger with waypoints, filters |
| Projects | Level select | Dark room, featured level wide, asymmetric grid, pagination |
| Timeline | Devlog terminal | Project tabs + terminal-style milestone log |
| Education | Academy record | Framed diploma + course tree |
| Certifications | Trophy room | Horizontal medal rows on a shelf |
| Contact | Save point | Dialogue left, transmission form right |

## Motion

- Lenis smooth scroll, ~1s, gentle ease-out. Disabled for reduced motion.
- Reveal: 20px rise + stepped opacity, 60ms stagger, once per element.
- Hover: 2–4px lift with hard shadow growth; active press inverts the offset.
- Hero: slow scanline in the monitor, coffee steam, twinkling pixels, and subtle
  parallax on the far layer only.
- Cursor: 12px pixel arrow with a short square trail; grows on links, shows a
  bracket on cards, and yields to the native caret in form fields. Only enabled
  for fine pointers without reduced-motion preference.

## Accessibility

- Visible 3px focus ring on every interactive element.
- Real `<a href="#section">` navigation plus buttons for actions.
- All decorative SVG marked `aria-hidden`; every icon-only control labelled.
- Reduced motion removes Lenis, the cursor, reveals, parallax, and CRT animation.
- Contrast checked for body, muted text, chip labels, and dark panels.
