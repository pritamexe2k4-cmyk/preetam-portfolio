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
    <section className="flex flex-col items-center gap-6 px-6 py-16 text-center">
      <Zigzag />
      <h2 className="font-sans text-lead text-ink-strong">Join the list to receive the latest updates</h2>
      <p className="max-w-md font-sans text-lg font-light text-ink">
        Occasional email when a repo, write-up, or role update goes live. No course spam.
      </p>
      {sent ? (
        <p className="text-muted">Saved on this device. A live list isn’t wired on the preview.</p>
      ) : (
        <form
          className="flex w-full max-w-[455px] items-stretch"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="name@example.com"
            className="field-input min-w-0 flex-1 px-3 py-2.5 text-lead"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="group ml-2 flex w-[75px] items-center justify-center bg-field text-lg text-canvas transition-[background-color,transform] duration-200 ease-out hover:bg-ink-strong active:scale-[0.96]"
          >
            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
              →
            </span>
          </button>
        </form>
      )}
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
        <div className="flex items-center gap-5 text-ink-strong">
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

function Zigzag() {
  return (
    <svg className="h-3.5 w-full text-ink" viewBox="0 0 1440 14" preserveAspectRatio="none" aria-hidden>
      <defs>
        <pattern id="zz" width="14" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 7 L7 1 L14 7" fill="none" stroke="currentColor" strokeWidth="1.1" />
        </pattern>
      </defs>
      <rect width="1440" height="14" fill="url(#zz)" />
    </svg>
  );
}
