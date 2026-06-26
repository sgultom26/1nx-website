"use client";

import { ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import ProductConstellation from "@/components/graphics/ProductConstellation";
import ProductMotifGraphic from "@/components/graphics/ProductMotifs";
import { useI18n } from "@/lib/i18n";
import { FAMILY } from "@/lib/site";

export default function ProductsContent() {
  const { t } = useI18n();
  const pp = t.productsPage;

  return (
    <>
      {/* full-screen hero — product constellation */}
      <section className="section-dark relative min-h-[88vh] overflow-hidden">
        <ProductConstellation className="pointer-events-none absolute inset-0 h-full w-full" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#050506 0%, rgba(5,5,6,0.85) 42%, rgba(5,5,6,0.12) 78%)",
          }}
        />
        <Container className="relative z-10 flex min-h-[88vh] items-center py-20">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow noRule>{pp.hero.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance text-[clamp(2.6rem,5.5vw,4.4rem)] font-semibold leading-[1.02]">
                {pp.hero.titleA}
                <span className="gradient-text">{pp.hero.titleAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted sm:text-lg">
                {pp.hero.subcopy}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* one full-screen section per product */}
      {FAMILY.map((f, i) => {
        const d = t.family.items[i];
        return (
        <section
          key={f.name}
          id={f.name}
          className={`flex min-h-screen scroll-mt-24 items-center py-20 ${i % 2 ? "bg-[var(--color-bg-soft)]" : ""}`}
        >
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <div className="mono-label">{d.category}</div>
                <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-fg">
                  {f.name}
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-muted">{d.long}</p>
                <div className="mono-label mt-7">{pp.capabilitiesLabel}</div>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-muted">
                      <Check size={16} strokeWidth={2.5} className="mt-0.5 flex-none text-fg" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a href={f.href} target="_blank" rel="noopener" className="btn btn-primary mt-8">
                  {pp.visit} {f.name} <ArrowUpRight size={16} strokeWidth={2.2} />
                </a>
              </Reveal>
              <Reveal delay={0.1} className={i % 2 ? "lg:order-1" : ""}>
                <div className="card p-6 sm:p-8">
                  <ProductMotifGraphic motif={f.motif} />
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
