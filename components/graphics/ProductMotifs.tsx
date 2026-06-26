"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProductMotif } from "@/lib/site";

const LINE = "rgba(255,255,255,0.5)";
const DIM = "rgba(255,255,255,0.16)";
const loop = (duration: number, extra: object = {}) => ({
  repeat: Infinity,
  duration,
  ease: "easeInOut" as const,
  ...extra,
});

/* ---------- 1pay2link: route a charge to a healthy gateway ---------- */
function PayMotif({ reduce }: { reduce: boolean }) {
  const gw = [70, 130, 190];
  return (
    <svg viewBox="0 0 360 260" className="w-full">
      {gw.map((y, i) => (
        <line
          key={i}
          x1="56"
          y1="130"
          x2="300"
          y2={y}
          stroke={i === 1 ? LINE : DIM}
          strokeWidth="1.4"
          className={i === 1 && !reduce ? "flow-dash" : undefined}
        />
      ))}
      <circle cx="56" cy="130" r="9" fill="#fff" />
      <text x="56" y="160" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontFamily="monospace" fontSize="10">charge</text>
      {gw.map((y, i) => (
        <g key={i}>
          <circle cx="300" cy={y} r={i === 1 ? 7 : 5} fill={i === 1 ? "#fff" : "rgba(255,255,255,0.35)"} />
          <text x="316" y={y + 3} fill="rgba(255,255,255,0.45)" fontFamily="monospace" fontSize="10">{`G${i + 1}`}</text>
        </g>
      ))}
      {!reduce && (
        <motion.circle
          r="3.5"
          fill="#fff"
          initial={{ cx: 56, cy: 130 }}
          animate={{ cx: [56, 300], cy: [130, 130] }}
          transition={loop(1.8, { times: [0, 1] })}
        />
      )}
    </svg>
  );
}

/* ---------- 1ncall: messages through automation ---------- */
function MsgMotif({ reduce }: { reduce: boolean }) {
  const bubbles = [0, 1, 2];
  return (
    <svg viewBox="0 0 360 260" className="w-full">
      <line x1="90" y1="130" x2="270" y2="130" stroke={DIM} strokeWidth="1.4" className={reduce ? undefined : "flow-dash"} />
      {/* automation core */}
      <circle cx="180" cy="130" r="22" fill="none" stroke={LINE} strokeWidth="1.4" />
      <text x="180" y="134" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="11">AI</text>
      {/* inbound bubbles */}
      {bubbles.map((i) => (
        <motion.g
          key={`in${i}`}
          initial={reduce ? { opacity: 0.5 } : { opacity: 0, x: -16 }}
          animate={reduce ? { opacity: 0.5 } : { opacity: [0, 1, 1, 0], x: [-16, 0, 0, 8] }}
          transition={reduce ? undefined : loop(3, { delay: i * 0.6 })}
        >
          <rect x="46" y={70 + i * 40} width="46" height="20" rx="6" fill="rgba(255,255,255,0.14)" stroke={DIM} />
        </motion.g>
      ))}
      {/* outbound */}
      {bubbles.map((i) => (
        <motion.rect
          key={`out${i}`}
          x="268"
          y={70 + i * 40}
          width="46"
          height="20"
          rx="6"
          fill="rgba(255,255,255,0.22)"
          initial={reduce ? { opacity: 0.6 } : { opacity: 0 }}
          animate={reduce ? { opacity: 0.6 } : { opacity: [0, 0, 1, 0] }}
          transition={reduce ? undefined : loop(3, { delay: i * 0.6 })}
        />
      ))}
    </svg>
  );
}

/* ---------- 1nflow: lending pipeline ---------- */
function FlowMotif({ reduce }: { reduce: boolean }) {
  const stages = ["Apply", "Review", "Decide", "Fund"];
  return (
    <svg viewBox="0 0 360 260" className="w-full">
      <line x1="40" y1="130" x2="320" y2="130" stroke={DIM} strokeWidth="1.4" className={reduce ? undefined : "flow-dash"} />
      {stages.map((s, i) => {
        const x = 40 + i * (280 / 3);
        return (
          <g key={s}>
            <rect x={x - 30} y="108" width="60" height="44" rx="6" fill="#101013" stroke={DIM} />
            <text x={x} y="134" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontSize="10">{s}</text>
          </g>
        );
      })}
      {!reduce && (
        <motion.circle
          r="5"
          cy="130"
          fill="#fff"
          initial={{ cx: 40 }}
          animate={{ cx: [40, 320] }}
          transition={loop(3.2, { ease: "linear" })}
        />
      )}
    </svg>
  );
}

/* ---------- termssh: terminal + vault ---------- */
function TermMotif({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 360 260" className="w-full">
      <rect x="50" y="50" width="260" height="160" rx="8" fill="#0d0d10" stroke={DIM} />
      <line x1="50" y1="78" x2="310" y2="78" stroke={DIM} />
      {[66, 76, 86].map((cx) => (
        <circle key={cx} cx={cx} cy="64" r="3" fill="rgba(255,255,255,0.3)" />
      ))}
      {/* prompt lines */}
      <text x="68" y="110" fill="rgba(255,255,255,0.65)" fontFamily="monospace" fontSize="11">$ ssh prod-01</text>
      <rect x="68" y="124" width="150" height="6" rx="3" fill="rgba(255,255,255,0.14)" />
      <rect x="68" y="140" width="110" height="6" rx="3" fill="rgba(255,255,255,0.14)" />
      <text x="68" y="170" fill="rgba(255,255,255,0.65)" fontFamily="monospace" fontSize="11">$</text>
      {reduce ? (
        <rect x="80" y="161" width="8" height="12" fill="#fff" />
      ) : (
        <motion.rect x="80" y="161" width="8" height="12" fill="#fff" animate={{ opacity: [1, 1, 0, 0] }} transition={loop(1.1)} />
      )}
      {/* lock */}
      <g transform="translate(280,176)">
        <rect x="-9" y="-4" width="18" height="14" rx="2" fill="none" stroke={LINE} strokeWidth="1.4" />
        <path d="M-5 -4 V-9 a5 5 0 0 1 10 0 V-4" fill="none" stroke={LINE} strokeWidth="1.4" />
      </g>
    </svg>
  );
}

export default function ProductMotifGraphic({ motif }: { motif: ProductMotif }) {
  const reduce = useReducedMotion() ?? false;
  if (motif === "pay") return <PayMotif reduce={reduce} />;
  if (motif === "msg") return <MsgMotif reduce={reduce} />;
  if (motif === "flow") return <FlowMotif reduce={reduce} />;
  return <TermMotif reduce={reduce} />;
}
