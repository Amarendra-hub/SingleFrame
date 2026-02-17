import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import matter from "gray-matter"

interface Props {
  params: { slug: string }
  }

  export async function generateStaticParams() {
    const posts = getAllPosts()

      return posts.map((post) => ({
          slug: post.slug,
            }))
            }

            export default function BlogPostPage({ params }: Props) {
              try {
                  const post = getPostBySlug(params.slug)

                      return (
                            <article className="max-w-3xl mx-auto px-6 py-16">
                                    <p className="text-sm text-neutral-500 mb-4">{post.date}</p>
                                            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
                                                    <div className="prose prose-invert">
                                                              {post.content}
                                                                      </div>
                                                                            </article>
                                                                                )
                                                                                  } catch {
                                                                                      notFound()
                                                                                        }
                                                                                      }