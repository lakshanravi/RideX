const Booking = require('../models/booking');
const Hire = require('../models/hire');
const User = require('../models/user');


const createBooking = async (req, res) => {
  try {
    const { seatsBooked } = req.body;
    const hireId = req.params.hireId; // Access the hire ID from the route parameter
    const userId = req.user.userId; // Access the user ID from the decoded token

    // Validate the hire
    const hire = await Hire.findById(hireId).populate('driver'); // Populate the driver reference
    if (!hire) {
      return res.status(404).json({ message: 'Hire not found' });
    }
      // Check if the hire has an associated driver
      if (!hire.driver) {
        return res.status(400).json({ message: 'Driver information not found for this hire' });
      }
  
    // Validate the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check seat availability
    if (hire.noOfSeats < seatsBooked) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }

    // Create the booking
    const newBooking = new Booking({
      user: userId,
      hire: hireId,
      driver: hire.driver._id, // Reference the driver from the hire object
      seatsBooked,
    });

    // Save the booking
    const savedBooking = await newBooking.save();

    // Update the hire's seat count
    hire.noOfSeats -= seatsBooked;
    await hire.save();

    res.status(201).json({ message: 'Booking created successfully', booking: savedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating booking' });
  }
};

module.exports = {
  createBooking,
};
    
const getBookingsByUser = async (req, res) => {
  try {
    const userId = req.user.userId;
    //book krpu user and book krpu hire ek penwi
    const bookings = await Booking.find({ user: userId }).populate('hire').populate({path:'user',select : 'firstname email'});  //book krpu hire ekai user wai penwi
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving bookings' });
  }
};

const getBookingsByDriver = async (req, res) => {
  try {
    const { driverId } = req.user;
    const bookings = await Booking.find({ driver: driverId }).populate('hire').populate({path:'user',select : 'firstname email'});
    res.json(bookings);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving bookings' });
  }
};


module.exports = {
  createBooking,
  getBookingsByUser,
  getBookingsByDriver,
};
