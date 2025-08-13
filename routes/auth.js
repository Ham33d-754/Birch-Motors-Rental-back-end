// user routes
const router = require('express').Router()
const authController = require('../controllers/auth')
const { verfiyToken } = require('../middleware')

router.post('/signIn', authController.auth_sigin_post)
router.post('/register', authController.auth_register_post)
router.get('/checkSession', verfiyToken, authController.auth_checkSession_get)

module.exports = router
