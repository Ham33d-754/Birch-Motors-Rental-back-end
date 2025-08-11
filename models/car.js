// car model
const mongoose = require('mongoose')

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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHATkSEcaE51j-kihbdfALKpWZKNlRLS1tLw&s'
  },
  garage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Garage'
  },
  // add to ERD 
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
