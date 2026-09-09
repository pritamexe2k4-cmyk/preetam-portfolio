import { skillsTicker } from "@/data/site";

const toneClass = {
  cyan: "tone-cyan",
  violet: "tone-violet",
  amber: "tone-amber",
  lime: "tone-lime",
  magenta: "tone-magenta",
} as const;

export function SkillsMarquee() {
  const loop = [...skillsTicker, ...skillsTicker];
  return (
    <div className="marquee-pause mt-12 w-full overflow-x-hidden py-2">
      <div className="marquee-track flex w-max items-center gap-3">
        {loop.map((s, i) => (
          <span key={`${s.label}-${i}`} className={`chip ${toneClass[s.tone]}`}>
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
