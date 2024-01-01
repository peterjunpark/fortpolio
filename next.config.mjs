import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkEmoji from "remark-emoji"; // support for emoji shortcodes
import remarkGfm from "remark-gfm"; // support for github-flavoured markdown
import rehypePrettyCode from "rehype-pretty-code"; // syntax highlighting

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: {
    light: "rose-pine-dawn",
    dark: "rose-pine-moon",
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkEmoji, remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
};

export default withMDX(nextConfig);
