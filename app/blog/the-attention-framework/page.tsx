import Link from "next/link";

export default function BlogPage() {
  return (
      <main className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-10">Writing</h1>

                  <div className="space-y-6">
                          <Link
                                    href="/blog/the-attention-framework"
                                              className="block border border-white/10 rounded-xl p-6"
                                                      >
                                                                <h2 className="text-xl font-semibold">
                                                                            The Attention Framework
                                                                                      </h2>
                                                                                                <p className="text-gray-400">
                                                                                                            A practical system for earning distribution.
                                                                                                                      </p>
                                                                                                                              </Link>

                                                                                                                                      <Link
                                                                                                                                                href="/blog/how-attention-is-distributed"
                                                                                                                                                          className="block border border-white/10 rounded-xl p-6"
                                                                                                                                                                  >
                                                                                                                                                                            <h2 className="text-xl font-semibold">
                                                                                                                                                                                        How Attention Is Actually Distributed
                                                                                                                                                                                                  </h2>
                                                                                                                                                                                                          </Link>

                                                                                                                                                                                                                  <Link
                                                                                                                                                                                                                            href="/blog/why-most-content-fails"
                                                                                                                                                                                                                                      className="block border border-white/10 rounded-xl p-6"
                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                        <h2 className="text-xl font-semibold">
                                                                                                                                                                                                                                                                    Why Most Content Fails
                                                                                                                                                                                                                                                                              </h2>
                                                                                                                                                                                                                                                                                      </Link>
                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                </main>
                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                  }