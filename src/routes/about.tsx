import { createFileRoute } from "@tanstack/react-router";
import { Accordion } from "@/components/site/accordion";
import { pageX } from "@/components/site/layout";
import { SkillsMarquee } from "@/components/site/marquee";
import { SectionTitle } from "@/components/site/section-title";
import { Shell } from "@/components/site/shell";
import { aboutAccordion, site } from "@/data/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <Shell>
      <main className={`${pageX} pb-24 pt-4`}>
        <SectionTitle>About Me</SectionTitle>
        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          {site.aboutPhotos.map((src) => (
            <div key={src} className="photo-zoom overflow-hidden rounded-card bg-photo">
              <img src={src} alt="" className="aspect-[4/3] w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-10 font-sans text-lead leading-snug text-ink text-pretty">
            <p>
              I'm an AI engineer working on applied systems — RAG, agents, and the backends that hold
              them. The skillset sits on Python and TypeScript: FastAPI, LangGraph, Next.js, React Native.
            </p>
            <p>
              IncluHub, Hyderabad: AI Intern (Mar–May 2026) then AI Orchestrator (Jul–Aug 2026).
              Fashion-model social + hiring network. I owned the live app (~1,000–3,000 users), wired Meta
              / WhatsApp / Ads into a CRM, and shipped the student dashboard.
            </p>
            <p>
              Street Cause, VNR VJIET: HR Head, 2024. Recruitment, onboarding, chapter 9 → 30+ volunteers.
            </p>
            <p>B.Tech CSE (AI/ML), VNR VJIET, 2022–2026. Hyderabad. Chess, books, gym, research, food.</p>
          </div>
          <div>
            <p className="mb-4 font-sans text-lead text-ink-strong">What I actually ship:</p>
            <Accordion items={aboutAccordion} />
            <dl className="mt-12 space-y-8 font-sans text-lead text-ink">
              <div className="border-b border-line pb-6">
                <dt className="text-ink-strong">Looking for</dt>
                <dd className="mt-3 text-lg leading-relaxed">
                  Internships from ₹20k/month or full-time from 4 LPA in GenAI / RAG / agentic / applied AI /
                  backend. Hyderabad or remote-friendly India.
                </dd>
              </div>
              <div className="border-b border-line pb-6">
                <dt className="text-ink-strong">Links</dt>
                <dd className="mt-3 flex flex-col gap-2 text-lg">
                  <a href={site.github} target="_blank" rel="noreferrer" className="text-link w-fit">
                    GitHub
                  </a>
                  <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-link w-fit">
                    LinkedIn
                  </a>
                  <a href={site.resume} target="_blank" rel="noreferrer" className="text-link w-fit">
                    Resume
                  </a>
                  <a href={`mailto:${site.email}`} className="text-link w-fit">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <SkillsMarquee />
      </main>
    </Shell>
  );
}
