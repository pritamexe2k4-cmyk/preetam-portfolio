import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} home`}
      className={cn(
        "logo-mark inline-flex h-10 w-[4.4rem] items-center justify-center rounded-full font-display text-sm font-bold tracking-tight",
        className,
      )}
    >
      {site.mark}
    </Link>
  );
}
