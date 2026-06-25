"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import ScrollStage from "@/components/motion/ScrollStage";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { useI18n } from "@/lib/i18n";

const TOTAL = 8;

function Edge({ p, i }: { p: MotionValue<number>; i: number }) {
  const start = 0.18 + (i / TOTAL) * 0.45;
  const len = useTransform(p, [start, start + 0.18], [0, 1]);
  const op = useTransform(p, [start, start + 0.18], [0.15, 1]);
  const y = 40 + i * (380 / (TOTAL - 1));
  return (
    <>
      <motion.line
        x1={140}
        y1={230}
        x2={860}
        y2={y}
        stroke="#0E7490"
        strokeWidth={1.6}
        style={{ pathLength: len, opacity: op }}
      />
      <motion.circle cx={860} cy={y} r={6} fill="#0891B2" style={{ opacity: op }} />
    </>
  );
}

function Scene({ p }: { p: MotionValue<number> }) {
  const { t } = useI18n();
  const titleOp = useTransform(p, [0, 0.12], [0, 1]);
  const titleY = useTransform(p, [0, 0.12], [24, 0]);
  const subOp = useTransform(p, [0.05, 0.2], [0, 1]);
  const ideaOp = useTransform(p, [0.1, 0.25], [0, 1]);
  const execOp = useTransform(p, [0.6, 0.82], [0, 1]);

  return (
    <Container className="w-full">
      <motion.div style={{ opacity: titleOp, y: titleY }} className="mx-auto mb-10 max-w-2xl text-center">
        <Eyebrow noRule>{t.thesis.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-balance text-[clamp(1.8rem,4vw,3rem)]">
          {t.thesis.titleA}
          <span className="gradient-text">{t.thesis.titleAccent}</span>
        </h2>
        <motion.p style={{ opacity: subOp }} className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
          {t.thesis.subtitle}
        </motion.p>
      </motion.div>

      <svg viewBox="0 0 1000 460" className="mx-auto w-full max-w-4xl">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <Edge key={i} p={p} i={i} />
        ))}
        <circle cx="140" cy="230" r="12" fill="#0E7490" />
        <circle cx="140" cy="230" r="21" fill="none" stroke="#0E7490" strokeWidth="1.5" opacity="0.5" />
      </svg>

      <div className="mx-auto mt-3 flex max-w-4xl justify-between px-2 font-mono text-xs uppercase tracking-wider">
        <motion.span style={{ opacity: ideaOp }} className="text-accent">{t.thesis.ideaLabel}</motion.span>
        <motion.span style={{ opacity: execOp }} className="text-accent">{t.thesis.executionsLabel}</motion.span>
      </div>
    </Container>
  );
}

export default function OneToNFlow() {
  return <ScrollStage height="240vh">{(p) => <Scene p={p} />}</ScrollStage>;
}
