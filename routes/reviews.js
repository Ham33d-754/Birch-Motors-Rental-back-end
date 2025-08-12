const router = require('express').Router()
const reviewCTRL = require('../controllers/reviews')
const { verfiyToken } = require('../middleware')
// the route starts as (reviews/)

// new review
router.post('/', verfiyToken, reviewCTRL.create_review_post)

// all reviews
router.get('/', verfiyToken, reviewCTRL.all_reviews_get)

// shows review
router.get('/:reviewid', verfiyToken, reviewCTRL.find_reviewId_get)

// updates review
router.put('/:reviewid', verfiyToken, reviewCTRL.update_review_put)

// removes review
router.delete('/:reviewid', verfiyToken, reviewCTRL.delete_review_delete)

module.exports = router
