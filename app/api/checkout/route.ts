import Stripe from "stripe"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
  })

  export async function POST() {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
            line_items: [
                  {
                          price_data: {
                                    currency: "usd",
                                              product_data: {
                                                          name: "Attention Framework Expanded",
                                                                    },
                                                                              unit_amount: 1900,
                                                                                      },
                                                                                              quantity: 1,
                                                                                                    },
                                                                                                        ],
                                                                                                            mode: "payment",
                                                                                                                success_url: "https://yourdomain.com/success",
                                                                                                                    cancel_url: "https://yourdomain.com",
                                                                                                                      })

                                                                                                                        return Response.json({ url: session.url })
                                                                                                                        }