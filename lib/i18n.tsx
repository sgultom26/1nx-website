"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { dictionaries, type Dict, type Locale } from "./dictionary";

type Ctx = { locale: Locale; t: Dict; localize: (href: string) => string };

const LocaleContext = createContext<Ctx>({
  locale: "en",
  t: dictionaries.en,
  localize: (h) => h,
});

/** Prefix internal links with /id when the active locale is Indonesian. */
export function makeLocalize(locale: Locale) {
  return (href: string) => {
    if (locale !== "id") return href;
    if (!href.startsWith("/")) return href; // external or "#anchor"
    if (href === "/id" || href.startsWith("/id/")) return href; // already localized
    if (href === "/") return "/id";
    if (href.startsWith("/#")) return "/id" + href.slice(1); // "/#x" -> "/id#x"
    return "/id" + href; // "/solutions" -> "/id/solutions"
  };
}

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, t: dictionaries[locale], localize: makeLocalize(locale) }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useI18n() {
  return useContext(LocaleContext);
}
