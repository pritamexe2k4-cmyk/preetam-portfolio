import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { circleClass } from "@/components/site/circle-btn";
import { ArrowSee } from "@/components/site/icons";
import { pageX } from "@/components/site/layout";
import { Shell } from "@/components/site/shell";
import { cn } from "@/lib/cn";
import { projects } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({ component: WorkPage });

function WorkPage() {
  const { slug } = Route.useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) throw notFound();
  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const colA = [project.problem, project.body[0]];
  const colB = [project.body[1], project.blurb];

  return (
    <Shell>
      <article className={`${pageX} pb-24 pt-4`}>
        <p className="mb-6 font-sans text-sm text-muted">
          <Link to="/" hash="work" className="text-link">
            Work
          </Link>{" "}
          / {project.n}
        </p>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-sans text-[2.6rem] leading-[0.95] text-ink-strong md:text-hero">{project.title}</h1>
            <p className="mt-6 font-sans text-lg text-muted">{project.stack}</p>
            <div className="mt-8 flex flex-wrap gap-6 font-sans text-lg">
              {project.live ? (
                <a href={project.live} target="_blank" rel="noreferrer" className="group/see inline-flex items-center gap-2">
                  Live
                  <ArrowSee className="arrow-nudge" />
                </a>
              ) : null}
              <a href={project.repo} target="_blank" rel="noreferrer" className="group/see inline-flex items-center gap-2">
                GitHub
                <ArrowSee className="arrow-nudge" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="photo-zoom overflow-hidden rounded-card bg-photo">
              <img src={project.image} alt="" className="aspect-[16/10] w-full object-cover" />
            </div>
            <div className="photo-zoom overflow-hidden rounded-card bg-photo">
              <img src={project.image2} alt="" className="aspect-[16/10] w-full object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-12 font-sans text-lead leading-snug text-ink text-pretty lg:grid-cols-2">
          <div className="space-y-8">
            {colA.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="space-y-8">
            {colB.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="mt-20 flex items-center justify-between">
          <Link to="/work/$slug" params={{ slug: prev.slug }} className={cn(circleClass)} aria-label={`Previous: ${prev.title}`}>
            <ChevronLeft className="size-5" />
          </Link>
          <Link to="/work/$slug" params={{ slug: next.slug }} className={cn(circleClass)} aria-label={`Next: ${next.title}`}>
            <ChevronRight className="size-5" />
          </Link>
        </div>
      </article>
    </Shell>
  );
}
