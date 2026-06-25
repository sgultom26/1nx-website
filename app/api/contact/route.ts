import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const result = validateContact(data);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  // Form-only: record the enquiry to the server logs. Swap for email/CRM later.
  console.log("[contact] enquiry", result.value);

  return NextResponse.json({ ok: true });
}
