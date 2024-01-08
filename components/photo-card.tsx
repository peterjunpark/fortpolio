import Image from "next/image";
import { Gluten } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";
import me from "@/public/me.png";

const gluten = Gluten({
  subsets: ["latin"],
});

export function PhotoCard({ children }: { children?: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center pt-8 sm:flex-row sm:items-start sm:justify-between">
      <div className="w-full sm:w-2/3">{children}</div>
      <figure className="float-right m-[0.67rem] mt-10 flex w-fit rotate-3 flex-col rounded bg-highlight px-2 pt-2 hover:rotate-1 sm:ml-6 sm:mt-0">
        <Image
          src={me}
          alt="Peter Jun Park"
          className="w-[14rem] rounded-md bg-highlight-hi p-3 pb-1"
        />
        <figcaption
          className={cn(
            gluten.className,
            "ml-auto -rotate-2 pb-1 pr-3 text-2xl tracking-wider text-iris",
          )}
        >
          peter
        </figcaption>
      </figure>
    </section>
  );
}
