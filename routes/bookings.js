const router = require('express').Router()
const bookCTRL = require('../controllers/bookings')
// the route starts as (bookings/)

// all bookings
router.get('/', bookCTRL.all_bookings_get)

// shows booking
router.get('/:bookingid', bookCTRL.find_bookingId_get)

// new booking
router.post('/', bookCTRL.create_booking_post)


// updates booking
router.put('/:bookingid', bookCTRL.update_booking_put)

// removes booking
router.delete('/:bookingid', bookCTRL.delete_booking_delete)

module.exports = router
