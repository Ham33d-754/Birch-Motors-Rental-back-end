const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  payMethod: {
    type: String,
    enum: ['Cash', 'Card']
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  hours: {
    type: String
  },
  amount: {
    type: String
  }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
