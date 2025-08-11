const Review = require('../models/review')
const Car = require('../models/car')
require('dotenv').config()

// new review
const create_review_post = async (req, res) => {
  try {
    const { rating, comment, car } = req.body

    // Check body values
    if (!rating || !comment || !car) {
      console.log('payMethod and car are required')
      return res.status(400).send({ error: 'payMethod and car are required' })
    }

    // Ensure car exists
    const carCheck = await Car.findById(car)
    if (!carCheck) {
      console.log('Car not found')
      return res.status(404).send({ error: 'Car not found' })
    }

    // Check user id
    const userId = req.body.user
    if (!userId) {
      return res.status(401).send({ error: 'User not authenticated' })
    }

    // Create review
    const review = await Review.create({
      rating,
      comment,
      user: userId
    })


    res.status(201).send(review)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Failed to create review' })
  }
}

module.exports = {
  create_review_post
}
