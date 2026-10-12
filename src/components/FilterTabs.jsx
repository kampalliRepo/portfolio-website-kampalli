import { motion } from "framer-motion";

export default function FilterTabs({ filters, active, onChange, layoutId = "filter-pill" }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2" role="tablist">
      {filters.map((filter) => {
        const isActive = active === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={`relative rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive ? "text-white" : "text-muted hover:text-white"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-deep to-violet"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}
