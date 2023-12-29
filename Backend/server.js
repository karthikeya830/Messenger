const express = require('express')
const dotenv = require('dotenv')
const userRoutes = require('./Routes/userRoutes')
const chatRoutes = require('./Routes/chatRoutes')
const requestRoutes = require('./Routes/RequestRoutes')
const cors = require('cors');

const app = express()
app.use(cors())
dotenv.config()
const DB = require('./config/db')
DB()
app.use(express.json())
app.get( '/', (req, res) => {
    res.send(`Hello iam starting messenger application`)
} )

app.use('/api/user', userRoutes )
app.use('/api/chat', chatRoutes )
app.use('/api/request', requestRoutes )
app.listen( process.env.PORT , () => "listening at port 5000" );
