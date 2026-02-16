import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import { calculateReadingTime } from "@/lib/utils"
import AuthorBox from "@/components/AuthorBox"
import BuyButton from "@/components/BuyButton"

export async function generateMetadata({ params }: any) {
  const filePath = path.join(
      process.cwd(),
          "content/blog",
              `${params.slug}.mdx`
                )

                  const source = fs.readFileSync(filePath, "utf8")
                    const { data } = matter(source)

                      return generateMetadata({
                          title: data.title,
                              description: data.excerpt,
                                })
                                }

                                export default async function BlogPost({ params }: any) {
                                  const filePath = path.join(
                                      process.cwd(),
                                          "content/blog",
                                              `${params.slug}.mdx`
                                                )

                                                  const source = fs.readFileSync(filePath, "utf8")
                                                    const { content, data } = matter(source)
                                                      const readingTime = calculateReadingTime(content)

                                                        return (
                                                            <article className="prose prose-invert max-w-3xl mx-auto py-20">
                                                                <script
                                                                  type="application/ld+json"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: JSON.stringify({
                                                                              "@context": "https://schema.org",
                                                                                    "@type": "Article",
                                                                                          headline: data.title,
                                                                                                datePublished: data.date,
                                                                                                      description: data.excerpt,
                                                                                                          }),
                                                                                                            }}
                                                                                                            />
                                                                  <h1>{data.title}</h1>

                                                                        <div className="text-sm text-neutral-500 mb-8">
                                                                                {data.date} · {readingTime}
                                                                                      </div>

                                                                                            <MDXRemote source={content} />
                                                                                            <div className="mt-16 border-t border-neutral-800 pt-10">
                                                                                                  <h3 className="text-xl font-semibold mb-4">
                                                                                                      Want deeper frameworks?
                                                                                                        </h3>
                                                                                                          <p className="text-neutral-400 mb-6">
                                                                                                              The expanded edition includes templates and breakdowns.
                                                                                                                </p>
                                                                                                                  <BuyButton />
                                                                                                                  </div> 

                                                                                                  <AuthorBox />
                                                                                                      </article>
                                                                                                        )
                                                                                                        }