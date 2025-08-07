// user routes
const router = require('express').Router()
const authController = require('../controllers/auth')

router.post('/signIn', authController.auth_sigin_post)
router.post('/register', authController.auth_register_post)
module.exports = router
