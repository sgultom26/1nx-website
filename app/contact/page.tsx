import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Talk to us",
  description: "Bring 1nx one idea and we'll come back with an execution plan — AI, transformation and automation for the enterprise.",
  alternates: { canonical: "/contact", languages: { en: "/contact", id: "/id/contact", "x-default": "/contact" } },
};

export default function Contact() {
  return (
    <LocaleShell locale="en">
      <ContactContent />
    </LocaleShell>
  );
}
