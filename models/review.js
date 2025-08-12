const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  rating: { type: Number },
  comment: { type: String },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
