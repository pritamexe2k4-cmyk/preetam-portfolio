import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: readonly { t: string; d: string }[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      {items.map((item, i) => {
        const on = open === i;
        return (
          <div key={item.t} className="border-b border-line">
            <button
              type="button"
              className="flex w-full items-center justify-between py-4 text-left font-sans text-lead text-ink-strong transition-opacity duration-200 hover:opacity-70"
              onClick={() => setOpen(on ? -1 : i)}
              aria-expanded={on}
            >
              {item.t}
              <ChevronDown
                className={`size-3 shrink-0 transition-transform duration-300 ease-out ${on ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pl-8 pr-4 text-base leading-relaxed text-ink">{item.d}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
