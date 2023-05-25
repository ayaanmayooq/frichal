const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { } = require('../controllers/friendControl');


router.post('/requests', async (req, res) => {
    try {
        const { senderId, recipientId } = req.body;

        console.log(req.session.userId);

        // Update sender's document with the friend request
        await User.findByIdAndUpdate(senderId, {
            $push: { sentRequests: recipientId }
        });

        // Update recipient's document with the received friend request
        await User.findByIdAndUpdate(recipientId, {
            $push: { receivedRequests: senderId }
        });

        res.status(200).json({ message: 'Friend request sent successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

module.exports = router;