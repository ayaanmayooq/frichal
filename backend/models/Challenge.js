const mongoose = require('mongoose');

// Define the Challenge schema
const challengeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    description: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    isPublic: { type: Boolean, default: false },
    // Other challenge fields
});

// Create the Challenge model
const Challenge = mongoose.model('Challenge', challengeSchema);

// Export the Challenge model
module.exports = Challenge;
