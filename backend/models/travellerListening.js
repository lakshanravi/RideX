const mongoose = require('mongoose');

const TravellerListeningSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User model for connect with User model
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now, // Set to current date by default
  },
});

module.exports = mongoose.model('TravellerListening', TravellerListeningSchema);

