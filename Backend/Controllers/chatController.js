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
        let chats = await Chat.find({ users: { $in: [req.user._id] } }).populate("users", "-password").sort({ updated: -1 })
        res.send(chats)
    }
    catch (err) {
        console.log(err)
    }
}

const createGroupChat = async (req, res) => {
    try {
        var { users, name } = req.body;
        users.push(req.user._id)
        const newChat = await Chat.create({ ...req.body, isGroupChat: true, users, chatName: name, groupAdmin: req.user });

        const fullChat = await Chat.findOne({ _id: newChat._id }).populate("users", "-password").populate("groupAdmin", "-password")
        res.status(201).json(fullChat);
    } catch (error) {
        console.log('Error in creating group chat');
    }
}

const renameGroupChat = async (req, res) => {
    try {
        const { chatId, chatName } = req.body
        const createdChat = await Chat.findByIdAndUpdate(chatId, { chatName: chatName });
        res.status(200).json(createdChat)
    }
    catch (e) {
        console.log("error" + e)
    }
}

const addUserToGroup = async (req, res) => {
    try {
        const { chatId, userId } = req.body
        const createdChat = await Chat.findByIdAndUpdate(
            chatId,
            {$push : { users : userId } }, {new : true}
        ).populate("users", "-password").populate("groupAdmin", "-password")
        res.status(200).json(createdChat)
    }
    catch (e) {
        console.log("error" + e)
    }
}

const removeUserFromGroup = async (req, res) => {
    try {
        const { chatId, userId } = req.body
        const removedChat = await Chat.findByIdAndUpdate(
            chatId,
            {$pull : { users : userId } }, {new : true}
        ).populate("users", "-password").populate("groupAdmin", "-password")
        res.status(200).json(createdChat)
    }
    catch (e) {
        console.log("error" + e)
    }
}

module.exports = { accessChat, fetchChats, createGroupChat, renameGroupChat, addUserToGroup, removeUserFromGroup }