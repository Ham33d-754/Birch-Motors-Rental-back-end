const { verfiyToken } = require('../middleware')
const router = require('express').Router()
const stripCtrtl = require('../controllers/strip')
router.get('/', verfiyToken, stripCtrtl.strip_getPublishableKey_get)
router.post('/create-payment', verfiyToken, stripCtrtl.strip_createPayment_post)
module.exports = router
