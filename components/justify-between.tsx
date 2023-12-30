import React from "react";
import { cn } from "@/lib/utils";

export default function JustifyBetween({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <span className={cn("flex justify-between")}>{children}</span>;
}
