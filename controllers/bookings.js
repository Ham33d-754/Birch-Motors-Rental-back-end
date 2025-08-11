const Booking = require('../models/booking')
const Car = require('../models/car')
require('dotenv').config()

// new booking
const create_booking_post = async (req, res) => {
  try {
    const { payMethod, car } = req.body

    // Check body values
    if (!payMethod || !car) {
      console.log('payMethod and car are required')
      return res.status(400).send({ error: 'payMethod and car are required' })
    }

    // Ensure car exists
    const carCheck = await Car.findById(car)
    if (!carCheck) {
      console.log('Car not found')
      return res.status(404).send({ error: 'Car not found' })
    }

    // Check user id
    const userId = req.body.user
    if (!userId) {
      return res.status(401).send({ error: 'User not authenticated' })
    }

    // Create booking
    const booking = await Booking.create({
      payMethod,
      car,
      user: userId
    })

    // Populate sent response
    // const populatedBooking = await booking.populate(['car', 'user'])
    res.status(201).send(booking)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Failed to create booking' })
  }
}

// shows booking
const find_bookingId_get = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingid).populate([
      'car',
      'user'
    ])

    // check for booking
    if (!booking) return res.status(404).send({ error: 'Booking not found' })

    res.status(200).send(booking)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Failed to get booking' })
  }
}

// all bookings
const all_bookings_get = async (req, res) => {
  try {
    const bookings = await Booking.find()
    // .populate(['car', 'user'])
    return res.status(200).send({ bookings })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Failed to show bookings' })
  }
}

// updates booking
const update_booking_put = async (req, res) => {
  try {
    // Check  for updating car
    if (req.body.car) {
      const carExists = await Car.findById(req.body.car)
      if (!carExists) {
        return res.status(404).send({ error: 'Car not found' })
      }
    }
    const booking = await Booking.findByIdAndUpdate(
      req.params.bookingid,
      req.body,
      { new: true }
    )
    // .populate(['car', 'user'])

    return res.status(200).send(booking)
  } catch (error) {
    res.status(500).send({ error: 'Failed to update booking' })
    console.log(error)
  }
}

// removes booking
const delete_booking_delete = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.bookingid)
    res.status(200).send(booking)
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete booking' })
  }
}

module.exports = {
  delete_booking_delete,
  create_booking_post,
  find_bookingId_get,
  all_bookings_get,
  update_booking_put
}
