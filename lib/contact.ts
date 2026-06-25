export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactValue = {
  name: string;
  email: string;
  message: string;
  company: string;
  interest: string;
};

/** Pure validator shared by the API route and unit tests. */
export function validateContact(data: Record<string, unknown>): {
  ok: boolean;
  errors: string[];
  value: ContactValue;
} {
  const value: ContactValue = {
    name: String(data.name ?? "").trim(),
    email: String(data.email ?? "").trim(),
    message: String(data.message ?? "").trim(),
    company: String(data.company ?? "").trim(),
    interest: String(data.interest ?? "").trim(),
  };
  const errors: string[] = [];
  if (!value.name) errors.push("name");
  if (!EMAIL_RE.test(value.email)) errors.push("email");
  if (!value.message) errors.push("message");
  return { ok: errors.length === 0, errors, value };
}
