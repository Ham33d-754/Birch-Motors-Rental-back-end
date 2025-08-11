const router = require('express').Router()
const carCTRL = require('../controllers/cars')
// the route starts as (cars/)

// all cars
router.get('/', carCTRL.all_cars_get)
router.get('/garage/:garageId', carCTRL.all_garageCars_get)

// shows car
router.get('/:carid', carCTRL.find_carId_get)

// new Car
router.post('/', carCTRL.create_car_post)

// updates car
router.put('/:carid', carCTRL.update_car_put)

// removes car
router.delete('/:carid', carCTRL.delete_car_delete)

module.exports = router
