import { Link } from "react-router-dom";

export default function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Kampalli M - go to home page"
      className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-white"
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-deep to-violet text-sm text-white">
        K
      </span>
      <span>
        KAMPALLI <span className="text-violet-soft">M</span>
      </span>
    </Link>
  );
}
