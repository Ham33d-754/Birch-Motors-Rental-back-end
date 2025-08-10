const Booking = require('../models/booking')
require('dotenv').config()

// all bookings
const all_bookings_get = async (req, res) => {
  try {
    const bookings = await Booking.find()
    return res.status(200).send({ bookings })
  } catch (error) {
    res.status(500).send({ error: 'Failed to show bookings' })
    console.log(error)
  }
}

// new booking
const create_booking_post = async (req, res) => {
  try {
    const booking = await Booking.create({ ...req.body })
    res.status(200).send(booking)
  } catch (error) {
    res.status(500).send({ error: 'Failed to create booking' })
    console.log(error)
  }
}

// shows booking
const find_bookingId_get = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingid)
    res.status(200).send(booking)
  } catch (error) {
    res.status(500).send({ error: 'Failed to get booking' })
    console.log(error)
  }
}

// updates booking
const update_booking_put = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.bookingid, req.body, {
      new: true
    })
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
