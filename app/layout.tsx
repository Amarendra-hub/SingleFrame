import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "SingleFrame — Systems for Attention",
      description:
          "Research-backed frameworks for creators who want sustainable distribution."
          }

    export default function RootLayout({
      children,
      }: {
        children: React.ReactNode
        }) {
          return (
              <html lang="en" className="dark">
                    <body className={`${inter.className} bg-black text-neutral-200 antialiased`}>
                            <Navbar />
                                    <main className="min-h-screen px-6 md:px-12 max-w-5xl mx-auto">
                                              {children}
                                                      </main>
                                                              <Footer />
                                                                    </body>
                                                                        </html>
                                                                          )
                                                                          }