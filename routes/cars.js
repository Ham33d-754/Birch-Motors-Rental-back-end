const router = require('express').Router()
const carCTRL = require('../controllers/cars')
const { verfiyToken } = require('../middleware')
// the route starts as (cars/)

// all cars
router.get('/', carCTRL.all_cars_get)
router.get('/garage/:garageId', carCTRL.all_garageCars_get)

// shows car
router.get('/:carid', carCTRL.find_carId_get)

// new Car
router.post('/', verfiyToken, carCTRL.create_car_post)

// updates car
router.put('/:carid', verfiyToken, carCTRL.update_car_put)
router.put('/:carid/rented', verfiyToken, carCTRL.update_carRented_put)

// removes car
router.delete('/:carid', verfiyToken, carCTRL.delete_car_delete)

module.exports = router
