import {
  ArrowRight,
  Code2,
  GraduationCap,
  Lightbulb,
  Users,
  User,
} from "lucide-react";
import PageHeader from "./PageHeader.jsx";
import Button from "../components/Button.jsx";
import Reveal from "../components/Reveal.jsx";
import Avatar from "../components/Avatar.jsx";
import StatCard from "../components/StatCard.jsx";
import { interests, profile, stats, traits } from "../data/profile.js";

const traitIcons = {
  code: Code2,
  lightbulb: Lightbulb,
  users: Users,
  graduation: GraduationCap,
};

export default function About() {
  return (
    <div className="container-page">
      <PageHeader
        trail={[{ label: "About" }]}
        title="About Me"
        subtitle="Get to know more about my journey, passion and what drives me."
        icon={User}
      />

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <Avatar
            src={profile.aboutImage}
            alt="Portrait of Kampalli M"
            className="aspect-[4/5] w-full rounded-2xl border border-white/10"
          />
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.08}>
            <div className="card p-7">
              <h2 className="text-2xl font-bold text-white">Who I am</h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                {profile.summary}
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                I have worked on applications across domains like education,
                safety, travel, e-commerce and healthcare. I enjoy solving
                real-world problems through clean code, scalable architectures
                and modern technologies.
              </p>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    Name
                  </dt>
                  <dd className="text-white">{profile.name}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    Role
                  </dt>
                  <dd className="text-white">Flutter & Frontend Developer</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    Experience
                  </dt>
                  <dd className="text-white">2.3+ years</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    Location
                  </dt>
                  <dd className="text-white">{profile.location}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.slice(0, 2).map((stat, i) => (
              <Reveal key={stat.label} delay={0.12 + i * 0.06}>
                <StatCard {...stat} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Traits */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-white">How I work</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {traits.map((trait, i) => {
            const Icon = traitIcons[trait.icon] || Code2;
            return (
              <Reveal key={trait.title} delay={i * 0.07}>
                <div className="card card-hover h-full p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-violet/15 text-violet-soft">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">
                    {trait.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{trait.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Interests */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-white">My interests</h2>
        <ul className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <li
              key={interest}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:border-violet/50 hover:text-white"
            >
              {interest}
            </li>
          ))}
        </ul>
      </section>

      {/* Quote + CTA */}
      <section className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <blockquote className="card h-full p-8">
            <span className="text-4xl leading-none text-violet">&ldquo;</span>
            <p className="mt-2 text-xl italic leading-relaxed text-slate-200">
              {profile.philosophy}
            </p>
            <footer className="mt-4 font-script text-2xl text-violet-soft">
              Kampalli
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card flex h-full flex-col items-start justify-center gap-4 p-8">
            <h3 className="text-2xl font-bold text-white">
              Want to work together?
            </h3>
            <p className="text-muted">
              Tell me about your idea and I&apos;ll tell you how I&apos;d build
              it.
            </p>
            <Button to="/contact">
              Get In Touch
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
