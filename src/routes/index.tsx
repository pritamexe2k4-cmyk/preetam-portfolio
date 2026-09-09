import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/site/accordion";
import { CircleButton } from "@/components/site/circle-btn";
import { HelloCopy, HelloForm } from "@/components/site/hello-form";
import { ArrowSee } from "@/components/site/icons";
import { pageX } from "@/components/site/layout";
import { SkillsMarquee } from "@/components/site/marquee";
import { ProjectCard } from "@/components/site/project-card";
import { SectionTitle } from "@/components/site/section-title";
import { Shell } from "@/components/site/shell";
import { aboutAccordion, notes, projects, quotes, site } from "@/data/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Shell>
      <main className={`${pageX} pb-24`}>
        <Hero />
        <Projects />
        <IncluHub />
        <About />
        <Quotes />
        <SayHello />
        <Notes />
      </main>
    </Shell>
  );
}

function Hero() {
  return (
    <section className="grid items-center gap-10 py-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] lg:gap-10 lg:py-16">
      <div className="rise-in">
        <p className="live-pill mb-6">
          <span className="live-dot" />
          {site.hero.available} · Hyderabad
        </p>
        <h1 className="font-display text-hero font-bold leading-[0.92] tracking-tight text-balance">
          <span className="text-gradient">{site.name}</span>
        </h1>
        <p className="mt-6 max-w-[28ch] font-sans text-lead leading-snug text-ink text-pretty">
          {site.hero.before}
          {site.hero.after}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/#work" className="fill-btn rounded-pill px-6 py-2.5 text-base font-medium">
            See work
          </a>
          <Link to="/contact" className="ghost-btn rounded-pill px-6 py-2.5 text-base font-medium">
            Say hello
          </Link>
        </div>
      </div>
      <div className="photo-zoom relative w-full overflow-hidden rounded-card border border-line bg-photo shadow-[0_0_80px_color-mix(in_srgb,var(--color-magenta)_18%,transparent)]">
        <img src="https://cdn.jsdelivr.net/gh/pritamexe2k4-cmyk/preetam-portfolio@main/public/media/hero.png" alt="" className="aspect-[606/564] h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="relative scroll-mt-28 pt-24 lg:pt-32">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <SectionTitle kicker="Selected" className="mb-0">
          Projects
        </SectionTitle>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="ghost-btn inline-flex items-center gap-2 rounded-pill px-5 py-2.5 text-sm font-medium"
        >
          More on GitHub
          <span className="plus-spin">+</span>
        </a>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

function IncluHub() {
  return (
    <section className="pt-24 lg:pt-32">
      <SectionTitle kicker="Featured">IncluHub</SectionTitle>
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="max-w-md font-sans text-lead leading-snug text-ink text-pretty">
            Fashion-model network. I owned the React Native + Firebase app, replaced campaign sheets with a
            CRM, and shipped the student dashboard so founders stopped onboarding by hand.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4">
            <Link
              to="/contact"
              className="group/see inline-flex items-center gap-3 font-sans text-lg text-ink-strong"
            >
              Get in contact about a collaboration
              <ArrowSee className="arrow-nudge size-3" />
            </Link>
            <a
              href={site.incluhubLive}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-3 font-sans text-lg text-cyan"
            >
              <span className="text-link">Open the live tool</span>
              <ArrowSee className="arrow-nudge size-3" />
            </a>
          </div>
        </div>
        <a
          href={site.incluhubLive}
          target="_blank"
          rel="noreferrer"
          className="photo-zoom group relative block overflow-hidden rounded-card border border-line bg-photo"
        >
          <img src="https://cdn.jsdelivr.net/gh/pritamexe2k4-cmyk/preetam-portfolio@main/public/media/featured.png" alt="IncluHub product" className="aspect-[674/376] w-full object-cover" />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="pt-24 lg:pt-32">
      <SectionTitle kicker="Bio">About Me</SectionTitle>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8 font-sans text-lead leading-snug text-ink text-pretty">
          <p>
            B.Tech CSE (AI/ML), VNR VJIET. I care about systems that move revenue and cut busywork —
            orchestration, RAG that stays honest, and backends you can actually ship.
          </p>
          <p>
            At IncluHub I went intern to AI Orchestrator (Mar–Aug 2026): fashion app, Meta/WhatsApp CRM
            path, student dashboard. Before that I ran HR for Street Cause and grew the chapter 9 → 30+.
          </p>
        </div>
        <div>
          <p className="mb-4 font-sans text-lead text-ink-strong">What I actually ship:</p>
          <Accordion items={aboutAccordion} />
        </div>
      </div>
      <SkillsMarquee />
    </section>
  );
}

function Quotes() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  const prev = () => setI((n) => (n - 1 + quotes.length) % quotes.length);
  const next = () => setI((n) => (n + 1) % quotes.length);

  return (
    <section className="pt-24 lg:pt-32">
      <SectionTitle kicker="Proof">From the work</SectionTitle>
      <div className="flex items-center gap-4 md:gap-10">
        <CircleButton aria-label="Previous" className="hidden sm:inline-flex" onClick={prev}>
          <ChevronLeft className="size-5" />
        </CircleButton>
        <blockquote className="surface-card flex-1 px-6 py-10 text-center md:px-12">
          <div key={i} className="quote-in">
            <p className="mx-auto max-w-2xl font-display text-xl leading-snug text-ink text-pretty md:text-quote">
              “{q.text}”
            </p>
            <p className="mt-8 font-sans text-lead text-cyan">_ {q.name}</p>
            <p className="mt-1 font-sans italic text-lg text-ink">{q.role}</p>
          </div>
        </blockquote>
        <CircleButton aria-label="Next" className="hidden sm:inline-flex" onClick={next}>
          <ChevronRight className="size-5" />
        </CircleButton>
      </div>
      <div className="mt-8 flex justify-center gap-4 sm:hidden">
        <CircleButton aria-label="Previous" onClick={prev}>
          <ChevronLeft className="size-5" />
        </CircleButton>
        <CircleButton aria-label="Next" onClick={next}>
          <ChevronRight className="size-5" />
        </CircleButton>
      </div>
    </section>
  );
}

function SayHello() {
  return (
    <section id="hello" className="scroll-mt-28 pt-24 lg:pt-32">
      <SectionTitle kicker="Contact">Say Hello</SectionTitle>
      <div className="grid gap-16 lg:grid-cols-2">
        <HelloCopy />
        <HelloForm />
      </div>
    </section>
  );
}

function Notes() {
  const tones = {
    cyan: "tone-cyan",
    magenta: "tone-magenta",
    amber: "tone-amber",
  } as const;

  return (
    <section className="pt-24 lg:pt-32">
      <SectionTitle kicker="Writing">Recent notes</SectionTitle>
      <div className="grid gap-4 md:grid-cols-3">
        {notes.map((n) => (
          <a
            key={n.title}
            href={n.href}
            target="_blank"
            rel="noreferrer"
            className={`surface-card group/see block p-6 transition-transform duration-200 hover:-translate-y-1 ${tones[n.tone]}`}
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--tone)]">{n.date}</p>
            <p className="mt-4 font-sans text-lg leading-snug text-ink-strong">{n.title}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-base text-muted">
              See now
              <ArrowSee className="arrow-nudge" />
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
