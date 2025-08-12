const mongoose = require('mongoose')

const garageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  // add to ERD
  cars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Car' }]
})

const Garage = mongoose.model('Garage', garageSchema)

module.exports = Garage
