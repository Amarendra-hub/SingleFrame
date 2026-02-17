import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import AuthorBox from "@/components/AuthorBox"

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
      slug: post.slug
        }))
        }

        export default function BlogPost({ params }: { params: { slug: string } }) {
          const post = getPostBySlug(params.slug)

            if (!post) return notFound()

              return (
                  <main className="max-w-2xl mx-auto px-6 py-20">
                        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                              <p className="text-zinc-400 mb-10">{post.date}</p>

                                    <div className="prose prose-invert">
                                            <p>{post.excerpt}</p>

                                                    <p>
                                                              Attention compounds. Platforms reward retention, not effort.
                                                                      </p>

                                                                              <h2>The Core Idea</h2>

                                                                                      <ul>
                                                                                                <li>Hook immediately</li>
                                                                                                          <li>Reduce friction</li>
                                                                                                                    <li>Encourage completion</li>
                                                                                                                            </ul>

                                                                                                                                    <p>Growth is a systems outcome.</p>
                                                                                                                                          </div>

                                                                                                                                                <AuthorBox />
                                                                                                                                                    </main>
                                                                                                                                                      )
                                                                                                                                                      }