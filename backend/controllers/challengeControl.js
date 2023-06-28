const User = require('../models/User');
const Challenge = require('../models/Challenge');

const createChallenge = async (req, res) => {
    try {
        const challengeData = req.body.challengeData;
        const { name, description, theme, tasks, participantIds, creatorId } = challengeData;
        console.log(name, description, theme, tasks, participantIds, creatorId);

        const creator = await User.findById(creatorId);

        // Creating challenge object
        const newChallenge = new Challenge({ name, creator });

        if (creator.challenges) {
            creator.challenges.push(newChallenge); // Only gives ID, use populate() to return the whole object
        } else {
            creator.challenges = [];
        }
        await creator.save();

        //newChallenge.participants.push(creator);

        // Adding challenge to all participants
        if (participantIds) {
            participantIds.forEach(async participantId => {
                const participant = await User.findById(participantId);
                participant.challenges.push(newChallenge);
                await participant.save();

                newChallenge.participants.push(participant);
            });
        }


        await newChallenge.save()

        res.status(201).json({ message: 'Challenge created successfully', challenge: newChallenge });

    } catch (error) {
        console.error('Error creating challenge:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { createChallenge };