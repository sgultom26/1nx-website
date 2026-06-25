"use client";

import Link from "next/link";
import { LogoMark, Wordmark } from "./Logo";
import { useI18n } from "@/lib/i18n";

function FooterLink({ href, label, localize }: { href: string; label: string; localize: (h: string) => string }) {
  const external = href.startsWith("http") || href.startsWith("#");
  const className = "text-sm text-muted transition-colors hover:text-fg";
  if (external) {
    return (
      <a href={href} className={className} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
        {label}
      </a>
    );
  }
  return (
    <Link href={localize(href)} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  const { t, localize } = useI18n();
  return (
    <footer className="relative border-t border-[var(--hair)] bg-[var(--color-bg-soft)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark size={30} />
              <Wordmark className="text-[1.2rem]" />
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              {t.footer.tagline}
              <span className="text-fg">{t.footer.taglineStrong}</span>
            </p>
          </div>

          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <div className="mono-label mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href} label={l.label} localize={localize} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--hair)] pt-6 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <p className="md:text-right">{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
