import { motion, useReducedMotion } from "framer-motion";

export default function PageTransition({ children }) {
  const reduce = useReducedMotion();

  return (
    <motion.main
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[70vh] pt-24 pb-20"
    >
      {children}
    </motion.main>
  );
}
