import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: '2024-09-30.acacia',
  typescript: true,
})

export default stripe
