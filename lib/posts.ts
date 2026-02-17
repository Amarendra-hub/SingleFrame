import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory)

    return filenames.map((filename) => {
        const slug = filename.replace(".mdx", "")
            const fullPath = path.join(postsDirectory, filename)
                const fileContents = fs.readFileSync(fullPath, "utf8")
                    const { data } = matter(fileContents)

                        return {
                              slug,
                                    title: data.title,
                                          excerpt: data.excerpt,
                                                date: data.date,
                                                    }
                                                      })
                                                      }

                                                      export function getPostBySlug(slug: string) {
                                                        const fullPath = path.join(postsDirectory, `${slug}.mdx`)
                                                          const fileContents = fs.readFileSync(fullPath, "utf8")
                                                            const { content, data } = matter(fileContents)

                                                              return {
                                                                  content,
                                                                      title: data.title,
                                                                          excerpt: data.excerpt,
                                                                              date: data.date,
                                                                                }
                                                                                }