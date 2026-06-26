export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://1nx.io";

/** Motif key drives the per-product animation on the Products page. */
export type ProductMotif = "pay" | "msg" | "flow" | "term";

/** The 1nx product family — cross-linked across the site. */
export const FAMILY: {
  name: string;
  href: string;
  category: string;
  blurb: string; // short — for cards
  long: string; // paragraph — for the products page
  points: string[];
  motif: ProductMotif;
}[] = [
  {
    name: "1pay2link",
    href: "https://1pay2link.com",
    category: "Payments",
    blurb: "Payment orchestration — one integration, every gateway.",
    long: "The orchestration layer over Indonesia's payment gateways. Integrate once, accept every method — QRIS, virtual accounts, e-wallets, cards and PayLater — and route across providers for uptime and coverage. Money settles straight to you.",
    points: [
      "One API, every gateway",
      "QRIS · VA · e-wallets · cards · PayLater",
      "Health-aware routing & failover",
      "Funds settle straight to you",
    ],
    motif: "pay",
  },
  {
    name: "1ncall",
    href: "https://1ncall.com",
    category: "Messaging & automation",
    blurb: "Workflow automation + omnichannel messaging, AI-enabled.",
    long: "AI-enabled workflow automation and omnichannel messaging. Orchestrate customer conversations across WhatsApp, SMS and voice, with visual automations, campaigns and AI-assisted replies and routing.",
    points: [
      "Omnichannel: WhatsApp · SMS · voice",
      "Visual workflow automation",
      "AI-assisted replies & routing",
      "Campaigns & broadcasts",
    ],
    motif: "msg",
  },
  {
    name: "1nflow",
    href: "https://1nflow.ai",
    category: "Banking software",
    blurb: "Banking & lending software with AI-assisted workflows.",
    long: "Banking and lending software for Indonesia — loan origination (LOS), appraisal, collections, treasury and KYC/CDD on one shared BPMN/DMN workflow engine, with AI-assisted credit analysis. Built for BPRs, multifinance and regional banks.",
    points: [
      "Loan origination (LOS) & management",
      "Appraisal · collections · treasury · KYC",
      "BPMN/DMN workflow engine",
      "AI credit narrative (advisory)",
    ],
    motif: "flow",
  },
  {
    name: "termssh",
    href: "https://termssh.com",
    category: "Secure access",
    blurb: "Secure SSH access & encrypted credential vault.",
    long: "Secure SSH access and a zero-knowledge, encrypted credential vault — browser and native terminals with SFTP, SSH key management, sync, SSO and host-key pinning. Built like an instrument, for DevOps and platform teams.",
    points: [
      "Browser + native SSH terminals",
      "Zero-knowledge encrypted vault",
      "SFTP & SSH key management",
      "Sync · SSO · host-key pinning",
    ],
    motif: "term",
  },
];
