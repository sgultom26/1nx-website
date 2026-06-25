import Link from "next/link";

/** The 1nx "fan" mark — one source node fanning into N (1 → many executions). */
export function LogoMark({ size = 30, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden
    >
      <g strokeLinecap="round" strokeWidth="2.5">
        <path d="M12 24 L35 11" stroke="#0E7490" />
        <path d="M12 24 L35 24" stroke="#0891B2" />
        <path d="M12 24 L35 37" stroke="#22D3EE" />
      </g>
      <circle cx="11" cy="24" r="3.8" fill="#0E7490" />
      <circle cx="36" cy="11" r="3" fill="#0E7490" />
      <circle cx="36" cy="24" r="3" fill="#0891B2" />
      <circle cx="36" cy="37" r="3" fill="#22D3EE" />
    </svg>
  );
}

/** Wordmark "1nx" — "1" in foreground ink, "nx" in accent. Adapts inside .section-dark. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className ?? ""}`}>
      <span className="text-fg">1</span>
      <span className="text-accent">nx</span>
    </span>
  );
}

export default function Logo({ size = 30, href = "/" }: { size?: number; href?: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2.5" aria-label="1nx home">
      <LogoMark size={size} />
      <Wordmark className="text-[1.35rem]" />
    </Link>
  );
}
