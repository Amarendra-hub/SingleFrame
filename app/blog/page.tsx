import ArticleCard from "@/components/ArticleCard"
import { getAllPosts } from "@/lib/posts"

export default function BlogPage() {
  const posts = getAllPosts()

    return (
        <main className="max-w-3xl mx-auto px-6 py-20">
              <h1 className="text-4xl font-bold mb-10">Writing</h1>

                    <div className="space-y-6">
                            {posts.map((post) => (
                                      <ArticleCard
                                                  key={post.slug}
                                                              title={post.title}
                                                                          slug={post.slug}
                                                                                      excerpt={post.excerpt}
                                                                                                  date={post.date}
                                                                                                            />
                                                                                                                    ))}
                                                                                                                          </div>
                                                                                                                              </main>
                                                                                                                                )
                                                                                                                                }