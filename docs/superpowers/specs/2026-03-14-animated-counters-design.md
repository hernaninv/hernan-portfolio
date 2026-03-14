# Animated Counters Design

**Goal:** Add an "Impact at a Glance" section to the Resume page with 4 animated stat counters that count up from 0 when scrolled into view.

**Architecture:** A reusable `Counter` client component handles the count-up animation using `useInView` from `framer-motion` and `useEffect`/`useState`. A new section is inserted into `app/resume/page.tsx` between the Profile and Experience sections. No new dependencies — `framer-motion` is already installed.

**Tech Stack:** React hooks, `framer-motion` (`useInView`), TypeScript, Tailwind CSS v4.

---

## File Structure

- **Create:** `components/counter.tsx` — reusable animated counter component
- **Modify:** `app/resume/page.tsx` — insert new "Impact at a Glance" section between Profile and Experience

---

## Component: `components/counter.tsx`

A `"use client"` component with these props:

```ts
{
  value: number;       // the target number to count up to (e.g. 90)
  suffix?: string;     // appended after number, static (e.g. "%")
  prefix?: string;     // prepended before number, static (e.g. "")
  label: string;       // descriptive text below the number (e.g. "Pricing Accuracy Improvement")
  duration?: number;   // animation duration in ms, default 1200
}
```

**Behavior:**
- Uses `useRef` + `useInView` from `framer-motion` with `{ once: true, margin: "-40px" }` to trigger when the stat enters the viewport
- When `inView` becomes true: starts counting from 0 to `value` using `useEffect` + `setInterval`, incrementing by a calculated step each tick to reach `value` in `duration` ms
- Cleanup: `useEffect` returns a `clearInterval` to prevent state updates on unmount
- Renders the number as `{prefix}{count}{suffix}` — prefix and suffix are always static, only the integer count animates
- `once: true` — animation fires only once per page load, not every time the element re-enters the viewport

**Render structure:**
```tsx
<div ref={ref} className="flex flex-col items-center text-center p-6">
  <div className="text-5xl font-bold text-blue-600">
    {prefix}{count}{suffix}
  </div>
  <div className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wide">
    {label}
  </div>
</div>
```

---

## Section: "Impact at a Glance" in `app/resume/page.tsx`

Inserted between the Profile section and the Experience section (after the closing `</section>` of Profile, before `{/* Experience */}`).

The section is wrapped in `<FadeIn delay={0.05}>` (consistent with the page's existing FadeIn pattern).

**The 4 stats:**

| `prefix` | `value` | `suffix` | `label` |
|----------|---------|----------|---------|
| `"10"` | — | `"+"` | `"Years of Experience"` |
| — | `90` | `"%"` | `"Pricing Accuracy Improvement"` |
| — | `50` | `"%"` | `"Reduction in Time-to-Market"` |
| — | `50` | `"%"` | `"Less Manual Processing Time"` |

> Note: The "10+" stat is a special case — the number itself is static (always shows "10"), only the `+` suffix is displayed. To keep the component simple, `value=10` with `suffix="+"` is used, so the counter counts from 0 to 10 and then shows "10+". This is intentional.

**Layout:**
```tsx
<section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
  <h2 className="text-2xl font-semibold text-slate-900">Impact at a Glance</h2>
  <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
    <Counter value={10} suffix="+" label="Years of Experience" />
    <Counter value={90} suffix="%" label="Pricing Accuracy Improvement" />
    <Counter value={50} suffix="%" label="Reduction in Time-to-Market" />
    <Counter value={50} suffix="%" label="Less Manual Processing Time" />
  </div>
</section>
```

---

## Constraints

- `app/resume/page.tsx` must add `import Counter from "@/components/counter"` and `import FadeIn from "@/components/fade-in"` (FadeIn is already imported)
- The rest of `app/resume/page.tsx` (Header, Profile, Experience, Skills, Education, Certifications, Languages) stays unchanged
- No new npm packages
- `useEffect` cleanup (`clearInterval`) is required to prevent warnings on unmount
- Animation fires once per page load (`once: true` in `useInView`)
