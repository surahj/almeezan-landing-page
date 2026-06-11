# Motion & Polish — Implementation Checklist

All changes agreed on 2026-06-11. Phase 1 = no layout/content change. Phase 2 = new section.

---

## Phase 1 — Motion upgrades (no layout/content change)

- [x] **1. Nav scroll-awareness** (`nav.tsx`)
  - Convert to `"use client"`
  - `useScroll` detects when user passes hero fold (~100vh)
  - Pill: `bg-parchment/80 → bg-char/95`, text inverts, border fades
  - Spring-animated, respects reduced motion

- [x] **2. FAQ animated accordion** (`faq.tsx`)
  - Replace native `<details>`/`<summary>` with controlled client component
  - `AnimatePresence` + `m.div` for smooth `height: 0 → auto`
  - `+` icon spring-rotates 45°; `aria-expanded` preserved
  - One item open at a time

- [x] **3. Specials card Motion upgrade** (`specials.tsx`)
  - Replace `hover:-translate-y-1` with `m.article` + `whileHover` spring
  - Matches `MenuCard` pattern exactly

- [x] **4. Scroll progress bar** (new `app/components/progress-bar.tsx`, mounted in `layout.tsx`)
  - Fixed `h-[2px]` ember bar at very top of viewport
  - `scaleX` driven by `useScroll` full-page extent
  - `transformOrigin: "left"`, respects `MotionConfig reducedMotion`

- [x] **5. About stat strip stagger** (`reveal.tsx` + `about.tsx`)
  - Add `RevealStagger` variant to `reveal.tsx` (`staggerChildren` via variants)
  - Wrap the three stat items in `about.tsx` so they rise in with 0.1s stagger

- [x] **6. Menu card image gleam** (`globals.css` + `menu.tsx`)
  - `.gleam` class: `::after` pseudo gradient sweep on hover (`translateX` sweep)
  - Apply to `MenuCard` image wrapper
  - Pure CSS, zero JS weight; covered by existing reduced-motion block

---

## Phase 2 — New section (layout change approved)

- [x] **7. Gallery strip** (new `app/components/gallery.tsx`, `page.tsx`)
  - Desktop: Motion-driven horizontal image marquee using `site.hero.backdrops`
  - Mobile: `scroll-snap-type: x mandatory` slides, touch-friendly
  - Art-directed: portrait crops for phones, wide frames for desktop
  - Inserted between `<About />` and `<Menu />` in `page.tsx`
  - No new images — reuses existing hero backdrop URLs

---

## Flagged / out of scope (not implementing unless requested)

- Mobile nav hamburger — links are `hidden md:flex`; unreachable on phones
