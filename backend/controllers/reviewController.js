const Review = require('../models/review.js');
const Driver = require('../models/driver.js');
const User = require('../models/user.js');
const Booking =require('../models/booking.js')

const createReview = async (req, res) => {
  try {
    const { rating, reviewText } = req.body;
    const bookingId = req.params.bookingId; // Use bookingId to fetch booking
    const userId = req.user.userId; // user ID is added to the request object by authentication middleware


    // Validate the booking
    const booking = await Booking.findById(bookingId).populate('driver');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Validate the user
    const reviewer = await User.findById(userId);
    if (!reviewer) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create the review
    const newReview = new Review({
      rating,
      reviewText,
      reviewer: userId,
      reviewed: booking.driver._id,// Use driver from booking
    });

    // Save the review
    const savedReview = await newReview.save();

    res.status(201).json({ message: 'Review created successfully', review: savedReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating review' });
  }
};

const getReviewsForDriver = async (req, res) => {
  try {
    const { driverId } = req.params;

    // Validate the driver
    const reviewed = await Driver.findById(driverId);
    if (!reviewed) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    const reviews = await Review.find({ reviewed: driverId })
    
      .populate('reviewer', 'name email') // Populate reviewer details
      .populate('reviewed', 'name') // Populate reviewed details
      .select('rating reviewText reviewer createdAt'); // Select desired fields

      if (reviews.length === 0) {
        return res.status(404).json({ message: 'There are no reviews' });
      }
  
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching reviews for driver' });
  }
};

module.exports = {
  createReview,
  getReviewsForDriver,
};
