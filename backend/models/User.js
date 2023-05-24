const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Static function for user register
userSchema.statics.register = async function (email, password) {
    try {
        // Check if user already exists
        const existingUser = await this.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new this({ email, password: hashedPassword });
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