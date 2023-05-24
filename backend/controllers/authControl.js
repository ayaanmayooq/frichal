const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Call the signup static function on the User model
        const newUser = await User.register(email, password);

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Call the login static function on the User model
        const user = await User.login(email, password);

        req.session.userId = user._id;
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(401).json({ message: error.message });
    }
}

const requireAuth = (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

const logoutUser = (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.error('Logout error:', error);
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.json({ message: 'Logout successful' });
    });
}

module.exports = { registerUser, loginUser, requireAuth, logoutUser };