import Link from "next/link"

export default function Navbar() {
  return (
      <header className="border-b border-neutral-800 py-6 mb-12">
            <div className="flex justify-between items-center max-w-5xl mx-auto px-6 md:px-12">
                    <Link href="/" className="text-xl font-semibold tracking-tight">
                              SingleFrame
                                      </Link>
                                              <nav className="space-x-6 text-sm text-neutral-400">
                                                        <Link href="/">Home</Link>
                                                                  <Link href="/blog">Blog</Link>
                                                                            <Link href="/tools">Tools</Link>
                                                                                      <Link href="/resources">Resources</Link>
                                                                                              </nav>
                                                                                                    </div>
                                                                                                        </header>
                                                                                                          )
                                                                                                          }