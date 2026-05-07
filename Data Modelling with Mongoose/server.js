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

app.get('/About' , (req, res) => {
    res.send("Wellcome to About us ")
})

app.listen(port , () => {
    console.log(`app is running on http://localhost:${port}`)
})