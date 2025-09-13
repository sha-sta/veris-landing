// Reusable framer-motion variants for consistent animations
import type { Variants, Transition, Easing } from "framer-motion";

const easeOut: Easing = [0.16, 1, 0.3, 1];

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
  transition: { duration: 0.6, ease: easeOut as Easing },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
  transition: { duration: 0.6, ease: easeOut as Easing },
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
  transition: { type: "spring", stiffness: 260, damping: 20 } as Transition,
  },
};

export const slightTiltHover = {
  rest: { rotate: 0, y: 0 },
  hover: {
    rotate: -1.25,
    y: -4,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};
