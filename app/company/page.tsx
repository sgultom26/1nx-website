import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import CompanyContent from "@/components/pages/CompanyContent";

export const metadata: Metadata = {
  title: "Company",
  description: "1nx is an AI-tech and transformation company — we engineer the gap between a good idea and a working result. One idea. N executions.",
  alternates: { canonical: "/company", languages: { en: "/company", id: "/id/company", "x-default": "/company" } },
};

export default function Company() {
  return (
    <LocaleShell locale="en">
      <CompanyContent />
    </LocaleShell>
  );
}
