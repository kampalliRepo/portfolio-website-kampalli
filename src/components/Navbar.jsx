import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { profile } from "../data/profile.js";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-1 text-sm font-medium transition-colors ${
      isActive ? "text-white" : "text-muted hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-ink-900/85 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-violet"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-violet-deep to-violet px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03] sm:inline-flex"
          >
            <Download size={16} />
            Download Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col gap-2 border-l border-white/10 bg-ink-800/95 p-6 pt-20 backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-violet/15 text-white"
                      : "text-muted hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-deep to-violet px-4 py-3 text-sm font-semibold text-white"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  );
}
