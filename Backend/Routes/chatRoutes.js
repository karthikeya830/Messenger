const express = require('express')
const chatController = require( '../Controllers/chatController' )
const protect = require('../middleware/protect')
const router = express.Router()

router.post( '/' , protect, chatController.accessChat )
router.get( '/' , protect , chatController.fetchChats )
router.post( '/group' , protect , chatController.createGroupChat )
router.put( '/renameGroup' , protect , chatController.renameGroupChat )
router.put( '/addUserToGroup' , protect , chatController.addUserToGroup )
router.put( '/removeUserFromGroup' , protect , chatController.removeUserFromGroup )

module.exports = router