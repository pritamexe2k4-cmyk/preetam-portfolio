import { skillsTicker } from "@/data/site";

export function SkillsMarquee() {
  return (
    <div className="marquee-pause mt-12 w-full overflow-x-hidden border-y border-line py-3">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-sans text-lg text-ink">
        {[...skillsTicker, ...skillsTicker].map((s, i) => (
          <span key={`${s}-${i}`}>
            {s} <span className="text-muted">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
