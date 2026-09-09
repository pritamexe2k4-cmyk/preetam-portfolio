import type { ReactNode } from "react";
import { Aurora } from "@/components/site/aurora";
import { Navbar } from "@/components/site/navbar";
import { Newsletter, SiteFooter } from "@/components/site/footer";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell min-h-dvh overflow-x-hidden bg-transparent text-ink">
      <Aurora />
      <Navbar />
      {children}
      <Newsletter />
      <SiteFooter />
    </div>
  );
}
