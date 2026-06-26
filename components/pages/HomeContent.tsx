"use client";

import Link from "next/link";
import {
  Brain,
  Layers,
  Workflow,
  Building2,
  Database,
  Cloud,
  Plug,
  ShieldCheck,
  PenTool,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import { useI18n } from "@/lib/i18n";
import { FAMILY } from "@/lib/site";
import HeroBurst from "@/components/graphics/HeroBurst";
import OneToNFlow from "@/components/graphics/OneToNFlow";
import ExecutionTimeline from "@/components/graphics/ExecutionTimeline";
import ImpactCounters from "@/components/graphics/ImpactCounters";
import ProductCard from "@/components/site/ProductCard";

const PILLAR_ICONS = [Brain, Layers, Workflow, Building2];
const CAP_ICONS = [Brain, Database, Cloud, Plug, ShieldCheck, PenTool];

export default function HomeContent() {
  const { t, localize } = useI18n();

  return (
    <>
      {/* ===== HERO (full-screen, edge-to-edge, no nav) ===== */}
      <section className="section-dark relative min-h-screen overflow-hidden">
        <HeroBurst className="pointer-events-none absolute inset-0 h-full w-full" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#050506 0%, rgba(5,5,6,0.86) 40%, rgba(5,5,6,0.25) 72%, rgba(5,5,6,0.6) 100%)",
          }}
        />
        <Container className="relative z-10 flex min-h-screen items-center py-20">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow noRule>{t.hero.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[1.0]">
                {t.hero.slogan}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {t.hero.subcopy}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={localize("/contact")} className="btn btn-primary">
                  {t.hero.ctaPrimary} <ArrowUpRight size={16} strokeWidth={2.2} />
                </Link>
                <Link href={localize("/solutions")} className="btn btn-ghost">
                  {t.hero.ctaSecondary} <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mono-label mt-12">{t.hero.scrollCue}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== THESIS (1 → N, pinned scroll-scrub) ===== */}
      <OneToNFlow />

      {/* ===== PILLARS ===== */}
      <section id="solutions" className="scroll-mt-20 bg-[var(--color-bg-soft)] py-20 sm:py-28">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.pillars.eyebrow}
            title={<>{t.pillars.titleA}<span className="gradient-text">{t.pillars.titleAccent}</span></>}
          />
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {t.pillars.items.map((p, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <StaggerItem key={p.title}>
                  <div className="card card-hover h-full p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[4px] border border-[var(--hair)] bg-[var(--color-accent-soft)] text-accent">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-fg">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
                    <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-[13px] text-muted">
                          <span className="h-1 w-1 rounded-full bg-accent" /> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* ===== METHOD (cinematic / black) ===== */}
      <section className="section-dark py-20 sm:py-28">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.method.eyebrow}
            title={<>{t.method.titleA}<span className="gradient-text">{t.method.titleAccent}</span></>}
            subtitle={t.method.subtitle}
          />
          <ExecutionTimeline />
        </Container>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            className="mb-12"
            eyebrow={t.capabilities.eyebrow}
            title={<>{t.capabilities.titleA}<span className="gradient-text">{t.capabilities.titleAccent}</span></>}
            subtitle={t.capabilities.subtitle}
          />
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.capabilities.items.map((c, i) => {
              const Icon = CAP_ICONS[i];
              return (
                <StaggerItem key={c.t}>
                  <div className="card card-hover h-full p-6">
                    <Icon size={20} className="text-accent" />
                    <h4 className="mt-3 text-[15px] font-semibold text-fg">{c.t}</h4>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{c.d}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section id="industries" className="scroll-mt-20 bg-[var(--color-bg-soft)] py-20 sm:py-28">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.industries.eyebrow}
            title={<>{t.industries.titleA}<span className="gradient-text">{t.industries.titleAccent}</span></>}
          />
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.industries.items.map((it) => (
              <StaggerItem key={it.name}>
                <div className="card card-hover h-full p-6">
                  <h4 className="text-[15px] font-semibold text-fg">{it.name}</h4>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{it.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ===== IMPACT (cinematic / black) ===== */}
      <section className="section-dark py-20 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.impact.eyebrow}
            title={t.impact.title}
            subtitle={t.impact.note}
          />
          <ImpactCounters />
        </Container>
      </section>

      {/* ===== PRODUCTS & SERVICES ===== */}
      <section id="products" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.family.eyebrow}
            title={<>{t.family.titleA}<span className="gradient-text">{t.family.titleAccent}</span></>}
            subtitle={t.family.subtitle}
          />
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FAMILY.map((f, i) => (
              <StaggerItem key={f.name}>
                <ProductCard name={f.name} blurb={t.family.items[i].blurb} href={f.href} tag={t.family.tag} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ===== CTA closer (cinematic / black) ===== */}
      <section className="section-dark py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-[clamp(2rem,4.4vw,3.2rem)]">
                {t.cta.titleA}<span className="gradient-text">{t.cta.titleAccent}</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">{t.cta.subcopy}</p>
              <div className="mt-8 flex justify-center">
                <Link href={localize("/contact")} className="btn btn-primary">
                  {t.cta.button} <ArrowUpRight size={16} strokeWidth={2.2} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
