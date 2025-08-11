const mongoose = require('mongoose')

//
const bookingSchema = new mongoose.Schema({
  payMethod: {
    type: String,
    enum: ['Check', 'Card', 'Third Party']
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
