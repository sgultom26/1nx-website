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

const PILLAR_ICONS = [Brain, Layers, Workflow, Building2];
const CAP_ICONS = [Brain, Database, Cloud, Plug, ShieldCheck, PenTool];

/** Static fan/burst placeholder — replaced by the WebGL HeroBurst in Wave 2/3. */
function HeroBurstStatic() {
  const targets = Array.from({ length: 9 });
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
      <g stroke="#22D3EE" strokeWidth="1.2" opacity="0.5">
        {targets.map((_, i) => {
          const a = (-60 + (i * 120) / 8) * (Math.PI / 180);
          const x = 120 + Math.cos(a) * 230;
          const y = 200 + Math.sin(a) * 230;
          return <line key={i} x1="120" y1="200" x2={x} y2={y} />;
        })}
      </g>
      {targets.map((_, i) => {
        const a = (-60 + (i * 120) / 8) * (Math.PI / 180);
        const x = 120 + Math.cos(a) * 230;
        const y = 200 + Math.sin(a) * 230;
        return <circle key={i} cx={x} cy={y} r={4 + (i % 3)} fill="#22D3EE" opacity={0.85} />;
      })}
      <circle cx="120" cy="200" r="11" fill="#0E7490" />
      <circle cx="120" cy="200" r="20" fill="none" stroke="#22D3EE" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

export default function HomeContent() {
  const { t, localize } = useI18n();

  return (
    <>
      {/* ===== HERO (cinematic / black) ===== */}
      <section className="section-dark relative overflow-hidden">
        <Container className="relative grid min-h-[88vh] items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
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
          <Reveal delay={0.15} className="relative hidden h-[420px] lg:block">
            <HeroBurstStatic />
          </Reveal>
        </Container>
      </section>

      {/* ===== THESIS (1 → N) ===== */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.thesis.eyebrow}
            title={<>{t.thesis.titleA}<span className="gradient-text">{t.thesis.titleAccent}</span></>}
            subtitle={t.thesis.subtitle}
          />
          <Reveal>
            <div className="card grid items-center gap-6 p-8 sm:grid-cols-[auto_1fr_auto] sm:p-12">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-2xl font-semibold text-accent">1</div>
                <div className="mono-label mt-3">{t.thesis.ideaLabel}</div>
              </div>
              <svg viewBox="0 0 300 120" className="h-24 w-full" aria-hidden>
                <g stroke="#0E7490" strokeWidth="1.6" opacity="0.7">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={i} x1="6" y1="60" x2="294" y2={12 + i * 19} />
                  ))}
                </g>
                <circle cx="6" cy="60" r="6" fill="#0E7490" />
                {Array.from({ length: 6 }).map((_, i) => (
                  <circle key={i} cx="294" cy={12 + i * 19} r="4.5" fill="#22D3EE" />
                ))}
              </svg>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">N</div>
                <div className="mono-label mt-3">{t.thesis.executionsLabel}</div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

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
          <Stagger className="grid gap-3 md:grid-cols-5">
            {t.method.steps.map((s) => (
              <StaggerItem key={s.k}>
                <div className="card h-full p-5">
                  <div className="font-mono text-xs text-accent">{s.k}</div>
                  <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
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
          <div className="grid gap-3 sm:grid-cols-3">
            {t.impact.stats.map((s) => (
              <Reveal key={s.v}>
                <div className="card h-full p-8 text-center">
                  <div className="font-display text-5xl font-semibold text-accent">{s.k}</div>
                  <div className="mt-3 text-sm text-muted">{s.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FAMILY ===== */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.family.eyebrow}
            title={<>{t.family.titleA}<span className="gradient-text">{t.family.titleAccent}</span></>}
            subtitle={t.family.subtitle}
          />
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FAMILY.map((f) => (
              <StaggerItem key={f.name}>
                <a
                  href={f.href}
                  target={f.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="card card-hover block h-full p-6"
                >
                  <div className="font-display text-lg font-semibold text-fg">{f.name}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{f.blurb}</p>
                </a>
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
