import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import IndustriesContent from "@/components/pages/IndustriesContent";

export const metadata: Metadata = {
  title: "Industri",
  description: "Eksekusi yang disetel untuk sektor Anda — jasa keuangan, ritel, kesehatan, logistik, sektor publik, dan SaaS.",
  alternates: { canonical: "/id/industries", languages: { en: "/industries", id: "/id/industries", "x-default": "/industries" } },
  openGraph: { locale: "id_ID" },
};

export default function IndustriesId() {
  return (
    <LocaleShell locale="id">
      <IndustriesContent />
    </LocaleShell>
  );
}
