import { ArrowUpRight } from "lucide-react";

/** A product/service card for the 1nx family — tag, name, blurb, domain footer. */
export default function ProductCard({
  name,
  blurb,
  href,
  tag,
}: {
  name: string;
  blurb: string;
  href: string;
  tag: string;
}) {
  const external = href.startsWith("http");
  const domain = href.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel="noopener"
      className="card card-hover group relative flex h-full flex-col p-6"
    >
      <div className="flex items-center justify-between">
        <span className="mono-label">{tag}</span>
        <ArrowUpRight
          size={16}
          className="text-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
        />
      </div>
      <div className="mt-7 font-display text-xl font-semibold text-fg">{name}</div>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{blurb}</p>
      <div className="mt-6 border-t border-[var(--hair)] pt-3 font-mono text-[11px] tracking-wide text-faint">
        {domain}
      </div>
    </a>
  );
}
