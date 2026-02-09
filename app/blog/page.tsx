import Link from "next/link"

const posts = [
  {
      slug: "the-attention-framework",
          title: "The Attention Framework",
              description: "A practical system for earning distribution.",
                },
                  {
                      slug: "how-attention-is-distributed",
                          title: "How Attention Is Actually Distributed",
                              description: "Why incentives — not quality — decide reach.",
                                },
                                  {
                                      slug: "why-most-content-fails",
                                          title: "Why Most Content Fails",
                                              description: "The structural reasons most content dies early.",
                                                },
                                                ]

                                                export default function BlogPage() {
                                                  return (
                                                      <main className="max-w-5xl mx-auto px-6 py-20">
                                                            <h1 className="text-4xl font-bold mb-4">Writing</h1>
                                                                  <p className="text-gray-400 mb-12 max-w-2xl">
                                                                          Frameworks and essays on attention, incentives, and distribution systems.
                                                                                </p>

                                                                                      <div className="space-y-6">
                                                                                              {posts.map(post => (
                                                                                                        <Link
                                                                                                                    key={post.slug}
                                                                                                                                href={`/blog/${post.slug}`}
                                                                                                                                            className="block border border-white/10 rounded-xl p-6 hover:border-white/20 transition"
                                                                                                                                                      >
                                                                                                                                                                  <h2 className="text-xl font-semibold mb-1">
                                                                                                                                                                                {post.title}
                                                                                                                                                                                            </h2>
                                                                                                                                                                                                        <p className="text-gray-400">
                                                                                                                                                                                                                      {post.description}
                                                                                                                                                                                                                                  </p>
                                                                                                                                                                                                                                            </Link>
                                                                                                                                                                                                                                                    ))}
                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                              </main>
                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                }

