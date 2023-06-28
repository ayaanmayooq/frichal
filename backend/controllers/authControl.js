const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const { username, email, password, firstName, lastName } = req.body;
        console.log(req.body)

        // Call the signup static function on the User model
        const newUser = await User.register(username, email, password, firstName, lastName);

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
    if (req.session.userId) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
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

const authUser = (req, res) => {
    // Check if the user is authenticated by verifying the session
    if (req.session.userId) {
        // User is authenticated, proceed with the protected operation
        res.json({ message: 'Protected route accessed.' });
    } else {
        // User is not authenticated, send an unauthorized response
        res.status(401).json({ error: 'Unauthorized access.' });
    }
}

const sessionLogin = async (req, res) => {
    if (req.session.userId) {
        res.status(200).json({ message: 'Login with session successful' });
    } else {
        console.error('Error logging in with session');
        res.status(401).json({ message: 'Error logging in with session' });
    }
};

const sendUserData = async (req, res) => {
    try {
        // Get the user ID from the session or authentication mechanism
        const userId = req.session.userId;

        // Fetch the user data from the database
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Populate the challenges
        //await user.populate('challenges');

        // Return the user data as the API response
        res.json({ user });
        //res.send(user);

    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const sendUserChallenges = async (req, res) => {
    try {
        // Get the user ID from the session or authentication mechanism
        const userId = req.session.userId;

        // Fetch the user data from the database
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Populate the challenges
        await user.populate('challenges');

        // Return the user data as the API response
        res.json({ challenges: user.challenges });

    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { registerUser, loginUser, requireAuth, logoutUser, authUser, sessionLogin, sendUserData, sendUserChallenges };