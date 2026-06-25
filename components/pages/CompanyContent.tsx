"use client";

import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeader from "@/components/ui/SectionHeader";
import { useI18n } from "@/lib/i18n";
import { FAMILY } from "@/lib/site";

export default function CompanyContent() {
  const { t } = useI18n();
  const co = t.company;

  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden border-b border-[var(--hair)] pt-16 pb-14 sm:pt-24">
        <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow noRule>{co.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-[clamp(2.2rem,5.5vw,3.6rem)] font-semibold">
              {co.hero.titleA}
              <span className="gradient-text">{co.hero.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted sm:text-lg">
              {co.hero.subcopy}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* philosophy */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeader
              eyebrow={co.philosophy.eyebrow}
              title={<>{co.philosophy.titleA}<span className="gradient-text">{co.philosophy.titleAccent}</span></>}
              subtitle={co.philosophy.subtitle}
            />
            <Reveal delay={0.1}>
              <div className="card p-8">
                <svg viewBox="0 0 320 200" className="w-full" aria-hidden>
                  <g stroke="#0E7490" strokeWidth="1.6" opacity="0.7">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <line key={i} x1="20" y1="100" x2="300" y2={20 + i * 27} />
                    ))}
                  </g>
                  <circle cx="20" cy="100" r="9" fill="#0E7490" />
                  {Array.from({ length: 7 }).map((_, i) => (
                    <circle key={i} cx="300" cy={20 + i * 27} r="5" fill="#0891B2" />
                  ))}
                </svg>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* values */}
      <section className="bg-[var(--color-bg-soft)] py-16 sm:py-24">
        <Container>
          <SectionHeader align="center" className="mb-12" eyebrow={co.values.eyebrow} title={co.values.title} />
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {co.values.items.map((v) => (
              <StaggerItem key={v.t}>
                <div className="card card-hover h-full p-6">
                  <h3 className="text-[15px] font-semibold text-fg">{v.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* family */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.family.eyebrow}
            title={<>{t.family.titleA}<span className="gradient-text">{t.family.titleAccent}</span></>}
            subtitle={t.family.subtitle}
          />
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FAMILY.map((fam) => (
              <StaggerItem key={fam.name}>
                <a
                  href={fam.href}
                  target={fam.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="card card-hover block h-full p-6"
                >
                  <div className="font-display text-lg font-semibold text-fg">{fam.name}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{fam.blurb}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
