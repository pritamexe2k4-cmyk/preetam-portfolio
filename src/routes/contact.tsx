import { createFileRoute } from "@tanstack/react-router";
import { HelloCopy, HelloForm } from "@/components/site/hello-form";
import { pageX } from "@/components/site/layout";
import { SectionTitle } from "@/components/site/section-title";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <Shell>
      <main className={`${pageX} pb-24 pt-4`}>
        <SectionTitle kicker="Contact">Say Hello</SectionTitle>
        <div className="grid gap-16 lg:grid-cols-2">
          <HelloCopy />
          <HelloForm />
        </div>
      </main>
    </Shell>
  );
}
