"use client"

import { useState } from "react"

export default function AttentionFrameworkDownload() {
  const [unlocked, setUnlocked] = useState(false)

    function handleUnlock() {
        setUnlocked(true)
          }

            return (
                <section className="py-20 max-w-xl mx-auto">
                      <h1 className="text-3xl font-semibold mb-6">
                              Download The Attention Framework (PDF)
                                    </h1>

                                          {!unlocked ? (
                                                  <>
                                                            <p className="text-neutral-400 mb-6">
                                                                        Enter email to access the premium PDF version.
                                                                                  </p>
                                                                                            <input
                                                                                                        placeholder="Enter email"
                                                                                                                    className="w-full bg-neutral-900 border border-neutral-700 px-4 py-3 rounded-lg mb-4"
                                                                                                                              />
                                                                                                                                        <button
                                                                                                                                                    onClick={handleUnlock}
                                                                                                                                                                className="bg-white text-black px-6 py-3 rounded-lg"
                                                                                                                                                                          >
                                                                                                                                                                                      Unlock PDF
                                                                                                                                                                                                </button>
                                                                                                                                                                                                        </>
                                                                                                                                                                                                              ) : (
                                                                                                                                                                                                                      <a
                                                                                                                                                                                                                                href="/attention-framework.pdf"
                                                                                                                                                                                                                                          className="bg-white text-black px-6 py-3 rounded-lg"
                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                            Download PDF
                                                                                                                                                                                                                                                                    </a>
                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                              </section>
                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                }