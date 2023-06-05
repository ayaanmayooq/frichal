const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const config = require('./config');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect(config.mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });

// Create the MongoDB session store using the existing MongoDB connection
const sessionStore = new MongoDBStore({
    uri: config.mongodbURI,
    collection: 'sessions', // Collection name for storing sessions
    autoRemove: false // Disable automatic session removal
});

// Session middleware
app.use(
    session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: false,
        store: sessionStore, // Use the session store
        cookie: {
            // imprtant config (very important)
            maxAge: 3 * 60 * 60 * 1000, // session expiration time (in milliseconds)
            secure: false, // true for HTTPS
        },
    })
);

// Middleware
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use(function (req, res, next) {
    // To keep track of api calls
    console.log(`${req.method} ${req.url}`);

    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    } else {
        next();
    }
});

app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const friendRoutes = require('./routes/friendRoutes')
app.use('/api/friend', friendRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
