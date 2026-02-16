import fs from "fs"
import path from "path"

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content/blog")
    const files = fs.readdirSync(postsDir)

      return files.map((file) => ({
          slug: file.replace(".mdx", ""),
            }))
            }

            export default async function BlogPost({
              params,
              }: {
                params: { slug: string }
                }) {
                  const { slug } = params

                    const Post = await import(`@/content/blog/${slug}.mdx`)

                      return (
                          <article className="prose prose-invert max-w-3xl mx-auto py-16">
                                <Post.default />
                                    </article>
                                      )
                                      }