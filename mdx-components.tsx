import type { MDXComponents } from "mdx/types";
import Link, { LinkProps } from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="pb-2 pt-12 text-2xl font-semibold sm:text-3xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="pb-2 pt-10 text-xl font-semibold sm:text-[1.4rem]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="pb-2 pt-8 text-lg font-[550] tracking-tight sm:text-xl">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="hyphens-manual py-3 font-[420] leading-relaxed tracking-tighter">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 pr-2 text-[0.95rem]">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 pr-2 text-[0.95rem]">{children}</ol>
    ),
    a: (props) => (
      <Link
        className="underline decoration-1 underline-offset-[3px] hover:decoration-rose hover:decoration-2 dark:hover:decoration-love"
        {...(props as LinkProps)}
      />
    ),
    code: (props) => (
      <code
        className="my-2 overflow-auto rounded-md bg-highlight-lo py-2 pr-3 text-[0.95rem] font-[475] sm:mx-[0.32rem]"
        {...props}
      />
    ),
    ...components,
  };
}
