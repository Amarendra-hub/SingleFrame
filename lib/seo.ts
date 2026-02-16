export function generateMetadata({
      title,
        description,
          url,
          }: {
            title: string
              description: string
                url: string
                }) {
                  return {
                      title,
                          description,
                              openGraph: {
                                    title,
                                          description,
                                                url,
                                                      type: "article",
                                                          },
                                                              twitter: {
                                                                    card: "summary_large_image",
                                                                          title,
                                                                                description,
                                                                                    },
                                                                                      }
                                                                                      }

