import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ConditionalLink({
  href,
  className,
  children,
}: {
  href?: LinkProps["href"];
  className?: string;
  children: ReactNode;
}) {
  return href ? (
    <Link
      href={href}
      className={cn(
        "underline decoration-1 underline-offset-[3px] hover:decoration-rose hover:decoration-2 dark:hover:decoration-love",
        className,
      )}
    >
      {children}
    </Link>
  ) : (
    children
  );
}
