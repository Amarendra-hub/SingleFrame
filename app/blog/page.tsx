export default function BlogPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16">
              <h1 className="text-4xl font-semibold mb-4">Writing</h1>
                    <p className="text-gray-400 mb-10">
                            Essays and frameworks on how attention is distributed in digital systems.
                                  </p>

                                        {/* Featured */}
                                              <a
                                                      href="/blog/the-attention-framework"
                                                              className="block rounded-2xl border border-white/10 p-6 mb-10 hover:border-white/20 transition"
                                                                    >
                                                                            <h2 className="text-2xl font-medium">The Attention Framework</h2>
                                                                                    <p className="text-gray-400 mt-2">
                                                                                              A practical system for designing content that earns distribution.
                                                                                                      </p>
                                                                                                            </a>

                                                                                                                  {/* Other essays */}
                                                                                                                        <div className="space-y-4">
                                                                                                                                <a
                                                                                                                                          href="/blog/how-attention-is-distributed"
                                                                                                                                                    className="block rounded-xl border border-white/10 p-5 hover:border-white/20 transition"
                                                                                                                                                            >
                                                                                                                                                                      <h3 className="text-lg font-medium">
                                                                                                                                                                                  How Attention Is Actually Distributed
                                                                                                                                                                                            </h3>
                                                                                                                                                                                                    </a>

                                                                                                                                                                                                            <a
                                                                                                                                                                                                                      href="/blog/why-most-content-fails"
                                                                                                                                                                                                                                className="block rounded-xl border border-white/10 p-5 hover:border-white/20 transition"
                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                  <h3 className="text-lg font-medium">
                                                                                                                                                                                                                                                              Why Most Content Fails
                                                                                                                                                                                                                                                                        </h3>
                                                                                                                                                                                                                                                                                </a>
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                          </main>
                                                                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                                                                            }

