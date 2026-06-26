import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import ProductsContent from "@/components/pages/ProductsContent";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The 1nx product family — 1pay2link (payments), 1ncall (messaging & automation), 1nflow (banking software) and termssh (secure access).",
  alternates: { canonical: "/products", languages: { en: "/products", id: "/id/products", "x-default": "/products" } },
};

export default function Products() {
  return (
    <LocaleShell locale="en">
      <ProductsContent />
    </LocaleShell>
  );
}
