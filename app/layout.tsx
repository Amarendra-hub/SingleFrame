import "./globals.css";

export const metadata = {
  title: "SingleFrame",
    description: "Independent research on attention and distribution systems.",
    };

    export default function RootLayout({
      children,
      }: {
        children: React.ReactNode;
        }) {
          return (
              <html lang="en">
                    <body className="bg-black text-gray-200">
                            <header className="border-b border-white/10">
                                      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
                                                  <a href="/" className="font-semibold">
                                                                SingleFrame
                                                                            </a>
                                                                                        <div className="flex gap-6 text-sm text-gray-400">
                                                                                                      <a href="/" className="hover:text-white">Home</a>
                                                                                                                    <a href="/blog" className="hover:text-white">Blog</a>
                                                                                                                                  <a href="/about" className="hover:text-white">About</a>
                                                                                                                                              </div>
                                                                                                                                                        </nav>
                                                                                                                                                                </header>

                                                                                                                                                                        <main>{children}</main>

                                                                                                                                                                                <footer className="border-t border-white/10 mt-24">
                                                                                                                                                                                          <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500">
                                                                                                                                                                                                      © {new Date().getFullYear()} SingleFrame
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                        </footer>
                                                                                                                                                                                                                              </body>
                                                                                                                                                                                                                                  </html>
                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                    }