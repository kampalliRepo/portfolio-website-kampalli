import { motion } from "framer-motion";

export default function SkillCard({ name, level, index = 0 }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.28, delay: Math.min(index * 0.03, 0.3) }}
      className="card card-hover flex flex-col items-center gap-1 px-3 py-4 text-center"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-deep/40 to-violet/20 text-sm font-bold text-violet-soft">
        {name.charAt(0)}
      </span>
      <span className="mt-1 text-sm font-semibold text-white">{name}</span>
      {level && <span className="text-[11px] text-muted">{level}</span>}
    </motion.div>
  );
}
