// car model
const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    isRented: {
      type: Boolean,
      default: false
    },
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
      default:
        'https://www.seat.com.mt/content/dam/public/seat-website/carworlds/compare/default-image/ghost.png'
    },
    pricePerHour: {
      type: Number,
      default: 1
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
