import HelloWorld from "@/content/hello-world.mdx";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section>
        <HelloWorld />
      </section>
      <section>
        <h2></h2>
      </section>
    </main>
  );
}
