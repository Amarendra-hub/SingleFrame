export const dynamicParams = false

import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import ReactMarkdown from "react-markdown"

interface Props {
  params: {
      slug: string
        }
        }

        export function generateStaticParams() {
          const posts = getAllPosts()

            return posts.map((post) => ({
                slug: post.slug,
                  }))
                  }

                  export default function BlogPostPage({ params }: Props) {
                    const post = getPostBySlug(params.slug)

                      if (!post) {
                          notFound()
                              return null
                                }

                                  return (
                                      <article className="max-w-3xl mx-auto px-6 py-20 prose prose-invert">
                                            <h1>{post.title}</h1>
                                                  <p className="text-gray-400 text-sm mb-8">{post.date}</p>

                                                        <ReactMarkdown>
                                                                {post.content}
                                                                      </ReactMarkdown>
                                                                          </article>
                                                                            )
                                                                            }