const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/bookings/:hireId', authenticateToken, bookingController.createBooking);

router.get('/bookings/user', authenticateToken, bookingController.getBookingsByUser);
router.get('/bookings/driver',authenticateToken,  bookingController.getBookingsByDriver);

module.exports = router;
