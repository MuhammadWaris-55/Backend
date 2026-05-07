import express from 'express';
import 'dotenv/config';

const app = express();

const port = process.env.PORT;

app.get('/' , (req , res) => {
    res.send("Express server is working ")
})

app.listen(port , () => {
    console.log(`app is running on http://localhost:${port}`)
})