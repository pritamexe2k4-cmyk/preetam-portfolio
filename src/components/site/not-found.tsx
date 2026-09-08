import { Link } from "@tanstack/react-router";
import { pageX } from "@/components/site/layout";
import { SectionTitle } from "@/components/site/section-title";
import { Shell } from "@/components/site/shell";

export function NotFound() {
  return (
    <Shell>
      <main className={`${pageX} pb-24 pt-4`}>
        <SectionTitle>Not found</SectionTitle>
        <p className="max-w-lg font-sans text-lead leading-snug text-ink text-pretty">
          That page isn’t in this site. Head back to work, or say hello if you were looking for me.
        </p>
        <div className="mt-10 flex flex-wrap gap-8 font-sans text-lg">
          <Link to="/" className="text-link">
            Work
          </Link>
          <Link to="/contact" className="text-link">
            Say Hello
          </Link>
        </div>
      </main>
    </Shell>
  );
}
