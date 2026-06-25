import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import IndustriesContent from "@/components/pages/IndustriesContent";

export const metadata: Metadata = {
  title: "Industries",
  description: "Execution tuned to your sector — financial services, retail, healthcare, logistics, public sector and SaaS.",
  alternates: { canonical: "/industries", languages: { en: "/industries", id: "/id/industries", "x-default": "/industries" } },
};

export default function Industries() {
  return (
    <LocaleShell locale="en">
      <IndustriesContent />
    </LocaleShell>
  );
}
