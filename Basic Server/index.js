const express = require('express');
require('dotenv').config()

const app = express();

// const port = 3000

//Making Routes

app.get('/', (req, res) => {  //This is Home Route
    res.send("Hello World!")
}) //by this method we can send get request on any route

app.get('/waris' , (req , res) => {
    res.send("<h1>WarisCodes</h1>")
})

app.get('/login', (req, res) => {
    res.send("Login With Google")
})

app.get('/about', (req, res) => {
    res.send("<h2>Welcome To About us</h2>")
})

//Now listen to the port to make our server 

app.listen(process.env.PORT, () => {
    console.log(`App Listening on port ${port}`)
})

//This is a basic express server