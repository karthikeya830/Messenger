const userModel = require('../Models/User')
const generateToken = require('../config/JWTGeneration')

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400)
            throw new Error("Please enter all fields")
        }
        const userExist = await userModel.findOne({ email: email })
        if (!userExist) {
            res.status(400)
            throw new Error("User does not exists")
        }
        if (password === userExist.password) {
            res.status(201).json({
                name: userExist.name,
                email: userExist.email,
                _id: userExist._id,
                pic: userExist.pic,
                token: generateToken(userExist._id)
            })
        }
        else{
            res.status( 400 )
            throw new Error( " Incorrect password " )
        }

    }
    catch (e) {
        console.log("error" + e)
    }
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password, pic } = req.body
        if (!name || !email || !password) {
            res.status(400)
            throw new Error("Please enter all fields")
        }
        const userExist = await userModel.findOne({ email: email })
        if (userExist) {
            res.status(400)
            throw new Error("User already exists")
        }
        const newUser = { name, email, password, pic }
        const createdUser = await userModel.create(newUser)
        res.status(201).json({
            name: createdUser.name,
            email: createdUser.email,
            _id: createdUser._id,
            pic: createdUser.pic,
            token: generateToken(createdUser._id)
        })


    }
    catch (e) {
        console.log("error" + e)
    }
}

module.exports = { registerUser, loginUser }