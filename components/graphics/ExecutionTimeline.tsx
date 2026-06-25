"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ExecutionTimeline() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {/* connecting line (desktop) — grows left→right on view */}
      <div className="pointer-events-none absolute left-[8%] right-[8%] top-[34px] hidden md:block">
        <motion.div
          className="h-px origin-left bg-[var(--color-accent)]"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease }}
        />
      </div>

      <motion.ol
        className="grid gap-8 md:grid-cols-5"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
      >
        {t.method.steps.map((s) => (
          <motion.li
            key={s.k}
            className="text-center md:text-left"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
          >
            <span className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[var(--hair)] bg-[var(--color-bg)] font-mono text-sm text-accent md:mx-0">
              {s.k}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{s.d}</p>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
