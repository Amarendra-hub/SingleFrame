"use client"

export default function BuyButton() {
  async function handleCheckout() {
      const res = await fetch("/api/checkout", { method: "POST" })
          const data = await res.json()
              window.location.href = data.url
                }

                  return (
                      <button
                            onClick={handleCheckout}
                                  className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-lg"
                                      >
                                            Buy Expanded Version – $19
                                                </button>
                                                  )
                                                  }