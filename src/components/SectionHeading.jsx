import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, subtitle, align = "left", action }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal>
      <div
        className={`mb-8 flex flex-col gap-3 ${alignment} ${
          action ? "md:flex-row md:items-end md:justify-between" : ""
        }`}
      >
        <div className={`flex flex-col gap-3 ${alignment}`}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          {subtitle && <p className="max-w-2xl text-muted">{subtitle}</p>}
        </div>
        {action}
      </div>
    </Reveal>
  );
}
