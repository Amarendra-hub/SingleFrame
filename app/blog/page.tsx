export const metadata = {
    title: "Blog",
      description: "Frameworks and essays on attention, systems, and distribution.",
      };

      export default function BlogPage() {
        return (
            <main className="max-w-5xl mx-auto px-6 py-20">
                  <h1 className="text-4xl font-bold mb-4">Writing</h1>
                        <p className="text-gray-400 mb-12 max-w-2xl">
                                Essays and frameworks on how attention is distributed in digital systems.
                                      </p>

                                            <div className="space-y-10">
                                                    {/* Featured */}
                                                            <a
                                                                      href="/blog/the-attention-framework"
                                                                                className="block border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition"
                                                                                        >
                                                                                                  <h2 className="text-2xl font-semibold mb-2">
                                                                                                              The Attention Framework
                                                                                                                        </h2>
                                                                                                                                  <p className="text-gray-400">
                                                                                                                                              A practical system for designing content that earns distribution.
                                                                                                                                                        </p>
                                                                                                                                                                </a>

                                                                                                                                                                        {/* Others */}
                                                                                                                                                                                <div className="grid gap-6">
                                                                                                                                                                                          <a href="/blog/how-attention-is-distributed" className="hover:underline">
                                                                                                                                                                                                      How Attention Is Actually Distributed
                                                                                                                                                                                                                </a>
                                                                                                                                                                                                                          <a href="/blog/why-most-content-fails" className="hover:underline">
                                                                                                                                                                                                                                      Why Most Content Fails
                                                                                                                                                                                                                                                </a>
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                  </main>
                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                    }
