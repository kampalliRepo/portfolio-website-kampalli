import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { navLinks } from "./Navbar.jsx";
import { profile } from "../data/profile.js";

const socials = [
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.socials.twitter, label: "Twitter", Icon: Twitter },
  { href: profile.socials.instagram, label: "Instagram", Icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-800/50">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold text-white">
            KAMPALLI <span className="text-violet-soft">M</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            Flutter Developer &middot; {profile.tagline}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="text-sm link-muted">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted transition hover:border-violet/50 hover:text-violet-soft"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 py-4">
        <p className="container-page text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Kampalli M. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
