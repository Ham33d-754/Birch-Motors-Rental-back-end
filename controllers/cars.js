const Car = require('../models/car')
require('dotenv').config()

// removes car
const delete_car_delete = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.carid)
    res.status(200).send(car)
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete ticket' })
  }
}
// shows car

const find_carId_get = async (req, res) => {
  try {
    const car = await Car.findById(req.params.carid)
    res.status(200).send(car)
  } catch (error) {
    res.status(500).send({ error: 'Failed to get ticket' })
  }
}
// new Car

const create_car_post = async (req, res) => {
  try {
    const car = await Car.create({ ...req.body })
    res.status(200).send(car)
  } catch (error) {
    res.status(500).send({ error: 'Failed to create car' })
  }
}

// updates car

const edit_car_get = async (req, res) => {
  try {
  } catch (error) {}
}
// updates car

const update_car_put = async (req, res) => {
  try {
  } catch (error) {}
}

module.exports = {
  delete_car_delete,
  create_car_post,
  find_carId_get
}
