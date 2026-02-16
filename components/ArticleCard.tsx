import Link from "next/link"

export default function ArticleCard({
  title,
    slug,
      excerpt,
      }: {
        title: string
          slug: string
            excerpt: string
            }) {
              return (
                  <Link
                        href={`/blog/${slug}`}
                              className="block border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition"
                                  >
                                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                              <p className="text-neutral-400">{excerpt}</p>
                                                  </Link>
                                                    )
                                                    }