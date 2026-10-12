import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  const isLive = project.statusTone === "live";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.08, 0.4) }}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div
        className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}
      >
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute text-3xl font-extrabold text-white/25">
          {project.name}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold text-white">{project.name}</h3>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
              isLive
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-amber-500/15 text-amber-300"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isLive ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            {project.status}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-deep to-violet px-3.5 py-2 text-xs font-semibold text-white transition hover:brightness-110"
          >
            View Project
            <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
          </Link>

          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-violet/50 hover:text-white"
            >
              {project.externalLabel}
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
