import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Hubungi kami",
  description: "Bawa satu ide ke 1nx dan kami kembali dengan rencana eksekusi — AI, transformasi, dan otomasi untuk enterprise.",
  alternates: { canonical: "/id/contact", languages: { en: "/contact", id: "/id/contact", "x-default": "/contact" } },
  openGraph: { locale: "id_ID" },
};

export default function ContactId() {
  return (
    <LocaleShell locale="id">
      <ContactContent />
    </LocaleShell>
  );
}
