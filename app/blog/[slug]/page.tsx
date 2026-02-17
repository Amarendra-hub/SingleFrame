import { getAllPosts } from "@/lib/posts"

export async function generateStaticParams() {
  const posts = getAllPosts()

    return posts.map((post) => ({
        slug: post.slug,
          }))
          }

          export default async function BlogPost({
            params,
            }: {
              params: Promise<{ slug: string }>
              }) {
                const { slug } = await params

                  const Post = await import(`@/content/blog/${slug}.mdx`)

                    return (
                        <article className="prose prose-invert max-w-3xl mx-auto py-16">
                              <Post.default />
                                  </article>
                                    )
                                    }