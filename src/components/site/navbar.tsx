import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/site/logo";
import { pageX } from "@/components/site/layout";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const items = [
  { label: "Work", to: "/", hash: "work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "GitHub", href: site.github },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-40">
      <nav className={cn(pageX, "flex h-16 items-center justify-between md:h-nav")}>
        <Logo />
        <button
          type="button"
          className="circle-btn inline-flex size-11 items-center justify-center rounded-full text-sm md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul
          id="site-nav"
          className={cn(
            "absolute left-0 right-0 top-16 z-50 flex-col gap-1 border-b border-line bg-canvas/95 px-6 py-4 md:static md:z-auto md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:px-0 md:py-0",
            open ? "flex" : "hidden md:flex",
          )}
        >
          {items.map((item) => {
            const active =
              "to" in item &&
              ((item.to === "/about" && pathname === "/about") ||
                (item.to === "/contact" && pathname === "/contact") ||
                (item.to === "/" && (pathname === "/" || pathname.startsWith("/work"))));
            const cls = cn(
              "nav-link block py-2 font-sans text-lg md:py-0 md:text-nav",
              active && "is-active",
            );
            if ("href" in item) {
              return (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer" className={cls}>
                    {item.label}
                  </a>
                </li>
              );
            }
            if ("hash" in item && item.hash) {
              return (
                <li key={item.label}>
                  <a href={`/#${item.hash}`} className={cls} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <Link to={item.to} className={cls} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
