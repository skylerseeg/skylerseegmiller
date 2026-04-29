import type { Variants } from "framer-motion";

export { useReducedMotion } from "framer-motion";

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const pageEnter = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOutExpo },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.07 },
  },
};

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: easeOutExpo },
};

export const wordRevealContainer: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export const wordReveal: Variants = {
  initial: { y: "110%" },
  animate: {
    y: "0%",
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};
