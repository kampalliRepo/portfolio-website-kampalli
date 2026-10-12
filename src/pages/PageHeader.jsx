import Breadcrumbs from "./Breadcrumbs.jsx";
import Reveal from "../components/Reveal.jsx";

export default function PageHeader({ trail, title, subtitle, icon: Icon }) {
  return (
    <header className="mb-12">
      <Breadcrumbs trail={trail} />
      <Reveal>
        <div className="flex items-start gap-4">
          {Icon && (
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet/15 text-violet-soft">
              <Icon size={22} />
            </span>
          )}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            {subtitle && <p className="mt-2 max-w-2xl text-muted">{subtitle}</p>}
          </div>
        </div>
      </Reveal>
    </header>
  );
}
