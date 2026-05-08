import express from 'express';
import 'dotenv/config';

const app = express();

//PORT defined in .env file
const port = process.env.PORT;

// Making Routes
app.get('/' , (req , res) => {
    res.send("Express server is working ")
})

app.get('/signup' , (req, res) => {
    res.send("SignUp to access to full content")
})

app.get('/About' , (req, res) => {
    res.send("Wellcome to About us ")
})

app.get('/Contact' , (req, res) => {
    res.send("Connect With us On Github")
})

app.listen(port , () => {
    console.log(`app is running on http://localhost:${port}`)
})