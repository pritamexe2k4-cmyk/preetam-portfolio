import { cn } from "@/lib/cn";

export function SectionTitle({
  children,
  kicker,
  className,
}: {
  children: string;
  kicker?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      {kicker ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-cyan">{kicker}</p>
      ) : null}
      <h2 className="font-display text-section font-semibold leading-none text-ink-strong text-balance">
        {children}
      </h2>
    </div>
  );
}
