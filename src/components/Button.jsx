import { Link } from "react-router-dom";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-300 focus-visible:ring-2 focus-visible:ring-violet-soft disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-gradient-to-r from-violet-deep to-violet text-white shadow-glow hover:scale-[1.03] hover:brightness-110",
  secondary:
    "border border-white/15 bg-white/5 text-slate-100 hover:border-violet/60 hover:bg-violet/10 hover:scale-[1.03]",
  ghost: "text-muted hover:text-white",
};

/**
 * Renders a <Link>, an <a> or a <button> depending on the props passed.
 *   <Button to="/contact">      -> internal route
 *   <Button href="https://..."> -> external link (new tab)
 *   <Button onClick={fn}>       -> plain button
 */
export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  download,
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={isExternal && !download ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
