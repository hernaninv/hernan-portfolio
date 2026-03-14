# Typing Animation Design

**Goal:** Add a cascading typewriter animation to the hero section of the home page, where three text elements write themselves letter-by-letter in sequence on page load.

**Architecture:** A reusable `TypingText` client component handles the animation logic using React `useState` and `useEffect`. The component receives the text to type, a start trigger, and fires a callback when done so the next element can start. No new dependencies required.

**Tech Stack:** React hooks (`useState`, `useEffect`), TypeScript, existing Next.js/Tailwind setup.

---

## Component: `components/typing-text.tsx`

A `"use client"` component with these props:

```ts
{
  text: string;          // full text to type out
  start: boolean;        // when true, animation begins
  speed?: number;        // ms per character, default 40
  onDone?: () => void;   // called when last character is typed
  className?: string;
}
```

**Behavior:**
- While `start` is false: renders nothing (empty string)
- When `start` becomes true: starts an interval at `speed` ms, appending one character per tick
- Shows a blinking `|` cursor while typing (CSS animation)
- When the full text is typed: clears the interval, calls `onDone()`, hides the cursor
- Renders as a plain `<span>` so it fits inline inside any parent element

## Integration: `app/page.tsx`

Three pieces of state control the cascade:

```ts
const [startBadge, setStartBadge] = useState(true);   // starts immediately
const [startLocation, setStartLocation] = useState(false);
const [startDesc, setStartDesc] = useState(false);
```

Cascade chain:
1. Badge `onDone` → `setStartLocation(true)`
2. Location `onDone` → `setStartDesc(true)`

The badge text, location text, and description text are each replaced with a `<TypingText>` component. The surrounding markup (badge pill styling, MapPin icon, paragraph tag) stays unchanged.

## Sequence and Timing

| Element | Text | Delay | Speed |
|---------|------|-------|-------|
| Badge | "AI-driven Business & Financial Data Analyst" | immediate | 40ms/char |
| Location | "Hod Hasharon, Israel" | after badge finishes | 40ms/char |
| Description | "Turning data into clear, actionable business insights using SQL, Excel, Python and BI tools." | after location finishes | 30ms/char (slightly faster for longer text) |

## Cursor Style

A blinking `|` cursor appears at the end of the text while typing. Implemented with a CSS class using `@keyframes` blink (opacity 0→1→0, 1s infinite). The cursor is a `<span>` inside `TypingText` that is removed from the DOM when `onDone` fires.

## Constraints

- "Hernan Aronson" (h1) stays static — no typing animation
- The FadeIn wrapper on the hero section stays in place — the fade-in and typing animations coexist (fade brings the section in, then typing runs)
- No new npm packages
- Accessible: the full text is always present in the DOM for screen readers via `aria-label` on the container
