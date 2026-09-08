export function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mb-10">
      <h2 className="font-sans text-[2rem] leading-none text-ink-strong text-balance md:text-section">
        {children}
      </h2>
      <div className="mt-7 h-px w-full bg-line" />
    </div>
  );
}
