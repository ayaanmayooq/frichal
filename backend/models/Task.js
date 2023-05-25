const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    challenge: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    taskName: { type: String, required: true },
    dates: [{ type: Date, required: true }],
    isCompleted: { type: Boolean, default: false },
    // Other task fields
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
