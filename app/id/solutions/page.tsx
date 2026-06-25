import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import SolutionsContent from "@/components/pages/SolutionsContent";

export const metadata: Metadata = {
  title: "Solusi",
  description: "Solusi Berbasis AI, Transformasi Digital, Otomasi & Workflow, dan Solusi Profesional Enterprise — dikirim untuk hasil.",
  alternates: { canonical: "/id/solutions", languages: { en: "/solutions", id: "/id/solutions", "x-default": "/solutions" } },
  openGraph: { locale: "id_ID" },
};

export default function SolutionsId() {
  return (
    <LocaleShell locale="id">
      <SolutionsContent />
    </LocaleShell>
  );
}
