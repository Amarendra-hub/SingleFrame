export default function Home() {
          return (
              <main className="max-w-5xl mx-auto px-6 py-24">
                    {/* Hero */}
                          <section className="mb-24">
                                  <h1 className="text-5xl font-bold leading-tight mb-6">
                                            Understand Growth Systems.
                                                      <br />
                                                                <span className="text-blue-500">Not Hype.</span>
                                                                        </h1>

                                                                                <p className="text-gray-400 max-w-xl mb-10">
                                                                                          SignalFrame analyzes how digital platforms actually distribute attention —
                                                                                                    algorithms, incentives, and leverage points.
                                                                                                            </p>

                                                                                                                    <a
                                                                                                                              href="/blog"
                                                                                                                                        className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-medium px-6 py-3 rounded-lg transition"
                                                                                                                                                >
                                                                                                                                                          Explore Frameworks →
                                                                                                                                                                  </a>
                                                                                                                                                                        </section>

                                                                                                                                                                              {/* Principles */}
                                                                                                                                                                                    <section className="grid md:grid-cols-3 gap-6">
                                                                                                                                                                                            {[
                                                                                                                                                                                                      "Algorithms over opinions",
                                                                                                                                                                                                                "Systems over hacks",
                                                                                                                                                                                                                          "Evidence over anecdotes",
                                                                                                                                                                                                                                  ].map((text) => (
                                                                                                                                                                                                                                            <div
                                                                                                                                                                                                                                                        key={text}
                                                                                                                                                                                                                                                                    className="border border-gray-800 rounded-xl p-6 bg-black/20"
                                                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                                                          <p className="text-lg">{text}</p>
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                                                                                      </main>
                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                

