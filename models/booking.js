const mongoose = require('mongoose')

//
const bookingSchema = new mongoose.Schema({
  carType: {
    type: String,
    enum: ['Check', 'Card', 'Third Party']
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
