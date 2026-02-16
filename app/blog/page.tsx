import ArticleCard from "@/components/ArticleCard"
import { getAllPosts } from "@/lib/posts"

export default function BlogPage() {
  const posts = getAllPosts()

    return (
        <section className="py-16">
              <h1 className="text-4xl font-semibold mb-10">Writing</h1>

                    <div className="grid gap-6">
                            {posts.map((post) => (
                                      <ArticleCard
                                                  key={post.slug}
                                                              title={post.title}
                                                                          slug={post.slug}
                                                                                      excerpt={post.excerpt}
                                                                                                />
                                                                                                        ))}
                                                                                                              </div>
                                                                                                                  </section>
                                                                                                                    )
                                                                                                                    }