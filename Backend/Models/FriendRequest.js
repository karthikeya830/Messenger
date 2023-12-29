const mongoose = require('mongoose')

const friendRequest = mongoose.Schema({
    requesterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'declined'],
        default: 'pending'
    }
},
    {
        timestamps: true
    }
)

const FriendRequest = mongoose.model("FriendRequest", friendRequest)
module.exports = FriendRequest