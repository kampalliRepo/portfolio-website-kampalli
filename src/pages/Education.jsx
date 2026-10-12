import { Award, GraduationCap } from "lucide-react";
import PageHeader from "./PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { certifications, education } from "../data/education.js";

export default function Education() {
  return (
    <div className="container-page">
      <PageHeader
        trail={[{ label: "Education" }]}
        title="Education"
        subtitle="My academic background and continuous learning journey."
        icon={GraduationCap}
      />

      <div className="space-y-5">
        {education.map((item) => (
          <Reveal key={item.degree}>
            <article className="card card-hover flex flex-wrap items-center gap-5 p-7">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-violet/15 text-violet-soft">
                <GraduationCap size={26} />
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white">{item.degree}</h2>
                <p className="mt-1 text-muted">{item.institution}</p>
              </div>
              <span className="rounded-lg border border-violet/30 bg-violet/10 px-3 py-1.5 text-sm font-medium text-violet-soft">
                {item.period}
              </span>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="mb-5 text-2xl font-bold text-white">Certifications</h2>

        {certifications.length === 0 ? (
          <Reveal>
            <div className="card flex flex-col items-start gap-3 p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet/15 text-violet-soft">
                <Award size={20} />
              </span>
              <p className="text-muted">
                No certifications listed yet. Add real entries in{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-violet-soft">
                  src/data/education.js
                </code>{" "}
                once you have the certificate name, issuer, date and credential link.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <Reveal key={cert.name}>
                <a
                  href={cert.url || "#"}
                  target={cert.url ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card card-hover flex items-center gap-4 p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet/15 text-violet-soft">
                    <Award size={20} />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{cert.name}</span>
                    <span className="block text-sm text-muted">
                      {cert.issuer}
                      {cert.date ? ` · ${cert.date}` : ""}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <Reveal>
        <div className="card mt-14 flex flex-wrap items-center justify-between gap-4 p-8">
          <p className="font-script text-3xl text-violet-soft">Learning never stops</p>
          <Button to="/contact">Get In Touch</Button>
        </div>
      </Reveal>
    </div>
  );
}
