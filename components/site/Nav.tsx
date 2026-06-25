"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

export default function Nav() {
  const { t, localize } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.solutions, href: "/solutions" },
    { label: t.nav.industries, href: "/industries" },
    { label: t.nav.company, href: "/company" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled
            ? "border-b border-[var(--hair)] bg-[rgba(255,255,255,0.82)] backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <Logo size={30} href={localize("/")} />

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={localize(l.href)}
                className="rounded-[4px] px-3.5 py-2 text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <Link href={localize("/contact")} className="btn btn-ghost">
              {t.common.talkToUs}
            </Link>
            <Link href={localize("/contact")} className="btn btn-primary">
              {t.common.startProject} <ArrowUpRight size={16} strokeWidth={2.2} />
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[var(--hair)] text-fg"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-b border-[var(--hair)] bg-[rgba(255,255,255,0.97)] backdrop-blur-xl md:hidden">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 px-5 py-4 sm:px-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={localize(l.href)}
                onClick={() => setOpen(false)}
                className="rounded-[4px] px-3 py-2.5 text-sm text-muted hover:bg-[var(--color-accent-soft)] hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={localize("/contact")}
              onClick={() => setOpen(false)}
              className="btn btn-ghost mt-2 w-full"
            >
              {t.common.talkToUs}
            </Link>
            <Link
              href={localize("/contact")}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full"
            >
              {t.common.startProject} <ArrowUpRight size={16} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
