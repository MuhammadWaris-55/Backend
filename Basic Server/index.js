const express = require('express');

const app = express();

const port = 3000

//Making Routes

app.get('/', (req, res) => {
    res.send("Hello World!")
}) //by this method we can send get request on any route

// app.get('/waris' , (req , res) => {
//     res.send("WarisCodes")
// })

app.get('/login', (req, res) => {
    res.send("Login With Google")
})

app.get('/about', (req, res) => {
    res.send("Welcome To About us")
})

//Now listen to the port to make our server 

app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
})

//This is a basic express server