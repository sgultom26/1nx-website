"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

/** Counts the integer found in a label (e.g. "60%+") up from 0; static otherwise. */
function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const target = m ? parseInt(m[2], 10) : 0;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!m) return;
    if (reduce) {
      setN(target);
      return;
    }
    if (!inView) return;
    let raf = 0;
    const t0 = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      setN(Math.round(target * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target, m]);

  return <span ref={ref}>{m ? `${m[1]}${n}${m[3]}` : value}</span>;
}

export default function ImpactCounters() {
  const { t } = useI18n();
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {t.impact.stats.map((s) => (
        <div key={s.v} className="card h-full p-8 text-center">
          <div className="font-display text-5xl font-semibold text-accent">
            <CountUp value={s.k} />
          </div>
          <div className="mt-3 text-sm text-muted">{s.v}</div>
        </div>
      ))}
    </div>
  );
}
