const router = require('express').Router()
const garageController = require('../controllers/garage')

router.get('/',garageController.garage_get_all)
router.get('/:id',garageController.garage_get_by_id)
router.post('/',garageController.garage_create_post)

module.exports = router