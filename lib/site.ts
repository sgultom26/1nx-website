export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://1nx.io";

/** The 1nx product family — cross-linked from the site. */
export const FAMILY = [
  {
    name: "1pay2link",
    href: "https://1pay2link.com",
    blurb: "Payment orchestration for Indonesia — one integration, every gateway.",
  },
  { name: "1ncall", href: "https://1ncall.com", blurb: "Cloud, connectivity and platform operations." },
  { name: "1nflow", href: "https://1nflow.com", blurb: "Workflow and process automation." },
  { name: "termssh", href: "https://termssh.com", blurb: "Secure access and infrastructure tooling." },
] as const;
