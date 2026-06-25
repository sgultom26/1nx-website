"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Node = { bx: number; by: number; x: number; y: number; r: number; phase: number };

/**
 * The hero "1 → N" living network — a Canvas 2D particle system: one source
 * node feeds many target nodes, with pulses travelling the edges, gentle float
 * and pointer parallax. Renders a single static frame under reduced-motion.
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
    const pointer = { x: 0.5, y: 0.5 };

    let source: Node = { bx: 0, by: 0, x: 0, y: 0, r: 7, phase: 0 };
    let nodes: Node[] = [];
    let edges: { a: Node; b: Node }[] = [];
    let pulses: { ai: number; t: number; speed: number }[] = [];
    const N = 12;

    function layout() {
      const rect = el.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      el.width = Math.floor(w * dpr);
      el.height = Math.floor(h * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sx = w * 0.3;
      const sy = h * 0.5;
      source = { bx: sx, by: sy, x: sx, y: sy, r: 7, phase: 0 };

      nodes = [];
      for (let i = 0; i < N; i++) {
        const a = (-58 + (i * 116) / (N - 1)) * (Math.PI / 180);
        const radius = Math.min(w, h) * (0.55 + ((i * 7) % 5) / 10);
        const x = sx + Math.cos(a) * radius;
        const y = sy + Math.sin(a) * radius * 0.92;
        nodes.push({ bx: x, by: y, x, y, r: 2.5 + (i % 3), phase: Math.random() * Math.PI * 2 });
      }
      edges = nodes.map((n) => ({ a: source, b: n }));
      for (let i = 0; i < N - 1; i += 2) edges.push({ a: nodes[i], b: nodes[i + 1] });
      pulses = nodes.map((_, i) => ({ ai: i, t: i / N, speed: 0.003 + Math.random() * 0.004 }));
    }

    function draw(time: number) {
      g.clearRect(0, 0, w, h);
      const px = pointer.x - 0.5;
      const py = pointer.y - 0.5;

      for (const n of nodes) {
        n.x = n.bx + Math.sin(time * 0.0006 + n.phase) * 5 + px * 16;
        n.y = n.by + Math.cos(time * 0.0007 + n.phase) * 5 + py * 16;
      }
      source.x = source.bx + px * 6;
      source.y = source.by + py * 6;

      for (const e of edges) {
        g.strokeStyle = "rgba(34,211,238,0.15)";
        g.lineWidth = 1;
        g.beginPath();
        g.moveTo(e.a.x, e.a.y);
        g.lineTo(e.b.x, e.b.y);
        g.stroke();
      }

      for (const p of pulses) {
        if (!reduce) {
          p.t += p.speed;
          if (p.t > 1) p.t = 0;
        }
        const n = nodes[p.ai];
        const x = source.x + (n.x - source.x) * p.t;
        const y = source.y + (n.y - source.y) * p.t;
        g.fillStyle = "rgba(103,232,249,0.9)";
        g.beginPath();
        g.arc(x, y, 2, 0, Math.PI * 2);
        g.fill();
      }

      for (const n of nodes) {
        g.fillStyle = "#22D3EE";
        g.beginPath();
        g.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        g.fill();
      }

      const grad = g.createRadialGradient(source.x, source.y, 0, source.x, source.y, 46);
      grad.addColorStop(0, "rgba(14,116,144,0.55)");
      grad.addColorStop(1, "rgba(14,116,144,0)");
      g.fillStyle = grad;
      g.beginPath();
      g.arc(source.x, source.y, 46, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = "#0E7490";
      g.beginPath();
      g.arc(source.x, source.y, source.r, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = "rgba(34,211,238,0.6)";
      g.lineWidth = 1.5;
      g.beginPath();
      g.arc(source.x, source.y, source.r + 7, 0, Math.PI * 2);
      g.stroke();
    }

    layout();

    let raf = 0;
    let running = true;
    const frame = (time: number) => {
      draw(time);
      if (running && !reduce) raf = requestAnimationFrame(frame);
    };

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      layout();
      if (reduce) draw(0);
    };
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left) / rect.width;
      pointer.y = (e.clientY - rect.top) / rect.height;
    };
    const onVis = () => {
      running = !document.hidden;
      if (running && !reduce) raf = requestAnimationFrame(frame);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("visibilitychange", onVis);

    if (reduce) draw(0);
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
