import type { ReactNode } from "react";
import { Navbar } from "@/components/site/navbar";
import { Newsletter, SiteFooter } from "@/components/site/footer";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-canvas text-ink">
      <Navbar />
      {children}
      <Newsletter />
      <SiteFooter />
    </div>
  );
}
