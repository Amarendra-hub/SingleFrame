import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)

    return files
        .filter((file) => file.endsWith(".mdx"))
            .map((file) => {
                  const slug = file.replace(/\.mdx$/, "")

                        const fullPath = path.join(postsDirectory, file)
                              const fileContents = fs.readFileSync(fullPath, "utf8")
                                    const { data } = matter(fileContents)

                                          return {
                                                  slug,
                                                          title: data.title || slug,
                                                                  excerpt: data.excerpt || "",
                                                                          date: data.date || "",
                                                                                }
                                                                                    })
                                                                                    }

                                                                                    export function getPostBySlug(slug: string) {
                                                                                      const fullPath = path.join(postsDirectory, `${slug}.mdx`)

                                                                                        if (!fs.existsSync(fullPath)) {
                                                                                            return null
                                                                                              }

                                                                                                const fileContents = fs.readFileSync(fullPath, "utf8")
                                                                                                  const { data, content } = matter(fileContents)

                                                                                                    return {
                                                                                                        slug,
                                                                                                            title: data.title || slug,
                                                                                                                excerpt: data.excerpt || "",
                                                                                                                    date: data.date || "",
                                                                                                                        content,
                                                                                                                          }
                                                                                                                          }