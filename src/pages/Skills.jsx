import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Layers, Rocket } from "lucide-react";
import PageHeader from "./PageHeader.jsx";
import FilterTabs from "../components/FilterTabs.jsx";
import SkillCard from "../components/SkillCard.jsx";
import { categoryOrder, skillFilters, skills } from "../data/skills.js";

export default function Skills() {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () =>
      active === "all" ? skills : skills.filter((s) => s.group === active),
    [active],
  );

  // Group the visible skills by category, keeping a stable display order
  const grouped = useMemo(() => {
    const map = new Map();
    visible.forEach((skill) => {
      if (!map.has(skill.category)) map.set(skill.category, []);
      map.get(skill.category).push(skill);
    });
    return categoryOrder
      .filter((category) => map.has(category))
      .map((category) => ({ category, items: map.get(category) }));
  }, [visible]);

  return (
    <div className="container-page">
      <PageHeader
        trail={[{ label: "Skills" }]}
        title="My Skills & Technologies"
        subtitle="Technologies and tools I work with to bring ideas to life."
        icon={Layers}
      />

      <FilterTabs
        filters={skillFilters}
        active={active}
        onChange={setActive}
        layoutId="skill-pill"
      />

      <motion.div layout className="space-y-10">
        <AnimatePresence mode="popLayout">
          {grouped.map(({ category, items }) => (
            <motion.section
              key={category}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-violet-soft">
                {category}
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {items.map((skill, i) => (
                  <SkillCard key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </motion.section>
          ))}
        </AnimatePresence>
      </motion.div>

      {grouped.length === 0 && (
        <p className="card p-8 text-center text-muted">
          No skills in this category yet. Pick another filter.
        </p>
      )}

      <div className="card mt-12 flex items-center justify-center gap-3 p-5 text-sm text-violet-soft">
        <Rocket size={18} />
        Always exploring new tools and technologies.
      </div>
    </div>
  );
}
