const express = require('express')
const auth = require( '../Controllers/auth' )
const userController = require( '../Controllers/userController' )
const protect = require('../middleware/protect')
const router = express.Router()

router.post( '/login' , auth.loginUser )
router.post( '/register' , auth.registerUser )
router.get( '/' , protect , userController.getAllUsers )

module.exports = router