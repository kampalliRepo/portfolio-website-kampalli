import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ trail = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm">
      <Link to="/" className="link-muted">
        Home
      </Link>
      {trail.map((crumb, i) => (
        <span key={crumb.label} className="flex items-center gap-1">
          <ChevronRight size={14} className="text-muted" />
          {crumb.to && i < trail.length - 1 ? (
            <Link to={crumb.to} className="link-muted">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-violet-soft">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
