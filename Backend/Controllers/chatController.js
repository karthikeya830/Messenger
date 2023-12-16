const express = require('express')
const Chat = require('../Models/Chat')
const User = require('../Models/User')
const Message = require('../Models/Message')

const accessChat = async (req, res) => {
    const { userId } = req.body
    // console.log(userId);
    if (!userId) {
        res.status(400)
        throw new Error("no user founded")
    }
    try {
        // console.log("finding chat");
        var isChat = await Chat.find({
            isGroupChat: false,
            $and: [
                { users: { $elemMatch: { $eq: req.user._id } } },
                { users: { $elemMatch: { $eq: userId } } }
            ]
        }).populate("users", "-password").populate("latestMessage")
        // console.log("found chat");
        // console.log(isChat);
        isChat = await User.populate(isChat, {
            path: "latestMessage.sender",
            select: "name pic email"
        })
        // console.log("populating chat");
        // console.log(isChat);
        if (isChat.length !== 0) {
            console.log("chat is already created");
            // console.log("sending chat");
            res.send(isChat[0])
        }
        else {
            // console.log("creating chat");
            var chatData = {
                chatName: "sender",
                isGroupChat: false,
                users: [req.user._id, userId]
            }
            const createdChat = await Chat.create(chatData)
            const fullChat = await Chat.findOne({ _id: createdChat._id }).populate("users", "-password")
            res.send(fullChat)
        }

    }

    catch (error) {
        res.status(400)
        throw new Error("error" + error)
    }
}

const fetchChats = async (req, res) => {
    try {
        let chats = await Chat.find({ users: { $in: [req.user._id] } }).populate("users", "-password").sort({updated : -1})
        res.send(chats)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { accessChat, fetchChats }