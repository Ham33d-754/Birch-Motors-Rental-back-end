const router = require('express').Router()
const userController = require('../controllers/user')
const { verfiyToken } = require('../middleware')

router.get('/:userId', verfiyToken, userController.user_getUser_get)
router.get('/', verfiyToken, userController.user_getAll_get)
router.put('/:userId', verfiyToken, userController.user_editProfile_put)

module.exports = router
