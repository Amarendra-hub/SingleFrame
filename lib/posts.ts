import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface PostMeta {
  slug: string
    title: string
      excerpt: string
        date: string
        }

        export function getAllPosts(): PostMeta[] {
          const files = fs.readdirSync(postsDirectory)

            return files.map((filename) => {
                const slug = filename.replace(".mdx", "")
                    const filePath = path.join(postsDirectory, filename)
                        const fileContent = fs.readFileSync(filePath, "utf8")

                            const { data } = matter(fileContent)

                                return {
                                      slug,
                                            title: data.title,
                                                  excerpt: data.excerpt,
                                                        date: data.date,
                                                            }
                                                              })
                                                              }

                                                              export function getPostBySlug(slug: string) {
                                                                const filePath = path.join(postsDirectory, `${slug}.mdx`)

                                                                  if (!fs.existsSync(filePath)) return null

                                                                    const fileContent = fs.readFileSync(filePath, "utf8")
                                                                      const { data, content } = matter(fileContent)

                                                                        return {
                                                                            slug,
                                                                                title: data.title,
                                                                                    excerpt: data.excerpt,
                                                                                        date: data.date,
                                                                                            content,
                                                                                              }
                                                                                              }