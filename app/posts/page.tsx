import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { notFound } from "next/navigation";

export default function Posts() {
  notFound();
  return <div>Posts</div>;
}
