import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"

const CONTENT_DIR = path.join(process.cwd(), "content/blog")

export async function generateStaticParams() {
  return fs.readdirSync(CONTENT_DIR).map(file => ({
      slug: file.replace(/\.mdx$/, ""),
        }))
        }

        export default async function BlogPost({
          params,
          }: {
            params: { slug: string }
            }) {
              const filePath = path.join(CONTENT_DIR, `${params.slug}.mdx`)

                if (!fs.existsSync(filePath)) {
                    notFound()
                      }

                        // Dynamically import the MDX file
                          const { default: Content } = await import(
                              `@/content/blog/${params.slug}.mdx`
                                )

                                  return (
                                      <article className="mx-auto max-w-[65ch] px-6 py-16">
                                            <Content />

                                                  <footer className="mt-20 pt-10 border-t border-white/10 text-sm text-gray-400">
                                                          <p className="font-medium text-white mb-1">
                                                                    SingleFrame
                                                                            </p>
                                                                                    <p>
                                                                                              Independent research on attention, incentives, and digital systems.
                                                                                                      </p>
                                                                                                            </footer>
                                                                                                                </article>
                                                                                                                  )
                                                                                                                  }