const router = require('express').Router()
const carCTRL = require('../controllers/cars')

// shows car
router.get('/:carid', carCTRL.find_carId_get)

// new Car
router.post('/new', carCTRL.create_car_post)

// removes car
router.delete('/:carid', carCTRL.delete_car_delete)

// updates car
// router.get('/:carid/edit', carCTRL.edit_car_get)
// router.put('/:carid', carCTRL.update_car_put)

module.exports = router
