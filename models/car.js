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
<<<<<<< HEAD
  image: {
    type: String,
    default: 'https://share.google/images/uUMJr6vuzd5Q8nzlRs'
  },
  garage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Garage'
  }
})
=======
  {
    timestamps: true
  }
)
>>>>>>> 3f7390255d2a99b6a8fc887ac2eabc8dc5376740
const Car = mongoose.model('Car', carSchema)

module.exports = Car
