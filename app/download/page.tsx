export const metadata = {
      title: "Download The Attention Framework",
        description:
            "Get the full Attention Framework as a free PDF.",
            };

            export default function DownloadPage() {
              return (
                  <main className="max-w-xl mx-auto px-6 py-24">
                        <h1 className="text-3xl font-bold mb-4">
                                Get the Attention Framework
                                      </h1>

                                            <p className="text-gray-400 mb-10">
                                                    A practical system for designing content that earns distribution.
                                                            Free PDF.
                                                                  </p>

                                                                        <form
                                                                                action="/downloads/the-attention-framework.pdf"
                                                                                        method="get"
                                                                                                className="space-y-4"
                                                                                                      >
                                                                                                              <input
                                                                                                                        type="email"
                                                                                                                                  name="email"
                                                                                                                                            required
                                                                                                                                                      placeholder="Enter your email"
                                                                                                                                                                className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
                                                                                                                                                                        />

                                                                                                                                                                                <button
                                                                                                                                                                                          type="submit"
                                                                                                                                                                                                    className="w-full bg-blue-500 hover:bg-blue-600 text-black font-medium py-3 rounded-lg transition"
                                                                                                                                                                                                            >
                                                                                                                                                                                                                      Download PDF
                                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                                    </form>

                                                                                                                                                                                                                                          <p className="text-xs text-gray-500 mt-4">
                                                                                                                                                                                                                                                  No spam. One framework. You can unsubscribe anytime.
                                                                                                                                                                                                                                                        </p>
                                                                                                                                                                                                                                                            </main>
                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                              }
