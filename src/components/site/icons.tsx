export function ArrowDownMini({ className = "h-5 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 20" className={className} fill="none" aria-hidden>
      <path d="M8 1.5v14.5M2.5 10.5 8 16.5l5.5-6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function ArrowSee({ className = "size-2.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" className={className} fill="none" aria-hidden>
      <path d="M1.5 8.5 8.5 1.5M3.2 1.5H8.5V6.8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ChevronSelect({ className = "size-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 8" className={className} fill="none" aria-hidden>
      <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
