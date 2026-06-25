export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://1nx.io";

/** The 1nx product family — cross-linked from the site. */
export const FAMILY = [
  {
    name: "1pay2link",
    href: "https://1pay2link.com",
    blurb: "Payment orchestration for Indonesia — one integration, every gateway.",
  },
  { name: "1ncall", href: "#", blurb: "Cloud, connectivity and platform operations." },
  { name: "1nflow", href: "#", blurb: "Workflow and process automation." },
  { name: "termssh", href: "#", blurb: "Secure access and infrastructure tooling." },
] as const;
