import type { Variants } from "framer-motion";

// ── Fade up — the workhorse reveal animation ──────────────────────────────────
// Usage: <motion.div variants={fadeUp} initial="hidden" animate="visible">
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Stagger container — wraps a list of fadeUp children ──────────────────────
// Usage: <motion.ul variants={staggerContainer} initial="hidden" animate="visible">
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// ── Fade in only (no movement) ────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ── Slide in from left ────────────────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Draw a horizontal line (width 0 → 100%) ───────────────────────────────────
export const drawLine: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
};

// ── Counter number reveal (used in Stats) ─────────────────────────────────────
export const countUp: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
};

// ── Viewport trigger defaults (use with whileInView) ─────────────────────────
// Reuse across sections: <motion.div {...viewportReveal}>
export const viewportReveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
} as const;