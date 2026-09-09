import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import type { projects } from "@/data/site";

type Project = (typeof projects)[number];

const toneClass = {
  cyan: "tone-cyan",
  magenta: "tone-magenta",
  amber: "tone-amber",
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 0, y: 0, on: false });
  const current = useRef({ x: 0, y: 0, s: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const tick = () => {
      const t = target.current;
      const c = current.current;
      c.x += (t.x - c.x) * 0.22;
      c.y += (t.y - c.y) * 0.22;
      c.s += ((t.on ? 1 : 0) - c.s) * 0.2;
      const el = circleRef.current;
      if (el) {
        el.style.left = `${c.x}px`;
        el.style.top = `${c.y}px`;
        el.style.opacity = `${c.s}`;
        el.style.transform = `translate(-50%, -50%) scale(${0.28 + 0.72 * c.s})`;
      }
      if (t.on || c.s > 0.01) {
        raf.current = requestAnimationFrame(tick);
      } else {
        raf.current = 0;
      }
    };
    const start = () => {
      if (!raf.current) raf.current = requestAnimationFrame(tick);
    };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const stage = stageRef.current;
    if (!stage || reduced || !fine) return;

    const move = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect();
      target.current.x = e.clientX - r.left;
      target.current.y = e.clientY - r.top;
      target.current.on = true;
      start();
    };
    const leave = () => {
      target.current.on = false;
      start();
    };
    stage.addEventListener("mousemove", move);
    stage.addEventListener("mouseenter", move);
    stage.addEventListener("mouseleave", leave);
    return () => {
      stage.removeEventListener("mousemove", move);
      stage.removeEventListener("mouseenter", move);
      stage.removeEventListener("mouseleave", leave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <Link to="/work/$slug" params={{ slug: project.slug }} className={`group block ${toneClass[project.tone]}`}>
      <p className="mb-3 flex items-baseline gap-2 font-sans text-lead text-ink-strong">
        <span className="font-mono text-sm text-[color:var(--tone)]">{project.n}</span>
        {project.title}
      </p>
      <div
        ref={stageRef}
        className="project-frame relative overflow-hidden rounded-card max-md:cursor-pointer md:cursor-none"
      >
        <img
          src={project.image}
          alt=""
          className="aspect-[370/558] w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-110"
        />
        <span
          ref={circleRef}
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 z-10 hidden size-[4.5rem] items-center justify-center rounded-full bg-canvas font-mono text-[11px] font-medium tracking-[0.16em] text-ink-strong uppercase opacity-0 md:flex"
          style={{ transform: "translate(-50%, -50%) scale(0.28)" }}
        >
          View
        </span>
      </div>
    </Link>
  );
}
