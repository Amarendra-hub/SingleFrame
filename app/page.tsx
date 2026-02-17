import Hero from "@/components/Hero"
import ArticleCard from "@/components/ArticleCard"
import BuyButton from "@/components/BuyButton"
import { getAllPosts } from "@/lib/posts"

export default function HomePage() {
  const posts = getAllPosts()

    return (
        <main>
              <Hero />

                    <section className="max-w-3xl mx-auto px-6 py-20 space-y-6">
                            {posts.map((post) => (
                                      <ArticleCard
                                                  key={post.slug}
                                                              title={post.title}
                                                                          slug={post.slug}
                                                                                      excerpt={post.excerpt}
                                                                                                  date={post.date}
                                                                                                            />
                                                                                                                    ))}
                                                                                                                          </section>

                                                                                                                                <section className="text-center py-20">
                                                                                                                                        <h2 className="text-3xl font-bold mb-6">Go Deeper</h2>
                                                                                                                                                <BuyButton />
                                                                                                                                                      </section>
                                                                                                                                                          </main>
                                                                                                                                                            )
                                                                                                                                                            }