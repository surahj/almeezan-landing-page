"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { site, menuItems, menuCategories, type MenuItem, type MenuCategoryId } from "@/content/site";
import { Reveal, RevealFade } from "./motion/reveal";

type Filter = MenuCategoryId | "all";

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <m.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="group flex h-full flex-col bg-parchment border border-char/10 hover:border-ember/40 hover:shadow-[0_18px_40px_-18px_rgba(27,19,12,0.35)] transition-[border-color,box-shadow] duration-300 min-w-0">
      <div className="gleam relative aspect-4/3 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {item.badges && item.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[80%]">
            {item.badges.map((b) => (
              <span
                key={b}
                className="eyebrow bg-parchment text-char px-2 py-1 leading-none"
              >
                {b}
              </span>
            ))}
          </div>
        )}
        {item.serves && (
          <div className="absolute bottom-3 left-3 bg-char text-parchment px-2.5 py-1.5">
            <span className="eyebrow">{item.serves}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="display text-[1.25rem] sm:text-[1.4rem] md:text-[1.55rem] text-char leading-tight wrap-break-word">
            {item.name}
          </h3>
          <span className="display text-[1.25rem] sm:text-[1.4rem] md:text-[1.55rem] text-ember tabular-nums whitespace-nowrap">
            ${item.price}
          </span>
        </div>

        <p className="mt-3 text-[0.92rem] leading-relaxed text-char-soft">
          {item.description}
        </p>

        {item.ingredients && (
          <div className="mt-5 pt-4 border-t border-char/10">
            <p className="eyebrow text-char-soft mb-2">Ingredients</p>
            <p className="text-[0.85rem] leading-relaxed text-char-soft/90">
              {item.ingredients}
            </p>
          </div>
        )}
      </div>
    </m.article>
  );
}

function FilterPill({
  label,
  active,
  count,
  onClick,
}: {
  label: string;
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <m.button
      type="button"
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className={`relative inline-flex shrink-0 items-center gap-2 rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-[0.85rem] tracking-wide border transition-colors duration-200 ${
        active
          ? "border-transparent text-parchment"
          : "border-char/20 text-char-soft hover:text-char hover:border-char/40"
      }`}
    >
      {active && (
        <m.span
          layoutId="filter-active-bg"
          className="absolute inset-0 rounded-full bg-char"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10 font-medium uppercase tracking-[0.18em] text-[0.72rem]">
        {label}
      </span>
      <span
        className={`relative z-10 tabular-nums text-[0.7rem] ${
          active ? "text-parchment/60" : "text-char-soft/60"
        }`}
      >
        {count}
      </span>
    </m.button>
  );
}

export function Menu() {
  const { menu, offer } = site;
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: menuItems.length };
    for (const item of menuItems) c[item.category] = (c[item.category] || 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? menuItems
        : menuItems.filter((m) => m.category === filter),
    [filter]
  );

  return (
    <section id="menu" className="relative bg-parchment-deep py-20 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        {/* Header */}
        <Reveal className="grid grid-cols-12 gap-8 md:gap-10 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-6 min-w-0">
            <p className="eyebrow text-ember">{menu.eyebrow}</p>
            <h2 className="display mt-5 md:mt-6 text-char text-[clamp(2.2rem,6vw,5.5rem)] wrap-break-word">
              A short list,{" "}
              <span className="display-italic">done properly.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-8 min-w-0">
            <p className="text-[1rem] md:text-[1.05rem] leading-[1.7] md:leading-[1.75] text-char-soft max-w-md">
              {menu.sub}
            </p>
          </div>
        </Reveal>

        {/* Tonight's special — featured strip */}
        <div className="mb-16 md:mb-24 grid grid-cols-12 gap-6 md:gap-10 items-center">
          <RevealFade className="col-span-12 md:col-span-5 relative aspect-4/3 overflow-hidden rounded-[2px]">
            <Image
              src={offer.image}
              alt={offer.title}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-ember text-parchment px-3 py-2">
              <p className="eyebrow">{offer.discount}</p>
            </div>
          </RevealFade>
          <Reveal className="col-span-12 md:col-span-6 md:col-start-7 min-w-0" delay={0.15}>
            <p className="eyebrow text-ember">{offer.label}</p>
            <h3 className="display mt-4 text-char text-[clamp(1.8rem,4.5vw,3.5rem)] wrap-break-word">
              {offer.title}
            </h3>
            <p className="mt-4 text-[0.97rem] sm:text-base text-char-soft max-w-md leading-relaxed">
              Slow-marinated, charcoal-grilled, served with seasoned rice,
              salad, hummus and warm naan. The everyday plate at a price worth
              showing up for.
            </p>
            <div className="mt-6 flex items-baseline gap-4">
              <span className="display text-3xl sm:text-4xl text-ember">${offer.price}</span>
              <span className="text-char-soft line-through text-[0.95rem]">
                $13.74
              </span>
            </div>
          </Reveal>
        </div>

        {/* Filter pills */}
        <div className="sticky top-[72px] sm:top-20 z-30 -mx-5 sm:-mx-6 md:-mx-10 px-5 sm:px-6 md:px-10 py-3 sm:py-4 mb-8 md:mb-10 backdrop-blur-md bg-parchment-deep/85 border-y border-char/10">
          <div className="flex flex-nowrap sm:flex-wrap sm:justify-center gap-2 md:gap-3 overflow-x-auto sm:overflow-visible -mx-1 px-1 pb-1 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuCategories.map((cat) => (
              <FilterPill
                key={cat.id}
                label={cat.label}
                active={filter === cat.id}
                count={counts[cat.id] ?? 0}
                onClick={() => setFilter(cat.id)}
              />
            ))}
          </div>
        </div>

        {/* Active filter heading */}
        <div className="mb-6 md:mb-10 flex items-end justify-between gap-4 sm:gap-6 flex-wrap">
          <h3 className="display text-char text-[clamp(1.6rem,3.5vw,2.8rem)] wrap-break-word">
            {filter === "all"
              ? "Everything we serve"
              : menuCategories.find((c) => c.id === filter)?.label}
          </h3>
          <p className="text-[0.85rem] text-char-soft tabular-nums">
            Showing {filtered.length} {filtered.length === 1 ? "dish" : "dishes"}
          </p>
        </div>

        {/* Card grid — items animate out/in and re-flow when the filter changes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((item, i) => (
              <m.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: [0.2, 0.7, 0.2, 1],
                    delay: Math.min(i * 0.04, 0.4),
                  },
                }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.22 } }}
                className="min-w-0"
              >
                <MenuCard item={item} />
              </m.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="display-italic text-char-soft text-2xl">
              Nothing in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
