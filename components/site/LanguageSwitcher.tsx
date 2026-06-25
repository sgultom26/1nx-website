"use client";

import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import type { Locale } from "@/lib/dictionary";

const OPTIONS: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" },
];

function counterpart(pathname: string, target: Locale): string {
  const isId = pathname === "/id" || pathname.startsWith("/id/");
  const base = isId ? (pathname === "/id" ? "/" : pathname.slice(3)) : pathname;
  if (target === "id") return base === "/" ? "/id" : `/id${base}`;
  return base;
}

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale } = useI18n();
  const pathname = usePathname() || "/";
  const router = useRouter();

  const go = (target: Locale) => {
    if (target === locale) return;
    document.cookie = `NEXT_LOCALE=${target};path=/;max-age=31536000;samesite=lax`;
    router.push(counterpart(pathname, target));
  };

  return (
    <div
      className={`inline-flex items-center rounded-[4px] border border-[var(--hair-strong)] p-0.5 ${className ?? ""}`}
      role="group"
      aria-label="Language"
    >
      {OPTIONS.map((o) => {
        const active = locale === o.code;
        return (
          <button
            key={o.code}
            type="button"
            onClick={() => go(o.code)}
            aria-pressed={active}
            className={`rounded-[3px] px-2 py-1 font-mono text-[11px] tracking-wide transition-colors ${
              active ? "bg-accent text-white" : "text-muted hover:text-fg"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
