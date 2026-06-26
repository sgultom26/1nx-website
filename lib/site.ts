export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://1nx.io";

/** Motif key drives the per-product animation on the Products page. */
export type ProductMotif = "pay" | "msg" | "flow" | "term";

/** The 1nx product family — locale-agnostic fields. Copy lives in the dictionary
 *  (`t.family.items`, same order) so it can be translated. */
export const FAMILY: { name: string; href: string; motif: ProductMotif }[] = [
  { name: "1pay2link", href: "https://1pay2link.com", motif: "pay" },
  { name: "1ncall", href: "https://1ncall.com", motif: "msg" },
  { name: "1nflow", href: "https://1nflow.ai", motif: "flow" },
  { name: "termssh", href: "https://termssh.com", motif: "term" },
];
