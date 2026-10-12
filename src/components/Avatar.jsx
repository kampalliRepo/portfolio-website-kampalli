import { useState } from "react";

/**
 * Image with a graceful initials fallback, so the site looks complete
 * before the real photos are dropped into /public.
 */
export default function Avatar({ src, alt, className = "", initials = "KM" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`grid place-items-center bg-gradient-to-br from-violet-deep/40 via-ink-700 to-ink-800 ${className}`}
        aria-label={alt}
        role="img"
      >
        <span className="text-5xl font-extrabold tracking-tight text-violet-soft/70">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
