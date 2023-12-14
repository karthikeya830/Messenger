const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const DB = require('./config/db')
DB()
app.get( '/', (req, res) => {
    res.send(`Hello iam starting messenger application`)
} )

app.listen( process.env.PORT , 'listening at port 5000' );