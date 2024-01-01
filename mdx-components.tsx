import type { MDXComponents } from "mdx/types";
import Link, { LinkProps } from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="pb-2 pt-6 text-2xl font-semibold sm:text-3xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="pb-2 pt-12 text-xl font-semibold sm:text-[1.4rem]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="pb-2 pl-2 pt-10 text-lg font-[550] tracking-tight sm:text-xl">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="py-3 font-[420] leading-relaxed tracking-tight">
        {children}
      </p>
    ),
    a: (props) => (
      <Link
        className="underline decoration-1 underline-offset-[3px] hover:decoration-rose hover:decoration-2 dark:hover:decoration-love"
        {...(props as LinkProps)}
      />
    ),
    code: (props) => (
      <code
        className="m-2 overflow-auto rounded-md bg-highlight-lo py-2 pr-3 text-[0.92rem] font-[475]"
        {...props}
      />
    ),
    ...components,
  };
}
