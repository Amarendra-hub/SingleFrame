import Link from "next/link"

interface ArticleCardProps {
  title: string
    slug: string
      excerpt: string
        date: string
        }

        export default function ArticleCard({
          title,
            slug,
              excerpt,
                date,
                }: ArticleCardProps) {
                  return (
                      <Link href={`/blog/${slug}`}>
                            <div className="border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-all">
                                    <p className="text-sm text-neutral-500 mb-2">{date}</p>
                                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                                    <p className="text-neutral-400">{excerpt}</p>
                                                          </div>
                                                              </Link>
                                                                )
                                                                }