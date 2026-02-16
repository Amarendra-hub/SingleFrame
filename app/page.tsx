import Hero from "@/components/Hero"
import ArticleCard from "@/components/ArticleCard"
import { getAllPosts } from "@/lib/posts"
import BuyButton from "@/components/BuyButton"

export default function HomePage() {
  const posts = getAllPosts()
  
    return (
        <>
              <Hero />
              
                    <div className="grid gap-6 mt-12">
                            {posts.map((post) => (
                                      <ArticleCard
                                                  key={post.slug}
                                                              title={post.title}
                                                                          slug={post.slug}
                                                                                      excerpt={post.excerpt}
                                                                                                />
                                                                                                        ))}
                                                                                                              </div>
                                                                                                              <div className="mt-20 text-center">
                                                                                                                  <h2 className="text-3xl font-semibold mb-6">
                                                                                                                      Go Deeper
                                                                                                                        </h2>

                                                                                                                          <BuyButton />
                                                                                                                          </div>
                                                                                                                  </>
                                                                                                                    )
                                                                                                                    }                                                                                                                                                                                                                                                                      