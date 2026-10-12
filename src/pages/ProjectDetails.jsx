import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { getProjectById } from "../data/projects.js";

function Block({ title, children }) {
  return (
    <Reveal>
      <section className="card p-7">
        <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 leading-relaxed text-slate-300">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="container-page text-center">
        <h1 className="text-3xl font-bold text-white">Project not found</h1>
        <p className="mt-3 text-muted">
          That project doesn&apos;t exist, or the link has changed.
        </p>
        <Button to="/projects" className="mt-6">
          <ArrowLeft size={16} />
          Back to Projects
        </Button>
      </div>
    );
  }

  const isLive = project.statusTone === "live";

  return (
    <div className="container-page">
      <Breadcrumbs
        trail={[{ label: "Projects", to: "/projects" }, { label: project.name }]}
      />

      {/* Hero */}
      <Reveal>
        <header className="card overflow-hidden">
          <div
            className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.accent}`}
          >
            <span className="text-4xl font-extrabold text-white/30">{project.name}</span>
          </div>

          <div className="p-7">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-white">
                {project.name}
              </h1>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
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

            <p className="mt-2 text-violet-soft">{project.tagline}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
              {project.summary}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.externalUrl && (
                <Button href={project.externalUrl}>
                  {project.externalLabel}
                  <ExternalLink size={15} />
                </Button>
              )}
              <Button to="/projects" variant="secondary">
                <ArrowLeft size={16} />
                Back to Projects
              </Button>
            </div>
          </div>
        </header>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Block title="Overview">
          <p className="leading-relaxed text-slate-300">{project.overview}</p>
        </Block>

        <Block title="The problem">
          <p className="leading-relaxed text-slate-300">{project.problem}</p>
        </Block>

        <Block title="The solution">
          <p className="leading-relaxed text-slate-300">{project.solution}</p>
        </Block>

        <Block title="Challenges">
          <p className="leading-relaxed text-slate-300">{project.challenges}</p>
        </Block>

        <Block title="Key features">
          <BulletList items={project.features} />
        </Block>

        <Block title="My responsibilities">
          <BulletList items={project.responsibilities} />
        </Block>

        <Block title="Technology stack">
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Results">
          <BulletList items={project.results} />
        </Block>
      </div>

      <Reveal>
        <div className="card mt-8 flex flex-wrap items-center justify-between gap-4 p-7">
          <div>
            <h2 className="text-xl font-bold text-white">Interested in this work?</h2>
            <p className="mt-1 text-muted">
              Happy to walk through the architecture and the decisions behind it.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-deep to-violet px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            Get In Touch
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
