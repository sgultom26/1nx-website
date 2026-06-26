"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { FAMILY } from "@/lib/site";

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const INTRO = 1500;

/** The four 1nx products orbiting the core — full-screen canvas, monochrome. */
export default function ProductConstellation({ className }: { className?: string }) {
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
    let cx = 0;
    let cy = 0;
    let radius = 0;
    let start = performance.now();
    const names = FAMILY.map((f) => f.name);

    function layout() {
      const rect = el.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      el.width = Math.floor(w * dpr);
      el.height = Math.floor(h * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w * 0.62;
      cy = h * 0.5;
      radius = Math.min(w, h) * 0.3;
    }

    function draw(now: number) {
      const p = reduce ? 1 : easeOut(Math.min(1, (now - start) / INTRO));
      g.clearRect(0, 0, w, h);
      const px = (pointer.x += (pointer.tx - pointer.x) * 0.06) - 0.5;
      const py = (pointer.y += (pointer.ty - pointer.y) * 0.06) - 0.5;
      const ccx = cx + px * 16;
      const ccy = cy + py * 16;
      const rot = reduce ? 0 : now * 0.00008;

      const pts = names.map((_, i) => {
        const a = rot + (i * Math.PI * 2) / names.length - Math.PI / 2;
        const r = radius * p;
        return { x: ccx + Math.cos(a) * r * 1.15, y: ccy + Math.sin(a) * r };
      });

      // edges + pulses
      pts.forEach((pt, i) => {
        g.strokeStyle = "rgba(255,255,255,0.16)";
        g.lineWidth = 1;
        g.beginPath();
        g.moveTo(ccx, ccy);
        g.lineTo(pt.x, pt.y);
        g.stroke();
        if (!reduce) {
          const t = ((now * 0.0004 + i * 0.25) % 1);
          g.fillStyle = `rgba(255,255,255,${0.8 * (1 - t)})`;
          g.beginPath();
          g.arc(ccx + (pt.x - ccx) * t, ccy + (pt.y - ccy) * t, 2, 0, Math.PI * 2);
          g.fill();
        }
      });

      // product nodes + labels
      g.font = '600 13px "Space Grotesk", sans-serif';
      g.textAlign = "center";
      pts.forEach((pt, i) => {
        g.fillStyle = "#ffffff";
        g.globalAlpha = p;
        g.beginPath();
        g.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = "rgba(255,255,255,0.82)";
        g.fillText(names[i], pt.x, pt.y - 14);
        g.globalAlpha = 1;
      });

      // core glow + node
      const grad = g.createRadialGradient(ccx, ccy, 0, ccx, ccy, 70);
      grad.addColorStop(0, "rgba(255,255,255,0.22)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = grad;
      g.beginPath();
      g.arc(ccx, ccy, 70, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = "#ffffff";
      g.beginPath();
      g.arc(ccx, ccy, 9, 0, Math.PI * 2);
      g.fill();
      if (!reduce) {
        const ringT = (now % 3000) / 3000;
        g.strokeStyle = `rgba(255,255,255,${0.5 * (1 - ringT)})`;
        g.lineWidth = 1.5;
        g.beginPath();
        g.arc(ccx, ccy, 9 + ringT * 60, 0, Math.PI * 2);
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
        start = performance.now() - INTRO;
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
