// /lib/posts.ts

export type Post = {
  slug: string
    title: string
      excerpt: string
        date: string
        }

        export const posts: Post[] = [
          {
              slug: "grow-instagram",
                  title: "Grow Instagram With Systems",
                      excerpt: "Why growth comes from compounding behavior, not hacks.",
                          date: "March 2026"
                            },
                              {
                                  slug: "youtube-algorithm",
                                      title: "YouTube Algorithm With Systems",
                                          excerpt: "Design for retention, not vanity metrics.",
                                              date: "March 2026"
                                                }
                                                ]

                                                export function getAllPosts(): Post[] {
                                                  return posts
                                                  }

                                                  export function getPostBySlug(slug: string): Post | undefined {
                                                    return posts.find((post) => post.slug === slug)
                                                    }