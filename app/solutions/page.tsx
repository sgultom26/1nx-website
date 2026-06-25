import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import SolutionsContent from "@/components/pages/SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions",
  description: "AI-Enabled Solutions, Digital Transformation, Automation & Workflow and Enterprise Professional Solutions — delivered to outcomes.",
  alternates: { canonical: "/solutions", languages: { en: "/solutions", id: "/id/solutions", "x-default": "/solutions" } },
};

export default function Solutions() {
  return (
    <LocaleShell locale="en">
      <SolutionsContent />
    </LocaleShell>
  );
}
