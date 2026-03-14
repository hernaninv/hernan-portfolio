# Enhanced Hover Effects Design

**Goal:** Add blue ring glow and image zoom effects to all hoverable cards across the site.

**Architecture:** CSS-only changes to `app/globals.css`. No JSX or component changes required. All cards that already use the `.shadow-card-hover` class automatically inherit the new effects.

**Tech Stack:** Pure CSS, Tailwind CSS v4.

---

## Affected Cards

All elements with class `.shadow-card-hover`:
- Home: Skill cards (4), Featured project cards (4)
- Portfolio: ProjectCard components (4)
- Games: Game cards (2)

---

## Changes to `app/globals.css`

### 1. Update `.shadow-card-hover:hover` — add blue ring layer

Replace the existing `.shadow-card-hover:hover` rule with:

```css
.shadow-card-hover:hover {
  box-shadow:
    0 4px 12px rgba(15, 23, 42, 0.08),
    0 12px 28px rgba(15, 23, 42, 0.12),
    0 0 0 2px rgb(147 197 253);
  transform: translateY(-1px);
}
```

The third `box-shadow` layer (`0 0 0 2px rgb(147 197 253)`) simulates a `ring-2 ring-blue-300` that appears on hover. The existing shadow and transform are preserved.

### 2. Add `.shadow-card-hover` transition update

Update the `.shadow-card-hover` base rule to include `outline-color` in the transition (already has `box-shadow` and `transform`). No change needed — the blue ring is part of `box-shadow` so it's already covered by the existing `transition: box-shadow 200ms ease, transform 200ms ease`.

### 3. Add image zoom rules

```css
/* === Card image zoom on hover === */
.shadow-card-hover img {
  transition: transform 400ms ease;
}

.shadow-card-hover:hover img {
  transform: scale(1.05);
}
```

Images inside hoverable cards already have `overflow-hidden` on their container, so the zoom is cleanly clipped.

---

## Constraints

- Only `app/globals.css` is modified — no JSX changes
- The existing shadow values are preserved exactly
- Image zoom uses a slower transition (400ms) than the card itself (200ms) for a layered feel
- `scale(1.05)` is subtle — not jarring
- Cards without images (e.g., Skill cards) still get the blue ring glow but no image zoom (no `img` to target)
