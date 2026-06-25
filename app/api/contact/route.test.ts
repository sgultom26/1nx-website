import { expect, test } from "vitest";
import { validateContact } from "@/lib/contact";

test("missing name + invalid email → errors", () => {
  const r = validateContact({ email: "not-an-email", message: "hi" });
  expect(r.ok).toBe(false);
  expect(r.errors).toContain("name");
  expect(r.errors).toContain("email");
});

test("missing message → error", () => {
  const r = validateContact({ name: "A", email: "a@b.com" });
  expect(r.ok).toBe(false);
  expect(r.errors).toEqual(["message"]);
});

test("valid payload → ok", () => {
  const r = validateContact({ name: "Ada", email: "ada@1nx.io", message: "Build us X" });
  expect(r.ok).toBe(true);
  expect(r.errors).toHaveLength(0);
  expect(r.value.email).toBe("ada@1nx.io");
});
