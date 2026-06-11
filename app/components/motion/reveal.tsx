"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] } },
};

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
};

/** Scroll-triggered stagger: each direct child rises in with a 0.1s delay offset. */
export function RevealStagger({ children, className }: RevealStaggerProps) {
  return (
    <m.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </m.div>
  );
}

/** Stagger child — must be a direct child of RevealStagger. */
export function StaggerItem({ children, className }: RevealStaggerProps) {
  return (
    <m.div className={className} variants={staggerItem}>
      {children}
    </m.div>
  );
}

const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to hold back after entering the viewport (for stagger). */
  delay?: number;
  /** Initial vertical offset in px. */
  y?: number;
};

/** Scroll-triggered rise-and-fade. Children stay server-rendered. */
export function Reveal({ children, className, delay = 0, y = 40 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}

/** Scroll-triggered pure fade — for imagery where movement would distract. */
export function RevealFade({ children, className, delay = 0 }: Omit<RevealProps, "y">) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
    >
      {children}
    </m.div>
  );
}

/** Springy lift on hover — for cards and figures. */
export function HoverLift({
  children,
  className,
  y = -8,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <m.div
      className={className}
      whileHover={{ y }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {children}
    </m.div>
  );
}
