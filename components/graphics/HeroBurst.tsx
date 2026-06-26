"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Node = {
  tx: number;
  ty: number;
  x: number;
  y: number;
  r: number;
  depth: number; // 0 far … 1 near
  phase: number;
  delay: number;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const N = 30;
const INTRO = 1700;

/**
 * Hero "1 → N" living network — monochrome (white/gray on black).
 * One source bursts into N nodes (staggered intro), a proximity mesh links them,
 * pulses travel the rays, everything drifts and parallaxes to the pointer.
 * Renders a single settled frame under reduced-motion.
 */
export default function HeroBurst({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const elMaybe = canvasRef.current;
    const gMaybe = elMaybe?.getContext("2d");
    if (!elMaybe || !gMaybe) return;
    const el = elMaybe;
    const g = gMaybe;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    let source = { x: 0, y: 0, r: 7 };
    let nodes: Node[] = [];
    let mesh: [number, number][] = [];
    let rays: number[] = []; // node indices that get a pulse
    let start = performance.now();

    function layout() {
      const rect = el.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      el.width = Math.floor(w * dpr);
      el.height = Math.floor(h * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sx = w * 0.32;
      const sy = h * 0.5;
      source = { x: sx, y: sy, r: 7 };
      const reach = Math.min(Math.max(w, h), 1400);

      nodes = [];
      for (let i = 0; i < N; i++) {
        // fan to the right, with organic scatter
        const a = (-62 + (i * 124) / (N - 1)) * (Math.PI / 180) + (Math.random() - 0.5) * 0.18;
        const rad = reach * (0.28 + Math.random() * 0.6);
        const depth = 0.35 + Math.random() * 0.65;
        nodes.push({
          tx: sx + Math.cos(a) * rad,
          ty: sy + Math.sin(a) * rad * 0.95,
          x: sx,
          y: sy,
          r: 1.6 + depth * 2.6,
          depth,
          phase: Math.random() * Math.PI * 2,
          delay: (i / N) * 0.55,
        });
      }

      // proximity mesh: connect each node to its 2 nearest neighbours
      mesh = [];
      const seen = new Set<string>();
      for (let i = 0; i < N; i++) {
        const d = nodes
          .map((n, j) => ({ j, dist: Math.hypot(n.tx - nodes[i].tx, n.ty - nodes[i].ty) }))
          .filter((o) => o.j !== i)
          .sort((p, q) => p.dist - q.dist)
          .slice(0, 2);
        for (const { j } of d) {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!seen.has(key)) {
            seen.add(key);
            mesh.push([i, j]);
          }
        }
      }
      rays = nodes.map((_, i) => i).filter((i) => i % 3 === 0);
    }

    function draw(now: number) {
      const p = reduce ? 1 : Math.min(1, (now - start) / INTRO);
      g.clearRect(0, 0, w, h);

      // pointer easing + parallax base
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;
      const px = pointer.x - 0.5;
      const py = pointer.y - 0.5;

      // update node positions (intro lerp + float + parallax)
      const prog: number[] = [];
      for (let i = 0; i < N; i++) {
        const n = nodes[i];
        const np = reduce ? 1 : easeOut(Math.min(1, Math.max(0, p * 1.35 - n.delay)));
        prog[i] = np;
        const floatX = reduce ? 0 : Math.sin(now * 0.0006 + n.phase) * 4 * n.depth;
        const floatY = reduce ? 0 : Math.cos(now * 0.0007 + n.phase) * 4 * n.depth;
        const par = 26 * n.depth;
        n.x = source.x + (n.tx - source.x) * np + floatX + px * par;
        n.y = source.y + (n.ty - source.y) * np + floatY + py * par;
      }
      const sx = source.x + px * 8;
      const sy = source.y + py * 8;

      // mesh edges (brighter when close)
      const maxD = Math.min(w, h) * 0.34;
      for (const [i, j] of mesh) {
        const a = nodes[i];
        const b = nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist > maxD) continue;
        const o = (1 - dist / maxD) * 0.5 * Math.min(prog[i], prog[j]);
        g.strokeStyle = `rgba(255,255,255,${o})`;
        g.lineWidth = 1;
        g.beginPath();
        g.moveTo(a.x, a.y);
        g.lineTo(b.x, b.y);
        g.stroke();
      }

      // rays from source (faint)
      for (let i = 0; i < N; i++) {
        const n = nodes[i];
        g.strokeStyle = `rgba(255,255,255,${0.07 * prog[i]})`;
        g.lineWidth = 1;
        g.beginPath();
        g.moveTo(sx, sy);
        g.lineTo(n.x, n.y);
        g.stroke();
      }

      // pulses travelling along ray to node
      if (!reduce) {
        const period = 2600;
        for (const i of rays) {
          const n = nodes[i];
          const t = (((now + i * 240) % period) / period);
          if (prog[i] < 1) continue;
          const x = sx + (n.x - sx) * t;
          const y = sy + (n.y - sy) * t;
          g.fillStyle = `rgba(255,255,255,${0.85 * (1 - t)})`;
          g.beginPath();
          g.arc(x, y, 1.8, 0, Math.PI * 2);
          g.fill();
        }
      }

      // nodes
      for (let i = 0; i < N; i++) {
        const n = nodes[i];
        g.fillStyle = `rgba(255,255,255,${(0.4 + n.depth * 0.55) * prog[i]})`;
        g.beginPath();
        g.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        g.fill();
      }

      // source: glow + core + expanding ring
      const grad = g.createRadialGradient(sx, sy, 0, sx, sy, 60);
      grad.addColorStop(0, "rgba(255,255,255,0.28)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = grad;
      g.beginPath();
      g.arc(sx, sy, 60, 0, Math.PI * 2);
      g.fill();

      g.fillStyle = "#ffffff";
      g.beginPath();
      g.arc(sx, sy, source.r, 0, Math.PI * 2);
      g.fill();

      if (!reduce) {
        const ringT = (now % 2800) / 2800;
        g.strokeStyle = `rgba(255,255,255,${0.5 * (1 - ringT)})`;
        g.lineWidth = 1.5;
        g.beginPath();
        g.arc(sx, sy, source.r + 6 + ringT * 46, 0, Math.PI * 2);
        g.stroke();
      } else {
        g.strokeStyle = "rgba(255,255,255,0.4)";
        g.lineWidth = 1.5;
        g.beginPath();
        g.arc(sx, sy, source.r + 8, 0, Math.PI * 2);
        g.stroke();
      }
    }

    layout();
    start = performance.now();

    let raf = 0;
    let running = true;
    const frame = (now: number) => {
      draw(now);
      if (running && !reduce) raf = requestAnimationFrame(frame);
    };

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      layout();
      if (reduce) draw(performance.now());
    };
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      pointer.tx = (e.clientX - rect.left) / rect.width;
      pointer.ty = (e.clientY - rect.top) / rect.height;
    };
    const onVis = () => {
      running = !document.hidden;
      if (running && !reduce) {
        start = performance.now() - INTRO; // skip intro on return
        raf = requestAnimationFrame(frame);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("visibilitychange", onVis);

    if (reduce) draw(performance.now());
    else raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduce]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
