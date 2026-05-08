import express from 'express';
import 'dotenv/config';

const app = express();

const port = process.env.PORT;

app.get('/' , (req , res) => {
    res.send("Express server is working ")
})

app.get('/signup' , (req, res) => {
    res.send("SignUp to access to full content")
})

app.get('/signin' , (req, res) => {
    res.send("Signin with Google")
})

app.get('/login' , (req, res) => {
    res.send("login with X(formarly twitter)")
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