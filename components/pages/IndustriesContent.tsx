"use client";

import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { useI18n } from "@/lib/i18n";

export default function IndustriesContent() {
  const { t } = useI18n();
  const ip = t.industriesPage;

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--hair)] pt-16 pb-14 sm:pt-24">
        <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow noRule>{ip.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-[clamp(2.2rem,5.5vw,3.6rem)] font-semibold">
              {ip.hero.titleA}
              <span className="gradient-text">{ip.hero.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted sm:text-lg">
              {ip.hero.subcopy}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.industries.items.map((it) => (
              <StaggerItem key={it.name}>
                <div className="card card-hover h-full p-7">
                  <h3 className="text-lg font-semibold text-fg">{it.name}</h3>
                  <div className="mono-label mt-4">{ip.approachLabel}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{it.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
