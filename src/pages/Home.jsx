import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../components/Button.jsx";
import StatCard from "../components/StatCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Avatar from "../components/Avatar.jsx";
import { profile, stats } from "../data/profile.js";
import { featuredSkills } from "../data/skills.js";
import { projects } from "../data/projects.js";
import { education } from "../data/education.js";

const socials = [
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  { href: profile.socials.instagram, label: "Instagram", Icon: Instagram },
];

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div className="container-page space-y-24">
      {/* ---------------------------------------------------------- Hero */}
      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">👋 Hello, I&apos;m</span>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            KAMPALLI <span className="gradient-text">M</span>
          </h1>

          <p className="mt-3 text-lg font-semibold uppercase tracking-wide text-violet-soft">
            Flutter Developer | Mobile App Developer
          </p>

          <p className="mt-5 max-w-xl leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact">
              Let&apos;s Connect
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Button>
            <Button
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              variant="secondary"
            >
              <Download size={16} />
              Download Resume
            </Button>
          </div>

          <ul className="mt-8 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:-translate-y-0.5 hover:border-violet/50 hover:text-violet-soft"
                >
                  <Icon size={19} />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-violet/25 blur-3xl" />
          <Avatar
            src={profile.heroImage}
            alt="Portrait of Kampalli M"
            className="aspect-square w-full rounded-full border border-violet/30"
          />
          <span className="absolute -bottom-3 right-4 rounded-xl border border-violet/40 bg-ink-700/90 px-4 py-2 text-sm font-semibold text-violet-soft shadow-glow backdrop-blur animate-float">
            Flutter Developer
          </span>
          <span className="pointer-events-none absolute -top-2 left-0 font-script text-2xl text-violet-soft/80">
            Let&apos;s Build Something Amazing
          </span>
        </motion.div>
      </section>

      {/* --------------------------------------------------------- Stats */}
      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07}>
              <StatCard {...stat} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- About */}
      <section>
        <SectionHeading
          eyebrow="About me"
          title="Passionate about building real solutions"
        />
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="card h-full p-7">
              <p className="leading-relaxed text-slate-300">{profile.summary}</p>
              <Button to="/about" className="mt-6">
                More About Me
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="card flex h-full flex-col justify-center gap-4 p-7">
              <span className="text-4xl leading-none text-violet">&ldquo;</span>
              <p className="text-lg italic leading-relaxed text-slate-200">
                {profile.philosophy}
              </p>
              <footer className="font-script text-2xl text-violet-soft">
                Kampalli M
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- Skills */}
      <section>
        <SectionHeading
          eyebrow="Skills"
          title="Skills & technologies"
          subtitle="Technologies and tools I work with to bring ideas to life."
          action={
            <Button to="/skills" variant="secondary">
              View All Skills
              <ArrowRight size={16} />
            </Button>
          }
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {featuredSkills.map((skill, i) => (
            <Reveal key={skill} delay={Math.min(i * 0.04, 0.3)}>
              <div className="card card-hover px-3 py-4 text-center">
                <span className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-lg bg-violet/15 text-sm font-bold text-violet-soft">
                  {skill.charAt(0)}
                </span>
                <span className="text-sm font-medium text-white">{skill}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ Projects */}
      <section>
        <SectionHeading
          eyebrow="Projects"
          title="Featured projects"
          subtitle="Production work across safety, education and fintech."
          action={
            <Button to="/projects" variant="secondary">
              View All Projects
              <ArrowRight size={16} />
            </Button>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------- Education */}
      <section>
        <SectionHeading eyebrow="Education" title="Academic background" />
        {education.map((item) => (
          <Reveal key={item.degree}>
            <Link
              to="/education"
              className="card card-hover flex flex-wrap items-center gap-4 p-6"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/15 text-violet-soft">
                <GraduationCap size={22} />
              </span>
              <span className="flex-1">
                <span className="block text-lg font-bold text-white">{item.degree}</span>
                <span className="block text-sm text-muted">{item.institution}</span>
              </span>
              <span className="text-sm font-medium text-violet-soft">{item.period}</span>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* ------------------------------------------------------- Contact */}
      <section>
        <Reveal>
          <div className="card relative overflow-hidden p-10 text-center">
            <div className="absolute inset-0 -z-10 bg-grid-fade" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Have a project idea or want to collaborate? I&apos;m always open to
              discussing new opportunities.
            </p>
            <Button to="/contact" className="mt-7">
              Get In Touch
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
