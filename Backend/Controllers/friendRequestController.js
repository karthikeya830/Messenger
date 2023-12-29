const FriendRequest = require('../Models/FriendRequest')

const sendFriendRequest = async (req, res) => {
    try {
        const { requesterId, receiverId } = req.body;

        const newRequest = new FriendRequest({
            requesterId,
            receiverId
        });

        await newRequest.save();

        res.status(201).json({ message: 'Friend request sent successfully' });
    } catch (error) {
        console.error('Error sending friend request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getPendingRequests = async (req, res) => {
    try {
        const userId = req.body.userId;

        const pendingRequests = await FriendRequest.find({
            receiverId: userId,
            status: 'pending'
        }).populate("requesterId", "-password") // Assuming requesterId is a reference to the User model

        res.status(200).json(pendingRequests);
    } catch (error) {
        console.error('Error fetching pending friend requests:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const respondToRequest = async (req, res) => {
    try {
        const requestId = req.params.requestId;
        const response = req.body.response;

        const request = await FriendRequest.findById(requestId);

        if (!request) {
            return res.status(404).json({ error: 'Friend request not found' });
        }

        if (request.status !== 'pending') {
            return res.status(400).json({ error: 'Invalid operation on this friend request' });
        }

        request.status = response;
        await request.save();

        res.status(200).json({ message: 'Friend request responded successfully' });
    } catch (error) {
        console.error('Error responding to friend request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { respondToRequest, getPendingRequests, sendFriendRequest }