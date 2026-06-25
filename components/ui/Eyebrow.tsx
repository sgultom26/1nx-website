import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  className,
  noRule = false,
}: {
  children: ReactNode;
  className?: string;
  noRule?: boolean;
}) {
  return (
    <span className={`eyebrow ${noRule ? "no-rule" : ""} ${className ?? ""}`}>
      {children}
    </span>
  );
}
