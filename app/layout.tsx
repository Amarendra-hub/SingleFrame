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
                            <header className="border-b border-gray-800">
                                      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                                                  <a href="/" className="font-semibold tracking-tight">
                                                                SingleFrame
                                                                            </a>

                                                                                        <div className="flex gap-6 text-sm text-gray-400">
                                                                                                      <a href="/" className="hover:text-gray-200">Home</a>
                                                                                                                    <a href="/blog" className="hover:text-gray-200">Blog</a>
                                                                                                                                  <a href="/about" className="hover:text-gray-200">About</a>
                                                                                                                                              </div>
                                                                                                                                                        </nav>
                                                                                                                                                                </header>

                                                                                                                                                                        <main>{children}</main>

                                                                                                                                                                                <footer className="border-t border-gray-800 mt-24">
                                                                                                                                                                                          <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500">
                                                                                                                                                                                                      © {new Date().getFullYear()} SingleFrame — Independent research on attention & systems.
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                        </footer>
                                                                                                                                                                                                                              </body>
                                                                                                                                                                                                                                  </html>
                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                    }