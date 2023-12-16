const express = require('express')
const chatController = require( '../Controllers/chatController' )
const protect = require('../middleware/protect')
const router = express.Router()

router.post( '/' , protect, chatController.accessChat )
router.get( '/' , protect , chatController.fetchChats )
// router.post( '/group' , protect , userController.createGroupChat )
// router.put( '/renameGroup' , protect , userController.renameGroupChat )
// router.put( '/removeUserFromGroup' , protect , userController.removeUserFromGroup )
// router.put( '/addUserToGroup' , protect , userController.addUserToGroup )

module.exports = router