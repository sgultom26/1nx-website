import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import ProductsContent from "@/components/pages/ProductsContent";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Keluarga produk 1nx — 1pay2link (pembayaran), 1ncall (pesan & otomasi), 1nflow (perangkat lunak perbankan), dan termssh (akses aman).",
  alternates: { canonical: "/id/products", languages: { en: "/products", id: "/id/products", "x-default": "/products" } },
  openGraph: { locale: "id_ID" },
};

export default function ProductsId() {
  return (
    <LocaleShell locale="id">
      <ProductsContent />
    </LocaleShell>
  );
}
