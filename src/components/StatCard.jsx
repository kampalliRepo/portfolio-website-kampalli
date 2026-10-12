import { Briefcase, Rocket, ShieldCheck, Zap } from "lucide-react";

const icons = {
  briefcase: Briefcase,
  rocket: Rocket,
  shield: ShieldCheck,
  zap: Zap,
};

export default function StatCard({ value, label, icon }) {
  const Icon = icons[icon] || Briefcase;

  return (
    <div className="card card-hover flex items-center gap-3 p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-violet/15 text-violet-soft">
        <Icon size={18} />
      </span>
      <span>
        <span className="block text-xl font-bold text-white">{value}</span>
        <span className="block text-xs text-muted">{label}</span>
      </span>
    </div>
  );
}
