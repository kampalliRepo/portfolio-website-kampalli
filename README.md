# Kampalli M — Portfolio Website

A multi-page personal portfolio built with React, Tailwind CSS, React Router and
Framer Motion. Built to the functionality spec in
*Kampalli M Portfolio Website — Complete Figma + Website Functionality Documentation*.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

Build and preview a production bundle:

```bash
npm run build
npm run preview
```

> Requires Node 18 or newer.

---

## What's inside

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero, stats, about preview, skills preview, featured projects, education preview, contact CTA |
| `/about` | About | Full profile, work traits, interests, philosophy quote |
| `/skills` | Skills | Grouped skills with animated category filters |
| `/experience` | Experience | Animated vertical timeline with achievements and responsibilities |
| `/projects` | Projects | Filterable project grid |
| `/projects/:id` | Project detail | Overview → problem → solution → features → stack → responsibilities → challenges → results |
| `/education` | Education | Degree card plus an empty-state certifications section |
| `/contact` | Contact | Contact details and a validated message form |
| `*` | 404 | Friendly fallback |

### Functionality checklist (from the spec)

- Every navbar link routes to the correct page, logo returns Home
- Active navigation state with an animated underline
- "Let's Connect" opens Contact; "Download Resume" downloads the PDF
- Project cards open their detail page; external links open in a new tab
- Skill filters and project filters work without a page reload
- Contact form validates required fields and email format, with success and error states
- Mobile hamburger drawer with body-scroll lock and auto-close on navigation
- Back-to-top button with smooth scroll
- Page transitions, scroll-reveal, hover lift and staggered card reveals
- Visible keyboard focus rings, image alt text, `prefers-reduced-motion` respected
- Responsive across desktop, tablet and mobile

---

## Add your real content

Everything is data-driven. Edit these files — no component changes needed.

```
src/data/profile.js     name, role, intro, email, phone, socials, resume path, stats
src/data/skills.js      skill list, groups, filters, home-page preview list
src/data/projects.js    project cards and full case-study content
src/data/experience.js  roles, achievements, responsibilities
src/data/education.js   degree + certifications (empty by default — see below)
```

### Images and resume

Drop these into `public/` (see `public/README-assets.txt`):

```
public/Kampalli_M_Resume.pdf   <- the Download Resume button
public/profile.png             <- hero portrait
public/profile-about.jpg       <- About page portrait
public/projects/shepower.png
public/projects/recess.png
public/projects/gold-point.png
```

Missing images fall back to a styled initials placeholder, so nothing breaks
before you add them.

### Certifications

`src/data/education.js` exports an empty `certifications` array on purpose — the
source resume didn't list any. Add entries only when you have the real
certificate name, issuer, date and credential URL:

```js
export const certifications = [
  {
    name: "Flutter Development Certificate",
    issuer: "Google",
    date: "2023",
    url: "https://...",
  },
];
```

### Contact form delivery

The form validates and shows a success state out of the box, but doesn't send
anything until you connect a service:

1. Create a form on [Formspree](https://formspree.io) (or use EmailJS / your own API).
2. Copy `.env.example` to `.env`.
3. Set `VITE_CONTACT_ENDPOINT` to your endpoint URL.

It POSTs JSON: `{ name, email, subject, message }`.

---

## Project structure

```
src/
├── components/
│   ├── Avatar.jsx          image with initials fallback
│   ├── BackToTop.jsx
│   ├── Button.jsx          renders Link / <a> / <button> by prop
│   ├── FilterTabs.jsx      animated pill filters
│   ├── Footer.jsx
│   ├── Logo.jsx
│   ├── Navbar.jsx          desktop nav + mobile drawer
│   ├── PageTransition.jsx
│   ├── ProjectCard.jsx
│   ├── Reveal.jsx          scroll-reveal wrapper
│   ├── ScrollToTop.jsx     resets scroll on route change
│   ├── SectionHeading.jsx
│   ├── SkillCard.jsx
│   ├── StatCard.jsx
│   └── TimelineItem.jsx
├── data/                   all content lives here
├── pages/                  one file per route + PageHeader / Breadcrumbs
├── routes/AppRoutes.jsx    route table with animated transitions
├── App.jsx
├── main.jsx
└── index.css               Tailwind layers + design tokens
```

---

## Design tokens

Defined in `tailwind.config.js`:

| Token | Value | Use |
|---|---|---|
| `ink-900` | `#05050f` | page background |
| `ink-800` | `#0a0a1c` | card surface |
| `ink-700` | `#101028` | raised surface |
| `violet` | `#8b5cf6` | primary accent |
| `violet-soft` | `#a78bfa` | accent text |
| `violet-deep` | `#6d28d9` | gradient start |
| `muted` | `#9aa0c0` | secondary text |

Type: **Outfit** for everything, **Caveat** for the handwritten accent lines.
Both load from Google Fonts in `index.html`.

---

## Deploy

**Vercel** — import the repo, framework preset *Vite*. `vercel.json` already
handles SPA rewrites so deep links like `/projects/shepower` work.

**Netlify** — build command `npm run build`, publish directory `dist`.
`public/_redirects` handles the SPA fallback.

Set `VITE_CONTACT_ENDPOINT` as an environment variable in either dashboard.
