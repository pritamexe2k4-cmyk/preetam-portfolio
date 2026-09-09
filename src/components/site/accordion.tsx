import { useState } from "react";
import { ChevronDown } from "lucide-react";

const tones = ["tone-cyan", "tone-magenta", "tone-amber"] as const;

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: readonly { t: string; d: string }[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => {
        const on = open === i;
        return (
          <div key={item.t} className={`surface-card overflow-hidden ${tones[i % tones.length]}`}>
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left font-sans text-lead text-ink-strong transition-colors duration-200 hover:bg-elevated"
              onClick={() => setOpen(on ? -1 : i)}
              aria-expanded={on}
            >
              <span className="flex items-center gap-3">
                <span className="font-mono text-sm text-[color:var(--tone)]">0{i + 1}</span>
                {item.t}
              </span>
              <ChevronDown
                className={`size-4 shrink-0 text-[color:var(--tone)] transition-transform duration-300 ease-out ${on ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-14 text-base leading-relaxed text-ink">{item.d}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
