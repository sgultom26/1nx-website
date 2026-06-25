"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check, ArrowUpRight, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { useI18n } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-[4px] border border-[var(--hair-strong)] bg-white px-3.5 py-2.5 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none";

export default function ContactContent() {
  const { t } = useI18n();
  const c = t.contact;
  const f = c.form;

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: "", message: "" });

  const set =
    (k: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [k]: e.target.value }));

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const valid = form.name.trim() !== "" && emailOk && form.message.trim() !== "";

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!valid || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden pt-14 pb-24 sm:pt-24">
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow noRule>{c.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-[clamp(2.1rem,5vw,3.4rem)] font-semibold">
            {c.titleA}
            <span className="gradient-text">{c.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted">{c.subcopy}</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="card card-accent p-6 sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
                    <Check size={26} strokeWidth={2.6} />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold text-fg">{f.successTitle}</h2>
                  <p className="mt-2 max-w-sm text-sm text-muted">{f.successBody}</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mono-label">
                        {f.name} <span className="text-accent">·{f.required}</span>
                      </span>
                      <input className={`mt-1.5 ${inputCls}`} value={form.name} onChange={set("name")} placeholder={f.namePh} required />
                    </label>
                    <label className="block">
                      <span className="mono-label">
                        {f.email} <span className="text-accent">·{f.required}</span>
                      </span>
                      <input type="email" className={`mt-1.5 ${inputCls}`} value={form.email} onChange={set("email")} placeholder={f.emailPh} required />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mono-label">{f.company}</span>
                      <input className={`mt-1.5 ${inputCls}`} value={form.company} onChange={set("company")} placeholder={f.companyPh} />
                    </label>
                    <label className="block">
                      <span className="mono-label">{f.interest}</span>
                      <select className={`mt-1.5 ${inputCls}`} value={form.interest} onChange={set("interest")}>
                        <option value="">—</option>
                        {f.interestOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mono-label">
                      {f.message} <span className="text-accent">·{f.required}</span>
                    </span>
                    <textarea rows={4} className={`mt-1.5 resize-y ${inputCls}`} value={form.message} onChange={set("message")} placeholder={f.messagePh} required />
                  </label>

                  {status === "error" && <p className="text-sm text-[#e5484d]">{f.error}</p>}

                  <button type="submit" disabled={!valid || status === "sending"} className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-55">
                    {status === "sending" ? f.sending : f.submit}
                    {status !== "sending" && <ArrowUpRight size={16} strokeWidth={2.2} />}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card h-full p-6 sm:p-8">
              <div className="mono-label">{c.aside.title}</div>
              <ul className="mt-5 space-y-4">
                {c.aside.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-muted">
                    <Check size={16} strokeWidth={2.5} className="mt-0.5 flex-none text-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-[var(--hair)] pt-5">
                <div className="mono-label">{c.aside.emailLabel}</div>
                <a href={`mailto:${c.aside.email}`} className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
                  <Mail size={15} /> {c.aside.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
