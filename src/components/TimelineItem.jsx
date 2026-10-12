import Reveal from "./Reveal.jsx";

export default function TimelineItem({ item }) {
  return (
    <Reveal className="relative pl-8">
      <span className="absolute left-0 top-2 grid h-4 w-4 place-items-center">
        <span className="absolute h-4 w-4 rounded-full bg-violet/40 animate-pulseRing" />
        <span className="h-2.5 w-2.5 rounded-full bg-violet" />
      </span>
      <span className="absolute left-[7px] top-7 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-violet/60 to-transparent" />

      <div className="card p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-white">{item.company}</h3>
            <p className="text-violet-soft">{item.role}</p>
          </div>
          <div className="text-right text-sm text-muted">
            <p>{item.period}</p>
            <p>{item.location}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-soft">
              Key achievements
            </h4>
            <ul className="space-y-2">
              {item.achievements.map((a) => (
                <li key={a} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-soft">
              Responsibilities
            </h4>
            <ul className="space-y-2">
              {item.responsibilities.map((r) => (
                <li key={r} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/60" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
