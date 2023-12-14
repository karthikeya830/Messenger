const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB)
        console.log( "connected to database" )
    }
    catch(error){
        console.log( error )
    }
}

module.exports = connectDB