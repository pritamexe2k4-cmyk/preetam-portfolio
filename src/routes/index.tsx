import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Accordion } from "@/components/site/accordion";
import { CircleButton, CircleLink } from "@/components/site/circle-btn";
import { HelloCopy, HelloForm } from "@/components/site/hello-form";
import { ArrowDownMini, ArrowSee } from "@/components/site/icons";
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
    <section className="grid items-start gap-10 py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-6 lg:py-10">
      <h1 className="max-w-[18ch] font-sans text-[2.35rem] leading-[1.12] text-ink text-pretty md:text-hero md:leading-[1.08]">
        {site.hero.before}
        <span className="underline decoration-from-font underline-offset-4">{site.hero.available}</span>
        {site.hero.after}
      </h1>
      <div className="photo-zoom relative w-full overflow-hidden rounded-card bg-photo">
        <img src="/media/hero.png" alt="" className="aspect-[606/564] h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="relative scroll-mt-28 pt-24 lg:pt-32">
      <SectionTitle>Projects</SectionTitle>
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-6">
        <div className="grid min-w-0 flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-8 flex justify-end lg:mt-0 lg:shrink-0 lg:flex-col lg:justify-center lg:pt-11">
          <CircleLink href={site.github} target="_blank" rel="noreferrer" aria-label="More on GitHub">
            <span className="plus-spin inline-block">+</span>
          </CircleLink>
        </div>
      </div>
    </section>
  );
}

function IncluHub() {
  return (
    <section className="pt-24 lg:pt-32">
      <SectionTitle>IncluHub</SectionTitle>
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
              <ArrowDownMini className="arrow-nudge h-5 w-4" />
            </Link>
            <a
              href={site.incluhubLive}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-3 font-sans text-lg text-ink-strong"
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
          className="photo-zoom group relative block overflow-hidden rounded-card bg-photo"
        >
          <img src="/media/featured.png" alt="IncluHub product" className="aspect-[674/376] w-full object-cover" />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="pt-24 lg:pt-32">
      <SectionTitle>About Me</SectionTitle>
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
      <SectionTitle>From the work</SectionTitle>
      <div className="flex items-center gap-4 md:gap-10">
        <CircleButton aria-label="Previous" className="hidden sm:inline-flex" onClick={prev}>
          <ChevronLeft className="size-5" />
        </CircleButton>
        <blockquote className="flex-1 text-center">
          <div key={i} className="quote-in">
            <p className="mx-auto max-w-2xl font-sans text-xl leading-snug text-ink text-pretty md:text-quote">
              “{q.text}”
            </p>
            <p className="mt-8 font-sans text-lead text-ink-strong">_ {q.name}</p>
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
      <SectionTitle>Say Hello</SectionTitle>
      <div className="grid gap-16 lg:grid-cols-2">
        <HelloCopy />
        <HelloForm />
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section className="pt-24 lg:pt-32">
      <div className="mb-10 h-px bg-line" />
      <h2 className="mb-12 text-center font-sans text-lead text-ink-strong">Recent notes</h2>
      <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-line">
        {notes.map((n) => (
          <a
            key={n.title}
            href={n.href}
            target="_blank"
            rel="noreferrer"
            className="group/see block px-2 transition-opacity duration-200 hover:opacity-80 md:px-8"
          >
            <p className="font-sans text-lg leading-snug text-ink-strong">{n.title}</p>
            <p className="mt-6 text-sm text-ink">{n.date}</p>
            <p className="mt-2 inline-flex items-center gap-2 text-base">
              See Now
              <ArrowSee className="arrow-nudge" />
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
