import React from "react";
import { cn } from "@/utils";

type SpacerProps = {
  children: React.ReactNode;
  element: "section" | "article";
  className?: string;
};

export function Spacer({ children, element, className }: SpacerProps) {
  switch (true) {
    case element === "section":
      return (
        <section className={cn("py-8 tracking-tight", className)}>
          {children}
        </section>
      );
    case element === "article":
      return (
        <article className={cn("py-8 tracking-tight", className)}>
          {children}
        </article>
      );
  }
}
