const router = require('express').Router()
const garageController = require('../controllers/garage')

router.get('/',garageController.garage_get_all)
router.get('/:id',garageController.garage_get_by_id)
router.post('/',garageController.garage_create_post)
router.put('/:id',garageController.garage_update_put)
router.delete('/:id',garageController.garage_delete)

module.exports = router