const router = require('express').Router()
const garageController = require('../controllers/garage')
const { verfiyToken } = require('../middleware')

router.get('/', verfiyToken, garageController.garage_get_all)
router.get('/:id', verfiyToken, garageController.garage_get_by_id)
router.post('/', verfiyToken, garageController.garage_create_post)
router.put('/:id', verfiyToken, garageController.garage_update_put)
router.delete('/:id', verfiyToken, garageController.garage_delete)

module.exports = router
