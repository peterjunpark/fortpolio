import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="pb-3 pt-6 text-2xl font-semibold sm:text-3xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="pb-2 pt-12 text-xl font-semibold sm:text-[1.4rem]">
        {children}
      </h2>
    ),
    p: ({ children }) => <p className="py-2 tracking-tight">{children}</p>,
    ...components,
  };
}
