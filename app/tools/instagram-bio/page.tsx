"use client"
import { useState } from "react"

export default function InstagramBioTool() {
  const [niche, setNiche] = useState("")
    const [result, setResult] = useState("")

      function generate() {
          setResult(
                `${niche} | Systems Growth\nHelping creators design retention.\nDM "SYSTEM"`
                    )
                      }

                        return (
                            <main className="max-w-xl mx-auto px-6 py-20 space-y-6">
                                  <h1 className="text-3xl font-bold">Instagram Bio Generator</h1>

                                        <input
                                                className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
                                                        placeholder="Enter your niche"
                                                                value={niche}
                                                                        onChange={(e) => setNiche(e.target.value)}
                                                                              />

                                                                                    <button
                                                                                            onClick={generate}
                                                                                                    className="bg-blue-600 px-5 py-2 rounded"
                                                                                                          >
                                                                                                                  Generate
                                                                                                                        </button>

                                                                                                                              {result && (
                                                                                                                                      <div className="p-4 bg-zinc-900 border border-zinc-700 rounded">
                                                                                                                                                {result}
                                                                                                                                                        </div>
                                                                                                                                                              )}
                                                                                                                                                                  </main>
                                                                                                                                                                    )
                                                                                                                                                                    }