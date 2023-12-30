import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   const posts = fs.readdirSync(path.join("posts"));

//   const paths = posts.map((filename) => ({
//     slug: filename.replace(".mdx", ""),
//   }));

//   return paths;
// }

export default function Post({ params }: any) {
  notFound();
  // const props = getPost(params);

  return (
    <div>
      <h1>{props.frontMatter.title}</h1>
      <p>{props.frontMatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
}
