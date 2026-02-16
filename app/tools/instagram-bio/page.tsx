"use client"

import { useState } from "react"

export default function InstagramBioTool() {
  const [name, setName] = useState("")
    const [result, setResult] = useState("")

      function generateBio() {
          setResult(`${name} | Helping creators grow with systems.`)
            }

              return (
                  <section className="py-20 max-w-xl mx-auto">
                        <h1 className="text-3xl font-semibold mb-6">
                                Instagram Bio Generator
                                      </h1>

                                            <input
                                                    placeholder="Your niche"
                                                            value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                            className="w-full bg-neutral-900 border border-neutral-700 px-4 py-3 rounded-lg mb-4"
                                                                                  />

                                                                                        <button
                                                                                                onClick={generateBio}
                                                                                                        className="bg-white text-black px-6 py-3 rounded-lg"
                                                                                                              >
                                                                                                                      Generate
                                                                                                                            </button>

                                                                                                                                  {result && (
                                                                                                                                          <div className="mt-6 p-4 border border-neutral-800 rounded-lg">
                                                                                                                                                    {result}
                                                                                                                                                            </div>
                                                                                                                                                                  )}
                                                                                                                                                                      </section>
                                                                                                                                                                        )
                                                                                                                                                                        }