import fs from "fs";
import path from "path";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${params.slug}.mdx`
  );

  const source = fs.readFileSync(filePath, "utf8");

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 prose prose-invert">
      <article dangerouslySetInnerHTML={{ __html: source }} />
    </main>
  );
}