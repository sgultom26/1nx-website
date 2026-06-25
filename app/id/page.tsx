import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/id",
    languages: { en: "/", id: "/id", "x-default": "/" },
  },
  openGraph: { locale: "id_ID" },
};

export default function HomeId() {
  return (
    <LocaleShell locale="id">
      <HomeContent />
    </LocaleShell>
  );
}
