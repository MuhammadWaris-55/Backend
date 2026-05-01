const express = require('express');

const app = express();

const port = 3000

app.get('/' , (req , res) => {
    res.send("Hello World!")
}) //by this method we can send get request on any route

app.get('/waris' , (req , res) => {
    res.send("WarisCodes")
})

//Now listen to the port to make our server 

app.listen(port , () =>{
    console.log(`App Listening on port ${port}`)
})

//This is a basic express server