import createMDX from "@next/mdx";
import emoji from "remark-emoji";

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
    remarkPlugins: [emoji],
  },
});

export default withMDX(nextConfig);
