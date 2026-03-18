# Jeely Piece Club — Website Design Guidelines

> Use this document as the single source of truth for all design decisions on this prototype and the final Wix build.

---

## 1. Brand Principles

Jeely Piece Club has served the Castlemilk community for over 50 years. Every design choice should reflect these core values:

| Principle | What it means in practice |
|---|---|
| **Warm** | Friendly, inviting. Never clinical or corporate. |
| **Community-led** | Real people, real families. Plain language, no jargon. |
| **Child-friendly** | Playful but not chaotic. Accessible to all ages and abilities. |
| **Trustworthy** | 50 years of service earns authority. Design should feel established. |
| **Bold but calm** | Use strong colours purposefully — not all at once. |

---

## 2. Colour System

### Full Palette

| Name | Hex | Tailwind Token | Role |
|---|---|---|---|
| **Jeely Red** | `#D71920` | `brand-red` | Primary CTAs, hero accent, main stat number, logo match |
| **Red Light** | `#FDEEED` | `brand-red-light` | Hover tints on red elements |
| **Coral** | `#FF8C42` | `coral` | Activity badges, event section labels, "Five decades" border accent, "Play" label |
| **Coral Light** | `#FFF1E6` | `coral-light` | Hover tints on coral elements |
| **Purple** | `#6A5A9A` | `purple` | Workshop badges, creative category dot, secondary stat accent |
| **Purple Light** | `#ECEAF5` | `purple-light` | Hover tints on purple elements |
| **Green** | `#1AD766` | `green` | Sports badges, sports category dot |
| **Green Light** | `#E8FBF0` | `green-light` | Hover tints on green elements |
| **Cream** | `#FAF7F4` | `cream` | Main page background. Warm alternative to pure white. |
| **Sand** | `#EDE8E1` | `sand` | Alternate section backgrounds. |
| **Charcoal** | `#1C1C1C` | `charcoal` | Footer background only. Primary body text. Do not use as a section background. |
| **Muted** | `#6B6260` | `muted` | Secondary text, captions, labels |
| **Warm White** | `#FFFFFF` | `warm-white` | Card surfaces, navbar background |

### Colour Role Rules

Each accent colour has a defined role. **Do not use them interchangeably.**

| Colour | Reserved for |
|---|---|
| `brand-red` | Primary CTAs (Donate, Book, Subscribe), main stat number, logo, hero eyebrow |
| `coral` | Activity/event badges, section eyebrow labels for events + activities, Five Decades accent border |
| `purple` | Workshop badges, Creative category, tertiary stat (50 years) |
| `green` | Sports badges, Sports category dot |

### Colour Usage Rules

- **Section backgrounds stay light** — all section backgrounds use `cream`, `sand`, or `warm-white`. The only exception is the CTA section (`brand-red`) and the footer (`charcoal`). Never use charcoal as a mid-page section background.
- **Colour lives in small elements** — badges, pills, dots, stat numbers, eyebrow labels, left borders, and accent top-borders. This is what creates richness without overwhelm.
- **Backgrounds alternate** — section rhythm top to bottom: `cream → warm-white → sand`, repeating. Ends with `brand-red` CTA then `charcoal` footer.
- **Never use pure black** (`#000000`) for text. Use `charcoal` instead.
- **Accessibility**: Text on `brand-red`, `coral`, `purple` backgrounds must be white. Text on `green` must be `charcoal` (not white — insufficient contrast). Minimum contrast ratio: 4.5:1.

### Colour-per-Component Map

| Component | Accent colour used | Where |
|---|---|---|
| Navbar | `brand-red` | Donate button fill (primary). Book button is outlined charcoal (secondary). |
| Hero | `brand-red` | Primary CTA button |
| What brings you here | `brand-red-light`, `coral-light`, `purple-light`, `green-light` | Card content area backgrounds (one per card, light tints) |
| What's on | `coral`, `purple`, `green` | Category pill badges by type |
| Five decades | `coral` | Left border accent on body text |
| Impact stats | `brand-red`, `coral`, `purple` | Stat numbers (one per stat) |
| Activities | `coral`, `green`, `purple` | Eyebrow label, category dots |
| CTA | `brand-red` | Donate button |
| Footer | `brand-red` | Subscribe button, link hover states |

---

## 3. Typography

### Fonts

| Role | Font | Weights | Usage |
|---|---|---|---|
| **Display / Headings** | Nunito | 700, 800, 900 | All `<h1>`, `<h2>`, section headings |
| **Body** | Geist Sans | 400, 600 | Paragraphs, nav links, captions, buttons |

Nunito is rounded and friendly — it communicates approachability without being childish. Geist is clean and modern for readability in body copy.

### Type Scale

| Level | Size | Weight | Class |
|---|---|---|---|
| Hero headline | 60px → 96px → 120px | 800 | `text-6xl md:text-9xl lg:text-10xl font-display font-extrabold` |
| Section heading | 36px → 48px | 800 | `text-4xl md:text-5xl font-display font-bold` |
| Sub-heading | 24px → 30px | 700 | `text-2xl md:text-3xl font-display font-bold` |
| Card title | 20px | 600 | `text-xl font-semibold` |
| Body | 16px → 18px | 400 | `text-base md:text-md` |
| Caption / label | 14px | 400–600 | `text-sm` |

### Typography Rules

- Headings should feel bold and confident. If a heading looks too quiet, increase the weight to 800 or 900.
- Body copy line length: aim for 60–75 characters. Use max-width containers — never stretch text to full viewport width.
- Avoid ALL CAPS except for very small UI labels (category pills, section tags).

---

## 4. Layout & Spacing

### Grid
- **12-column grid** within a centred max-width container
- **Horizontal padding**: 5% on all sides (`px-[5%]`) — consistent across all sections
- **Vertical padding**: sections use `py-16 md:py-24 lg:py-28` as the baseline

### Section Rhythm (top to bottom on home page)
```
Navbar          → warm-white background
Hero            → cream background
What brings you → warm-white background  (cards provide own accent-light colour)
Five decades    → cream background       (stats on the right — 27K/2/50 with accent borders)
What's on       → sand background
Activities      → warm-white background
CTA             → brand-red background   (THE one strong colour moment — warm, not dark)
Footer          → charcoal background    (only dark section on the page)
```
Pattern: cream → warm-white → cream → sand → warm-white → brand-red → charcoal

Note: Stats58 component is reserved for the Our Impact page hero. It does not appear on the home page.
The impact numbers (27,000 / 2 / 50) are shown in the right column of the Five Decades section.

### Spacing Rules
- Generous whitespace between sections — don't crowd the page.
- Between a heading and its body text: `mb-5 md:mb-6`
- Between body text and CTAs: `mt-6 md:mt-8`
- Card grids: `gap-6 md:gap-8`

---

## 5. Component Patterns

### Buttons

| Variant | Style | When to use |
|---|---|---|
| **Primary** | `bg-brand-red text-white rounded font-semibold` | Main action per section (Donate, Book, What's On) |
| **Secondary** | `border-2 border-charcoal text-charcoal rounded font-semibold` | Supporting action on light backgrounds |
| **Secondary Alt** | `border-2 border-warm-white text-warm-white rounded font-semibold` | Supporting action on dark (charcoal) backgrounds |
| **Link** | `text-brand-red underline` | Inline text links, card read-more links |

- Never place two primary buttons next to each other. One primary + one secondary per CTA group.
- Buttons on dark backgrounds: primary = `brand-red`, secondary = `border-warm-white text-warm-white`.

### Cards

- Background: `warm-white`
- Border radius: `rounded-2xl`
- Shadow: `shadow-sm hover:shadow-md transition-shadow`
- Card image: always use `aspect-[4/3]` or `aspect-[16/9]` with `object-cover`
- Card padding: `p-6`
- Hover state: subtle lift (`shadow-md`) + optional `brand-red-light` background tint

### Image Cards (user-path cards — "What brings you here")

- Structure: photo at top (`aspect-[4/3] object-cover`), flat accent-light colour area below
- Card wrapper: `rounded-2xl overflow-hidden shadow-sm`
- Content area: `bg-[accent-light] p-6` — one accent-light colour per card
- Card buttons: `bg-white border border-charcoal/25 text-charcoal rounded-lg` — white outlined, not pill-shaped
- No dark overlays. No gradients. Light and warm.

### Section Accents

- Left border accent: `border-l-4 border-coral pl-4` — use on pull-quotes, key descriptions (coral, not red)
- Stat numbers: `font-display font-extrabold` — use `text-brand-red` / `text-coral` / `text-purple` per stat
- Category/tag pills: `text-sm rounded-full px-3 py-1` with colour by type:
  - Activity: `bg-coral text-white`
  - Workshop: `bg-purple text-white`
  - Sports: `bg-green text-charcoal` (dark text — green is too light for white text)

---

## 6. Tone of Voice

| Do | Don't |
|---|---|
| Short, punchy sentences | Long, complex paragraphs |
| Active voice ("We run two centres") | Passive voice ("Two centres are run by us") |
| Speak directly to the visitor | Speak about yourself in the third person |
| Glasgow roots, honest, human | Corporate, distant, formal |
| Specific and concrete ("27,000 interactions") | Vague ("many children benefit") |

**Examples:**
- "For the people, by the people." ✓
- "Come as you are and find your thing." ✓
- "Jeely Piece Club endeavours to provide..." ✗

---

## 7. Logo Usage

- The Jeely Piece logo is a red rounded square with a white bread bag icon.
- Always use the provided `jelly-logo.png` file — do not recreate it.
- Minimum size: 40px height
- Clear space: at least the height of the logo on all sides
- Never place the logo on a red background.
- Acceptable backgrounds: warm-white, cream, sand, charcoal (use white version if available).

---

## 8. Wix Translation Notes

When rebuilding this design in Wix Studio:

| Token | Hex | Wix Setting |
|---|---|---|
| `brand-red` | `#D71920` | Site colour → Accent 1 |
| `coral` | `#FF8C42` | Site colour → Accent 2 |
| `purple` | `#6A5A9A` | Site colour → Accent 3 |
| `green` | `#1AD766` | Site colour → Accent 4 |
| `charcoal` | `#1C1C1C` | Site colour → Dark 1 |
| `muted` | `#6B6260` | Site colour → Dark 2 |
| `cream` | `#FAF7F4` | Site colour → Light 1 |
| `sand` | `#EDE8E1` | Site colour → Light 2 |
| Nunito (headings) | Wix Fonts → Add Google Font → Nunito |
| Geist / System sans (body) | Wix Fonts → Helvetica Neue or System Font |
| Section padding 5% | Wix → Section settings → Padding → Custom |
| `py-16 md:py-24` | Wix → Section → Top/Bottom padding ~64px → 96px |
| Card border radius `rounded-2xl` | Wix → Box → Corners → 16px |

**Section rhythm in Wix:** Set each section's background fill manually following the pattern below. Use Wix's "Section Design" panel to apply background colours without custom CSS.
- Navbar → white (#FFFFFF)
- Hero → cream (#FAF7F4)
- What brings you here → white (#FFFFFF)
- What's on → sand (#EDE8E1)
- Five decades → cream (#FAF7F4)
- Impact stats → white (#FFFFFF)
- Activities → sand (#EDE8E1)
- CTA → brand-red (#D71920)
- Footer → charcoal (#1C1C1C)
