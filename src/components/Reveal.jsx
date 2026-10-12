import { motion, useReducedMotion } from "framer-motion";

/**
 * Fade-up reveal when the element enters the viewport.
 * Uses `once` so content never re-animates and never causes layout jumps.
 */
export default function Reveal({ children, delay = 0, y = 18, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
