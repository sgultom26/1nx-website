"use client";

import Link from "next/link";
import { Brain, Layers, Workflow, Building2, ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { useI18n } from "@/lib/i18n";

const ICONS = [Brain, Layers, Workflow, Building2];
const IDS = ["ai", "transformation", "automation", "enterprise"];

export default function SolutionsContent() {
  const { t, localize } = useI18n();
  const s = t.solutions;

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--hair)] pt-16 pb-14 sm:pt-24">
        <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow noRule>{s.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-[clamp(2.2rem,5.5vw,3.6rem)] font-semibold">
              {s.hero.titleA}
              <span className="gradient-text">{s.hero.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted sm:text-lg">
              {s.hero.subcopy}
            </p>
          </Reveal>
        </Container>
      </section>

      {t.pillars.items.map((p, i) => {
        const Icon = ICONS[i];
        return (
          <section
            key={p.title}
            id={IDS[i]}
            className={`scroll-mt-24 py-16 sm:py-20 ${i % 2 === 1 ? "bg-[var(--color-bg-soft)]" : ""}`}
          >
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-[4px] border border-[var(--hair)] bg-[var(--color-accent-soft)] text-accent">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div className="mono-label mt-5">{String(i + 1).padStart(2, "0")}</div>
                  <h2 className="mt-2 text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold text-fg">{p.title}</h2>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">{p.blurb}</p>
                  <Link href={localize("/contact")} className="btn btn-ghost mt-7">
                    {t.common.startProject} <ArrowUpRight size={15} strokeWidth={2.2} />
                  </Link>
                </Reveal>
                <Reveal delay={0.1} className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="card p-7 sm:p-8">
                    <div className="mono-label">{s.outcomesLabel}</div>
                    <ul className="mt-5 space-y-3">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm text-muted">
                          <Check size={16} strokeWidth={2.5} className="mt-0.5 flex-none text-accent" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
