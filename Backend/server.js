const express = require('express')
const dotenv = require('dotenv')
const userRoutes = require('./Routes/userRoutes')
const chatRoutes = require('./Routes/chatRoutes')


const app = express()
dotenv.config()
const DB = require('./config/db')
DB()
app.use(express.json())
app.get( '/', (req, res) => {
    res.send(`Hello iam starting messenger application`)
} )

app.use('/api/user', userRoutes )
app.use('/api/chat', chatRoutes )
app.listen( process.env.PORT , () => "listening at port 5000" );
