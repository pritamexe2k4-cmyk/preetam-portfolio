import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export const circleClass =
  "circle-btn group inline-flex size-plus shrink-0 items-center justify-center rounded-full border border-ink-strong text-lead text-ink-strong hover:bg-ink-strong hover:text-canvas";

export function CircleButton({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button type="button" className={cn(circleClass, className)} {...props}>
      {children}
    </button>
  );
}

export function CircleLink({
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return (
    <a className={cn(circleClass, className)} {...props}>
      {children}
    </a>
  );
}
