import type { ReactNode } from "react";
import { LocaleProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/dictionary";
import Nav from "./Nav";
import Footer from "./Footer";

export default function LocaleShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleProvider locale={locale}>
      <div className="relative flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
