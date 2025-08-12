const router = require('express').Router()
const bookCTRL = require('../controllers/bookings')
const { verfiyToken } = require('../middleware')
// the route starts as (bookings/)

// all bookings
router.get('/', verfiyToken, bookCTRL.all_bookings_get)

// shows booking
router.get('/:bookingid', verfiyToken, bookCTRL.find_bookingId_get)

// new booking
router.post('/', verfiyToken, bookCTRL.create_booking_post)

// updates booking
router.put('/:bookingid', verfiyToken, bookCTRL.update_booking_put)

// removes booking
router.delete('/:bookingid', verfiyToken, bookCTRL.delete_booking_delete)

module.exports = router
