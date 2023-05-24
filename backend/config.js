require('dotenv').config();

const config = {
    sessionSecret: process.env.SESSION_SECRET,
    mongodbURI: process.env.MONGODB_URI
};

module.exports = config;
