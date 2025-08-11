const router = require('express').Router()
const reviewCTRL = require('../controllers/reviews')
// the route starts as (reviews/)

// new review
router.post('/', reviewCTRL.create_review_post)

// all reviews
// router.get('/', reviewCTRL.all_reviews_get)

// shows review
// router.get('/:reviewid', reviewCTRL.find_reviewId_get)

// updates review
// router.put('/:reviewid', reviewCTRL.update_review_put)

// removes review
// router.delete('/:reviewid', reviewCTRL.delete_review_delete)

module.exports = router
