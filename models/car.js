// car model
const carSchema = new mongoose.Schema({
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
    default:
      'https://www.seat.com.mt/content/dam/public/seat-website/carworlds/compare/default-image/ghost.png'
  },
  // add to ERD
  pricePerHour: {
    type: Number,
    default: 1
  },
  garage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Garage'
  },
  Rented: {
    type: Boolean,
    default: false
  },
  reviews: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
      }
    ]
  }
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car
