import Link from "next/link";
import { LogoMark } from "@/components/site/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <LogoMark size={44} />
      <h1 className="mt-6 font-display text-5xl font-semibold text-fg">404</h1>
      <p className="mt-3 max-w-sm text-muted">
        That page took a different execution path. Let&apos;s get you back.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Back to home
      </Link>
    </main>
  );
}
