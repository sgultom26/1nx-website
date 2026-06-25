import { expect, test } from "vitest";
import { makeLocalize } from "@/lib/i18n";

test("en is identity", () => {
  const l = makeLocalize("en");
  expect(l("/solutions")).toBe("/solutions");
  expect(l("/")).toBe("/");
});

test("id prefixes internal paths", () => {
  const l = makeLocalize("id");
  expect(l("/")).toBe("/id");
  expect(l("/solutions")).toBe("/id/solutions");
  expect(l("/#contact")).toBe("/id#contact");
});

test("id leaves external / already-localized untouched", () => {
  const l = makeLocalize("id");
  expect(l("/id/solutions")).toBe("/id/solutions");
  expect(l("https://1pay2link.com")).toBe("https://1pay2link.com");
  expect(l("#anchor")).toBe("#anchor");
});
