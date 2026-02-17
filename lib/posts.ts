import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, "")

            const fullPath = path.join(postsDirectory, fileName)
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

                                                          if (!fs.existsSync(fullPath)) return null

                                                            const fileContents = fs.readFileSync(fullPath, "utf8")
                                                              const { data, content } = matter(fileContents)

                                                                return {
                                                                    slug,
                                                                        title: data.title,
                                                                            excerpt: data.excerpt,
                                                                                date: data.date,
                                                                                    content,
                                                                                      }
                                                                                      }