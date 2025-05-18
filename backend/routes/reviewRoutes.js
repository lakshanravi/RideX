const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/createReview/:bookingId', authenticateToken, reviewController.createReview);
router.get('/getReviewsForDriver', authenticateToken,reviewController.getReviewsForDriver);

module.exports = router;
