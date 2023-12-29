const User = require('../Models/User')

const getAllUsers = async (req, res) => {
    try {
        const s = req.query.search ?
            {
                $or: [
                    { name: { $regex: req.query.search, $options: "i" } },
                    // { email: { $regex: req.query.search, $options: "i" } }
                ]
            }
            :
            {}
        
            // const users = await User.find(s)
            const users = await User.find(s).find({_id : {$ne : req.user._id }})
            res.send(users)
    }
    catch(e) {
        console.log( "error" + e )
    }
}

const getUserById = async () => {

}

const deleteUser = async () => {

}

const updateUser = async () => {

}

const createUser = async () => {

}

const controllers = { getAllUsers, getUserById, deleteUser, updateUser, createUser }

module.exports = controllers