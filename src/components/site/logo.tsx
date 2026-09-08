import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} home`}
      className={cn(
        "logo-mark inline-flex h-9 w-[4.25rem] items-center justify-center rounded-full border-2 border-ink-strong text-sm tracking-tight text-ink-strong hover:bg-ink-strong hover:text-canvas",
        className,
      )}
    >
      {site.mark}
    </Link>
  );
}
