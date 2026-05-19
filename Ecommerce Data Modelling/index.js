import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/' , (req , res) => {
    res.send("App is Running");
})

app.listen(PORT , () => {
    console.log(`App is Running on https://localhost:${PORT}`);
})