import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import PageHeader from "./PageHeader.jsx";
import FilterTabs from "../components/FilterTabs.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projectFilters, projects } from "../data/projects.js";

export default function Projects() {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.filters.includes(active)),
    [active]
  );

  return (
    <div className="container-page">
      <PageHeader
        trail={[{ label: "Projects" }]}
        title="My Projects"
        subtitle="Some of the projects I have worked on."
        icon={FolderGit2}
      />

      <FilterTabs
        filters={projectFilters}
        active={active}
        onChange={setActive}
        layoutId="project-pill"
      />

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="card p-8 text-center text-muted">
          Nothing here yet. Try a different filter.
        </p>
      )}
    </div>
  );
}
