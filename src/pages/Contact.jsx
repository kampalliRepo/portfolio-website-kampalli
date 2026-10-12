import { useState } from "react";
import {
  CheckCircle2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "./PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { profile } from "../data/profile.js";

// Point this at Formspree, EmailJS or your own backend.
// Example: "https://formspree.io/f/xxxxxxx"
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactDetails = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    Icon: Phone,
  },
  { label: "Location", value: profile.location, href: null, Icon: MapPin },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kampalli-m",
    href: profile.socials.linkedin,
    Icon: Linkedin,
  },
];

const socials = [
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.socials.twitter, label: "Twitter", Icon: Twitter },
  { href: profile.socials.instagram, label: "Instagram", Icon: Instagram },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim()) next.email = "Enter your email address.";
    else if (!emailPattern.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.subject.trim()) next.subject = "Add a subject.";
    if (!values.message.trim()) next.message = "Write a short message.";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async () => {
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // No backend configured yet - simulate the round trip so the
        // success state can be reviewed during development.
        await new Promise((resolve) => setTimeout(resolve, 900));
      }
      setStatus("success");
      setValues(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = (name) =>
    `w-full rounded-xl border bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-muted/70 transition focus:outline-none focus:ring-2 focus:ring-violet-soft ${
      errors[name] ? "border-rose-500/70" : "border-white/10 focus:border-violet/60"
    }`;

  return (
    <div className="container-page">
      <PageHeader
        trail={[{ label: "Contact" }]}
        title="Get In Touch"
        subtitle="Have a project idea or want to collaborate? I'm always open to discussing new opportunities."
        icon={Send}
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Contact details */}
        <div className="space-y-4">
          {contactDetails.map(({ label, value, href, Icon }, i) => {
            const content = (
              <>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet/15 text-violet-soft">
                  <Icon size={19} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">
                    {label}
                  </span>
                  <span className="block text-white">{value}</span>
                </span>
              </>
            );

            return (
              <Reveal key={label} delay={i * 0.06}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="card card-hover flex items-center gap-4 p-5"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="card flex items-center gap-4 p-5">{content}</div>
                )}
              </Reveal>
            );
          })}

          <Reveal delay={0.3}>
            <div className="card p-5">
              <p className="mb-3 text-xs uppercase tracking-wide text-muted">
                Find me online
              </p>
              <div className="flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:-translate-y-0.5 hover:border-violet/50 hover:text-violet-soft"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="card p-7">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
                  <CheckCircle2 size={28} />
                </span>
                <h2 className="text-2xl font-bold text-white">Message sent</h2>
                <p className="max-w-sm text-muted">
                  Thanks for reaching out. I&apos;ll get back to you within a day or two.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-violet/50"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={fieldClass("name")}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={fieldClass("email")}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm text-slate-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className={fieldClass("subject")}
                    aria-invalid={Boolean(errors.subject)}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project"
                    className={`${fieldClass("message")} resize-y`}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                    The message didn&apos;t go through. Try again, or email me directly at{" "}
                    {profile.email}.
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-deep to-violet px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <Send size={16} className="transition group-hover:translate-x-0.5" />
                </button>

                {!FORM_ENDPOINT && (
                  <p className="text-xs text-muted">
                    No email service connected yet. Set{" "}
                    <code className="rounded bg-white/10 px-1 py-0.5 text-violet-soft">
                      VITE_CONTACT_ENDPOINT
                    </code>{" "}
                    in a .env file to deliver real messages.
                  </p>
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p className="mt-14 text-center font-script text-3xl text-violet-soft">
          Let&apos;s build something great together
        </p>
      </Reveal>
    </div>
  );
}
