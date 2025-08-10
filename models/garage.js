const mongoose = require('mongoose')

const garageSchema = new mongoose.Schema({
  name: {type: String, required: true},
  location: {type: String, required: true}
})

const Garage = mongoose.model('Garage', garageSchema)

module.exports = Garage
