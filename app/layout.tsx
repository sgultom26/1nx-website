import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site";
import SmoothScroll from "@/components/motion/SmoothScroll";

const description =
  "AI-enabled solutions, digital transformation and automation for the enterprise. One idea. N executions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "1nx — One idea. N executions.", template: "%s · 1nx" },
  description,
  openGraph: {
    type: "website",
    siteName: "1nx",
    url: SITE_URL,
    title: "1nx — One idea. N executions.",
    description,
  },
  twitter: { card: "summary_large_image", title: "1nx — One idea. N executions.", description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#org`,
      name: "1nx",
      url: SITE_URL,
      slogan: "One idea. N executions.",
      description,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#site`,
      url: SITE_URL,
      name: "1nx",
      publisher: { "@id": `${SITE_URL}#org` },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
