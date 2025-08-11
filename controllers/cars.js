const Car = require('../models/car')
require('dotenv').config()

// removes car
const delete_car_delete = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.carid)
    res.status(200).send(car)
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete car' })
  }
}

// shows car
const find_carId_get = async (req, res) => {
  try {
    const car = await Car.findById(req.params.carid)
    console.log(car)
    res.status(200).send({ car })
  } catch (error) {
    res.status(500).send({ error: 'Failed to get car' })
    console.log(error)
  }
}

// new Car
const create_car_post = async (req, res) => {
  try {
    const { image } = req.body
    if (!image) {
      req.body.image =
        'https://www.seat.com.mt/content/dam/public/seat-website/carworlds/compare/default-image/ghost.png'
    }
    const car = await Car.create({ ...req.body })

    res.status(200).send({ msg: 'car added successfully', car })
  } catch (error) {
    res.status(500).send({ error: 'Failed to create car' })
    console.log(error)
  }
}

// all cars
const all_cars_get = async (req, res) => {
  try {
    const cars = await Car.find()
    return res.status(200).send({ cars })
  } catch (error) {
    res.status(500).send({ error: 'Failed to show cars' })
    console.log(error)
  }
}
const all_garageCars_get = async (req, res) => {
  const garageId = req.params.garageId
  const cars = await Car.find({ garage: garageId })
  if (cars) {
    return res.status(200).send({ cars })
  }
  return res.status(401).send({ msg: 'unauthorized' })
}
// updates car
const update_car_put = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.carid, req.body, {
      new: true
    })
    return res.status(200).send(car)
  } catch (error) {
    res.status(500).send({ error: 'Failed to update car' })
    console.log(error)
  }
}

module.exports = {
  delete_car_delete,
  create_car_post,
  find_carId_get,
  all_cars_get,
  update_car_put,
  all_garageCars_get
}
