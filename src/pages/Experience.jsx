import { ArrowRight, Briefcase } from "lucide-react";
import PageHeader from "./PageHeader.jsx";
import TimelineItem from "../components/TimelineItem.jsx";
import Button from "../components/Button.jsx";
import Reveal from "../components/Reveal.jsx";
import { experience } from "../data/experience.js";
import { profile } from "../data/profile.js";

export default function Experience() {
  return (
    <div className="container-page">
      <PageHeader
        trail={[{ label: "Experience" }]}
        title="Work Experience"
        subtitle="My professional journey and key contributions."
        icon={Briefcase}
      />

      <div className="space-y-8">
        {experience.map((item) => (
          <TimelineItem key={item.company} item={item} />
        ))}
      </div>

      <section className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <blockquote className="card h-full p-8">
            <p className="font-script text-3xl text-violet-soft">Experience builds excellence</p>
            <p className="mt-4 leading-relaxed text-slate-300">{profile.philosophy}</p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card flex h-full flex-col items-start justify-center gap-4 p-8">
            <h2 className="text-2xl font-bold text-white">See the work</h2>
            <p className="text-muted">
              Production apps built during this role, with full case studies.
            </p>
            <Button to="/projects">
              View Projects
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
