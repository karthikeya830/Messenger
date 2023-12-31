const express = require('express');
const router = express.Router();

const friendRequestController = require('../Controllers/friendRequestController');
const protect = require('../middleware/protect');

router.post('/send-request', protect, friendRequestController.sendFriendRequest);
router.post('/get-requests', protect,  friendRequestController.getPendingRequests);
router.delete('/reject-request', protect , friendRequestController.deleteFriendRequest);
router.put('/', friendRequestController.respondToRequest);

module.exports = router;