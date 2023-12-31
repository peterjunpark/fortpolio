import createMDX from "@next/mdx";
import frontmatter from "remark-frontmatter";
import emoji from "remark-emoji"; // support for emoji shortcodes
import gfm from "remark-gfm"; // support for github-flavoured markdown

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

const withMDX = createMDX({
  options: {
    remarkPlugins: [frontmatter, emoji, gfm],
  },
});

export default withMDX(nextConfig);
