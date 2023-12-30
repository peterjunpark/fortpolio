import React from "react";
import { Spacer } from "@/components/spacer";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Spacer element="article">{children}</Spacer>;
}
