const express = require('express')
const app = express()

app.get( '/', (req, res) => {
    res.send(`Hello iam starting messenger application`)
} )


app.listen( 5000 , 'listening at port 5000' );