import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { pageX } from "@/components/site/layout";
import { site } from "@/data/site";
import { useState } from "react";

const socials = [
  { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.github, label: "GitHub", Icon: Github },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
  { href: site.resume, label: "Resume", Icon: FileText },
] as const;

export function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <section className={`${pageX} py-16`}>
      <div className="surface-card mx-auto flex max-w-2xl flex-col items-center gap-5 px-6 py-12 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-magenta">Signal</p>
        <h2 className="font-display text-lead font-semibold text-ink-strong">
          Join the list for repo drops
        </h2>
        <p className="max-w-md font-sans text-lg font-light text-ink">
          Occasional email when a repo, write-up, or role update goes live. No course spam.
        </p>
        {sent ? (
          <p className="text-muted">Saved on this device. A live list isn’t wired yet.</p>
        ) : (
          <form
            className="flex w-full max-w-md items-stretch gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="name@example.com"
              className="field-input min-w-0 flex-1 px-3 py-2.5 text-lg"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="fill-btn flex w-[72px] items-center justify-center rounded-pill text-lg"
            >
              →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className={`${pageX} flex flex-wrap items-center justify-between gap-4 py-10`}>
        <div className="flex items-center gap-6">
          <Logo />
          <p className="font-light text-sm text-muted">
            © 2026 {site.name}. {site.city}.
          </p>
        </div>
        <div className="flex items-center gap-5">
          {socials.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="icon-hit">
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
