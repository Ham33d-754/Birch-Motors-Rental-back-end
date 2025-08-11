// car model
const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    carType: {
      type: String,
      enum: [
        'Sedan',
        'SUV',
        'Pickup Truck',
        'Sport',
        'Minivans',
        'Convertible',
        'Luxury'
      ],
      default: 'Sedan'
    },
    image: {
      type: String,
      default: 'https://share.google/images/uUMJr6vuzd5Q8nzlRs'
    },
    garage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Garage'
    }
  },
  {
    timestamps: true
  }
)
const Car = mongoose.model('Car', carSchema)

module.exports = Car
