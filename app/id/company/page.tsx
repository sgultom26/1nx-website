import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import CompanyContent from "@/components/pages/CompanyContent";

export const metadata: Metadata = {
  title: "Perusahaan",
  description: "1nx adalah perusahaan AI-tech dan transformasi — kami merekayasa jarak antara ide bagus dan hasil yang berjalan. Satu ide. N eksekusi.",
  alternates: { canonical: "/id/company", languages: { en: "/company", id: "/id/company", "x-default": "/company" } },
  openGraph: { locale: "id_ID" },
};

export default function CompanyId() {
  return (
    <LocaleShell locale="id">
      <CompanyContent />
    </LocaleShell>
  );
}
