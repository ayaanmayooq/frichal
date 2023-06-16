const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ''
    },
    sentRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    receivedRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    challenges: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge'
    }]
});

// Static function for user register
userSchema.statics.register = async function (username, email, password, firstName, lastName) {
    try {
        // Check if user already exists
        const existingUser = await this.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new this({ username, email, password: hashedPassword, firstName, lastName });
        await newUser.save();

        return newUser;
    } catch (error) {
        throw error;
    }
};

// Static function for user login
userSchema.statics.login = async function (email, password) {
    try {
        // Find the user by email
        const user = await this.findOne({ email });
        if (!user) {
            throw new Error('Email not registered');
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Incorrect Password');
        }

        return user;
    } catch (error) {
        throw error;
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;