# Design System Document

## 1. Overview & Creative North Star
**Creative North Star: The Organic Editor**

This design system moves away from the rigid, clinical structures often associated with charitable organizations. Instead, it embraces an "Editorial-meets-Play" philosophy. We treat the digital canvas like a high-end scrapbook: sophisticated enough to garner trust from donors, but playful enough to resonate with the families we serve. 

By utilizing intentional asymmetry, overlapping elements, and a "tonal layering" approach, we create a signature experience that feels hand-crafted and warm. We reject the "default" web look in favor of a layout that breathes, moves, and invites community interaction.

---

## 2. Colors
Our palette is rooted in the warmth of the community. It balances the high-energy "Jeely Red" with grounding, non-corporate neutrals.

### Color Tokens (Material Convention)
*   **Primary:** `primary` (#ae0011) | `primary_container` (#d71920 / Jeely Red)
*   **Secondary (Purple):** `secondary` (#645494) | `secondary_container` (#c9b7fe)
*   **Tertiary (Coral):** `tertiary` (#8c3e00) | `tertiary_container` (#b15102)
*   **Backgrounds:** `surface` (#fef9f1 / Cream) | `surface_container` (#f2ede6 / Sand)

### The "No-Line" Rule
To maintain a soft, approachable feel, **1px solid borders are prohibited** for defining sections. Boundaries must be defined solely through background color shifts. For example, a `surface_container_low` section should sit directly against a `surface` background to create a clear but soft distinction.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface_container` tiers (Lowest to Highest) to create depth.
*   **Base:** `surface` (The "paper" of the site)
*   **Secondary Content:** `surface_container_low`
*   **Nested Cards:** `surface_container_lowest` (White) to create a "lifted" effect.

### The "Glass & Gradient" Rule
For floating elements (like navigation bars or hovering alerts), use **Glassmorphism**. Apply semi-transparent surface colors with a `backdrop-blur` of 12px-20px. 
*   **Signature Textures:** Main CTAs should use a subtle linear gradient from `primary` to `primary_container` (top-to-bottom) to add a "soulful" depth that flat color cannot provide.

---

## 3. Typography
The typography system is a conversation between structural clarity and friendly personality.

*   **Headings (Nunito):** Use **Nunito Bold** for all `display` and `headline` levels. The rounded terminals mirror our `rounded-2xl` component style, conveying a child-friendly and approachable brand voice.
*   **Body (Geist Sans):** Use **Geist Sans** for all `body`, `title`, and `label` levels. Its high legibility and modern geometric construction provide the "Trustworthy" and "Bold but Calm" foundation.

**Hierarchy as Identity:**
By pairing a very large, playful `display-lg` headline with a clean, understated `body-md`, we create an editorial rhythm that feels premium and intentional rather than generic.

---

## 4. Elevation & Depth
We eschew traditional drop shadows for a more modern, ambient approach.

*   **Tonal Layering:** Most hierarchy should be achieved by "stacking" surface tiers. A `surface_container_lowest` card on a `surface_container` section provides a natural lift.
*   **Ambient Shadows:** When a true floating effect is required, shadows must be extra-diffused. 
    *   *Spec:* `0px 10px 40px rgba(93, 63, 60, 0.06)` (A tinted shadow using `on_surface_variant`).
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` at **15% opacity**. Never use a 100% opaque border.
*   **Glassmorphism:** Use semi-transparent layers for elements like "Book Now" sticky buttons to let the background colors bleed through, softening the layout's edges.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary_container`, `rounded-full`, Geist Sans Bold. No shadow, except on hover (Ambient style).
*   **Secondary:** `surface_container_highest` background with `on_surface` text. `rounded-full`.
*   **Tertiary:** Ghost style; text-only with a trailing arrow icon.

### Chips (Badges/Pills)
*   Used for categories (e.g., "Ages 0-5", "Workshop"). 
*   **Style:** `rounded-full`, `label-md`. Use `secondary_container` (Purple) or `tertiary_fixed` (Coral) background with their respective `on_container` text colors.

### Cards
*   **Structure:** `rounded-xl` or `rounded-2xl`. 
*   **Constraint:** Forbid the use of divider lines. Separate content using vertical white space (`spacing-6`) or subtle background shifts within the card.
*   **Image Handling:** Images within cards should have top-rounded corners matching the parent container and a subtle `surface_variant` overlay if text is placed on top.

### Signature Component: The "Jeely Blob"
Incorporate organic, non-geometric SVG shapes (blobs) in `surface_container` colors behind images or as background accents. This breaks the "grid" and reinforces the "Community-led/Child-friendly" principle.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Place a large image slightly offset from the text column to create a dynamic, editorial feel.
*   **Do** use the `spacing-16` or `spacing-20` tokens between major sections to ensure the layout feels "Calm."
*   **Do** use the "Jeely Red" (`primary_container`) sparingly as a highlight to guide the eye to the most important actions.

### Don't
*   **Don't** use black (#000000) for text. Use `on_surface` (#1d1b17) to maintain warmth.
*   **Don't** use standard 1px borders or heavy, dark drop shadows. It makes the site feel "corporate" and rigid.
*   **Don't** cram content. If a section feels crowded, increase the background-color-shift area to let the elements breathe.
*   **Don't** use sharp corners. Everything in this system—from buttons to input fields—must use the `rounded-md` to `rounded-2xl` scale to remain "Child-friendly."