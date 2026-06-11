"use client";

import { m, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";
import { site } from "@/content/site";

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Family Dinners", href: "#specials" },
  { label: "Catering", href: "#catering" },
  { label: "Our Story", href: "#about" },
  { label: "Visit", href: "#visit" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex flex-col justify-center items-center w-5 h-5" aria-hidden>
      <m.span
        animate={open ? { rotate: 45, y: 0, width: "20px" } : { rotate: 0, y: -4, width: "20px" }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className="absolute block h-[1.5px] rounded-full bg-current origin-center"
      />
      <m.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.18 }}
        className="absolute block h-[1.5px] w-5 rounded-full bg-current"
      />
      <m.span
        animate={open ? { rotate: -45, y: 0, width: "20px" } : { rotate: 0, y: 4, width: "20px" }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className="absolute block h-[1.5px] rounded-full bg-current origin-center"
      />
    </span>
  );
}

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 80);
  });

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 fade" style={{ animationDelay: "0.1s" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 pt-4 sm:pt-6">
          <m.nav
            animate={scrolled || menuOpen ? "scrolled" : "top"}
            variants={{
              top: {
                backgroundColor: "rgba(244,236,220,0.82)",
                borderColor: "rgba(27,19,12,0.10)",
                paddingTop: "0.625rem",
                paddingBottom: "0.625rem",
              },
              scrolled: {
                backgroundColor: "rgba(27,19,12,0.96)",
                borderColor: "rgba(244,236,220,0.08)",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              },
            }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="flex items-center justify-between gap-3 rounded-full border px-4 sm:px-5 md:px-7 backdrop-blur-md shadow-[0_1px_0_rgba(27,19,12,0.04)]"
          >
            {/* Brand */}
            <a href="#top" onClick={closeMenu} className="flex items-baseline gap-2 min-w-0">
              <m.span
                animate={{ color: scrolled || menuOpen ? "var(--parchment)" : "var(--char)" }}
                transition={{ duration: 0.35 }}
                className="display text-[1.2rem] sm:text-[1.4rem]"
              >
                {site.brand.name}
              </m.span>
              <span className="display-italic text-[0.85rem] sm:text-[0.95rem] text-ember truncate">
                {site.brand.suffix.toLowerCase()}
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7 text-[0.82rem]">
              {NAV_LINKS.map((link) => (
                <m.a
                  key={link.href}
                  href={link.href}
                  animate={{ color: scrolled ? "rgba(244,236,220,0.75)" : "var(--char-soft)" }}
                  whileHover={{ color: scrolled ? "var(--saffron)" : "var(--ember)" }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </m.a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Call button */}
              <m.a
                href={site.visit.telUrl}
                aria-label={`Call ${site.visit.phone}`}
                animate={scrolled || menuOpen
                  ? { backgroundColor: "var(--ember)", color: "var(--parchment)" }
                  : { backgroundColor: "var(--char)", color: "var(--parchment)" }
                }
                whileHover={scrolled || menuOpen
                  ? { backgroundColor: "var(--saffron)", color: "var(--char)" }
                  : { backgroundColor: "var(--ember)", color: "var(--parchment)" }
                }
                transition={{ duration: 0.25 }}
                className="shrink-0 text-[0.72rem] sm:text-[0.78rem] font-medium tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap"
              >
                <span className="hidden sm:inline">Call </span>
                {site.visit.phone}
              </m.a>

              {/* Hamburger — mobile only */}
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-parchment"
              >
                <HamburgerIcon open={menuOpen} />
              </button>
            </div>
          </m.nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <m.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-ink/60 md:hidden"
              onClick={closeMenu}
              aria-hidden
            />

            {/* Drawer panel */}
            <m.div
              key="drawer"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
              className="fixed top-0 inset-x-0 z-40 bg-char md:hidden pt-[5rem] pb-10 px-6 grain"
            >
              {/* Nav links */}
              <nav>
                <ul className="flex flex-col border-t border-parchment/10">
                  {NAV_LINKS.map((link, i) => (
                    <m.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.2, 0.7, 0.2, 1],
                        delay: 0.06 + i * 0.06,
                      }}
                      className="border-b border-parchment/10"
                    >
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between py-5 group"
                      >
                        <span className="display text-[1.9rem] text-parchment group-hover:text-saffron transition-colors duration-200">
                          {link.label}
                        </span>
                        <span className="text-ember text-xl group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </a>
                    </m.li>
                  ))}
                </ul>
              </nav>

              {/* Footer strip */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                className="mt-10 flex items-center justify-between"
              >
                <a
                  href={site.visit.telUrl}
                  onClick={closeMenu}
                  className="inline-flex items-center gap-3 bg-ember text-parchment px-6 py-3.5 rounded-full hover:bg-saffron hover:text-char transition-colors duration-300"
                >
                  <span className="text-[0.88rem] font-medium tracking-wide">
                    Call {site.visit.phone}
                  </span>
                </a>
                <p className="eyebrow text-parchment/40">Etobicoke, ON</p>
              </m.div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
