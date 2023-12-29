import React from "react";

type SectionProps = {
  heading: string;
  children: React.ReactNode;
};

export function Section({ heading, children }: SectionProps) {
  return (
    <section className="py-8">
      <h2 className="text-highlght-hi pb-1 text-xl font-semibold sm:text-[1.4rem]">
        {heading}
      </h2>
      <div className="tracking-tight">{children}</div>
    </section>
  );
}
