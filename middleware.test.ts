import { expect, test } from "vitest";
import { decideLocale } from "@/lib/locale";

test("explicit cookie wins", () => {
  expect(decideLocale({ cookie: "en", country: "ID" })).toBe("en");
  expect(decideLocale({ cookie: "id", country: "US" })).toBe("id");
});

test("ID geo → id", () => {
  expect(decideLocale({ country: "ID" })).toBe("id");
});

test("id accept-language → id", () => {
  expect(decideLocale({ acceptLanguage: "id-ID,id;q=0.9,en;q=0.8" })).toBe("id");
});

test("no signal → null (stay english)", () => {
  expect(decideLocale({ country: "US", acceptLanguage: "en-US,en;q=0.9" })).toBeNull();
  expect(decideLocale({})).toBeNull();
});
