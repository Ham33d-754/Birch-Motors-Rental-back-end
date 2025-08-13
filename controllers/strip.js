require('dotenv').config()
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIP_SECERT_KEY)
exports.strip_getPublishableKey_get = async (req, res) => {
  try {
    const publishableKey = process.env.STRIP_PUBLISHABLE_KEY
    return res.status(200).send(publishableKey)
  } catch (error) {
    res.status(401).send({ msg: 'unauthorized' })
  }
}
exports.strip_createPayment_post = async (req, res) => {
  try {
    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'EUR',
      amount: req.body.amount, // Amount in cents
      automatic_payment_methods: { enabled: true }
    })

    // Send the client secret to the client
    res.status(200).send({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    res.status(500).send({ msg: 'Something went wrong', error: error.message })
  }
}
