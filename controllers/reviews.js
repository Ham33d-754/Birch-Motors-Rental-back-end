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
    const userId = res.locals.payload.id

    // Create review
    const review = await Review.create({
      rating,
      comment,
      car,
      user: userId
    })
    res.status(201).send({ msg: 'created successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Failed to create review' })
  }
}

// shows review
const find_reviewId_get = async (req, res) => {
  try {
    const carId = req.params.carId
    const review = await Review.find({ car: carId })

    // check for review
    if (!review) return res.status(404).send({ error: 'review not found' })

    res.status(200).send(review)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Failed to get review' })
  }
}

// all reviews
const all_reviews_get = async (req, res) => {
  try {
    const reviews = await Review.find()
    return res.status(200).send({ reviews })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Failed to show reviews' })
  }
}

// updates review
const update_review_put = async (req, res) => {
  try {
    // Check  for updating car
    if (req.body.car) {
      const carExists = await Review.findById(req.body.car)
      if (!carExists) {
        return res.status(404).send({ error: 'car not found' })
      }
    }
    const review = await Review.findByIdAndUpdate(
      req.params.reviewid,
      req.body,
      { new: true }
    )

    return res.status(200).send(review)
  } catch (error) {
    res.status(500).send({ error: 'Failed to update review' })
    console.log(error)
  }
}

// removes review
const delete_review_delete = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.reviewid)
    res.status(200).send(review)
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete review' })
  }
}

module.exports = {
  create_review_post,
  find_reviewId_get,
  all_reviews_get,
  update_review_put,
  delete_review_delete
}
